require(`dotenv`).config()

// Types
import type { GenericMessage, NestedObject, TranslateQueue, TranslateTask } from '../types'

// Utils
import { delay, loadMessages, getContentToPath, ensureSameOrder, writeFile } from '../utils'
import { Configuration, OpenAIApi } from 'openai'
import * as osPath from 'path'

// Data
const LOCALE_FOLDER = `../../messages`
const EN_MESSAGES = require(`../../messages/en.json`)

/**
 * Check if rate limit is configured in the .env file.
 */
const RATE_LIMIT_PER_MIN = Number(process.env.GPT3_API_RATE_LIMIT_PER_MINUTE)
if (isNaN(RATE_LIMIT_PER_MIN)) {
	throw `Make sure to set .env value "GPT3_API_RATE_LIMIT_PER_MINUTE". This defines how many times the OpenAI API will be hit per minute and spread the translation tasks accordingly. It must be a valid number.`
}

/**
 * Check if API key is configured in the .env file.
 */
const API_KEY = process.env.GPT3_API_KEY
if (!API_KEY) {
	throw `Make sure to set .env value "GPT3_API_KEY". This should be the OpenAI organization API key to access GPT3.`
}

const openai = new OpenAIApi(new Configuration({ apiKey: process.env.GPT3_API_KEY }))

/**
 * Translate and
 *
 * @param source Source language file name (usually "en" for English)
 * @param target Target language file name
 * @param language Target language for prompt (usually "informal <language>")
 */
export default class TranslationClass {
	readonly source: string
	readonly target: string
	readonly language: string
	readonly skipDateInFileName: boolean
	readonly messages: {
		source: NestedObject
		target: NestedObject
	}
	private finishCallback?: () => void
	private queue: TranslateQueue
	private finished: boolean
	private rateLimit: {
		last: number
		delayInMs: number
		check: (extraDelay: number) => Promise<boolean>
	}

	constructor({
		source,
		target,
		language,
		skipDateInFileName = false,
		finishCallback
	}: {
		source: string
		target: string
		language: string
		skipDateInFileName?: boolean
		finishCallback?: () => void
	}) {
		this.source = source
		this.target = target
		this.language = language
		this.skipDateInFileName = skipDateInFileName
		this.finishCallback = finishCallback
		this.messages = {
			source: {},
			target: {}
		}
		this.queue = []
		this.finished = false
		this.rateLimit = {
			last: 0,
			delayInMs: (60 / RATE_LIMIT_PER_MIN) * 1000,
			check: async (extraDelay = 0) => {
				const current = performance.now()
				const difference = current - this.rateLimit.last

				// Delay if rate limit is at risk of being exceeded
				if (this.rateLimit.last && difference < this.rateLimit.delayInMs + extraDelay) {
					const duration = this.rateLimit.delayInMs + extraDelay - difference
					this.rateLimit.last = current + duration
					await delay(duration)
				} else {
					this.rateLimit.last = current
				}

				return true
			}
		}

		this.init()
	}

	async init() {
		const { LOCALE_SOURCE, LOCALE_TARGET } = await loadMessages(this.source, this.target)
		this.messages.source = LOCALE_SOURCE
		this.messages.target = LOCALE_TARGET

		// Update the language to whatever the user is using
		this.messages.target._meta.language = this.language

		this.generateTranslationQueue()
		this.processTranslationQueue()
	}

	async finishTranslation(interrupted = false): Promise<void> {
		if (this.finished) return
		this.finished = true

		// Set up & write to output file
		const date = new Date()
		const timestamp = `${date.getHours()}-${date.getMinutes()}-${date.getSeconds()}`
		const name = this.skipDateInFileName ? this.target : `${this.target}.${timestamp}`

		if (interrupted) {
			console.info(`Translation was interrupted! Writing output file "${name}" now...`)
		} else {
			console.info(`Translation completed! Writing output file "${name}" now...`)
		}

		try {
			writeFile(
				osPath.join(__dirname, `${LOCALE_FOLDER}/${name}.json`),
				ensureSameOrder(this.messages.source, this.messages.target)
			)
			console.info(`Finished. File is now available.`)
			if (this.finishCallback) {
				this.finishCallback()
			} else {
				process.exit()
			}
		} catch (error) {
			console.error(error)
			throw `Failed to write output file.`
		}
	}

	async processTranslationQueue() {
		const tasks = this.queue.length
		if (tasks) {
			console.info(`A total of ${tasks} translation tasks were found. Processing now...`)

			/**
			 * Check progress to update user on progress or finish translation.
			 *
			 * @param value Float (0-1) of the progress being made
			 */
			const checkProgress = (value: number): void => {
				if (value === 1) {
					this.finishTranslation()
					return
				} else {
					console.info(`Translation progresss... (${Math.round(value * 100)}%)`)
				}
			}

			/**
			 * In case an error occurs in the middle of the translation, we'll write a file with
			 * whatever was successful so not everything has to be redone.
			 */
			process.on(`exit`, () => {
				this.finishTranslation(true)
			})

			// Start processing translation queue
			const count = { total: 0, completed: 0 }
			/**
			 * Using "forEach" as it allows us to await the results for the individual task
			 */
			this.queue.forEach(async task => {
				count.total++
				const output = await this.runTranslationTask(task)
				this.setContentFromTask([...task.path], this.messages.target, output, task)
				count.completed++
				checkProgress(count.completed / count.total)
			})
		} else {
			console.info(
				`There were no missing translations found. No further action will be taken.`
			)
			if (this.finishCallback) {
				this.finishCallback()
			} else {
				process.exit()
			}
		}
	}

	/**
	 * Generate translations to be made based on the layout of the .json file (hardcoded to match)
	 */
	generateTranslationQueue() {
		/**
		 * Headers
		 */
		this.generateTranslationTask(
			[`header`, `message`],
			`short game headers informing the player of the game state`
		)
		this.generateTranslationTask(
			[`header`, `description`],
			`short game header description informing the player of the game state`
		)

		/**
		 * Misc.
		 */
		this.generateTranslationTask(
			[`category`],
			`short category titles for game settings (KEEP THEM SHORT)`
		)
		this.generateTranslationTask([`placeholder`])
		this.generateTranslationTask([`language`])
		this.generateTranslationTask([`status`])
		this.generateTranslationTask([`time`], `vue-i18n compliant pluralization entries`)
		this.generateTranslationTask(
			[`count`],
			`vue-i18n compliant pluralization entries (KEEP THEM SHORT)`
		)
		this.generateTranslationTask([`misc`], `buttons and columns`)

		/**
		 * Card related
		 */
		this.generateTranslationTask([`card`], `a Cards Against Humanity card game`)
		this.generateTranslationTask([`card`, `editor`], `a Cards Against Humanity card game`)
		this.generateTranslationTask([`card`, `type`])
		this.generateTranslationTask([`card`, `sets`], `a Cards Against Humanity card game`)
		this.generateTranslationTask([`card`, `sets`, `info`], `a Cards Against Humanity card game`)
		this.generateTranslationTask([`card`, `info`], `a Cards Against Humanity card game`)
		this.generateTranslationTask([`card`, `info`], `a Cards Against Humanity card game`)

		/**
		 * Information messages
		 */
		this.generateTranslationTask([`info`])
		this.generateTranslationTask([`info`, `poolType`], `8 Ball Pool ball types`)
		this.generateTranslationTask([`info`, `poolFoul`], `8 Ball Pool ball foul messages`)
		this.generateTranslationTask([`info`, `about`])

		/**
		 * Chat messsages
		 */
		this.generateTranslationTask([`chat`, `UNIVERSAL`], `short informal chat messages`)
		this.generateTranslationTask([`chat`, `PRE_GAME`], `short informal chat messages`)
		this.generateTranslationTask([`chat`, `GAME`], `short informal chat messages`)
		this.generateTranslationTask([`chat`, `POST_GAME`], `short informal chat messages`)

		/**
		 * Match messsages
		 */
		this.generateTranslationTask([`match`], `game matchmaking related butons`)
		this.generateTranslationTask([`match`, `lobby`], `game match lobby button states`)
		this.generateTranslationTask([`match`, `browser`], `game match list`)
		this.generateTranslationTask([`match`, `matchmaking`], `game matchmaking states`)
		this.generateTranslationTask([`match`, `info`], `game match information`)

		/**
		 * Error messsages
		 */
		this.generateTranslationTask([`error`, `rateLimit`])
		this.generateTranslationTask([`error`, `generic`])
		this.generateTranslationTask([`error`, `config`])
		this.generateTranslationTask([`error`, `start`])
		this.generateTranslationTask([`error`, `game`])
		this.generateTranslationTask([`error`, `card`])
		this.generateTranslationTask([`error`, `preset`])
		this.generateTranslationTask([`error`, `match`])
		this.generateTranslationTask([`error`, `profile`])
		this.generateTranslationTask([`error`, `requirement`])

		/**
		 * Game messages
		 */
		const heading = Object.keys(EN_MESSAGES[`game`])
		for (const value of heading) {
			const target = EN_MESSAGES[`game`][value]
			if (target.name) {
				this.generateTranslationTask([`game`, value, `name`], `game name`)
			}
			if (target.heading) {
				this.generateTranslationTask([`game`, value, `heading`], `an SEO friendly heading`)
			}
			if (target.title) {
				this.generateTranslationTask(
					[`game`, value, `title`],
					`an SEO friendly meta title no longer than 60 characters`
				)
			}
			if (target.description) {
				this.generateTranslationTask(
					[`game`, value, `description`],
					`an SEO friendly meta description no longer than 160 characters`
				)
			}
			if (target.tooltip) {
				this.generateTranslationTask([`game`, value, `tooltip`])
			}

			// Game preset
			const presets = Object.keys(target.presets)
			for (const title of presets) {
				this.generateTranslationTask([`game`, value, `presets`, title])
			}

			// Game help
			const help = Object.keys(target.help)
			for (const title of help) {
				if (target.help[title].title) {
					this.generateTranslationTask(
						[`game`, value, `help`, title, `title`],
						`a short game help title`
					)
				}
				if (target.help[title].description) {
					this.generateTranslationTask([`game`, value, `help`, title, `description`])
				}
			}

			// Game options
			const options = Object.keys(target.options)
			for (const title of options) {
				if (target.options[title].title) {
					this.generateTranslationTask(
						[`game`, value, `options`, title, `title`],
						`a short game option title`
					)
				}
				if (target.options[title].help) {
					this.generateTranslationTask([`game`, value, `options`, title, `help`])
				}
				if (target.options[title].data) {
					this.generateTranslationTask([`game`, value, `options`, title, `data`])
				}
			}
		}
	}

	/**
	 * Mark a specific path as to be translated. Will look for any values with "null" to translate and skip
	 * over entries that have already been translated.
	 *
	 * @param path Path to the content to be translated
	 * @param description Additional description for the API when translating this context
	 */
	generateTranslationTask(path: string[], description?: string) {
		let type: TranslateTask[`type`] = `string`
		const input: string[] = []
		const inputKeys: string[] = []
		const source = getContentToPath([...path], this.messages.source)
		const target = getContentToPath([...path], this.messages.target, true)

		if (source === null) {
			const brokenPath = path.join(`, `)
			throw `Source came back as "null". The source should always have a string, array, or object! Please check the following path: "${brokenPath}"`
		} else if (typeof source === `string`) {
			type = `string`
			if (typeof target !== `string`) {
				input.push(source)
			}
		} else if (Array.isArray(source)) {
			type = `array`
			const _target = Array.isArray(target) ? target : []
			for (let i = 0; i < source.length; i++) {
				const sourceEntry = source[i]
				const targetEntry = _target[i]
				if (typeof sourceEntry === `string` && typeof targetEntry !== `string`) {
					input.push(sourceEntry)
				}
			}
		} else {
			type = `object`
			const _target = target && !Array.isArray(target) ? target : {}
			for (const id in source) {
				const sourceEntry = source[id]
				const targetEntry = _target[id]
				if (targetEntry == null)
					if (typeof sourceEntry === `string` && typeof targetEntry !== `string`) {
						input.push(sourceEntry)
						inputKeys.push(id)
					}
			}
		}

		/**
		 * Note to self: does it make sense to reduce the amount of API calls in and combining multiple entries
		 * in one? Or should each individual string have its own call?
		 */

		// If there were missing translations, make sure to queue this entry for translation
		if (input.length > 0) {
			// Make chunks of 10 lines max
			while (input.length > 0) {
				const list: string[] = []
				const target = input.splice(0, 10)
				const numbered = target.length > 1
				let inputCount = 0

				const addInput = (value: string) => {
					inputCount++
					const formattedValue = value.replace(/\n/g, `;;;;`)
					list.push(numbered ? `[${inputCount}] ${formattedValue}` : formattedValue)
				}

				for (const value of target) {
					addInput(value)
				}

				this.queue.push({
					type,
					path,
					input: list,
					inputKeys: inputKeys.splice(0, 10),
					description
				})
			}
		}
	}

	async runTranslationTask(task: TranslateTask): Promise<(string | null)[]> {
		const output = await this.translateText({
			input: task.input,
			description: task.description
		})

		if (!output) {
			console.error(`Failed to translate a task!`, task, ` - Output:`, output)
			throw `Failed to translate a specific task!`
		}

		return output
	}

	/**
	 * Hit the API with a request for translation.
	 *
	 * @param param0 Input array and optional description of what is being translated
	 * @param extraRateDelay In case an additional delay should be added before processing
	 * @param retries Keep track of the amount of retries have been attempted
	 * @returns Will give a sanitised output (matching input) or throw "false" in case of an error
	 */
	async translateText(
		{
			input,
			description
		}: {
			input: string[]
			description?: string
		},
		extraRateDelay = 0,
		retries = 0
	): Promise<false | string[]> {
		try {
			if (retries > 2) {
				console.error(`Failed to translate after 3 attempts.`, input, description)
				return false
			}

			// Check for rate limiting
			await this.rateLimit.check(extraRateDelay)

			/**
			 * Generate prompt for GPT-3 API. Language has been tweaked for best results.
			 *
			 * API sometimes messes up with larger lists, hence the request specifically mentions to start
			 * entries with a number. This allows us to validate the results more easily after as well.
			 *
			 * The results are still disappointing at times. It does require manual fixing.
			 */
			const prompt = `Translate each of the following lines${
				description ? ` of ${description} ` : ` `
			}to ${this.language} while preserving the order${
				input.length > 1 ? ` and starting each entry with [number]` : ``
			}:\n${input.join(`\n`)}`

			const response = await openai.createCompletion({
				model: `text-davinci-003`,
				prompt: prompt,
				temperature: 0,
				max_tokens: 2048
			})

			// Extract the translated text from the response
			const output = response.data.choices[0].text
			if (!output) {
				console.error(`Something went wrong with the output!`, response.data.choices)
				return false
			}
			return this.sanitiseOutput(input, output.split(`\n`))
		} catch (error) {
			// Check for rate limiting
			if (error && error.response && error.response.status === 429) {
				console.log(`Hit rate limit! Will retry later (Attempt #${retries + 1})...`)
				return this.translateText({ input, description }, 60 * 1000, retries++)
			} else {
				return false
			}
		}
	}

	/**
	 * Write the results of the API output to the target object.
	 *
	 * @param path Path to the content
	 * @param target Target object to write to
	 * @param content The content to be written
	 * @param task The translation task that resulted in this content
	 */
	setContentFromTask(
		path: string[],
		target: GenericMessage,
		content: (string | null)[],
		task: TranslateTask
	): boolean {
		const entry = path.splice(0, 1)[0]
		const _target = target[entry]

		// We have hit the end point; run checks!
		if (path.length === 0) {
			switch (task.type) {
				case `string`:
					target[entry] = content[0]
					return true
				case `array`:
					if (!Array.isArray(_target)) {
						target[entry] = content
					} else if (Array.isArray(_target)) {
						for (let i = 0; i < _target.length; i++) {
							if (_target[i] == null) {
								_target[i] = content.splice(0, 1)[0]
							}
						}
					}
					return true
				case `object`: {
					if (
						Array.isArray(target[entry]) ||
						target[entry] == null ||
						typeof target[entry] === `string`
					) {
						target[entry] = {}
					}
					const local = target[entry] as GenericMessage
					for (const key of task.inputKeys) {
						local[key] = content.splice(0, 1)[0]
					}
					return true
				}
				default:
					return false
			}
		} else if (_target === undefined) {
			throw `Cannot find entry "${entry}" from path "${path.join(
				`, `
			)}" in target translation file. Unable to set content: "${content.join(`, `)}".`
		}

		return this.setContentFromTask(path, _target as GenericMessage, content, task)
	}

	/**
	 * Using the input as reference, check and validate that the output makes sense. This
	 * is unfortunately necessary as the API can sometimes be a little inconsistent.
	 *
	 * @param input Input, original, messages
	 * @param output Output as returned by the API
	 * @returns Sanitised array or "false" in case of an error
	 */
	sanitiseOutput(input: string[], output: string[]): (string | null)[] | false {
		if (input.length > output.length) {
			console.error(`[NOTICE] Input list is longer than the output list!`, input, output)
			return Array(input.length).fill(null)
		}

		// Remove
		while (output.includes(``)) {
			output.splice(output.indexOf(``), 1)
		}

		/**
		 * If the output somehow got longer than the input, remove the difference.
		 *
		 * It's a bit of a naive approach; results should always be validated by a human.
		 */
		if (output.length > input.length) {
			output.splice(0, output.length - input.length)
		}

		if (input.length === output.length) {
			const processed: string[] = []
			if (input.length > 1) {
				output.forEach((entry, index) => {
					const expectedNumber = index + 1
					const regex = new RegExp(`\\[${expectedNumber}\\]`)
					if (regex.test(entry)) {
						let value = entry.replace(regex, ``).trim()
						value = value.replace(/\$;;;;/g, `\n`)
						processed.push(value)
					} else {
						console.error(
							`[NOTICE] Got invalid number sequence for entry "${entry}".`,
							input,
							output
						)
						return Array(input.length).fill(null)
					}
				})
			} else {
				const value = output[0].replace(/\$;;;;/g, `\n`)
				processed.push(value)
			}
			return processed
		} else {
			console.error(
				`[NOTICE] Unable to sanitise the output list (Output: ${output.length} - Input: ${input.length})`,
				input,
				output
			)
			return Array(input.length).fill(null)
		}
	}
}