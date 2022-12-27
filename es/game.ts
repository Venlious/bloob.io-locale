import { GameType, GenericType, CheckersKingType, WinConditionType } from '../types/index'
import { GameMessage } from '../types/game'

export default <GameMessage>{
	[GenericType.generic]: {
		heading: null,
		title: `Juegos de navegador multijugador gratuitos`,
		description: `Una colección de juegos de navegador multijugador sin necesidad de crear una cuenta. Juega sin problemas y personaliza la experiencia a tu gusto.`,
		options: {
			public: {
				title: `Privacidad del partido`
			},
			maxUsers: {
				title: `Max. Jugadores`,
				help: `Cuántos jugadores pueden participar en el partido.`
			},
			botFill: {
				title: null,
				help: null
			},
			botDifficulty: {
				title: `Dificultad de la computadora`,
				data: {
					easy: `Fácil`,
					normal: `Normal`,
					hard: `Difícil`
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
				title: `Personalizado`,
				description: `Cambios realizados por ti - Última actualización %{timestamp}`
			},
			default: {
				title: `Por defecto`
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
		name: `Cuatro Seguidos`,
		heading: null,
		tooltip: null,
		description: `Juega a Cuatro en raya con hasta seis jugadores en el modo de juego clásico o en las variaciones disponibles.`,
		title: `Juego multijugador gratuito para 2-6 jugadores`,
		options: {
			field: {
				title: `Tamaño del campo`,
				help: `El tamaño del campo de juego.`,
				data: {
					'7x6': `Por defecto (7x6)`,
					'9x4': `Estirado (9x4)`,
					'9x6': `Grande (9x6)`,
					'13x8': `Muy grande (13x8)`,
					'17x10': `Extremo (17x10)`
				}
			},
			turnTime: {
				title: `Tiempo de turno`,
				help: `El tiempo que cada jugador tiene para decidir su próximo movimiento.`
			},
			piecesInRow: {
				title: `Condición de victoria`,
				help: `Cuántas piezas debes tener seguidas para ganar la partida.`,
				data: {
					'3': `Tres seguidas (3)`,
					'4': `Cuatro seguidas (4)`,
					'5': `Cinco seguidas (5)`,
					'6': `Seis seguidas (6)`
				}
			},
			sideColumns: {
				title: `Columnas laterales`,
				help: `Añade una columna a cada lado del campo de juego con piezas de colores alternos.`
			},
			flip: {
				title: `Voltear el campo`,
				help: `Para animar las cosas, voltea el campo, las fichas de la parte inferior se convertirán en las fichas de la parte superior. Un contador mostrará cuántos turnos quedan hasta que se produzca un giro.`,
				data: {
					everyTurn: `Después de cada turno`,
					countTurns: `Después de cada %{count} turnos`
				}
			},
			turnsUntilFlip: {
				title: `Turnos para voltear`,
				help: `Colocar una pieza cuenta como un turno. Define cuántas piezas deben caer antes de voltear el campo.`
			},
			tetrisMode: {
				title: null,
				help: null
			}
		},
		presets: {
			fiveInARow: {
				title: `Cinco seguidas`,
				description: `Columnas laterales - Campo grande`
			},
			tetris: {
				title: null,
				description: null
			},
			flipParty: {
				title: `Fiesta del giro`,
				description: `Voltear el campo cada 12 turnos - Campo muy grande`
			}
		},
		help: {
			placement: {
				title: `Colocación de las piezas`,
				description: [
					`Las piezas pueden colocarse de varias maneras. Pasa el ratón por encima de una columna y haz clic, utiliza los controles del teclado o arrastra.`,
					`Puedes ver la columna sobre la que se posa tu oponente, tenlo en cuenta y utilízalo a tu favor.`
				]
			},
			win: {
				title: `Estado ganador`,
				description: [
					`Por defecto, la primera persona que consiga cuatro seguidas gana el juego. Puede ser horizontal, vertical y diagonal.`,
					`El host puede cambiar la condición de ganador por defecto y permitir diferentes requisitos.`
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
		name: `Billar de 8 bolas`,
		heading: null,
		tooltip: null,
		description: `¡Da lo mejor de ti en el billar multijugador online! ¡Mete todas las bolas y termina con la bola 8 para ganar en la mesa!`,
		title: `Juego multijugador gratuito para 2 jugadores`,
		options: {
			turnTime: {
				title: `Tiempo de turno`,
				help: `El tiempo que tiene cada jugador para golpear la bola blanca.`
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
			},
			ruthless: {
				title: `Reglas despiadadas`,
				description: `Cualquier falta resultará en una pérdida instantánea`
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
