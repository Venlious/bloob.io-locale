export type SupportedLocale = `en` | `nl` | `de` | `fr` | `es` | `it` | `pt` | `pl`
export type LanguageList =
	| `nl-NL`
	| `en-US`
	| `en-GB`
	| `fr-FR`
	| `de-DE`
	| `it-IT`
	| `pl-PL`
	| `pt-BR`
	| `es-ES`
	| `es-MX`
	| `sv-SE`

export enum GenericType {
	generic = `generic`
}

export enum GameType {
	wordrace = `WORDRACE`,
	fourInARow = `FOUR_IN_A_ROW`,
	checkers = `CHECKERS`,
	rottenApples = `ROTTEN_APPLES`,
	blomber = `BLOMBER`,
	eightBallPool = `EIGHT_BALL_POOL`,
	yacht = `YACHT`,
	superTicTacToe = `SUPER_TIC_TAC_TOE`
}

export enum CheckersKingType {
	all = `ALL`,
	take = `TAKE`,
	oppositeSide = `OPPOSITE_SIDE`,
	none = `NONE`
}

export enum WinConditionType {
	first = `FIRST`,
	rounds = `ROUNDS`,
	time = `TIME`,
	killCount = `KILL_COUNT`,
	lastStanding = `LAST_STANDING`,
	morePieces = `MORE_PIECES`,
	oppositeSide = `OPPOSITE_SIDE`
}

export enum PoolGameGroup {
	solid = `SOLID`,
	stripe = `STRIPE`
}

export enum PoolGameFoulType {
	consecutiveFoulsExceeded = `CONSECUTIVE_FOULS_EXCEEDED`,
	illegalEightBallPocket = `ILLEGAL_8_BALL_POCKET`,
	illegalEightBallPocketTooSoon = `ILLEGAL_8_BALL_POCKET_TOO_SOON`,
	illegalEightBallPocketOnBreak = `ILLEGAL_8_BALL_POCKET_ON_BREAK`,
	cueBallPocket = `CUE_BALL_POCKET`,
	cueBallHitNoBall = `CUE_BALL_HIT_NO_BALL`,
	cueBallHitWrongBall = `CUE_BALL_HIT_WRONG_BALL`,
	cushionHitMinOnBreak = `CUSHION_HIT_MIN_ON_BREAK`,
	cushionHitInvalid = `CUSHION_HIT_INVALID`,
	pocketedWrongBall = `POCKETED_WRONG_BALL`
}
