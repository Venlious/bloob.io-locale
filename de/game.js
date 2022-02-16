import GAME_TYPE from '../../../assets/enums/game-type'
import CHECKERS_KING_TYPE from '../../../assets/enums/checkers-king-type'
import WIN_CONDITION from '../../../assets/enums/win-condition'

export default {
	generic: {
		description: `Eine Sammlung von Multiplayer-Browserspielen, für die man kein Konto erstellen muss. Spiele mühelos und passe das Spielerlebnis nach deinen Wünschen an.`,
		title: `Kostenlose Online-Multiplayer-Browserspiele`,
		options: {
			public: {
				name: `Sichtbarkeit`
			},
			maxUsers: {
				name: `Max. Spieler`,
				help: `Wie viele Spieler im Spiel erlaubt sind.`
			},
			botFill: {
				name: `Bot Fill`,
				help: `Wenn diese Option aktiviert ist, werden alle leeren Spielerplätze durch Bots besetzt.`
			},
			botDifficulty: {
				name: `Bot Schwierigkeitsgrad`,
				data: {
					easy: `Einfach`,
					normal: `Normal`,
					hard: `Schwierig`
				}
			},
			winCondition: {
				name: `Siegbedingung`,
				help: `Bestimme, wann das Spiel enden soll. Dies ist mit der Einstellung "Gewinnzahl" verbunden.`
			},
			winAmount: {
				name: `Gewinnzahl`
			}
		},
		presets: {
			custom: {
				name: `Benutzerdefiniert`,
				desc: `Von dir angepasste Einstellungen — Letzte Aktualisierung %{timestamp}`
			},
			default: {
				name: `Standard`
			}
		}
	},
	[GAME_TYPE.WORDRACE]: {
		name: `Wortrennen`,
		tooltip: `Finde Wörter in beliebiger Richtung auf einem zufällig generierten Feld, während du gegen andere mit demselben Ziel antrittst.`,
		description: `Finde Wörter in beliebiger Richtung auf einem zufällig generierten Feld, während du gegen andere mit demselben Ziel antrittst.`,
		title: `Kostenloses Online-Wortsuchspiel`,
		options: {
			globalLanguage: {
				name: `Einheitliche Sprache`,
				help: {
					enabled: `<b>Aktiviert</b>: Alle suchen nach Wörtern in der von dir eingestellten Sprache.`,
					disabled: `<b>Deaktiviert</b>: Jeder Spieler wählt eine Sprache seiner Wahl.`
				}
			},
			language: {
				name: `Sprache`,
				help: {
					intro: `Die Sprache in der jeder Worte finden muss.`,
					globalLanguage: `Wenn <b>Einheitliche Sprache</b> deaktiviert ist, kann jeder Spieler selbst eine Sprache wählen.`
				}
			},
			sharedField: {
				name: `Gemeinsames Spielfeld`,
				help: `Alle sehen immer dasselbe Spielfeld. Wenn das Spielfeld geteilt wird, kann jeder sehen, welche Buchstaben beansprucht wurden. Diese Buchstaben können dann nicht mehr verwendet werden, was das Spiel zunehmend schwieriger macht.`
			},
			multiplier: {
				name: `Multiplikatoren`,
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
				name: `Runden`,
				help: `Jede Runde generiert ein neues Spielfeld.`
			},
			roundDuration: {
				name: `Rundendauer`,
				help: `Wie lange eine einzelne Runde dauert.`
			},
			roundIntermission: {
				name: `Pausenzeit`,
				help: `Wie lange die Zeit zwischen den Runden ist.`
			},
			minWordLength: {
				name: `Min. Wortlänge`,
				help: `Eine Wortauswahl muss mindestens diese Länge haben, um auf Gültigkeit geprüft zu werden.`
			},
			maxWordLength: {
				name: `Max. Wortlänge`,
				help: `Eine Wortauswahl darf diese Länge nicht überschreiten, damit sie auf ihre Gültigkeit geprüft werden kann.`
			},
			_wordLength: {
				name: `Wortlänge`,
				help: `Eine Wortauswahl muss zwischen diesen Längen liegen, um gültig zu sein.`,
				between: `Zwischen %{min} und %{max}`
			},
			field: {
				name: `Spielfeldformat`,
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
				name: `Spieldauer`
			}
		},
		presets: {
			largeGroup: {
				name: `Große Gruppe`,
				desc: `Großes Spielfeld — Verschiedene Sprachen — Mehr Spieler`
			},
			blitz: {
				name: `Blitz`,
				desc: `Viele kurze Runden — Viele Multiplikatoren`
			}
		},
		help: {
			find_word: {
				title: `Wortauswahl`,
				desc: {
					'1': `Halte die Maus auf einem Buchstaben gedrückt und ziehe in eine beliebige Richtung um ein Wort zu bilden.`,
					'2': `Sobald du die Maus loslässt, wird das Wort verarbeitet und du erhältst Punkte, die von der Länge des Wortes abhängen.`
				}
			},
			gameplay: {
				title: `Spielverlauf`,
				desc: {
					'1': `Jeder versucht gleichzeitig so viele Wörter zu finden wie möglich, schließlich ist es ein Rennen. Buchstaben können nur einmal verwendet werden.`,
					'2': `Manchmal ist es von Vorteil, viele kurze Wörter zu markieren, anstatt sich die Zeit zu nehmen um nach längeren Wörtern zu suchen.`
				}
			},
			multiplier: {
				title: `Multiplikatoren`,
				desc: {
					'1': `Wenn eingeschaltet, werden Multiplikatoren auf zufälligen Buchstaben auf dem Spielfeld angezeigt und multiplizieren die Punkteanzahl der gefundenen Wörter!`,
					'2': `Multiplikatoren vervielfältigen sich gegenseitig. Ein Wort mit den Multiplikatoren <b>x2</b> und <b>x3</b> würde einen Gesamtmultiplikator von <b>x5</b> ergeben!`
				}
			},
			language: {
				title: `Sprache`,
				desc: {
					'1': `Der Gastgeber kann entscheiden, ob alle in der gleichen Sprache oder in einer Sprache seiner Wahl spielen.`,
					'2': `Wörter sind nur in deiner Sprache gültig und alle Akzente werden ignoriert.`
				}
			}
		}
	},
	[GAME_TYPE.FOUR_IN_A_ROW]: {
		name: `Vier gewinnt`,
		tooltip: `Spiele Vier gewinnt mit bis zu sechs Spielern entweder im klassischen Spielmodus oder in den verfügbaren Varianten.`,
		description: `Spiele Vier gewinnt mit bis zu sechs Spielern entweder im klassischen Spielmodus oder in den verfügbaren Varianten.`,
		title: `Kostenloses Multiplayer-Spiel für 2-6 Spieler`,
		options: {
			field: {
				name: `Spielfeldgröße`,
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
				name: `Zugzeit`,
				help: `Wie viel Zeit ein Spieler für seinen Zug hat.`
			},
			piecesInRow: {
				name: `Siegbedingung`,
				help: `Wie viele Steine in einer Reihe sein müssen um das Spiel zu gewinnen.`,
				data: {
					'3': `Drei gewinnt (3)`,
					'4': `Vier gewinnt (4)`,
					'5': `Fünf gewinnt (5)`,
					'6': `Sechs gewinnt (6)`
				}
			},
			sideColumns: {
				name: `Randspalten`,
				help: `Fügt eine Spalte mit Steinen in abwechselnden Farben auf beiden Seiten hinzu.`
			},
			flip: {
				name: `Spielfelddrehung`,
				help: `Macht das Spiel interessanter indem die Steine umgedreht werden. Ein Zähler zeigt die Anzahl der Züge bis zur nächsten Drehung an.`,
				data: {
					everyTurn: `Nach jedem Zug`,
					countTurns: `Alle %{count} Züge`
				}
			},
			turnsUntilFlip: {
				name: `Züge pro Drehung`,
				help: `Das Setzen eines Spielsteines zählt als Zug. Das legt fest, wie viele Spielsteine gesetzt werden müssen, bis das Spielfeld gedreht wird.`
			},
			tetrisMode: {
				name: `Tetris-Modus`,
				help: `Wenn aktiviert, verschwinden die Spielsteine einer Reihe sobald diese voll ist und alle anderen rutschen nach. Das macht ein Unentschieden unmöglich.`
			}
		},
		presets: {
			fiveInARow: {
				name: `Fünf gewinnt`,
				desc: `Randspalten — Großes Spielfeld`
			},
			tetris: {
				name: `Tetris`,
				desc: `Entfernt volle Reihen automatisch`
			},
			flipParty: {
				name: `Flip Party`,
				desc: `Dreht das Spielfeld alle 12 Züge — Sehr großes Spielfeld`
			}
		},
		help: {
			placement: {
				title: `Platzierung der Spielsteine`,
				desc: {
					'1': `Spielsteine können auf mehrere Arten gesetzt werden. Fahre mit der Maus über eine Spalte und klicke, nutze die Tastatur, oder ziehe sie mit der Maus umher.`,
					'2': `Du kannst sehen, auf welcher Spalte sich der Gegner gerade befindet. Behalte dies im Kopf und nutze es zu deinem Vorteil.`
				}
			},
			win: {
				title: `Spielende`,
				desc: {
					'1': `Standardmäßig gewinnt die erste Person mit vier Spielsteinen in einer Reihe das Spiel. Reihen können waagrecht, senkrecht und diagonal gebildet werden.`,
					'2': `Der Spielleiter kann die Siegbedingung einstellen und verschiedene Bedingungen zulassen.`
				}
			}
		}
	},
	[GAME_TYPE.ROTTEN_APPLES]: {
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
				name: `Karten auf der Hand`,
				help: `Die Anzahl der Antwortkarten, die jeder zu einem bestimmten Zeitpunkt auf der Hand hat.`
			},
			judgeSystem: {
				name: `Abstimmungssystem`,
				help: `Entweder gibt es einen einzigen Bewerter, oder jeder darf entscheiden, wer in jeder Runde die besten Karten gespielt hat.`,
				data: {
					single: `Neuer Bewerter jede Runde`,
					everyone: `Jeder stimmt ab`
				}
			},
			pickBlackCard: {
				name: `Aktionskarte auswählen`,
				help: `Wenn aktiviert, kann der Bewerter zwischen drei zufälligen Aktionskarten wählen.`
			},
			handPreview: {
				name: `Hand Vorschau`,
				help: `Wenn aktiviert, wird zu Beginn des Spiels und nach jeder Runde eine Zeitspanne hinzugefügt, während dieser jeder Spieler seine Karten auf der Hand sehen kann.`
			},
			dumpRound: {
				name: `Abwurfrunde`,
				help: `In einer Abwurfrunde darf jeder eine Karte auf der Hand wählen, die er ablegen möchte. Am Ende der Runde erhält jeder neue Antwortkarten, um sie zu ersetzen.`,
				data: {
					disabled: `Deaktiviert`,
					round: `Alle <b>0</b> Runden | Alle <b>1</b> Runden | Alle <b>{count}</b> Runden`
				}
			},
			dumpRoundAmount: {
				name: `Anzahl der Abwurfrunden`
			},
			showNsfw: {
				name: `NSFW Karten`,
				help: `Karten mit Sex oder Flüchen.`
			},
			showSpecific: {
				name: `Spezifische Karten`,
				help: `Karten mit Marken, schwierigen Wörtern oder Personen.`
			},
			_filter: {
				name: `Filter`,
				help: `Aktive Filter sorgen dafür, dass Karten, die die folgenden Kriterien erfüllen, ausgelassen werden:`
			},
			timePicking: {
				name: `Auswählzeit Aktionskarten`,
				help: `Legt fest, wie viel Zeit jeder hat, um eine Aktionskarte für diese Runde zu wählen.`
			},
			responseCardLimit: {
				name: `Antwortkarten Limit`,
				help: `Standardmäßig kannst du mit den Aktionskarten maximal 3 Antwortkarten ziehen. Durch die Änderung dieses Limits werden Aktionskarten, die über diesem Limit liegen, aus dem Spiel herausgefiltert.`
			},
			timeDeciding: {
				name: `Auswahlzeit (pro Karte)`,
				help: {
					intro: `Lege fest, wie lange jeder für die Auswahl seiner Antwortkarte(n) Zeit hat.`,
					calc: `Die Gesamtzeit berechnet sich durch <b>ANTWORTKARTEN * DIESE ZEIT</b>`
				}
			},
			timeVoting: {
				name: `Abstimmungszeit (pro Karte)`,
				help: {
					intro: `Lege fest, wie lange alle für die Wahl der Gewinnerkarte Zeit haben.`,
					calc: `Die Gesamtzeit berechnet sich durch <b>ANTWORTKARTEN * SPIELER * DIESE ZEIT</b>`
				}
			},
			timeReveal: {
				name: `Zeit für die Offenlegung der Stimme (pro Karte)`,
				help: {
					intro: `Lege fest, wie lange jeder die Gewinnerauswahl sehen kann.`,
					calc: `Die Gesamtzeit berechnet sich durch <b>ANTWORTKARTEN * DIESE ZEIT</b>`
				}
			},
			timeHandPreview: {
				name: `Handvorschauzeit (pro Karte)`,
				help: {
					intro: `Lege fest, wie lange zu Beginn eines Spiels oder nach einer Abwurfrunde jeder seine (neuen) Karten ansehen darf.`,
					calc: `Die Gesamtzeit berechnet sich durch <b>3 SEKUNDEN + KARTEN AUF DER HAND * DIESE ZEIT</b>`
				}
			},
			timeDumpRound: {
				name: `Abwurfrundenzeit (pro Karte)`,
				help: {
					intro: `Lege fest, wie viel Zeit jeder hat, um die Karten auszuwählen, die er wegwerfen möchte.`,
					calc: `Die Gesamtzeit berechnet sich durch <b>3 SEKUNDEN + KARTEN AUF DER HAND * DIESE ZEIT</b>`
				}
			}
		},
		presets: {
			democracy: {
				name: `Demokratie`,
				desc: `Jeder darf abstimmen`
			}
		},
		help: {
			action: {
				title: `Aktionskarte`,
				desc: {
					'1': `In jeder Runde wird eine neue schwarze Aktionskarte mit Leerstellen (___) aufgedeckt, die von den Spielern auszufüllen sind.`,
					'2': `Die Lücken werden mit den weißen Antwortkarten auf der Hand ausgefüllt. Wenn alle Spieler fertig sind, wählt der Bewerter seine Lieblingsantwort aus.`
				}
			},
			move: {
				title: `Antwortkarten`,
				desc: {
					'1': `Dein Blatt zeigt dir deine Antwortkarten. Du kannst diese auf die verfügbaren Plätze ziehen oder anklicken, um sie auszuwählen.`,
					'2': `Nach jeder Runde werden die Karten, die du für deine Auswahl verwendet hast, gegen neue ausgetauscht.`
				}
			},
			vote: {
				title: `Abstimmung`,
				desc: {
					'1': `Die Stimmabgabe erfolgt entweder durch einen einzelnen Bewerter oder durch alle. Dies hängt davon ab, wie der Gastgeber das Spiel konfiguriert hat.`,
					'2': `Am Ende jeder Runde können die Bewerter für ihre Lieblingsantwort stimmen. Der Gewinner erhält einen Punkt.`
				}
			},
			sets: {
				title: `Kartensets`,
				desc: {
					'1': `Bevor das Spiel beginnt, kann der Gastgeber aus vielen verfügbaren Sets auswählen oder eigene Sets importieren.`,
					'2': `Benutzerdefinierte Kartensets können importiert und in deinem Konto gespeichert werden, damit du sie später problemlos wieder verwenden kannst.`
				}
			}
		}
	},
	[GAME_TYPE.CHECKERS]: {
		name: `Dame`,
		tooltip: `Spiele hier Dame mit bis zu 4 Spielern und einer Vielzahl von anpassbaren Regeln.`,
		description: `Spiele hier Dame mit bis zu 4 Spielern und einer Vielzahl von anpassbaren Regeln.`,
		title: `Kostenloses Online-Dame-Spiel für 2-4 Spieler`,
		options: {
			forceTake: {
				name: `Schlagen erzwingen`,
				help: {
					enabled: `<b>Aktiviert</b>: Wenn möglich, ist der Spieler gezwungen, eine gegnerische Figur zu schlagen.`,
					disabled: `<b>Deaktiviert</b>: Der Spieler darf den nächsten Zug bestimmen, auch wenn er dabei eine gegnerische Figur schlagen kann.`
				}
			},
			field: {
				name: `Spielfeld`,
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
					[WIN_CONDITION.MORE_PIECES]: `Meiste Spielsteine`,
					[WIN_CONDITION.OPPOSITE_SIDE]: `Erreichen der anderen Seite`
				}
			},
			kingCondition: {
				name: `Krönungsbedingung`,
				help: `Unter welchen Bedingungen ein Spielstein gekrönt wird. Ein gekrönter Spielstein darf sich in jede Richtung bewegen.`,
				data: {
					[CHECKERS_KING_TYPE.OPPOSITE_SIDE]: `Erreichen der anderen Seite`,
					[CHECKERS_KING_TYPE.TAKE]: `Schlagen eines Spielsteins`,
					[CHECKERS_KING_TYPE.ALL]: `Jeder Spielstein ist gekrönt`,
					[CHECKERS_KING_TYPE.NONE]: `Deaktiviert`
				}
			},
			backwardsTake: {
				name: `Rückwärts Schlagen`,
				help: `Lege fest, ob Spielsteine die gegnerischen Spielsteine rückwärts schlagen dürfen. Wenn diese Funktion deaktiviert ist, kann sie nur von gekrönten Spielsteinen genutzt werden.`
			},
			chainTake: {
				name: `Kettenschlagen`,
				help: `Wenn diese Funktion aktiviert ist, kann ein Spielstein mehrere andere Spielsteine in einem Zug schlagen, vorausgesetzt, sie befinden sich in der richtigen Entfernung zueinander. Wenn diese Funktion deaktiviert ist, kann jeweils nur ein Spielstein geschlagen werden.`
			},
			turnTime: {
				name: `Zugzeit`,
				help: `Die maximale Zeit, die jeder Spieler für einen Zug benötigen kann.`
			},
			staleCount: {
				name: `Unentschieden`,
				help: `Nach wie vielen Runden ohne Schlagen das Spiel als unentschieden betrachtet und beendet werden soll.`
			},
			stuckThreshold: {
				name: `Toleranz bei Feststeckung`,
				help: `Wenn ein Spieler diese Anzahl von Zügen hintereinander nicht weiterkommt und keine Spielsteine bewegen kann, verliert er automatisch.`
			},
			autoTurnThreshold: {
				name: `Toleranz bei zu spätem Ziehen`,
				help: `Wenn ein Spieler zu spät dran ist und ein Zug automatisch für ihn gemacht wird, verliert er automatisch, wenn er so viele Züge hintereinander macht.`
			},
			rows: {
				name: `Reihen`,
				help: `Wie viele Reihen von Spielsteinen jeder Spieler zu Beginn hat. Die Anzahl der Reihen hängt von der Feldgröße ab.`
			}
		},
		presets: {
			default: {
				name: `Englisches Dame (Standard)`,
				desc: `8x8 Feld — 24 Spielsteine`
			},
			international: {
				name: `Internationales Dame`,
				desc: `10x10 Feld — 40 Spielsteine — Rückwärts schlagen`
			},
			canadian: {
				name: `Kanadisches Dame`,
				desc: `12x12 Feld — 60 Spielsteine — Rückwärts schlagen`
			},
			party: {
				name: `Party Dame`,
				desc: `Plus Feld — 36 Spielsteine — 4 Spieler`
			}
		},
		help: {
			movement: {
				title: `Bewegen der Spielsteine`,
				desc: {
					'1': `Spielsteine können diagonal bewegt werden. Wenn du an der Reihe bist, werden alle Steine, die du bewegen kannst, hervorgehoben.`,
					'2': `Durch Klicken auf einen markierten Spielstein kannst du alle möglichen Züge für diesen Spielstein sehen.`
				}
			},
			take: {
				title: `Spielsteine schlagen`,
				desc: {
					'1': `Wenn ein gegnerischer Spielstein diagonal neben deinem Spielstein steht und sich dahinter ein freies Feld befindet, kannst du ihn schlagen.`,
					'2': `Je nach Einstellung musst du entweder Spielsteine schlagen, wenn dies möglich ist, oder kannst sogar rückwärts schlagen.`
				}
			},
			king: {
				title: `Gekrönte Spielsteine`,
				desc: {
					'1': `In der Standardeinstellung wird ein Spielstein zum König, wenn er die gegenüberliegende Seite erreicht.`,
					'2': `Gekrönte Spielsteine können in alle diagonalen Richtungen ziehen, ohne gezwungen zu sein, vorwärts zu ziehen.`
				}
			},
			goal: {
				title: `Spielziel`,
				desc: {
					'1': `Standardmäßig ist das Ziel, alle anderen Figuren des Gegners auszuschalten oder bis keine gültigen Züge mehr gemacht werden können.`,
					'2': `Das Ziel des Spiels, auch als Siegbedingung bezeichnet, kann in den Einstellungen geändert werden.`
				}
			}
		}
	},
	[GAME_TYPE.BLOMBER]: {
		name: `Blomber`,
		tooltip: `Jage deine Gegner in einem intensiven Schlachtfeld voller Power-Ups in die Luft.`,
		description: `Jage deine Gegner in einem intensiven Schlachtfeld voller Power-Ups in die Luft.`,
		title: `Kostenloses von Bomberman inspiriertes Online-Spiel`,
		options: {
			field: {
				name: `Spielfeld`,
				help: `Größere Spielfelder unterstützen mehrere Spieler.`,
				data: {
					'9x9': `Kleines Quadrat (9x9)`,
					'11x9': `Rechteck (11x9)`,
					qrSquare: `QR Quadrat (11x11)`
				}
			},
			winCondition: {
				data: {
					[WIN_CONDITION.LAST_STANDING]: `Letzter Überlebender (<b>0</b> Leben) | Letzter Überlebender (<b>1</b> Leben) | Letzter Überlebender (<b>{count}</b> Leben)`,
					[WIN_CONDITION.KILL_COUNT]: `Erster mit <b>0</b> Kills | Erster mit <b>1</b> Kill | Erster mit <b>{count}</b> Kills`,
					[WIN_CONDITION.TIME]: `Die meisten Kills nach <b>0</b> min. | Die meisten Kills nach <b>1</b> min. | Die meisten Kills nach <b>{count}</b> min.`
				}
			},
			defaultBombCount: {
				name: `Bombenanzahl`,
				help: `Die Anzahl der Bomben, die ein Spieler gleichzeitig platzieren kann.`
			},
			defaultBombSize: {
				name: `Bombengröße`,
				help: `Der Explosionsradius einer Bombe. Die Größe wird in Kacheln in jeder Richtung gemessen.`
			},
			defaultSpeed: {
				name: `Spielergeschwindigkeit`,
				help: `Die Laufgeschwindigkeit der Spieler.`
			},
			respawnDelay: {
				name: `Wiederbelebungszeit`,
				help: `Die Zeit, die der Spieler nach dem Töten warten muss, bevor er wieder spielen kann.`
			},
			bombPush: {
				name: `Bombenschieben`,
				help: `Wenn aktiviert, kannst du auf eine Bombe zugehen, um sie anzustoßen und in eine bestimmte Richtung zu schieben.`
			},
			explosionDelay: {
				name: `Explosionsverzögerung`,
				help: `Die Verzögerung, bevor eine platzierte Bombe explodiert.`
			},
			chainReaction: {
				name: `Kettenreaktion`,
				help: `Wenn diese Funktion aktiviert ist, löst eine Explosion Bomben in Reichweite aus, die ebenfalls explodieren. Die Kills gehen an den Spieler, der die Bombe platziert hat, die die Kettenreaktion ausgelöst hat. Wenn deaktiviert, werden diese Bomben stattdessen entfernt.`
			},
			cratePercentage: {
				name: `Kisten-Prozentsatz`,
				help: `Der Prozentsatz der Kisten, die auf dem Spielfeld angezeigt werden. Kisten können gesprengt werden und können Powerups enthalten.`
			},
			powerUpPercentage: {
				name: `Power-up-Prozentsatz`,
				help: `Wie wahrscheinlich es ist, dass ein Power-Up beim Zerstören einer Kiste fallen gelassen wird.`
			}
		},
		presets: {
			default: {
				name: `Standard`,
				desc: `9x9 Feld — 3 Leben — 4 Spieler`
			}
		}
	}
}
