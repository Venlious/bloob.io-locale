require(`dotenv`).config()
import * as readline from 'readline'
import TranslationClass from './TranslationClass'

/**
 * Check and verify if all required arguments are present.
 *
 * Valid example: yarn translate --source "en" --target "nl" --language "informal Dutch"
 */
const args = process.argv.slice(2)

const sourceIndex = args.indexOf(`--source`)
if (sourceIndex === -1) {
	throw `Missing --source argument; the source language we translate from (e.g. "en")`
}
const source = args[sourceIndex + 1]

const targetIndex = args.indexOf(`--target`)
if (targetIndex === -1) {
	throw `Missing --target argument; the output language we translate to (e.g. "nl"); if it does not yet exist it will be generated, otherwise only missing translations are done`
}
const target = args[targetIndex + 1]

const languageIndex = args.indexOf(`--language`)
if (languageIndex === -1) {
	throw `Missing --language argument; the prompt language (e.g. "informal Dutch")`
}
const language = args.slice(languageIndex + 1).join(` `)

// Prompt user with a confirmation making sure command was understood correctly
const rl = readline.createInterface({ input: process.stdin, output: process.stdout })
rl.question(
	`Do you want to translate "${source}.json" to "${target}.json" in language "${language}"? (Y/N)`,
	answer => {
		if (answer.toLowerCase() === `y`) {
			// Start translation job
			new TranslationClass({ source, target, language })
		} else {
			console.info(`Aborting the script...`)
			process.exit(0)
		}
		rl.close()
	}
)
