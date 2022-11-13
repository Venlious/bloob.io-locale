import { ErrorMessage } from '../types/error'

export default <ErrorMessage>{
	rateLimit: {
		secure: null,
		generic: null
	},
	generic: {
		desync: null,
		alreadyConnected: null,
		title: null,
		invalid: null,
		texture: null,
		invalidAction: null,
		maintenance: null,
		missingArguments: null,
		missingAction: null,
		cannotSelf: null,
		actionAgainstBot: null,
		againstAgainstInactiveUser: null,
		invalidUser: null,
		invalidTime: null,
		versionMismatch: null,
		clipboard: null
	},
	config: {
		invalidType: null,
		invalidOption: null,
		invalidArgument: null,
		displayOnly: null,
		integer: null,
		max: null,
		min: null,
		increment: null,
		minExceedMaxLength: null,
		maxSubceedMinLength: null
	},
	start: {
		fieldRows: null,
		fieldCannotFitUsers: null,
		whiteCardThreshold: null,
		blackCardThreshold: null,
		insufficientPlayers: null
	},
	game: {
		velocity: null,
		playerForfeited: null,
		missedTurnWarning: null,
		missedTurnKick: null,
		autoTurnWarning: null,
		autoTurnKick: null,
		insufficientRows: null,
		stuckSkip: null,
		stuckThreshold: null,
		allStuck: null,
		invalid: null,
		invalidMove: null,
		invalidVote: null,
		alreadyPlaced: null,
		alreadyVoted: null,
		invalidPlacement: null,
		invalidBombPlacement: null,
		cellClaimed: null,
		colorClaimed: null,
		invalidColumnRow: null,
		invalidColumn: null,
		invalidWord: null,
		wordTooShort: null,
		wordTooLong: null
	},
	card: {
		loadingSets: null,
		invalid: null,
		invalidSet: null,
		invalidSelection: null,
		notInHand: null,
		loadError: null,
		underscore: null,
		empty: null,
		pickLimit: null,
		setSizeLimit: null,
		setName: null
	},
	preset: {
		alreadyApplied: null,
		invalid: null
	},
	match: {
		empty: null,
		rematchTimeout: null,
		rematchCancelled: null,
		inactive: null,
		inactiveWarning: null,
		replacedByBot: null,
		kicked: null,
		deleted: null,
		invalid: null,
		computer: null,
		private: null,
		startStop: null,
		inProgress: null,
		full: null
	},
	profile: {
		profanity: null,
		missingData: null,
		invalidNickname: null,
		invalidPicture: null,
		nicknameMaxLength: null,
		nicknameMinLength: null,
		nicknameAllowedCharacters: null,
		inGame: null
	},
	requirement: {
		credentials: null,
		validAccount: null,
		inLobby: null,
		notJudge: null,
		judge: null,
		turn: null,
		duringGame: null,
		finishedGame: null,
		inGame: null,
		notInGame: null,
		notMatchmaking: null,
		matchHost: null,
		admin: null
	}
}
