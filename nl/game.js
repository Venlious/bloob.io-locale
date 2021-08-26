import GAME_TYPE from '../../../../public/enums/game-type'
import CHECKERS_KING_TYPE from '../../../../public/enums/checkers-king-type'
import WIN_CONDITION from '../../../../public/enums/win-condition'

export default {
	generic: {
		description: `A collection of multiplayer browser-based games without the need to make an account. Play hassle free and customise the experience to your liking.`,
		title: 'Gratis Online Multiplayer Browserspellen',
		options: {
			public: {
				name: 'Spel Privacy'
			},
			maxUsers: {
				name: 'Max. Spelers',
				help: `Hoeveel spelers er maximaal in het spel mogen.`
			}
		},
		presets: {
			custom: {
				name: 'Custom',
				desc: 'Instellingen aangepast door jou — Laatste update %{timestamp}'
			},
			default: {
				name: 'Standaard'
			}
		}
	},
	[GAME_TYPE.WORDRACE]: {
		name: 'Wordrace',
		description: `Zoek woorden in elke richting op een willekeurig gegenereerd veld terwijl je racet tegen anderen met hetzelfde doel.`,
		title: 'Gratis Online Woord Zoek Spel',
		options: {
			globalLanguage: {
				name: 'Universele Taal',
				help: {
					enabled: `<b>Ingeschakeld</b>: Iedereen zoekt naar woorden in de taal die jij instelt.`,
					disabled: `<b>Uitgeschakeld</b>: Elke speler kiest een taal naar keuze.`
				}
			},
			language: {
				name: 'Taal',
				help: {
					intro: `De taal waarin iedereen woorden in moet vinden.`,
					globalLanguage: `Als de <b>Universele Taal</b> is uitgeschakeld kan iedereen in hun eigen taal spelen.`
				}
			},
			sharedField: {
				name: 'Gedeelde Speelveld',
				help: `Iedereen ziet altijd hetzelfde speelveld. Als het speelveld gedeeld wordt kan iedereen zien welke letters zijn opgeëist. Deze letters kunnen dan niet meer gebruikt worden en maakt het spel steeds moeilijker.`
			},
			multiplier: {
				name: 'Vermenigvuldigers',
				help: `Vermenigvuldigers staan bij random letters in het speelveld. Als je hiermee een selectie maakt wordt de score hiermee vermenigvuldigt.`,
				data: {
					off: 'Uitgeschakeld',
					uncommon: 'Zeldzaam (2.5%)',
					common: 'Vaak (5%)',
					veryCommon: 'Heel Vaak (2.5%)',
					extreme: 'Extreem (25%)'
				}
			},
			roundTotal: {
				name: 'Rondes',
				help: `Elke ronde zal een nieuw speelveld genereren.`
			},
			roundDuration: {
				name: 'Duur van Ronde',
				help: `Hoe lang een enkele ronde duurt.`
			},
			roundIntermission: {
				name: 'Tussentijd',
				help: `Hoe lang de tijd tussen de rondes duurt.`
			},
			minWordLength: {
				name: 'Min. Woordlengte',
				help: `Een woordselectie moet ten minste deze lengte hebben om op geldigheid te worden gecontroleerd.`
			},
			maxWordLength: {
				name: 'Max. Woordlengte',
				help: `Een woordselectie mag niet langer zijn dan deze lengte om op geldigheid te worden gecontroleerd.`
			},
			_wordLength: {
				name: 'Woordlengte',
				help: `Een woordselectie moet tussen deze lengte liggen om als geldig te worden beschouwd.`,
				between: 'Tussen %{min} en %{max}'
			},
			field: {
				name: 'Speelveld Formaat',
				help: {
					change: `Verander de grootte van het speelveld. Grotere velden maken het spelen met meer mensen gemakkelijker.`,
					notice: `Let op: grote velden vergroten de interface en passen mogelijk niet in het browservenster van alle spelers.`
				},
				data: {
					'10x8': 'Klein (10x8)',
					'13x10': 'Medium (13x10)',
					'16x14': 'Groot (16x14)',
					'20x18': 'Extreem (20x18)'
				}
			},
			_gameDuration: {
				name: 'Spelduur'
			}
		},
		presets: {
			largeGroup: {
				name: 'Grote Groep',
				desc: 'Groot speelveld — Individuele talen — Meer spelers'
			},
			blitz: {
				name: 'Blitz',
				desc: 'Veel korte rondes — Veel vermenigvuldigers'
			}
		},
		help: {
			find_word: {
				title: 'Woordenselectie',
				desc: {
					'1': `Klik en houd vast op een letter in het speelveld en sleep in elke richting om een woord te vormen.`,
					'2': `Als je een selectie hebt gemaakt kun je stoppen met klikken en wordt het woord verwerkt. Als het woord geldig is dan krijg je punten afhankelijk van de lengte van het woord.`
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
				title: 'Vermenigvuldigers',
				desc: {
					'1': `Als het ingeschakeld is, worden er vermenigvuldigers getoond op willekeurige letters op het speelveld die de score van je gevonden woorden vermenigvuldigen!`,
					'2': `Vermenigvuldigers stapelen op, dus een woord met <b>x2</b> en <b>x3</b> zou de score voor het woord <b>x5</b> vermenigvuldigen!`
				}
			},
			language: {
				title: 'Taal',
				desc: {
					'1': `De spelleider mag beslissen of iedereen in dezelfde taal speelt of in een taal van zijn keuze.`,
					'2': `Woorden zullen alleen gelden voor de taal waarin je speelt en eventuele accenten worden genegeerd.`
				}
			}
		}
	},
	[GAME_TYPE.CONNECT_FOUR]: {
		name: 'Connect Four',
		description: `Speel vier-op-een-rij met maximaal zes spelers in de klassieke spelmodus of beschikbare variaties.`,
		title: 'Gratis Online Vier-op-een-Rij Voor 2-6 Spelers',
		options: {
			field: {
				name: 'Speelveld Formaat',
				help: 'De grootte van het speelveld.',
				data: {
					'7x6': 'Standaard (7x6)',
					'9x4': 'Uitgerekt (9x4)',
					'9x6': 'Groot (9x6)',
					'13x8': 'Erg Groot (13x8)',
					'17x10': 'Extreem (17x10)'
				}
			},
			turnTime: {
				name: 'Beurt Tijd',
				help: `Hoe lang elke speler maximaal over zijn beurt mag doen.`
			},
			piecesInRow: {
				name: 'Win Conditie',
				help: `Hoeveel schijven je op een rij moet hebben om het spel te winnen.`,
				data: {
					'4': 'Vier op een rij (4)',
					'5': 'Vijf op een rij (5)',
					'6': 'Zes op een rij (6)'
				}
			},
			sideColumns: {
				name: 'Zijkolommen',
				help: `Voegt aan weerszijden van het speelveld een kolom toe met schijven in afwisselende kleuren.`
			},
			flip: {
				name: 'Speelveld Omkeren',
				help: `Draai het speelveld om, de schijven onderop worden de schijven bovenop. Een teller geeft aan hoeveel beurten er nog resteren tot het veld wordt omgedraaid.`,
				data: {
					everyTurn: 'Na elke beurt',
					countTurns: 'Na elke %{count} beurten'
				}
			},
			turnsUntilFlip: {
				name: 'Beurten tot Speelveld Keert',
				help: `Het plaatsen van een schijf telt als een beurt. Dit bepaalt dus hoeveel schijven er moeten vallen voordat het speelveld wordt omgedraaid.`
			}
		},
		presets: {
			fiveInARow: {
				name: 'Vijf op een rij',
				desc: 'Zijkolommen — Groot speelveld'
			},
			flipParty: {
				name: 'Flip Party',
				desc: 'Speelveld keert om na elke 12 beurten — Erg groot speelveld'
			}
		},
		help: {
			placement: {
				title: 'Plaatsen van schijven',
				desc: {
					'1': `Schijven kunnen op verschillende manieren worden geplaatst. Klik op een kolom met je muis, gebruik de toetsenbordbediening of sleep ze rond.`,
					'2': `Je kunt zien over welk kolom je tegenstander zweeft, hou dit in gedachten en gebruik het in je voordeel.`
				}
			},
			win: {
				title: 'Win Conditie',
				desc: {
					'1': `Standaard wint de eerste persoon die vier schijven op een rij heeft in het spel. Dit kan horizontaal, verticaal en diagonaal zijn.`,
					'2': `De spelleider kan de standaard win conditie veranderen en andere eisen instellen.`
				}
			}
		}
	},
	[GAME_TYPE.ROTTEN_APPLES]: {
		name: 'Rotten Apples',
		description: `Speel een Cards Against Humanity-kloon en pas je ervaring aan naar eigen smaak.`,
		title: 'Gratis Online Cards Against Humanity Spel',
		options: {
			winCondition: {
				name: 'Win Conditie',
				help: `Bepaal wanneer het spel tot een einde moet komen. Dit is gekoppeld aan de instelling "Winnende Aantal".`,
				data: {
					first: `Eerste met <b>0</b> punten | Eerste met <b>1</b> punt | Eerste met <b>{count}</b> punten`,
					most: `Meeste punten na <b>0</b> rondes | Meeste punten na <b>1</b> ronde | Meeste punten na <b>{count}</b> rondes`
				}
			},
			winAmount: {
				name: 'Winnende Aantal'
			},
			handSize: {
				name: 'Kaarten in Hand',
				help: `Het aantal antwoordkaarten dat iedereen op een bepaald moment in zijn hand heeft.`
			},
			judgeSystem: {
				name: 'Stem Systeem',
				help: `Of er een enkele beslisser is of iedereen mag bepalen wie elke ronde de beste kaarten heeft gespeeld.`,
				data: {
					single: 'Nieuwe beslisser elke ronde',
					everyone: 'Iedereen stemt'
				}
			},
			pickBlackCard: {
				name: 'Kies Actiekaart',
				help: `Bij het aanzetten worden drie willekeurige actiekaarten aan de beslisser getoond om tussen te kiezen.`
			},
			showNsfw: {
				name: 'NSFW Kaarten',
				help: `Kaarten met seks of gevloek.`
			},
			showSpecific: {
				name: 'Specifieke Kaarten',
				help: `Kaarten met merken, moeilijke woorden, of mensen.`
			},
			timePicking: {
				name: 'Actiekaart Kies Tijd',
				help: `Bepaal hoe lang iedereen heeft om een actiekaart te kiezen voor die ronde.`
			},
			timeDeciding: {
				name: 'Beslissingstijd (per kaart)',
				help: {
					intro: `Bepaal hoe lang iedereen heeft om zijn antwoordkaart(en) te selecteren.`,
					calc: `De totale tijd wordt berekend door <b>ANTWOORDKAARTEN * DEZE TIJD</b>`
				}
			},
			timeVoting: {
				name: 'Stemtijd (per kaart)',
				help: {
					intro: `Bepaal hoe lang iedereen heeft om te stemmen voor de winnende selectie.`,
					calc: `De totale tijd wordt berekend door <b>ANTWOORDKAARTEN * SPELERS * DEZE TIJD</b>`
				}
			},
			timeReveal: {
				name: 'Onthullingstijd (per kaart)',
				help: {
					intro: `Bepaal hoe lang iedereen de winnende selectie te zien krijgt.`,
					calc: `De totale tijd wordt berekend door <b>ANTWOORDKAARTEN * DEZE TIJD</b>`,
					skip: `De onthulling kan ook worden overgeslagen als meer dan de helft van de gebruikers daarvoor stemt.`
				}
			}
		},
		presets: {
			democracy: {
				name: 'Democratie',
				desc: 'Iedereen mag stemmen'
			}
		},
		help: {
			action: {
				title: 'Actiekaart',
				desc: {
					'1': `Elke ronde wordt een nieuwe zwarte actiekaart gepresenteerd met lege vakjes (___) die door de spelers moeten worden ingevuld.`,
					'2': `De lege vakjes worden ingevuld met de witte antwoordkaarten. Als alle spelers klaar zijn, kiest de beslisser zijn favoriete antwoord.`
				}
			},
			move: {
				title: 'Antwoordkaarten',
				desc: {
					'1': `Onderin de interface kun je de antwoordkaarten in jouw hand zien. Je kunt deze selecteren door erop te klikken of je kunt ze naar de beschikbare plaatsen slepen.`,
					'2': `Na elke ronde worden de kaarten die je in je selectie hebt gebruikt omgewisseld voor nieuwe.`
				}
			},
			vote: {
				title: 'Stemmen',
				desc: {
					'1': `Het stemmen wordt gedaan door één beslisser of door iedereen. Dit hangt af van hoe de spelleider het spel heeft ingesteld.`,
					'2': `Aan het eind van elke ronde wordt er gestemd op het beste antwoord. De winnaar verdient dan een punt.`
				}
			},
			sets: {
				title: 'Kaartensets',
				desc: {
					'1': `Voordat het spel begint kan de spelleider kiezen uit vele beschikbare kaartensets of eigen sets maken of importeren.`,
					'2': `Custom kaartensets kunnen worden geïmporteerd en worden opgeslagen in uw browser, zodat u ze later gemakkelijk opnieuw kunt gebruiken.`
				}
			}
		}
	},
	[GAME_TYPE.CHECKERS]: {
		name: 'Checkers',
		description: `Speel hier dammen met maximaal 4 spelers en allerlei aanpasbare regels.`,
		title: 'Gratis Online Dammen Voor 2-4 Spelers',
		options: {
			forceTake: {
				name: 'Forceer Overname',
				help: {
					enabled: `<b>Ingeschakeld</b>: Indien mogelijk, zal de speler gedwongen worden een stuk van de tegenstander over te nemen.`,
					disabled: `<b>Uitgeschakeld</b>: De speler mag zelf de volgende zet bepalen, zelfs als die een stuk van de tegenstander kan overnemen.`
				}
			},
			field: {
				name: 'Speelveld',
				help: `Afhankelijk van de grootte van het veld en het aantal rijen, krijgen alle spelers meer of minder startstukken. Sommige velden ondersteunen tot vier spelers.`,
				data: {
					'8x8': 'Engels (8x8)',
					'10x10': 'Internationaal (10x10)',
					'12x12': 'Canadees (12x12)',
					plus: 'Plus Vorm (12x12)'
				}
			},
			winCondition: {
				name: 'Win Voorwaarde',
				help: `Hoe de winnaar zal worden bepaald.`,
				data: {
					[WIN_CONDITION.MORE_PIECES]: 'Meeste stukken',
					[WIN_CONDITION.OPPOSITE_SIDE]: 'Bereik de overkant'
				}
			},
			kingCondition: {
				name: 'Kroning Voorwaarde',
				help: `Onder welke voorwaarde een speelstuk bekroond wordt. Een stuk dat gekroond is mag in alle richtingen bewegen.`,
				data: {
					[CHECKERS_KING_TYPE.OPPOSITE_SIDE]: 'Bereik de overkant',
					[CHECKERS_KING_TYPE.TAKE]: 'Na stuk overname',
					[CHECKERS_KING_TYPE.ALL]: 'Elk stuk is gekroond',
					[CHECKERS_KING_TYPE.NONE]: 'Uitgeschakeld'
				}
			},
			backwardsTake: {
				name: 'Achteruit Overnemen',
				help: `Stel in of stukken achterwaarts stukken van de tegenstander mogen overnemen. Indien uitgeschakeld kan dit alleen gedaan worden door gekroonde stukken.`
			},
			chainTake: {
				name: 'Ketting Overnames',
				help: `Indien ingeschakeld kan een stuk meerdere andere stukken in één zet overnemen, mits ze op de juiste afstand van elkaar staan. Als deze is uitgeschakeld kan slechts één stuk tegelijk worden overgenomen.`
			},
			turnTime: {
				name: 'Beurt Tijd',
				help: `Hoe lang elke speler maximaal over zijn beurt mag doen.`
			},
			staleCount: {
				name: 'Doelloos Spel',
				help: `Na hoeveel beurten zonder overname moet het spel als doelloos worden beschouwd en beëindigd.`
			},
			stuckThreshold: {
				name: 'Vast Toleratie',
				help: `Als een speler dit aantal beurten achter elkaar vastzit en dus geen stukken kan bewegen, verliest deze automatisch.`
			},
			autoTurnThreshold: {
				name: 'Laat Toleratie',
				help: `Als een speler te laat is en er automatisch een zet gemaakt wordt voor dit aantal beurten achter elkaar, verliest deze automatisch.`
			},
			rows: {
				name: 'Rijen',
				help: `Met hoeveel rijen vol stukken elke speler begint. De maximale hoevelheid rijen is afhankelijk van de grootte van het speelveld.`
			}
		},
		presets: {
			default: {
				name: 'Engels dammen (standaard)',
				desc: '8x8 speelveld — 24 stukken'
			},
			international: {
				name: 'Internationaal dammen',
				desc: '10x10 speelveld — 40 stukken — Achteruit overnemen'
			},
			canadian: {
				name: 'Canadees dammen',
				desc: '12x12 speelveld — 60 stukken — Achteruit overnemen'
			},
			party: {
				name: 'Party dammen',
				desc: 'Plus speelveld — 36 stukken — 4 players'
			}
		},
		help: {
			movement: {
				title: 'Bewegen van stukken',
				desc: {
					'1': `Stukken kunnen diagonaal worden bewogen. Als je aan de beurt bent, zijn alle stukken die je kunt verplaatsen gemarkeerd.`,
					'2': `Je kunt op een gemarkeerd stuk klikken om alle mogelijke zetten voor dat stuk te zien.`
				}
			},
			take: {
				title: 'Overnames',
				desc: {
					'1': `Als een stuk van de tegenstander diagonaal naast jouw stuk staat met een open plek erachter, kun je het overnemen.`,
					'2': `Afhankelijk van de instellingen moet je stukken overnemen wanneer dat mogelijk is. Het is soms zelfs mogelijk achteruit een overname doen.`
				}
			},
			king: {
				title: 'Gekroonde stukken',
				desc: {
					'1': `Met de standaard instellingen wordt een stuk bekroond voor het bereiken van de overkant.`,
					'2': `Gekroonde stukken kunnen in alle diagonale richtingen bewegen.`
				}
			},
			goal: {
				title: 'Doel',
				desc: {
					'1': `Het doel is normaliter om alle andere stukken van de tegenstander uit te schakelen of totdat er geen geldige zetten meer gedaan kunnen worden.`,
					'2': `Het doel van het spel, ook wel de win voorwarde genoemd, kan veranderd worden in de instellingen.`
				}
			}
		}
	},
	[GAME_TYPE.BLOMBER]: {
		name: 'Blomber',
		description: `Blaas je tegenstanders op in een intens slagveld vol power-ups.`,
		title: 'Gratis Online Bomberman Geïnspireerd Spel',
		options: {},
		help: {}
	}
}
