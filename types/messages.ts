import { LanguageList } from '.'
import { ChatMessage } from './chat'
import { ErrorMessage } from './error'
import { GameMessage } from './game'
import { PoolGameGroup, PoolGameFoulType } from './index'

export type MessageList = {
	/**
	 * Site name - Bloob.io
	 */
	name: string
	error: ErrorMessage
	game: GameMessage
	chat: ChatMessage

	/**
	 * Messages shown in the top header of the game. They can also be shown
	 * in the header of a Leaderboard modal.
	 */
	header: {
		message: {
			/**
			 * Shown in the match lobby, before the match has started.
			 */
			lobby: string

			/**
			 * Shown when the match has concluded.
			 */
			finished: string

			/**
			 * Shown when the match has concluded in a tie.
			 */
			tied: string

			/**
			 * Shown when the match has concluded in a tie.
			 */
			finishedRematch: string

			/**
			 * Shown when the match is in progress.
			 */
			inProgress: string

			/**
			 * Shown when the match ends in a stale by having
			 * a number of moves with no take over. (Checkers)
			 *
			 * @argument {number} staleCount - Number of moves with no take over
			 */
			staleMoves: string

			/**
			 * Shown when the match ends due to the opponent forfeiting.
			 */
			forfeit: string

			/**
			 * Shown when the match has been won by a player.
			 *
			 * @argument {string} name - Name of the player who has won
			 */
			winner: string

			/**
			 * Shown when the match is ended due to inactivity.
			 */
			inactive: string

			/**
			 * Shown when the match is ended due to missing a number of turns.
			 *
			 * @argument {number} turns - Number of turns that have been missed
			 */
			late: string

			/**
			 * Shown when the match is allowing an action card to be picked.
			 */
			pickActionCard: string

			/**
			 * Shown when the match allows players to select cards from their hand
			 * to play for the round.
			 */
			pickCardSelection: string

			/**
			 * Shown when the match allows players to select cards they wish to get
			 * rid of before the next round starts.
			 */
			handDump: string

			/**
			 * Shown when the match allows players to look through their hand before
			 * the next round starts.
			 */
			handPreview: string

			/**
			 * Shown when the match allows players to vote.
			 */
			voting: string

			/**
			 * Shown when the match shows the vote results.
			 */
			voteResults: string

			/**
			 * Shown when the field is being flipped. (Four in a row)
			 */
			flippingField: string

			/**
			 * Shown when the a row is in the process of being removed. (Four in a row)
			 */
			removingRow: string

			/**
			 * Shown when it is the player's turn. Optionally an argument can
			 * be added at the end indicating which player in case of local play.
			 *
			 * @argument {string} extra - (OPTIONAL) Used to indicate which local player
			 */
			yourTurn: string

			/**
			 * Shown when it is another player's turn.
			 *
			 * @argument {string} name - Name of the player who has their turn
			 */
			nameTurn: string

			/**
			 * Shown when it is the player's turn to break. Optionally an argument can
			 * be added at the end indicating which player in case of local play.
			 *
			 * @argument {string} extra - (OPTIONAL) Used to indicate which local player
			 */
			yourTurnBreaking: string

			/**
			 * Shown when it is another player's turn to break.
			 *
			 * @argument {string} name - Name of the player who has their turn
			 */
			nameTurnBreaking: string

			/**
			 * Shown when it the eight ball pocket has been pocketed illegally.
			 */
			illegallyPocketedEightBall: string

			/**
			 * Indicates which round the game is on.
			 *
			 * @argument {number} current - Current round
			 * @argument {number} total - Total round count
			 */
			roundCount: string
		}
		description: {
			/**
			 * Shown while the match is waiting for players.
			 */
			waitingForPlayers: string

			/**
			 * Shown as the match is counting down to start.
			 *
			 * @argument {number} text - (OPTIONAL) Time shown in text (e.g. "5 seconds")
			 * @argument {number} clock - (OPTIONAL) Time shown as a digital clock (e.g. "00:05")
			 */
			startCountdown: string

			/**
			 * Shown as the match is counting down to start over again.
			 *
			 * @argument {number} text - (OPTIONAL) Time shown in text (e.g. "5 seconds")
			 * @argument {number} clock - (OPTIONAL) Time shown as a digital clock (e.g. "00:05")
			 */
			rematchStartCountdown: string

			/**
			 * Shown while the match is in progress, indicating how long is left
			 * until the match comes to an end.
			 *
			 * @argument {number} text - (OPTIONAL) Time shown in text (e.g. "5 seconds")
			 * @argument {number} clock - (OPTIONAL) Time shown as a digital clock (e.g. "00:05")
			 */
			remainingTimeCountdown: string

			/**
			 * Shown to indicate how much time remains until the next round starts.
			 *
			 * @argument {number} text - (OPTIONAL) Time shown in text (e.g. "5 seconds")
			 * @argument {number} clock - (OPTIONAL) Time shown as a digital clock (e.g. "00:05")
			 */
			nextRoundCountdown: string

			/**
			 * Shown when the player wins the match.
			 */
			youWon: string

			/**
			 * Shown when another player wins the match.
			 *
			 * @argument {string} name - Name of the player who has won
			 */
			nameWon: string
		}
	}

	/**
	 * Placeholder text to be shown in input fields when empty.
	 */
	placeholder: {
		/**
		 * Placeholder card set ID.
		 */
		cardSetId: string

		/**
		 * Placeholder card text content.
		 */
		cardContent: string

		/**
		 * Placeholder card set name.
		 */
		cardSetName: string

		/**
		 * Placeholder match ID.
		 */
		matchId: string

		/**
		 * Placeholder message.
		 */
		message: string

		/**
		 * Placeholder username.
		 */
		username: string

		/**
		 * Placeholder password.
		 */
		password: string
	}

	/**
	 * Language list according to ISO-639 with country code behind for better localisation.
	 */
	language: {
		[key in LanguageList]: string
	}

	/**
	 * Status bar messages. Shown at the very top of the site.
	 */
	status: {
		/**
		 * Shown in the status bar as a means of returning to the main menu.
		 */
		viewAllGames: string

		/**
		 * Shown above the count of how many players are playing against bots.
		 */
		playingAgainstBots: string

		/**
		 * Shown above the count of how many players are playing against other players.
		 */
		playingAgainstPlayers: string

		/**
		 * Counted display of matches waiting.
		 *
		 * @argument {number} count - Amount of matches
		 */
		matchesWaiting: string

		/**
		 * Counted display of amount of players playing this game.
		 *
		 * @argument {number} count - Amount of matches
		 */
		playingGame: string

		/**
		 * Counted displayof total online players.
		 *
		 * @argument {number} count - Amount of players online
		 */
		online: string

		/**
		 * Title above the connection status.
		 */
		connection: string

		/**
		 * Title above the user's ping.
		 */
		ping: string

		/**
		 * Title above the user's time offset.
		 *
		 * This is the time difference in time between the `client`
		 * and the `server`.
		 */
		timeOffset: string

		/**
		 * Title above the user's client version.
		 */
		version: string

		/**
		 * Title above the user's ID.
		 */
		userId: string

		/**
		 * Title shown next to a global notice that may be shown.
		 */
		notice: string
	}

	/**
	 * Game configuration categories.
	 */
	category: {
		misc: string
		field: string
		dump: string
		bomb: string
		filter: string
		times: string
		round: string
		flip: string
		default: string
		fallback: string
		take: string
		tetris: string
		basic: string
		language: string
	}

	/**
	 * Formatted time messages with count support.
	 */
	time: {
		/**
		 * Counted display of hours.
		 *
		 * @argument {number} count - Amount of hours
		 */
		hours: string

		/**
		 * Counted display of minutes.
		 *
		 * @argument {number} count - Amount of minutes
		 */
		minutes: string

		/**
		 * Counted display of seconds.
		 *
		 * @argument {number} count - Amount of seconds
		 */
		seconds: string
	}

	/**
	 * Formatted messages with count support.
	 */
	count: {
		/**
		 * Counted display of kills.
		 *
		 * @argument {number} count - Amount of kills
		 */
		kills: string

		/**
		 * Counted display of deaths.
		 *
		 * @argument {number} count - Amount of deaths
		 */
		deaths: string

		/**
		 * Counted display of lives.
		 *
		 * @argument {number} count - Amount of lives
		 */
		lives: string

		/**
		 * Counted display of files.
		 *
		 * @argument {number} count - Amount of files
		 */
		files: string

		/**
		 * Counted display of points.
		 *
		 * @argument {number} count - Amount of points
		 */
		points: string

		/**
		 * Counted display of pieces.
		 *
		 * @argument {number} count - Amount of pieces
		 */
		pieces: string

		/**
		 * Counted display of wins.
		 *
		 * @argument {number} count - Amount of wins
		 */
		wins: string

		/**
		 * Counted display of cards.
		 *
		 * @argument {number} count - Amount of cards
		 */
		cards: string

		/**
		 * Counted display of moves.
		 *
		 * @argument {number} count - Amount of moves
		 */
		moves: string

		/**
		 * Counted display of playing players.
		 *
		 * @argument {number} count - Amount of players playing
		 */
		playing: string

		/**
		 * Counted display of players.
		 *
		 * @argument {number} count - Amount of players
		 */
		players: string

		/**
		 * Counted display of selected cards.
		 *
		 * @argument {number} count - Amount of selected cards
		 */
		selectedCards: string

		/**
		 * Counted display of matches.
		 *
		 * @argument {number} count - Amount of matches
		 */
		matches: string

		/**
		 * Counted display of found matches.
		 *
		 * @argument {number} count - Amount of found matches
		 */
		matchesFound: string

		/**
		 * Counted display of waiting matches.
		 *
		 * @argument {number} count - Amount of waiting matches
		 */
		matchesWaiting: string

		/**
		 * Counted display of amount of players are still needed.
		 *
		 * @argument {number} count - Amount of players needed
		 */
		needMorePlayers: string

		/**
		 * Counted display of a button allowing you to play against bots.
		 *
		 * @argument {number} count - Amount of bots
		 */
		playAgainstBots: string

		/**
		 * Counted display of a button allowing you to play against random opponents.
		 *
		 * @argument {number} count - Amount of opponents
		 */
		playRandomOpponents: string

		/**
		 * Counted display of amount of turns until a flip commences.
		 *
		 * @argument {number} count - Amount of turns until a flip
		 */
		turnsToFlip: string

		/**
		 * Counted display of the increment jump.
		 *
		 * @argument {number} count - Value of a single increment jump
		 */
		increment: string
	}

	/**
	 * Miscelleanous messages that may be used in a number of cases.
	 *
	 * These are short, reusable, and are generally used for titles or buttons.
	 */
	misc: {
		beta: string
		about: string
		public: string
		private: string
		add: string
		remove: string
		yes: string
		no: string
		disabled: string
		enabled: string
		excluded: string
		included: string
		new: string
		fixed: string
		changed: string
		guest: string
		settings: string
		localPlay: string
		preset: string
		you: string
		home: string
		bot: string
		bots: string
		vibration: string
		unavailable: string
		changeLog: string
		status: string
		information: string
		language: string
		toggle: string

		/**
		 * Button (and title) in relation to a logging in.
		 */
		login: string

		/**
		 * Title shown when maintenance is active.
		 */
		maintenance: string

		/**
		 * Title shown in the admin interface.
		 */
		admin: string

		/**
		 * NSFW tag.
		 */
		nsfw: string

		/**
		 * Specific cards tag. Used for obscure cards which are specific
		 * in nature. (e.g. brands, names)
		 */
		specificCards: string

		/**
		 * Title shown above the Match ID to be shared.
		 */
		matchId: string

		/**
		 * Shown above a chat settings and toggle button.
		 */
		chat: string

		/**
		 * Shown in the match browser, showing the name of the host.
		 */
		host: string

		/**
		 * Singular player. Shown as a leaderboard column.
		 */
		player: string

		/**
		 * Plural players. Shown as a column above player counts.
		 */
		players: string

		/**
		 * Generic loading text which is shown while content is being fetched.
		 */
		loading: string

		/**
		 * Percentage display.
		 *
		 * @argument {number} percentage - Percentage number
		 */
		percentage: string

		/**
		 * Percentage display with disabled appendix.
		 *
		 * @argument {number} percentage - Percentage number
		 */
		percentageDisabled: string

		/**
		 * Scroll back down text that is shown when the user has scrolled up
		 * in a chat or other scrollbox.
		 */
		scrollBackDown: string

		/**
		 * Text encouraging player to pick for themselves.
		 */
		pickYourself: string

		/**
		 * Warning indicator that is shown to the player when their ping is high.
		 *
		 * @argument {number} ping - Ping in milliseconds
		 */
		highPing: string

		/**
		 * Current round.
		 *
		 * @argument {number} current - Current round number
		 * @argument {number} total - Total number of rounds
		 */
		currentRoundCount: string

		/**
		 * Current amount of players wishing to skip.
		 *
		 * @argument {number} current - Current amount of players wishing to skip
		 * @argument {number} total - Needed amount of players to skip
		 */
		currentSkipCount: string

		/**
		 * Current amount of players who are ready.
		 *
		 * @argument {number} current - Current amount of players who are ready
		 * @argument {number} total - Needed amount of players to be ready
		 */
		currentReadyCount: string

		/**
		 * Shown when the player is assigned a type.
		 *
		 * @argument {string} type - Type or name
		 */
		assignedTypeSelf: string

		/**
		 * Shown when the player is assigned a type but they are
		 * on local play and must be addressed by their index.
		 *
		 * @argument {number} index - Local player index
		 * @argument {string} type - Type or name
		 */
		assignedTypeSelfLocal: string

		/**
		 * Button (and title) in relation to a broadcast across the site.
		 */
		broadcast: string

		/**
		 * Button to confirm and proceed.
		 */
		confirm: string

		/**
		 * Button to close a window.
		 */
		close: string

		/**
		 * Button to confirm an edit action.
		 */
		edit: string

		/**
		 * Button to perform a delete action.
		 */
		delete: string

		/**
		 * Button to cancel an action.
		 */
		cancel: string

		/**
		 * Button to reset any changes that may have been made.
		 */
		reset: string

		/**
		 * Button to start playing when visiting the site for the
		 * first time.
		 */
		start: string

		/**
		 * Button to download content.
		 */
		download: string

		/**
		 * Button to share content.
		 */
		share: string

		/**
		 * Button to copy content.
		 */
		copy: string

		/**
		 * Button to view additional content.
		 */
		view: string

		/**
		 * Button to open a donation page.
		 */
		donate: string

		/**
		 * Button to forfeit a game.
		 */
		forfeit: string

		/**
		 * Button to process files.
		 */
		processFiles: string

		/**
		 * Button to send a message.
		 */
		sendMessage: string

		/**
		 * Button to refresh the window.
		 */
		refreshWindow: string

		/**
		 * Button to make another player a host.
		 */
		makeHost: string

		/**
		 * Button to kick another player.
		 */
		kickUser: string

		/**
		 * Button to return to the menu.
		 */
		returnToMenu: string

		/**
		 * Button to return to the game lobby.
		 */
		returnToLobby: string

		/**
		 * Button to play as guest, when the player
		 * has not customised their profile.
		 */
		playAsGuest: string

		/**
		 * Shown in the leaderboard as a column name.
		 */
		averageLength: string

		/**
		 * Shown in the leaderboard as a column name.
		 */
		largestTake: string

		/**
		 * Shown in the leaderboard as a column name.
		 */
		takes: string

		/**
		 * Shown in the leaderboard as a column name.
		 */
		pieces: string

		/**
		 * Shown in the leaderboard as a column name.
		 */
		words: string

		/**
		 * Shown in the leaderboard as a column name.
		 */
		score: string

		/**
		 * Shown in the leaderboard as a column name.
		 */
		rank: string

		/**
		 * Shown in the leaderboard as a column name.
		 */
		kills: string

		/**
		 * Shown in the leaderboard as a column name.
		 */
		points: string

		/**
		 * Shown in the leaderboard as a column name.
		 */
		wins: string

		/**
		 * Shown in the leaderboard as a column name.
		 */
		pocketed: string

		/**
		 * Shown in the leaderboard as a column name.
		 */
		shots: string

		/**
		 * Shown in the leaderboard as a column name.
		 */
		deaths: string

		/**
		 * Shown between different items, such as names.
		 *
		 * E.g. `<name> and <name>`
		 */
		and: string

		/**
		 * Shown between different items, such as names.
		 *
		 * E.g. `<name> vs <name>`
		 */
		vs: string

		/**
		 * Button to select all options.
		 */
		selectAll: string

		/**
		 * Button to deselect all options.
		 */
		deselectAll: string

		/**
		 * Button to reset own player data.
		 */
		resetData: string

		/**
		 * Button to customise profile settings.
		 */
		customize: string

		/**
		 * Button to invite other players.
		 */
		inviteOthers: string

		/**
		 * Shown to indicate any active filters.
		 */
		activeFilters: string

		/**
		 * Shown underneath the number range selector indicating the
		 * minimum and maximum values the user may select.
		 *
		 * @argument {number} min - Minimum amount
		 * @argument {number} max - Maximum amount
		 */
		minMax: string

		/**
		 * Used to display who made an item or entry.
		 *
		 * @argument {string} name - Name of the creator
		 */
		madeBy: string

		/**
		 * Used to display how much of the size limit is currently in use.
		 *
		 * @argument {string} current - Current amount in bytes (typically KB)
		 * @argument {string} total - Limited amount in bytes (typically KB)
		 */
		selectedOfLimit: string

		/**
		 * Shown at the bottom of the language dropdown, encouraging
		 * people to help localise the content.
		 */
		helpLocalise: string

		/**
		 * Button that links to the Discord server.
		 */
		discord: string

		/**
		 * Volume title above volume settings.
		 */
		volume: string

		/**
		 * Title for the interface volume setting.
		 */
		volumeInterface: string

		/**
		 * Title for the effects volume setting.
		 */
		volumeEffects: string

		/**
		 * Button to return to the main game menu.
		 */
		gameMenu: string

		/**
		 * Title for the user's language setting.
		 */
		selectYourLanguage: string

		/**
		 * Title for the user's color setting.
		 */
		selectYourColor: string

		/**
		 * Title for the latest changes.
		 */
		latestChanges: string

		/**
		 * Title for when something remains unchanged.
		 */
		noChangesDetected: string

		/**
		 * Title for when there are new changes.
		 */
		newChanges: string

		/**
		 * Button to save any changes that may have been made.
		 */
		saveChanges: string

		/**
		 * Button to see previous changes in the changelog.
		 */
		previousChanges: string
	}

	/**
	 * Card related messages.
	 */
	card: {
		/**
		 * Shown when there are no cards while trying to view
		 * available cards of a type in a card set.
		 */
		empty: string

		/**
		 * Title for where a total card count is shown.
		 */
		total: string

		/**
		 * Title above the dropdown to switch between action or
		 * response cards.
		 */
		view: string

		/**
		 * Shown in the custom card editor.
		 */
		editor: {
			/**
			 * Title of the Card Editor modal.
			 */
			title: string

			/**
			 * Setting title for the name of the custom card set.
			 */
			name: string

			/**
			 * Setting title to switch between card types.
			 */
			type: string

			/**
			 * Setting title to fill in the content of the card.
			 */
			content: string

			/**
			 * Setting subtitle explaining that using an underscore (_) marks
			 * a space for a reaction card.
			 */
			contentUnderscore: string

			/**
			 * Setting title to select how many cards you must pick
			 * after the card has been played.
			 */
			pick: string

			/**
			 * Button to create the card.
			 */
			create: string

			/**
			 * Notification after a card has been deleted.
			 */
			deleted: string

			/**
			 * Notification after a card has been edited.
			 */
			edited: string

			/**
			 * Notification after a card has been created.
			 */
			created: string
		}

		/**
		 * Type of card.
		 */
		type: {
			/**
			 * Black action card.
			 */
			black: string
			/**
			 * White response card.
			 */
			white: string
		}

		/**
		 * Related to the (custom) card sets.
		 */
		sets: {
			/**
			 * Title shown above a list of all the card sets in use
			 * in a lobby.
			 */
			title: string

			/**
			 * Button which opens the public repository where people
			 * can suggest, edit, or add new custom card sets.
			 */
			contribute: string

			/**
			 * Button which creates a new custom card set.
			 */
			create: string

			/**
			 * Button (and title) to the custom card set browser and
			 * importer popup.
			 */
			browser: string

			/**
			 * Button which switches to the Card Set Importer popup.
			 */
			import: string

			/**
			 * Title for the custom card set importer popup.
			 */
			importer: string

			/**
			 * Title while viewing a custom card set.
			 */
			namedTitle: string

			/**
			 * Button (and title) to view custom card sets.
			 */
			custom: string

			/**
			 * Title above the available custom card sets.
			 */
			default: string

			/**
			 * Shown when the user has no custom card sets.
			 */
			noneFound: string

			/**
			 * Shown when the user is in a lobby and the host
			 * has not (yet) selected any card sets.
			 */
			noneSelected: string

			/**
			 * Title shown above the custom card set importer using
			 * an ID from a popular card set provider.
			 */
			importById: string

			/**
			 * Title shown next to a button allowing a user to add
			 * any missing card set to their own library.
			 */
			notInOwnLibrary: string

			/**
			 * Button shown while in a lobby and viewing the card sets as a host.
			 *
			 * In case the host does not yet have this card set in their own
			 * library they can press this button to save it locally.
			 */
			addToLibrary: string

			/**
			 * Button to save the card set locally.
			 *
			 * Text should be short.
			 */
			entrySave: string

			/**
			 * Text indicating a card set has been saved.
			 *
			 * Text should be short.
			 */
			entrySaved: string

			/**
			 * Text indicating a card is being downloaded & saved.
			 *
			 * Text should be short.
			 */
			entryProcessing: string

			/**
			 * Card sets related information (tooltips, explanations)
			 */
			info: {
				/**
				 * Shown as a summary of how many card sets have been processed
				 * and added to the user's library.
				 *
				 * @argument {number} total - Amount of processed card sets
				 */
				importFinished: string

				/**
				 * Shown while card sets are being importer, as a progress indicator.
				 *
				 * @argument {number} current - Amount of processed card sets
				 * @argument {number} total - Amount of card sets that are to being imported
				 */
				importProgress: string

				/**
				 * Shown when something goes wrong attempting to import a custom
				 * card set.
				 *
				 * @argument {string} name - Name of the card set
				 */
				importFailed: string

				/**
				 * Shown when the user is looking at an empty folder in the custom
				 * card set browser.
				 */
				emptyFolder: string

				/**
				 * Shown when you are looking at an empty list where there would
				 * otherwise be custom card sets.
				 */
				emptyList: string

				/**
				 * Shown when the player is looking at the card sets in a match
				 * and isn't the host while there are no custom card sets used.
				 */
				emptyListNotHost: string

				/**
				 * Shown when the host has not selected any card sets in a match.
				 */
				noneSelected: string

				/**
				 * Shown to the user when they are able to add a card set to their
				 * own library which they previously did not have saved.
				 */
				notInOwnLibrary: string

				/**
				 * Shown to explain to the user how to import a custom card set from
				 * a third party provider by using their ID.
				 */
				importById: string

				/**
				 * Shown as disclaimer on CSV files as they might not result in a flawless
				 * imported custom card set.
				 */
				csv: string

				/**
				 * Shown as confirmation to the user before they delete a custom card set
				 * from their library.
				 *
				 * @argument {string} name - Card set name
				 */
				delete: string

				/**
				 * Shown as explanation about where custom card sets are stored and how to
				 * keep them safe.
				 */
				storage: string

				/**
				 * Shown as explanation as to why a user might not see their own custom card sets
				 * while looking at the card sets in a match.
				 */
				notHost: string

				/**
				 * Shown at the bottom of the custom card sets when a host in a match. This informs the
				 * user of a server side card set size limit and how much space is left.
				 *
				 * @argument {string} size - Total custom card set limit in bytes (typically kb)
				 */
				sizeLimit: string

				/**
				 * Shown as disclaimer regarding the card filter functionality.
				 */
				filterDisclaimer: string
			}
		}

		/**
		 * Card related information (tooltips, explanations)
		 */
		info: {
			/**
			 * Shown when the judge(s) have to pick an action card
			 * for the next round.
			 */
			pickAction: string

			/**
			 * Shown to other players as they wait for the judge to pick
			 * an action card for the next round.
			 *
			 * @argument {string} name - Name of the judge
			 */
			judgePickingActionCard: string

			/**
			 * Shown to the judge while they wait for everyone to make
			 * their card selections.
			 */
			waitForSelections: string

			/**
			 * Shown when everyone is given a moment to look at their
			 * cards before the match continues.
			 */
			preview: string

			/**
			 * Shown when everyone is given a moment to select any
			 * cards they might want to get rid off. New cards are given
			 * in return when everyone is ready.
			 */
			dump: string

			/**
			 * Shown when the user tries to view action/response cards
			 * but there are none.
			 *
			 * @argument {string} type - Card type (switches between action/response)
			 */
			noType: string

			/**
			 * Shown when the user wishes to delete a card, as confirmation.
			 */
			delete: string

			/**
			 * Shown to everyone when the winning card selection has been
			 * selected by the judge(s). Revealing who was behind the winning
			 * play for that round.
			 *
			 * @argument {string} name - Name of the winner
			 * @argument {string} option - Winning option
			 */
			winningOption: string

			/**
			 * Shown as tooltip to explain how the total number of cards is calculated
			 * and what factors may influence the outcome.
			 */
			actionResponseCardCounter: string

			/**
			 * Button to navigate card selections for themselves.
			 */
			navigateSelf: string

			/**
			 * Button to see and follow what card selection the judge is looking at.
			 */
			navigateFollowJudge: string
		}
	}

	/**
	 * Match related messages
	 */
	match: {
		/**
		 * Button to create a new custom match.
		 */
		create: string

		/**
		 * Button to leave the match.
		 */
		leave: string

		/**
		 * Button to join the match.
		 */
		join: string

		/**
		 * The text the button shows while it is full.
		 */
		full: string

		/**
		 * Button to request a rematch.
		 */
		rematch: string

		/**
		 * Shown while in the game lobby.
		 */
		lobby: {
			/**
			 * Button to start the match once it is ready.
			 */
			start: string

			/**
			 * Button to start the match once it is ready.
			 */
			cancelCountdown: string

			/**
			 * Button shown while the match is counting down to start.
			 */
			starting: string

			/**
			 * Button shown while waiting for the host to start the match.
			 */
			waiting: string
		}

		/**
		 * Shown in relation to the available match browser.
		 */
		browser: {
			/**
			 * Button to enter the match browse list.
			 */
			list: string

			/**
			 * Shown at the bottom of the match browser, as title above the amount
			 * of listed matches.
			 */
			available: string

			/**
			 * Shown when there are no available matches in the match browser.
			 */
			noneAvailable: string
		}

		/**
		 * Shown in relation to matchmaking.
		 */
		matchmaking: {
			/**
			 * Shown when the player is waiting for a matchmaking match for
			 * at least X amount of seconds.
			 */
			tiredOfWaiting: string

			/**
			 * Button to cancel matchmaking.
			 */
			cancel: string

			/**
			 * Shown while matchmaking and looking for opponents.
			 *
			 * @argument {string} time - Time spent searching
			 */
			searching: string

			/**
			 * Shown when a match has been found while matchmaking.
			 *
			 * @argument {string} time - Time until match starts
			 */
			found: string
		}

		/**
		 * Match related information (tooltips, explanations)
		 */
		info: {
			/**
			 * Shown in a popup modal informing you that you are about to
			 * make another player the host of the match.
			 *
			 * @argument {string} name - Nickname of the target player
			 */
			makeHost: string

			/**
			 * Shown in a popup modal informing you that you are about to
			 * kick another player from the match.
			 *
			 * @argument {string} name - Nickname of the target player
			 */
			kickUser: string

			/**
			 * Shown when there are no available matches in the match browser.
			 * It aims to inform the user that new matches will show up once
			 * they become available.
			 */
			noMatches: string

			/**
			 * Shown at the end of a match, asking if the player would like to
			 * play again.
			 */
			rematch: string

			/**
			 * Shown after the user has requested or joined a rematch and is now
			 * waiting for their opponent(s) to join.
			 */
			rematchWaiting: string

			/**
			 * Shown if another player has requested a rematch, requesting you
			 * to accept their invite.
			 *
			 * @argument {string} name - Name of the player who requested a rematch
			 */
			rematchRequest: string

			/**
			 * Shown in a popup allowing the user to fill in the match ID to join
			 * a private match.
			 */
			joinById: string

			/**
			 * Tooltip explaining public matches.
			 */
			public: string

			/**
			 * Tooltip explaining private matches.
			 */
			private: string

			/**
			 * Shown next to the "Return to Lobby" button in the match
			 * settings editor.
			 */
			finishedSettings: string

			/**
			 * Shown in leave popup informing the user they may not be able
			 * to return.
			 */
			leave: string

			/**
			 * Shown in leave popup informing the user they are the last person
			 * in the match and that the match will be closed when they leave.
			 */
			leaveLast: string

			/**
			 * Shown in leave popup informing the user they are the host and that
			 * somebody else will become the host when they leave.
			 */
			leaveAsHost: string
		}
	}

	/**
	 * Generic information (tooltips, explanations)
	 */
	info: {
		/**
		 * Shown as a notice when a game is still in beta. It encourages players
		 * to report feedback.
		 *
		 * @argument {string} social - Link to the social where players can give feedback
		 */
		betaNotice: string

		/**
		 * Shown as a button on the page for the game.
		 */
		howToPlay: string

		/**
		 * Shown in tooltip when a step or setting can be skipped if
		 * over half the users vote to do so.
		 */
		skipStepOverHalf: string

		/**
		 * Shown in tooltip when a step or setting can be skipped if
		 * all the users vote to do so.
		 */
		skipStepAll: string

		/**
		 * Shown in tooltip when the remaining time can go down when
		 * everyone has voted.
		 */
		voteReduceTime: string

		/**
		 * Shown as disclaimer that the interface may be resized automatically
		 * in order to fit the game playing field.
		 */
		interfaceAutoResize: string

		/**
		 * Shown when you are given the turn after your opponent runs out of time.
		 */
		opponentMissedTurn: string

		/**
		 * Shown as explanation above the local play widget, which allows multiple
		 * people to alternate turns on the same device.
		 */
		localPlay: string

		/**
		 * Shown in tooltip explaining what ping means and what you may experience
		 * when you have a high ping.
		 */
		highPing: string

		/**
		 * Shown in tooltip on an indicator that means the game has bot support and
		 * can be played against bots.
		 */
		hasBots: string

		/**
		 * Shown in tooltip over an inactive user in a match.
		 */
		inactiveUser: string

		/**
		 * Shown in notification when something has been copied to the clipboard.
		 */
		copiedToClipboard: string

		/**
		 * Title shown when there are no messages.
		 */
		noMessages: string

		/**
		 * Title shown when there are no messages yet, encouraging the user
		 * to the be first to send a message.
		 */
		sendFirstMessage: string

		/**
		 * Shown when the user is looking at their own submission or attempting
		 * to vote for themselves.
		 */
		voteSelf: string

		/**
		 * Shown when the user can vote for an option.
		 *
		 * @argument {string} option - Option slot
		 */
		votePick: string

		/**
		 * Shown when the user has already voted, but can still change
		 * their voted for option.
		 *
		 * @argument {string} option - Option slot
		 */
		votePickChange: string

		/**
		 * Shown when the user has voted for an option.
		 *
		 * @argument {string} option - Option slot
		 */
		votePickSelected: string

		/**
		 * Shown when the player has won due to an inactive opponent.
		 */
		inactiveOpponent: string

		/**
		 * Shown when the player has won due to all opponents being inactive.
		 */
		inactiveOpponents: string

		/**
		 * Shown in the box at the bottom of the game page allowing you
		 * to return to the home page.
		 */
		gameMenu: string

		/**
		 * Shown in a popup when the user is about to forfeit.
		 */
		forfeit: string

		/**
		 * Shown in a popup when the user is about to do something before
		 * having saved their changes.
		 */
		unsavedChanges: string

		/**
		 * Shown in a popup when the user is about to reset all their
		 * profile data.
		 */
		resetData: string

		/**
		 * Shown when making or joining a match is temporarily unavailable.
		 *
		 * e.g. during server maintenance
		 */
		matchesDisabled: string

		/**
		 * Shown in the file uploader.
		 */
		fileUpload: string

		/**
		 * Shown in the file uploader at the bottom of already added files.
		 */
		fileUploadMore: string

		/**
		 * Shown as explanation when a download will commence automatically.
		 */
		fileDownloadAutomatically: string

		/**
		 * Shown as explanation when a download requires the user to manually
		 * take action.
		 */
		fileDownloadManually: string

		/**
		 * Title shown above the popup modal to join a match.
		 */
		gameJoin: string

		/**
		 * Title shown above the popup modal with help and
		 * information about a match.
		 */
		gameHelp: string

		/**
		 * Title shown above the popup modal asking the user
		 * whether or not they are sure.
		 */
		areYouSure: string

		/**
		 * List of pool types.
		 */
		poolType: {
			[PoolGameGroup.solid]: string
			[PoolGameGroup.stripe]: string
		}

		/**
		 * List of pool fouls.
		 */
		poolFoul: {
			/**
			 * Foul message for when a user has pocketed the cue ball.
			 *
			 * @argument {string} name - Name of the offender
			 */
			[PoolGameFoulType.cueBallPocket]: string

			/**
			 * Foul message for when a user did not hit a ball during their turn.
			 *
			 * @argument {string} name - Name of the offender
			 */
			[PoolGameFoulType.cueBallHitNoBall]: string

			/**
			 * Foul message for when a user hit a ball of the wrong type first.
			 *
			 * @argument {string} name - Name of the offender
			 */
			[PoolGameFoulType.cueBallHitWrongBall]: string

			/**
			 * Foul message for when less than two balls hit a cushion after breaking.
			 */
			[PoolGameFoulType.cushionHitsLessThanTwo]: string

			/**
			 * Foul message for when no ball hit a cushion after contact.
			 */
			[PoolGameFoulType.cushionHitsLessThanOne]: string

			/**
			 * Foul message for when a user pocketed the 8 ball while comitting a different foul.
			 *
			 * @argument {string} name - Name of the offender
			 */
			[PoolGameFoulType.illegalEightBallPocket]: string

			/**
			 * Foul message for when a user pocketed the 8 ball too soon.
			 *
			 * @argument {string} name - Name of the offender
			 */
			[PoolGameFoulType.illegalEightBallPocketTooSoon]: string

			/**
			 * Foul message for when a user pocketed a ball of the incorrect type.
			 *
			 * @argument {string} name - Name of the offender
			 */
			[PoolGameFoulType.pocketedWrongBall]: string
		}

		/**
		 * About information.
		 */
		about: {
			/**
			 * Description explaining what Bloob.io is.
			 */
			description: string

			/**
			 * Description explaining licensing options.
			 */
			licensing: string

			/**
			 * Title for the developer.
			 *
			 * @argument {string} name - Name of the source (will include a link)
			 */
			developedBy: string

			/**
			 * Title for the icon source.
			 *
			 * @argument {string} name - Name of the source (will include a link)
			 */
			iconsSource: string

			/**
			 * Title for the sound source.
			 *
			 * @argument {string} name - Name of the source (will include a link)
			 */
			soundsSource: string

			/**
			 * Title for the Rotten Apples source.
			 */
			rottenApplesSource: string

			/**
			 * Title mentioning the volunteer contributors.
			 */
			localization: string
		}
	}
}
