import { ErrorMessage } from '../types/error'

export default <ErrorMessage>{
	rateLimit: {
		secure: `You hit the rate limit on this secure channel. Wait %{seconds} second(s).`,
		generic: `Slow down a little! Wait %{seconds} second(s).`
	},
	generic: {
		desync: `Sorry, it looks like you were desynchronized. Please try again.`,
		alreadyConnected: `It looks like you opened this site in another tab and you have been disconnected here.`,
		title: `An error has occured.`,
		invalid: `Given data is invalid.`,
		texture: `Failed to load a texture "%{id}".`,
		invalidAction: `An invalid action type "%{type}" was given.`,
		maintenance: `You cannot perform this action while maintenance mode is active.`,
		missingArguments: `Missing needed arguments for this action.`,
		missingAction: `An action type is required.`,
		cannotSelf: `You cannot perform this action to yourself.`,
		actionAgainstBot: `Cannot perform this action to a bot.`,
		againstAgainstInactiveUser: `Cannot perform this action on an inactive user.`,
		invalidUser: `User with given ID is not in this match.`,
		invalidTime: `You cannot perform this action at this time.`,
		versionMismatch: `You are running version "%{client}" while the server is running version "%{server}". Please refresh this page in a few minutes to update to the latest version.\n\nYou can still play against the Computer with no issues, but we recommend updating before playing multiplayer.`,
		clipboard: `Failed to copy to clipboard.`
	},
	config: {
		invalidType: `Invalid config type "%{type}" given.`,
		invalidOption: `Invalid config modification "%{option}" given.`,
		invalidArgument: `Invalid argument. Cannot set "%{id}" to "%{argument}".`,
		displayOnly: `Given config type "%{type}" cannot be modified.`,
		integer: `Option "%{id}" must be an integer.`,
		max: `Option "%{id}" has a max value of "%{max}".`,
		min: `Option "%{id}" has a min value of "%{min}".`,
		increment: `Option "%{id}" requires increments of "%{increment}".`,
		minExceedMaxLength: `Min. length cannot be more than the max. length.`,
		maxSubceedMinLength: `Max. length cannot be less than the min. length.`
	},
	start: {
		fieldRows: `Selected field cannot support more than %{rows} rows`,
		fieldCannotFitUsers: `Selected field cannot support more than %{users} players`,
		whiteCardThreshold: `Game requires at least %{count} response cards (white)`,
		blackCardThreshold: `Game requires at least %{count} action cards (black)`,
		insufficientPlayers: `Need at least %{min} players to start the match.`
	},
	game: {
		velocity: `Given velocity is outside of the permitted range.`,
		playerForfeited: `Player "%{name}" forfeited and lost automatically.`,
		missedTurnWarning: `You were too late and your opponent was given their turn. If this happens too many times in a row you will be kicked. (%{current}/%{threshold})`,
		missedTurnKick: `You were kicked as you missed %{current} turn(s) in a row.`,
		autoTurnWarning: `You were too late and a move was made for you. If this happens too many times in a row you will lose. (%{current}/%{threshold})`,
		autoTurnKick: `You lost automatically as you were late for %{current} move(s) in a row.`,
		insufficientRows: `This field does not fit the amount of rows selected.`,
		stuckSkip: `Your turn was skipped as you cannot make any moves.`,
		stuckThreshold: `You were eliminated as you were stuck for %{moves} move(s) in a row.`,
		allStuck: `Nobody can make a move anymore. The match has concluded.`,
		invalid: `Game type "%{type}" does not exist.`,
		invalidMove: `Given move is invalid.`,
		invalidVote: `The vote you attempted to make is invalid.`,
		alreadyPlaced: `You have already placed something.`,
		alreadyVoted: `You have already voted.`,
		invalidPlacement: `Your piece placement is invalid.`,
		invalidBombPlacement: `Attempted an invalid bomb placement.`,
		cellClaimed: `One or more cells in your selection have already been claimed.`,
		colorClaimed: `This colour has been claimed by another user already.`,
		invalidColumnRow: `Column or row is not set or invalid.`,
		invalidColumn: `Column is not set or invalid.`,
		invalidWord: `The word given is not in the dictionary used.`,
		wordnicknameMinLength: `Word selection too short (Min. %{min})`,
		wordnicknameMaxLength: `Word selection too long (Max. %{max})`
	},
	card: {
		loadingSets: `Unable to download the card sets.`,
		invalid: `Invalid card data given.`,
		invalidSet: `Invalid card set given.`,
		invalidSelection: `Invalid card selection given.`,
		notInHand: `You do not have this card in your hand.`,
		loadError: `An error occured trying to download the card sets data.`,
		underscore: `Each underscore results in one response card pick — don't put them next to each other!`,
		empty: `Please make sure the card isn't empty.`,
		pickLimit: `Cannot request to pick more than 3 response cards. (Too many underscores?)`,
		setSizeLimit: `The total size of the custom card sets may not exceed %{limit}`,
		setName: `Name must be between 3 and 32 characters long`
	},
	preset: {
		alreadyApplied: `This preset has already been applied.`,
		invalid: `You cannot use "%{id}" as a preset.`
	},
	match: {
		empty: `Match closed. All other players left the match.`,
		rematchTimeout: `You didn't accept the rematch request and were sent back to the main menu.`,
		rematchCancelled: `Sorry! There aren't enough players left for a rematch.`,
		inactive: `The match you were in has been closed as it has been inactive for too long.`,
		inactiveWarning: `Match will soon be closed due to inactivity unless action is taken.`,
		replacedByBot: `You were replaced by a bot and cannot rejoin this game.`,
		kicked: `You were kicked from the match you were in.`,
		deleted: `The match you were in has been deleted.`,
		invalid: `Match with ID "%{id}" does not exist.`,
		computer: `This is a match against the computer, you cannot join.`,
		private: `This is a private match. You must enter an ID to join.`,
		startStop: `You are unable to start or stop a game that is in progress.`,
		inProgress: `Match is already in progress. You may not join.`,
		full: `This match is already full (%{current}/%{max}).`
	},
	profile: {
		profanity: `Nickname appears to contain banned profanity.`,
		missingData: `Missing username and/or picture arguments.`,
		invalidNickname: `Nickname is incorrectly formatted.`,
		invalidPicture: `Picture is incorrectly formatted.`,
		nicknameMaxLength: `Nickname is too long (%{current}/%{max})`,
		nicknameMinLength: `Nickname is too short (%{current}/%{min})`,
		nicknameAllowedCharacters: `Nickname may only contain alphanumeric characters and these special characters ?!_-+`,
		inGame: `Cannot customise your profile while the game is in progress`
	},
	requirement: {
		credentials: `You have given invalid credentials.`,
		validAccount: `Your account has not been validated yet. Please save your profile changes.`,
		inLobby: `You cannot perform this action as the match has already started.`,
		notJudge: `You cannot perform this action as the judge.`,
		judge: `You cannot perform this action as you are not the judge.`,
		turn: `You cannot perform this action as it is not your turn.`,
		duringGame: `You can only perform this action while the match is in progress.`,
		finishedGame: `You can only peform this action after the game has finished.`,
		inGame: `You must be in a game to perform this action.`,
		notInGame: `You cannot perform this action while you are in a game.`,
		notMatchmaking: `You cannot perform this action while you are matchmaking.`,
		matchHost: `You are not the host and cannot perform this action.`,
		admin: `This action is restricted to Admins.`
	}
}
