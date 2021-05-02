import error from './error'
import game from './game'

export default {
	error,
	game,
	header: {
		message: {
			lobby: 'Spel Lobby',
			finished: 'Spel Afgelopen',
			tied: `Gelijkspel`,
			pickActionCard: 'Actiekaart Kiezen',
			makingCardSelections: 'Maken van Kaart Selectie',
			voting: 'Stemmen',
			voteResults: 'Stemresultaten',
			flippingField: 'Speelveld aan het Omkeren',
			yourTurn: 'Jouw Beurt',
			nameTurn: `%{name}'s Beurt`,
			roundCount: `Ronde %{current} van de %{total}`
		},
		description: {
			lobby: `Wachten op spelers`,
			start: `Spel begint in %{TEXT}...`,
			timeRemaining: `%{CLOCK} over...`,
			nextRound: `Volgende ronde in %{TEXT}...`,
			youWon: `Je hebt gewonnen`,
			nameWon: `%{name} heeft gewonnen`
		}
	},
	placeholder: {
		nickname: 'Vul een nickname in...',
		matchId: 'Spel ID of URL',
		message: 'Bericht...',
		username: 'Gebruikersnaam',
		password: 'Wachtwoord'
	},
	language: {
		'nl-NL': 'Nederlands',
		'en-US': 'Engels (VS)',
		'en-GB': 'Engels (VK)',
		'fr-FR': 'Frans',
		'de-DE': 'Duits',
		'it-IT': 'Italiaans',
		'pl-PL': 'Pools',
		'pt-BR': 'Portugees (BR)',
		'es-ES': 'Spaans (EU)',
		'es-MX': 'Spaans (MX)',
		'sv-SE': 'Zweeds'
	},
	topHeader: {
		matchesWaiting: `<b>0</b> spellen wachten | <b>1</b> spel wacht | <b>{count}</b> spellen wachten`,
		playingGame: `<b>0</b> spelen dit spel | <b>1</b> speelt dit spel | <b>{count}</b> spelen dit spel`,
		online: `<b>{count}</b> online`
	},
	content: {
		pickYourself: 'Kies voor jezelf',
		round: 'Ronde (%{current}/%{total})',
		skip: 'Sla over (%{current}/%{total})',
		voteReduceTime: `De resterende tijd wordt automatisch verminderd als iedereen gestemd heeft.`,
		filterDisclaimer: `Let op: deze filter kan alleen gegarandeerd worden voor officiële kaartensets. Aangepaste sets werken mogelijk niet met deze filter.`,
		resize: `<span class="warning-text">Vergroot de interface zodat het in het speelveld past.</span>`,
		winningSelection: `%{name} won deze ronde met selectie %{selection}`,
		noticeDescription: 'Een mededeling blijft bovenaan de pagina staan tot deze is verwijderd',
		actionResponseCardCounter: `Actie- en antwoordkaartenteller. Sommige sets gebruiken dezelfde kaarten, daarvan worden dubbele kaarten automatisch verwijderd. Het filteren van <b>NSFW</b> of <b>Specifieke  Kaarten</b> vermindert ook het totale aantal.`
	},
	category: {
		misc: 'Misc',
		filter: 'Filter',
		times: 'Tijden',
		round: 'Ronde',
		flip: 'Omdraaien',
		basic: 'Basis',
		language: 'Taal'
	},
	count: {
		points: '0 punten | 1 punt | {count} punten',
		wins: '0 overwinningen | 1 overwinning | {count} overwinningen',
		cards: '0 kaarten | 1 kaart | {count} kaarten',
		matchesFound: '0 spellen gevonden | 1 spel gevonden | {count} spellen gevonden',
		matchesWaiting: '0 spellen wachten | 1 spel wacht | {count} spellen wachten',
		needMorePlayers: 'Nog 0 spelers nodig | Nog 1 speler nodig | Nog {count} spelers nodig'
	},
	misc: {
		maintenance: 'Onderhoud',
		notice: 'Mededeling',
		pending: 'Aan het afwachten',
		connection: 'Connectie',
		ping: 'Ping',
		timeOffset: 'Tijdsverschil',
		version: 'Versie',
		userID: 'User ID',
		unknown: 'Onbekend',
		adminLogin: 'Admin Login',
		globalAnnouncement: 'Universele Melding',
		broadcast: 'Zend Melding',
		login: 'Login',
		about: 'Over',
		public: 'Openbaar',
		private: 'Privé',
		reserved: 'Rematch',
		yes: 'Ja',
		no: 'Nee',
		disabled: 'Uitgeschakeld',
		enabled: 'Ingeschakeld',
		excluded: 'Uitgezonderd',
		included: 'Inbegrepen',
		nsfw: 'NSFW',
		specificCards: 'Specifieke Kaarten',
		view: 'Bekijk',
		new: 'Nieuw',
		fixed: 'Vast',
		changed: 'Gewijzigd',
		close: 'Sluit',
		cancel: 'Annuleer',
		reset: 'Reset',
		start: 'Start',
		settings: 'Instellingen',
		preset: 'Preset',
		averageLength: 'Gem. Lengte',
		words: 'Woorden',
		score: 'Score',
		and: 'en',
		rank: 'Plaats',
		points: 'Punten',
		player: 'Speler',
		players: 'Spelers',
		selectAll: 'Selecteer alles',
		deselectAll: 'Deselecteer alles',
		areYouSure: 'Weet je het zeker?',
		resetData: 'Reset Gegevens',
		resetLobby: 'Reset Lobby',
		customise: 'Wijzig',
		cancelCountdown: 'Annuleer Aftellen',
		inviteOthers: 'Anderen Uitnodigen',
		rematch: 'Rematch',
		activeFilters: 'Actieve Filters',
		minMax: 'Min. %{min} | Max. %{max}',
		incrementCounter: 'Stappen van %{count}',
		selectedOfLimit: '%{current} geselecteerd van %{total} limiet',
		helpLocalise: 'Help de lokalisatie te verbeteren',
		howToPlay: 'Bekijk hoe je dit spel speelt',
		volume: {
			interface: 'Interface Volume',
			effects: 'Effecten Volume'
		},
		match: {
			create: 'Maak Nieuw Spel',
			start: 'Start Spel',
			starting: 'Spel Begint',
			leave: 'Verlaat Spel',
			join: 'Join Spel',
			rejoin: 'Rejoin Spel',
			full: 'Vol Spel',
			reserved: 'Doorlopende Rematch',
			waiting: 'Wachten tot de spelleider spel start'
		},
		matches: {
			browse: 'Bekijk Spellen',
			available: 'Beschikbare Spellen',
			noneAvailable: 'Geen Beschikbare Spellen'
		},
		game: {
			join: 'Join %{title}',
			help: '%{title} Uitleg',
			leader: 'Spelleider',
			duration: 'Spelduur',
			menu: 'Spelmenu'
		},
		card: {
			none: 'Geen Kaarten',
			total: 'Totaal aan Kaarten',
			sets: {
				title: 'Kaartensets',
				namedTitle: 'Kaartenset "%{title}"',
				custom: 'Custom Kaartensets',
				default: 'Standaard Kaartensets',
				noneFound: 'Geen Kaartensets Gevonden',
				noneSelected: 'Geen Kaartensets Geselecteerd',
				edit: 'Wijzig Kaartensets',
				view: 'Bekijk Kaartensets'
			}
		},
		select: {
			language: 'Selecteer een Taal',
			colour: 'Selecteer een Kleur'
		},
		changes: {
			latest: 'Laatste Wijzigingen',
			new: 'Nieuw',
			save: 'Wijzigingen Opslaan',
			previous: 'Zie eerdere wijzigingen'
		},
		return: {
			menu: 'Terug naar Menu',
			lobby: 'Terug naar Lobby'
		}
	},
	info: {
		copy: {
			url: {
				success: `URL gekopieerd naar klembord!`,
				error: `Kan niet naar klembord kopiëren`
			}
		},
		user: {
			inactive: `Gebruiker zit niet meer in het spel.`
		},
		match: {
			leave: {
				player: `Het kan zijn dat je niet meer terug kunt komen als je het spel verlaat.`,
				alone: `Omdat je alleen bent zal dit spel worden verwijdert als je het spel verlaat.`,
				others: `Iemand anders zal spelleider worden zodra je het spel verlaat.`
			},
			join: {
				private: `Je kunt meedoen met een privé spel door de viercijferige ID in te vullen.`,
				again: `Speel opnieuw met dezelfde instellingen`,
				another: `Doe mee met %{name} in een andere wedstrijd`,
				rematch: `%{name} wil een rematch`
			},
			finishedSettings: `Klaar met het wijzigen van de instellingen?`,
			available: `Beschikbare spellen zullen hier verschijnen`,
			rematch: `Wil je weer spelen?`,
			public: `<b>Openbaar</b>: Iedereen kan meedoen door naar de beschikbare spellen te kijken.`,
			private: `<b>Privé</b>: Spelers kunnen alleen meedoen via de URL of de viercijferige ID.`,
			reserved: `<b>Rematch</b>: Dit spel is gereserveerd voor gebruikers die op dit moment in dit spel zitten. Andere spelers kunnen niet meedoen.`
		},
		judge: {
			pickingCard: `Beslisser %{name} is een actiekaart aan het kiezen`,
			waitForPicks: `Jij bent de <b>beslisser</b> deze ronde — wacht tot iedereen klaar is`
		},
		navigate: {
			self: `Navigeer zelf`,
			judge: `Zie wat de beslisser ziet`
		},
		opponent: {
			inactive: `Je tegenstander was inactief`,
			multipleInactive: `Alle tegenstanders waren inactief`
		},
		maintenance: {
			title: 'Onderhoud',
			noMatch: 'Je kunt nu geen spel maken of meedoen',
			description: 'Tijdens onderhoud kan niemand een wedstrijd creëren of er aan deelnemen'
		},
		vote: {
			noSelfVote: 'Je kunt niet op jezelf stemmen',
			selection: 'Stem op %{selection}',
			selectionChange: 'Verander stem naar %{selection}',
			selected: 'Je hebt op %{selection} gestemd'
		},
		about: {
			description: `Bloob.io is een hobby project bestaande uit multiplayer browser games. Spellen moeten leuk, configureerbaar en toegankelijk zijn. Suggesties en ideeën zijn altijd welkom!`,
			developedBy: 'Ontwikkeld door %{name}',
			iconsSource: 'Icoontjes met dank aan %{name} (Gratis)',
			soundsSource: 'Geluiden voorzien door %{name} (Licentie)',
			rottenApples: 'Rotten Apples gebaseerd op %{name} (Creative Commons BY-NC-SA 2.0)',
			support: 'Ondersteun de ontwikkeling'
		},
		card: {
			sets: {
				noneSelected: 'Spelleider moet kaartensets selecteren.',
				notLeader: `Omdat jij niet de spelleider bent zijn jouw ingevoerde kaartensets verborgen.`,
				sizeLimit: `Elke custom kaartenset neemt een neemt opslagruimte in beslag. Om prestatieredenen kan een niet meer dan <b>%{size}</b> aan custom kaartensets tegelijk gebruiken.`,
				empty: {
					leader: `Jouw custom kaartensets zullen hier verschijnen.`,
					other: `De spelleider heeft geen custom kaartensets gekozen.`
				}
			},
			noType: `Er zijn geen %{type} kaarten`,
			type: {
				black: 'actie',
				white: 'antwoord'
			},
			pickAction: `Kies een actiekaart voor deze ronde`
		},
		game: {
			menu: 'Wil je iets anders spelen?'
		},
		flip: {
			turns: 'Beurten tot flip | Beurt tot flip | Beurten tot flip',
			inProgress: 'Speelveld aan het Omkeren'
		},
		data: {
			reset: `Het resetten van uw gegevens is onomkeerbaar en zal uw profiel, instellingen en statistieken wissen.`
		}
	}
}
