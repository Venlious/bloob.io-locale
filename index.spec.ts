import { supportedLocales } from './index'
import { symmetricDifference } from 'ramda'

const objectDeepKeys = obj => {
	return Object.keys(obj)
		.filter(key => obj[key] instanceof Object)
		.map(key => objectDeepKeys(obj[key]).map(k => `${key}.${k}`))
		.reduce((x, y) => x.concat(y), Object.keys(obj))
}

const getMissingCount = obj => {
	const data = { total: 0, missing: 0 }
	const countCheck = value => {
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

// eslint-disable-next-line @typescript-eslint/no-var-requires
const enMessage = require(`./en/messages.ts`).default
// eslint-disable-next-line @typescript-eslint/no-var-requires
const enNumberFormat = require(`./en/numberFormats.ts`).default

const enMessageKeys = objectDeepKeys(enMessage)
const enNumberFormatKeys = objectDeepKeys(enNumberFormat)

const enCount = getMissingCount(enMessage)
describe(`correctEntriesCount`, () => {
	it(`should have the proper total entries count in English`, () => {
		expect(enCount.total).toBe(enMessage._entries.total)
	})
	it(`should have no missing entries in English`, () => {
		expect(enCount.missing).toBe(0)
	})
})

for (const folder of [...supportedLocales, `_empty`]) {
	if (folder === `en`) continue
	// eslint-disable-next-line @typescript-eslint/no-var-requires
	const messages = require(`./${folder}/messages.ts`).default
	// eslint-disable-next-line @typescript-eslint/no-var-requires
	const numberFormat = require(`./${folder}/numberFormats.ts`).default

	describe(`translatedMessages`, () => {
		it(`should have all English translations keys in "${folder}"`, () => {
			const messageKeys = objectDeepKeys(messages)
			expect(symmetricDifference(enMessageKeys, messageKeys)).toHaveLength(0)
		})
	})

	describe(`translatedNumberFormats`, () => {
		it(`should have all English number translations keys in "${folder}"`, () => {
			const numberFormatKeys = objectDeepKeys(numberFormat)
			expect(symmetricDifference(enNumberFormatKeys, numberFormatKeys)).toHaveLength(0)
		})
	})

	describe(`correctEntriesCount`, () => {
		const count = getMissingCount(messages)
		it(`should match the English total entries count for "${folder}"`, () => {
			expect(count.total).toBe(enCount.total)
		})
		it(`should have the proper total entries count for "${folder}"`, () => {
			expect(count.total).toBe(messages._entries.total)
		})
		it(`should have the proper missing entries count for "${folder}"`, () => {
			expect(count.missing).toBe(messages._entries.missing)
		})
	})
}
