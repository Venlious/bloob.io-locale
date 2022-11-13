export enum ChatMessageType {
	emoji = `EMOJI`,
	universal = `UNIVERSAL`,
	preGame = `PRE_GAME`,
	game = `GAME`,
	postGame = `POST_GAME`
}

export type ChatMessage = {
	/**
	 * Emoji character responses.
	 *
	 * These can be used at all times during the game.
	 */
	[ChatMessageType.emoji]: {
		love: string
		luck: string
		fire: string
		celebration: string
		thumbsUp: string
		mindBlowing: string
		thinking: string
		clap: string
		cry: string
		cool: string
	}

	/**
	 * Universal chat responses.
	 *
	 * These can be used at all times during the game.
	 */
	[ChatMessageType.universal]: {
		/**
		 * The "leftTheGame" response is shown as `<name> <text>` and
		 * is shown when a user leaves the game in some cases as a chat
		 * message. The user can never say this chat message.
		 */
		leftTheGame: string
		affirmative: string
		thanks: string
		sorry: string
		goodLuck: string
		brb: string
		go: string
		/**
		 * The English abbreviation "gltf" stands for "good luck have fun".
		 */
		glhf: string
		/**
		 * The English abbreviation "gg" stands for "good game".
		 */
		gg: string
	}

	/**
	 * Pre-game chat responses.
	 *
	 * These can only be used in the game lobby, before the match has started.
	 */
	[ChatMessageType.preGame]: {
		readyCheck: string
		changeSettings: string
		ready: string
		wait: string
		go: string
		greeting: string
	}

	/**
	 * Game chat responses.
	 *
	 * These can only be used while the match is in progress.
	 */
	[ChatMessageType.game]: {
		wtf: string
		how: string
		closeOne: string
		niceOne: string
		remindMove: string
		wow: string
		oops: string
		no: string
		ohNo: string
	}

	/**
	 * Post-game chat responses.
	 *
	 * These can only be used after the match has concluded.
	 */
	[ChatMessageType.postGame]: {
		closeOne: string
		wellPlayed: string
		differentGame: string
		rematch: string
		fun: string
		bye: string
	}
}
