import error from './error'
import game from './game'
import chat from './chat'

import { MessageList } from '../types/messages'
import { PoolGameGroup, PoolGameFoulType } from '../types/index'

export default <MessageList>{
	_entries: {
		total: 779,
		missing: 400
	},
	name: `Bloob.io`,
	error,
	game,
	chat,
	header: {
		message: {
			lobby: `Lobby della partita`,
			finished: `Partita finita`,
			tied: `Partita pareggiata`,
			finishedRematch: `La rivincita comincia tra poco`,
			inProgress: null,
			staleMoves: null,
			forfeit: `La partita è finita: l'avversario ha dato forfait`,
			winner: `Partita vinta da %{name}`,
			inactive: `Partita conclusa per inattività`,
			late: `La partita è finita per aver mancato %{turns} turno(i)`,
			pickActionCard: `Scegliendo la carta di azione`,
			pickCardSelection: `Selezionando la carta`,
			handDump: null,
			handPreview: null,
			voting: null,
			voteResults: null,
			flippingField: `Capovolgendo il campo`,
			removingRow: null,
			yourTurn: `Tuo turno %{extra}`,
			nameTurn: `Turno di %{name}`,
			yourTurnBreaking: `Stai spaccando %{extra}`,
			nameTurnBreaking: `%{name} sta spaccando`,
			illegallyPocketedEightBall: `Eight Ball è stato mandato in buca in modo non regolare`,
			roundCount: `Round %{current} di %{total}`
		},
		description: {
			waitingForPlayers: `Aspettando i giocatori`,
			startCountdown: `La partita comincia tra %{text}...`,
			rematchStartCountdown: `La rivincita comincia tra %{text}...`,
			remainingTimeCountdown: `%{clock} di tempo rimanente...`,
			nextRoundCountdown: `Prossimo round tra %{text}...`,
			youWon: `Hai vinto`,
			nameWon: `%{name} ha vinto`
		}
	},
	placeholder: {
		cardSetId: null,
		cardContent: null,
		cardSetName: null,
		matchId: `ID o URL della partita`,
		message: null,
		username: null,
		password: null
	},
	language: {
		'nl-NL': null,
		'en-US': `Inglese`,
		'en-GB': null,
		'fr-FR': `Francese`,
		'de-DE': null,
		'it-IT': `Italiano`,
		'pl-PL': null,
		'pt-BR': `Portoghese (BR)`,
		'es-ES': null,
		'es-MX': `Spagnolo`,
		'sv-SE': null
	},
	status: {
		viewAllGames: `Vedi tutti i giochi`,
		playingAgainstBots: null,
		playingAgainstPlayers: null,
		matchesWaiting: null,
		playingGame: null,
		online: null,
		connection: `Connessione`,
		ping: `Ping`,
		timeOffset: `Compensazione del tempo`,
		version: `Versione`,
		userId: `ID utente`,
		notice: null
	},
	category: {
		misc: `Varie`,
		field: null,
		dump: `Svuotare`,
		bomb: null,
		filter: `Filtro`,
		times: `Tempi`,
		round: `Round`,
		flip: `Capovolgimento`,
		default: null,
		fallback: `Condizioni di riserva`,
		take: `Sostituire`,
		tetris: null,
		basic: `Base`,
		language: null
	},
	time: {
		hours: `0 ore | 1 ora | {count} ore`,
		minutes: `0 minuti | 1 minuto | {count} minuti`,
		seconds: `0 secondi | 1 secondo | {count} secondi`
	},
	count: {
		kills: null,
		deaths: null,
		lives: null,
		files: null,
		points: `0 punti | 1 punto | {count} punti`,
		pieces: `0 pedine | 1 pedina | {count} pedine`,
		wins: `0 vincite | 1 vincita | {count} vincite`,
		cards: `0 carte | 1 carta | {count} carte`,
		moves: `0 mosse | 1 mossa | {count} mosse`,
		playing: `0 giocando | 1 giocando | {count} giocando`,
		players: `0 giocatori | 1 giocatore | {count} giocatori`,
		selectedCards: null,
		matches: null,
		matchesFound: `0 match trovati | 1 match trovato | {count} match trovati`,
		matchesWaiting: `0 match in attesa | 1 match in attesa | {count} match in attesa`,
		needMorePlayers: `Necessità di 0 giocatori in più | Necessità di 1 giocatore in più | Necessità di {count} giocatori in più`,
		playAgainstBots: `Gioca contro i robot | Gioca contro un robot | Gioca contro i robot`,
		playRandomOpponents: `Gioca con avversari casuali`,
		turnsToFlip: `Turni prima del capovolgimento | Turno prima del capovolgimento | Turni prima del capovolgimento`,
		increment: `Incrementi di %{count}`
	},
	misc: {
		beta: `Beta`,
		about: `A proposito di`,
		public: `Pubblico`,
		private: `Privato`,
		add: `Aggiungi`,
		remove: `Elimina`,
		yes: `Sì`,
		no: `No`,
		disabled: `Disabilitato`,
		enabled: `Abilitato`,
		excluded: `Escluso`,
		included: `Incluso`,
		new: `Nuovo`,
		fixed: `Fisso`,
		changed: `Cambiato`,
		guest: null,
		settings: `Impostazioni`,
		localPlay: `Gioco in locale`,
		preset: `Preset`,
		you: `Tu`,
		home: null,
		bot: null,
		bots: null,
		vibration: `Vibrazione`,
		unavailable: `Non disponibile`,
		changeLog: `Registro delle modifiche`,
		status: `Stato`,
		information: `Informazione`,
		language: `Lingua`,
		toggle: `Attivare`,
		login: null,
		maintenance: null,
		admin: null,
		nsfw: null,
		specificCards: null,
		matchId: `ID del match`,
		chat: `Chat`,
		host: `Host`,
		player: `Giocatore`,
		players: `Giocatori`,
		loading: null,
		percentage: null,
		percentageDisabled: null,
		scrollBackDown: `Scorri verso il basso`,
		pickYourself: `Scegli tu stesso`,
		highPing: null,
		currentRoundCount: `Round (%{current}/%{total})`,
		currentSkipCount: null,
		currentReadyCount: null,
		assignedTypeSelf: `Sei %{type}`,
		assignedTypeSelfLocal: `Il giocatore (%{index}) è %{type}`,
		broadcast: null,
		confirm: `Conferma`,
		close: `Chiudi`,
		edit: `Modifica`,
		delete: `Elimina`,
		cancel: `Annulla`,
		reset: `Reset`,
		start: `Inizio`,
		download: null,
		share: `Condividi`,
		copy: `Copia`,
		view: `Vista`,
		donate: null,
		forfeit: `Lascia il gioco`,
		processFiles: null,
		sendMessage: `Manda un messaggio`,
		refreshWindow: `Ricarica la finestra`,
		makeHost: `Crea un host`,
		kickUser: `Espelli l'utente`,
		returnToMenu: `Torna al Menu`,
		returnToLobby: `Torna alla Lobby`,
		playAsGuest: null,
		averageLength: `Lunghezza media`,
		largestTake: `Presa più grande`,
		takes: `Prese`,
		pieces: `Pedine`,
		words: `Parole`,
		score: `Punteggio`,
		rank: `Classifica`,
		kills: null,
		points: `Punti`,
		wins: `Vincite`,
		pocketed: `Mandato in buca`,
		shots: `Colpi`,
		deaths: null,
		and: `e`,
		vs: `contro`,
		selectAll: `Seleziona tutto`,
		deselectAll: `Deseleziona tutto`,
		resetData: `Resetta i dati`,
		customize: `Personalizza`,
		inviteOthers: `Invita degli amici`,
		activeFilters: `Filtri attivi`,
		minMax: `Min. %{min} | Max. %{max}`,
		madeBy: `Fatto da %{name}`,
		selectedOfLimit: `Selezionato il %{current} del limite di %{total}`,
		helpLocalise: null,
		discord: `Unisciti al nostro Discord`,
		volume: `Volume`,
		volumeInterface: `Interfaccia volume`,
		volumeEffects: `Effetti volume`,
		gameMenu: `Menu del gioco`,
		selectYourLanguage: null,
		selectYourColor: `Seleziona il tuo colore`,
		latestChanges: `Modifiche recenti`,
		noChangesDetected: null,
		newChanges: `Nuove modifiche`,
		saveChanges: `Salva le modifiche`,
		previousChanges: `Vedi le modifiche precedenti`
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
		create: `Crea una partita`,
		leave: `Lascia la partita`,
		join: `Unisciti alla partita`,
		full: `Partita completa`,
		rematch: `Rivincita`,
		lobby: {
			start: `Comincia la partita`,
			cancelCountdown: `Annulla il conto alla rovescia`,
			starting: `La partita sta cominciando`,
			waiting: `Aspettando che l'host cominci la partita`
		},
		browser: {
			list: `Dai un'occhiata alle partite`,
			available: `Partite disponibili`,
			noneAvailable: `Non ci sono partite disponibili`
		},
		matchmaking: {
			tiredOfWaiting: `Stanco di aspettare?`,
			cancel: `Annulla la ricerca della partita`,
			searching: `Sto cercando gli avversari... (%{time})`,
			found: `Partita trovata! Comincia tra %{time}...`
		},
		info: {
			makeHost: `Stai per far diventare "%{name}" il nuovo host.`,
			kickUser: `Stai per espellere "%{name}" da questa partita.`,
			noMatches: `Le nuove partite saranno visibili qui.`,
			rematch: `Vuoi giocare ancora?`,
			rematchWaiting: `Aspettando che l'altro giocatore accetti la rivincita...`,
			rematchRequest: `%{name} vuole una rivincita`,
			joinById: `Puoi unirti ad una partita privata inserendo l'ID a quattro cifre.`,
			public: `<b>Pubblico: </b>Chiunque può unirsi guardando le partite disponibili.`,
			private: `<b>Privato: </b>I giocatori possono unirsi solo attraverso l'URL o l'ID a 4 cifre.`,
			finishedSettings: `Hai finito di modificare le impostazioni della partita?`,
			leave: `Potresti non riuscire a riunirti se decidi di lasciare il gioco.`,
			leaveLast: `Visto che sei l'unica persona nel gioco, la partita terminerà quando esci.`,
			leaveAsHost: `Qualcun altro diventerà il nuovo host quando uscirai.`
		}
	},
	info: {
		incompleteTranslationNotice: null,
		betaNotice: null,
		howToPlay: `Impara a giocare a questo gioco`,
		skipStepOverHalf: null,
		skipStepAll: null,
		voteReduceTime: null,
		interfaceAutoResize: `Ridimensiona l'interfaccia per adattarla al campo`,
		opponentMissedTurn: `È il tuo turno perchè l'avversario ha finito il tempo`,
		localPlay: `Condividi lo stesso dispositivo con più persone aggiungendo giocatori in locale.`,
		highPing: null,
		hasBots: null,
		inactiveUser: `L'utente non è connesso a questa partita.`,
		copiedToClipboard: `URL copiato negli appunti!`,
		noMessages: `Nessun messaggio`,
		sendFirstMessage: `Sii il primo a mandare un messaggio!`,
		voteSelf: null,
		votePick: null,
		votePickChange: null,
		votePickSelected: null,
		inactiveOpponent: null,
		inactiveOpponents: null,
		gameMenu: null,
		forfeit: `Se abbandoni il gioco perderai in automatico.`,
		unsavedChanges: null,
		resetData: `Il reset dei tuoi dati è irreversibile e cancellerà il tuo profilo, le impostazioni e le statistiche.`,
		matchesDisabled: null,
		fileUpload: null,
		fileUploadMore: null,
		fileDownloadAutomatically: null,
		fileDownloadManually: null,
		gameJoin: `Unisciti al match %{title}`,
		gameHelp: `%{title} aiuto`,
		areYouSure: `Sei sicuro?`,
		poolType: {
			[PoolGameGroup.solid]: `Piene`,
			[PoolGameGroup.stripe]: `A strisce`
		},
		poolFoul: {
			[PoolGameFoulType.cueBallPocket]: `%{name} ha mandato il pallino in buca!`,
			[PoolGameFoulType.cueBallHitNoBall]: `%{name} non ha colpito nessun'altra palla!`,
			[PoolGameFoulType.cueBallHitWrongBall]: `%{name} ha colpito la palla sbagliata per prima!`,
			[PoolGameFoulType.cushionHitsLessThanTwo]: `Almeno due palle devono colpire il bordo dopo la spaccata.`,
			[PoolGameFoulType.cushionHitsLessThanOne]: `Nessuna palla ha colpito il bordo dopo il primo contatto con la palla.`,
			[PoolGameFoulType.illegalEightBallPocket]: `%{name} ha mandato in buca la palla 8 commettendo fallo.`,
			[PoolGameFoulType.illegalEightBallPocketTooSoon]: `%{name} ha mandato in buca la palla 8 troppo presto.`,
			[PoolGameFoulType.pocketedWrongBall]: `%{name} ha mandato in buca la palla sbagliata.`
		},
		about: {
			description: `Bloob.io è un progetto creato con passione e composto da giochi multiplayer per il browser.`,
			licensing: null,
			developedBy: `Sviluppato da %{name}`,
			iconsSource: `Icone gentilmente concesse da %{name} (gratis)`,
			soundsSource: `Suoni forniti da %{name} (autorizzato)`,
			rottenApplesSource: null,
			localization: null
		}
	}
}
