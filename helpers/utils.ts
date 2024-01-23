// Types
import type { NestedObject, GenericMessage, GenericMessageResult } from './types'

// Utils
import { promises as fs, writeFileSync } from 'fs'
import * as osPath from 'path'

// Data
const LOCALE_FOLDER = `../messages`

/**
 * Checks whether a file exists on a given location
 *
 * @param filePath Path to file
 * @returns boolean
 */
export const fileExists = async (filePath: string): Promise<boolean> => {
	try {
		const stats = await fs.stat(osPath.join(__dirname, filePath))
		return stats.isFile()
	} catch (err) {
		return false
	}
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
			target[key] = addMissingEntriesToObject(source[key] as NestedObject, target[key] || {})
		} else if (!Object.prototype.hasOwnProperty.call(target, key)) {
			if (typeof target[key] !== `object` && typeof source === `object`) target = {}
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
 * Retrieve a value from a given object using a path.
 *
 * @param path Array of strings to location
 * @param target Object to traverse
 * @param addMissing If an entry is missing along the path, should it be added?
 * @returns The value on the given path in the target
 */
export const getContentToPath = (
	path: string[],
	target: GenericMessage,
	addMissing = false
): GenericMessageResult => {
	const entry = path.splice(0, 1)[0]
	const _target = target[entry]

	// We have hit the end point; run checks!
	if (path.length === 0) {
		return _target
	} else if (_target === undefined) {
		if (addMissing) {
			target[entry] = {}
		} else {
			const brokenPath = path.join(`, `)
			throw `Cannot find entry "${entry}" using path "${brokenPath}" in target translation file.`
		}
	}

	return getContentToPath(path, _target as GenericMessage, addMissing)
}

/**
 * Introduce an artifical delay.
 *
 * @param ms Delay in milliseconds.
 */
export const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

/**
 * Load a message single file.
 *
 * @param target The target file to be loaded.
 */
export const getMessageFile = async (target: string) => {
	return await require(`${LOCALE_FOLDER}/${target}.json`)
}

/**
 * Load both source and target message "XX.json" files.
 *
 * @param source The source file to use for the translation
 * @param target The target file to export as - if it does not (yet) exist the _empty.json is used
 */
export const loadMessages = async (source: string, target: string) => {
	const LOCALE_SOURCE = require(`${LOCALE_FOLDER}/${source}.json`)
	const LOCALE_TARGET_PATH = `${LOCALE_FOLDER}/${target}.json`
	const LOCALE_TARGET = (await fileExists(LOCALE_TARGET_PATH))
		? require(LOCALE_TARGET_PATH)
		: require(`${LOCALE_FOLDER}/_empty.json`)

	return { LOCALE_SOURCE, LOCALE_TARGET }
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
	fileExists,
	addMissingEntriesToObject,
	getContentToPath,
	delay,
	ensureSameOrder,
	getMessageFile,
	loadMessages,
	writeFile,
	objectDeepKeys,
	getMissingCount
}
