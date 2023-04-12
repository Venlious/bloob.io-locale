// Utils
import {
	ensureSameOrder,
	loadMessages,
	addMissingEntriesToObject,
	writeFile,
	getMissingCount
} from '../utils'
import * as osPath from 'path'

// Data
import { supportedLocales } from '../../index'
const LOCALE_FOLDER = `../../messages`
const EN_MESSAGES = require(`../../messages/en.json`)

/**
 * Ensures the locale file is consistent with the source.
 *
 * @param source Source file to compare against
 * @param target Target file to modify to match
 */
const checkAndFixLocale = async (source: string, target: string) => {
	const { LOCALE_SOURCE, LOCALE_TARGET } = await loadMessages(source, target)

	try {
		// Add missing entries to the object
		let data = addMissingEntriesToObject(LOCALE_SOURCE, LOCALE_TARGET)

		// Ensure order is consistent with source
		data = ensureSameOrder(LOCALE_SOURCE, data)

		// Update total and missing key counts
		const { total, missing } = getMissingCount(data)
		data._meta.total = total
		data._meta.missing = missing

		// Write file
		writeFile(osPath.join(__dirname, `${LOCALE_FOLDER}/${target}.json`), data)
		console.info(`Validated and fixed "${target}.json"...`)
	} catch (error) {
		console.error(error)
		throw `Failed to validate or write output file for "${target}.json".`
	}
}

const fixVerifyObject = (obj: any): void => {
	if (Array.isArray(obj)) {
		obj.forEach((item, index) => {
			if (typeof item !== `boolean`) {
				obj[index] = false
			}
		})
	} else if (typeof obj === null) {
		obj = false
	} else if (typeof obj === `object`) {
		for (const key in obj) {
			if (obj.hasOwnProperty(key)) {
				const value = obj[key]
				if (value !== null && typeof value === `object`) {
					fixVerifyObject(value)
				} else if (typeof value !== `boolean`) {
					obj[key] = false
				}
			}
		}
	} else if (typeof obj !== `boolean`) {
		obj = false
	}
}

/**
 * Ensures the locale file is consistent with the source.
 *
 * @param target Target file to modify to match
 */
const checkAndFixVerified = async (target: string) => {
	const { LOCALE_SOURCE, LOCALE_TARGET } = await loadMessages(target, `verified/${target}`)

	try {
		// Add missing entries to the object
		let data = addMissingEntriesToObject(LOCALE_SOURCE, LOCALE_TARGET)

		// Ensure order is consistent with source
		data = ensureSameOrder(EN_MESSAGES, data)

		// Delete meta data
		delete data._meta
		fixVerifyObject(data)

		// Write file
		writeFile(osPath.join(__dirname, `${LOCALE_FOLDER}/verified/${target}.json`), data)
		console.info(`Updated "verified/${target}.json"...`)
	} catch (error) {
		console.error(error)
		throw `Failed to validate or write output file for "verified/${target}.json".`
	}
}

const process = async () => {
	/**
	 * Loops through all supported locales and fixes the following:
	 * - Makes sure key order is consistent with source
	 * - Adds missing entries present in source
	 * - Removes entries that are not in source
	 * - Makes sure the _meta.total and _meta.missing counts are updated
	 */
	supportedLocales.forEach(async locale => {
		await checkAndFixLocale(`en`, locale)
	})
	await checkAndFixLocale(`en`, `_empty`)

	/**
	 * Checks and validates the verified files for all languages.
	 */
	supportedLocales.forEach(async locale => {
		await checkAndFixVerified(locale)
	})
}

process()
