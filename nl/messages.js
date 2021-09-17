import error from './error'
import game from './game'
import chat from './chat'

export default {
	name: 'Bloob.io',
	error,
	game,
	chat,
	header: {
		message: {
			lobby: 'Spel Lobby',
			finished: 'Spel Afgelopen',
			tied: `Gelijkspel`,
			staleMoves: `Spel Verlopen — %{staleCount} zetten zonder overname`,
			concede: `Spel Afgelopen — Tegenstander heeft opgegeven`,
			winner: `Spel Gewonnen Door %{name}`,
			inactive: `Spel Beëindigd Wegens Inactiviteit`,
			late: `Spel Beëindigd Wegens Missen van %{turns} Beurt(en)`,
			pickActionCard: 'Actiekaart Kiezen',
			makingCardSelections: 'Maken van Kaart Selectie',
			handDump: 'Dumpronde',
			handPreview: 'Hand Preview',
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
		cardSetId: 'Vul kaartenset ID in...',
		cardContent: 'Vul kaartinhoud in...',
		cardSetName: 'Vul een naam in voor deze kaartenset...',
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
		scrollBackDown: 'Scroll terug',
		pickYourself: 'Kies voor jezelf',
		round: 'Ronde (%{current}/%{total})',
		skip: 'Sla over (%{current}/%{total})',
		ready: 'Gereed (%{current}/%{total})',
		skipStep: `Deze stap kan ook worden overgeslagen als meer dan de helft van de gebruikers daarvoor stemt.`,
		skipStepAll: `Deze stap kan ook worden overgeslagen als alle gebruikers daarvoor stemt.`,
		voteReduceTime: `De resterende tijd wordt automatisch verminderd als iedereen gestemd heeft.`,
		filterDisclaimer: `Let op: deze filter kan alleen gegarandeerd worden voor officiële kaartensets. Aangepaste sets werken mogelijk niet met deze filter.`,
		resize: `<span class="warning-text">Vergroot de interface zodat het speelveld past</span>`,
		winningSelection: `%{name} won deze ronde met selectie %{selection}`,
		noticeDescription: 'Een mededeling blijft bovenaan de pagina staan tot deze is verwijderd',
		actionResponseCardCounter: `Actie- en antwoordkaartenteller. Sommige sets gebruiken dezelfde kaarten, daarvan worden dubbele kaarten automatisch verwijderd. Het filteren van <b>NSFW</b> of <b>Specifieke  Kaarten</b> vermindert ook het totale aantal.`
	},
	category: {
		misc: 'Misc',
		dump: 'Dump',
		filter: 'Filter',
		times: 'Tijden',
		round: 'Ronde',
		flip: 'Omdraaien',
		fallback: 'Terugvalvoorwaarden',
		take: 'Overnemen',
		basic: 'Basis',
		language: 'Taal'
	},
	time: {
		hours: '0 uren | 1 uur | {count} uren',
		minutes: '0 minuten | 1 minuut | {count} minuten',
		seconds: '0 seconden | 1 seconde | {count} seconden'
	},
	count: {
		files: '0 bestanden | 1 bestand | {count} bestanden',
		points: '0 punten | 1 punt | {count} punten',
		pieces: '0 schijven | 1 schijf | {count} schijven',
		wins: '0 overwinningen | 1 overwinning | {count} overwinningen',
		cards: '0 kaarten | 1 kaart | {count} kaarten',
		moves: '0 zetten | 1 zet | {count} zetten',
		players: '0 spelers | 1 speler | {count} spelers',
		playing: '0 aan het spelen | 1 aan het spelen | {count} aan het spelen',
		selectedCards: `Geen kaarten geselecteerd | 1 kaart geselecteerd | {count} kaarten geselecteerd`,
		matchesFound: '0 spellen gevonden | 1 spel gevonden | {count} spellen gevonden',
		matchesWaiting: '0 spellen wachten | 1 spel wacht | {count} spellen wachten',
		needMorePlayers: 'Nog 0 spelers nodig | Nog 1 speler nodig | Nog {count} spelers nodig'
	},
	misc: {
		copy: 'Kopieer',
		matchId: 'Spel ID',
		vibration: 'Trilfunctie',
		unavailable: 'Niet beschikbaar',
		changeLog: 'Update Logboek',
		status: 'Status',
		information: 'Informatie',
		language: 'Taal',
		toggle: 'Toggle',
		concedeGame: 'Verklaar Verlies',
		processFiles: 'Verwerk Bestanden',
		sendMessage: 'Verstuur Bericht',
		chat: 'Chat',
		viewAllGames: 'Bekijk alle spellen',
		refreshWindow: 'Ververs Scherm',
		transferLeadership: 'Leiderschap Overdragen',
		kickUser: 'Verwijder Gebruiker',
		menu: 'Menu',
		admin: 'Admin',
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
		confirm: 'Bevestig',
		close: 'Sluit',
		edit: 'Wijzig',
		delete: 'Verwijder',
		cancel: 'Annuleer',
		reset: 'Reset',
		start: 'Start',
		download: 'Download',
		settings: 'Instellingen',
		preset: 'Preset',
		averageLength: 'Gem. Lengte',
		largestTake: 'Grootste Overname',
		takes: 'Overnames',
		pieces: 'Schijven',
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
		cancelCountdown: 'Aftellen Annuleren',
		inviteOthers: 'Anderen Uitnodigen',
		rematch: 'Rematch',
		activeFilters: 'Actieve Filters',
		minMax: 'Min. %{min} | Max. %{max}',
		playersMinMax: '%{min}-%{max} spelers',
		madeBy: 'Gemaakt door %{name}',
		incrementCounter: 'Stappen van %{count}',
		selectedOfLimit: '%{current} geselecteerd van %{total} limiet',
		helpLocalise: 'Help de lokalisatie te verbeteren',
		howToPlay: 'Bekijk hoe je dit spel speelt',
		volume: {
			title: 'Volume',
			interface: 'Interface Volume',
			effects: 'Effecten Volume'
		},
		match: {
			create: 'Maak Nieuw Spel',
			rematch: 'Rematch',
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
			pick: 'Kies Kaarten',
			content: 'Kaartinhoud',
			editor: 'Kaart Maker',
			create: 'Maak Nieuwe Kaart',
			none: 'Geen Kaarten',
			total: 'Totaal Aantal Kaarten',
			view: 'Bekijk Kaarten',
			noneFound: 'Geen Kaarten Gevonden',
			type: {
				title: 'Kaart Type',
				black: 'Actie (Zwart)',
				white: 'Antwoord (Wit)'
			},
			sets: {
				create: 'Maak Nieuwe Kaartenset',
				import: 'Importeer Kaartenset',
				name: 'Kaartenset Naam',
				title: 'Kaartensets',
				importer: 'Kaartenset Importer',
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
		menu: `Een verzameling van multiplayer browser spellen zonder de noodzaak om een account aan te maken. Speel zonder gedoe en pas de ervaring aan naar je eigen smaak.`,
		file: {
			upload: `Klik om te browsen of sleep uw bestand(en) hierheen`,
			uploadAdditional: `Voeg meer bestanden toe door te slepen of hier te klikken`,
			download: {
				automatic: `Opent een nieuw tabblad en begint automatisch een .csv te downloaden`,
				saveAs: `Opent een nieuw tabblad waar je dan het bestand moet opslaan door met de rechtermuisknop te klikken en "Opslaan als" te selecteren`
			}
		},
		chat: {
			empty: {
				title: 'Geen berichten',
				description: 'Wees de eerste die een berichtje stuurt!'
			}
		},
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
				rematch: `%{name} wilt een rematch`
			},
			transferLeadership: `Je staat op het punt om de leiderschap van het spel over te dragen aan "%{name}".`,
			kickUser: `Je staat op het punt om "%{name}" uit dit spel te verwijderen.`,
			finishedSettings: `Klaar met het wijzigen van de instellingen?`,
			available: `Beschikbare spellen zullen hier verschijnen`,
			rematch: `Wil je nog een keer spelen?`,
			public: `<b>Openbaar: </b>Iedereen kan meedoen door naar de beschikbare spellen te kijken.`,
			private: `<b>Privé: </b>Spelers kunnen alleen meedoen via de URL of de viercijferige ID.`,
			reserved: `<b>Rematch: </b>Dit spel is gereserveerd voor gebruikers die op dit moment in dit spel zitten. Andere spelers kunnen niet meedoen.`
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
			support: 'Steun mij'
		},
		card: {
			sets: {
				importId: {
					title: `Kaartensets importeren met een ID (zoals van Many Decks)`,
					content: `Je kunt de ID van kaartensets van populaire diensten hieronder invullen. Eenmaal gedownload kun je ze gemakkelijk hieronder uploaden.`
				},
				csv: `Let op: CSV-bestandsondersteuning is beperkt en de resulterende kaartenset kan fouten bevatten. Voor de beste resultaten gebruik de native .json bestanden (hetzelfde als export).`,
				delete: `Het verwijderen van een custom kaartenset met de naam "%{name}" kan niet ongedaan worden gemaakt. Download de set eerst lokaal als je deze later wilt kunnen herstellen.`,
				storage: `Custom kaartsets worden opgeslagen in jouw browser. Bewaar ze veilig door een gedownloade kopie ergens anders op te slaan.`,
				share: 'Deel en browse voor custom kaartensets hier.',
				noneSelected: 'Spelleider moet kaartensets selecteren.',
				notLeader: `Omdat jij niet de spelleider bent zijn jouw ingevoerde kaartensets verborgen.`,
				sizeLimit: `Elke custom kaartenset neemt een neemt opslagruimte in beslag. Om prestatieredenen kan een niet meer dan <b>%{size}</b> aan custom kaartensets tegelijk gebruiken.`,
				processing: {
					finished: 'Alle %{total} kaartensets verwerkt',
					progress: 'Aan het verwerken van kaartenset %{current} uit %{total}',
					failed: 'Kan kaartenset "%{name}" niet verwerken'
				},
				empty: {
					leader: `Jouw custom kaartensets zullen hier verschijnen.`,
					other: `De spelleider heeft geen custom kaartensets gekozen.`,
					editor: `Jouw (geïmporteerde) custom kaartensets zullen hier te zien zijn.`
				}
			},
			edit: {
				success: `Kaart succesvol gewijzigd!`
			},
			create: {
				success: `Een nieuwe kaart succesvol toegevoegd!`
			},
			preview: `Neem even de tijd om naar je (nieuwe) kaarten te kijken`,
			dump: `Selecteer alle kaarten die je niet meer wilt hebben`,
			underscore: 'Gebruik _ waar antwoordkaarten moeten komen',
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
			concedeGame: `Door verlies te verklaren zal je het spel meteen verliezen.`,
			unsaved: `Je hebt onopgeslagen wijzigingen die gewist zullen worden als je doorgaat.`,
			reset: `Het resetten van uw gegevens is onomkeerbaar en zal uw profiel, instellingen en statistieken wissen.`
		}
	}
}
