import { GameType, GenericType } from './index'

export type GameMessage = {
	[key in GameType | GenericType]: {
		/**
		 * Name of the game.
		 */
		name?: string

		/**
		 * Catch phrase which describes the game in one sentence (shown as part of page meta).
		 *
		 * Should not be longer than 70 characters.
		 */
		heading: string

		/**
		 * Page title, which appears next to the name of the page.
		 */
		title: string

		/**
		 * Meta description of the page.
		 */
		description: string

		/**
		 * Options and parameters that can be modified.
		 */
		options: {
			[key in string]: {
				/**
				 * Title of the option.
				 */
				title?: string

				/**
				 * Help section that goes along with the option.
				 */
				help?:
					| string
					| {
							[key in string]: string
					  }

				/**
				 * List of data keys (e.g. dropdown with multiple options)
				 */
				data?: {
					[key in string]: string
				}
			}
		}

		/**
		 * Game option presets.
		 */
		presets: {
			[key in string]: {
				/**
				 * Title of the preset. Keep it short!
				 */
				title: string

				/**
				 * Optional description to go underneath the preset title.
				 */
				description?: string
			}
		}

		/**
		 * Game explanation and help.
		 */
		help: {
			/**
			 * Key of the help should correspond to an image file that will be associated
			 * with the description. Please make sure this exists.
			 *
			 * Path is `/img/help/<gameType>/<key>`
			 */
			[key in string]: {
				/**
				 * Title of the help section. It should address what is explained.
				 */
				title: string

				/**
				 * Multiple sections of explanation that goes along with the image and
				 * title shown above. It's best to keep this short as to not overwhelm.
				 */
				description: string[]
			}
		}
	}
}
