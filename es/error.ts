import { ErrorMessage } from '../types/error'

export default <ErrorMessage>{
	rateLimit: {
		secure: `Has alcanzado el límite en este canal seguro. Espera %{seconds} segundo(s).`,
		generic: `¡Frena un poco! Espera %{seconds} segundo(s).`
	},
	generic: {
		desync: `Lo siento, parece que te has desincronizado. Por favor, inténtalo de nuevo.`,
		alreadyConnected: null,
		title: `Se ha producido un error.`,
		invalid: `Los datos no son válidos.`,
		texture: `No se ha podido cargar una textura  "%{id}".`,
		invalidAction: `Se ha dado un tipo de acción "%{type}" no válido.`,
		maintenance: null,
		missingArguments: `Faltan argumentos necesarios para esta acción.`,
		missingAction: `Se requiere un tipo de acción.`,
		cannotSelf: `No puedes realizar esta acción a ti mismo.`,
		actionAgainstBot: `No se puede realizar esta acción a un bot.`,
		againstAgainstInactiveUser: `No se puede realizar esta acción a un usuario inactivo.`,
		invalidUser: `El usuario con el ID dado no está en esta partida.`,
		invalidTime: `No puedes realizar esta acción en este momento.`,
		versionMismatch: null,
		clipboard: `No se puede copiar en el portapapeles`
	},
	config: {
		invalidType: `Tipo de configuración "%{type}" inválido.`,
		invalidOption: `Modificación de configuración inválida "%{option}" dada.`,
		invalidArgument: `Argumento inválido. No se puede establecer "%{id}" a "%{argument}".`,
		displayOnly: `El tipo de configuración dado "%{type}" no puede ser modificado.`,
		integer: `La opción "%{id}" debe ser un número entero.`,
		max: `La opción "%{id}" tiene un valor máximo de "%{max}".`,
		min: `La opción "%{id}" tiene un valor mínimo de "%{min}".`,
		increment: `La opción "%{id}" requiere incrementos de "%{increment}".`,
		minExceedMaxLength: `La longitud min. no puede ser superior a la longitud max.`,
		maxSubceedMinLength: `La longitud max. no puede ser inferior a la longitud min.`
	},
	start: {
		fieldRows: `El campo seleccionado no admite más de %{rows} filas`,
		fieldCannotFitUsers: `El campo seleccionado no puede admitir más de %{users} jugadores`,
		whiteCardThreshold: null,
		blackCardThreshold: null,
		insufficientPlayers: `Necesita al menos %{min} jugadores para empezar el partido.`
	},
	game: {
		velocity: `La velocidad dada está fuera del rango permitido.`,
		playerForfeited: `El jugador "%{name}" se ha ido y ha perdido automáticamente.`,
		missedTurnWarning: `Has llegado demasiado tarde y tu oponente ha recibido su turno. Si esto ocurre demasiadas veces seguidas, serás expulsado. (%{current}/%{threshold})`,
		missedTurnKick: `Has sido expulsado porque has perdido %{current} turno(s) seguidos.`,
		autoTurnWarning: `Llegaste demasiado tarde y se hizo un movimiento por ti. Si esto ocurre demasiadas veces seguidas, perderás. (%{current}/%{threshold})`,
		autoTurnKick: `Has perdido automáticamente por haber llegado tarde a %{current} movimiento(s) consecutivo(s).`,
		insufficientRows: `Este campo no se ajusta a la cantidad de filas seleccionadas.`,
		stuckSkip: `Tu turno se ha saltado ya que no puedes hacer ningún movimiento.`,
		stuckThreshold: `Has sido eliminado por estar atascado durante %{moves} movimientos seguidos.`,
		allStuck: `Ya nadie puede hacer un movimiento. El partido ha concluido.`,
		invalid: `El tipo de juego "%{type}" no existe.`,
		invalidMove: `La jugada dada no es válida.`,
		invalidVote: null,
		alreadyPlaced: `Ya has colocado algo.`,
		alreadyVoted: null,
		invalidPlacement: `La colocación de tu pieza no es válida.`,
		invalidBombPlacement: null,
		cellClaimed: `Una o más casillas de tu selección ya han sido reclamadas.`,
		colorClaimed: `Este color ya ha sido reclamado por otro usuario.`,
		invalidColumnRow: `La columna o la fila no está configurada o no es válida.`,
		invalidColumn: `La columna no está configurada o no es válida.`,
		invalidWord: `La palabra dada no está en el diccionario utilizado.`,
		wordTooShort: `Selección de palabras demasiado corta (Min. %{min})`,
		wordTooLong: `Selección de palabras demasiado larga (Max. %{max})`
	},
	card: {
		loadingSets: null,
		invalid: null,
		invalidSet: null,
		invalidSelection: null,
		notInHand: null,
		loadError: null,
		underscore: null,
		empty: null,
		pickLimit: null,
		setSizeLimit: null,
		setName: null
	},
	preset: {
		alreadyApplied: `Esta preselección ya se ha aplicado.`,
		invalid: `No se puede utilizar "%{id}" como preselección.`
	},
	match: {
		empty: `Habitación cerrada. Todos los demás jugadores abandonaron el partido.`,
		rematchTimeout: `No aceptaste la solicitud de revancha y fuiste enviado de vuelta al menú principal.`,
		rematchCancelled: `¡Lo siento! No quedan suficientes jugadores para la revancha.`,
		inactive: `El partido en el que estabas ha sido cerrado por estar inactivo durante demasiado tiempo.`,
		inactiveWarning: `El partido se cerrará pronto por inactividad si no se toman acciones.`,
		replacedByBot: null,
		kicked: `Te han expulsado del partido en el que estabas.`,
		deleted: `El partido en el que estabas ha sido eliminado.`,
		invalid: `El partido con el ID "%{id}" no existe.`,
		computer: `Este es un partido contra la computadora, no puedes unirte.`,
		private: `Este es un partido privado. Debes introducir un ID para unirte.`,
		startStop: `No puedes iniciar o detener una partida en curso.`,
		inProgress: `El partido ya está en marcha. No puedes unirte.`,
		full: `Esta partida ya está llena (%{current}/%{max}).`
	},
	profile: {
		profanity: null,
		missingData: `Falta el nombre de usuario y/o los argumentos de la imagen.`,
		invalidNickname: `El apodo tiene un formato incorrecto.`,
		invalidPicture: `La imagen tiene un formato incorrecto.`,
		nicknameMaxLength: null,
		nicknameMinLength: null,
		nicknameAllowedCharacters: null,
		inGame: `No se puede personalizar el perfil mientras el juego está en marcha`
	},
	requirement: {
		credentials: `Has dado credenciales inválidas.`,
		validAccount: `Tu cuenta aún no ha sido validada. Por favor, guarda los cambios en tu perfil.`,
		inLobby: `No puedes realizar esta acción porque el partido ya ha comenzado.`,
		notJudge: null,
		judge: null,
		turn: `No puedes realizar esta acción porque no es tu turno.`,
		duringGame: `Sólo puedes realizar esta acción mientras el partido está en curso.`,
		finishedGame: `Sólo puedes realizar esta acción cuando el juego haya terminado.`,
		inGame: `Debes estar en un juego para realizar esta acción.`,
		notInGame: `No puedes realizar esta acción mientras estás en un partido.`,
		notMatchmaking: `No se puede realizar esta acción mientras estás buscando un partido.`,
		matchHost: `No eres el host y no puedes realizar esta acción.`,
		admin: null
	}
}
