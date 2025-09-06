export type SupportedLocale =
	| `en`
	| `nl`
	| `de`
	| `fr`
	| `es`
	| `it`
	| `pt`
	| `pl`
	| `id`
	| `tr`
	| `ar`
	| `ru`
	| `uk`
	| `ko`
	| `zh`
	| `ja`
	| `nb`
	| `fi`
	| `da`
	| `sv`

export enum GameType {
	wordrace = `WORDRACE`,
	fourInARow = `FOUR_IN_A_ROW`,
	checkers = `CHECKERS`,
	rottenApples = `ROTTEN_APPLES`,
	blomber = `BLOMBER`,
	eightBallPool = `EIGHT_BALL_POOL`,
	yacht = `YACHT`,
	superTicTacToe = `SUPER_TIC_TAC_TOE`,
	battleship = `BATTLESHIP`,
	cribbage = `CRIBBAGE`,
	war = `WAR`,
	aiAssassin = `AI_ASSASSIN`,
	ginRummy = `GIN_RUMMY`,
	numberShowdown = `NUMBER_SHOWDOWN`,
	rockPaperScissors = `ROCK_PAPER_SCISSORS`,
	trivia = `TRIVIA`,
	snooker = `SNOOKER`
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
