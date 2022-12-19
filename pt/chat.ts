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
		leftTheGame: `deixou o jogo`,
		affirmative: `OK.`,
		thanks: `Obrigado!`,
		sorry: `Desculpa!`,
		goodLuck: `Boa sorte!`,
		brb: `Já volto!`,
		go: `Tenho que ir embora.`,
		glhf: `glhf`,
		gg: `gg`
	},
	[ChatMessageType.preGame]: {
		readyCheck: `Todo mundo pronto?`,
		changeSettings: `Mudar configurações!`,
		ready: `Pronto!`,
		wait: `Me esperem por favor!`,
		go: `Vamos!`,
		greeting: `Oi! 👋`
	},
	[ChatMessageType.game]: {
		wtf: `WTF!`,
		how: `Como?!`,
		closeOne: `Foi pertinho!`,
		niceOne: `Muito bem!`,
		remindMove: `Sua vez!`,
		wow: `Uau!`,
		oops: `Opa!`,
		no: `Nãooo!`,
		ohNo: `Putz!`
	},
	[ChatMessageType.postGame]: {
		closeOne: `Quase!`,
		wellPlayed: `Bem jogado!`,
		differentGame: `Jogo diferente?`,
		rematch: `Revanche!`,
		fun: `Isso foi show!`,
		bye: `Até mais!`
	}
}
