import { GameType, GenericType, CheckersKingType, WinConditionType } from '../types/index'
import { GameMessage } from '../types/game'

export default <GameMessage>{
	[GenericType.generic]: {
		title: `Giochi multiplayer gratuiti e divertenti per browser`,
		heading: null,
		description: `Una raccolta di giochi multiplayer su browser senza la necessità di creare un account. Gioca senza pensieri e personalizza l'esperienza a tuo piacimento.`,
		options: {
			public: {
				title: `Privacy della partita`
			},
			maxUsers: {
				title: `Max. giocatori`,
				help: `Quanti giocatori sono ammessi nella partita.`
			},
			botFill: {
				title: null,
				help: null
			},
			botDifficulty: {
				title: `Difficoltà del computer`,
				data: {
					easy: `Facile`,
					normal: `Medio`,
					hard: `Difficile`
				}
			},
			generic: {
				data: {
					required: null,
					notRequired: null
				}
			},
			winCondition: {
				title: null,
				help: null
			},
			winAmount: {
				title: null
			}
		},
		help: {},
		presets: {
			custom: {
				title: `Personalizzato`,
				description: `Modifiche fatte da te: ultimo aggiornamento %{timestamp}`
			},
			default: {
				title: `Impostazione predefinita`
			}
		}
	},
	[GameType.wordrace]: {
		name: null,
		heading: null,
		tooltip: null,
		description: null,
		title: null,
		options: {
			globalLanguage: {
				title: null,
				help: {
					enabled: null,
					disabled: null
				}
			},
			language: {
				title: null,
				help: {
					intro: null,
					globalLanguage: null
				}
			},
			sharedField: {
				title: null,
				help: null
			},
			multiplier: {
				title: null,
				help: null,
				data: {
					off: null,
					uncommon: null,
					common: null,
					veryCommon: null,
					extreme: null
				}
			},
			roundTotal: {
				title: null,
				help: null
			},
			roundDuration: {
				title: null,
				help: null
			},
			roundIntermission: {
				title: null,
				help: null
			},
			minWordLength: {
				title: null,
				help: null
			},
			maxWordLength: {
				title: null,
				help: null
			},
			_wordLength: {
				title: null,
				help: null,
				data: {
					between: null
				}
			},
			field: {
				title: null,
				help: {
					change: null,
					notice: null
				},
				data: {
					'10x8': null,
					'13x10': null,
					'16x14': null,
					'20x18': null
				}
			},
			_gameDuration: {
				title: null
			}
		},
		presets: {
			largeGroup: {
				title: null,
				description: null
			},
			blitz: {
				title: null,
				description: null
			}
		},
		help: {
			find_word: {
				title: null,
				description: [null, null]
			},
			gameplay: {
				title: null,
				description: [null, null]
			},
			multiplier: {
				title: null,
				description: [null, null]
			},
			language: {
				title: null,
				description: [null, null]
			}
		}
	},
	[GameType.fourInARow]: {
		name: `Quattro di fila`,
		heading: null,
		tooltip: null,
		description: `Gioca a "Quattro di fila" con un massimo di sei giocatori nella modalità di gioco classica o nelle varianti disponibili.`,
		title: `Gioco multiplayer gratuito per 2-6 giocatori`,
		options: {
			field: {
				title: `Dimensione del campo`,
				help: `Dimensione del campo da gioco.`,
				data: {
					'7x6': `Default (7x6)`,
					'9x4': `Allungato (9x4)`,
					'9x6': `Grande (9x6)`,
					'13x8': `Molto grande (13x8)`,
					'17x10': `Estremo (17x10)`
				}
			},
			turnTime: {
				title: `Tempo per il turno`,
				help: `Tempo che ogni giocatore ha a disposizione per decidere la mossa successiva.`
			},
			piecesInRow: {
				title: `Condizioni di vincita`,
				help: `Numero necessario di pedine poste di fila per vincere la partita.`,
				data: {
					'3': `Tre di fila (3)`,
					'4': `Quattro di fila (4)`,
					'5': `Cinque di fila (5)`,
					'6': `Sei di fila (6)`
				}
			},
			sideColumns: {
				title: `Colonne laterali`,
				help: `Aggiunge una colonna su entrambi i lati del campo di gioco con elementi a colori alternati.`
			},
			flip: {
				title: `Capovolgimento del campo`,
				help: `Ravviva le cose capovolgendo il campo, le pedine in basso diventeranno le pedine in alto. Un contatore mostrerà quanti turni sono rimasti prima che si verifichi un capovolgimento.`,
				data: {
					everyTurn: `Dopo ogni turno`,
					countTurns: `Dopo ogni %{count} turni`
				}
			},
			turnsUntilFlip: {
				title: `Turni prima del capovolgimento`,
				help: `Posizionare una pedina conta come un turno. Questo definisce quante pedine devono essere lasciate cadere prima di capovolgere il campo.`
			},
			tetrisMode: {
				title: null,
				help: null
			}
		},
		presets: {
			fiveInARow: {
				title: `Cinque di fila`,
				description: `Colonne laterali: campo grande`
			},
			tetris: {
				title: null,
				description: null
			},
			flipParty: {
				title: `Capovolgimento delle parti`,
				description: `Capovolgi il campo ogni 12 turni: campo molto grande`
			}
		},
		help: {
			placement: {
				title: `Posizionamento della pedina`,
				description: [
					`Le pedine possono essere posizionate in diversi modi. Posiziona il mouse su una colonna e clicca, usa i controlli della tastiera oppure trascinala.`,
					`Puoi vedere su quale colonna il tuo avversario si sta posizionando: tienilo a mente e usalo a tuo vantaggio.`
				]
			},
			win: {
				title: `Condizioni di vincita`,
				description: [
					`Per impostazione predefinita, la prima persona che posiziona quattro pedine di fila vince la partita. Possono essere posizionate in modo orizzontale, verticale e diagonale.`,
					`L'host può modificare la condizione di vincita predefinita e consentire requisiti diversi.`
				]
			}
		}
	},
	[GameType.rottenApples]: {
		name: null,
		heading: null,
		tooltip: null,
		description: null,
		title: null,
		options: {
			winCondition: {
				data: {
					first: null,
					most: null
				}
			},
			handSize: {
				title: null,
				help: null
			},
			judgeSystem: {
				title: null,
				help: null,
				data: {
					single: null,
					everyone: null
				}
			},
			pickBlackCard: {
				title: null,
				help: null
			},
			handPreview: {
				title: null,
				help: null
			},
			dumpRound: {
				title: null,
				help: null,
				data: {
					disabled: null,
					round: null
				}
			},
			dumpRoundAmount: {
				title: null
			},
			showNsfw: {
				title: null,
				help: null
			},
			showSpecific: {
				title: null,
				help: null
			},
			_filter: {
				title: null,
				help: null
			},
			timePicking: {
				title: null,
				help: null
			},
			responseCardLimit: {
				title: null,
				help: null
			},
			timeDeciding: {
				title: null,
				help: {
					intro: null,
					calc: null
				}
			},
			timeVoting: {
				title: null,
				help: {
					intro: null,
					calc: null
				}
			},
			timeReveal: {
				title: null,
				help: {
					intro: null,
					calc: null
				}
			},
			timeHandPreview: {
				title: null,
				help: {
					intro: null,
					calc: null
				}
			},
			timeDumpRound: {
				title: null,
				help: {
					intro: null,
					calc: null
				}
			}
		},
		presets: {
			democracy: {
				title: null,
				description: null
			}
		},
		help: {
			action: {
				title: null,
				description: [null, null]
			},
			move: {
				title: null,
				description: [null, null]
			},
			vote: {
				title: null,
				description: [null, null]
			},
			sets: {
				title: null,
				description: [null, null]
			}
		}
	},
	[GameType.checkers]: {
		name: null,
		heading: null,
		tooltip: null,
		description: null,
		title: null,
		options: {
			forceTake: {
				title: null,
				help: {
					enabled: null,
					disabled: null
				}
			},
			field: {
				title: null,
				help: null,
				data: {
					'8x8': null,
					'10x10': null,
					'12x12': null,
					plus: null
				}
			},
			winCondition: {
				help: null,
				data: {
					[WinConditionType.morePieces]: null,
					[WinConditionType.oppositeSide]: null
				}
			},
			kingCondition: {
				title: null,
				help: null,
				data: {
					[CheckersKingType.oppositeSide]: null,
					[CheckersKingType.take]: null,
					[CheckersKingType.all]: null,
					[CheckersKingType.none]: null
				}
			},
			backwardsTake: {
				title: null,
				help: null
			},
			chainTake: {
				title: null,
				help: null
			},
			turnTime: {
				title: null,
				help: null
			},
			staleCount: {
				title: null,
				help: null
			},
			stuckThreshold: {
				title: null,
				help: null
			},
			autoTurnThreshold: {
				title: null,
				help: null
			},
			rows: {
				title: null,
				help: null
			}
		},
		presets: {
			default: {
				title: null,
				description: null
			},
			international: {
				title: null,
				description: null
			},
			canadian: {
				title: null,
				description: null
			},
			party: {
				title: null,
				description: null
			}
		},
		help: {
			movement: {
				title: null,
				description: [null, null]
			},
			take: {
				title: null,
				description: [null, null]
			},
			king: {
				title: null,
				description: [null, null]
			},
			goal: {
				title: `Goal`,
				description: [null, null]
			}
		}
	},
	[GameType.blomber]: {
		name: null,
		heading: null,
		tooltip: null,
		description: null,
		title: null,
		options: {
			field: {
				title: null,
				help: null,
				data: {
					'9x9': null,
					'11x9': null,
					qrSquare: null
				}
			},
			winCondition: {
				data: {
					[WinConditionType.lastStanding]: null,
					[WinConditionType.killCount]: null,
					[WinConditionType.time]: null
				}
			},
			defaultBombCount: {
				title: null,
				help: null
			},
			defaultBombSize: {
				title: null,
				help: null
			},
			defaultSpeed: {
				title: null,
				help: null
			},
			respawnDelay: {
				title: null,
				help: null
			},
			bombPush: {
				title: null,
				help: null
			},
			explosionDelay: {
				title: null,
				help: null
			},
			chainReaction: {
				title: null,
				help: null
			},
			cratePercentage: {
				title: null,
				help: null
			},
			powerUpPercentage: {
				title: null,
				help: null
			}
		},
		help: {},
		presets: {
			default: {
				title: null,
				description: null
			},
			party: {
				title: null,
				description: null
			},
			action: {
				title: null,
				description: null
			}
		}
	},
	[GameType.eightBallPool]: {
		name: `8 Ball Pool`,
		heading: null,
		tooltip: null,
		description: `Fai del tuo meglio nel biliardo multiplayer online! Manda in buca tutte le palle e lascia la palla 8 per ultima per vincere!`,
		title: `Gioco multiplayer gratuito per due giocatori`,
		options: {
			turnTime: {
				title: `Tempo per il turno`,
				help: `Tempo che ogni giocatore ha per colpire il pallino.`
			},
			illegalBallPocket: {
				title: null
			},
			ruleContactRailOnBreak: {
				title: null,
				help: null,
				data: {
					one: null,
					two: null,
					three: null,
					four: null
				}
			},
			assignedGroup: {
				title: null,
				help: null,
				data: {
					pocket: null,
					random: null
				}
			},
			ruleTurnCanHitBall: {
				title: null,
				help: null,
				data: {
					assignedGroup: null,
					assignedGroupPlus: null,
					eitherGroup: null,
					anyBall: null
				}
			},
			ruleTurnMustHitBall: {
				title: null,
				help: null
			},
			ruleTurnContactRail: {
				title: null,
				help: null
			},
			ruleConsecutiveFouls: {
				title: null,
				help: null,
				data: {
					off: null,
					loseOnTwo: null,
					loseOnThree: null,
					loseOnFour: null
				}
			},
			foul: {
				help: {
					disabled: null
				},
				data: {
					nothing: null,
					keepTurn: null,
					endTurn: null,
					endTurnHand: null,
					reset: null,
					resetHand: null,
					instantWin: null,
					instantLoss: null
				}
			},
			foulPocketCueBall: {
				title: null,
				help: null
			},
			foulPocketOpponentBall: {
				title: null,
				help: null
			},
			foulPocketOwnAndOpponentBall: {
				title: null,
				help: null
			},
			foulIllegalEightBallBreak: {
				title: null,
				help: null
			},
			foulIllegalEightBallPocket: {
				title: null,
				help: null
			},
			foulIllegalEightBallPocketTooSoon: {
				title: null,
				help: null
			}
		},
		presets: {
			default: {
				title: null
			},
			wpa: {
				title: null,
				description: null
			},
			upa: {
				title: null,
				description: null
			},
			relaxed: {
				title: null,
				description: null
			}
		},
		help: {
			field: {
				title: null,
				description: [null, null]
			},
			breaking: {
				title: null,
				description: [null, null]
			},
			gameplay: {
				title: null,
				description: [null, null]
			},
			objective: {
				title: null,
				description: [null, null]
			}
		}
	}
}
