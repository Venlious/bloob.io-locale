import { ErrorMessage } from '../types/error'

export default <ErrorMessage>{
	rateLimit: {
		secure: `Du hast die Höchstgrenze auf diesem sicheren Kanal erreicht. Warte %{seconds} Sekunde(n).`,
		generic: `Mach mal langsamer! Warte %{seconds} Sekunde(n).`
	},
	generic: {
		desync: null,
		alreadyConnected: `Es sieht so aus, als ob die Seite in einem anderen Tab geöffnet ist und die Verbindung hier unterbrochen wurde.`,
		title: `Ein Fehler ist aufgetreten.`,
		invalid: `Die angegebenen Daten sind ungültig.`,
		texture: null,
		invalidAction: `Es wurde ein ungültiger Aktionstyp "%{type}" angegeben.`,
		maintenance: `Du kannst diese Aktion während einer Wartung nicht durchführen.`,
		missingArguments: `Fehlende Argumente für diese Aktion.`,
		missingAction: `Eine Aktionsart ist erforderlich.`,
		cannotSelf: `Du kannst diese Aktion nicht an dir selbst ausführen.`,
		actionAgainstBot: `Du kannst diese Aktion nicht an einem Bot ausführen.`,
		againstAgainstInactiveUser: `Du kannst diese Aktion nicht an einem inaktiven Benutzer ausführen.`,
		invalidUser: `Der Benutzer mit der angegebenen ID ist nicht in diesem Spiel.`,
		invalidTime: `Du kannst diese Aktion gerade nicht ausführen.`,
		versionMismatch: null,
		clipboard: `Kopieren in die Zwischenablage nicht möglich.`
	},
	config: {
		invalidType: `Ungültiger Konfigurationstyp "%{type}" angegeben.`,
		invalidOption: `Ungültige Konfigurationsänderung "%{option}" angegeben.`,
		invalidArgument: `Ungültiges Argument. Kann "%{id}" nicht auf "%{argument}" setzen.`,
		displayOnly: `Der Konfigurationstyp "%{type}" kann nicht geändert werden.`,
		integer: `Option "%{id}" muss eine ganze Zahl sein.`,
		max: `Option "%{id}" hat einen Höchstwert von "%{max}".`,
		min: `Option "%{id}" hat einen Mindestwert von "%{min}".`,
		increment: `Option "%{id}" erfordert %{increment}er Schritte.`,
		minExceedMaxLength: `Die minimale Länge kann nicht größer als die maximale Länge sein.`,
		maxSubceedMinLength: `Die maximale Länge kann nicht kleiner als die minimale Länge sein.`
	},
	start: {
		fieldRows: `Das ausgewählte Spielfeld unterstützt nicht mehr als %{rows} Reihen`,
		fieldCannotFitUsers: `Das ausgewählte Spielfeld unterstützt nicht mehr als %{users} Spieler`,
		whiteCardThreshold: `Das Spiel erfordert mindestens %{count} Antwortkarten (weiß)`,
		blackCardThreshold: `Das Spiel erfordert mindestens %{count} Aktionskarten (schwarz)`,
		insufficientPlayers: `Es werden mindestens %{min} Spieler benötigt, um das Spiel zu starten.`
	},
	game: {
		velocity: null,
		playerForfeited: `Spieler "%{name}" hat aufgegeben und automatisch verloren.`,
		missedTurnWarning: null,
		missedTurnKick: null,
		autoTurnWarning: `Du warst zu spät dran und es wurde ein Zug für dich gemacht. Wenn dies zu oft hintereinander passiert, verlierst du. (%{current}/%{threshold})`,
		autoTurnKick: `Du hast automatisch verloren, weil du %{current} Züge hintereinander zu spät warst.`,
		insufficientRows: `Die Anzahl der ausgewählten Zeilen passt nicht in dieses Feld.`,
		stuckSkip: `Du wurdest übersprungen, weil du keinen Zug machen kannst.`,
		stuckThreshold: `Du bist ausgeschieden, weil du %{moves} Mal hintereinander nicht ziehen konntest.`,
		allStuck: `Niemand kann einen Zug mehr machen. Das Spiel ist vorbei.`,
		invalid: `Spieltyp "%{type}" existiert nicht.`,
		invalidMove: `Dieser Zug ist nicht möglich.`,
		invalidVote: `Die Stimme, die du abgeben wolltest, ist ungültig.`,
		alreadyPlaced: `Du hast schon etwas platziert.`,
		alreadyVoted: `Du hast schon abgestimmt.`,
		invalidPlacement: `Ungültige Figurenplatzierung.`,
		invalidBombPlacement: `Ungültige Bombenplatzierung.`,
		cellClaimed: `Ein oder mehrere Felder deiner Auswahl sind bereits belegt.`,
		colorClaimed: `Diese Farbe ist bereits vergeben.`,
		invalidColumnRow: `Spalte oder Zeile ist nicht gesetzt oder ungültig.`,
		invalidColumn: `Spalte ist nicht gesetzt oder ungültig.`,
		invalidWord: `Das angegebene Wort kommt in dem verwendeten Wörterbuch nicht vor.`,
		wordnicknameMinLength: `Wortauswahl zu kurz (Min. %{min})`,
		wordnicknameMaxLength: `Wortauswahl zu lang (Max. %{max})`
	},
	card: {
		loadingSets: `Die Kartensets konnten nicht heruntergeladen werden.`,
		invalid: `Ungültige Kartendaten.`,
		invalidSet: `Ungültiges Kartenset.`,
		invalidSelection: `Ungültige Kartenauswahl`,
		notInHand: `Du hast diese Karte nicht auf der Hand.`,
		loadError: `Beim Herunterladen der Kartensätze ist ein Fehler aufgetreten.`,
		underscore: `Jeder Unterstrich ergibt eine Antwortkarte — nicht mehrere hintereinander schreiben!`,
		empty: `Die Karte darf nicht leer sein.`,
		pickLimit: `Du kannst nicht mehr als 3 Antwortkarten auswählen. (Zu viele Unterstriche?)`,
		setSizeLimit: `Die Gesamtgröße der benutzerdefinierten Kartensätze darf %{limit} nicht überschreiten`,
		setName: `Name muss zwischen 3 und 32 Zeichen lang sein`
	},
	preset: {
		alreadyApplied: `Diese Voreinstellung wurde bereits angewendet.`,
		invalid: `Du kannst "%{id}" nicht als Voreinstellung verwenden.`
	},
	match: {
		empty: `Spiel geschlossen. Alle anderen Spieler haben das Spiel verlassen.`,
		rematchTimeout: `Du hast die Anfrage zur Revanche nicht angenommen und bist zum Hauptmenü zurückgekehrt.`,
		rematchCancelled: `Sorry! Es sind nicht mehr genug Spieler für eine Revanche übrig.`,
		inactive: `Das Spiel, in dem du warst, wurde geschlossen, weil es zu lange inaktiv war.`,
		inactiveWarning: `Dieses Spiel wird bald wegen Inaktivität geschlossen, wenn keine Aktion ausgeführt wird.`,
		replacedByBot: `Du wurdest durch einen Bot ersetzt und kannst nicht mehr an diesem Spiel teilnehmen.`,
		kicked: `Du wurdest aus dem Spiel entfernt.`,
		deleted: `Das Spiel in dem du warst, wurde gelöscht.`,
		invalid: `Spiel mit der ID "%{id}" existiert nicht.`,
		computer: `Dies ist ein Spiel gegen den Computer, du kannst nicht teilnehmen.`,
		private: `Dies ist ein privates Spiel. Für die Teilnahme musst du eine ID angeben.`,
		startStop: `Du kannst ein laufendes Spiel nicht starten oder beenden.`,
		inProgress: `Das Spiel läuft bereits. Du kannst nicht mehr teilnehmen.`,
		full: `Das Spiel ist bereits voll (%{current}/%{max}).`
	},
	profile: {
		profanity: null,
		missingData: `Fehlende Daten für Spitzname und/oder Bild.`,
		invalidNickname: `Spitzname ungültig.`,
		invalidPicture: `Bild ungültig.`,
		nicknameMaxLength: `Spitzname zu lang (%{current}/%{max})`,
		nicknameMinLength: `Spitzname zu kurz (%{current}/%{min})`,
		nicknameAllowedCharacters: `Spitzname darf nur alphanumerische Zeichen und die Sonderzeichen ?!_-+ enthalten.`,
		inGame: `Profil kann nicht während dem Spiel geändert werden.`
	},
	requirement: {
		credentials: `Anmeldedaten ungültig.`,
		validAccount: `Dein Konto wurde noch nicht validiert. Bitte speichere deine Profiländerungen.`,
		inLobby: `Du kannst diese Aktion nicht durchführen, da das Spiel bereits begonnen hat.`,
		notJudge: `Du kannst diese Aktion als Bewerter nicht durchführen.`,
		judge: `Du kannst diese Aktion nur als Bewerter durchführen.`,
		turn: `Du kannst diese Aktion nicht durchführen, da du nicht am Zug bist.`,
		duringGame: `Du kannst diese Aktion nur während dem Spiel durchführen.`,
		finishedGame: `Du kannst diese Aktion erst nach dem Spiel durchführen.`,
		inGame: `Du musst dich in einem Spiel befinden, um diese Aktion durchführen zu können.`,
		notInGame: `Du kannst diese Aktion nicht durchführen, während du dich in einem Spiel befindest.`,
		notMatchmaking: `Du kannst diese Aktion nicht durchführen, während du dich im Matchmaking befindest.`,
		matchHost: `Du bist nicht der Gastgeber und kannst diese Aktion nicht durchführen.`,
		admin: `Diese Aktion ist auf Admins beschränkt.`
	}
}