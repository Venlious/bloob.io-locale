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
		leftTheGame: `hat das Spiel verlassen`,
		affirmative: `Okay.`,
		thanks: `Danke!`,
		sorry: `Sorry!`,
		goodLuck: `Viel Glück!`,
		brb: `Ich bin gleich zurück!`,
		go: `Ich muss los.`,
		glhf: `glhf`,
		gg: `gg`
	},
	[ChatMessageType.preGame]: {
		readyCheck: `Alle bereit?`,
		changeSettings: `Einstellungen ändern!`,
		ready: `Bereit!`,
		wait: `Warten, bitte!`,
		go: `Los geht's!`,
		greeting: `Hallo! 👋`
	},
	[ChatMessageType.game]: {
		wtf: `WTF`,
		how: `Wie!?`,
		closeOne: `Fast!`,
		niceOne: `Gut gemacht!`,
		remindMove: `Du bist dran!`,
		wow: `Wow!`,
		oops: `Ups!`,
		no: `Neiiiin!`,
		ohNo: `Oh nein!`
	},
	[ChatMessageType.postGame]: {
		closeOne: `Fast!`,
		wellPlayed: `Gut gespielt!`,
		differentGame: `Anderes Spiel?`,
		rematch: `Noch mal!`,
		fun: `Das hat Spaß gemacht!`,
		bye: `Tschüss!`
	}
}
