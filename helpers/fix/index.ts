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
		throw `[${target}] Failed to write output file.`
	}
}

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
checkAndFixLocale(`en`, `_empty`)
