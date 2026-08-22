// Utils
import { symmetricDifference } from 'ramda'
import { loadCatalogue, objectDeepKeys, getMissingCount } from './helpers/utils'

// Data
import { supportedLocales } from './index'

// Define a regex pattern to match variables in curly braces
const variablePattern = /{([^{}]*)}/g

const checkForVariables = (english, translation) => {
	// Iterate through keys and values of English object
	for (const [key, value] of Object.entries(english)) {
		// Skip keys with null values in translation
		if (translation[key] === null) continue

		// Check if value is an object (indicating another nested layer)
		if (typeof value === `object`) {
			// If value is an object, recursively call the function on the nested objects
			checkForVariables(value, translation[key])
		} else if (typeof value === `string`) {
			// If value is not an object, check if it contains any variables
			const englishVariables = value.match(variablePattern) || []

			// Iterate through the variables in the English text
			for (const variable of englishVariables) {
				// Assert that each variable is present in the translation
				expect(translation[key]).toContain(variable)
			}

			// Check if the target language does not contain MORE translations than the source
			const targetVariables = translation[key].match(variablePattern) || []
			for (const variable of targetVariables) {
				// Assert that each variable is present in the English source
				expect(englishVariables).toContain(variable)
			}
		}
	}
}

const checkForCommonErrors = translation => {
	// Iterate through keys and values of English object
	for (const [key, value] of Object.entries(translation)) {
		// Skip keys with null values in translation
		if (translation[key] === null) {
			continue
		}

		// Check if value is an object (indicating another nested layer)
		if (typeof value === `object`) {
			// If value is an object, recursively call the function on the nested objects
			checkForCommonErrors(value)
		} else if (typeof value === `string`) {
			// If value is not an object, check if it contains any variables.
			// `{0}`/`{1}` are deliberately not checked here (unlike the bracket/
			// paren list-marker shapes below) - they're real positional
			// interpolation placeholders (see the Cribbage `{0}`/`{1}` keys,
			// %{0}/%{1} before the 2026-07-20 %{x} -> {x} migration), and some
			// languages' natural word order legitimately puts one at the very
			// start of a sentence (confirmed in the "tr"/"ko"/"ja" Cribbage
			// translations).
			const lowerCasedValue = value.toLowerCase()
			expect(lowerCasedValue).not.toStartWith(`[0]`)
			expect(lowerCasedValue).not.toStartWith(`0.`)
			expect(lowerCasedValue).not.toStartWith(`0)`)
			expect(lowerCasedValue).not.toStartWith(`(0)`)
			expect(lowerCasedValue).not.toStartWith(`[1]`)
			expect(lowerCasedValue).not.toStartWith(`1.`)
			expect(lowerCasedValue).not.toStartWith(`1)`)
			expect(lowerCasedValue).not.toStartWith(`(1)`)
			expect(lowerCasedValue).not.toStartWith(`sure `)
		}
	}
}

// A word a translator marked to stand out, written the markdown way: **word**.
// It replaced <b> in every locale on 2026-08-08 - the tags only ever rendered on
// the screens that happened to use v-html, and the frontend now renders the
// marked run as a real element instead (see utility/highlightedText.ts there).
// Deliberately two asterisks and non-greedy: the Rotten Apples time formulas
// read "**RESPONSE CARDS * THIS TIME**", so a single-asterisk syntax would cut
// them in half in all twenty locales.
const boldPattern = /\*\*([\s\S]+?)\*\*/g

const countBoldMarkers = value => (value.match(/\*\*/g) || []).length
const countBoldRuns = value => (value.match(boldPattern) || []).length

const checkBoldMarkersBalanced = translation => {
	// Iterate through keys and values of the translation object
	for (const [key, value] of Object.entries(translation)) {
		// Skip keys with null values
		if (value === null) continue

		// Check if value is an object (indicating another nested layer)
		if (typeof value === `object`) {
			// If value is an object, recursively call the function on the nested objects
			checkBoldMarkersBalanced(value)
		} else if (typeof value === `string`) {
			// Every opening ** must be matched by a closing one. Counting the runs the
			// frontend's own pattern finds, rather than just the markers, is what
			// catches a stray third ** that would leave part of the sentence unmarked
			expect(countBoldRuns(value) * 2).toBe(countBoldMarkers(value))
		}
	}
}

const checkForMatchingBoldMarkers = (english, translation) => {
	// Iterate through keys and values of English object
	for (const [key, value] of Object.entries(english)) {
		// Skip keys with null values in translation
		if (translation[key] === null) continue

		// Check if value is an object (indicating another nested layer)
		if (typeof value === `object`) {
			// If value is an object, recursively call the function on the nested objects
			checkForMatchingBoldMarkers(value, translation[key])
		} else if (typeof value === `string`) {
			// A translation must mark the same amount of words as English - not more, not less
			expect(countBoldRuns(translation[key])).toBe(countBoldRuns(value))
		}
	}
}

// Keys where "|" is used as a literal separator rather than vue-i18n plural forms,
// e.g. SEO titles ("Bloob.io | Free Online...") and "Min. %{min} | Max. %{max}"
const nonPluralPipeKeys = new Set([`title`, `minMax`])

const checkPluralFormCount = (english, translation) => {
	// Iterate through keys and values of English object
	for (const [key, value] of Object.entries(english)) {
		// Skip keys with null values in translation
		if (translation[key] === null) continue

		// Check if value is an object (indicating another nested layer)
		if (typeof value === `object`) {
			// If value is an object, recursively call the function on the nested objects
			checkPluralFormCount(value, translation[key])
		} else if (
			typeof value === `string` &&
			value.includes(`|`) &&
			!nonPluralPipeKeys.has(key)
		) {
			// A pluralized string must have the same amount of "|"-delimited forms as English,
			// otherwise $tc picks the wrong form (or falls back to the raw string) at runtime
			const englishFormCount = value.split(`|`).length
			const translationFormCount = translation[key].split(`|`).length
			expect(translationFormCount).toBe(englishFormCount)
		}
	}
}

const checkForUnexpectedTags = translation => {
	// Iterate through keys and values of the translation object
	for (const [key, value] of Object.entries(translation)) {
		// Skip keys with null values
		if (value === null) continue

		// Check if value is an object (indicating another nested layer)
		if (typeof value === `object`) {
			// If value is an object, recursively call the function on the nested objects
			checkForUnexpectedTags(value)
		} else if (typeof value === `string`) {
			// No message carries markup of any kind. A tag renders only where the
			// frontend happens to use v-html: elsewhere it is escaped and shown
			// literally, or announced verbatim by a screen reader, and vue-i18n warns
			// about it besides ("Detected HTML in message... Recommend not using HTML
			// messages to avoid XSS") - the message compiler renders the tags, so
			// anything interpolated into the message rides along into innerHTML.
			// Stressing a word is what ** is for
			const tags = value.match(/<\/?[a-zA-Z][^>]*>/g) || []
			expect(tags).toHaveLength(0)
		}
	}
}

const checkForWhitespaceIssues = translation => {
	// Iterate through keys and values of the translation object
	for (const [key, value] of Object.entries(translation)) {
		// Skip keys with null values
		if (value === null) continue

		// Check if value is an object (indicating another nested layer)
		if (typeof value === `object`) {
			// If value is an object, recursively call the function on the nested objects
			checkForWhitespaceIssues(value)
		} else if (typeof value === `string`) {
			// Catch copy-paste artifacts: doubled spaces and leading/trailing whitespace
			expect(value).not.toMatch(/ {2}/)
			expect(value).toBe(value.trim())
		}
	}
}

const checkForCommonVariableErrors = translation => {
	// Iterate through keys and values of English object
	for (const [key, value] of Object.entries(translation)) {
		// Skip keys with null values in translation
		if (translation[key] === null) {
			continue
		}

		// Check if value is an object (indicating another nested layer)
		if (typeof value === `object`) {
			// If value is an object, recursively call the function on the nested objects
			checkForCommonVariableErrors(value)
		} else if (typeof value === `string`) {
			// Catch malformed interpolation placeholders like ${x}; the only valid form is {x}
			const invalidVariables = value.match(/\$\{[^{}]*}/g) || []
			expect(invalidVariables).toHaveLength(0)

			// The old Rails-style %{x} syntax silently fails to interpolate under
			// vue-i18n v9+ (renders a stray "%" instead) - every message must use
			// plain {x} instead. Regression guard for the 2026-07-20 %{x} -> {x}
			// migration across all locales.
			const railsStyleVariables = value.match(/%\{[^{}]*}/g) || []
			expect(railsStyleVariables).toHaveLength(0)
		}
	}
}

const enMessage = loadCatalogue(`en`)
const enMessageKeys = objectDeepKeys(enMessage)

const enCount = getMissingCount(enMessage)
describe(`correctEntriesCount`, () => {
	it(`should have the proper total entries count in English`, () => {
		expect(enMessage._meta.total).toBe(enCount.total)
	})
	it(`should have no missing entries in English`, () => {
		expect(0).toBe(enCount.missing)
	})
})

const resolveKey = (source, path) => path.split(`.`).reduce((value, part) => value?.[part], source)

describe(`correctBoldMarkers`, () => {
	it(`should have balanced ** markers in English`, () => {
		checkBoldMarkersBalanced(enMessage)
	})
	it(`should not have any tags in English`, () => {
		checkForUnexpectedTags(enMessage)
	})
	// The sibling for the two checks above, which a catalogue with no marked words
	// at all would pass. It is also what says which spelling is the supported one
	it(`should mark stressed words with ** rather than markup`, () => {
		expect(resolveKey(enMessage, `game.ROTTEN_APPLES.cards.info.waitForSelections`)).toBe(
			`You are the **judge** this round — wait for everyone to make their picks`
		)
	})
})

describe(`correctVariableFormatting`, () => {
	it(`English should format variables correctly`, () => {
		checkForCommonVariableErrors(enMessage)
	})
})

describe(`correctWhitespace`, () => {
	it(`should not have whitespace issues in English`, () => {
		checkForWhitespaceIssues(enMessage)
	})
})

for (const folder of [...supportedLocales, `_empty`]) {
	if (folder === `en`) continue
	const messages = loadCatalogue(folder)

	describe(`translatedMessages`, () => {
		it(`should have all English translations keys in "${folder}"`, () => {
			const messageKeys = objectDeepKeys(messages)
			expect(symmetricDifference(enMessageKeys, messageKeys)).toHaveLength(0)
		})
	})

	describe(`correctEntriesCount`, () => {
		const count = getMissingCount(messages)
		it(`should match the English total entries count for "${folder}"`, () => {
			expect(enCount.total).toBe(count.total)
		})
		it(`should have the proper total entries count for "${folder}"`, () => {
			expect(messages._meta.total).toBe(count.total)
		})
		it(`should have the proper missing entries count for "${folder}"`, () => {
			expect(messages._meta.missing).toBe(count.missing)
		})
	})

	describe(`containCorrectVariables`, () => {
		it(`should contain all variables from English text for "${folder}"`, () => {
			checkForVariables(enMessage, messages)
		})
	})

	describe(`correctBoldMarkers`, () => {
		it(`should have balanced ** markers for "${folder}"`, () => {
			checkBoldMarkersBalanced(messages)
		})
		it(`should mark the same amount of words as English for "${folder}"`, () => {
			checkForMatchingBoldMarkers(enMessage, messages)
		})
		it(`should not have any tags for "${folder}"`, () => {
			checkForUnexpectedTags(messages)
		})
	})

	describe(`correctPluralForms`, () => {
		it(`should have the same amount of plural forms as English for "${folder}"`, () => {
			checkPluralFormCount(enMessage, messages)
		})
	})

	describe(`correctWhitespace`, () => {
		it(`should not have whitespace issues for "${folder}"`, () => {
			checkForWhitespaceIssues(messages)
		})
	})

	describe(`correctVariableFormatting`, () => {
		it(`language "${folder}" should format variables correctly`, () => {
			checkForCommonVariableErrors(messages)
		})
	})

	describe(`containCorrectStart`, () => {
		it(`language "${folder}" should not start with common errors`, () => {
			checkForCommonErrors(messages)
		})
	})
}
