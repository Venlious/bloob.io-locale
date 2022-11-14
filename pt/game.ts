import { GameType, GenericType, CheckersKingType, WinConditionType } from '../types/index'
import { GameMessage } from '../types/game'

export default <GameMessage>{
	[GenericType.generic]: {
		title: `Jogos divertidos de navegação multiplayer grátis`,
		description: `Uma coleção de jogos multiplayer baseados em navegador sem a necessidade de fazer uma conta. Jogue sem problemas e personalize a experiência ao seu gosto.`,
		options: {
			public: {
				title: `Privacidade da partida`
			},
			maxUsers: {
				title: `Máx. Jogadores`,
				help: `Quantos jogadores são permitidos na partida.`
			},
			botFill: {
				title: null,
				help: null
			},
			botDifficulty: {
				title: `Dificuldade do computador`,
				data: {
					easy: `Fácil`,
					normal: `Normal`,
					hard: `Difícil`
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
				description: `Alterações feitas por você — Última atualização %{timestamp}`
			},
			default: {
				title: `Quatro em uma Fileira`
			}
		}
	},
	[GameType.wordrace]: {
		name: null,
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
		name: `Quatro em uma Fileira`,
		tooltip: null,
		description: `Jogue Quatro em uma Fileira com até seis jogadores no modo de jogo clássico ou nas variações disponíveis.`,
		title: `Jogo Multiplayer Grátis para 2-6 Jogadores`,
		options: {
			field: {
				title: `Tamanho do campo`,
				help: `O tamanho do campo de jogo.`,
				data: {
					'7x6': `Padrão (7x6)`,
					'9x4': `Esticado (9x4)`,
					'9x6': `Grande (9x6)`,
					'13x8': `Muito grande (13x8)`,
					'17x10': `Extremo (17x10)`
				}
			},
			turnTime: {
				title: `Tempo de giro`,
				help: `Quanto tempo cada jogador pode decidir sobre sua próxima jogada.`
			},
			piecesInRow: {
				title: `Condição vencedora`,
				help: `Quantas peças você deve ter em uma fila para ganhar o jogo.`,
				data: {
					'3': `Três em uma linha (3)`,
					'4': `Quatro em uma linha (4)`,
					'5': `Cinco em uma linha (5)`,
					'6': `Seis em uma linha (6)`
				}
			},
			sideColumns: {
				title: `Colunas laterais`,
				help: `Acrescenta uma coluna em cada lado do campo de jogo com peças em cores alternadas.`
			},
			flip: {
				title: `Virada de campo`,
				help: `Apimente as coisas girando o campo, as telhas na parte inferior se tornarão as telhas na parte superior. Um contador mostrará quantas voltas restam até que ocorra uma virada.`,
				data: {
					everyTurn: `Após cada volta`,
					countTurns: `Após cada %{count} de voltas`
				}
			},
			turnsUntilFlip: {
				title: `Vezes até virar`,
				help: `A colocação de uma peça conta como uma volta. Isto define quantas peças devem ser lançadas antes de virar o campo.`
			},
			tetrisMode: {
				title: null,
				help: null
			}
		},
		presets: {
			fiveInARow: {
				title: `Cinco em uma linha`,
				description: `Colunas laterais — Campo grande`
			},
			tetris: {
				title: null,
				description: null
			},
			flipParty: {
				title: `Festa da virada`,
				description: `Campo de rotação a cada 12 voltas — Campo muito grande`
			}
		},
		help: {
			placement: {
				title: `Colocação de peças`,
				description: [
					`As peças podem ser colocadas de várias maneiras. Passe o mouse sobre uma coluna e clique, use controles de teclado, ou arraste-a ao redor.`,
					`Você pode ver qual coluna seu oponente está pairando, tenha isto em mente e use-a em seu benefício.`
				]
			},
			win: {
				title: `Estado vitorioso`,
				description: [
					`Por padrão, a primeira pessoa a conseguir quatro em uma fila ganha o jogo. Este pode ser horizontal, vertical e diagonal.`,
					`O anfitrião pode mudar a condição padrão de vitória e permitir diferentes requisitos.`
				]
			}
		}
	},
	[GameType.rottenApples]: {
		name: null,
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
		tooltip: null,
		description: `Dê o seu melhor lance na sinuca multiplayer online! Afunde todas as suas bolas e finalize com a bola 8 para ganhar na mesa!`,
		title: `Jogo Multiplayer Grátis para 2 Jogadores`,
		options: {
			turnTime: {
				title: `Hora da virada`,
				help: `Quanto tempo cada jogador tem para acertar a bola branca.`
			},
			missedTurnThreshold: {
				title: `Limites de turnos perdidos`,
				help: `Quantos turnos um jogador pode perder consecutivamente antes de ser kickado do jogo.`
			}
		},
		presets: {},
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
