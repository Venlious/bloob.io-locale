export default {
	rateLimit: {
		secure: 'You hit the rate limit on this secure channel. Wait %{seconds} second(s).',
		generic: 'We have received too many requests from you. Wait %{seconds} second(s).'
	},
	token: {
		invalid: 'Your token is invalid and has been reset. Please refresh your window to proceed.',
		inUse: `It looks like you already have this site open. Please check your other tabs and windows.`
	},
	generic: {
		title: 'An error has occured.',
		invalid: 'Given data is invalid.',
		invalidAction: 'An invalid action type "%{type}" was given.',
		maintenance: 'You cannot perform this action while maintenance mode is active.',
		missingArguments: 'Missing needed arguments for this action.',
		missingAction: 'An action type is required.'
	},
	config: {
		invalidType: 'Invalid config type "%{type}" given.',
		invalidOption: 'Invalid config modification "%{option}" given.',
		invalidArgument: 'Invalid argument. Cannot set "%{id}" to "%{argument}".',
		displayOnly: 'Given config type "%{type}" cannot be modified.',
		integer: 'Option "%{id}" must be an integer.',
		max: 'Option "%{id}" has a max value of "%{max}".',
		min: 'Option "%{id}" has a min value of "%{min}".',
		increment: 'Option "%{id}" requires increments of "%{increment}".'
	},
	game: {
		cannotSelf: 'You cannot perform this action to yourself.',
		invalid: 'Game type "%{type}" does not exist.',
		invalidUser: 'User with given ID is not in this match.',
		invalidTime: `You cannot perform this action at this time.`,
		invalidVote: 'The vote you attempted to make is invalid.',
		invalidCard: 'Invalid card data given.',
		invalidCardSet: 'Invalid card set given.',
		invalidCardSelection: 'Invalid card selection given.',
		inactiveUser: 'Cannot perform this action on an inactive user.',
		alreadyPlaced: 'You have already placed something.',
		alreadyVoted: 'You have already voted.',
		cardNotInHand: 'You do not have this card in your hand.',
		insufficientWhiteCards: 'Insufficient response cards to start the game.',
		insufficientBlackCards: 'Insufficient action cards to start the game.',
		invalidPlacement: 'Your piece placement is invalid.',
		cellClaimed: 'One or more cells in your selection have already been claimed.',
		colourClaimed: 'This colour has been claimed by another user already.',
		invalidColumnRow: 'Column or row is not set or invalid.',
		invalidColumn: 'Column is not set or invalid.',
		invalidWord: 'The word given is not in the dictionary used.',
		wordTooShort: 'Word selection too short (Min. %{min})',
		wordTooLong: 'Word selection too long (Max. %{max})'
	},
	card: {
		empty: `Please make sure the card isn't empty.`,
		pickLimit: `Cannot request to pick more than 3 response cards. (Too many underscores?)`,
		set: {
			sizeLimit: 'The total size of the custom card sets may not exceed %{limit}',
			name: 'Name must be between 3 and 32 characters long'
		}
	},
	preset: {
		alreadyApplied: 'This preset has already been applied.',
		invalid: 'You cannot use "%{id}" as a preset.',
		inProgress: 'You cannot change the preset while the game is in progress.'
	},
	match: {
		kicked: 'You were kicked from the match you were in.',
		reservedExcluded: 'This game is reserved (rematch) and you are not on the list.',
		deleted: 'The match you were in has been deleted.',
		invalid: 'Match with ID "%{id}" does not exist.',
		private: 'This is a private match. You must enter an ID to join.',
		reserved: 'This is a rematch. Not all users have rejoined yet.',
		startStop: 'You are unable to start or stop a game that is in progress.',
		insufficientPlayers: 'Need at least %{min} players to start the match.',
		inProgress: 'Match is already in progress. You may not join.',
		full: 'This match is already full (%{current}/%{max}).'
	},
	check: {
		minExceedMaxLength: 'Min. length cannot be more than the max. length',
		maxSubceedMinLength: 'Max. length cannot be less than the min. length'
	},
	profile: {
		missingData: 'Missing username and/or picture arguments.',
		incorrectNickname: 'Nickname is incorrectly formatted.',
		incorrectPicture: 'Picture is incorrectly formatted.',
		tooLong: 'Nickname is too long (%{length}/%{max})',
		tooShort: 'Nickname is too short (%{length}/%{min})',
		alphanumeric: `Nickname may only contain alphanumeric characters and these special characters ?!_-+`,
		inGame: 'Cannot customise your profile while the game is in progress'
	},
	requirement: {
		credentials: 'You have given invalid credentials.',
		validAccount: `Your account has not been validated yet. Please save your profile changes.`,
		inLobby: `You cannot perform this action as the match has already started.`,
		notJudge: `You cannot perform this action as the judge.`,
		judge: `You cannot perform this action as you are not the judge.`,
		turn: `You cannot perform this action as it is not your turn.`,
		duringGame: `You can only perform this action while the match is in progress.`,
		finishedGame: `You can only peform this action after the game has finished.`,
		inGame: `You must be in a game to perform this action.`,
		notInGame: `You cannot perform this action while you are in a game.`,
		matchLeader: `You are not the match leader and cannot perform this action.`,
		admin: `This action is restricted to Admins.`
	}
}
