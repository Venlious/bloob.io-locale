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
		leftTheGame: `a quitté le jeu.`,
		affirmative: `Ok.`,
		thanks: `Merci!`,
		sorry: `Désolé!`,
		goodLuck: `Bonne chance!`,
		brb: `Je reviens tout de suite!`,
		go: `Je dois y aller.`,
		glhf: `Bonne chance, amuse-toi!`,
		gg: `Bonne partie.`
	},
	[ChatMessageType.preGame]: {
		readyCheck: `Tout le monde est prêt?`,
		changeSettings: `Change les paramètres!`,
		ready: `Prêt!`,
		wait: `Attends, stp!`,
		go: `Allons-y!`,
		greeting: `Salut! 👋`
	},
	[ChatMessageType.game]: {
		wtf: `WTF!`,
		how: `Comment!?`,
		closeOne: `C'était proche!`,
		niceOne: `Super!`,
		remindMove: `À ton tour!`,
		wow: `Wow!`,
		oops: `Oups!`,
		no: `Nooooon!`,
		ohNo: `Oh non!`
	},
	[ChatMessageType.postGame]: {
		closeOne: `C'était proche!`,
		wellPlayed: `Bien joué!`,
		differentGame: null,
		rematch: `Revanche!`,
		fun: `C'était amusant!`,
		bye: `Bye!`
	}
}
