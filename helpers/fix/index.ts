// Utils
import {
	ensureSameOrder,
	loadMessages,
	addMissingEntriesToObject,
	writeCatalogue,
	getMissingCount
} from '../utils'

// Data
import { supportedLocales } from '../../index'

/**
 * Ensures the locale catalogue is consistent with the source.
 *
 * Works on the whole merged tree (`core.json` plus every `games/<GAME>.json`)
 * and writes it back out split, so key order, additions and removals are
 * decided against English once rather than file by file. A key that moves
 * between core and a game file follows automatically.
 *
 * @param source Source locale to compare against
 * @param target Target locale to modify to match
 */
const checkAndFixLocale = (source: string, target: string) => {
	const { LOCALE_SOURCE, LOCALE_TARGET } = loadMessages(source, target)

	try {
		// Add missing entries to the object
		let data = addMissingEntriesToObject(LOCALE_SOURCE, LOCALE_TARGET)

		// Ensure order is consistent with source
		data = ensureSameOrder(LOCALE_SOURCE, data)

		const { total, missing } = getMissingCount(data)
		data._meta.total = total
		data._meta.missing = missing

		writeCatalogue(target, data)
		console.info(`Validated and fixed "${target}"...`)
	} catch (error) {
		console.error(error)
		throw `Failed to validate or write output files for "${target}".`
	}
}

const process = () => {
	/**
	 * Loops through all supported locales and fixes the following:
	 * - Makes sure key order is consistent with source
	 * - Adds missing entries present in source
	 * - Removes entries that are not in source
	 * - Makes sure the _meta.total and _meta.missing counts are updated
	 * - Puts every key in the file it belongs in (core vs. per-game)
	 */
	supportedLocales.forEach(locale => {
		checkAndFixLocale(`en`, locale)
	})
	checkAndFixLocale(`en`, `_empty`)
}

process()
