export default {
	rateLimit: {
		secure: `Je hebt de snelheidslimiet bereikt op dit beveiligde kanaal. Wacht %{seconds} seconde(n).`,
		generic: 'We hebben te veel verzoeken van u ontvangen. Wacht %{seconds} seconde(n).'
	},
	generic: {
		title: 'Er is een fout opgetreden.',
		invalid: 'Gegeven data is ongeldig.',
		invalidAction: 'Er is een ongeldig actietype "%{type}" opgegeven.',
		maintenance: 'Je kunt deze actie niet uitvoeren terwijl er onderhoud wordt gedaan.',
		missingArguments: 'Ontbrekende argumenten voor deze actie.',
		missingAction: 'Een actietype is vereist.'
	},
	config: {
		invalidType: 'Ongeldig configuratie type "%{type}" gegeven.',
		invalidOption: 'Ongeldige config modificatie "%{option}" gegeven.',
		invalidArgument: 'Ongeldig argument. Kan "%{id}" niet instellen op "%{argument}".',
		displayOnly: 'Gegeven config type "%{type}" kan niet worden gewijzigd.',
		integer: 'Optie "%{id}" moet een geheel getal zijn.',
		max: 'Optie "%{id}" heeft een maximale waarde van "%{max}".',
		min: 'Optie "%{id}" heeft een minimale waarde van "%{min}".',
		increment: 'Optie "%{id}" vereist stappen van "%{increment}".'
	},
	game: {
		invalid: 'Speltype "%{type}" bestaat niet.',
		invalidTime: `Je kunt deze actie op dit moment niet uitvoeren.`,
		invalidVote: 'De stem die je probeerde uit te brengen is ongeldig.',
		invalidCard: 'Ongeldige kaartgegevens gegeven.',
		invalidCardSet: 'Ongeldige kaartenset gegeven.',
		invalidCardSelection: 'Ongeldige kaartselectie gegeven.',
		alreadyVoted: 'Je hebt al gestemd.',
		cardNotInHand: 'Je hebt deze kaart niet in je hand.',
		insufficientWhiteCards: 'Onvoldoende antwoord kaarten om het spel te beginnen.',
		insufficientBlackCards: 'Onvoldoende actie kaarten om het spel te beginnen.',
		invalidPlacement: 'Jouw schijf plaatsing is ongeldig.',
		cellClaimed: 'Een of meer cellen in uw selectie zijn al geclaimd.',
		colourClaimed: 'Deze kleur is al geclaimd door een andere gebruiker.',
		invalidColumnRow: 'Kolom of regel is niet ingesteld of ongeldig.',
		invalidColumn: 'Kolom is niet ingesteld of ongeldig.',
		invalidWord: 'Het gegeven woord komt niet voor in het gebruikte woordenboek.',
		wordTooShort: 'Woordselectie te kort (Min. %{min})',
		wordTooLong: 'Woordselectie te lang (Max. %{max})'
	},
	card: {
		empty: `De kaart kan niet leeg zijn.`,
		pickLimit: `Kan niet meer dan 3 antwoordkaarten kiezen. (Te veel underscores?)`,
		set: {
			sizeLimit: `De totale grootte van de custom kaartensets mag niet groter zijn dan %{limit}`,
			name: 'Naam moet tussen de 3 en 32 tekens lang zijn'
		}
	},
	preset: {
		alreadyApplied: 'Deze preset is reeds toegepast.',
		invalid: 'Je kunt "%{id}" niet als preset gebruiken.',
		inProgress: 'Je kunt de preset niet veranderen terwijl het spel bezig is.'
	},
	match: {
		reservedExcluded: 'Dit spel is gereserveerd (rematch) en je staat niet op de lijst.',
		deleted: 'Het spel waar je in zat is verwijderd.',
		invalid: 'Spel met ID "%{id}" bestaat niet.',
		private: 'Dit is een privé spel. Je moet een ID invoeren om mee te doen.',
		reserved: 'Dit is een rematch. Nog niet alle gebruikers hebben zich weer aangesloten.',
		startStop: 'Je kunt een spel dat bezig is niet starten of stoppen.',
		insufficientPlayers: 'Je hebt minstens %{min} spelers nodig om het spel te beginnen.',
		inProgress: 'Het spel is al begonnen. Je kunt niet meer meedoen.',
		full: 'Dit spel is al vol (%{current}/%{max}).'
	},
	check: {
		minExceedMaxLength: 'Min. lengte kan niet groter zijn dan de max. lengte',
		maxSubceedMinLength: 'Max. lengte kan niet kleiner zijn dan de min. lengte'
	},
	profile: {
		missingData: 'Ontbrekende nickname en/of karakter argumenten.',
		incorrectNickname: 'Nickname is onjuist geformatteerd.',
		incorrectPicture: 'Karakter is onjuist geformatteerd.',
		tooLong: 'Nickname is te lang (%{length}/%{max})',
		tooShort: 'Nickname is te kort (%{length}/%{min})',
		alphanumeric: `Nickname mag alleen alfanumerieke en bepaalde speciale tekens bevatten ?!_-+`,
		inGame: 'Je kunt je profiel niet aanpassen terwijl het spel al is begonnen.'
	},
	requirement: {
		credentials: 'Je hebt ongeldige inloggegevens opgegeven.',
		validAccount: `Je account is nog niet gevalideerd. Gelieve je profielwijzigingen op te slaan.`,
		inLobby: `Je kunt deze actie niet uitvoeren omdat het spel al is begonnen.`,
		notJudge: `Je kunt deze actie niet uitvoeren als de beslisser.`,
		judge: `Je kunt deze actie alleen uitvoeren als de beslisser.`,
		turn: `Je kunt deze actie niet uitvoeren omdat het niet jouw beurt is.`,
		duringGame: `Je kunt deze actie alleen uitvoeren als het spel is begonnen.`,
		finishedGame: `Je kunt deze actie alleen uitvoeren als het spel is afgelopen.`,
		inGame: `Je moet in een spel zijn om deze actie uit te voeren.`,
		notInGame: `Je kunt deze actie niet uitvoeren als je in al in een spel zit.`,
		matchLeader: `Je bent niet de spelleider en kunt deze actie niet uitvoeren`,
		admin: `Deze actie is voorbehouden aan Admins.`
	}
}
