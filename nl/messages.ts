import error from './error'
import game from './game'
import chat from './chat'

import { MessageList } from '../types/messages'
import { PoolGameGroup, PoolGameFoulType } from '../types/index'

export default <MessageList>{
	name: `Bloob.io`,
	error,
	game,
	chat,
	header: {
		message: {
			lobby: `Spel lobby`,
			finished: `Spel afgelopen`,
			tied: `Gelijkspel`,
			finishedRematch: `Rematch begint straks`,
			inProgress: `Spel is gaande`,
			staleMoves: `Spel verlopen — %{staleCount} zetten zonder overname`,
			forfeit: `Spel afgelopen — Tegenstander heeft opgegeven`,
			winner: `Spel gewonnen door %{name}`,
			inactive: `Spel beëindigd wegens inactiviteit`,
			late: `Spel beëindigd wegens missen van %{turns} beurt(en)`,
			pickActionCard: `Actiekaart kiezen`,
			pickCardSelection: `Maken van kaart selectie`,
			handDump: `Dumpronde`,
			handPreview: `Hand preview`,
			voting: `Stemmen`,
			voteResults: `Stemresultaten`,
			flippingField: `Speelveld aan het omkeren`,
			removingRow: `Verwijderen van rij`,
			yourTurn: `Jouw beurt %{extra}`,
			nameTurn: `%{name}s beurt`,
			yourTurnBreaking: `Jij bent aan het breken %{extra}`,
			nameTurnBreaking: `%{name} is aan het breken`,
			illegallyPocketedEightBall: `De eight ball is te vroeg verdwenen`,
			roundCount: `Ronde %{current} van de %{total}`
		},
		description: {
			waitingForPlayers: `Wachten op spelers`,
			startCountdown: `Spel begint in %{text}...`,
			rematchStartCountdown: `Rematch begint in %{text}...`,
			remainingTimeCountdown: `%{clock} over...`,
			nextRoundCountdown: `Volgende ronde in %{text}...`,
			youWon: `Je hebt gewonnen`,
			nameWon: `%{name} heeft gewonnen`
		}
	},
	placeholder: {
		cardSetId: `Vul kaartenset ID in...`,
		cardContent: `Vul kaartinhoud in...`,
		cardSetName: `Vul een naam in voor deze kaartenset...`,
		matchId: `Spel ID of URL`,
		message: `Bericht...`,
		username: `Gebruikersnaam`,
		password: `Wachtwoord`
	},
	language: {
		'nl-NL': `Nederlands`,
		'en-US': `Engels (VS)`,
		'en-GB': `Engels (VK)`,
		'fr-FR': `Frans`,
		'de-DE': `Duits`,
		'it-IT': `Italiaans`,
		'pl-PL': `Pools`,
		'pt-BR': `Portugees (BR)`,
		'es-ES': `Spaans (EU)`,
		'es-MX': `Spaans (MX)`,
		'sv-SE': `Zweeds`
	},
	status: {
		viewAllGames: `Bekijk alle spellen`,
		playingAgainstBots: `Spelen Tegen Bots`,
		playingAgainstPlayers: `Spelen Tegen Spelers`,
		matchesWaiting: `<b>0</b> spellen wachten | <b>1</b> spel wacht | <b>{count}</b> spellen wachten`,
		playingGame: `<b>0</b> spelen dit spel | <b>1</b> speelt dit spel | <b>{count}</b> spelen dit spel`,
		online: `<b>{count}</b> online`,
		connection: `Connectie`,
		ping: `Ping`,
		timeOffset: `Tijdsverschil`,
		version: `Versie`,
		userId: `User ID`,
		notice: `Mededeling`
	},
	category: {
		misc: `Misc`,
		field: `Speelveld`,
		dump: `Dump`,
		bomb: `Bom`,
		filter: `Filter`,
		times: `Tijden`,
		round: `Ronde`,
		flip: `Omdraaien`,
		default: `Standaard`,
		fallback: `Terugvalvoorwaarden`,
		take: `Overnemen`,
		tetris: `Tetris`,
		basic: `Basis`,
		language: `Taal`
	},
	time: {
		hours: `0 uren | 1 uur | {count} uren`,
		minutes: `0 minuten | 1 minuut | {count} minuten`,
		seconds: `0 seconden | 1 seconde | {count} seconden`
	},
	count: {
		kills: `0 kills | 1 kill | {count} kills`,
		deaths: `0 overlijden | 1 overlijden | {count} overlijden`,
		lives: `0 levens | 1 leven | {count} levens`,
		files: `0 bestanden | 1 bestand | {count} bestanden`,
		points: `0 punten | 1 punt | {count} punten`,
		pieces: `0 schijven | 1 schijf | {count} schijven`,
		wins: `0 overwinningen | 1 overwinning | {count} overwinningen`,
		cards: `0 kaarten | 1 kaart | {count} kaarten`,
		moves: `0 zetten | 1 zet | {count} zetten`,
		playing: `0 spelen nu | 1 speelt nu | {count} spelen nu`,
		players: `0 spelers | 1 speler | {count} spelers`,
		selectedCards: `Geen kaarten geselecteerd | 1 kaart geselecteerd | {count} kaarten geselecteerd`,
		matches: `0 spellen | 1 spel | {count} spellen`,
		matchesFound: `0 spellen gevonden | 1 spel gevonden | {count} spellen gevonden`,
		matchesWaiting: `0 spellen wachten | 1 spel wacht | {count} spellen wachten`,
		needMorePlayers: `Nog 0 spelers nodig | Nog 1 speler nodig | Nog {count} spelers nodig`,
		playAgainstBots: `Speel Tegen Bots | Speel Tegen een Bot | Speel Tegen Bots`,
		playRandomOpponents: `Play Random Opponents | Play Random Opponent | Play Random Opponents`,
		turnsToFlip: `Beurten tot flip | Beurt tot flip | Beurten tot flip`,
		increment: `Stappen van 0 | Stap van 1 | Stappen van {count}`
	},
	misc: {
		about: `Over`,
		public: `Openbaar`,
		private: `Privé`,
		add: `Voeg toe`,
		remove: `Verwijder`,
		yes: `Ja`,
		no: `Nee`,
		disabled: `Uitgeschakeld`,
		enabled: `Ingeschakeld`,
		excluded: `Uitgezonderd`,
		included: `Inbegrepen`,
		new: `Nieuw`,
		fixed: `Vast`,
		changed: `Gewijzigd`,
		guest: `Gast`,
		settings: `Instellingen`,
		localPlay: `Lokaal Spelen`,
		preset: `Preset`,
		you: `Jij`,
		home: `Home`,
		bot: `Bot`,
		bots: `Bots`,
		vibration: `Trilfunctie`,
		unavailable: `Niet beschikbaar`,
		changeLog: `Update Logboek`,
		status: `Status`,
		information: `Informatie`,
		language: `Taal`,
		toggle: `Toggle`,
		login: `Login`,
		maintenance: `Onderhoud`,
		admin: `Admin`,
		nsfw: `NSFW`,
		specificCards: `Specifieke Kaarten`,
		matchId: `Spel ID`,
		chat: `Chat`,
		host: `Spelleider`,
		player: `Speler`,
		players: `Spelers`,
		loading: `Aan het laden...`,
		percentage: `{percentage}%`,
		percentageDisabled: `{percentage}% (Uitgeschakeld)`,
		scrollBackDown: `Scroll terug`,
		pickYourself: `Kies voor jezelf`,
		highPing: `Je ping is hoog (%{ping}ms)`,
		currentRoundCount: `Ronde (%{current}/%{total})`,
		currentSkipCount: `Sla over (%{current}/%{total})`,
		currentReadyCount: `Gereed (%{current}/%{total})`,
		assignedTypeSelf: `Jij bent %{type}`,
		assignedTypeSelfLocal: `Speler (%{index}) is %{type}`,
		broadcast: `Omroep`,
		confirm: `Bevestig`,
		close: `Sluit`,
		edit: `Wijzig`,
		delete: `Verwijder`,
		cancel: `Annuleer`,
		reset: `Reset`,
		start: `Start`,
		download: `Download`,
		share: `Deel`,
		copy: `Kopieer`,
		view: `Bekijk`,
		donate: `Doneer`,
		forfeit: `Verklaar Verlies`,
		processFiles: `Verwerk Bestanden`,
		sendMessage: `Verstuur Bericht`,
		refreshWindow: `Ververs Scherm`,
		makeHost: `Leiderschap Overdragen`,
		kickUser: `Verwijder Gebruiker`,
		returnToMenu: `Terug naar Menu`,
		returnToLobby: `Terug naar Lobby`,
		playAsGuest: `Speel als Gast`,
		averageLength: `Gem. Lengte`,
		largestTake: `Grootste Overname`,
		takes: `Overnames`,
		pieces: `Schijven`,
		words: `Woorden`,
		score: `Score`,
		rank: `Plaats`,
		kills: `Kills`,
		points: `Punten`,
		wins: `Overwinningen`,
		pocketed: `Gepot`,
		shots: `Schoten`,
		deaths: `Sterfgevallen`,
		and: `en`,
		vs: `vs`,
		selectAll: `Selecteer alles`,
		deselectAll: `Deselecteer alles`,
		resetData: `Reset Gegevens`,
		customize: `Wijzig`,
		inviteOthers: `Anderen Uitnodigen`,
		activeFilters: `Actieve Filters`,
		minMax: `Min. %{min} | Max. %{max}`,
		madeBy: `Gemaakt door %{name}`,
		selectedOfLimit: `%{current} geselecteerd van %{total} limiet`,
		helpLocalise: `Help de lokalisatie te verbeteren`,
		discord: `Join onze Discord`,
		volume: `Volume`,
		volumeInterface: `Interface Volume`,
		volumeEffects: `Effecten Volume`,
		gameMenu: `Spelmenu`,
		selectYourLanguage: `Selecteer Jouw Taal`,
		selectYourColor: `Selecteer Jouw Kleur`,
		latestChanges: `Laatste Wijzigingen`,
		noChangesDetected: `Geen Wijzigingen Gevonden`,
		newChanges: `Nieuw`,
		saveChanges: `Wijzigingen Opslaan`,
		previousChanges: `Zie eerdere wijzigingen`
	},
	card: {
		empty: `Geen Kaarten`,
		total: `Totaal Aantal Kaarten`,
		view: `Bekijk Kaarten`,
		editor: {
			title: `Kaart Maker`,
			name: `Kaartenset Naam`,
			type: `Kaart Type`,
			content: `Kaartinhoud`,
			contentUnderscore: `Gebruik _ waar antwoordkaarten moeten komen`,
			pick: `Antwoord Kaarten`,
			create: `Maak Nieuwe Kaart`,
			deleted: `Kaart succesvol verwijderd!`,
			edited: `Kaart succesvol gewijzigd!`,
			created: `Kaart succesvol aangemaakt!`
		},
		type: {
			black: `Actie (Zwart)`,
			white: `Antwoord (Wit)`
		},
		sets: {
			title: `Kaartensets`,
			contribute: `Draag bij aan deze lijst`,
			create: `Creëer Kaartenset`,
			browser: `Bekijk Openbare Kaartensets`,
			import: `Importeer Kaartenset`,
			importer: `Kaartenset Importer`,
			namedTitle: `Kaartenset "%{title}"`,
			custom: `Custom Kaartensets`,
			default: `Standaard Kaartensets`,
			noneFound: `Geen Kaartensets Gevonden`,
			noneSelected: `Geen Kaartensets Geselecteerd`,
			importById: `Kaartensets importeren met een ID (zoals van Many Decks)`,
			notInOwnLibrary: `Ontbrekende Set`,
			addToLibrary: `Toevoegen`,
			entrySave: `Bewaar Kaartenset`,
			entrySaved: `Opgeslagen`,
			entryProcessing: `Aan het verwerken`,
			info: {
				importFinished: `Alle %{total} kaartensets verwerkt`,
				importProgress: `Aan het verwerken van kaartenset %{current} uit %{total}`,
				importFailed: `Kan kaartenset "%{name}" niet verwerken`,
				emptyFolder: `Er zijn hier nog geen kaartensets gedeeld.`,
				emptyList: `Jouw custom kaartensets zullen hier verschijnen.`,
				emptyListNotHost: `De spelleider heeft geen custom kaartensets gekozen.`,
				noneSelected: `Spelleider moet kaartensets selecteren.`,
				notInOwnLibrary: `Deze custom kaartenset is toegevoegd door een andere gebruiker. Voeg deze toe aan je bibliotheek om deze in de toekomst opnieuw te gebruiken.`,
				importById: `Je kunt de ID van kaartensets van populaire diensten hieronder invullen. Eenmaal gedownload kun je ze gemakkelijk hieronder uploaden.`,
				csv: `Let op: CSV-bestandsondersteuning is beperkt en de resulterende kaartenset kan fouten bevatten. Voor de beste resultaten gebruik de native .json bestanden (hetzelfde als export).`,
				delete: `Het verwijderen van een custom kaartenset met de naam "%{name}" kan niet ongedaan worden gemaakt. Download de set eerst lokaal als je deze later wilt kunnen herstellen.`,
				storage: `Kaartensets worden opgeslagen in jouw browser. Download en bewaar een kopie om deze niet te verliezen.`,
				notHost: `Omdat jij niet de spelleider bent zijn jouw ingevoerde kaartensets verborgen.`,
				sizeLimit: `Elke custom kaartenset neemt een neemt opslagruimte in beslag. Om prestatieredenen kan een niet meer dan <b>%{size}</b> aan custom kaartensets tegelijk gebruiken.`,
				filterDisclaimer: `Let op: deze filter kan alleen gegarandeerd worden voor officiële kaartensets. Aangepaste sets werken mogelijk niet met deze filter.`
			}
		},
		info: {
			pickAction: `Kies een actiekaart voor deze ronde`,
			judgePickingActionCard: `Beslisser %{name} is een actiekaart aan het kiezen`,
			waitForSelections: `Jij bent de <b>beslisser</b> deze ronde — wacht tot iedereen klaar is`,
			preview: `Neem even de tijd om naar je (nieuwe) kaarten te kijken`,
			dump: `Selecteer alle kaarten die je niet meer wilt hebben`,
			noType: `Er zijn geen %{type} kaarten`,
			delete: `Je staat op het punt kaart "%{info}" te verwijderen.`,
			winningOption: `%{name} won deze ronde met selectie %{selection}`,
			actionResponseCardCounter: `Actie- en antwoordkaartenteller. Sommige sets gebruiken dezelfde kaarten, daarvan worden dubbele kaarten automatisch verwijderd. Het filteren van <b>NSFW</b> of <b>Specifieke  Kaarten</b> vermindert ook het totale aantal.`,
			navigateSelf: `Navigeer zelf`,
			navigateFollowJudge: `Zie wat de beslisser ziet`
		}
	},
	match: {
		create: `Maak Nieuw Spel`,
		leave: `Verlaat Spel`,
		join: `Join Spel`,
		full: `Vol Spel`,
		rematch: `Rematch`,
		lobby: {
			start: `Start Spel`,
			cancelCountdown: `Aftellen Annuleren`,
			starting: `Spel Begint`,
			waiting: `Wachten tot de spelleider spel start`
		},
		browser: {
			list: `Bekijk Spellen`,
			available: `Beschikbare Spellen`,
			noneAvailable: `Geen Beschikbare Spellen`
		},
		matchmaking: {
			tiredOfWaiting: `Geen zin meer om te wachten?`,
			cancel: `Annuleer Matchmaking`,
			searching: `Op zoek naar tegenstanders... (%{time})`,
			found: `Spel gevonden! Begint in %{time}...`
		},
		info: {
			makeHost: `Je staat op het punt om de leiderschap van het spel over te dragen aan "%{name}".`,
			kickUser: `Je staat op het punt om "%{name}" uit dit spel te verwijderen.`,
			noMatches: `Beschikbare spellen zullen hier verschijnen`,
			rematch: `Wil je nog een keer spelen?`,
			rematchWaiting: `Wachtend op de tegenstander om de rematch te accepteren...`,
			rematchRequest: `%{name} wilt een rematch`,
			joinById: `Je kunt meedoen met een privé spel door de viercijferige ID in te vullen.`,
			public: `<b>Openbaar: </b>Iedereen kan meedoen door naar de beschikbare spellen te kijken.`,
			private: `<b>Privé: </b>Spelers kunnen alleen meedoen via de URL of de viercijferige ID.`,
			finishedSettings: `Klaar met het wijzigen van de instellingen?`,
			leave: `Het kan zijn dat je niet meer terug kunt komen als je het spel verlaat.`,
			leaveLast: `Omdat je alleen bent zal dit spel worden beëindigt zodra je het spel verlaat.`,
			leaveAsHost: `Iemand anders zal spelleider worden zodra je het spel verlaat.`
		}
	},
	info: {
		howToPlay: `Bekijk hoe je dit spel speelt`,
		skipStepOverHalf: `Deze stap kan ook worden overgeslagen als meer dan de helft van de gebruikers daarvoor stemt.`,
		skipStepAll: `Deze stap kan ook worden overgeslagen als alle gebruikers daarvoor stemt.`,
		voteReduceTime: `De resterende tijd wordt automatisch verminderd als iedereen gestemd heeft.`,
		interfaceAutoResize: `Vergroot de interface zodat het speelveld past`,
		opponentMissedTurn: `Het is nu jouw beurt omdat de tegenstander te lang heeft gewacht.`,
		localPlay: `Deel hetzelfde apparaat met meerdere mensen door lokale spelers toe te voegen.`,
		highPing: `De ping is de tijd die je nodig hebt om te communiceren met de server. Je ziet alles later dan andere spelers en kan jitter en vertragingen ervaren.`,
		hasBots: `Dit spel kan tegen bots gespeeld worden.`,
		inactiveUser: `Gebruiker zit niet meer in het spel.`,
		copiedToClipboard: `Inhoud gekopieerd naar klembord!`,
		noMessages: `Geen berichten`,
		sendFirstMessage: `Wees de eerste die een berichtje stuurt!`,
		voteSelf: `Je kunt niet op jezelf stemmen`,
		votePick: `Stem op %{option}`,
		votePickChange: `Verander stem naar %{option}`,
		votePickSelected: `Je hebt op %{option} gestemd`,
		inactiveOpponent: `Je tegenstander was inactief`,
		inactiveOpponents: `Alle tegenstanders waren inactief`,
		gameMenu: `Wil je iets anders spelen?`,
		forfeit: `Door verlies te verklaren zal je het spel meteen verliezen.`,
		unsavedChanges: `Je hebt onopgeslagen wijzigingen die gewist zullen worden als je doorgaat.`,
		resetData: `Het resetten van jouw gegevens is onomkeerbaar en zal jouw profiel, instellingen en statistieken wissen.`,
		matchesDisabled: `Alle spelfuncties zijn tijdelijk uitgeschakeld`,
		fileUpload: `Klik om te browsen of sleep jouw bestand(en) hierheen`,
		fileUploadMore: `Voeg meer bestanden toe door te slepen of hier te klikken`,
		fileDownloadAutomatically: `Opent een nieuw tabblad en begint automatisch een .csv te downloaden`,
		fileDownloadManually: `Opent een nieuw tabblad waar je dan het bestand moet opslaan door met de rechtermuisknop te klikken en "Opslaan als" te selecteren`,
		gameJoin: `Join %{title}`,
		gameHelp: `%{title} Uitleg`,
		areYouSure: `Weet je het zeker?`,
		poolType: {
			[PoolGameGroup.solid]: `Effen`,
			[PoolGameGroup.stripe]: `Gestreept`
		},
		poolFoul: {
			[PoolGameFoulType.cueBallPocket]: `%{name} heeft de cue ball gepot!`,
			[PoolGameFoulType.cueBallHitNoBall]: `%{name} heeft geen andere bal geraakt!`,
			[PoolGameFoulType.cueBallHitWrongBall]: `%{name} heeft de verkeerde bal eerst geraakt!`,
			[PoolGameFoulType.cushionHitsLessThanTwo]: `Minstens twee ballen moet na de break de band raken`,
			[PoolGameFoulType.cushionHitsLessThanOne]: `Geen bal heeft een band geraakt nadat deze geraakt was.`,
			[PoolGameFoulType.illegalEightBallPocket]: `%{name} heeft de eight ball gepot na in combinatie met een fout.`,
			[PoolGameFoulType.illegalEightBallPocketTooSoon]: `%{name} heeft de eight ball te vroeg gepot.`,
			[PoolGameFoulType.pocketedWrongBall]: `%{name} heeft de verkeerde bal gepot.`
		},
		about: {
			description: `Bloob.io is een hobby project bestaande uit multiplayer browser games. Suggesties zijn altijd welkom!`,
			licensing: `Sommige spellen kunnen gelicenseerd worden voor gebruik op jouw site of platform (met de nodige aanpassingen). Neem contact op als je geïnteresseerd bent.`,
			developedBy: `Ontwikkeld door %{name}`,
			iconsSource: `Icoontjes met dank aan %{name} (Gratis)`,
			soundsSource: `Geluiden voorzien door %{name} (Licentie)`,
			rottenApplesSource: `Rotten Apples gebaseerd op %{name} (Creative Commons BY-NC-SA 2.0)`,
			localization: `Lokalisatie door vrijwillige bijdragers`
		}
	}
}