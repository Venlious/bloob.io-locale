import GAME_TYPE from '../../../../public/enums/game-type'
import CHECKERS_KING_TYPE from '../../../../public/enums/checkers-king-type'
import WIN_CONDITION from '../../../../public/enums/win-condition'

export default {
	generic: {
		options: {
			public: {
				name: 'Match Privacy'
			},
			maxUsers: {
				name: 'Max. Players',
				help: `How many players are allowed in the match.`
			}
		},
		presets: {
			custom: {
				name: 'Custom',
				desc: 'Settings have been customised — Basic settings are excluded'
			},
			default: {
				name: 'Default'
			}
		}
	},
	[GAME_TYPE.WORDRACE]: {
		name: 'Wordrace',
		description: `Find words in any direction on a randomly generated field while racing against others with the same objective.`,
		options: {
			globalLanguage: {
				name: 'Global Language',
				help: {
					enabled: `<b>Enabled</b>: Everyone finds words in the language you set.`,
					disabled: `<b>Disabled</b>: Each player selects a language of their choosing.`
				}
			},
			language: {
				name: 'Language',
				help: {
					intro: `The language everyone has to try to find words in.`,
					globalLanguage: `If the <b>Global Language</b> is disabled each player can select a language of their choosing.`
				}
			},
			sharedField: {
				name: 'Shared Field',
				help: `Everyone always sees the same field. If a field is shared, it means when a letter has been claimed nobody else can take it. This way the game gets more difficult over time.`
			},
			multiplier: {
				name: 'Multipliers',
				help: `Multipliers are attached to random letters on the field and multiply the score of a found word if used in the selection.`,
				data: {
					off: 'Turned Off',
					uncommon: 'Uncommon (2.5%)',
					common: 'Common (5%)',
					veryCommon: 'Very Common (2.5%)',
					extreme: 'Extreme (25%)'
				}
			},
			roundTotal: {
				name: 'Rounds',
				help: `Each round will generate a new playing field.`
			},
			roundDuration: {
				name: 'Round Duration',
				help: `How long a single round lasts.`
			},
			roundIntermission: {
				name: 'Intermission Time',
				help: `How long the time in between rounds lasts.`
			},
			minWordLength: {
				name: 'Min. Word Length',
				help: `A word selection must have at least this length in order to be checked on validity.`
			},
			maxWordLength: {
				name: 'Max. Word Length',
				help: `A word selection cannot exceed this length in order to be checked on validity.`
			},
			_wordLength: {
				name: 'Word Length',
				help: `A word selection must be between this length to be considered valid.`,
				between: 'Between %{min} and %{max}'
			},
			field: {
				name: 'Field Size',
				help: {
					change: `The size of the playing field. Bigger fields make playing with more people easier.`,
					notice: `Please note that large field sizes increase the interface size and may not fit the browser window for all players.`
				},
				data: {
					'10x8': 'Small (10x8)',
					'13x10': 'Medium (13x10)',
					'16x14': 'Large (16x14)',
					'20x18': 'Extreme (20x18)'
				}
			},
			_gameDuration: {
				name: 'Game Duration'
			}
		},
		presets: {
			largeGroup: {
				name: 'Large Group',
				desc: 'Big field — Individual languages — More players'
			},
			blitz: {
				name: 'Blitz',
				desc: 'Many short rounds — Lots of multipliers'
			}
		},
		help: {
			find_word: {
				title: 'Word Selection',
				desc: {
					'1': `Click and hold on a letter in the playing field and drag in any direction to form a word.`,
					'2': `Once you stop clicking, the word is processed, and you get points depending on the length of the word.`
				}
			},
			gameplay: {
				title: 'Gameplay',
				desc: {
					'1': `Everyone is trying to find words at the same time as you, it is a race after all. Claimed letters cannot be used again.`,
					'2': `Sometimes it is more tactical to claim many short words, rather than taking the time for longer ones.`
				}
			},
			multiplier: {
				title: 'Multipliers',
				desc: {
					'1': `When enabled, multipliers are shown on random letters on the field which multiply the score of your found words!`,
					'2': `Multipliers do stack up, so having a word with <b>x2</b> and <b>x3</b> would multiply the score for the word <b>x5</b>!`
				}
			},
			language: {
				title: 'Language',
				desc: {
					'1': `The match leader gets to decide if everyone plays in the same language or one of their choosing.`,
					'2': `Words will only be valid for the language you are playing in and any accents are ignored.`
				}
			}
		}
	},
	[GAME_TYPE.CONNECT_FOUR]: {
		name: 'Connect Four',
		description: `Play Connect Four with up to six players in either the classic gamemode or available variations.`,
		options: {
			field: {
				name: 'Field Size',
				help: 'The size of the playing field.',
				data: {
					'7x6': 'Default (7x6)',
					'9x4': 'Stretched (9x4)',
					'9x6': 'Large (9x6)',
					'13x8': 'Very Large (13x8)',
					'17x10': 'Extreme (17x10)'
				}
			},
			turnTime: {
				name: 'Turn Time',
				help: `How long each player may decide on their next move.`
			},
			piecesInRow: {
				name: 'Winning Condition',
				help: `How many pieces you must have in a row to win the game.`,
				data: {
					'4': 'Four-in-a-row (4)',
					'5': 'Five-in-a-row (5)',
					'6': 'Six-in-a-row (6)'
				}
			},
			sideColumns: {
				name: 'Side Columns',
				help: `Adds a column on either side of the playing field with pieces in alternating colours.`
			},
			flip: {
				name: 'Field Flip',
				help: `Spice things up by flipping the field, the tiles on the bottom will become the tiles on top. A counter will show how many turns are left until a flip occurs.`,
				data: {
					everyTurn: 'After every turn',
					countTurns: 'After every %{count} turns'
				}
			},
			turnsUntilFlip: {
				name: 'Turns to Flip',
				help: `Placing a piece counts as a turn. This defines how many pieces must be dropped before flipping the field.`
			}
		},
		presets: {
			fiveInARow: {
				name: 'Five-in-a-row',
				desc: 'Side columns — Large field'
			},
			flipParty: {
				name: 'Flip Party',
				desc: 'Flip field every 12 turns — Very large field'
			}
		},
		help: {
			placement: {
				title: 'Piece Placement',
				desc: {
					'1': `Pieces can be placed several ways. Hover over a column and click, use keyboard controls, or drag it around.`,
					'2': `You can see which column your opponent is hovering over, keep this in mind and use it to your advantage.`
				}
			},
			win: {
				title: 'Winning State',
				desc: {
					'1': `By default, the first person to get four on a row wins the game. This can be horizontal, vertical, and diagonal.`,
					'2': `The match leader may change the default winning condition and allow for different requirements.`
				}
			}
		}
	},
	[GAME_TYPE.ROTTEN_APPLES]: {
		name: 'Rotten Apples',
		description: `Play a Cards Against Humanity clone and customise your experience to your liking.`,
		options: {
			winCondition: {
				name: 'Winning Condition',
				help: `Determine when the game should come to a conclusion. This is linked to the "Winning Amount" setting.`,
				data: {
					first: `First to get <b>0</b> points | First to get <b>1</b> point | First to get <b>{count}</b> points`,
					most: `Most points after <b>0</b> rounds | Most points after <b>1</b> round | Most points after <b>{count}</b> rounds`
				}
			},
			winAmount: {
				name: 'Winning Amount'
			},
			handSize: {
				name: 'Hand Size',
				help: `The amount of response cards everyone holds in their hand at any given time.`
			},
			judgeSystem: {
				name: 'Judge System',
				help: `Either a judge or everyone gets to determine who had the best play each round.`,
				data: {
					single: 'New judge every round',
					everyone: 'Everyone votes'
				}
			},
			pickBlackCard: {
				name: 'Pick Action Card',
				help: `When turned on, three random action cards are shown to the judge to pick between.`
			},
			showNsfw: {
				name: 'NSFW Cards',
				help: `Cards containing sex or profanity.`
			},
			showSpecific: {
				name: 'Specific Cards',
				help: `Cards containing brands, difficult words, or people.`
			},
			timePicking: {
				name: 'Action Card Picking Time',
				help: `Define how long everyone has to pick the action card to play.`
			},
			timeDeciding: {
				name: 'Deciding Time (Per Card)',
				help: {
					intro: `Define how long everyone will have to make their response card selection.`,
					calc: `The total time is calculated as <b>RESPONSE CARDS * THIS TIME</b>`
				}
			},
			timeVoting: {
				name: 'Voting Time (Per Card)',
				help: {
					intro: `Define how long everyone will have to vote for the winning card selection.`,
					calc: `The total time is calculated as <b>RESPONSE CARDS * PLAYERS * THIS TIME</b>`
				}
			},
			timeReveal: {
				name: 'Vote Reveal Time (Per Card)',
				help: {
					intro: `Define how long everyone gets to see the winning selection.`,
					calc: `The total time is calculated as <b>RESPONSE CARDS * THIS TIME</b>`,
					skip: `The reveal can also be skipped if over half the users vote to.`
				}
			}
		},
		help: {
			action: {
				title: 'Action Card',
				desc: {
					'1': `Each round a new black action card is presented which has blanks (___) to be filled in by those playing.`,
					'2': `Blanks are filled in using the white response cards in your hand. Once all players are ready, the judge picks their favourite response.`
				}
			},
			move: {
				title: 'Response Cards',
				desc: {
					'1': `Your hand will show you your response cards. You can drag these into available slots or click to select them.`,
					'2': `After each round the cards you used in your selection are swapped for new ones.`
				}
			},
			vote: {
				title: 'Voting',
				desc: {
					'1': `Voting is either done by a single judge or by everyone. This depends on how the game leader configured the game.`,
					'2': `At the end of each round, the judge(s) get to vote for their favourite response. A point is rewarded to the winner.`
				}
			},
			sets: {
				title: 'Card Sets',
				desc: {
					'1': `Before the game starts, the game leader can choose out of many available sets or import custom ones.`,
					'2': `Custom card sets can be imported and are saved to your account, allowing you to easily use them again later.`
				}
			}
		}
	},
	[GAME_TYPE.CHECKERS]: {
		name: 'Checkers',
		description: `Call it checkers or draughts, play it here with up to 4 players with all kinds of customisable rules.`,
		options: {
			forceTake: {
				name: 'Force Take',
				help: {
					enabled: `<b>Enabled</b>: When possible, the user will be forced to take an opponent's piece.`,
					disabled: `<b>Disabled</b>: The user can choose what move they make, even if they can take out an opponent's piece.`
				}
			},
			field: {
				name: 'Field',
				help: `The playing field used. Depending on the size of the field and the amount of rows, you will get more or less starting pieces. Some fields may support up to four players.`,
				data: {
					'8x8': 'English (8x8)',
					'10x10': 'International (10x10)',
					'12x12': 'Canadian (12x12)',
					plus: 'Plus Shape (12x12)'
				}
			},
			winCondition: {
				name: 'Win Condition',
				help: `How the winner will be determined.`,
				data: {
					[WIN_CONDITION.MORE_PIECES]: 'Most pieces',
					[WIN_CONDITION.OPPOSITE_SIDE]: 'Reach opposite side'
				}
			},
			kingCondition: {
				name: 'King Condition',
				help: `Under what condition a piece becomes kinged. A kinged piece is allowed to move in all directions.`,
				data: {
					[CHECKERS_KING_TYPE.OPPOSITE_SIDE]: 'Reach opposite side',
					[CHECKERS_KING_TYPE.TAKE]: 'Taking a piece',
					[CHECKERS_KING_TYPE.ALL]: 'Start with all kings',
					[CHECKERS_KING_TYPE.NONE]: 'Disabled'
				}
			},
			backwardsTake: {
				name: 'Take Backwards',
				help: `Set whether pieces are allowed to take over opponent pieces backwards. If disabled, this can only be done by kinged pieces.`
			},
			chainTake: {
				name: 'Chain Take',
				help: `When enabled a piece can take over several other pieces in one move, if they are spaced properly. Alternatively when disabled only one piece can be taken at a time.`
			},
			turnTime: {
				name: 'Turn Time',
				help: `How long each player may decide on their next move.`
			},
			staleCount: {
				name: 'Stale Game',
				help: `After how many moves without any take overs the game should be considered stale and ended.`
			},
			stuckThreshold: {
				name: 'Stuck Threshold',
				help: `If a player is stuck for this amount of moves in a row they will lose automatically.`
			},
			rows: {
				name: 'Rows',
				help: `How many rows of pieces each player starts with. Depending on the field size the amount of rows will be determined.`
			}
		},
		presets: {
			default: {
				name: 'Straight Checkers (Standard)',
				desc: '8x8 field — 24 pieces'
			},
			international: {
				name: 'International Checkers',
				desc: '10x10 field — 40 pieces — Take backwards'
			},
			canadian: {
				name: 'Canadian Checkers',
				desc: '12x12 field — 60 pieces — Take backwards'
			},
			party: {
				name: 'Party Checkers',
				desc: 'Plus field — 36 pieces — 4 players'
			}
		},
		help: {}
	}
}
