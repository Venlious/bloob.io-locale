import { GameType, GenericType, CheckersKingType, WinConditionType } from '../types/index'
import { GameMessage } from '../types/game'

export default <GameMessage>{
	[GenericType.generic]: {
		title: `Gratis Online Multiplayer Browserspellen`,
		description: `Een verzameling van multiplayer browser spellen zonder de noodzaak om een account aan te maken. Speel zonder gedoe en pas de ervaring aan naar je eigen smaak.`,
		options: {
			public: {
				title: `Spel Privacy`
			},
			maxUsers: {
				title: `Max. Spelers`,
				help: `Hoeveel spelers er maximaal in het spel mogen.`
			},
			botFill: {
				title: `Bot Fill`,
				help: `Wanneer deze optie is ingeschakeld, zullen bots alle lege spelerslots opvullen. Als een speler vroegtijdig het spel verlaat zal deze ook een speler vervangen.`
			},
			botDifficulty: {
				title: `Bot Moeilijkheidsgraad`,
				data: {
					easy: `Makkelijk`,
					normal: `Normaal`,
					hard: `Moeilijk`
				}
			},
			generic: {
				data: {
					required: `Verplicht`,
					notRequired: `Optioneel`
				}
			},
			winCondition: {
				title: `Win Voorwaarde`,
				help: `Bepaal wanneer het spel tot een einde moet komen.`
			},
			winAmount: {
				title: `Winnende Aantal`
			}
		},
		help: {},
		presets: {
			custom: {
				title: `Custom`,
				description: `Instellingen aangepast door jou — Laatste update %{timestamp}`
			},
			default: {
				title: `Standaard`
			}
		}
	},
	[GameType.wordrace]: {
		name: `Wordrace`,
		tooltip: `Zoek woorden in elke richting op een willekeurig gegenereerd veld terwijl je racet tegen anderen met hetzelfde doel.`,
		description: `Wordrace is een gratis uniek woorden zoek spel waar jij het tegen anderen opneemt om zo snel mogelijk zoveel mogelijk worden te vinden. Probeer het meteen.`,
		title: `Gratis Online Woord Zoek Spel`,
		options: {
			globalLanguage: {
				title: `Universele Taal`,
				help: {
					enabled: `<b>Ingeschakeld</b>: Iedereen zoekt naar woorden in de taal die jij instelt.`,
					disabled: `<b>Uitgeschakeld</b>: Elke speler kiest een taal naar keuze.`
				}
			},
			language: {
				title: `Taal`,
				help: {
					intro: `De taal waarin iedereen woorden in moet vinden.`,
					globalLanguage: `Als de <b>Universele Taal</b> is uitgeschakeld kan iedereen in hun eigen taal spelen.`
				}
			},
			sharedField: {
				title: `Gedeelde Speelveld`,
				help: `Iedereen ziet altijd hetzelfde speelveld. Als het speelveld gedeeld wordt kan iedereen zien welke letters zijn opgeëist. Deze letters kunnen dan niet meer gebruikt worden en maakt het spel steeds moeilijker.`
			},
			multiplier: {
				title: `Vermenigvuldigers`,
				help: `Vermenigvuldigers staan bij random letters in het speelveld. Als je hiermee een selectie maakt wordt de score hiermee vermenigvuldigt.`,
				data: {
					off: `Uitgeschakeld`,
					uncommon: `Zeldzaam (2.5%)`,
					common: `Vaak (5%)`,
					veryCommon: `Heel Vaak (10%)`,
					extreme: `Extreem (25%)`
				}
			},
			roundTotal: {
				title: `Rondes`,
				help: `Elke ronde zal een nieuw speelveld genereren.`
			},
			roundDuration: {
				title: `Duur van Ronde`,
				help: `Hoe lang een enkele ronde duurt.`
			},
			roundIntermission: {
				title: `Tussentijd`,
				help: `Hoe lang de tijd tussen de rondes duurt.`
			},
			minWordLength: {
				title: `Min. Woordlengte`,
				help: `Een woordselectie moet ten minste deze lengte hebben om op geldigheid te worden gecontroleerd.`
			},
			maxWordLength: {
				title: `Max. Woordlengte`,
				help: `Een woordselectie mag niet langer zijn dan deze lengte om op geldigheid te worden gecontroleerd.`
			},
			_wordLength: {
				title: `Woordlengte`,
				help: `Een woordselectie moet tussen deze lengte liggen om als geldig te worden beschouwd.`,
				data: {
					between: `Tussen %{min} en %{max}`
				}
			},
			field: {
				title: `Speelveld Formaat`,
				help: {
					change: `Verander de grootte van het speelveld. Grotere velden maken het spelen met meer mensen gemakkelijker.`,
					notice: `Let op: grote velden vergroten de interface en passen mogelijk niet in het browservenster van alle spelers.`
				},
				data: {
					'10x8': `Klein (10x8)`,
					'13x10': `Medium (13x10)`,
					'16x14': `Groot (16x14)`,
					'20x18': `Extreem (20x18)`
				}
			},
			_gameDuration: {
				title: `Spelduur`
			}
		},
		presets: {
			largeGroup: {
				title: `Grote Groep`,
				description: `Groot speelveld — Individuele talen — Meer spelers`
			},
			blitz: {
				title: `Blitz`,
				description: `Veel korte rondes — Veel vermenigvuldigers`
			}
		},
		help: {
			find_word: {
				title: `Woordenselectie`,
				description: [
					`Klik en houd vast op een letter in het speelveld en sleep in elke richting om een woord te vormen.`,
					`Als je een selectie hebt gemaakt kun je stoppen met klikken en wordt het woord verwerkt. Als het woord geldig is dan krijg je punten afhankelijk van de lengte van het woord.`
				]
			},
			gameplay: {
				title: `Gameplay`,
				description: [
					`Iedereen probeert tegelijk met jou woorden te vinden, het is tenslotte een race. Geclaimde letters kunnen niet opnieuw gebruikt worden.`,
					`Soms is het tactischer om veel korte woorden te claimen in plaats van langere, moeilijkere, woorden.`
				]
			},
			multiplier: {
				title: `Vermenigvuldigers`,
				description: [
					`Als het ingeschakeld is, worden er vermenigvuldigers getoond op willekeurige letters op het speelveld die de score van je gevonden woorden vermenigvuldigen!`,
					`Vermenigvuldigers stapelen op, dus een woord met <b>x2</b> en <b>x3</b> zou de score voor het woord <b>x5</b> vermenigvuldigen!`
				]
			},
			language: {
				title: `Taal`,
				description: [
					`De spelleider mag beslissen of iedereen in dezelfde taal speelt of in een taal van zijn keuze.`,
					`Woorden zullen alleen gelden voor de taal waarin je speelt en eventuele accenten worden genegeerd.`
				]
			}
		}
	},
	[GameType.fourInARow]: {
		name: `Vier-op-een-Rij`,
		tooltip: `Speel vier-op-een-rij met maximaal zes spelers in de klassieke spelmodus of beschikbare variaties.`,
		description: `Speel vier-op-een-rij met maximaal zes spelers in de klassieke spelmodus of beschikbare variaties. Train nu tegen de bots en versla je vrienden met gemak.`,
		title: `Gratis Online Vier-op-een-Rij Voor 2-6 Spelers`,
		options: {
			field: {
				title: `Speelveld Formaat`,
				help: `De grootte van het speelveld.`,
				data: {
					'7x6': `Standaard (7x6)`,
					'9x4': `Uitgerekt (9x4)`,
					'9x6': `Groot (9x6)`,
					'13x8': `Erg Groot (13x8)`,
					'17x10': `Extreem (17x10)`
				}
			},
			turnTime: {
				title: `Beurt Tijd`,
				help: `Hoe lang elke speler maximaal over zijn beurt mag doen.`
			},
			piecesInRow: {
				title: `Win Conditie`,
				help: `Hoeveel schijven je op een rij moet hebben om het spel te winnen.`,
				data: {
					'3': `Drie op een rij (3)`,
					'4': `Vier op een rij (4)`,
					'5': `Vijf op een rij (5)`,
					'6': `Zes op een rij (6)`
				}
			},
			sideColumns: {
				title: `Zijkolommen`,
				help: `Voegt aan weerszijden van het speelveld een kolom toe met schijven in afwisselende kleuren.`
			},
			flip: {
				title: `Speelveld Omkeren`,
				help: `Draai het speelveld om, de schijven onderop worden de schijven bovenop. Een teller geeft aan hoeveel beurten er nog resteren tot het veld wordt omgedraaid.`,
				data: {
					everyTurn: `Na elke beurt`,
					countTurns: `Na elke %{count} beurten`
				}
			},
			turnsUntilFlip: {
				title: `Beurten tot Speelveld Keert`,
				help: `Het plaatsen van een schijf telt als een beurt. Dit bepaalt dus hoeveel schijven er moeten vallen voordat het speelveld wordt omgedraaid.`
			},
			tetrisMode: {
				title: `Tetris Modus`,
				help: `Indien ingeschakeld, zal een volledig gevulde rij verdwijnen en alle stukken erboven een rij naar beneden vallen. Dit maakt het ook onmogelijk om in een gelijk spel te eindigen.`
			}
		},
		presets: {
			fiveInARow: {
				title: `Vijf op een rij`,
				description: `Zijkolommen — Groot speelveld`
			},
			tetris: {
				title: `Tetris`,
				description: `Volle rijen worden automatisch verwijderd`
			},
			flipParty: {
				title: `Flip Party`,
				description: `Speelveld keert om na elke 12 beurten — Erg groot speelveld`
			}
		},
		help: {
			placement: {
				title: `Plaatsen van schijven`,
				description: [
					`Schijven kunnen op verschillende manieren worden geplaatst. Klik op een kolom met je muis, gebruik de toetsenbordbediening of sleep ze rond.`,
					`Je kunt zien over welk kolom je tegenstander zweeft, hou dit in gedachten en gebruik het in je voordeel.`
				]
			},
			win: {
				title: `Win Conditie`,
				description: [
					`Standaard wint de eerste persoon die vier schijven op een rij heeft in het spel. Dit kan horizontaal, verticaal en diagonaal zijn.`,
					`De spelleider kan de standaard win conditie veranderen en andere eisen instellen.`
				]
			}
		}
	},
	[GameType.rottenApples]: {
		name: `Rotten Apples`,
		tooltip: `Speel een Cards Against Humanity-kloon en pas je ervaring aan naar eigen smaak.`,
		description: `Speel een Cards Against Humanity kloon en pas de instellingen geheel naar jouw smaak aan. Creëer je eigen kaartensets en speel samen met je vrienden.`,
		title: `Gratis Online Cards Against Humanity Spel`,
		options: {
			winCondition: {
				data: {
					first: `Eerste met <b>0</b> punten | Eerste met <b>1</b> punt | Eerste met <b>{count}</b> punten`,
					most: `Meeste punten na <b>0</b> rondes | Meeste punten na <b>1</b> ronde | Meeste punten na <b>{count}</b> rondes`
				}
			},
			handSize: {
				title: `Kaarten in Hand`,
				help: `Het aantal antwoordkaarten dat iedereen op een bepaald moment in zijn hand heeft.`
			},
			judgeSystem: {
				title: `Stem Systeem`,
				help: `Of er een enkele beslisser is of iedereen mag bepalen wie elke ronde de beste kaarten heeft gespeeld.`,
				data: {
					single: `Nieuwe beslisser elke ronde`,
					everyone: `Iedereen stemt`
				}
			},
			pickBlackCard: {
				title: `Kies Actiekaart`,
				help: `Bij het aanzetten worden drie willekeurige actiekaarten aan de beslisser getoond om tussen te kiezen.`
			},
			handPreview: {
				title: `Hand Preview`,
				help: `Indien ingeschakeld, wordt aan het begin van het spel en na elke dumpronde een periode toegevoegd. Gedurende deze tijd kan iedereen zijn (nieuwe) kaarten in de hand bekijken.`
			},
			dumpRound: {
				title: `Dumpronde`,
				help: `Tijdens een dump-ronde mag iedereen kaarten in hun hand kiezen welke zij willen verwijderen. Na afloop van de ronde ontvangt iedereen nieuwe antwoordkaarten ter vervanging.`,
				data: {
					disabled: `Uitgeschakeld`,
					round: `Elke <b>0</b> rondes | Elke <b>1</b> ronde | Every <b>{count}</b> rondes`
				}
			},
			dumpRoundAmount: {
				title: `Aantal Dumprondes`
			},
			showNsfw: {
				title: `NSFW Kaarten`,
				help: `Kaarten met seks of gevloek.`
			},
			showSpecific: {
				title: `Specifieke Kaarten`,
				help: `Kaarten met merken, moeilijke woorden, of mensen.`
			},
			_filter: {
				title: `Filter`,
				help: `Actieve filters zorgen dat kaarten die aan de volgende criteria voldoen worden weggelaten:`
			},
			timePicking: {
				title: `Actiekaart Kies Tijd`,
				help: `Bepaal hoe lang iedereen heeft om een actiekaart te kiezen voor die ronde.`
			},
			responseCardLimit: {
				title: `Antwoordkaart Limiet`,
				help: `Standaard kunnen actiekaarten je maximaal 3 antwoordkaarten laten trekken. Door deze limiet te veranderen zullen actiekaarten die boven dit limiet zitten uit het spel worden gefilterd.`
			},
			timeDeciding: {
				title: `Beslissingstijd (per kaart)`,
				help: {
					intro: `Bepaal hoe lang iedereen heeft om zijn antwoordkaart(en) te selecteren.`,
					calc: `De totale tijd wordt berekend door <b>ANTWOORDKAARTEN * DEZE TIJD</b>`
				}
			},
			timeVoting: {
				title: `Stemtijd (per kaart)`,
				help: {
					intro: `Bepaal hoe lang iedereen heeft om te stemmen voor de winnende selectie.`,
					calc: `De totale tijd wordt berekend door <b>ANTWOORDKAARTEN * SPELERS * DEZE TIJD</b>`
				}
			},
			timeReveal: {
				title: `Onthullingstijd (per kaart)`,
				help: {
					intro: `Bepaal hoe lang iedereen de winnende selectie te zien krijgt.`,
					calc: `De totale tijd wordt berekend door <b>ANTWOORDKAARTEN * DEZE TIJD</b>`
				}
			},
			timeHandPreview: {
				title: `Hand Preview Tijd (per kaart)`,
				help: {
					intro: `Bepaal hoe lang aan het begin van een spel of na een dumpronde iedereen zijn (nieuwe) kaarten mag bekijken.`,
					calc: `De totale tijd wordt berekend door <b>3 SECONDEN + KAARTEN IN HAND * DEZE TIJD</b>`
				}
			},
			timeDumpRound: {
				title: `Dumpronde Tijd (per kaart)`,
				help: {
					intro: `Bepaal hoe lang iedereen heeft om te kiezen welke kaarten zij willen dumpen.`,
					calc: `De totale tijd wordt berekend door <b>3 SECONDEN + KAARTEN IN HAND * DEZE TIJD</b>`
				}
			}
		},
		presets: {
			democracy: {
				title: `Democratie`,
				description: `Iedereen mag stemmen`
			}
		},
		help: {
			action: {
				title: `Actiekaart`,
				description: [
					`Elke ronde wordt een nieuwe zwarte actiekaart gepresenteerd met lege vakjes (___) die door de spelers moeten worden ingevuld.`,
					`De lege vakjes worden ingevuld met de witte antwoordkaarten. Als alle spelers klaar zijn, kiest de beslisser zijn favoriete antwoord.`
				]
			},
			move: {
				title: `Antwoordkaarten`,
				description: [
					`Onderin de interface kun je de antwoordkaarten in jouw hand zien. Je kunt deze selecteren door erop te klikken of je kunt ze naar de beschikbare plaatsen slepen.`,
					`Na elke ronde worden de kaarten die je in je selectie hebt gebruikt omgewisseld voor nieuwe.`
				]
			},
			vote: {
				title: `Stemmen`,
				description: [
					`Het stemmen wordt gedaan door één beslisser of door iedereen. Dit hangt af van hoe de spelleider het spel heeft ingesteld.`,
					`Aan het eind van elke ronde wordt er gestemd op het beste antwoord. De winnaar verdient dan een punt.`
				]
			},
			sets: {
				title: `Kaartensets`,
				description: [
					`Voordat het spel begint kan de spelleider kiezen uit vele beschikbare kaartensets of eigen sets maken of importeren.`,
					`Custom kaartensets kunnen worden geïmporteerd en worden opgeslagen in uw browser, zodat je ze later gemakkelijk opnieuw kunt gebruiken.`
				]
			}
		}
	},
	[GameType.checkers]: {
		name: `Checkers`,
		tooltip: `Speel hier dammen met maximaal 4 spelers en allerlei aanpasbare regels.`,
		description: `Online Dammen is het wereldbekende klassieke bordspel maar dan online! Nodig je vrienden uit en gebruik je eigen spelregels. Speel nu tegen andere spelers en bots. Je kunt hier ook met 2-4 spelers spelen.`,
		title: `Gratis Online Dammen Voor 2-4 Spelers`,
		options: {
			forceTake: {
				title: `Forceer Overname`,
				help: {
					enabled: `<b>Ingeschakeld</b>: Indien mogelijk, zal de speler gedwongen worden een stuk van de tegenstander over te nemen.`,
					disabled: `<b>Uitgeschakeld</b>: De speler mag zelf de volgende zet bepalen, zelfs als die een stuk van de tegenstander kan overnemen.`
				}
			},
			field: {
				title: `Speelveld`,
				help: `Afhankelijk van de grootte van het veld en het aantal rijen, krijgen alle spelers meer of minder startstukken. Sommige velden ondersteunen tot vier spelers.`,
				data: {
					'8x8': `Engels (8x8)`,
					'10x10': `Internationaal (10x10)`,
					'12x12': `Canadees (12x12)`,
					plus: `Plus Vorm (12x12)`
				}
			},
			winCondition: {
				help: `Hoe de winnaar zal worden bepaald.`,
				data: {
					[WinConditionType.morePieces]: `Meeste stukken`,
					[WinConditionType.oppositeSide]: `Bereik de overkant`
				}
			},
			kingCondition: {
				title: `Kroning Voorwaarde`,
				help: `Onder welke voorwaarde een speelstuk bekroond wordt. Een stuk dat gekroond is mag in alle richtingen bewegen.`,
				data: {
					[CheckersKingType.oppositeSide]: `Bereik de overkant`,
					[CheckersKingType.take]: `Na stuk overname`,
					[CheckersKingType.all]: `Elk stuk is gekroond`,
					[CheckersKingType.none]: `Uitgeschakeld`
				}
			},
			backwardsTake: {
				title: `Achteruit Overnemen`,
				help: `Stel in of stukken achterwaarts stukken van de tegenstander mogen overnemen. Indien uitgeschakeld kan dit alleen gedaan worden door gekroonde stukken.`
			},
			chainTake: {
				title: `Ketting Overnames`,
				help: `Indien ingeschakeld kan een stuk meerdere andere stukken in één zet overnemen, mits ze op de juiste afstand van elkaar staan. Als deze is uitgeschakeld kan slechts één stuk tegelijk worden overgenomen.`
			},
			turnTime: {
				title: `Beurt Tijd`,
				help: `Hoe lang elke speler maximaal over zijn beurt mag doen.`
			},
			staleCount: {
				title: `Doelloos Spel`,
				help: `Na hoeveel beurten zonder overname moet het spel als doelloos worden beschouwd en beëindigd.`
			},
			stuckThreshold: {
				title: `Vast Toleratie`,
				help: `Als een speler dit aantal beurten achter elkaar vastzit en dus geen stukken kan bewegen, verliest deze automatisch.`
			},
			autoTurnThreshold: {
				title: `Laat Toleratie`,
				help: `Als een speler te laat is en er automatisch een zet gemaakt wordt voor dit aantal beurten achter elkaar, verliest deze automatisch.`
			},
			rows: {
				title: `Rijen`,
				help: `Met hoeveel rijen vol stukken elke speler begint. De maximale hoevelheid rijen is afhankelijk van de grootte van het speelveld.`
			}
		},
		presets: {
			default: {
				title: `Engels dammen (standaard)`,
				description: `8x8 speelveld — 24 stukken`
			},
			international: {
				title: `Internationaal dammen`,
				description: `10x10 speelveld — 40 stukken — Achteruit overnemen`
			},
			canadian: {
				title: `Canadees dammen`,
				description: `12x12 speelveld — 60 stukken — Achteruit overnemen`
			},
			party: {
				title: `Party dammen`,
				description: `Plus speelveld — 36 stukken — 4 players`
			}
		},
		help: {
			movement: {
				title: `Bewegen van stukken`,
				description: [
					`Stukken kunnen diagonaal worden bewogen. Als je aan de beurt bent, zijn alle stukken die je kunt verplaatsen gemarkeerd.`,
					`Je kunt op een gemarkeerd stuk klikken om alle mogelijke zetten voor dat stuk te zien.`
				]
			},
			take: {
				title: `Overnames`,
				description: [
					`Als een stuk van de tegenstander diagonaal naast jouw stuk staat met een open plek erachter, kun je het overnemen.`,
					`Afhankelijk van de instellingen moet je stukken overnemen wanneer dat mogelijk is. Het is soms zelfs mogelijk achteruit een overname doen.`
				]
			},
			king: {
				title: `Gekroonde stukken`,
				description: [
					`Met de standaard instellingen wordt een stuk bekroond voor het bereiken van de overkant.`,
					`Gekroonde stukken kunnen in alle diagonale richtingen bewegen.`
				]
			},
			goal: {
				title: `Doel`,
				description: [
					`Het doel is normaliter om alle andere stukken van de tegenstander uit te schakelen of totdat er geen geldige zetten meer gedaan kunnen worden.`,
					`Het doel van het spel, ook wel de win voorwarde genoemd, kan veranderd worden in de instellingen.`
				]
			}
		}
	},
	[GameType.blomber]: {
		name: `Blomber`,
		tooltip: `Blaas je tegenstanders op in een intens slagveld vol power-ups.`,
		description: `Blomber is een Bomberman multiplayer spel dat je online tegen anderen kunt spelen! Het is gratis en volledig aan te passen naar jouw wensen. Speel het nu!`,
		title: `Gratis Online Bomberman Geïnspireerd Spel`,
		options: {
			field: {
				title: `Speelveld`,
				help: `Grotere speelvelden ondersteunen meerdere spelers.`,
				data: {
					'9x9': `Klein Vierkant (9x9)`,
					'11x9': `Rechthoek (11x9)`,
					qrSquare: `QR Vierkant (11x11)`
				}
			},
			winCondition: {
				data: {
					[WinConditionType.lastStanding]: `Laatste overlevende (<b>0</b> levens) | Laatste overlevende (<b>1</b> leven) | Laatste overlevende (<b>{count}</b> levens)`,
					[WinConditionType.killCount]: `Eerste met <b>0</b> kills | Eerste met <b>1</b> kill | Eerste met <b>{count}</b> kills`,
					[WinConditionType.time]: `Meeste kills na <b>0</b> min. | Meeste kills na <b>1</b> min. | Meeste kills na <b>{count}</b> min.`
				}
			},
			defaultBombCount: {
				title: `Aantal Bommen`,
				help: `Dit is het aantal bommen dat een speler tegelijkertijd kan plaatsen.`
			},
			defaultBombSize: {
				title: `Bom Grootte`,
				help: `Dit is de ontploffingsstraal van een bom. De grootte wordt gemeten in tegels in elke richting.`
			},
			defaultSpeed: {
				title: `Speler Snelheid`,
				help: `De loopsnelheid waarmee iedereen begint.`
			},
			respawnDelay: {
				title: `Respawn Tijd`,
				help: `De tijd die de speler moet wachten nadat die gedood is voordat die weer kan spelen.`
			},
			bombPush: {
				title: `Bom Duwen`,
				help: `Indien ingeschakeld kun je tegen een bom aanlopen om deze te duwen in een bepaalde richting.`
			},
			explosionDelay: {
				title: `Explosievertraging`,
				help: `De vertraging voordat een geplaatste bom zal ontploffen.`
			},
			chainReaction: {
				title: `Kettingreactie`,
				help: `Indien geactiveerd, zal een explosie bommen binnen bereik doen ontploffen. De kills gaan naar de gebruiker die de bom plaatste die de kettingreactie in gang zette. Als deze optie is uitgeschakeld, zullen deze bommen in plaats daarvan worden verwijderd.`
			},
			cratePercentage: {
				title: `Kratten`,
				help: `Het percentage kratten dat op het speelveld te zien zal zijn. Kratten kunnen worden opgeblazen en kunnen powerups bevatten.`
			},
			powerUpPercentage: {
				title: `Power-ups`,
				help: `Wijzig hoe groot de kans is dat een power up wordt gedropt als een krat wordt vernietigd.`
			}
		},
		presets: {
			default: {
				title: `Standaard`,
				description: `9x9 speelveld — 3 levens — 4 spelers`
			},
			party: {
				title: `Party`,
				description: `QR speelveld — 6 levens — 8 spelers`
			},
			action: {
				title: `Action Packed`,
				description: `Geen kratten — Snelle respawn — 6 levens — 8 spelers`
			}
		},
		help: {}
	},
	[GameType.eightBallPool]: {
		name: `8-bal Poolbiljart `,
		tooltip: `Speel het populaire biljart spel hier tegen een bot of een andere speler.`,
		description: `Doe je best in online multiplayer pool! Tik al je ballen uit het veld en eindig met de 8-bal om het spel te winnen!`,
		title: `Gratis multiplayer spel voor 2 spelers`,
		options: {
			turnTime: {
				title: `Beurt Tijd`,
				help: `Hoe lang elke speler heeft om de cue-bal te raken.`
			},
			illegalBallPocket: {
				title: `Foutieve Bal Pot`
			},
			ruleContactRailOnBreak: {
				title: `Band Tijdens Breken`,
				help: `Tijdens het breken, bepaal hoeveel ballen minimaal de band moeten raken. Deze regel vervalt als een bal legaal gepot wordt.`,
				data: {
					one: `Eén bal`,
					two: `Twee ballen`,
					three: `Drie ballen`,
					four: `Vier ballen`
				}
			},
			assignedGroup: {
				title: `Toegewezen Groep`,
				help: `Bepaal hoe elke speler een groep krijgt toegewezen (effen of gestreept).`,
				data: {
					pocket: `Tijdens pot`,
					random: `Random bij start`
				}
			},
			ruleTurnCanHitBall: {
				title: `Mag Baltype Raken`,
				help: `Treedt op wanneer de speler een bal slaat die deze niet mag slaan. De regel geldt niet tijdens het breken.`,
				data: {
					assignedGroup: `Toegwezen groep`,
					assignedGroupPlus: `Toegewezen groep + 8-bal`,
					eitherGroup: `Beide groepen`,
					anyBall: `Elke bal`
				}
			},
			ruleTurnMustHitBall: {
				title: `Moet Bal Raken`,
				help: `Treedt op wanneer de speler geen bal slaat (van "Mag Baltype Raken") tijdens zijn beurt.`
			},
			ruleTurnContactRail: {
				title: `Moet Band Raken`,
				help: `Treedt op als geen enkele bal de band (rail) raakt. Deze regel is niet van toepassing als de speler een bal pot.`
			},
			ruleConsecutiveFouls: {
				title: `Meerdere Fouls`,
				help: `Bepaal wat er moet gebeuren als een speler meerdere fouls (overtredingen) achter elkaar maakt. Deze regel ontmoedigt onsportief gedrag.`,
				data: {
					off: `Uit`,
					loseOnTwo: `Verlies na twee`,
					loseOnThree: `Verlies na drie`,
					loseOnFour: `Verlies na vier`
				}
			},
			foul: {
				help: {
					disabled: `Foul is uitgeschakeld met de huidige instellingen.`
				},
				data: {
					nothing: `Niets`,
					keepTurn: `Behoudt beurt`,
					endTurn: `Beëindig beurt`,
					endTurnHand: `Beëindig beurt + Bal in hand`,
					reset: `Beëindig beurt + Herstel veld`,
					resetHand: `Beëindig beurt + Herstel veld + Bal in hand`,
					instantWin: `Onmiddellijke overwinning`,
					instantLoss: `Onmiddellijk verlies`
				}
			},
			foulPocketCueBall: {
				title: `Potten van cue-bal`,
				help: `Treedt op wanneer een speler de cue-bal pot.`
			},
			foulPocketOpponentBall: {
				title: `Potten bal van tegenpartij`,
				help: `Komt voor wanneer een speler de bal van de tegenstander pot. Andere overtredingen hebben voorrang (bv. eerst de verkeerde bal raken).`
			},
			foulPocketOwnAndOpponentBall: {
				title: `Potten eigen en bal van tegenpartij`,
				help: `Treedt op wanneer een speler zowel zijn eigen bal en een bal van de tegenstander pot. Andere overtredingen hebben voorrang (bv. eerst de verkeerde bal raken).`
			},
			foulIllegalEightBallBreak: {
				title: `Potten van 8-bal tijdens het breken`,
				help: `Treedt op wanneer een speler erin slaagt de 8-bal te potten tijdens het breken.`
			},
			foulIllegalEightBallPocket: {
				title: `Potten van 8-bal met foul`,
				help: `Treedt op wanneer een speler de 8-bal pot en tegelijkertijd een andere overtreding begaat (bijv. ook de cue-bal pot).`
			},
			foulIllegalEightBallPocketTooSoon: {
				title: `Te vroeg potten van 8-bal`,
				help: `Treedt op wanneer een speler de 8-bal pot terwijl hij nog andere objectballen moet potten.`
			}
		},
		presets: {
			default: {
				title: `Bloob.io Reglement`
			},
			wpa: {
				title: `WPA Reglement`,
				description: `Lijkt sterk op de regels van de World Pool-Billiard Association`
			},
			upa: {
				title: `UPA Reglement`,
				description: `Lijkt sterk op de regels van de US Professional Poolplayers Association`
			},
			relaxed: {
				title: `Ontspannen regels`,
				description: `Mildere straffen en minder regels`
			}
		},
		help: {
			field: {
				title: `Speelveld`,
				description: [
					`Het veld bevat 6 gaten waarin de ballen gepot kunnen worden. Er zijn in totaal 16 ballen, waarvan één de cue-bal is die je op jouw beurt raakt.`,
					`Er zijn 7x gestreepte en 7x effen ballen, alsmede één zwarte eight ball. Bij het begin van het spel liggen alle ballen in een driehoek met de eight ball in het midden. De cue-bal ligt op een afstand.`
				]
			},
			breaking: {
				title: `Het spel starten (Breken)`,
				description: [
					`Degene die als eerste aan de beurt is, mag de cue-bal rond bewegen en slaan in de richting van de driehoek van ballen (de startpositie).`,
					`Breken kent zijn eigen regels. De cue-bal mag niet gepot worden en minstens twee ballen (behalve de cue-bal) moeten een band raken (de muren rond het veld). Als je een bal tijdens het breken pot, krijg je meteen daarna weer een beurt.`
				]
			},
			gameplay: {
				title: `Gameplay`,
				description: [
					`Er zijn zowel gestreepte als effen ballen. Degene die als eerste een bal pot wordt dat type bal en krijgt nog een beurt. Vanaf dat moment mag je alleen nog maar gestreepte of effen ballen potten.`,
					`De volgorde waarin je jouw ballen in pot doet er niet toe. Als je een foul begaat mag je tegenstander de cue-bal verplaatsen voor hun beurt.`
				]
			},
			objective: {
				title: `Doel`,
				description: [
					`Je moet voorkomen dat je de zwarte eight ball pot! Dit mag pas als je al jouw ballen hebt gepot. Je eindigt het spel door de eight ball aan het einde te potten. Het is belangrijk dat je hierbij geen overtredingen begaat, anders verlies je.`,
					`Als je de eight ball te vroeg pot, verlies je onmiddellijk. Zorg er dus goed voor dat je zorgvuldig mikt!`
				]
			}
		}
	}
}
