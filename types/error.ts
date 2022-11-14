export type ErrorMessage = {
	/**
	 * Errors in relation to network rate limiting. This occurs if a user makes
	 * too many requests in a certain period of time. They may be temporarily
	 * blocked from making any requests in response.
	 */
	rateLimit: {
		/**
		 * The secure channel has a rate limit with a much lower tolerance. A user may
		 * hit the limit faster. (e.g. a login field)
		 */
		secure: string
		generic: string
	}

	/**
	 * Generic errors that may be used in a variety of cases.
	 */
	generic: {
		/**
		 * Shown when the user has been trying to connect to the server but has failed to do so.
		 */
		unableToConnectToServer: string

		/**
		 * Error that occurs when the client has desynchronised.
		 */
		desync: string

		/**
		 * When a player already has an active socket connection in another tab, the
		 * oldest connection will be closed and this error message will appear.
		 */
		alreadyConnected: string

		/**
		 * Generic error title mentioning an error has happened.
		 */
		title: string

		/**
		 * Error when user supplied data is invalid.
		 */
		invalid: string

		/**
		 * Error when a texture has failed to load.
		 *
		 * @argument {string} id - Texture ID
		 */
		texture: string

		/**
		 * Error when an inactive action type is given.
		 *
		 * @argument {string} type - An action type
		 */
		invalidAction: string

		/**
		 * Error shown when an action is attempted while the server
		 * is in maintenance mode.
		 */
		maintenance: string

		/**
		 * Error for when the user did not send over all the required arguments.
		 */
		missingArguments: string

		/**
		 * Error for when the user did not send over the required action.
		 */
		missingAction: string

		/**
		 * Error shown when the server and client are running different versions.
		 *
		 * @argument {string} client - Client version
		 * @argument {string} server - Server version
		 */
		versionMismatch: string

		/**
		 * Error when the user attempts to perform an action to themselves they
		 * are unable to perform.
		 */
		cannotSelf: string

		/**
		 * Error when player tries to perform an action targeting a bot.
		 */
		actionAgainstBot: string

		/**
		 * Error when player tries to perform an action targeting an inactive user.
		 */
		againstAgainstInactiveUser: string

		/**
		 * Error when the user with a given ID is not in the match.
		 */
		invalidUser: string

		/**
		 * Error when the user tries to perform an action at a time
		 * that is not possible.
		 */
		invalidTime: string

		/**
		 * Error when something could not be copied to the clipboard.
		 */
		clipboard: string
	}

	/**
	 * Configuration related errors.
	 */
	config: {
		/**
		 * Invalid configuration type given.
		 *
		 * @argument {string} type - Configuration type name
		 */
		invalidType: string

		/**
		 * Invalid configuration option given.
		 *
		 * @argument {string} option - Configuration option
		 */
		invalidOption: string

		/**
		 * Invalid configuration argument.
		 *
		 * @argument {string} id - Configuration ID
		 * @argument {string | number} argument - Configuration target argument
		 */
		invalidArgument: string

		/**
		 * Error related to a configuration type that cannot be modified.
		 *
		 * @argument {string} type - Configuration type
		 */
		displayOnly: string

		/**
		 * Error when user tries to set the configuration type to anything
		 * other than an integer.
		 *
		 * @argument {string} id - Configuration ID
		 */
		integer: string

		/**
		 * Error when user tries to exceed the max value allowed for this
		 * configuration option.
		 *
		 * @argument {string} id - Configuration ID
		 * @argument {number} max - Configuration max value
		 */
		max: string

		/**
		 * Error when user tries to exceed the min value allowed for this
		 * configuration option.
		 *
		 * @argument {string} id - Configuration ID
		 * @argument {number} min - Configuration min value
		 */
		min: string

		/**
		 * Error when user tries to use an increment that does not match
		 * the expected step.
		 *
		 * @argument {string} id - Configuration ID
		 * @argument {number} increment - Configuration increment value
		 */
		increment: string

		/**
		 * Error when mininium length exceeds the maximum length.
		 */
		minExceedMaxLength: string

		/**
		 * Error when maximum length exceeds the mininium length.
		 */
		maxSubceedMinLength: string
	}

	/**
	 * Errors that prevent a game from being started.
	 */
	start: {
		/**
		 * Error when game field cannot support more rows than is given.
		 *
		 * @argument {number} rows - Number of rows
		 */
		fieldRows: string

		/**
		 * Error when the field cannot support the number of players in the match.
		 *
		 * @argument {number} users - Number of users
		 */
		fieldCannotFitUsers: string

		/**
		 * Error when the number of response cards does not meet the minimium
		 * required amount.
		 *
		 * @argument {number} count - Number of cards
		 */
		whiteCardThreshold: string

		/**
		 * Error when the number of action cards does not meet the minimium
		 * required amount.
		 *
		 * @argument {number} count - Number of cards
		 */
		blackCardThreshold: string

		/**
		 * Error when the match is being started without the minimum required
		 * amount of players.
		 *
		 * @argument {number} min - Minimum number of players required to start the match
		 */
		insufficientPlayers: string
	}

	/**
	 * Game specific errors. Related to errors in gameplay.
	 */
	game: {
		/**
		 * Error when velocity is out of the permitted min-max range.
		 */
		velocity: string

		/**
		 * Message shown as an error when a player has forfeited.
		 *
		 * @argument {string} name - Name of the player who forfeited
		 */
		playerForfeited: string

		/**
		 * Missed turn warning message.
		 *
		 * @argument {number} current - Current number of missed turns
		 * @argument {number} threshold - The maximum amount turns that may be missed in a row
		 */
		missedTurnWarning: string

		/**
		 * Missed turn kick message.
		 *
		 * @argument {number} current - Current number of missed turns
		 */
		missedTurnKick: string

		/**
		 * Missed turn warning message. A move was made on the player's behalf.
		 *
		 * @argument {number} current - Current number of missed turns
		 * @argument {number} threshold - The maximum amount turns that may be missed in a row
		 */
		autoTurnWarning: string

		/**
		 * Missed turn kick message. A move was made on the player's behalf.
		 *
		 * @argument {number} current - Current number of missed turns
		 */
		autoTurnKick: string

		/**
		 * Error when the player cannot make a move as they are stuck.
		 */
		stuckSkip: string

		/**
		 * Error when the player is eliminated for being stuck too many moves in a row.
		 */
		stuckThreshold: string

		/**
		 * Error when all players are stuck and cannot make any more moves. Resulting in
		 * the match coming to a conclusion.
		 */
		allStuck: string

		/**
		 * Error when the game type does not exist.
		 *
		 * @argument {string} type - Game type
		 */
		invalid: string

		/**
		 * Error when the move a player attempted to do was invalid.
		 */
		invalidMove: string

		/**
		 * Error when the vote attempt is invalid.
		 */
		invalidVote: string

		/**
		 * Error when the player has already placed something.
		 */
		alreadyPlaced: string

		/**
		 * Error when the player has already voted.
		 */
		alreadyVoted: string

		/**
		 * Error when the player attempts to place a piece on an
		 * invalid location.
		 */
		invalidPlacement: string

		/**
		 * Error when the player attempts to place a bomb on an
		 * invalid location.
		 */
		invalidBombPlacement: string

		/**
		 * Error when one of the cells in the selection has been
		 * claimed already.
		 */
		cellClaimed: string

		/**
		 * Error when the colour the player wants to select has
		 * already been claimed.
		 */
		colorClaimed: string

		/**
		 * Error when the column or row is invalid.
		 */
		invalidColumnRow: string

		/**
		 * Error when the column is invalid.
		 */
		invalidColumn: string

		/**
		 * Error when the word is not found in the used dictionary.
		 */
		invalidWord: string

		/**
		 * Error when the word is too short.
		 */
		wordTooShort: string

		/**
		 * Error when the word is too long.
		 */
		wordTooLong: string
	}

	/**
	 * Game card related errors.
	 */
	card: {
		/**
		 * Error when unable to download card sets.
		 */
		loadingSets: string

		/**
		 * Error when the card data is invalid.
		 */
		invalid: string

		/**
		 * Error when the card set data is invalid.
		 */
		invalidSet: string

		/**
		 * Error when the card selection is invalid.
		 */
		invalidSelection: string

		/**
		 * Error when the card is not in the player's hand.
		 */
		notInHand: string

		/**
		 * Error attempting to download the card set data.
		 */
		loadError: string

		/**
		 * Error when user places multiple underscores after
		 * each other in a card.
		 */
		underscore: string

		/**
		 * Error when the card is empty.
		 */
		empty: string

		/**
		 * Error when the card contains too many underscores, which
		 * requests too many response cards.
		 */
		pickLimit: string

		/**
		 * Error when card set size exceeds the byte limit.
		 *
		 * @argument {string} limit - Size limit in bytes (usually kb)
		 */
		setSizeLimit: string

		/**
		 * Error when the card set name is too long or too short.
		 */
		setName: string
	}

	/**
	 * Game match preset configuration. These are pre-made configurations
	 * a player can select while in the lobby.
	 */
	preset: {
		/**
		 * Error when the user attempts to apply the current preset again.
		 */
		alreadyApplied: string

		/**
		 * Error when the preset ID is invalid.
		 *
		 * @argument {string} id - The ID or name of the preset
		 */
		invalid: string
	}

	/**
	 * Match and matchmaking related errors.
	 */
	match: {
		/**
		 * Error when the match has been closed due to no players being left over.
		 */
		empty: string

		/**
		 * Error when the user did not accept a rematch request on time
		 * and got sent back to the menu.
		 */
		rematchTimeout: string

		/**
		 * Error when a rematch was cancelled due to the insufficient players.
		 */
		rematchCancelled: string

		/**
		 * Error when a match is closed due to inactivity.
		 */
		inactive: string

		/**
		 * Error warning when a match is about to be closed due to inactivity.
		 */
		inactiveWarning: string

		/**
		 * Error when the player cannot rejoin due to inactivity.
		 */
		replacedByBot: string

		/**
		 * Error when the player has been kicked from the match.
		 */
		kicked: string

		/**
		 * Error when the player has been kicked from the match due to
		 * the match being deleted.
		 */
		deleted: string

		/**
		 * Error when the match ID is not valid.
		 *
		 * @argument {string | number} id - Match ID
		 */
		invalid: string

		/**
		 * Error when the player tries to join a match against the computer.
		 */
		computer: string

		/**
		 * Error when the player tries to join a private match without the ID.
		 */
		private: string

		/**
		 * Error when the player tries to join a match that is already
		 * in progress.
		 */
		inProgress: string

		/**
		 * Error when the player tries to join a full match.
		 *
		 * @argument {number} current - Current amount of players
		 * @argument {number} max - Maximum amount of players
		 */
		full: string
	}

	/**
	 * Profile customisation related errors.
	 */
	profile: {
		/**
		 * Error shown when a nickname appears to contain profanity.
		 */
		profanity: string

		/**
		 * Error shown when there is missing profile data.
		 */
		missingData: string

		/**
		 * Error shown when the nickname is invalid.
		 */
		invalidNickname: string

		/**
		 * Error shown when the picture is invalid.
		 */
		invalidPicture: string

		/**
		 * Error when the nickname is too long.
		 *
		 * @argument {number} current - Current amount of characters
		 * @argument {number} max - Maximum allowed characters
		 */
		nicknameMaxLength: string

		/**
		 * Error when the nickname is too short.
		 *
		 * @argument {number} current - Current amount of characters
		 * @argument {number} min - Minimum allowed characters
		 */
		nicknameMinLength: string

		/**
		 * Error when nickname contains characters that are not permitted.
		 */
		nicknameAllowedCharacters: string

		/**
		 * Error when attempting to customise while in an active game.
		 */
		inGame: string
	}

	/**
	 * Error messages related to not meeting a necessary requirement.
	 */
	requirement: {
		/**
		 * Requirement for valid credentials.
		 */
		credentials: string

		/**
		 * Requirement for a validated account.
		 */
		validAccount: string

		/**
		 * Requirement for the player to be in a lobby.
		 */
		inLobby: string

		/**
		 * Requirement for the player to NOT be a judge.
		 */
		notJudge: string

		/**
		 * Requirement for the player to be a judge.
		 */
		judge: string

		/**
		 * Requirement for the player to have their turn.
		 */
		turn: string

		/**
		 * Requirement for the player to be in a match that is in progress.
		 */
		duringGame: string

		/**
		 * Requirement for the player to be in a match that has finished.
		 */
		finishedGame: string

		/**
		 * Requirement for the player to be in a game.
		 */
		inGame: string

		/**
		 * Requirement for the player to NOT be in a game.
		 */
		notInGame: string

		/**
		 * Requirement for the player to NOT be matchmaking.
		 */
		notMatchmaking: string

		/**
		 * Requirement for the player to the host of a match.
		 */
		matchHost: string

		/**
		 * Requirement for the player to be authenticated as an admin.
		 */
		admin: string
	}
}
