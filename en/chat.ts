import { ChatMessage, ChatMessageType } from '../types/chat'

export default <ChatMessage>{
	[ChatMessageType.emoji]: {
		love: `❤️`,
		luck: `🍀`,
		fire: `🔥`,
		celebration: `🎉`,
		thumbsUp: `👍`,
		mindBlowing: `🤯`,
		thinking: `🤔`,
		clap: `👏`,
		cry: `😭`,
		cool: `😎`
	},
	[ChatMessageType.universal]: {
		leftTheGame: `left the game`,
		affirmative: `Okay.`,
		thanks: `Thanks!`,
		sorry: `Sorry!`,
		goodLuck: `Good luck!`,
		brb: `I'll be right back!`,
		go: `I must go.`,
		glhf: `glhf`,
		gg: `gg`
	},
	[ChatMessageType.preGame]: {
		readyCheck: `Everybody ready?`,
		changeSettings: `Change settings!`,
		ready: `Ready!`,
		wait: `Wait please!`,
		go: `Let's go!`,
		greeting: `Hi! 👋`
	},
	[ChatMessageType.game]: {
		wtf: `WTF`,
		how: `How!?`,
		closeOne: `Close one!`,
		niceOne: `Nice one!`,
		remindMove: `Your move!`,
		wow: `Wow!`,
		oops: `Oops!`,
		no: `Noooo!`,
		ohNo: `Oh no!`
	},
	[ChatMessageType.postGame]: {
		closeOne: `Close one!`,
		wellPlayed: `Well played!`,
		differentGame: `Different game?`,
		rematch: `Rematch!`,
		fun: `That was fun!`,
		bye: `Bye!`
	}
}
