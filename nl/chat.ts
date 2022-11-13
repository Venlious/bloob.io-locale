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
		leftTheGame: `heeft het spel verlaten`,
		affirmative: `Oke.`,
		thanks: `Dankje!`,
		sorry: `Sorry!`,
		goodLuck: `Veel plezier!`,
		brb: `Ik ben zo terug!`,
		go: `Ik moet gaan.`,
		glhf: `glhf`,
		gg: `gg`
	},
	[ChatMessageType.preGame]: {
		readyCheck: `Iedereen klaar?`,
		changeSettings: `Wijzig instellingen!`,
		ready: `Klaar!`,
		wait: `Wacht even!`,
		go: `Kom op!`,
		greeting: `Hallo! 👋`
	},
	[ChatMessageType.game]: {
		wtf: `WTF`,
		how: `Hoe!?`,
		closeOne: `Bijna!`,
		niceOne: `Mooi gedaan!`,
		remindMove: `Jouw beurt!`,
		wow: `Wow!`,
		oops: `Oeps!`,
		no: `Neeee!`,
		ohNo: `Oh nee!`
	},
	[ChatMessageType.postGame]: {
		closeOne: `Bijna!`,
		wellPlayed: `Goed gespeeld!`,
		differentGame: `Ander spel?`,
		rematch: `Nog een keer!`,
		fun: `Dat was leuk!`,
		bye: `Doei!`
	}
}
