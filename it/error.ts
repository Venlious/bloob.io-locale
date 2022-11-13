import { ErrorMessage } from '../types/error'

export default <ErrorMessage>{
	rateLimit: {
		secure: `Hai raggiunto il limite in questo canale sicuro. Aspetta %{seconds} secondo(i).`,
		generic: `Rallenta un attimo! Aspetta %{seconds} secondo(i).`
	},
	generic: {
		desync: `Spiacenti, sembra che tu sia stato desincronizzato. Si prega di riprovare.`,
		alreadyConnected: null,
		title: `Si è verificato un errore.`,
		invalid: `I dati forniti sono invalidi.`,
		texture: `Non è stato possibile caricare una struttura "%{id}".`,
		invalidAction: `È stato fornito un tipo di azione "%{type}" invalido.`,
		maintenance: null,
		missingArguments: `Mancano gli argomenti necessari per questa azione.`,
		missingAction: `È richiesto un tipo di azione.`,
		cannotSelf: `Non puoi eseguire questa azione su te stesso.`,
		actionAgainstBot: `Non puoi eseguire questa azione su un robot.`,
		againstAgainstInactiveUser: `Non puoi eseguire questa azione su un utente inattivo.`,
		invalidUser: `L'utente con l'ID specificato non è in questa partita.`,
		invalidTime: `Non puoi eseguire questa azione in questo momento.`,
		versionMismatch: null,
		clipboard: `Impossibile copiare negli appunti`
	},
	config: {
		invalidType: `Il tipo di configurazione fornito "%{type}" è invalido.`,
		invalidOption: `La modifica di configurazione fornita "%{option}" è invalida.`,
		invalidArgument: `Argomento invalido. Non si può stabilire "%{id}" a "%{argument}".`,
		displayOnly: `Il tipo di configurazione dato "%{type}" non può essere modificato.`,
		integer: `L'opzione "%{id}" deve essere un numero intero.`,
		max: `L'opzione "%{id}" ha un valore massimo di "%{max}".`,
		min: `L'opzione "%{id}" ha un valore minimo di "%{min}".`,
		increment: `L'opzione "%{id}" richiede degli incrementi di "%{increment}".`,
		minExceedMaxLength: `La lunghezza minima non può essere maggiore della lunghezza massima`,
		maxSubceedMinLength: `La lunghezza massima non può essere inferiore alla lunghezza minima.`
	},
	start: {
		fieldRows: `I campi selezionati non possono supportare più di %{rows} file`,
		fieldCannotFitUsers: `I campi selezionati non possono supportare più di %{users} giocatori`,
		whiteCardThreshold: null,
		blackCardThreshold: null,
		insufficientPlayers: `Sono necessari almeno %{min} giocatori per iniziare la partita.`
	},
	game: {
		velocity: `La velocità data è al di fuori dell'intervallo consentito.`,
		playerForfeited: `Il giocatore "%{name}" ha dato forfait e ha perso in automatico.`,
		missedTurnWarning: `Eri in ritardo ed il turno è passato al tuo avversario. Se ciò accade troppe volte di seguito, verrai eliminato. (%{current}/%{threshold})`,
		missedTurnKick: `Sei stato eliminato perchè hai mancato %{current} turno(i) di seguito.`,
		autoTurnWarning: `Eri in ritardo ed una mossa è stata fatta al tuo posto. Se ciò accade troppe volte di seguito, perderai. (%{current}/%{threshold})`,
		autoTurnKick: `Hai perso automaticamente perchè hai fatto in ritardo %{current} mossa(e) di seguito.`,
		insufficientRows: `Questo campo non può contenere il numero di file selezionate.`,
		stuckSkip: `Il tuo turno è stato saltato visto che non hai fatto alcuna mossa.`,
		stuckThreshold: `Sei stato eliminato visto che hai mancato %{moves} mossa(e) di fila.`,
		allStuck: `Nessuno può più fare alcuna mossa. La partita è finita.`,
		invalid: `Il tipo di gioco "%{type}" non esiste.`,
		invalidMove: `La mossa specificata è invalida.`,
		invalidVote: null,
		alreadyPlaced: `Hai già posizionato qualcosa.`,
		alreadyVoted: null,
		invalidPlacement: `Il posizionamento della tua pedina è invalido.`,
		invalidBombPlacement: null,
		cellClaimed: `Una o più celle nella tua selezione sono già state usate.`,
		colorClaimed: `Questo colore è già stato usato da un altro utente.`,
		invalidColumnRow: `La colonna o la fila non è configurata o è invalida.`,
		invalidColumn: `La colonna non è configurata o è invalida.`,
		invalidWord: `La parola data non è nel dizionario utilizzato.`,
		wordTooShort: `La selezione della parola è troppo breve (Min. %{min})`,
		wordTooLong: `La selezione della parola è troppo lunga (Max. %{max})`
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
		alreadyApplied: `Questo preset è già stato applicato.`,
		invalid: `Non puoi usare "%{id}" come preset.`
	},
	match: {
		empty: `Stanza chiusa. Tutti gli altri giocatori hanno lasciato la partita.`,
		rematchTimeout: `Non hai accettato la richiesta di rivincita e sei stato rimandato al menu principale.`,
		rematchCancelled: `Spiacenti! Non ci sono abbastanza giocatori rimasti per una rivincita.`,
		inactive: `La partita in cui ti trovavi è stata chiusa perché inattiva da troppo tempo.`,
		inactiveWarning: `La partita verrà presto chiusa per inattività, a meno che non si intervenga.`,
		replacedByBot: null,
		kicked: `Sei stato espulso dalla partita in cui ti trovavi.`,
		deleted: `La partita in cui ti trovavi è stata eliminata.`,
		invalid: `La partita con l'ID "%{id}" non esiste.`,
		computer: `Questa è una partita contro il computer, non puoi partecipare.`,
		private: `Questa è una partita privata. Devi inserire un ID per partecipare.`,
		startStop: `Non puoi cominciare o interrompere un gioco in corso.`,
		inProgress: `La partita è già in corso. Non puoi unirti.`,
		full: `La partita è già piena (%{current}/%{max}).`
	},
	profile: {
		profanity: null,
		missingData: `Nome utente e/o immagine mancanti.`,
		invalidNickname: `Il nickname è formattato in modo errato.`,
		invalidPicture: `L'immagine è formattata in modo errato.`,
		nicknameMaxLength: null,
		nicknameMinLength: null,
		nicknameAllowedCharacters: null,
		inGame: `Non puoi personalizzare il tuo profilo mentre il gioco è in corso.`
	},
	requirement: {
		credentials: `Hai fornito credenziali invalide.`,
		validAccount: `Il tuo account non è stato ancora convalidato. Si prega di salvare le modifiche del tuo profilo.`,
		inLobby: `Non puoi eseguire questa azione perché la partita è già iniziata.`,
		notJudge: null,
		judge: null,
		turn: `Non puoi eseguire questa azione perchè non è il tuo turno.`,
		duringGame: `Puoi eseguire questa azione solo mentre la partita è in corso.`,
		finishedGame: `Puoi eseguire questa azione solo dopo che il gioco è terminato.`,
		inGame: `Devi essere in un gioco per eseguire questa azione.`,
		notInGame: `Non puoi eseguire questa azione mentre sei in una partita.`,
		notMatchmaking: `Non puoi eseguire questa azione mentre stai cercando una partita.`,
		matchHost: `Non sei l'host e non puoi eseguire questa azione.`,
		admin: null
	}
}
