import error from './error'
import game from './game'
import chat from './chat'

import { MessageList } from '../types/messages'
import { PoolGameGroup, PoolGameFoulType } from '../types/index'

export default <MessageList>{
	_entries: {
		total: 781,
		missing: 398
	},
	name: `Bloob.io`,
	error,
	game,
	chat,
	header: {
		message: {
			lobby: `Lobby del partido`,
			finished: `Partido finalizado`,
			tied: `Partido empatado`,
			finishedRematch: `La revancha comienza pronto`,
			inProgress: null,
			staleMoves: null,
			forfeit: `Partido finalizado - El oponente ha abandonado el partido`,
			winner: `Partido ganado por %{name}`,
			inactive: `Partido finalizado por inactividad`,
			late: `Partido finalizado por falta de %{turns} Turno(s)`,
			pickActionCard: `Escogiendo la carta de acción`,
			pickCardSelection: `Seleccionando la tarjeta`,
			handDump: null,
			handPreview: null,
			voting: null,
			voteResults: null,
			flippingField: `Volteando el campo`,
			removingRow: null,
			yourTurn: `Tu turno %{extra}`,
			nameTurn: `Turno de %{name}`,
			yourTurnBreaking: `Te toca romper %{extra}`,
			nameTurnBreaking: `%{name} va a romper`,
			illegallyPocketedEightBall: `La bola ocho entró ilegalmente`,
			roundCount: `Ronda %{current} de %{total}`
		},
		description: {
			waitingForPlayers: `A la espera de jugadores`,
			startCountdown: `El partido comienza en %{text}...`,
			rematchStartCountdown: `La revancha comienza en %{text}...`,
			remainingTimeCountdown: `%{clock} restante...`,
			nextRoundCountdown: `Próxima ronda en %{text}...`,
			youWon: `Has ganado`,
			nameWon: `%{name} ha ganado`
		}
	},
	placeholder: {
		cardSetId: null,
		cardContent: null,
		cardSetName: null,
		matchId: `ID o URL del partido`,
		message: null,
		username: null,
		password: null
	},
	language: {
		'nl-NL': null,
		'en-US': `Inglés (US)`,
		'en-GB': `Inglés (UK)`,
		'fr-FR': `Francés`,
		'de-DE': null,
		'it-IT': `Italiano`,
		'pl-PL': null,
		'pt-BR': `Portugués (BR)`,
		'es-ES': `Español (EU)`,
		'es-MX': `Español (MX)`,
		'sv-SE': null
	},
	status: {
		reconnecting: null,
		viewAllGames: `Ver todos los juegos`,
		playingAgainstBots: null,
		playingAgainstPlayers: null,
		matchesWaiting: null,
		playingGame: null,
		online: null,
		connection: `Conexión`,
		ping: `Ping`,
		timeOffset: `Compensación de tiempo`,
		version: `Versión`,
		userId: `ID de usuario`,
		notice: null
	},
	category: {
		misc: `Varios`,
		field: null,
		dump: `Vaciar`,
		bomb: null,
		filter: `Filtro`,
		times: `Tiempos`,
		round: `Ronda`,
		flip: `Giro`,
		default: null,
		fallback: `Condiciones de repliegue`,
		take: `Toma de control`,
		tetris: null,
		basic: `Básico`,
		language: null
	},
	time: {
		hours: `0 horas | 1 hora | {count} horas`,
		minutes: `0 minutos | 1 minuto | {count} minutos`,
		seconds: `0 segundos | 1 segundo | {count} segundos`
	},
	count: {
		kills: null,
		deaths: null,
		lives: null,
		files: null,
		points: `0 puntos | 1 punto | {count} puntos`,
		pieces: `0 piezas | 1 pieza | {count} piezas`,
		wins: `0 victorias | 1 victoria | {count} victorias`,
		cards: `0 tarjetas | 1 tarjeta | {count} tarjetas`,
		moves: `0 movimientos | 1 movimiento | {count} movimientos`,
		playing: `0 jugando | 1 jugando | {count} jugando`,
		players: `0 jugadores | 1 jugador | {count} jugadores`,
		selectedCards: null,
		matches: null,
		matchesFound: `0 partidos encontrados | 1 partido encontrado | {count} partidos encontrados`,
		matchesWaiting: `0 partidos en espera | 1 partido en espera | {count} partidos en espera`,
		needMorePlayers: `Necesitas 0 jugadores más | Necesitas 1 jugador más | Necesitas {count} jugadores más`,
		playAgainstBots: `Jugar contra bots | Jugar contra un bot | Jugar contra bots`,
		playRandomOpponents: `Jugar con oponentes aleatorios`,
		turnsToFlip: `Turnos para voltear | Turno para voltear | Turnos para voltear`,
		increment: `Incrementos de %{count}`
	},
	misc: {
		beta: `Beta`,
		about: `Acerca de`,
		public: `Público`,
		private: `Privado`,
		add: `Añadir`,
		remove: `Remover`,
		yes: `Sí`,
		no: `No`,
		disabled: `Desactivado`,
		enabled: `Activado`,
		excluded: `Excluido`,
		included: `Incluido`,
		new: `Nuevo`,
		fixed: `Fijo`,
		changed: `Cambiado`,
		guest: null,
		settings: `Ajustes`,
		localPlay: `Juego local`,
		preset: `Preselección`,
		you: `Tú`,
		home: null,
		bot: null,
		bots: null,
		vibration: `Vibración`,
		unavailable: `No disponible`,
		changeLog: `Registro de cambios`,
		status: `Estatus`,
		information: `Información`,
		language: `Idioma`,
		toggle: `Activar`,
		login: null,
		maintenance: null,
		admin: null,
		nsfw: null,
		specificCards: null,
		matchId: `ID del partido`,
		chat: `Chat`,
		host: `Host`,
		player: `Jugador`,
		players: `Jugadores`,
		loading: null,
		percentage: null,
		percentageDisabled: null,
		scrollBackDown: `Muévete hacia abajo`,
		pickYourself: `Escoge tú mismo`,
		highPing: null,
		currentRoundCount: `Ronda (%{current}/%{total})`,
		currentSkipCount: null,
		currentReadyCount: null,
		assignedTypeSelf: `Eres %{type}`,
		assignedTypeSelfLocal: `El jugador (%{index}) es %{type}`,
		broadcast: null,
		confirm: `Confirmar`,
		close: `Cerrar`,
		edit: `Editar`,
		delete: `Borrar`,
		cancel: `Cancelar`,
		reset: `Restablecer`,
		start: `Empezar`,
		download: `Descargar`,
		share: `Compartir`,
		copy: `Copiar`,
		view: `Ver`,
		donate: `Donar`,
		forfeit: `Salir del juego`,
		processFiles: null,
		sendMessage: `Enviar mensaje`,
		refreshWindow: `Refrescar ventana`,
		makeHost: `Hacer host`,
		kickUser: `Expulsar usuario`,
		returnToMenu: `Volver al menú`,
		returnToLobby: `Volver al lobby`,
		playAsGuest: null,
		averageLength: `Prom. Longitud`,
		largestTake: `La mayor toma`,
		takes: `Tomas`,
		pieces: `Piezas`,
		words: `Palabras`,
		score: `Puntuación`,
		rank: `Rango`,
		kills: null,
		points: `Puntos`,
		wins: `Victorias`,
		pocketed: `Guardado`,
		shots: `Hits`,
		deaths: null,
		and: `y`,
		vs: `vs`,
		selectAll: `Seleccionar todo`,
		deselectAll: `Deseleccionar todo`,
		resetData: `Restablecer datos`,
		customize: `Personalizar`,
		inviteOthers: `Invitar amigos`,
		activeFilters: `Filtros activos`,
		minMax: `Min. %{min} | Max. %{max}`,
		madeBy: `Hecho por %{name}`,
		selectedOfLimit: `Seleccionado %{current} del límite de %{total}`,
		helpLocalise: null,
		discord: `Únase a nuestro Discord`,
		volume: `Volumen`,
		volumeInterface: `Volumen de la interfaz`,
		volumeEffects: `Volumen de efectos`,
		gameMenu: `Menú del juego`,
		selectYourLanguage: null,
		selectYourColor: `Selecciona tu color`,
		latestChanges: `Últimos cambios`,
		noChangesDetected: null,
		newChanges: `Nuevos cambios`,
		saveChanges: `Guardar cambios`,
		previousChanges: `Ver los cambios anteriores`
	},
	card: {
		empty: null,
		total: null,
		view: null,
		editor: {
			title: null,
			name: null,
			type: null,
			content: null,
			contentUnderscore: null,
			pick: null,
			create: null,
			deleted: null,
			edited: null,
			created: null
		},
		type: {
			black: null,
			white: null
		},
		sets: {
			title: null,
			contribute: null,
			create: null,
			browser: null,
			import: null,
			importer: null,
			namedTitle: null,
			custom: null,
			default: null,
			noneFound: null,
			noneSelected: null,
			importById: null,
			notInOwnLibrary: null,
			addToLibrary: null,
			entrySave: null,
			entrySaved: null,
			entryProcessing: null,
			info: {
				importFinished: null,
				importProgress: null,
				importFailed: null,
				emptyFolder: null,
				emptyList: null,
				emptyListNotHost: null,
				noneSelected: null,
				notInOwnLibrary: null,
				importById: null,
				csv: null,
				delete: null,
				storage: null,
				notHost: null,
				sizeLimit: null,
				filterDisclaimer: null
			}
		},
		info: {
			pickAction: null,
			judgePickingActionCard: null,
			waitForSelections: null,
			preview: null,
			dump: null,
			noType: null,
			delete: null,
			winningOption: null,
			actionResponseCardCounter: null,
			navigateSelf: null,
			navigateFollowJudge: null
		}
	},
	match: {
		create: `Crear partido`,
		leave: `Salir del partido`,
		join: `Unirse al partido`,
		full: `Partido completo`,
		rematch: `Revancha`,
		lobby: {
			start: `Iniciar partido`,
			cancelCountdown: `Cancelar la cuenta atrás`,
			starting: `Comienzo del partido`,
			waiting: `Esperando a que el host comience el partido`
		},
		browser: {
			list: `Buscar partidos`,
			available: `Partidos disponibles`,
			noneAvailable: `No hay partidos disponibles`
		},
		matchmaking: {
			tiredOfWaiting: `¿Cansado de esperar?`,
			cancel: `Cancelar la búsqueda de partido`,
			searching: `Buscando oponentes... (%{time})`,
			found: `¡Partido encontrado! Empezando en %{time}...`
		},
		info: {
			makeHost: `Estás a punto de convertir a "%{name}" en el nuevo host.`,
			kickUser: `Estás a punto de expulsar a "%{name}" de este partido.`,
			noMatches: `Los nuevos partidos aparecerán aquí`,
			rematch: `¿Te gustaría volver a jugar?`,
			rematchWaiting: `Esperando que el otro jugador acepte la revancha...`,
			rematchRequest: `%{name} desea una revancha`,
			joinById: `Puedes unirte a un partido privado rellenando el ID de cuatro dígitos.`,
			public: `<b>Público: </b>Cualquiera puede unirse navegando por los partidos disponibles.`,
			private: `<b>Privado: </b>Los jugadores sólo pueden unirse utilizando la URL o el ID de 4 dígitos.`,
			finishedSettings: `¿Has terminado de editar los ajustes del partido?`,
			leave: `Es posible que no puedas volver a unirte si decides salir.`,
			leaveLast: `Como eres la única persona en el juego, el partido se cerrará cuando te salgas.`,
			leaveAsHost: `Alguien más se convertirá en el nuevo host cuando te vayas.`
		}
	},
	info: {
		incompleteTranslationNotice: null,
		betaNotice: null,
		howToPlay: `Aprende a jugar este juego`,
		skipStepOverHalf: null,
		skipStepAll: null,
		voteReduceTime: null,
		interfaceAutoResize: `Cambia el tamaño de la interfaz para que se ajuste al campo`,
		opponentMissedTurn: `Ahora es tu turno, ya que a tu oponente se le acabó el tiempo.`,
		localPlay: `Comparte el mismo dispositivo con varias personas añadiendo jugadores locales.`,
		highPing: null,
		hasBots: null,
		inactiveUser: `El usuario no está conectado a este partido.`,
		copiedToClipboard: `¡URL copiada en el portapapeles!`,
		noMessages: `No hay mensajes`,
		sendFirstMessage: `¡Se el primero en enviar un mensaje!`,
		voteSelf: null,
		votePick: null,
		votePickChange: null,
		votePickSelected: null,
		inactiveOpponent: null,
		inactiveOpponents: null,
		gameMenu: null,
		forfeit: `Si te sales del juego, perderás la partida.`,
		unsavedChanges: null,
		resetData: `El restablecimiento de tus datos es irreversible y borrará tu perfil, configuración y estadísticas.`,
		matchesDisabled: null,
		fileUpload: null,
		fileUploadMore: null,
		fileDownloadAutomatically: null,
		fileDownloadManually: null,
		gameJoin: `Únete al partido de %{title}`,
		gameHelp: `Ayuda %{title}`,
		areYouSure: `¿Estás seguro?`,
		poolType: {
			[PoolGameGroup.solid]: `Sólidas`,
			[PoolGameGroup.stripe]: `Rayadas`
		},
		poolFoul: {
			[PoolGameFoulType.cueBallPocket]: `¡%{name} ha metido la bola blanca!`,
			[PoolGameFoulType.cueBallHitNoBall]: `¡%{name} no golpeó otra bola!`,
			[PoolGameFoulType.cueBallHitWrongBall]: `¡%{name} golpeó primero la bola equivocada!`,
			[PoolGameFoulType.cushionHitsLessThanTwo]: `Al menos dos bolas deben golpear una almohadilla después de romper.`,
			[PoolGameFoulType.cushionHitsLessThanOne]: `Ninguna bola golpeó una almohadilla después del primer contacto.`,
			[PoolGameFoulType.illegalEightBallPocket]: `%{name} embocó la bola 8 mientras cometía una falta.`,
			[PoolGameFoulType.illegalEightBallPocketTooSoon]: `%{name} embocó la bola 8 demasiado pronto.`,
			[PoolGameFoulType.pocketedWrongBall]: `%{name} ha metido la bola equivocada.`
		},
		about: {
			description: `Bloob.io es un proyecto de pasión que consiste en juegos de navegador multijugador.`,
			licensing: null,
			developedBy: `Desarrollado por %{name}`,
			iconsSource: `Iconos por cortesía de %{name} (gratis)`,
			soundsSource: `Sonidos proporcionados por %{name} (con licencia)`,
			rottenApplesSource: null,
			localization: null
		}
	}
}
