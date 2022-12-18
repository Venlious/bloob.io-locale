import { GameType, GenericType, CheckersKingType, WinConditionType } from '../types/index'
import { GameMessage } from '../types/game'

export default <GameMessage>{
	[GenericType.generic]: {
		heading: `Giochi multiplayer che puoi trovare su Bloob.io`,
		title: `Giochi Multigiocatore Gratuiti Online | Non c'è bisogno di iscriversi`,
		description: `Una raccolta di giochi multiplayer basati su browser senza la necessità di creare un account. Gioca senza problemi e personalizza l'esperienza a tuo piacimento.`,
		options: {
			public: {
				title: `Privacy delle partite`
			},
			maxUsers: {
				title: `Max. Giocatori`,
				help: `Quanti giocatori sono ammessi alla partita.`
			},
			botFill: {
				title: `Riempimento Bot`,
				help: `Se attivata, i bot riempiranno tutti gli slot vuoti dei giocatori. Inoltre, se un giocatore se ne va prima del tempo, viene sostituito da un bot.`
			},
			botDifficulty: {
				title: `Difficoltà del bot`,
				data: {
					easy: `Facile`,
					normal: `Normale`,
					hard: `Difficile`
				}
			},
			generic: {
				data: {
					required: `Richiesto`,
					notRequired: `Opzionale`
				}
			},
			winCondition: {
				title: `Condizione di vittoria`,
				help: `Stabilisci quando la partita deve concludersi.`
			},
			winAmount: {
				title: `Importo vincente`
			}
		},
		help: {},
		presets: {
			custom: {
				title: `Custom`,
				description: `Modifiche apportate dall'utente - Ultimo aggiornamento %{timestamp}`
			},
			default: {
				title: `Predefinito`
			}
		}
	},
	[GameType.wordrace]: {
		name: `Wordrace`,
		heading: `Gioca a un gioco di ricerca di parole unico nel suo genere`,
		tooltip: `Trova le parole in qualsiasi direzione su un campo generato in modo casuale mentre gareggi contro altri con lo stesso obiettivo.`,
		description: `Wordrace è un gioco di ricerca di parole unico nel suo genere, gratuito e con impostazioni personalizzabili per offrire una sfida a ogni giocatore. Non richiede alcuna iscrizione. Gioca ora.`,
		title: `Un gioco di parole multiplayer unico nel suo genere | Bloob.io`,
		options: {
			globalLanguage: {
				title: `Lingua globale`,
				help: {
					enabled: `<b>Abilitato</b>: Tutti trovano le parole nella lingua che hai impostato.`,
					disabled: `<b>Disabilitato</b>: Ogni giocatore seleziona una lingua a sua scelta.`
				}
			},
			language: {
				title: `Lingua`,
				help: {
					intro: `La lingua in cui tutti devono cercare di trovare le parole.`,
					globalLanguage: `Se la <b>Lingua globale</b> è disattivata, ogni giocatore può selezionare una lingua a sua scelta.`
				}
			},
			sharedField: {
				title: `Campo condiviso`,
				help: `Tutti vedono sempre lo stesso campo. Se un campo è condiviso, significa che quando una lettera è stata rivendicata nessun altro può prenderla. In questo modo il gioco diventa più difficile nel tempo.`
			},
			multiplier: {
				title: `Moltiplicatori`,
				help: `I moltiplicatori sono collegati a lettere casuali sul campo e moltiplicano il punteggio di una parola trovata se utilizzati nella selezione.`,
				data: {
					off: `Spento`,
					uncommon: `Non comune (2,5%)`,
					common: `Comune (5%)`,
					veryCommon: `Molto comune (10%)`,
					extreme: `Estremo (25%)`
				}
			},
			roundTotal: {
				title: `Round`,
				help: `Ogni turno genererà un nuovo campo di gioco.`
			},
			roundDuration: {
				title: `Durata del round`,
				help: `Quanto dura un singolo round.`
			},
			roundIntermission: {
				title: `Tempo di intervallo`,
				help: `Quanto dura il tempo tra un round e l'altro.`
			},
			minWordLength: {
				title: `Min. Lunghezza della parola`,
				help: `Una selezione di parole deve avere almeno questa lunghezza per essere sottoposta a un controllo di validità.`
			},
			maxWordLength: {
				title: `Max. Lunghezza della parola`,
				help: `Una selezione di parole non può superare questa lunghezza per essere sottoposta a un controllo di validità.`
			},
			_wordLength: {
				title: `Lunghezza della parola`,
				help: `Una selezione di parole deve essere compresa tra questa lunghezza per essere considerata valida.`,
				data: {
					between: `Tra %{min} e %{max}`
				}
			},
			field: {
				title: `Dimensioni del campo`,
				help: {
					change: `Le dimensioni del campo da gioco. Con campi più grandi è più facile giocare con più persone.`,
					notice: `Tieni presente che i campi di grandi dimensioni aumentano le dimensioni dell'interfaccia e potrebbero non adattarsi alla finestra del browser per tutti i giocatori.`
				},
				data: {
					'10x8': `Piccolo (10x8)`,
					'13x10': `Medio (13x10)`,
					'16x14': `Grande (16x14)`,
					'20x18': `Estremo (20x18)`
				}
			},
			_gameDuration: {
				title: `Durata del gioco`
			}
		},
		presets: {
			largeGroup: {
				title: `Gruppo grande`,
				description: `Campo grande - Lingue individuali - Più giocatori`
			},
			blitz: {
				title: `Blitz`,
				description: `Molti round brevi - Tanti moltiplicatori`
			}
		},
		help: {
			find_word: {
				title: `Selezione delle parole`,
				description: [
					`Clicca e tieni premuto su una lettera nel campo di gioco e trascina in qualsiasi direzione per formare una parola.`,
					`Quando smetti di cliccare, la parola viene elaborata e ottieni punti in base alla lunghezza della parola.`
				]
			},
			gameplay: {
				title: `Gioco`,
				description: [
					`Tutti cercano di trovare le parole contemporaneamente a te, dopotutto è una gara. Le lettere reclamate non possono essere utilizzate di nuovo.`,
					`A volte è più tattico rivendicare molte parole brevi, piuttosto che dedicare tempo a quelle più lunghe.`
				]
			},
			multiplier: {
				title: `Moltiplicatori`,
				description: [
					`Se abilitato, sulle lettere casuali del campo vengono visualizzati dei moltiplicatori che moltiplicano il punteggio delle parole trovate!`,
					`I moltiplicatori si accumulano, quindi una parola con <b>x2</b> e <b>x3</b> moltiplicherebbe il punteggio della parola <b>x5</b>!`
				]
			},
			language: {
				title: `Lingua`,
				description: [
					`Il padrone di casa può decidere se giocare tutti nella stessa lingua o in una a sua scelta.`,
					`Le parole saranno valide solo per la lingua in cui stai giocando e gli accenti saranno ignorati.`
				]
			}
		}
	},
	[GameType.fourInARow]: {
		name: `Quattro di fila`,
		heading: `Connetti Quattro in fila online con gli amici`,
		tooltip: `Gioca a Quattro in fila con un massimo di sei giocatori nella modalità classica o nelle varianti disponibili.`,
		description: `Gioca a Four in a Row gratis! Classico gioco di connessione a quattro facile da imparare e divertente. Passa il tempo con gli amici in questo gioco coinvolgente.`,
		title: `Gioco multiplayer facile e gratuito | Bloob.io`,
		options: {
			field: {
				title: `Dimensioni del campo`,
				help: `Le dimensioni del campo da gioco.`,
				data: {
					'7x6': `Predefinito (7x6)`,
					'9x4': `Allungato (9x4)`,
					'9x6': `Grande (9x6)`,
					'13x8': `Molto grande (13x8)`,
					'17x10': `Extreme (17x10)`
				}
			},
			turnTime: {
				title: `Tempo di rotazione`,
				help: `Per quanto tempo ogni giocatore può decidere la sua prossima mossa.`
			},
			piecesInRow: {
				title: `Condizione di vittoria`,
				help: `Quanti pezzi devi avere in fila per vincere la partita.`,
				data: {
					'3': `Tre in fila (3)`,
					'4': `Quattro in fila (4)`,
					'5': `Cinque in fila (5)`,
					'6': `Sei in fila (6)`
				}
			},
			sideColumns: {
				title: `Colonne laterali`,
				help: `Aggiunge una colonna su entrambi i lati del campo di gioco con pezzi di colori alternati.`
			},
			flip: {
				title: `Capovolgimento di campo`,
				help: `Per dare un po' di pepe al gioco, capovolgi il campo: le tessere in basso diventeranno quelle in alto. Un contatore indicherà quanti turni rimangono prima che si verifichi il capovolgimento.`,
				data: {
					everyTurn: `Dopo ogni turno`,
					countTurns: `Dopo ogni %{count} giri`
				}
			},
			turnsUntilFlip: {
				title: `Gira a vuoto`,
				help: `Piazzare un pezzo conta come un turno. Questo definisce il numero di pezzi che devono essere lasciati cadere prima di ribaltare il campo.`
			},
			tetrisMode: {
				title: `Modalità Tetris`,
				help: `Quando è attivata, una riga completamente riempita scompare e fa cadere tutti i pezzi superiori lungo una linea. Questo rende impossibile il pareggio in una partita.`
			}
		},
		presets: {
			fiveInARow: {
				title: `Cinque in fila`,
				description: `Colonne laterali - Campo grande`
			},
			tetris: {
				title: `Tetris`,
				description: `Rimuovi automaticamente le righe intere`
			},
			flipParty: {
				title: `Flip Party`,
				description: `Capovolgi il campo ogni 12 turni - Campo molto grande`
			}
		},
		help: {
			placement: {
				title: `Posizionamento del pezzo`,
				description: [
					`I pezzi possono essere posizionati in diversi modi. Passa il mouse su una colonna e clicca, usa i comandi della tastiera o trascinala.`,
					`Puoi vedere su quale colonna si sta posizionando il tuo avversario, tienilo a mente e sfruttalo a tuo vantaggio.`
				]
			},
			win: {
				title: `Stato vincente`,
				description: [
					`Per impostazione predefinita, la prima persona che ne ottiene quattro di fila vince la partita. La fila può essere orizzontale, verticale e diagonale.`,
					`L'host può modificare la condizione di vincita predefinita e consentire di soddisfare requisiti diversi.`
				]
			}
		}
	},
	[GameType.rottenApples]: {
		name: `Rotten Apples`,
		heading: `Gioca a Cards Against Humanity in multiplayer online con gli amici`,
		tooltip: `Gioca a un clone di Cards Against Humanity e personalizza la tua esperienza a tuo piacimento.`,
		description: `Gioca a un clone di Cards Against Humanity e personalizza la tua esperienza a tuo piacimento. Crea i tuoi set di carte personalizzati e inseriscili nella tua prossima partita.`,
		title: `Cards Against Humanity multiplayer | Bloob`,
		options: {
			winCondition: {
				data: {
					first: `Il primo a ottenere <b>0</b> punti | Il primo a ottenere <b>1</b> punto | Il primo a ottenere <b>{count}</b> punti`,
					most: `Più punti dopo <b>0</b> round | Più punti dopo <b>1</b> round | Più punti dopo <b>{count}</b> round`
				}
			},
			handSize: {
				title: `Dimensione della mano`,
				help: `La quantità di biglietti di risposta che ognuno ha in mano in un determinato momento.`
			},
			judgeSystem: {
				title: `Sistema Giudiziario`,
				help: `Un giudice o tutti gli altri devono determinare chi ha giocato meglio in ogni turno.`,
				data: {
					single: `Un nuovo giudice ad ogni turno`,
					everyone: `Tutti votano`
				}
			},
			pickBlackCard: {
				title: `Scegli la carta Azione`,
				help: `Quando viene attivata, al giudice vengono mostrate tre carte azione casuali tra cui scegliere.`
			},
			handPreview: {
				title: `Anteprima della mano`,
				help: `Quando viene attivata, viene aggiunto un periodo all'inizio della partita e dopo ogni turno di scarico. Durante questo periodo tutti possono dare un'occhiata alle (nuove) carte che hanno in mano.`
			},
			dumpRound: {
				title: `Giro di scarico`,
				help: `Un turno di scaricamento permette a tutti di selezionare le carte in mano che si desidera rimuovere. Le nuove carte risposta vengono date in sostituzione al termine del turno.`,
				data: {
					disabled: `Disabili`,
					round: `Ogni <b>0</b> round | Ogni <b>1</b> round | Ogni <b>{count}</b> round`
				}
			},
			dumpRoundAmount: {
				title: `Importo del giro di scarico`
			},
			showNsfw: {
				title: `Carte NSFW`,
				help: `Carte contenenti sesso o parolaccie.`
			},
			showSpecific: {
				title: `Carte specifiche`,
				help: `Carte contenenti marchi, parole difficili o persone.`
			},
			_filter: {
				title: `Filtro`,
				help: `I filtri attivi fanno sì che le schede che soddisfano i seguenti criteri vengano escluse:`
			},
			timePicking: {
				title: `Tempo di selezione delle carte azione`,
				help: `Definisci il tempo che ognuno ha a disposizione per scegliere la carta azione da giocare.`
			},
			responseCardLimit: {
				title: `Limite della carta di risposta`,
				help: `Per impostazione predefinita, le carte azione possono richiedere di pescare fino a 3 carte risposta. Modificando questo limite, le carte azione che richiedono più di questo limite saranno filtrate dal gioco.`
			},
			timeDeciding: {
				title: `Tempo di decisione (per scheda)`,
				help: {
					intro: `Definisci il tempo che ognuno avrà a disposizione per scegliere il proprio biglietto di risposta.`,
					calc: `Il tempo totale è calcolato come <b>CARTE DI RISPOSTA * QUESTO TEMPO</b>.`
				}
			},
			timeVoting: {
				title: `Tempo di votazione (per scheda)`,
				help: {
					intro: `Definisci il tempo a disposizione per votare la carta vincente.`,
					calc: `Il tempo totale è calcolato come <b>CARTE DI RISPOSTA * GIOCATORI * QUESTO TEMPO</b>.`
				}
			},
			timeReveal: {
				title: `Tempo di rivelazione del voto (per scheda)`,
				help: {
					intro: `Definisci per quanto tempo tutti potranno vedere la selezione vincente.`,
					calc: `Il tempo totale è calcolato come <b>CARTE DI RISPOSTA * QUESTO TEMPO</b>.`
				}
			},
			timeHandPreview: {
				title: `Tempo di anteprima della mano (per carta)`,
				help: {
					intro: `Definisci per quanto tempo all'inizio di una partita o dopo un turno di scarico tutti possono guardare le loro (nuove) carte.`,
					calc: `Il tempo totale è calcolato come <b>3 SECONDI + CARTE A MANO * QUESTO TEMPO</b>.`
				}
			},
			timeDumpRound: {
				title: `Tempo di scaricamento (per scheda)`,
				help: {
					intro: `Definisci il tempo che ognuno ha a disposizione per scegliere le carte che desidera scaricare.`,
					calc: `Il tempo totale è calcolato come <b>3 SECONDI + CARTE A MANO * QUESTO TEMPO</b>.`
				}
			}
		},
		presets: {
			democracy: {
				title: `La democrazia`,
				description: `Tutti possono votare`
			}
		},
		help: {
			action: {
				title: `Carta Azione`,
				description: [
					`Ogni turno viene presentata una nuova carta azione nera con degli spazi vuoti (___) che devono essere riempiti da chi gioca.`,
					`Gli spazi vuoti vengono riempiti utilizzando le carte risposta bianche che hai in mano. Una volta che tutti i giocatori sono pronti, il giudice sceglie la sua risposta preferita.`
				]
			},
			move: {
				title: `Carte di risposta`,
				description: [
					`La mano ti mostrerà le carte di risposta. Puoi trascinarli negli spazi disponibili o cliccare per selezionarli.`,
					`Dopo ogni turno, le carte utilizzate per la selezione vengono scambiate con altre nuove.`
				]
			},
			vote: {
				title: `Votazione`,
				description: [
					`Le votazioni vengono effettuate da un singolo giudice o da tutti. Questo dipende da come l'host ha configurato il gioco.`,
					`Alla fine di ogni round, i giudici possono votare la loro risposta preferita. Il vincitore riceverà un punto.`
				]
			},
			sets: {
				title: `Set di carte`,
				description: [
					`Prima dell'inizio della partita, l'ospite può scegliere tra i tanti set disponibili o importarne di personalizzati.`,
					`I set di biglietti personalizzati possono essere importati e salvati nel tuo account, per poterli riutilizzare facilmente in seguito.`
				]
			}
		}
	},
	[GameType.checkers]: {
		name: `Dama`,
		heading: `Gioca a Dama online con gli amici`,
		tooltip: `Chiama la dama o il gioco della dama, gioca qui con fino a 4 giocatori con regole personalizzabili.`,
		description: `La dama è il classico gioco da tavolo dal ritmo incalzante che conosci e che ami, ma con un tocco di novità! Controlla e modifica le regole a tuo piacimento. Gioca subito con gli amici.`,
		title: `Classico gioco da tavolo multigiocatore | Bloob.io`,
		options: {
			forceTake: {
				title: `Forza di prendere`,
				help: {
					enabled: `<b>Abilitato</b>: Quando possibile, il giocatore sarà costretto a prendere un pezzo dell'avversario.`,
					disabled: `<b>Disabilitato</b>: il giocatore può scegliere quale mossa fare, anche se può eliminare un pezzo dell'avversario.`
				}
			},
			field: {
				title: `Campo`,
				help: `Il campo da gioco utilizzato. A seconda delle dimensioni del campo e della quantità di file, avrai più o meno pezzi di partenza. Alcuni campi possono supportare fino a quattro giocatori.`,
				data: {
					'8x8': `Inglese (8x8)`,
					'10x10': `Internazionale (10x10)`,
					'12x12': `Canadese (12x12)`,
					plus: `Forma Plus (12x12)`
				}
			},
			winCondition: {
				help: `Come verrà determinato il vincitore.`,
				data: {
					[WinConditionType.morePieces]: `La maggior parte dei pezzi`,
					[WinConditionType.oppositeSide]: `Raggiungi il lato opposto`
				}
			},
			kingCondition: {
				title: `Condizione del re`,
				help: `A quali condizioni un pezzo diventa re. Un pezzo con re può muoversi in tutte le direzioni.`,
				data: {
					[CheckersKingType.oppositeSide]: `Raggiungi il lato opposto`,
					[CheckersKingType.take]: `Prendere un pezzo`,
					[CheckersKingType.all]: `Inizia con tutti i re`,
					[CheckersKingType.none]: `Disabili`
				}
			},
			backwardsTake: {
				title: `Prendi all'indietro`,
				help: `Imposta se i pezzi possono prendere il controllo dei pezzi avversari all'indietro. Se è disattivato, questo può essere fatto solo dai pezzi con re.`
			},
			chainTake: {
				title: `Catena di presa`,
				help: `Quando è abilitato, un pezzo può conquistare diversi altri pezzi in una sola mossa, se sono distanziati correttamente. In alternativa, quando è disattivato, può essere preso un solo pezzo alla volta.`
			},
			turnTime: {
				title: `Tempo di rotazione`,
				help: `Per quanto tempo ogni giocatore può decidere la sua prossima mossa.`
			},
			staleCount: {
				title: `Gioco stantio`,
				help: `Dopo quanti turni senza alcun takeover la partita dovrebbe essere considerata stantia e conclusa.`
			},
			stuckThreshold: {
				title: `Soglia bloccata`,
				help: `Se un giocatore rimane bloccato per questo numero di turni di fila, perde automaticamente.`
			},
			autoTurnThreshold: {
				title: `Soglia tardiva`,
				help: `Se un giocatore è in ritardo e una mossa viene fatta automaticamente per questo numero di turni di fila, perde automaticamente.`
			},
			rows: {
				title: `Righe`,
				help: `Con quante file di pezzi inizia ogni giocatore. A seconda delle dimensioni del campo, la quantità di file sarà determinata.`
			}
		},
		presets: {
			default: {
				title: `Dama dritta (Standard)`,
				description: `Campo 8x8 - 24 pezzi`
			},
			international: {
				title: `Dama internazionale`,
				description: `Campo 10x10 - 40 pezzi - Porta all'indietro`
			},
			canadian: {
				title: `Dama canadese`,
				description: `Campo 12x12 - 60 pezzi - Porta indietro`
			},
			party: {
				title: `Dama Party`,
				description: `Campo Plus - 36 pezzi - 4 giocatori`
			}
		},
		help: {
			movement: {
				title: `Movimento dei pezzi`,
				description: [
					`I pezzi possono essere spostati in diagonale. Quando è il tuo turno, tutti i pezzi che puoi spostare sono evidenziati.`,
					`Puoi cliccare su un pezzo evidenziato per vedere tutte le possibili mosse disponibili per quel pezzo.`
				]
			},
			take: {
				title: `Prende`,
				description: [
					`Se un pezzo dell'avversario si trova in diagonale accanto al tuo pezzo con uno spazio libero dietro di esso, puoi prenderlo.`,
					`A seconda delle impostazioni, sei obbligato a prendere i pezzi quando è possibile o puoi anche prenderli al contrario.`
				]
			},
			king: {
				title: `Pezzi di Re`,
				description: [
					`Secondo le impostazioni predefinite, quando raggiungi il lato opposto con un pezzo, questo diventa re.`,
					`I pezzi con re possono muoversi in tutte le direzioni diagonali senza essere costretti ad avanzare.`
				]
			},
			goal: {
				title: `Obiettivo`,
				description: [
					`In genere l'obiettivo è quello di eliminare tutti gli altri pezzi dell'avversario o fino a quando non si possono fare mosse valide.`,
					`L'obiettivo del gioco, detto anche condizione di vittoria, può essere modificato nelle impostazioni.`
				]
			}
		}
	},
	[GameType.blomber]: {
		name: `Blomber`,
		heading: `Gioca a Bomberman online con gli amici`,
		tooltip: `Fai saltare in aria i tuoi avversari in un intenso campo di battaglia ravvicinato ricco di potenziamenti in questo classico gioco di Bomberman.`,
		description: `Blomber è un gioco multiplayer di Bomberman con una rigiocabilità maggiore rispetto alla maggior parte degli altri giochi. È gratuito, facile da giocare, personalizzabile e non richiede alcuna iscrizione. Gioca ora.`,
		title: `Bomberman Gioco Multiplayer | Bloob.io`,
		options: {
			field: {
				title: `Campo`,
				help: `Il campo da gioco utilizzato. I campi più grandi possono ospitare più giocatori.`,
				data: {
					'9x9': `Quadrato piccolo (9x9)`,
					'11x9': `Rettangolo (11x9)`,
					qrSquare: `Quadrato QR (11x11)`
				}
			},
			winCondition: {
				data: {
					[WinConditionType.lastStanding]: `Ultimo in piedi (<b>0</b> vite) | Ultimo in piedi (<b>1</b> vite) | Ultimo in piedi (<b>{count}</b> vite)`,
					[WinConditionType.killCount]: `Il primo a ottenere <b>0</b> uccisioni | Il primo a ottenere <b>1</b> uccisioni | Il primo a ottenere <b>{count}</b> uccisioni`,
					[WinConditionType.time]: `Maggior numero di uccisioni dopo <b>0</b> minuti. | Il maggior numero di uccisioni dopo <b>1</b> min. | Il maggior numero di uccisioni dopo <b>{count}</b> min.`
				}
			},
			defaultBombCount: {
				title: `Conteggio delle bombe`,
				help: `Si tratta della quantità di bombe che un giocatore può piazzare contemporaneamente.`
			},
			defaultBombSize: {
				title: `Dimensione della bomba`,
				help: `Questo è il raggio di esplosione di una bomba. La dimensione è misurata in tessere in ogni direzione.`
			},
			defaultSpeed: {
				title: `Velocità del giocatore`,
				help: `La velocità di camminata del giocatore.`
			},
			respawnDelay: {
				title: `Tempo di respawn`,
				help: `Il tempo che il giocatore deve aspettare dopo essere stato ucciso prima di poter giocare di nuovo.`
			},
			bombPush: {
				title: `Spingi la bomba`,
				help: `Quando è abilitata, puoi camminare verso una bomba per spingerla e farla scivolare in una direzione.`
			},
			explosionDelay: {
				title: `Ritardo dell'esplosione`,
				help: `Il ritardo prima che una bomba piazzata esploda.`
			},
			chainReaction: {
				title: `Reazione a catena`,
				help: `Se attivata, un'esplosione farà esplodere anche le bombe nel raggio d'azione. Le uccisioni andranno al giocatore che ha piazzato la bomba che ha innescato la reazione a catena. Se disattivata, queste bombe verranno invece rimosse.`
			},
			cratePercentage: {
				title: `Casse`,
				help: `La percentuale di casse che verrà mostrata sul campo di gioco. Le casse possono essere fatte esplodere e possono contenere dei potenziamenti.`
			},
			powerUpPercentage: {
				title: `Potenziamenti`,
				help: `Modificare la probabilità che un power up venga rilasciato quando una cassa viene distrutta.`
			}
		},
		help: {},
		presets: {
			default: {
				title: `Predefinito`,
				description: `Campo 9x9 - 3 vite - 4 giocatori`
			},
			party: {
				title: `Partito`,
				description: `Campo quadrato QR - 6 vite - 8 giocatori`
			},
			action: {
				title: `Azione a tutto spiano`,
				description: `Nessuna cassa - Respawn rapido - 6 vite - 8 giocatori`
			}
		}
	},
	[GameType.eightBallPool]: {
		name: `8 Ball Pool`,
		heading: `Gioca a 8 Ball Pool online con gli amici`,
		tooltip: `Gioca al famoso gioco del biliardo contro un bot o un giocatore.`,
		description: `Sfrutta il tuo colpo migliore nel biliardo multigiocatore online! Affonda tutte le palle e termina con la Palla 8 per vincere al tavolo!`,
		title: `Gioco multigiocatore gratuito per 2 giocatori`,
		options: {
			turnTime: {
				title: `Tempo di rotazione`,
				help: `Per quanto tempo ogni giocatore deve colpire la palla da biliardo.`
			},
			illegalBallPocket: {
				title: `Tasca della palla illegale`
			},
			ruleContactRailOnBreak: {
				title: `Rotaia in pausa`,
				help: `Durante l'interruzione, stabilisci quante palle devono entrare in contatto con la guida. Questa regola non si applica se si intasca una palla.`,
				data: {
					one: `Una palla`,
					two: `Due palle`,
					three: `Tre palle`,
					four: `Quattro palle`
				}
			},
			assignedGroup: {
				title: `Gruppo assegnato`,
				help: `Stabilisci come assegnare a ciascun giocatore il proprio gruppo (tinta unita o strisce).`,
				data: {
					pocket: `In tasca`,
					random: `Casuale all'avvio`
				}
			},
			ruleTurnCanHitBall: {
				title: `Può colpire la palla`,
				help: `Si verifica quando il giocatore colpisce una palla che non gli è consentita. La regola non si applica durante l'interruzione.`,
				data: {
					assignedGroup: `Gruppo assegnato`,
					assignedGroupPlus: `Gruppo assegnato + 8 Ball`,
					eitherGroup: `Uno dei due gruppi`,
					anyBall: `Qualsiasi palla`
				}
			},
			ruleTurnMustHitBall: {
				title: `Deve colpire la palla`,
				help: `Si verifica quando il giocatore non colpisce una palla (da "Può colpire la palla") durante il suo turno.`
			},
			ruleTurnContactRail: {
				title: `Deve contattare la ferrovia`,
				help: `Si verifica quando nessuna palla colpisce la barriera (cuscino). Questa regola non si applica se il giocatore intasca una palla.`
			},
			ruleConsecutiveFouls: {
				title: `Falli consecutivi`,
				help: `Stabilisci cosa deve succedere quando un giocatore commette più falli di fila. Questa regola scoraggia i comportamenti antisportivi.`,
				data: {
					off: `Spento`,
					loseOnTwo: `Perdita dopo due`,
					loseOnThree: `Perdita dopo tre`,
					loseOnFour: `Perdita dopo quattro`
				}
			},
			foul: {
				help: {
					disabled: `Il fallo è disattivato con le impostazioni attuali.`
				},
				data: {
					nothing: `Niente`,
					keepTurn: `Continua a girare`,
					endTurn: `Fine turno`,
					endTurnHand: `Fine turno + Palla in mano`,
					reset: `Fine turno + Ripristino del campo`,
					resetHand: `Fine del turno + Ripristino del campo + Palla in mano`,
					instantWin: `Vincita istantanea`,
					instantLoss: `Perdita istantanea`
				}
			},
			foulPocketCueBall: {
				title: `Palla da stecca in tasca`,
				help: `Si verifica quando un giocatore intasca la palla da biliardo.`
			},
			foulPocketOpponentBall: {
				title: `Saccheggiare la palla dell'avversario`,
				help: `Si verifica quando un giocatore prende la palla dell'avversario. Altri falli hanno la precedenza su questo (ad esempio colpire per primo la palla sbagliata).`
			},
			foulPocketOwnAndOpponentBall: {
				title: `Saccheggiare la propria palla + quella dell'avversario`,
				help: `Si verifica quando un giocatore prende sia la propria palla che quella dell'avversario. Altri falli hanno la precedenza su questo (ad esempio colpire per primo la palla sbagliata).`
			},
			foulIllegalEightBallBreak: {
				title: `Saccheggiare la palla 8 durante la pausa`,
				help: `Si verifica quando un giocatore riesce a intascare la Palla 8 durante la pausa.`
			},
			foulIllegalEightBallPocket: {
				title: `Saccheggiare la palla 8 illegalmente`,
				help: `Si verifica quando un giocatore intasca la Palla 8 e allo stesso tempo commette un altro fallo (ad esempio intasca anche la stecca).`
			},
			foulIllegalEightBallPocketTooSoon: {
				title: `Sfilare la palla 8 troppo presto`,
				help: `Si verifica quando un giocatore intasca la Palla 8 mentre ha ancora altre palle oggetto da intascare.`
			}
		},
		presets: {
			default: {
				title: `Regolamento di Bloob.io`
			},
			wpa: {
				title: `Set di regole WPA`,
				description: `Assomiglia molto alle regole dell'Associazione Mondiale del Biliardo.`
			},
			upa: {
				title: `Regolamento UPA`,
				description: `Le regole dell'Associazione Professionale dei Giocatori di Biliardo degli Stati Uniti sono molto simili a quelle del gioco.`
			},
			relaxed: {
				title: `Regole rilassate`,
				description: `Punizioni più miti e meno regole`
			}
		},
		help: {
			field: {
				title: `Campo da gioco`,
				description: [
					`Il campo contiene 6 buche in cui le palline possono essere imbucate. Ci sono in totale 16 palline, una delle quali è la stecca che si colpisce al proprio turno.`,
					`Ci sono 7x palline a strisce e 7x palline solide, oltre a 1 pallina nera da otto. All'inizio della partita tutte le palline sono posizionate in un triangolo con la palla otto al centro. La palla da biliardo è posizionata più lontano.`
				]
			},
			breaking: {
				title: `Avvio della partita (Interruzione)`,
				description: [
					`Chi ha il suo turno per primo può muoversi intorno alla palla da biliardo e colpire verso il triangolo di palle (la sua posizione di partenza).`,
					`Ci sono delle regole da rispettare. La palla da briscola non può essere imbucata e almeno due palle (tranne la palla da briscola) devono colpire un cuscino (le pareti intorno al campo). La presa di una palla al momento del break ti garantisce un altro giro subito dopo.`
				]
			},
			gameplay: {
				title: `Gioco`,
				description: [
					`Ci sono sia palline a strisce che a tinta unita. Chi intasca per primo una pallina diventa il gruppo di palline e ha diritto a un altro turno. Da quel momento in poi dovrai intascare solo palline a strisce o solide.`,
					`L'ordine in cui si intascano le palle non ha importanza. Quando commetti un fallo, il tuo avversario potrà spostare la bilia per il suo turno.`
				]
			},
			objective: {
				title: `Obiettivo`,
				description: [
					`Devi evitare di intascare la palla otto nera fino a quando non avrai intascato tutte le tue palle. A quel punto, finisci la partita intascando la palla otto. È importante che tu non commetta alcun fallo mentre lo fai, altrimenti perderai.`,
					`Se si prende la pallina otto troppo presto, la perdita sarà immediata. Assicurati di prendere la mira con attenzione!`
				]
			}
		}
	}
}
