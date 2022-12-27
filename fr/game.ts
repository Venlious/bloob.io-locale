import { GameType, GenericType, CheckersKingType, WinConditionType } from '../types/index'
import { GameMessage } from '../types/game'

export default <GameMessage>{
	[GenericType.generic]: {
		title: `Jeux par navigateur à multijoueurs gratuits`,
		heading: null,
		description: `Une collection de jeux par navigateur à multijoueurs sans besoin de créer un compte. Jouez sans soucis et personnalisez l'expérience à votre guise.`,
		options: {
			public: {
				title: `Parties privées`
			},
			maxUsers: {
				title: `Max. de joueurs`,
				help: `Combien de joueurs sont permis dans la partie.`
			},
			botFill: {
				title: null,
				help: null
			},
			botDifficulty: {
				title: `Difficulté de l'ordinateur`,
				data: {
					easy: `Facile`,
					normal: `Moyen`,
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
				title: `Personnalisé`,
				description: `Changements réalisés par toi — Plus récente mise à jour %{timestamp}`
			},
			default: {
				title: `Par défaut`
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
		name: `4 en ligne`,
		heading: null,
		tooltip: null,
		description: `Joue à 4 en ligne avec jusqu'à six joueurs soit en mode classique ou avec les variations disponibles.`,
		title: `Jeu multijoueur gratuit pour 2 à 6 joueurs`,
		options: {
			field: {
				title: `Les dimensions du champ`,
				help: `Les dimensions du champ de jeu.`,
				data: {
					'7x6': `Défaut (7x6)`,
					'9x4': `Allongé (9x4)`,
					'9x6': `Large (9x6)`,
					'13x8': `Très large (13x8)`,
					'17x10': `Extrême (17x10)`
				}
			},
			turnTime: {
				title: `Temps par tour`,
				help: `Le temps que détient chaque joueur pour décider de leur prochain mouvement.`
			},
			piecesInRow: {
				title: `Condition de victoire`,
				help: `Nombre de pièces que tu dois avoir dans une rangée pour gagner la partie.`,
				data: {
					'3': `3 en ligne`,
					'4': `4 en ligne`,
					'5': `5 en ligne`,
					'6': `6 en ligne`
				}
			},
			sideColumns: {
				title: `Colonnes latérales`,
				help: `Ajoute une colonne de chaque côté du champ de jeu avec des pièces de couleurs en alternance.`
			},
			flip: {
				title: `Revirer le champ`,
				help: `Pour y ajouter du piquant, faites revirer le champ. Les tuiles du bas deviendront les tuiles du haut. Un compteur montrera le nombre de tours restants avant le prochain revirement.`,
				data: {
					everyTurn: `Après chaque tour`,
					countTurns: `Après chaque %{count} tours`
				}
			},
			turnsUntilFlip: {
				title: `Tours avant le revirement`,
				help: `Placer une pièce compte comme un tour. Ceci définit combien de pièces doivent être déposées avant de revirer le champ.`
			},
			tetrisMode: {
				title: null,
				help: null
			}
		},
		presets: {
			fiveInARow: {
				title: `5 en ligne`,
				description: `Colonnes latérales — Champ large`
			},
			tetris: {
				title: null,
				description: null
			},
			flipParty: {
				title: `Fête des revirements`,
				description: `Revirer le champ à chaque 12 tours — Champ très large`
			}
		},
		help: {
			placement: {
				title: `Placement des pièces`,
				description: [
					`Les pièces peuvent être placées de plusieurs façons. Survole au-dessus d'une colonne et clique, utilise les commandes au clavier, ou glisse-les.`,
					`Tu peux voir la colonne au-dessus de laquelle ton adversaire survole. Garde ceci à l'esprit et utilise-le en ton avantage.`
				]
			},
			win: {
				title: `Condition de victoire`,
				description: [
					`Par défaut, la première personne à obtenir 4 en une ligne gagne ce jeu. La ligne peut être horizontale, verticale et diagonale.`,
					`L'hôte peut changer les conditions de victoire par défaut et autoriser des conditions différentes.`
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
		name: `Billard américain`,
		heading: null,
		tooltip: null,
		description: `Tente ta chance dans une partie multijoueur de billard en ligne! Empoche toutes les billes et finis avec la bille 8 pour gagner la partie!`,
		title: `Partie multijoueur gratuite pour 2 joueurs`,
		options: {
			turnTime: {
				title: `Temps d'un tour`,
				help: `Combien de temps chaque joueur a pour toucher la bille pointe.`
			},
			preview: {
				title: `Aperçu`,
				help: `La ligne d'aperçu montre où la boule de billard ira après avoir été frappée.`
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
				title: `Règles impitoyables`,
				description: `Toute faute entraînera une perte immédiate`
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
