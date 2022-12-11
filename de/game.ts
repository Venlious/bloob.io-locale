import { GameType, GenericType, CheckersKingType, WinConditionType } from '../types/index'
import { GameMessage } from '../types/game'

export default <GameMessage>{
	[GenericType.generic]: {
		description: `Eine Sammlung von Multiplayer-Browserspielen, für die man kein Konto erstellen muss. Spiele mühelos und passe das Spielerlebnis nach deinen Wünschen an.`,
		title: `Kostenlose Online-Multiplayer-Browserspiele`,
		options: {
			public: {
				title: `Sichtbarkeit`
			},
			maxUsers: {
				title: `Max. Spieler`,
				help: `Wie viele Spieler im Spiel erlaubt sind.`
			},
			botFill: {
				title: `Bot Fill`,
				// TODO: Add missing text to `botFill.help` "It will also result in a player being replaced by a bot if they leave early."
				help: `Wenn diese Option aktiviert ist, werden alle leeren Spielerplätze durch Bots besetzt.`
			},
			botDifficulty: {
				title: `Bot Schwierigkeitsgrad`,
				data: {
					easy: `Einfach`,
					normal: `Normal`,
					hard: `Schwierig`
				}
			},
			generic: {
				data: {
					required: null,
					notRequired: null
				}
			},
			winCondition: {
				title: `Siegbedingung`,
				help: `Bestimme, wann das Spiel enden soll. Dies ist mit der Einstellung "Gewinnzahl" verbunden.`
			},
			winAmount: {
				title: `Gewinnzahl`
			}
		},
		help: {},
		presets: {
			custom: {
				title: `Benutzerdefiniert`,
				description: `Von dir angepasste Einstellungen — Letzte Aktualisierung %{timestamp}`
			},
			default: {
				title: `Standard`
			}
		}
	},
	[GameType.wordrace]: {
		name: `Wortrennen`,
		tooltip: `Finde Wörter in beliebiger Richtung auf einem zufällig generierten Feld, während du gegen andere mit demselben Ziel antrittst.`,
		description: `Finde Wörter in beliebiger Richtung auf einem zufällig generierten Feld, während du gegen andere mit demselben Ziel antrittst.`,
		title: `Kostenloses Online-Wortsuchspiel`,
		options: {
			globalLanguage: {
				title: `Einheitliche Sprache`,
				help: {
					enabled: `<b>Aktiviert</b>: Alle suchen nach Wörtern in der von dir eingestellten Sprache.`,
					disabled: `<b>Deaktiviert</b>: Jeder Spieler wählt eine Sprache seiner Wahl.`
				}
			},
			language: {
				title: `Sprache`,
				help: {
					intro: `Die Sprache in der jeder Worte finden muss.`,
					globalLanguage: `Wenn <b>Einheitliche Sprache</b> deaktiviert ist, kann jeder Spieler selbst eine Sprache wählen.`
				}
			},
			sharedField: {
				title: `Gemeinsames Spielfeld`,
				help: `Alle sehen immer dasselbe Spielfeld. Wenn das Spielfeld geteilt wird, kann jeder sehen, welche Buchstaben beansprucht wurden. Diese Buchstaben können dann nicht mehr verwendet werden, was das Spiel zunehmend schwieriger macht.`
			},
			multiplier: {
				title: `Multiplikatoren`,
				help: `Multiplikatoren tauchen auf zufälligen Buchstaben auf und multiplizieren die Punkteanzahl eines gefundenen Wortes.`,
				data: {
					off: `Ausgeschaltet`,
					uncommon: `Selten (2.5%)`,
					common: `Häufig (5%)`,
					veryCommon: `Sehr häufig (10%)`,
					extreme: `Extrem (25%)`
				}
			},
			roundTotal: {
				title: `Runden`,
				help: `Jede Runde generiert ein neues Spielfeld.`
			},
			roundDuration: {
				title: `Rundendauer`,
				help: `Wie lange eine einzelne Runde dauert.`
			},
			roundIntermission: {
				title: `Pausenzeit`,
				help: `Wie lange die Zeit zwischen den Runden ist.`
			},
			minWordLength: {
				title: `Min. Wortlänge`,
				help: `Eine Wortauswahl muss mindestens diese Länge haben, um auf Gültigkeit geprüft zu werden.`
			},
			maxWordLength: {
				title: `Max. Wortlänge`,
				help: `Eine Wortauswahl darf diese Länge nicht überschreiten, damit sie auf ihre Gültigkeit geprüft werden kann.`
			},
			_wordLength: {
				title: `Wortlänge`,
				help: `Eine Wortauswahl muss zwischen diesen Längen liegen, um gültig zu sein.`,
				data: {
					between: `Zwischen %{min} und %{max}`
				}
			},
			field: {
				title: `Spielfeldformat`,
				help: {
					change: `Die Größe des Spielfelds. Größere Spielfelder machen es einfacher, mit mehreren Personen zu spielen.`,
					notice: `Bitte beachte, dass große Spielfelder möglicherweise nicht in das Browserfenster aller Spieler passen.`
				},
				data: {
					'10x8': `Klein (10x8)`,
					'13x10': `Mittel (13x10)`,
					'16x14': `Groß (16x14)`,
					'20x18': `Extrem (20x18)`
				}
			},
			_gameDuration: {
				title: `Spieldauer`
			}
		},
		presets: {
			largeGroup: {
				title: `Große Gruppe`,
				description: `Großes Spielfeld — Verschiedene Sprachen — Mehr Spieler`
			},
			blitz: {
				title: `Blitz`,
				description: `Viele kurze Runden — Viele Multiplikatoren`
			}
		},
		help: {
			find_word: {
				title: `Wortauswahl`,
				description: [
					`Halte die Maus auf einem Buchstaben gedrückt und ziehe in eine beliebige Richtung um ein Wort zu bilden.`,
					`Sobald du die Maus loslässt, wird das Wort verarbeitet und du erhältst Punkte, die von der Länge des Wortes abhängen.`
				]
			},
			gameplay: {
				title: `Spielverlauf`,
				description: [
					`Jeder versucht gleichzeitig so viele Wörter zu finden wie möglich, schließlich ist es ein Rennen. Buchstaben können nur einmal verwendet werden.`,
					`Manchmal ist es von Vorteil, viele kurze Wörter zu markieren, anstatt sich die Zeit zu nehmen um nach längeren Wörtern zu suchen.`
				]
			},
			multiplier: {
				title: `Multiplikatoren`,
				description: [
					`Wenn eingeschaltet, werden Multiplikatoren auf zufälligen Buchstaben auf dem Spielfeld angezeigt und multiplizieren die Punkteanzahl der gefundenen Wörter!`,
					`Multiplikatoren vervielfältigen sich gegenseitig. Ein Wort mit den Multiplikatoren <b>x2</b> und <b>x3</b> würde einen Gesamtmultiplikator von <b>x5</b> ergeben!`
				]
			},
			language: {
				title: `Sprache`,
				description: [
					`Der Gastgeber kann entscheiden, ob alle in der gleichen Sprache oder in einer Sprache seiner Wahl spielen.`,
					`Wörter sind nur in deiner Sprache gültig und alle Akzente werden ignoriert.`
				]
			}
		}
	},
	[GameType.fourInARow]: {
		name: `Vier gewinnt`,
		tooltip: `Spiele Vier gewinnt mit bis zu sechs Spielern entweder im klassischen Spielmodus oder in den verfügbaren Varianten.`,
		description: `Spiele Vier gewinnt mit bis zu sechs Spielern entweder im klassischen Spielmodus oder in den verfügbaren Varianten.`,
		title: `Kostenloses Multiplayer-Spiel für 2-6 Spieler`,
		options: {
			field: {
				title: `Spielfeldgröße`,
				help: `Die Größe des Spielfeldes.`,
				data: {
					'7x6': `Standard (7x6)`,
					'9x4': `Gestreckt (9x4)`,
					'9x6': `Groß (9x6)`,
					'13x8': `Sehr Groß (13x8)`,
					'17x10': `Extrem (17x10)`
				}
			},
			turnTime: {
				title: `Zugzeit`,
				help: `Wie viel Zeit ein Spieler für seinen Zug hat.`
			},
			piecesInRow: {
				title: `Siegbedingung`,
				help: `Wie viele Steine in einer Reihe sein müssen um das Spiel zu gewinnen.`,
				data: {
					'3': `Drei gewinnt (3)`,
					'4': `Vier gewinnt (4)`,
					'5': `Fünf gewinnt (5)`,
					'6': `Sechs gewinnt (6)`
				}
			},
			sideColumns: {
				title: `Randspalten`,
				help: `Fügt eine Spalte mit Steinen in abwechselnden Farben auf beiden Seiten hinzu.`
			},
			flip: {
				title: `Spielfelddrehung`,
				help: `Macht das Spiel interessanter indem die Steine umgedreht werden. Ein Zähler zeigt die Anzahl der Züge bis zur nächsten Drehung an.`,
				data: {
					everyTurn: `Nach jedem Zug`,
					countTurns: `Alle %{count} Züge`
				}
			},
			turnsUntilFlip: {
				title: `Züge pro Drehung`,
				help: `Das Setzen eines Spielsteines zählt als Zug. Das legt fest, wie viele Spielsteine gesetzt werden müssen, bis das Spielfeld gedreht wird.`
			},
			tetrisMode: {
				title: `Tetris-Modus`,
				help: `Wenn aktiviert, verschwinden die Spielsteine einer Reihe sobald diese voll ist und alle anderen rutschen nach. Das macht ein Unentschieden unmöglich.`
			}
		},
		presets: {
			fiveInARow: {
				title: `Fünf gewinnt`,
				description: `Randspalten — Großes Spielfeld`
			},
			tetris: {
				title: `Tetris`,
				description: `Entfernt volle Reihen automatisch`
			},
			flipParty: {
				title: `Flip Party`,
				description: `Dreht das Spielfeld alle 12 Züge — Sehr großes Spielfeld`
			}
		},
		help: {
			placement: {
				title: `Platzierung der Spielsteine`,
				description: [
					`Spielsteine können auf mehrere Arten gesetzt werden. Fahre mit der Maus über eine Spalte und klicke, nutze die Tastatur, oder ziehe sie mit der Maus umher.`,
					`Du kannst sehen, auf welcher Spalte sich der Gegner gerade befindet. Behalte dies im Kopf und nutze es zu deinem Vorteil.`
				]
			},
			win: {
				title: `Spielende`,
				description: [
					`Standardmäßig gewinnt die erste Person mit vier Spielsteinen in einer Reihe das Spiel. Reihen können waagrecht, senkrecht und diagonal gebildet werden.`,
					`Der Spielleiter kann die Siegbedingung einstellen und verschiedene Bedingungen zulassen.`
				]
			}
		}
	},
	[GameType.rottenApples]: {
		name: `Rotten Apples`,
		tooltip: `Spiele einen Cards Against Humanity-Klon und passe das Spielerlebnis nach deinen Wünschen an.`,
		description: `Spiele einen Cards Against Humanity-Klon und passe das Spielerlebnis nach deinen Wünschen an.`,
		title: `Gratis Online Cards Against Humanity Spiel`,
		options: {
			winCondition: {
				data: {
					first: `Erster mit <b>0</b> Punkten | Erster mit <b>1</b> Punkt | Erster mit <b>{count}</b> Punkten`,
					most: `Meiste Punkte nach <b>0</b> Runden | Meiste Punkte nach <b>1</b> Runde | Meiste Punkte nach <b>{count}</b> Runden`
				}
			},
			handSize: {
				title: `Karten auf der Hand`,
				help: `Die Anzahl der Antwortkarten, die jeder zu einem bestimmten Zeitpunkt auf der Hand hat.`
			},
			judgeSystem: {
				title: `Abstimmungssystem`,
				help: `Entweder gibt es einen einzigen Bewerter, oder jeder darf entscheiden, wer in jeder Runde die besten Karten gespielt hat.`,
				data: {
					single: `Neuer Bewerter jede Runde`,
					everyone: `Jeder stimmt ab`
				}
			},
			pickBlackCard: {
				title: `Aktionskarte auswählen`,
				help: `Wenn aktiviert, kann der Bewerter zwischen drei zufälligen Aktionskarten wählen.`
			},
			handPreview: {
				title: `Hand Vorschau`,
				help: `Wenn aktiviert, wird zu Beginn des Spiels und nach jeder Runde eine Zeitspanne hinzugefügt, während dieser jeder Spieler seine Karten auf der Hand sehen kann.`
			},
			dumpRound: {
				title: `Abwurfrunde`,
				help: `In einer Abwurfrunde darf jeder eine Karte auf der Hand wählen, die er ablegen möchte. Am Ende der Runde erhält jeder neue Antwortkarten, um sie zu ersetzen.`,
				data: {
					disabled: `Deaktiviert`,
					round: `Alle <b>0</b> Runden | Alle <b>1</b> Runden | Alle <b>{count}</b> Runden`
				}
			},
			dumpRoundAmount: {
				title: `Anzahl der Abwurfrunden`
			},
			showNsfw: {
				title: `NSFW Karten`,
				help: `Karten mit Sex oder Flüchen.`
			},
			showSpecific: {
				title: `Spezifische Karten`,
				help: `Karten mit Marken, schwierigen Wörtern oder Personen.`
			},
			_filter: {
				title: `Filter`,
				help: `Aktive Filter sorgen dafür, dass Karten, die die folgenden Kriterien erfüllen, ausgelassen werden:`
			},
			timePicking: {
				title: `Auswählzeit Aktionskarten`,
				help: `Legt fest, wie viel Zeit jeder hat, um eine Aktionskarte für diese Runde zu wählen.`
			},
			responseCardLimit: {
				title: `Antwortkarten Limit`,
				help: `Standardmäßig kannst du mit den Aktionskarten maximal 3 Antwortkarten ziehen. Durch die Änderung dieses Limits werden Aktionskarten, die über diesem Limit liegen, aus dem Spiel herausgefiltert.`
			},
			timeDeciding: {
				title: `Auswahlzeit (pro Karte)`,
				help: {
					intro: `Lege fest, wie lange jeder für die Auswahl seiner Antwortkarte(n) Zeit hat.`,
					calc: `Die Gesamtzeit berechnet sich durch <b>ANTWORTKARTEN * DIESE ZEIT</b>`
				}
			},
			timeVoting: {
				title: `Abstimmungszeit (pro Karte)`,
				help: {
					intro: `Lege fest, wie lange alle für die Wahl der Gewinnerkarte Zeit haben.`,
					calc: `Die Gesamtzeit berechnet sich durch <b>ANTWORTKARTEN * SPIELER * DIESE ZEIT</b>`
				}
			},
			timeReveal: {
				title: `Zeit für die Offenlegung der Stimme (pro Karte)`,
				help: {
					intro: `Lege fest, wie lange jeder die Gewinnerauswahl sehen kann.`,
					calc: `Die Gesamtzeit berechnet sich durch <b>ANTWORTKARTEN * DIESE ZEIT</b>`
				}
			},
			timeHandPreview: {
				title: `Handvorschauzeit (pro Karte)`,
				help: {
					intro: `Lege fest, wie lange zu Beginn eines Spiels oder nach einer Abwurfrunde jeder seine (neuen) Karten ansehen darf.`,
					calc: `Die Gesamtzeit berechnet sich durch <b>3 SEKUNDEN + KARTEN AUF DER HAND * DIESE ZEIT</b>`
				}
			},
			timeDumpRound: {
				title: `Abwurfrundenzeit (pro Karte)`,
				help: {
					intro: `Lege fest, wie viel Zeit jeder hat, um die Karten auszuwählen, die er wegwerfen möchte.`,
					calc: `Die Gesamtzeit berechnet sich durch <b>3 SEKUNDEN + KARTEN AUF DER HAND * DIESE ZEIT</b>`
				}
			}
		},
		presets: {
			democracy: {
				title: `Demokratie`,
				description: `Jeder darf abstimmen`
			}
		},
		help: {
			action: {
				title: `Aktionskarte`,
				description: [
					`In jeder Runde wird eine neue schwarze Aktionskarte mit Leerstellen (___) aufgedeckt, die von den Spielern auszufüllen sind.`,
					`Die Lücken werden mit den weißen Antwortkarten auf der Hand ausgefüllt. Wenn alle Spieler fertig sind, wählt der Bewerter seine Lieblingsantwort aus.`
				]
			},
			move: {
				title: `Antwortkarten`,
				description: [
					`Dein Blatt zeigt dir deine Antwortkarten. Du kannst diese auf die verfügbaren Plätze ziehen oder anklicken, um sie auszuwählen.`,
					`Nach jeder Runde werden die Karten, die du für deine Auswahl verwendet hast, gegen neue ausgetauscht.`
				]
			},
			vote: {
				title: `Abstimmung`,
				description: [
					`Die Stimmabgabe erfolgt entweder durch einen einzelnen Bewerter oder durch alle. Dies hängt davon ab, wie der Gastgeber das Spiel konfiguriert hat.`,
					`Am Ende jeder Runde können die Bewerter für ihre Lieblingsantwort stimmen. Der Gewinner erhält einen Punkt.`
				]
			},
			sets: {
				title: `Kartensets`,
				description: [
					`Bevor das Spiel beginnt, kann der Gastgeber aus vielen verfügbaren Sets auswählen oder eigene Sets importieren.`,
					`Benutzerdefinierte Kartensets können importiert und in deinem Konto gespeichert werden, damit du sie später problemlos wieder verwenden kannst.`
				]
			}
		}
	},
	[GameType.checkers]: {
		name: `Dame`,
		tooltip: `Spiele hier Dame mit bis zu 4 Spielern und einer Vielzahl von anpassbaren Regeln.`,
		description: `Spiele hier Dame mit bis zu 4 Spielern und einer Vielzahl von anpassbaren Regeln.`,
		title: `Kostenloses Online-Dame-Spiel für 2-4 Spieler`,
		options: {
			forceTake: {
				title: `Schlagen erzwingen`,
				help: {
					enabled: `<b>Aktiviert</b>: Wenn möglich, ist der Spieler gezwungen, eine gegnerische Figur zu schlagen.`,
					disabled: `<b>Deaktiviert</b>: Der Spieler darf den nächsten Zug bestimmen, auch wenn er dabei eine gegnerische Figur schlagen kann.`
				}
			},
			field: {
				title: `Spielfeld`,
				help: `Das verwendete Spielfeld. Je nach Größe des Feldes und der Anzahl der Reihen erhalten Sie mehr oder weniger Startspieler. Einige Felder können bis zu vier Spieler aufnehmen.`,
				data: {
					'8x8': `Englisch (8x8)`,
					'10x10': `International (10x10)`,
					'12x12': `Kanadisch (12x12)`,
					plus: `Plus Form (12x12)`
				}
			},
			winCondition: {
				help: `Wie der Gewinner bestimmt wird.`,
				data: {
					[WinConditionType.morePieces]: `Meiste Spielsteine`,
					[WinConditionType.oppositeSide]: `Erreichen der anderen Seite`
				}
			},
			kingCondition: {
				title: `Krönungsbedingung`,
				help: `Unter welchen Bedingungen ein Spielstein gekrönt wird. Ein gekrönter Spielstein darf sich in jede Richtung bewegen.`,
				data: {
					[CheckersKingType.oppositeSide]: `Erreichen der anderen Seite`,
					[CheckersKingType.take]: `Schlagen eines Spielsteins`,
					[CheckersKingType.all]: `Jeder Spielstein ist gekrönt`,
					[CheckersKingType.none]: `Deaktiviert`
				}
			},
			backwardsTake: {
				title: `Rückwärts Schlagen`,
				help: `Lege fest, ob Spielsteine die gegnerischen Spielsteine rückwärts schlagen dürfen. Wenn diese Funktion deaktiviert ist, kann sie nur von gekrönten Spielsteinen genutzt werden.`
			},
			chainTake: {
				title: `Kettenschlagen`,
				help: `Wenn diese Funktion aktiviert ist, kann ein Spielstein mehrere andere Spielsteine in einem Zug schlagen, vorausgesetzt, sie befinden sich in der richtigen Entfernung zueinander. Wenn diese Funktion deaktiviert ist, kann jeweils nur ein Spielstein geschlagen werden.`
			},
			turnTime: {
				title: `Zugzeit`,
				help: `Die maximale Zeit, die jeder Spieler für einen Zug benötigen kann.`
			},
			staleCount: {
				title: `Unentschieden`,
				help: `Nach wie vielen Runden ohne Schlagen das Spiel als unentschieden betrachtet und beendet werden soll.`
			},
			stuckThreshold: {
				title: `Toleranz bei Feststeckung`,
				help: `Wenn ein Spieler diese Anzahl von Zügen hintereinander nicht weiterkommt und keine Spielsteine bewegen kann, verliert er automatisch.`
			},
			autoTurnThreshold: {
				title: `Toleranz bei zu spätem Ziehen`,
				help: `Wenn ein Spieler zu spät dran ist und ein Zug automatisch für ihn gemacht wird, verliert er automatisch, wenn er so viele Züge hintereinander macht.`
			},
			rows: {
				title: `Reihen`,
				help: `Wie viele Reihen von Spielsteinen jeder Spieler zu Beginn hat. Die Anzahl der Reihen hängt von der Feldgröße ab.`
			}
		},
		presets: {
			default: {
				title: `Englisches Dame (Standard)`,
				description: `8x8 Feld — 24 Spielsteine`
			},
			international: {
				title: `Internationales Dame`,
				description: `10x10 Feld — 40 Spielsteine — Rückwärts schlagen`
			},
			canadian: {
				title: `Kanadisches Dame`,
				description: `12x12 Feld — 60 Spielsteine — Rückwärts schlagen`
			},
			party: {
				title: `Party Dame`,
				description: `Plus Feld — 36 Spielsteine — 4 Spieler`
			}
		},
		help: {
			movement: {
				title: `Bewegen der Spielsteine`,
				description: [
					`Spielsteine können diagonal bewegt werden. Wenn du an der Reihe bist, werden alle Steine, die du bewegen kannst, hervorgehoben.`,
					`Durch Klicken auf einen markierten Spielstein kannst du alle möglichen Züge für diesen Spielstein sehen.`
				]
			},
			take: {
				title: `Spielsteine schlagen`,
				description: [
					`Wenn ein gegnerischer Spielstein diagonal neben deinem Spielstein steht und sich dahinter ein freies Feld befindet, kannst du ihn schlagen.`,
					`Je nach Einstellung musst du entweder Spielsteine schlagen, wenn dies möglich ist, oder kannst sogar rückwärts schlagen.`
				]
			},
			king: {
				title: `Gekrönte Spielsteine`,
				description: [
					`In der Standardeinstellung wird ein Spielstein zum König, wenn er die gegenüberliegende Seite erreicht.`,
					`Gekrönte Spielsteine können in alle diagonalen Richtungen ziehen, ohne gezwungen zu sein, vorwärts zu ziehen.`
				]
			},
			goal: {
				title: `Spielziel`,
				description: [
					`Standardmäßig ist das Ziel, alle anderen Figuren des Gegners auszuschalten oder bis keine gültigen Züge mehr gemacht werden können.`,
					`Das Ziel des Spiels, auch als Siegbedingung bezeichnet, kann in den Einstellungen geändert werden.`
				]
			}
		}
	},
	[GameType.blomber]: {
		name: `Blomber`,
		tooltip: `Jage deine Gegner in einem intensiven Schlachtfeld voller Power-Ups in die Luft.`,
		description: `Jage deine Gegner in einem intensiven Schlachtfeld voller Power-Ups in die Luft.`,
		title: `Kostenloses von Bomberman inspiriertes Online-Spiel`,
		options: {
			field: {
				title: `Spielfeld`,
				help: `Größere Spielfelder unterstützen mehrere Spieler.`,
				data: {
					'9x9': `Kleines Quadrat (9x9)`,
					'11x9': `Rechteck (11x9)`,
					qrSquare: `QR Quadrat (11x11)`
				}
			},
			winCondition: {
				data: {
					[WinConditionType.lastStanding]: `Letzter Überlebender (<b>0</b> Leben) | Letzter Überlebender (<b>1</b> Leben) | Letzter Überlebender (<b>{count}</b> Leben)`,
					[WinConditionType.killCount]: `Erster mit <b>0</b> Kills | Erster mit <b>1</b> Kill | Erster mit <b>{count}</b> Kills`,
					[WinConditionType.time]: `Die meisten Kills nach <b>0</b> min. | Die meisten Kills nach <b>1</b> min. | Die meisten Kills nach <b>{count}</b> min.`
				}
			},
			defaultBombCount: {
				title: `Bombenanzahl`,
				help: `Die Anzahl der Bomben, die ein Spieler gleichzeitig platzieren kann.`
			},
			defaultBombSize: {
				title: `Bombengröße`,
				help: `Der Explosionsradius einer Bombe. Die Größe wird in Kacheln in jeder Richtung gemessen.`
			},
			defaultSpeed: {
				title: `Spielergeschwindigkeit`,
				help: `Die Laufgeschwindigkeit der Spieler.`
			},
			respawnDelay: {
				title: `Wiederbelebungszeit`,
				help: `Die Zeit, die der Spieler nach dem Töten warten muss, bevor er wieder spielen kann.`
			},
			bombPush: {
				title: `Bombenschieben`,
				help: `Wenn aktiviert, kannst du auf eine Bombe zugehen, um sie anzustoßen und in eine bestimmte Richtung zu schieben.`
			},
			explosionDelay: {
				title: `Explosionsverzögerung`,
				help: `Die Verzögerung, bevor eine platzierte Bombe explodiert.`
			},
			chainReaction: {
				title: `Kettenreaktion`,
				help: `Wenn diese Funktion aktiviert ist, löst eine Explosion Bomben in Reichweite aus, die ebenfalls explodieren. Die Kills gehen an den Spieler, der die Bombe platziert hat, die die Kettenreaktion ausgelöst hat. Wenn deaktiviert, werden diese Bomben stattdessen entfernt.`
			},
			cratePercentage: {
				title: `Kisten`,
				help: `Der Prozentsatz der Kisten, die auf dem Spielfeld angezeigt werden. Kisten können gesprengt werden und können Powerups enthalten.`
			},
			powerUpPercentage: {
				title: `Power-up`,
				help: `Wie wahrscheinlich es ist, dass ein Power-Up beim Zerstören einer Kiste fallen gelassen wird.`
			}
		},
		help: {},
		presets: {
			default: {
				title: `Standard`,
				description: `9x9 Feld — 3 Leben — 4 Spieler`
			},
			party: {
				title: `Party`,
				description: `QR Square Feld — 6 Leben — 8 Spieler`
			},
			action: {
				title: `Actionreich`,
				description: `Keine Kisten — Schneller Respawn — 6 Leben — 8 Spieler`
			}
		}
	},
	[GameType.eightBallPool]: {
		name: null,
		tooltip: null,
		description: null,
		title: null,
		options: {
			turnTime: {
				title: null,
				help: null
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
