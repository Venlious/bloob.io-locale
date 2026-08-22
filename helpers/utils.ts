// Types
import type { NestedObject } from './types'

// Utils
import { existsSync, mkdirSync, readdirSync, readFileSync, rmSync, writeFileSync } from 'fs'
import * as osPath from 'path'

// Data
const MESSAGES_PATH = osPath.join(__dirname, `../messages`)

/** The `game.<ID>` keys that stay in `core.json`. */
export const EAGER_GAME_KEYS = [`name`, `title`, `description`]

/** The one entry under `game` that is not a game. */
const GENERIC_GAME_KEY = `generic`

/**
 * Checks whether a value is a plain object.
 *
 * @param value Value to check
 * @returns boolean
 */
const isPlainObject = (value: any): boolean => {
	return typeof value === `object` && value !== null && value.constructor === Object
}

/**
 * Writes a nicely formatted JSON file.
 *
 * @param filePath Path to write file to
 * @param data Data to write to file
 */
export const writeFile = (filePath: string, data: any) => {
	try {
		const output = JSON.stringify(data, null, 4) + `\n`
		writeFileSync(filePath, output)
	} catch (err) {
		console.error(err)
	}
}

/**
 * Checks whether a locale has a catalogue on disk.
 *
 * @param locale Locale code (or `_empty`)
 * @returns boolean
 */
export const catalogueExists = (locale: string): boolean => {
	return existsSync(osPath.join(MESSAGES_PATH, locale, `core.json`))
}

/**
 * Reads a locale's files back into the single tree the rest of this tooling
 * expects — `core.json` with every `games/<GAME>.json` merged into its
 * `game.<GAME>` entry.
 *
 * @param locale Locale code (or `_empty`)
 * @returns The whole catalogue
 */
export const loadCatalogue = (locale: string): NestedObject => {
	const root = osPath.join(MESSAGES_PATH, locale)
	const catalogue = JSON.parse(
		readFileSync(osPath.join(root, `core.json`), `utf8`)
	) as NestedObject

	const gamesPath = osPath.join(root, `games`)
	if (!existsSync(gamesPath)) {
		return catalogue
	}

	for (const file of readdirSync(gamesPath).sort()) {
		if (!file.endsWith(`.json`)) continue

		const id = file.slice(0, -`.json`.length)
		const block = JSON.parse(readFileSync(osPath.join(gamesPath, file), `utf8`)) as NestedObject
		catalogue.game[id] = { ...(catalogue.game[id] ?? {}), ...block }
	}

	return catalogue
}

/**
 * Splits a whole catalogue back across its files.
 *
 * Game files for games no longer in the tree are deleted rather than left
 * behind: `loadCatalogue` merges whatever it finds, so a stale file would keep
 * resurrecting a game that `fix` had just pruned.
 *
 * @param locale Locale code (or `_empty`)
 * @param data The whole catalogue
 */
export const writeCatalogue = (locale: string, data: NestedObject) => {
	const root = osPath.join(MESSAGES_PATH, locale)
	const gamesPath = osPath.join(root, `games`)
	mkdirSync(gamesPath, { recursive: true })

	// `game` keeps its position in the key order: it already exists in `data`,
	// and re-assigning a key does not move it.
	const core: NestedObject = { ...data, game: {} }
	const written = new Set<string>()

	for (const [id, block] of Object.entries(data.game as NestedObject)) {
		if (id === GENERIC_GAME_KEY) {
			core.game[id] = block
			continue
		}

		const eager: NestedObject = {}
		const lazy: NestedObject = {}
		for (const [key, value] of Object.entries(block as NestedObject)) {
			;(EAGER_GAME_KEYS.includes(key) ? eager : lazy)[key] = value
		}

		core.game[id] = eager
		writeFile(osPath.join(gamesPath, `${id}.json`), lazy)
		written.add(`${id}.json`)
	}

	for (const file of readdirSync(gamesPath)) {
		if (file.endsWith(`.json`) && !written.has(file)) {
			rmSync(osPath.join(gamesPath, file))
		}
	}

	writeFile(osPath.join(root, `core.json`), core)
}

/**
 * Ensures missing entries are added to an object.
 *
 * @param source Source object to check
 * @param target Target object to add missing entries to
 * @returns Modified target with missing entries present
 */
export const addMissingEntriesToObject = (
	source: NestedObject,
	target: NestedObject
): NestedObject => {
	for (const key in source) {
		if (typeof source[key] === `object`) {
			if (Array.isArray(source[key]) && !Array.isArray(target[key])) {
				target[key] = source[key].map(() => null)
			} else {
				target[key] = addMissingEntriesToObject(
					source[key] as NestedObject,
					target[key] || {}
				)
			}
		} else if (!Object.prototype.hasOwnProperty.call(target, key)) {
			if (!isPlainObject(target) && isPlainObject(source)) target = {}
			target[key] = null
		}
	}
	return target
}

/**
 * Expects two objects with the same keys. Will return the target object in the same key
 * order as the source object.
 *
 * @param source Source object
 * @param target Target object
 * @returns Target object in same order as source object
 */
export const ensureSameOrder = (source: NestedObject, target: NestedObject): NestedObject => {
	const keys = Object.keys(source) as (keyof typeof source)[]
	const result: NestedObject = {}

	keys.forEach(key => {
		if (Array.isArray(source[key]) && Array.isArray(target[key])) {
			result[key] = [...target[key]]
		} else if (typeof source[key] === `object` && typeof target[key] === `object`) {
			result[key] = ensureSameOrder(source[key] as NestedObject, target[key] as NestedObject)
		} else {
			result[key] = target[key]
		}
	})

	return result
}

/**
 * Load both source and target catalogues.
 *
 * @param source The source locale to compare against
 * @param target The target locale - if it does not (yet) exist `_empty` is used
 */
export const loadMessages = (source: string, target: string) => {
	return {
		LOCALE_SOURCE: loadCatalogue(source),
		LOCALE_TARGET: catalogueExists(target) ? loadCatalogue(target) : loadCatalogue(`_empty`)
	}
}

/**
 * Get all keys from a deeply nested object.
 *
 * @param obj Object to get keys from
 *
 * @returns array
 */
export const objectDeepKeys = (obj: NestedObject): string[] => {
	return Object.keys(obj)
		.filter(key => obj[key] instanceof Object)
		.map(key => objectDeepKeys(obj[key]).map(k => `${key}.${k}`))
		.reduce((x, y) => x.concat(y), Object.keys(obj))
}

/**
 * Counts the total and missing entries in an object.
 *
 * @param obj Object to check
 */
export const getMissingCount = (obj: NestedObject): { total: number; missing: number } => {
	const data = { total: 0, missing: 0 }
	const countCheck = (value: any) => {
		if (value !== null && typeof value === `object`) {
			for (const id in value) {
				countCheck(value[id])
			}
		} else if (Array.isArray(value)) {
			value.forEach(entry => countCheck(entry))
		} else {
			data.total++
			if (value === null) data.missing++
		}
	}
	countCheck(obj)
	return data
}

export default {
	catalogueExists,
	loadCatalogue,
	writeCatalogue,
	addMissingEntriesToObject,
	ensureSameOrder,
	loadMessages,
	writeFile,
	objectDeepKeys,
	getMissingCount
}
