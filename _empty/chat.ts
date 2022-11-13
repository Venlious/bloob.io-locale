import { ChatMessage, ChatMessageType } from '../types/chat'

export default <ChatMessage>{
	[ChatMessageType.emoji]: {
		love: `❤️`,
		luck: `🍀`,
		celebration: `🎉`,
		thumbsUp: `👍`,
		thumbsDown: `👎`,
		mindBlowing: `🤯`,
		thinking: `🤔`,
		clap: `👏`,
		cry: `😭`,
		cool: `😎`
	},
	[ChatMessageType.universal]: {
		leftTheGame: null,
		affirmative: null,
		thanks: null,
		sorry: null,
		goodLuck: null,
		brb: null,
		go: null,
		glhf: null,
		gg: null
	},
	[ChatMessageType.preGame]: {
		readyCheck: null,
		changeSettings: null,
		ready: null,
		wait: null,
		go: null,
		greeting: null
	},
	[ChatMessageType.game]: {
		wtf: null,
		how: null,
		closeOne: null,
		niceOne: null,
		remindMove: null,
		wow: null,
		oops: null,
		no: null,
		ohNo: null
	},
	[ChatMessageType.postGame]: {
		closeOne: null,
		wellPlayed: null,
		differentGame: null,
		rematch: null,
		fun: null,
		bye: null
	}
}
