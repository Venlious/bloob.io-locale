export type SupportedLocale = `en` | `nl` | `de`
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
	eightBallPool = `EIGHT_BALL_POOL`
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
	illegalEightBallPocket = `ILLEGAL_8_BALL_POCKET`,
	illegalEightBallPocketTooSoon = `ILLEGAL_8_BALL_POCKET_TOO_SOON`,
	cueBallPocket = `CUE_BALL_POCKET`,
	cueBallHitNoBall = `CUE_BALL_HIT_NO_BALL`,
	cueBallHitWrongBall = `CUE_BALL_HIT_WRONG_BALL`,
	cushionHitsLessThanTwo = `CUSHION_HITS_LESS_THAN_TWO`,
	cushionHitsLessThanOne = `CUSHION_HITS_LESS_THAN_ONE`,
	pocketedWrongBall = `POCKETED_WRONG_BALL`
}
