import { GameType, GenericType, CheckersKingType, WinConditionType } from '../types/index'
import { GameMessage } from '../types/game'

export default <GameMessage>{
	[GenericType.generic]: {
		heading: `Multiplayer Games You Can Find on Bloob.io`,
		title: `Free Multiplayer Games Online | No Sign-Up Needed`,
		description: `A collection of multiplayer browser-based games without the need to make an account. Play hassle free and customise the experience to your liking.`,
		options: {
			public: {
				title: `Match Privacy`
			},
			maxUsers: {
				title: `Max. Players`,
				help: `How many players are allowed in the match.`
			},
			botFill: {
				title: `Bot Fill`,
				help: `When enabled, bots will fill up any empty player slots. It will also result in a player being replaced by a bot if they leave early.`
			},
			botDifficulty: {
				title: `Bot Difficulty`,
				data: {
					easy: `Easy`,
					normal: `Normal`,
					hard: `Hard`
				}
			},
			generic: {
				data: {
					required: `Required`,
					notRequired: `Optional`
				}
			},
			winCondition: {
				title: `Winning Condition`,
				help: `Determine when the game should come to a conclusion.`
			},
			winAmount: {
				title: `Winning Amount`
			}
		},
		help: {},
		presets: {
			custom: {
				title: `Custom`,
				description: `Changes made by you — Last updated %{timestamp}`
			},
			default: {
				title: `Default`
			}
		}
	},
	[GameType.wordrace]: {
		name: `Wordrace`,
		heading: `Play a Unique Word Finding Game`,
		tooltip: `Find words in any direction on a randomly generated field while racing against others with the same objective.`,
		description: `Wordrace is a free to play unique word finding game with customisable settings to give every player a challenge. It doesn't require any sign-up. Play now.`,
		title: `Unique Multiplayer Word Game | Bloob.io`,
		options: {
			globalLanguage: {
				title: `Global Language`,
				help: {
					enabled: `<b>Enabled</b>: Everyone finds words in the language you set.`,
					disabled: `<b>Disabled</b>: Each player selects a language of their choosing.`
				}
			},
			language: {
				title: `Language`,
				help: {
					intro: `The language everyone has to try to find words in.`,
					globalLanguage: `If the <b>Global Language</b> is disabled each player can select a language of their choosing.`
				}
			},
			sharedField: {
				title: `Shared Field`,
				help: `Everyone always sees the same field. If a field is shared, it means when a letter has been claimed nobody else can take it. This way the game gets more difficult over time.`
			},
			multiplier: {
				title: `Multipliers`,
				help: `Multipliers are attached to random letters on the field and multiply the score of a found word if used in the selection.`,
				data: {
					off: `Turned Off`,
					uncommon: `Uncommon (2.5%)`,
					common: `Common (5%)`,
					veryCommon: `Very Common (10%)`,
					extreme: `Extreme (25%)`
				}
			},
			roundTotal: {
				title: `Rounds`,
				help: `Each round will generate a new playing field.`
			},
			roundDuration: {
				title: `Round Duration`,
				help: `How long a single round lasts.`
			},
			roundIntermission: {
				title: `Intermission Time`,
				help: `How long the time in between rounds lasts.`
			},
			minWordLength: {
				title: `Min. Word Length`,
				help: `A word selection must have at least this length in order to be checked on validity.`
			},
			maxWordLength: {
				title: `Max. Word Length`,
				help: `A word selection cannot exceed this length in order to be checked on validity.`
			},
			_wordLength: {
				title: `Word Length`,
				help: `A word selection must be between this length to be considered valid.`,
				data: {
					between: `Between %{min} and %{max}`
				}
			},
			field: {
				title: `Field Size`,
				help: {
					change: `The size of the playing field. Bigger fields make playing with more people easier.`,
					notice: `Please note that large field sizes increase the interface size and may not fit the browser window for all players.`
				},
				data: {
					'10x8': `Small (10x8)`,
					'13x10': `Medium (13x10)`,
					'16x14': `Large (16x14)`,
					'20x18': `Extreme (20x18)`
				}
			},
			_gameDuration: {
				title: `Game Duration`
			}
		},
		presets: {
			largeGroup: {
				title: `Large Group`,
				description: `Big field — Individual languages — More players`
			},
			blitz: {
				title: `Blitz`,
				description: `Many short rounds — Lots of multipliers`
			}
		},
		help: {
			find_word: {
				title: `Word Selection`,
				description: [
					`Click and hold on a letter in the playing field and drag in any direction to form a word.`,
					`Once you stop clicking, the word is processed, and you get points depending on the length of the word.`
				]
			},
			gameplay: {
				title: `Gameplay`,
				description: [
					`Everyone is trying to find words at the same time as you, it is a race after all. Claimed letters cannot be used again.`,
					`Sometimes it is more tactical to claim many short words, rather than taking the time for longer ones.`
				]
			},
			multiplier: {
				title: `Multipliers`,
				description: [
					`When enabled, multipliers are shown on random letters on the field which multiply the score of your found words!`,
					`Multipliers do stack up, so having a word with <b>x2</b> and <b>x3</b> would multiply the score for the word <b>x5</b>!`
				]
			},
			language: {
				title: `Language`,
				description: [
					`The host gets to decide if everyone plays in the same language or one of their choosing.`,
					`Words will only be valid for the language you are playing in and any accents are ignored.`
				]
			}
		}
	},
	[GameType.fourInARow]: {
		name: `Four in a Row`,
		heading: `Connect Four in a Row Online With Friends`,
		tooltip: `Play Four in a Row with up to six players in either the classic gamemode or available variations.`,
		description: `Four in a Row is a casual free to play game. Play this classic connect four game with up to 6 friends at once in this fun, addictive, and easy-to-learn game.`,
		title: `Easy Free Multiplayer Game | Bloob.io`,
		options: {
			field: {
				title: `Field Size`,
				help: `The size of the playing field.`,
				data: {
					'7x6': `Default (7x6)`,
					'9x4': `Stretched (9x4)`,
					'9x6': `Large (9x6)`,
					'13x8': `Very Large (13x8)`,
					'17x10': `Extreme (17x10)`
				}
			},
			turnTime: {
				title: `Turn Time`,
				help: `How long each player may decide on their next move.`
			},
			piecesInRow: {
				title: `Winning Condition`,
				help: `How many pieces you must have in a row to win the game.`,
				data: {
					'3': `Three-in-a-row (3)`,
					'4': `Four-in-a-row (4)`,
					'5': `Five-in-a-row (5)`,
					'6': `Six-in-a-row (6)`
				}
			},
			sideColumns: {
				title: `Side Columns`,
				help: `Adds a column on either side of the playing field with pieces in alternating colours.`
			},
			flip: {
				title: `Field Flip`,
				help: `Spice things up by flipping the field, the tiles on the bottom will become the tiles on top. A counter will show how many turns are left until a flip occurs.`,
				data: {
					everyTurn: `After every turn`,
					countTurns: `After every %{count} turns`
				}
			},
			turnsUntilFlip: {
				title: `Turns to Flip`,
				help: `Placing a piece counts as a turn. This defines how many pieces must be dropped before flipping the field.`
			},
			tetrisMode: {
				title: `Tetris Mode`,
				help: `When enabled, a fully filled row will disappear and drop all pieces above down a line. This also makes it impossible to tie in a game.`
			}
		},
		presets: {
			fiveInARow: {
				title: `Five-in-a-row`,
				description: `Side columns — Large field`
			},
			tetris: {
				title: `Tetris`,
				description: `Remove full rows automatically`
			},
			flipParty: {
				title: `Flip Party`,
				description: `Flip field every 12 turns — Very large field`
			}
		},
		help: {
			placement: {
				title: `Piece Placement`,
				description: [
					`Pieces can be placed several ways. Hover over a column and click, use keyboard controls, or drag it around.`,
					`You can see which column your opponent is hovering over, keep this in mind and use it to your advantage.`
				]
			},
			win: {
				title: `Winning State`,
				description: [
					`By default, the first person to get four on a row wins the game. This can be horizontal, vertical, and diagonal.`,
					`The host may change the default winning condition and allow for different requirements.`
				]
			}
		}
	},
	[GameType.rottenApples]: {
		name: `Rotten Apples`,
		heading: `Play an Online Multiplayer Cards Against Humanity With Friends`,
		tooltip: `Play a Cards Against Humanity clone and customise your experience to your liking.`,
		description: `Play a Cards Against Humanity clone and customise your experience to your liking. Create your own custom card sets and include them in your next match.`,
		title: `Multiplayer Cards Against Humanity | Bloob`,
		options: {
			winCondition: {
				data: {
					first: `First to get <b>0</b> points | First to get <b>1</b> point | First to get <b>{count}</b> points`,
					most: `Most points after <b>0</b> rounds | Most points after <b>1</b> round | Most points after <b>{count}</b> rounds`
				}
			},
			handSize: {
				title: `Hand Size`,
				help: `The amount of response cards everyone holds in their hand at any given time.`
			},
			judgeSystem: {
				title: `Judge System`,
				help: `Either a judge or everyone gets to determine who had the best play each round.`,
				data: {
					single: `New judge every round`,
					everyone: `Everyone votes`
				}
			},
			pickBlackCard: {
				title: `Pick Action Card`,
				help: `When turned on, three random action cards are shown to the judge to pick between.`
			},
			handPreview: {
				title: `Hand Preview`,
				help: `When turned on, a period is added at the start of the game and after every dump round. During this time everyone can take a look at their (new) cards in their hand.`
			},
			dumpRound: {
				title: `Dump Round`,
				help: `A dump round allows everyone to select cards in their hand they would like to remove. New response cards are given as replacement after the round ends.`,
				data: {
					disabled: `Disabled`,
					round: `Every <b>0</b> rounds | Every <b>1</b> round | Every <b>{count}</b> rounds`
				}
			},
			dumpRoundAmount: {
				title: `Dump Round Amount`
			},
			showNsfw: {
				title: `NSFW Cards`,
				help: `Cards containing sex or profanity.`
			},
			showSpecific: {
				title: `Specific Cards`,
				help: `Cards containing brands, difficult words, or people.`
			},
			_filter: {
				title: `Filter`,
				help: `Active filters result in cards that fit the following criteria to be left out:`
			},
			timePicking: {
				title: `Action Card Picking Time`,
				help: `Define how long everyone has to pick the action card to play.`
			},
			responseCardLimit: {
				title: `Response Card Limit`,
				help: `By default action cards can request you to draw up to 3 response cards. By changing this limit action cards requesting more than this limit will be filtered out of the game.`
			},
			timeDeciding: {
				title: `Deciding Time (Per Card)`,
				help: {
					intro: `Define how long everyone will have to make their response card selection.`,
					calc: `The total time is calculated as <b>RESPONSE CARDS * THIS TIME</b>`
				}
			},
			timeVoting: {
				title: `Voting Time (Per Card)`,
				help: {
					intro: `Define how long everyone will have to vote for the winning card selection.`,
					calc: `The total time is calculated as <b>RESPONSE CARDS * PLAYERS * THIS TIME</b>`
				}
			},
			timeReveal: {
				title: `Vote Reveal Time (Per Card)`,
				help: {
					intro: `Define how long everyone gets to see the winning selection.`,
					calc: `The total time is calculated as <b>RESPONSE CARDS * THIS TIME</b>`
				}
			},
			timeHandPreview: {
				title: `Hand Preview Time (Per Card)`,
				help: {
					intro: `Define how long at the start of a game or after a dump round everyone gets to look at their (new) cards.`,
					calc: `The total time is calculated as <b>3 SECONDS + HAND CARDS * THIS TIME</b>`
				}
			},
			timeDumpRound: {
				title: `Dump Round Time (Per Card)`,
				help: {
					intro: `Define how long everyone has to select which cards they'd like to dump.`,
					calc: `The total time is calculated as <b>3 SECONDS + HAND CARDS * THIS TIME</b>`
				}
			}
		},
		presets: {
			democracy: {
				title: `Democracy`,
				description: `Everyone gets to vote`
			}
		},
		help: {
			action: {
				title: `Action Card`,
				description: [
					`Each round a new black action card is presented which has blanks (___) to be filled in by those playing.`,
					`Blanks are filled in using the white response cards in your hand. Once all players are ready, the judge picks their favourite response.`
				]
			},
			move: {
				title: `Response Cards`,
				description: [
					`Your hand will show you your response cards. You can drag these into available slots or click to select them.`,
					`After each round the cards you used in your selection are swapped for new ones.`
				]
			},
			vote: {
				title: `Voting`,
				description: [
					`Voting is either done by a single judge or by everyone. This depends on how the host configured the game.`,
					`At the end of each round, the judge(s) get to vote for their favourite response. A point is rewarded to the winner.`
				]
			},
			sets: {
				title: `Card Sets`,
				description: [
					`Before the game starts, the host can choose out of many available sets or import custom ones.`,
					`Custom card sets can be imported and are saved to your account, allowing you to easily use them again later.`
				]
			}
		}
	},
	[GameType.checkers]: {
		name: `Checkers`,
		heading: `Play Draughts Online With Friends`,
		tooltip: `Call it checkers or draughts, play it here with up to 4 players with all kinds of customisable rules.`,
		description: `Checkers is the classic fast-paced board game you know and love with exciting twists! Be in control and alter the rules as you like. Play with friends now.`,
		title: `Classic Multiplayer Board Game | Bloob.io`,
		options: {
			forceTake: {
				title: `Force Take`,
				help: {
					enabled: `<b>Enabled</b>: When possible, the player will be forced to take an opponent's piece.`,
					disabled: `<b>Disabled</b>: The player can choose what move they make, even if they can take out an opponent's piece.`
				}
			},
			field: {
				title: `Field`,
				help: `The playing field used. Depending on the size of the field and the amount of rows, you will get more or less starting pieces. Some fields may support up to four players.`,
				data: {
					'8x8': `English (8x8)`,
					'10x10': `International (10x10)`,
					'12x12': `Canadian (12x12)`,
					plus: `Plus Shape (12x12)`
				}
			},
			winCondition: {
				help: `How the winner will be determined.`,
				data: {
					[WinConditionType.morePieces]: `Most pieces`,
					[WinConditionType.oppositeSide]: `Reach opposite side`
				}
			},
			kingCondition: {
				title: `King Condition`,
				help: `Under what condition a piece becomes kinged. A kinged piece is allowed to move in all directions.`,
				data: {
					[CheckersKingType.oppositeSide]: `Reach opposite side`,
					[CheckersKingType.take]: `Taking a piece`,
					[CheckersKingType.all]: `Start with all kings`,
					[CheckersKingType.none]: `Disabled`
				}
			},
			backwardsTake: {
				title: `Take Backwards`,
				help: `Set whether pieces are allowed to take over opponent pieces backwards. If disabled, this can only be done by kinged pieces.`
			},
			chainTake: {
				title: `Chain Take`,
				help: `When enabled a piece can take over several other pieces in one move, if they are spaced properly. Alternatively when disabled only one piece can be taken at a time.`
			},
			turnTime: {
				title: `Turn Time`,
				help: `How long each player may decide on their next move.`
			},
			staleCount: {
				title: `Stale Game`,
				help: `After how many turns without any take overs the game should be considered stale and ended.`
			},
			stuckThreshold: {
				title: `Stuck Threshold`,
				help: `If a player is stuck for this amount of turns in a row they will lose automatically.`
			},
			autoTurnThreshold: {
				title: `Late Threshold`,
				help: `If a player is late and a move is automatically made for them this number of turns in a row, they automatically lose.`
			},
			rows: {
				title: `Rows`,
				help: `How many rows of pieces each player starts with. Depending on the field size the amount of rows will be determined.`
			}
		},
		presets: {
			default: {
				title: `Straight Checkers (Standard)`,
				description: `8x8 field — 24 pieces`
			},
			international: {
				title: `International Checkers`,
				description: `10x10 field — 40 pieces — Take backwards`
			},
			canadian: {
				title: `Canadian Checkers`,
				description: `12x12 field — 60 pieces — Take backwards`
			},
			party: {
				title: `Party Checkers`,
				description: `Plus field — 36 pieces — 4 players`
			}
		},
		help: {
			movement: {
				title: `Piece Movement`,
				description: [
					`Pieces can be moved diagonally. When it is your turn, all pieces that you can move are highlighted.`,
					`You can click on a highlighted piece to see all possible moves available for that piece.`
				]
			},
			take: {
				title: `Takes`,
				description: [
					`If an opponent's piece is diagonally next to your piece with an open spot behind it, you can take it.`,
					`Depending on the settings, you are either forced to take pieces when possible or can even take backwards.`
				]
			},
			king: {
				title: `Kinged Pieces`,
				description: [
					`Under the default settings, when you reach the opposite side with a piece it becomes kinged.`,
					`Kinged pieces are able to move in all diagonal directions without being forced to move forward.`
				]
			},
			goal: {
				title: `Goal`,
				description: [
					`Typically the goal is to take out all other pieces from the opponent or until no valid moves can be made.`,
					`The goal of the game, also referred to as the win condition, can be changed in the settings.`
				]
			}
		}
	},
	[GameType.blomber]: {
		name: `Blomber`,
		heading: `Play Bomberman Online With Friends`,
		tooltip: `Blow up your opponents in an intense close quarters battlefield packed with power ups in this classic Bomberman game.`,
		description: `Blomber is a Bomberman multiplayer game with more replayability than most other games. It's free, easy to play, customisable, and requires no sign-up. Play now.`,
		title: `Bomberman Multiplayer Game | Bloob.io`,
		options: {
			field: {
				title: `Field`,
				help: `The playing field used. Bigger field sizes can accommodate more players.`,
				data: {
					'9x9': `Small Square (9x9)`,
					'11x9': `Rectangle (11x9)`,
					qrSquare: `QR Square (11x11)`
				}
			},
			winCondition: {
				data: {
					[WinConditionType.lastStanding]: `Last standing (<b>0</b> lives) | Last standing (<b>1</b> live) | Last standing (<b>{count}</b> lives)`,
					[WinConditionType.killCount]: `First to get <b>0</b> kills | First to get <b>1</b> kill | First to get <b>{count}</b> kills`,
					[WinConditionType.time]: `Most kills after <b>0</b> min. | Most kills after <b>1</b> min. | Most kills after <b>{count}</b> min.`
				}
			},
			defaultBombCount: {
				title: `Bomb Count`,
				help: `This is the amount of bombs a player can place at the same time.`
			},
			defaultBombSize: {
				title: `Bomb Size`,
				help: `This is the blast radius of a bomb. The size is measured in tiles in each direction.`
			},
			defaultSpeed: {
				title: `Player Speed`,
				help: `The player walking speed.`
			},
			respawnDelay: {
				title: `Respawn Time`,
				help: `The time the player has to wait after they are killed before they can play again.`
			},
			bombPush: {
				title: `Bomb Push`,
				help: `When enabled, you can walk into a bomb to push it and slide it in a direction.`
			},
			explosionDelay: {
				title: `Explosion Delay`,
				help: `The delay before a placed bomb will explode.`
			},
			chainReaction: {
				title: `Chain Reaction`,
				help: `When enabled, an explosion will trigger bombs within range to also explode. The kills will go to the player who placed the bomb that initiated the chain reaction. If disabled, these bombs will be removed instead.`
			},
			cratePercentage: {
				title: `Crates`,
				help: `The percentage of crates that will be shown on the playing field. Crates can be blown up and may contain power-ups.`
			},
			powerUpPercentage: {
				title: `Power-ups`,
				help: `Modify how likely it is that a power up is dropped when a crate is destroyed.`
			}
		},
		help: {},
		presets: {
			default: {
				title: `Default`,
				description: `9x9 field — 3 lives — 4 players`
			},
			party: {
				title: `Party`,
				description: `QR Square field — 6 lives — 8 players`
			},
			action: {
				title: `Action Packed`,
				description: `No crates — Quick respawn — 6 lives — 8 players`
			}
		}
	},
	[GameType.eightBallPool]: {
		name: `8 Ball Pool`,
		heading: `Play 8 Ball Pool Online With Friends`,
		tooltip: `Play the popular billiards game here against a bot or player.`,
		description: `Take your best shot in online multiplayer pool! Sink all your balls and finish with the 8 Ball to win at the table!`,
		title: `Free Multiplayer Game for 2 Players`,
		options: {
			turnTime: {
				title: `Turn Time`,
				help: `How long each player has to hit the cue ball.`
			},
			preview: {
				title: `Preview`,
				help: `The preview line shows where the cue ball will go after it has been hit.`
			},
			illegalBallPocket: {
				title: `Illegal Ball Pocket`
			},
			ruleContactRailOnBreak: {
				title: `Rail on Break`,
				help: `While breaking, determine how many balls must come in contact with the rail. This rule does not apply if you pocket a ball.`,
				data: {
					one: `One ball`,
					two: `Two balls`,
					three: `Three balls`,
					four: `Four balls`
				}
			},
			assignedGroup: {
				title: `Assigned Group`,
				help: `Determine how each player is assigned their group (solids or stripes).`,
				data: {
					pocket: `On pocket`,
					random: `Random on start`
				}
			},
			ruleTurnCanHitBall: {
				title: `Can Hit Ball`,
				help: `Occurs when the player hits a ball that they are not allowed to. Rule does not apply while breaking.`,
				data: {
					assignedGroup: `Assigned group`,
					assignedGroupPlus: `Assigned group + 8 Ball`,
					eitherGroup: `Either group`,
					anyBall: `Any ball`
				}
			},
			ruleTurnMustHitBall: {
				title: `Must Hit Ball`,
				help: `Occurs when the player does not hit a ball (from "Can Hit Ball") during their turn.`
			},
			ruleTurnContactRail: {
				title: `Must Contact Rail`,
				help: `Occurs when no ball hits the rail (cushion). This rule does not apply if the player pockets a ball.`
			},
			ruleConsecutiveFouls: {
				title: `Consecutive Fouls`,
				help: `Determine what should happen when a player makes multiple fouls in a row. This rule discourages unsportmanslike behaviour.`,
				data: {
					off: `Off`,
					loseOnTwo: `Loss after two`,
					loseOnThree: `Loss after three`,
					loseOnFour: `Loss after four`
				}
			},
			foul: {
				help: {
					disabled: `Foul is disabled with current settings.`
				},
				data: {
					nothing: `Nothing`,
					keepTurn: `Keep turn`,
					endTurn: `End turn`,
					endTurnHand: `End turn + Ball in hand`,
					reset: `End turn + Restore field`,
					resetHand: `End turn + Restore field + Ball in hand`,
					instantWin: `Instant win`,
					instantLoss: `Instant loss`
				}
			},
			foulPocketCueBall: {
				title: `Pocketing Cue Ball`,
				help: `Occurs when a player pockets the Cue Ball.`
			},
			foulPocketOpponentBall: {
				title: `Pocketing Opponent's Ball`,
				help: `Occurs when a player pockets the opponent's ball. Other fouls take precedent over this (e.g. striking the incorrect ball first).`
			},
			foulPocketOwnAndOpponentBall: {
				title: `Pocketing Own + Opponent's Ball`,
				help: `Occurs when a player pockets both one of their own and the opponent's ball. Other fouls take precedent over this (e.g. striking the incorrect ball first).`
			},
			foulIllegalEightBallBreak: {
				title: `Pocketing 8 Ball During Break`,
				help: `Occurs when a player manages to pocket the 8 Ball during the break.`
			},
			foulIllegalEightBallPocket: {
				title: `Pocketing 8 Ball Illegally`,
				help: `Occurs when a player pockets the 8 Ball while committing a different foul at the same time (e.g. pocketing the cue ball as well).`
			},
			foulIllegalEightBallPocketTooSoon: {
				title: `Pocketing 8 Ball Too Soon`,
				help: `Occurs when a player pockets the 8 Ball while they still have other object balls to pocket.`
			}
		},
		presets: {
			default: {
				title: `Bloob.io Ruleset`
			},
			wpa: {
				title: `WPA Ruleset`,
				description: `Closely resembles World Pool-Billiard Association rules`
			},
			upa: {
				title: `UPA Ruleset`,
				description: `Closely resembles US Professional Poolplayers Association rules`
			},
			relaxed: {
				title: `Relaxed Ruleset`,
				description: `Milder punishments and fewer rules`
			},
			ruthless: {
				title: `Ruthless Ruleset`,
				description: `Any foul will result in an instant loss`
			}
		},
		help: {
			field: {
				title: `Playing Field`,
				description: [
					`The field contains 6 holes in which the balls can be pocketed. There are a total of 16 balls, one of which is the cue ball that you strike on your turn.`,
					`There are 7x striped and 7x solid balls, as well as 1x black eight ball. At the start of the game all balls are positioned in a triangle with the eight ball in the middle. The cue ball is set further away.`
				]
			},
			breaking: {
				title: `Starting the game (Breaking)`,
				description: [
					`Whoever has their turn first can move around the cue ball and strike towards the triangle of balls (their starting position).`,
					`There are rules to breaking. The cue ball cannot be pocketed and at least two balls (except for the cue ball) must hit a cushion (the walls around the field). Pocketing a ball on break guarantees you another turn right after.`
				]
			},
			gameplay: {
				title: `Gameplay`,
				description: [
					`There are both striped and solid balls. Whoever pockets a ball first becomes that ball group and gets another turn. From that point forward you must only pocket striped or solid balls.`,
					`The order in which you pocket your balls does not matter. When you commit a foul your opponent will be allowed to move the cue ball around for their turn.`
				]
			},
			objective: {
				title: `Objective`,
				description: [
					`You must avoid pocketing the black eight ball up until you have pocketed all your balls. You then finish the game by pocketing the eight ball. It is important you commit no foul while doing so, otherwise you lose.`,
					`Pocketing the eight ball too soon will result in an instant loss. Make sure to aim carefully!`
				]
			}
		}
	}
}
