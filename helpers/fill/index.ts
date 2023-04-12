// Types
import type { NestedObject } from '../types'

// Utils
import { getMessageFile } from '../utils'

// Data
import { supportedLocales } from '../../index'
import TranslationClass from '../translate/TranslationClass'

const list = [...supportedLocales]
const process = async () => {
	if (list.length === 0) {
		console.info(`Finished processing and filling all languages! Task completed.`)
		return
	}

	const locale = list.splice(0, 1)[0]
	if (locale === `en`) return process()

	const data: NestedObject = await getMessageFile(locale)
	if (data?._meta?.language) {
		new TranslationClass({
			source: `en`,
			target: locale,
			language: data._meta.language,
			skipDateInFileName: true,
			finishCallback: () => {
				process()
			}
		})
	} else {
		console.info(
			`Skipping translation for "${locale}" due to missing "_meta.language" property.`
		)
		process()
	}
}

process()
