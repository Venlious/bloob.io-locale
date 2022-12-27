import { ErrorMessage } from '../types/error'

export default <ErrorMessage>{
	rateLimit: {
		secure: `Hai raggiunto il limite in questo canale sicuro. Aspetta %{seconds} secondo(i).`,
		generic: `Rallenta un attimo! Aspetta %{seconds} secondo(i).`
	},
	generic: {
		blockedFrame: `Questo gioco non è consentito su questo sito. Puoi giocare gratuitamente sul sito elencato di seguito.`,
		unableToConnectToServer: `Impossibile connettersi al server di gioco. Puoi provare ad aggiornare questa pagina più tardi. Se il problema persiste, contattaci.`,
		desync: `Spiacenti, sembra che tu sia stato desincronizzato. Per favore riprova.`,
		alreadyConnected: `Sembra che tu abbia aperto questo sito in un'altra scheda e sei stato disconnesso qui.`,
		title: `Si è verificato un errore.`,
		invalid: `I dati forniti non sono validi.`,
		texture: `Non è stato possibile caricare una texture "%{id}".`,
		invalidAction: `È stato fornito un tipo di azione "%{type}" invalido.`,
		maintenance: `Non puoi eseguire questa azione mentre è attiva la modalità di manutenzione.`,
		missingArguments: `Mancano gli argomenti necessari per questa azione.`,
		missingAction: `È richiesto un tipo di azione.`,
		cannotSelf: `Non puoi eseguire questa azione su te stesso.`,
		actionAgainstBot: `Non puoi eseguire questa azione su un robot.`,
		againstAgainstInactiveUser: `Non puoi eseguire questa azione su un utente non attivo.`,
		invalidUser: `L'utente con l'ID specificato non è in questa partita.`,
		invalidTime: `Non puoi eseguire questa azione in questo momento.`,
		versionMismatch: `Stai utilizzando la versione "%{client}" mentre il server sta utilizzando la versione "%{server}". Aggiorna questa pagina tra qualche minuto per aggiornare alla versione più recente.\n\nPuoi continuare a giocare contro il computer senza problemi, ma ti consigliamo di aggiornare prima di giocare in multiplayer.`,
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
		whiteCardThreshold: `Il gioco richiede almeno %{count} carte risposta (bianche)`,
		blackCardThreshold: `Il gioco richiede almeno %{count} carte azione (nere)`,
		insufficientPlayers: `Sono necessari almeno %{min} giocatori per iniziare la partita.`
	},
	game: {
		velocity: `La velocità data è al di fuori dell'intervallo consentito.`,
		playerForfeited: `Il giocatore "%{name}" ha dato forfait e ha perso in automatico.`,
		missedTurnWarning: `Eri in ritardo ed il turno è passato al tuo avversario. Se ciò accade troppe volte di seguito, verrai eliminato. (%{current}/%{threshold})`,
		missedTurnKick: `Sei stato eliminato perchè hai mancato %{current} turno(i) di seguito.`,
		autoTurnWarning: `Eri in ritardo ed una mossa è stata fatta al tuo posto. Se ciò accade troppe volte di seguito, perderai. (%{current}/%{threshold})`,
		autoTurnKick: `Hai perso automaticamente perchè hai fatto %{current} mossa(e) di seguito in ritardo.`,
		insufficientRows: `Questo campo non può contenere il numero di file selezionate.`,
		stuckSkip: `Il tuo turno è stato saltato visto che non hai fatto alcuna mossa.`,
		stuckThreshold: `Sei stato eliminato visto che hai mancato %{moves} mossa(e) di fila.`,
		allStuck: `Nessuno può più fare una mossa. Questo incontro si è concluso.`,
		invalid: `Il tipo di gioco "%{type}" non esiste.`,
		invalidMove: `La mossa specificata è invalida.`,
		invalidVote: `Il voto che hai tentato di fare non è valido.`,
		alreadyPlaced: `Hai già posizionato qualcosa.`,
		alreadyVoted: `Hai già votato.`,
		invalidPlacement: `Il posizionamento della tua pedina è invalido.`,
		invalidBombPlacement: `Tentativo di posizionamento di una bomba non valida.`,
		cellClaimed: `Una o più celle nella tua selezione sono già state utilizzate.`,
		colorClaimed: `Questo colore è già stato utilizzato da un altro utente.`,
		invalidColumnRow: `La colonna o la fila non è configurata o non è valida.`,
		invalidColumn: `La colonna non è configurata o non è valida.`,
		invalidWord: `La parola data non è nel dizionario utilizzato.`,
		wordTooShort: `La parola scelta è troppo breve (Min. %{min})`,
		wordTooLong: `La parola scelta è troppo lunga (Max. %{max})`
	},
	card: {
		loadingSets: `Impossibile scaricare i set di carte.`,
		invalid: `Dati della carta non validi.`,
		invalidSet: `Set di carte non valido.`,
		invalidSelection: `Selezione della carta non valida.`,
		notInHand: `Non hai questa carta in mano.`,
		loadError: `Si è verificato un errore nel tentativo di scaricare i dati dei set di schede.`,
		underscore: `Ogni trattino basso corrisponde a un solo biglietto di risposta: non metterli uno accanto all'altro!`,
		empty: `Assicurati che la carta non sia vuota.`,
		pickLimit: `Non è possibile richiedere di scegliere più di 3 schede di risposta. (Troppi trattini bassi?)`,
		setSizeLimit: `La dimensione totale dei set di carte personalizzate non può superare il %{limit}`,
		setName: `Il nome deve avere una lunghezza compresa tra 3 e 32 caratteri`
	},
	preset: {
		alreadyApplied: `Questo preset è già stato applicato.`,
		invalid: `Non puoi usare "%{id}" come preset.`
	},
	match: {
		empty: `La partita è chiusa. Tutti gli altri giocatori hanno lasciato la partita.`,
		rematchTimeout: `Non hai accettato la richiesta di rivincita e sei stato rimandato al menu principale.`,
		rematchCancelled: `Spiacenti! Non ci sono abbastanza giocatori rimasti per una rivincita.`,
		inactive: `La partita in cui ti trovavi è stata chiusa perché inattiva da troppo tempo.`,
		inactiveWarning: `La partita verrà presto chiusa per inattività, a meno che non si intervenga.`,
		replacedByBot: `Sei stato sostituito da un bot e non puoi rientrare in questa partita.`,
		kicked: `Sei stato espulso dalla partita in cui ti trovavi.`,
		deleted: `La partita in cui ti trovavi è stata eliminata.`,
		invalid: `La partita con l'ID "%{id}" non esiste.`,
		computer: `Questa è una partita contro il computer, non puoi partecipare.`,
		private: `Questa è una partita privata. Devi inserire un ID per partecipare.`,
		startStop: `Non puoi cominciare o interrompere una partita in corso.`,
		inProgress: `La partita è già in corso. Non puoi unirti.`,
		full: `La partita è già al completo (%{current}/%{max}).`
	},
	profile: {
		profanity: `Il nickname sembra contenere una bestemmia vietata.`,
		missingData: `Nome utente e/o immagine mancanti.`,
		invalidNickname: `Il nickname è formattato in modo errato.`,
		invalidPicture: `L'immagine è formattata in modo errato.`,
		nicknameMaxLength: `Il nickname è troppo lungo (%{current}/%{max})`,
		nicknameMinLength: `Il nickname è troppo corto (%{current}/%{min})`,
		nicknameAllowedCharacters: `Il nickname può contenere solo caratteri alfanumerici e i seguenti caratteri speciali ?!_-+`,
		inGame: `Impossibile personalizzare il profilo mentre la partita è in corso`
	},
	requirement: {
		credentials: `Hai fornito credenziali non valide.`,
		validAccount: `Il tuo account non è stato ancora approvato. Salva le modifiche del tuo profilo.`,
		inLobby: `Non puoi eseguire questa azione perché la partita è già iniziata.`,
		notJudge: `Non puoi eseguire questa azione come giudice.`,
		judge: `Non puoi eseguire questa azione perché non sei il giudice.`,
		turn: `Non puoi eseguire questa azione perchè non è il tuo turno.`,
		duringGame: `Puoi eseguire questa azione solo mentre la partita è in corso.`,
		finishedGame: `Puoi eseguire questa azione solo dopo che la partita è terminata.`,
		inGame: `Devi essere in una partita per eseguire questa azione.`,
		notInGame: `Non puoi eseguire questa azione mentre sei in una partita.`,
		notMatchmaking: `Non puoi eseguire questa azione mentre stai cercando una partita.`,
		matchHost: `Non sei l'host e non puoi eseguire questa azione.`,
		admin: `Questa azione è riservata agli amministratori.`
	}
}