import { ErrorMessage } from '../types/error'

export default <ErrorMessage>{
	rateLimit: {
		secure: `Je hebt de snelheidslimiet bereikt op dit beveiligde kanaal. Wacht %{seconds} seconde(n).`,
		generic: `Rustig aan! Wacht %{seconds} seconde(n).`
	},
	generic: {
		desync: `Sorry, het lijkt erop dat je gedesynchroniseerd bent. Probeer het opnieuw.`,
		alreadyConnected: `Je hebt deze site in een ander tabblad geopend en daarom ben je hier afgemeld.`,
		title: `Er is een fout opgetreden.`,
		invalid: `Gegeven data is ongeldig.`,
		texture: `Kan texture met ID "%{id}" niet laden.`,
		invalidAction: `Er is een ongeldig actietype "%{type}" opgegeven.`,
		maintenance: `Je kunt deze actie niet uitvoeren terwijl er onderhoud wordt gedaan.`,
		missingArguments: `Ontbrekende argumenten voor deze actie.`,
		missingAction: `Een actietype is vereist.`,
		cannotSelf: `Je kunt deze actie niet op jezelf uitvoeren.`,
		actionAgainstBot: `Je kunt deze actie niet uitvoeren op een bot.`,
		againstAgainstInactiveUser: `Je kunt deze actie niet uitvoeren op een inactieve gebruiker.`,
		invalidUser: `Gebruiker met opgegeven ID zit niet in dit spel.`,
		invalidTime: `Je kunt deze actie op dit moment niet uitvoeren.`,
		versionMismatch: `Jij gebruikt versie "%{client}" terwijl de server versie "%{server}" gebruikt. Ververs deze pagina over een paar minuten om te updaten naar de laatste versie.\n\nJe kunt nog steeds zonder problemen tegen de computer spelen, maar we raden je aan te updaten voordat je multiplayer gaat spelen.`,
		clipboard: `Kopiëren naar klembord mislukt.`
	},
	config: {
		invalidType: `Ongeldig configuratie type "%{type}" gegeven.`,
		invalidOption: `Ongeldige config modificatie "%{option}" gegeven.`,
		invalidArgument: `Ongeldig argument. Kan "%{id}" niet instellen op "%{argument}".`,
		displayOnly: `Gegeven config type "%{type}" kan niet worden gewijzigd.`,
		integer: `Optie "%{id}" moet een geheel getal zijn.`,
		max: `Optie "%{id}" heeft een maximale waarde van "%{max}".`,
		min: `Optie "%{id}" heeft een minimale waarde van "%{min}".`,
		increment: `Optie "%{id}" vereist stappen van "%{increment}".`,
		minExceedMaxLength: `Min. lengte kan niet groter zijn dan de max. lengte.`,
		maxSubceedMinLength: `Max. lengte kan niet kleiner zijn dan de min. lengte.`
	},
	start: {
		fieldRows: `Geselecteerd speelveld ondersteunt niet meer dan %{rows} rijen`,
		fieldCannotFitUsers: `Geselecteerd speelveld ondersteunt niet meer dan %{users} spelers`,
		whiteCardThreshold: `Het spel vereist minstens %{count} antwoordkaarten (wit)`,
		blackCardThreshold: `Het spel vereist minstens %{count} actiekaarten (zwart)`,
		insufficientPlayers: `Je hebt minstens %{min} spelers nodig om het spel te beginnen.`
	},
	game: {
		velocity: `De opgegeven snelheid ligt buiten het toegestane bereik.`,
		playerForfeited: `Speler "%{name}" heeft opgegeven en automatisch verloren.`,
		missedTurnWarning: `Je was te laat en de tegenstander heeft nu de beurt gekregen. Als dit te vaak gebeurt wordt je uit het spel verwijderd. (%{current}/%{threshold})`,
		missedTurnKick: `Je hebt %{current} beurt(en) gemist en bent uit het spel verwijderd.`,
		autoTurnWarning: `Je was te laat en er werd een zet voor je gedaan. Als dit te vaak achter elkaar gebeurt, verlies je. (%{current}/%{threshold})`,
		autoTurnKick: `Je hebt automatisch verloren omdat je %{current} zet(ten) achter elkaar te laat was.`,
		insufficientRows: `Het aantal geselecteerde rijen past niet in dit veld.`,
		stuckSkip: `Jouw beurt is overgeslagen omdat je geen zetten kunt doen.`,
		stuckThreshold: `Je bent geëlimineerd omdat je %{moves} zet(ten) achter elkaar vastzat.`,
		allStuck: `Niemand kan nog een zet doen. Het spel is afgelopen.`,
		invalid: `Speltype "%{type}" bestaat niet.`,
		invalidMove: `Gegeven set is niet mogelijk.`,
		invalidVote: `De stem die je probeerde uit te brengen is ongeldig.`,
		alreadyPlaced: `Je hebt al iets geplaatst.`,
		alreadyVoted: `Je hebt al gestemd.`,
		invalidPlacement: `Jouw schijf plaatsing is ongeldig.`,
		invalidBombPlacement: `Ongeldige plaatsing van een bom.`,
		cellClaimed: `Een of meer cellen in uw selectie zijn al geclaimd.`,
		colorClaimed: `Deze kleur is al geclaimd door een andere gebruiker.`,
		invalidColumnRow: `Kolom of regel is niet ingesteld of ongeldig.`,
		invalidColumn: `Kolom is niet ingesteld of ongeldig.`,
		invalidWord: `Het gegeven woord komt niet voor in het gebruikte woordenboek.`,
		wordnicknameMinLength: `Woordselectie te kort (Min. %{min})`,
		wordnicknameMaxLength: `Woordselectie te lang (Max. %{max})`
	},
	card: {
		loadingSets: `Er ging iets mis tijdens het laden van de kaartensets.`,
		invalid: `Ongeldige kaartgegevens gegeven.`,
		invalidSet: `Ongeldige kaartenset gegeven.`,
		invalidSelection: `Ongeldige kaartselectie gegeven.`,
		notInHand: `Je hebt deze kaart niet in je hand.`,
		loadError: `Er is een fout opgetreden bij het downloaden van de kaartensets.`,
		underscore: `Elke underscore resulteert in één antwoordkaart — zet ze niet naast elkaar!`,
		empty: `De kaart mag niet leeg zijn.`,
		pickLimit: `Kan niet meer dan 3 antwoordkaarten kiezen. (Te veel underscores?)`,
		setSizeLimit: `De totale grootte van de custom kaartensets mag niet groter zijn dan %{limit}`,
		setName: `Naam moet tussen de 3 en 32 tekens lang zijn`
	},
	preset: {
		alreadyApplied: `Deze preset is reeds toegepast.`,
		invalid: `Je kunt "%{id}" niet als preset gebruiken.`
	},
	match: {
		empty: `Spel gesloten. Alle andere spelers verlieten de wedstrijd.`,
		rematchTimeout: `Je hebt het rematch verzoek niet geaccepteerd en bent teruggestuurd naar het hoofdmenu.`,
		rematchCancelled: `Sorry! Er zijn niet genoeg spelers over voor een rematch.`,
		inactive: `Het spel waar je in zat is gesloten omdat deze te lang inactief is geweest.`,
		inactiveWarning: `Dit spel zal binnenkort worden gesloten wegens inactiviteit, tenzij er actie wordt ondernomen.`,
		replacedByBot: `Je bent vervangen door een bot en kan niet opnieuw deelnemen aan dit spel.`,
		kicked: `Je bent uit het spel verwijderd.`,
		deleted: `Het spel waar je in zat is verwijderd.`,
		invalid: `Spel met ID "%{id}" bestaat niet.`,
		computer: `Dit is een spel tegen de computer, je kunt niet meedoen.`,
		private: `Dit is een privé spel. Je moet een ID invoeren om mee te doen.`,
		startStop: `Je kunt een spel dat bezig is niet starten of stoppen.`,
		inProgress: `Het spel is al begonnen. Je kunt niet meer meedoen.`,
		full: `Dit spel is al vol (%{current}/%{max}).`
	},
	profile: {
		profanity: `Nickname lijkt verboden taal te bevatten.`,
		missingData: `Ontbrekende nickname en/of karakter argumenten.`,
		invalidNickname: `Nickname is onjuist geformatteerd.`,
		invalidPicture: `Karakter is onjuist geformatteerd.`,
		nicknameMaxLength: `Nickname is te lang (%{current}/%{max})`,
		nicknameMinLength: `Nickname is te kort (%{current}/%{min})`,
		nicknameAllowedCharacters: `Nickname mag alleen alfanumerieke en bepaalde speciale tekens bevatten ?!_-+`,
		inGame: `Je kunt je profiel niet aanpassen terwijl het spel al is begonnen.`
	},
	requirement: {
		credentials: `Je hebt ongeldige inloggegevens opgegeven.`,
		validAccount: `Je account is nog niet gevalideerd. Gelieve je profielwijzigingen op te slaan.`,
		inLobby: `Je kunt deze actie niet uitvoeren omdat het spel al is begonnen.`,
		notJudge: `Je kunt deze actie niet uitvoeren als de beslisser.`,
		judge: `Je kunt deze actie alleen uitvoeren als de beslisser.`,
		turn: `Je kunt deze actie niet uitvoeren omdat het niet jouw beurt is.`,
		duringGame: `Je kunt deze actie alleen uitvoeren als het spel is begonnen.`,
		finishedGame: `Je kunt deze actie alleen uitvoeren als het spel is afgelopen.`,
		inGame: `Je moet in een spel zijn om deze actie uit te voeren.`,
		notInGame: `Je kunt deze actie niet uitvoeren als je in al in een spel zit.`,
		notMatchmaking: `Je kunt deze actie niet uitvoeren als je naar een spel op zoek bent.`,
		matchHost: `Je bent niet de spelleider en kunt deze actie niet uitvoeren`,
		admin: `Deze actie is voorbehouden aan Admins.`
	}
}