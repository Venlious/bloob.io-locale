import { supportedLocales } from './index'
import { symmetricDifference } from 'ramda'

const objectDeepKeys = obj => {
	return Object.keys(obj)
		.filter(key => obj[key] instanceof Object)
		.map(key => objectDeepKeys(obj[key]).map(k => `${key}.${k}`))
		.reduce((x, y) => x.concat(y), Object.keys(obj))
}

// eslint-disable-next-line @typescript-eslint/no-var-requires
const enMessageKeys = objectDeepKeys(require(`./en/messages.ts`))
// eslint-disable-next-line @typescript-eslint/no-var-requires
const enNumberFormatKeys = objectDeepKeys(require(`./en/numberFormats.ts`))

for (const folder of [...supportedLocales, `_empty`]) {
	if (folder === `en`) continue

	describe(`translatedMessages`, () => {
		it(`should have all English translations keys in "${folder}"`, () => {
			// eslint-disable-next-line @typescript-eslint/no-var-requires
			const messageKeys = objectDeepKeys(require(`./${folder}/messages.ts`))

			expect(symmetricDifference(enMessageKeys, messageKeys)).toHaveLength(0)
		})
	})

	describe(`translatedNumberFormats`, () => {
		it(`should have all English number translations keys in "${folder}"`, () => {
			// eslint-disable-next-line @typescript-eslint/no-var-requires
			const numberFormatKeys = objectDeepKeys(require(`./${folder}/numberFormats.ts`))

			expect(symmetricDifference(enNumberFormatKeys, numberFormatKeys)).toHaveLength(0)
		})
	})
}
