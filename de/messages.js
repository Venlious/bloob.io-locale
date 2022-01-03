import error from './error'
import game from './game'
import chat from './chat'

export default {
	name: `Bloob.io`,
	error,
	game,
	chat,
	header: {
		message: {
			lobby: `Lobby`,
			finished: `Spiel vorbei`,
			tied: `Spiel unentschieden`,
			finishedRematch: `Revanche beginnt bald`,
			inProgress: `Spiel im Gange`,
			staleMoves: `Spiel vorbei — %{staleCount} Züge ohne Schlagen`,
			concede: `Spiel vorbei — Gegner hat aufgegeben`,
			winner: `Spiel gewonnen von %{name}`,
			inactive: `Spiel beendet wegen Inaktivität`,
			late: `Spiel beendet wegen %{turns} fehlenden Zügen`,
			pickActionCard: `Aktionskarte auswählen`,
			makingCardSelections: `Kartenauswahl treffen`,
			handDump: `Abwerfrunde`,
			handPreview: `Blattvorschau`,
			voting: `Abstimmung`,
			voteResults: `Abstimmungsergebnisse`,
			flippingField: `Umkehrung des Spielfelds`,
			removingRow: `Reihe entfernen`,
			yourTurn: `Dein Zug`,
			nameTurn: `%{name}'s Zug`,
			roundCount: `Runde %{current} von %{total}`
		},
		description: {
			lobby: `Warte auf Spieler`,
			start: `Spiel startet in %{TEXT}...`,
			rematchStart: `Revanche startet in %{TEXT}...`,
			timeRemaining: `%{CLOCK} verbleibend...`,
			nextRound: `Nächste Runde in %{TEXT}...`,
			youWon: `Du hast gewonnen`,
			nameWon: `%{name} hat gewonnen`
		}
	},
	placeholder: {
		cardSetId: `Ausfüllen des Kartensets ID...`,
		cardContent: `Karteninhalt ausfüllen...`,
		cardSetName: `Name des Kartensets eingeben...`,
		nickname: `Spitzname eingeben...`,
		matchId: `Spiel ID oder URL`,
		message: `Nachricht...`,
		username: `Benutzername`,
		password: `Passwort`
	},
	language: {
		'nl-NL': `Niederländisch`,
		'en-US': `Englisch (US)`,
		'en-GB': `Englisch (UK)`,
		'fr-FR': `Französisch`,
		'de-DE': `Deutsch`,
		'it-IT': `Italienisch`,
		'pl-PL': `Polnisch`,
		'pt-BR': `Portugiesisch (BR)`,
		'es-ES': `Spanisch (EU)`,
		'es-MX': `Spanisch (MX)`,
		'sv-SE': `Schwedisch`
	},
	topHeader: {
		matchesWaiting: `<b>0</b> offene Spiele | <b>1</b> offenes Spiel | <b>{count}</b> offene Spiele`,
		playingGame: `<b>{count}</b> spielen dieses Spiel`,
		online: `<b>{count}</b> online`
	},
	content: {
		percentage: `{percentage}%`,
		percentageDisabled: `{percentage}% (Deaktiviert)`,
		scrollBackDown: `Zurück scrollen`,
		pickYourself: `Wähle selbst`,
		highPing: `Dein Ping ist hoch (%{ping}ms)`,
		round: `Runde (%{current}/%{total})`,
		skip: `Überspringen (%{current}/%{total})`,
		ready: `Bereit (%{current}/%{total})`,
		skipStep: `Dieser Schritt kann auch übersprungen werden, wenn mehr als die Hälfte der Spieler dafür stimmt.`,
		skipStepAll: `Dieser Schritt kann auch übersprungen werden, wenn alle Spieler dafür stimmen.`,
		voteReduceTime: `Die verbleibende Zeit wird automatisch verkürzt, wenn alle abgestimmt haben.`,
		filterDisclaimer: `Bitte beachte, dass dieser Filter nur für offizielle Kartensätze garantiert werden kann. Benutzerdefinierte Sets funktionieren möglicherweise nicht mit diesem Filter.`,
		resize: `<span class="warning-text">Passt die Größe der Bildschirms an das Feld an</span>`,
		winningSelection: `%{name} hat diese Runde mit der Auswahl %{selection} gewonnen`,
		noticeDescription: `Ein Hinweis wird oben auf der Seite angezeigt, bis er entfernt wird`,
		actionResponseCardCounter: `Aktions- und Antwortkartenzähler. Einige Sets verwenden die gleichen Karten; Duplikate werden automatisch entfernt. Nach <b>NSFW</b> oder <b>Spezifischen Karten</b> zu filtern verringert auch die Kartenanzahl.`
	},
	category: {
		misc: `Diverses`,
		field: `Spielfeld`,
		dump: `Ablegen`,
		bomb: `Bombe`,
		filter: `Filter`,
		times: `Mal`,
		round: `Runde`,
		flip: `Tauschen`,
		default: `Standard`,
		fallback: `Rückfallbedingungen`,
		take: `Schlagen`,
		tetris: `Tetris`,
		basic: `Basic`,
		language: `Sprache`
	},
	time: {
		hours: `0 Stunden | 1 Stunde | {count} Stunden`,
		minutes: `0 Minuten | 1 Minute | {count} Minuten`,
		seconds: `0 Sekunden | 1 Sekunde | {count} Sekunden`
	},
	count: {
		kills: `0 Kills | 1 Kill | {count} Kills`,
		deaths: `0 Tode | 1 Tod | {count} Tode`,
		lives: `0 Leben | 1 Leben | {count} Leben`,
		files: `0 Dateien | 1 Datei | {count} Dateien`,
		points: `0 Punkte | 1 Punkt | {count} Punkte`,
		pieces: `0 Spielfiguren | 1 Spielfigur | {count} Spielfiguren`,
		wins: `0 Siege | 1 Sieg | {count} Siege`,
		cards: `0 Karten | 1 Karte | {count} Karten`,
		moves: `0 Züge | 1 Zug | {count} Züge`,
		playing: `0 spielen | 1 spielt | {count} spielen`,
		players: `0 Spieler | 1 Spieler | {count} Spieler`,
		selectedCards: `Keine Karten ausgewählt | 1 Karte ausgewählt | {count} Karten ausgewählt`,
		matches: `0 Spiele | 1 Spiel | {count} Spiele`,
		matchesFound: `0 Spiele gefunden | 1 Spiel gefunden | {count} Spiele gefunden`,
		matchesWaiting: `0 Spiele warten | 1 Spiel wartet | {count} Spiele warten`,
		needMorePlayers: `Benötigt noch 0 Spieler | Benötigt noch 1 Spieler | Benötigt noch {count} Spieler`
	},
	misc: {
		kills: `Kills`,
		deaths: `Tode`,
		bot: `Bot`,
		bots: `Bots`,
		missingSet: `Fehlendes Set`,
		share: `Teilen`,
		copy: `Kopieren`,
		matchId: `Spiel ID`,
		vibration: `Vibration`,
		unavailable: `Nicht verfügbar`,
		changeLog: `Change Log`,
		status: `Status`,
		information: `Information`,
		language: `Sprache`,
		toggle: `Umschalten`,
		concedeGame: `Aufgeben`,
		processFiles: `Dateien verarbeiten`,
		sendMessage: `Nachricht senden`,
		chat: `Chat`,
		viewAllGames: `Alle Spiele ansehen`,
		refreshWindow: `Fenster aktualisieren`,
		makeHost: `Zum Gastgeber machen`,
		kickUser: `Spieler entfernen`,
		menu: `Menü`,
		admin: `Admin`,
		maintenance: `Wartung`,
		notice: `Hinweis`,
		pending: `Ausstehend`,
		connection: `Verbindung`,
		ping: `Ping`,
		timeOffset: `Zeitverschiebung`,
		version: `Version`,
		userID: `Benutzer ID`,
		unknown: `Unbekannt`,
		adminLogin: `Admin Login`,
		globalAnnouncement: `Weltweite Ankündigung`,
		broadcast: `Broadcast`,
		login: `Anmelden`,
		about: `Über`,
		public: `Öffentlich`,
		private: `Privat`,
		yes: `Ja`,
		no: `Nein`,
		disabled: `Deaktiviert`,
		enabled: `Aktiviert`,
		excluded: `Ausgeschlossen`,
		included: `Eingeschlossen`,
		nsfw: `NSFW`,
		specificCards: `Spezifische Karten`,
		view: `Ansicht`,
		new: `Neu`,
		fixed: `Fixiert`,
		changed: `Verändert`,
		confirm: `Bestätigen`,
		close: `Schließen`,
		edit: `Bearbeiten`,
		delete: `Löschen`,
		cancel: `Abbrechen`,
		reset: `Zurücksetzen`,
		guest: `Gast`,
		start: `Start`,
		playAsGuest: `Als Gast spielen`,
		download: `Herunterladen`,
		settings: `Einstellungen`,
		preset: `Voreinstellung`,
		averageLength: `Durchschnittliche Länge`,
		largestTake: `Größter Schlag`,
		takes: `Schläge`,
		pieces: `Spielfiguren`,
		words: `Wörter`,
		score: `Punktestand`,
		and: `und`,
		vs: `vs`,
		rank: `Rang`,
		points: `Punkte`,
		player: `Spieler`,
		players: `Spieler`,
		selectAll: `Alles auswählen`,
		deselectAll: `Alles deaktivieren`,
		areYouSure: `Bist du sicher?`,
		resetData: `Daten zurücksetzen`,
		customise: `Anpassen`,
		cancelCountdown: `Countdown Abbrechen`,
		inviteOthers: `Andere Einladen`,
		rematch: `Revanche`,
		activeFilters: `Aktive Filter`,
		minMax: `Min. %{min} | Max. %{max}`,
		playersMinMax: `%{min}-%{max} Spieler`,
		madeBy: `Gemacht von %{name}`,
		incrementCounter: `%{count}er Inkremente`,
		selectedOfLimit: `%{current} von maximal %{total} ausgewählt`,
		helpLocalise: `Zur Verbesserung der Lokalisierung beitragen`,
		tiredOfWaiting: `Keine Lust mehr zu warten?`,
		playAgainstBots: `Gegen Bots spielen`,
		playingAgainstBots: `Spiel gegen Bots`,
		playingAgainstPlayers: `Spiel gegen Spieler`,
		howToPlay: `Lerne das Spiel zu spielen`,
		volume: {
			title: `Lautstärke`,
			interface: `Bildschirmlautstärke`,
			effects: `Effektlautstärke`
		},
		match: {
			random: `Spiele gegen zufällige Gegner`,
			create: `Spiel erstellen`,
			rematch: `Revanche`,
			start: `Spiel starten`,
			starting: `Spiel startet`,
			leave: `Spiel verlassen`,
			join: `Spiel beitreten`,
			rejoin: `Spiel erneut beitreten`,
			full: `Volles Spiel`,
			waiting: `Warte auf den Gastgeber, bis er das Spiel beginnt`
		},
		matches: {
			browse: `Spiele durchsuchen`,
			available: `Verfügbare Spiele`,
			noneAvailable: `Keine Spiele verfügbar`
		},
		game: {
			join: `Trete Spiel %{title} bei`,
			help: `%{title} Hilfe`,
			host: `Gastgeber`,
			duration: `Spieldauer`,
			menu: `Spiel Menü`
		},
		card: {
			pick: `Karten auswählen`,
			content: `Karteninhalt`,
			editor: `Karteneditor`,
			create: `Karten erstellen`,
			none: `Keine Karten`,
			total: `Karten gesamt`,
			view: `Karten ansehen`,
			noneFound: `Keine Karten gefunden`,
			type: {
				title: `Kartentyp`,
				black: `Aktion (schwarz)`,
				white: `Antwort (weiß)`
			},
			sets: {
				create: `Kartenset erstellen`,
				import: `Kartenset importieren`,
				name: `Name des Kartensets`,
				title: `Kartensets`,
				importer: `Kartenset Importer`,
				namedTitle: `Kartenset "%{title}"`,
				custom: `Benutzerdefinierte Kartensets`,
				default: `Standard Kartensets`,
				noneFound: `Keine Sets gefunden`,
				noneSelected: `Keine Sets ausgewählt`,
				edit: `Sets bearbeiten`,
				view: `Sets ansehen`
			}
		},
		select: {
			language: `Sprache auswählen`,
			color: `Farbe auswählen`
		},
		changes: {
			latest: `Letzte Änderungen`,
			new: `Neue Änderungen`,
			save: `Änderungen Speichern`,
			previous: `Frühere Änderungen ansehen`
		},
		return: {
			menu: `Zurück zum Menü`,
			lobby: `Zurück zur Lobby`
		}
	},
	info: {
		highPing: `Der Ping ist die Zeit, die du für die Kommunikation mit dem Server benötigst. Du siehst alles später als andere Spieler und könntest Ruckler und Verzögerungen erleben.`,
		menu: `Eine Sammlung von Multiplayer-Browserspielen, für die man kein Konto erstellen muss. Spiele mühelos und passe das Spielerlebnis nach deinen Wünschen an.`,
		hasBots: `Dieses Spiel kann gegen Bots gespielt werden.`,
		file: {
			upload: `Klicke zum Durchsuchen oder ziehe deine Datei(en) hierher`,
			uploadAdditional: `Weitere Dateien durch Ziehen oder Klicken hier hinzufügen`,
			download: {
				automatic: `Öffnet einen neuen Tab und startet automatisch den .csv-Download`,
				saveAs: `Es wird ein neuer Tab geöffnet, in dem du die Datei mit einem Rechtsklick und "Speichern unter" speichern musst.`
			}
		},
		matchmaking: {
			cancel: `Matchmaking abbrechen`,
			searching: `Suche nach Gegnern... (%{time})`,
			found: `Spiel gefunden! Starte in %{time}...`
		},
		chat: {
			empty: {
				title: `Keine Nachrichten`,
				description: `Sei der erste, der eine Nachricht schreibt!`
			}
		},
		copy: {
			url: {
				success: `URL in die Zwischenablage kopiert!`,
				error: `Kopieren in die Zwischenablage nicht möglich`
			}
		},
		user: {
			inactive: `Der Benutzer ist nicht mit diesem Spiel verbunden.`
		},
		match: {
			leave: {
				player: `Es kann sein, dass du nicht wieder einsteigen kannst, wenn du dich dafür entscheidest, zu gehen.`,
				alone: `Da du die einzige Person im Spiel bist, wird das Spiel beendet, wenn du es verlässt.`,
				others: `Jemand anderes wird der neue Gastgeber, wenn du gehst.`
			},
			join: {
				waiting: `Warte auf den anderen Spieler die Revanche zu akzeptieren...`,
				starting: `Revanche startet in %{time}...`,
				private: `Du kannst einem privaten Spiel beitreten, indem du die vierstellige ID eingibst.`,
				rematch: `%{name} möchte eine Revanche`
			},
			makeHost: `Du bist dabei "%{name}" zum neuen Gastgeber zu machen.`,
			kickUser: `Du bist dabei "%{name}" aus diesem Spiel zu entfernen.`,
			finishedSettings: `Ist die Bearbeitung der Spieleinstellungen abgeschlossen?`,
			available: `Neue Spiele werden hier angezeigt`,
			rematch: `Möchtest du nochmal spielen?`,
			public: `<b>Öffentlich: </b>Jeder kann beitreten.`,
			private: `<b>Privat: </b>Nur Spieler mit der URL oder der vierstelligen ID können beitreten.`
		},
		judge: {
			pickingCard: `Bewerter %{name} wählt eine Aktionskarte aus`,
			waitForPicks: `Du bist der <b>Bewerter</b> in dieser Runde — warte, bis jeder seine Auswahl getroffen hat`
		},
		navigate: {
			self: `Selbst navigieren`,
			judge: `Sehe was der Bewerter sieht`
		},
		opponent: {
			inactive: `Dein Gegner war inaktiv`,
			multipleInactive: `Alle Gegner waren Inaktiv`
		},
		maintenance: {
			title: `In Wartung`,
			noMatch: `Du kannst gerade kein Spiel erstellen oder einem beitreten`,
			description: `Während der Wartung kann deiner neue Spiele erstellen oder beitreten`
		},
		vote: {
			noSelfVote: `Du kannst nicht für dich abstimmen`,
			selection: `Stimme für %{selection} ab`,
			selectionChange: `Stimme auf %{selection} ändern`,
			selected: `Du hast für %{selection} abgestimmt`
		},
		about: {
			description: `Bloob.io ist ein Projekt aus Leidenschaft, das aus Multiplayer-Browsergames besteht. Diese Seite wird werbefrei bleiben und alle Spiele sind vollständig nach deinen Wünschen konfigurierbar. Vorschläge sind immer willkommen, zögere nicht, dich zu melden!`,
			licensing: `Einige Spiele können für die Nutzung auf deiner Website oder Plattform lizenziert werden (mit individuellen Anpassungen). Nimm Kontakt auf, wenn du interessiert bist.`,
			developedBy: `Entwickelt von %{name}`,
			iconsSource: `Icons mit freundlicher Genehmigung von %{name} (Gratis)`,
			soundsSource: `Töne zur Verfügung gestellt von %{name} (Lizensiert)`,
			rottenApples: `Rotten Apples basierend auf %{name} (Creative Commons BY-NC-SA 2.0)`,
			localization: `Lokalisierung durch Freiwillige`,
			support: `Unterstützen`
		},
		card: {
			sets: {
				importId: {
					title: `Importieren Sie Kartensets nach ID (z. B. von Many Decks)`,
					content: `Du kannst die ID von Kartensets beliebter Anbieter unten eingeben. Nach dem Herunterladen kannst du sie einfach unten hochladen.`
				},
				loading: `Die Kartensets werden heruntergeladen...`,
				loadingError: `Die Kartensets konnten nicht heruntergeladen werden.`,
				missing: `Dieses benutzerdefinierte Kartenset wurde von einem anderen Benutzer hinzugefügt. Du kannst es zu deiner Bibliothek hinzufügen, um es in Zukunft wieder zu verwenden.`,
				csv: `Bitte beachte, dass CSV-Dateien nur begrenzt unterstützt werden und die resultierende Kartenmenge möglicherweise nicht einwandfrei ist. Für beste Ergebnisse verwende bitte die nativen .json-Dateien (wie beim Export).`,
				delete: `Das Löschen eines benutzerdefinierten Kartensets mit dem Namen "%{name}" kann nicht rückgängig gemacht werden. Lade den Satz zunächst lokal herunter, wenn du ihn später wiederherstellen möchtest.`,
				storage: `Benutzerdefinierte Kartensätze werden in deinem Browser gespeichert. Bewahre sie sicher auf, indem du eine heruntergeladene Kopie an einem anderen Ort speicherst.`,
				share: `Teile und suche hier nach benutzerdefinierten Kartensets.`,
				noneSelected: `Der Gastgeber muss Kartensets auswählen.`,
				notHost: `Deine importierten Karten sind versteckt, weil du nicht der Gastgeber bist.`,
				sizeLimit: `Jede benutzerdefinierte Karte verbraucht Speicherplatz. Aus Performanzgründen kann ein Spiel nicht mehr als <b>%{size}</b> benutzerdefinierte Kartensets gleichzeitig nutzen.`,
				processing: {
					finished: `Alle %{total} Kartensets wurden verarbeitet`,
					progress: `Verarbeite Kartenset %{current} von %{total}`,
					failed: `Kartenset "%{name}" konnte nicht verarbeitet werden`
				},
				empty: {
					host: `Deine Benutzerdefinierten Kartensets werden hier angezeigt.`,
					other: `Der Gastgeber hat keine Benutzerdefinierten Kartensets ausgewählt.`,
					editor: `Deine (importierten) benutzerdefinierten Kartensets werden hier angezeigt.`
				}
			},
			edit: {
				success: `Karte erfolgreich bearbeitet!`
			},
			create: {
				success: `Neue Karte erfolgreich hinzugefügt!`
			},
			addToLibrary: `Zur Bibliothek hinzufügen`,
			preview: `Nehem dir einen Moment um deine (neuen) Karten anzusehen`,
			dump: `Wähle Karten aus die du abwerfen möchtest`,
			underscore: `Nutze _ um ein Lehrzeichen in Reaktionskarten zu markieren`,
			noType: `Es gibt keine %{type} Karten`,
			type: {
				black: `Aktion`,
				white: `Antwort`
			},
			pickAction: `Wähle eine Aktionskarte für diese Runde`
		},
		game: {
			menu: `Möchtest du etwas anderes spielen?`
		},
		flip: {
			turns: `Züge bis zum Umdrehen | Zug bis zum Umdrehen | Züge bis zum Umdrehen`
		},
		data: {
			concedeGame: `Wenn du das Spiel aufgibst, hast du verloren.`,
			unsaved: `Du habst nicht gespeicherte Änderungen, die gelöscht werden, wenn du fortfährst.`,
			reset: `Das Zurücksetzen deiner Daten ist unwiderruflich und löscht dein Profil, deine Einstellungen und deine Statistiken.`
		}
	}
}
