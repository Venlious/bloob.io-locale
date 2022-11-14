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
		leftTheGame: `dejó el juego`,
		affirmative: `Okay.`,
		thanks: `¡Gracias!`,
		sorry: `¡Lo siento!`,
		goodLuck: `¡Buena suerte!`,
		brb: `¡Ya vuelvo!`,
		go: `Me tengo que ir.`,
		glhf: `glhf`,
		gg: `gg`
	},
	[ChatMessageType.preGame]: {
		readyCheck: `¿Todos listos?`,
		changeSettings: `¡Cambiar la configuración!`,
		ready: `¡Preparados!`,
		wait: `¡Espera, por favor!`,
		go: `¡Vamos!`,
		greeting: `¡Hola! 👋`
	},
	[ChatMessageType.game]: {
		wtf: `¡WTF!`,
		how: `¿Cómo?`,
		closeOne: `¡Estuvo cerca!`,
		niceOne: `¡Bien hecho!`,
		remindMove: `¡Tu turno!`,
		wow: `¡Vaya!`,
		oops: `¡Uy!`,
		no: `¡Nooo!`,
		ohNo: `¡Oh, no!`
	},
	[ChatMessageType.postGame]: {
		closeOne: `¡Cierra la puerta!`,
		wellPlayed: `¡Bien jugado!`,
		differentGame: null,
		rematch: `¡Revancha!`,
		fun: `¡Fue divertido!`,
		bye: `¡Adiós!`
	}
}
