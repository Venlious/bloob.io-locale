import { GameType, GenericType, CheckersKingType, WinConditionType } from '../types/index'
import { GameMessage } from '../types/game'

export default <GameMessage>{
	[GenericType.generic]: {
		heading: `Juegos multijugador que puedes encontrar en Bloob.io`,
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
				title: `Relleno robot`,
				help: `Cuando está activado, los bots rellenan los huecos vacíos de los jugadores. También hará que un jugador sea sustituido por un bot si se marcha antes de tiempo.`
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
					required: `Requerido`,
					notRequired: `Opcional`
				}
			},
			winCondition: {
				title: `Condición de ganar`,
				help: `Determina cuándo debe concluir el juego`
			},
			winAmount: {
				title: `Importe ganador`
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
		name: `Wordrace`,
		heading: `Juega a un juego único de encontrar palabras`,
		tooltip: `Encuentra palabras en cualquier dirección en un campo generado aleatoriamente mientras compites contra otros con el mismo objetivo.`,
		description: `Wordrace es un juego gratuito de búsqueda de palabras único, con ajustes personalizables para que cada jugador tenga un reto. No requiere inscripción. Juega ahora.`,
		title: `Juego único de palabras multijugador | Bloob.io`,
		options: {
			globalLanguage: {
				title: `Idioma global`,
				help: {
					enabled: `<b>Habilitado</b>: Todos encuentran palabras en el idioma que hayas establecido.`,
					disabled: `<b>Desactivado</b>: Cada jugador selecciona el idioma que desee.`
				}
			},
			language: {
				title: `Idioma`,
				help: {
					intro: `La lengua en la que todo el mundo tiene que intentar encontrar palabras.`,
					globalLanguage: `Si el <b>Idioma Global</b> está desactivado cada jugador puede seleccionar el idioma que desee.`
				}
			},
			sharedField: {
				title: `Campo compartido`,
				help: `Todo el mundo ve siempre el mismo campo. Si un campo es compartido, significa que cuando una carta ha sido reclamada nadie más puede cogerla. De esta forma el juego se hace más difícil con el tiempo.`
			},
			multiplier: {
				title: `Multiplicadores`,
				help: `Los multiplicadores se adjuntan a letras aleatorias del campo y multiplican la puntuación de una palabra encontrada si se usan en la selección.`,
				data: {
					off: `Apagado`,
					uncommon: `No común (2,5%)`,
					common: `Común (5%)`,
					veryCommon: `Muy Común (10%)`,
					extreme: `Extremo (25%)`
				}
			},
			roundTotal: {
				title: `Rondas`,
				help: `Cada ronda generará un nuevo campo de juego.`
			},
			roundDuration: {
				title: `Duración de la ronda`,
				help: `Cuánto dura una sola ronda`
			},
			roundIntermission: {
				title: `Tiempo de intermisión`,
				help: `Cuánto dura el tiempo entre rondas`
			},
			minWordLength: {
				title: `Longitud mín. Longitud de palabra`,
				help: `Una selección de palabras debe tener al menos esta longitud para que se compruebe su validez.`
			},
			maxWordLength: {
				title: `Longitud máx. Longitud de palabra`,
				help: `Una selección de palabras no puede superar esta longitud para que se compruebe su validez.`
			},
			_wordLength: {
				title: `Longitud de palabra`,
				help: `Una selección de palabras debe tener entre esta longitud para ser considerada válida.`,
				data: {
					between: `Entre %{min} y %{max}`
				}
			},
			field: {
				title: `Tamaño del campo`,
				help: {
					change: `El tamaño del campo de juego. Los campos más grandes facilitan el juego con más gente.`,
					notice: `Ten en cuenta que los tamaños de campo grandes aumentan el tamaño de la interfaz y puede que no quepan en la ventana del navegador para todos los jugadores.`
				},
				data: {
					'10x8': `Pequeño (10x8)`,
					'13x10': `Mediano (13x10)`,
					'16x14': `Grande (16x14)`,
					'20x18': `Extremo (20x18)`
				}
			},
			_gameDuration: {
				title: `Duración de la partida`
			}
		},
		presets: {
			largeGroup: {
				title: `Grupo grande`,
				description: `Campo grande - Idiomas individuales - Más jugadores`
			},
			blitz: {
				title: `Blitz`,
				description: `Muchas rondas cortas - Muchos multiplicadores`
			}
		},
		help: {
			find_word: {
				title: `Selección de palabras`,
				description: [
					`Mantén pulsada una letra del campo de juego y arrástrala en cualquier dirección para formar una palabra.`,
					`Una vez que dejes de hacer clic, la palabra se procesa, y obtienes puntos dependiendo de la longitud de la palabra.`
				]
			},
			gameplay: {
				title: `Juego`,
				description: [
					`Todos intentan encontrar palabras al mismo tiempo que tú, al fin y al cabo es una carrera. Las letras reclamadas no se pueden volver a utilizar.`,
					`A veces es más táctico reclamar muchas palabras cortas, que tomarse el tiempo necesario para las más largas.`
				]
			},
			multiplier: {
				title: `Multiplicadores`,
				description: [
					`¡Cuando está activado, se muestran multiplicadores en letras aleatorias del campo que multiplican la puntuación de tus palabras encontradas!`,
					`¡Los multiplicadores se acumulan, por lo que una palabra con <b>x2</b> y <b>x3</b> multiplicaría la puntuación de la palabra <b>x5</b>!`
				]
			},
			language: {
				title: `Idioma`,
				description: [
					`El anfitrión decide si todos juegan en el mismo idioma o en uno de su elección.`,
					`Las palabras sólo serán válidas para el idioma en el que se juegue y se ignorarán los acentos.`
				]
			}
		}
	},
	[GameType.fourInARow]: {
		name: `Cuatro Seguidos`,
		heading: `Conecta Cuatro en raya en línea con tus amigos`,
		tooltip: `Juega a Cuatro en raya con hasta seis jugadores en el modo de juego clásico o en las variantes disponibles.`,
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
				title: `Modo Tetris`,
				help: `Cuando está activado, una fila completamente llena desaparecerá y dejará caer todas las piezas de arriba por una línea. Esto también hace que sea imposible empatar en una partida.`
			}
		},
		presets: {
			fiveInARow: {
				title: `Cinco seguidas`,
				description: `Columnas laterales - Campo grande`
			},
			tetris: {
				title: `Tetris`,
				description: `Eliminar filas completas automáticamente`
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
		name: `Manzanas podridas`,
		heading: `Juega un multijugador online de Cartas contra la Humanidad con amigos`,
		tooltip: `Juega a un clon de Cartas contra la Humanidad y personaliza tu experiencia a tu gusto`,
		description: `Juega a un clon de Cartas contra la Humanidad y personaliza tu experiencia a tu gusto. Crea tus propias barajas personalizadas e inclúyelas en tu próxima partida.`,
		title: `Multijugador de Cartas contra la Humanidad | Bloob`,
		options: {
			winCondition: {
				data: {
					first: `Primero en conseguir <b>0</b> puntos | Primero en conseguir <b>1</b> punto | Primero en conseguir <b>{count}</b> puntos`,
					most: `Mayor número de puntos tras <b>0</b> rondas | Mayor número de puntos tras <b>1</b> ronda | Mayor número de puntos tras <b>{count}</b> rondas`
				}
			},
			handSize: {
				title: `Tamaño de la mano`,
				help: `La cantidad de cartas de respuesta que cada uno tiene en la mano en un momento dado.`
			},
			judgeSystem: {
				title: `Sistema de jueces`,
				help: `Un juez o todos determinan quién hizo la mejor jugada en cada ronda.`,
				data: {
					single: `Nuevo juez en cada ronda`,
					everyone: `Todos votan`
				}
			},
			pickBlackCard: {
				title: `Elige la carta de acción`,
				help: `Cuando está activado, se muestran tres cartas de acción aleatorias al juez para que elija entre ellas.`
			},
			handPreview: {
				title: `Vista previa de la mano`,
				help: `Cuando está activado, se añade un periodo al principio de la partida y después de cada ronda de volcado. Durante este tiempo todo el mundo puede echar un vistazo a las (nuevas) cartas de su mano.`
			},
			dumpRound: {
				title: `Ronda de volcado`,
				help: `Una ronda de volcado permite a cada uno seleccionar las cartas de su mano que le gustaría eliminar. Se dan nuevas cartas de respuesta como reemplazo después de que termine la ronda.`,
				data: {
					disabled: `Desactivado`,
					round: `Cada <b>0</b> rondas | Cada <b>1</b> ronda | Cada <b>{count}</b> rondas`
				}
			},
			dumpRoundAmount: {
				title: `Vaciar importe de ronda`
			},
			showNsfw: {
				title: `TarjetasNSFW`,
				help: `Tarjetas que contienen sexo o blasfemias`
			},
			showSpecific: {
				title: `Tarjetas específicas`,
				help: `Tarjetas que contienen marcas, palabras difíciles o personas.`
			},
			_filter: {
				title: `Filtro`,
				help: `Los filtros activos hacen que las tarjetas que cumplan los siguientes criterios queden fuera:`
			},
			timePicking: {
				title: `Hora de elección de la tarjeta de acción`,
				help: `Define cuánto tiempo tiene cada uno para elegir la carta de acción a jugar.`
			},
			responseCardLimit: {
				title: `Límite de Cartas de Respuesta`,
				help: `Por defecto las cartas de acción pueden pedirte que saques hasta 3 cartas de respuesta. Cambiando este límite las cartas de acción que soliciten más de este límite serán filtradas fuera del juego.`
			},
			timeDeciding: {
				title: `Tiempo de decisión (Por Carta)`,
				help: {
					intro: `Define cuánto tiempo tendrá cada uno para hacer su selección de tarjeta de respuesta.`,
					calc: `El tiempo total se calcula como <b>TARJETAS DE RESPUESTA * ESTE TIEMPO</b>`
				}
			},
			timeVoting: {
				title: `Tiempo de votación (por tarjeta)`,
				help: {
					intro: `Define cuánto tiempo tendrá cada uno para votar la selección de la carta ganadora.`,
					calc: `El tiempo total se calcula como <b>CARTAS DE RESPUESTA * JUGADORES * ESTE TIEMPO</b>`
				}
			},
			timeReveal: {
				title: `Tiempo de revelación de votos (por carta)`,
				help: {
					intro: `Define cuánto tiempo tiene todo el mundo para ver la selección ganadora.`,
					calc: `El tiempo total se calcula como <b>CARTAS DE RESPUESTA * ESTE TIEMPO</b>`
				}
			},
			timeHandPreview: {
				title: `Tiempo de vista previa de la mano (por tarjeta)`,
				help: {
					intro: `Define cuánto tiempo al principio de una partida o después de una ronda de descarga tiene todo el mundo para mirar sus (nuevas) cartas.`,
					calc: `El tiempo total se calcula como <b>3 SEGUNDOS + CARTAS DE MANO * ESTE TIEMPO</b>`
				}
			},
			timeDumpRound: {
				title: `Tiempo de Ronda de Volcado (Por Carta)`,
				help: {
					intro: `Define cuánto tiempo tiene cada uno para seleccionar las cartas que quiere tirar.`,
					calc: `El tiempo total se calcula como <b>3 SEGUNDOS + CARTAS EN MANO * ESTE TIEMPO</b>`
				}
			}
		},
		presets: {
			democracy: {
				title: `Democracia`,
				description: `Todos pueden votar`
			}
		},
		help: {
			action: {
				title: `Tarjeta de acción`,
				description: [
					`En cada ronda se presenta una nueva carta de acción negra que tiene espacios en blanco (___) que deben rellenar los que juegan.`,
					`Los espacios en blanco se rellenan con las cartas de respuesta blancas que tengas en la mano. Una vez que todos los jugadores están listos, el juez elige su respuesta favorita.`
				]
			},
			move: {
				title: `Cartas de respuesta`,
				description: [
					`Tu mano te mostrará tus cartas de respuesta. Puedes arrastrarlas a las ranuras disponibles o hacer clic para seleccionarlas.`,
					`Después de cada ronda, las cartas que utilizaste en tu selección se cambian por otras nuevas.`
				]
			},
			vote: {
				title: `Votar`,
				description: [
					`La votación la realiza un único juez o todos. Esto depende de cómo haya configurado el juego el anfitrión.`,
					`Al final de cada ronda, los jueces votan su respuesta favorita. Se premia con un punto al ganador.`
				]
			},
			sets: {
				title: `Conjuntos de cartas`,
				description: [
					`Antes de que empiece el juego, el anfitrión puede elegir entre muchos juegos disponibles o importar juegos personalizados`,
					`Se pueden importar conjuntos de cartas personalizados y se guardan en tu cuenta, lo que te permite volver a utilizarlos fácilmente más adelante.`
				]
			}
		}
	},
	[GameType.checkers]: {
		name: `Checkers`,
		heading: `Juega a las damas en línea con amigos`,
		tooltip: `Llámalo damas o damas, juega aquí con hasta 4 jugadores con todo tipo de reglas personalizables.`,
		description: `Las damas son el clásico juego de mesa de ritmo rápido que conoces y adoras, ¡con emocionantes giros! Toma el control y modifica las reglas a tu gusto. Juega ahora con tus amigos.`,
		title: `Juego de mesa clásico multijugador | Bloob.io`,
		options: {
			forceTake: {
				title: `TomaFuerza`,
				help: {
					enabled: `<b>Activado</b>: Cuando sea posible, se forzará al jugador a tomar una pieza del adversario.`,
					disabled: `<b>Desactivado</b>: El jugador puede elegir el movimiento que realiza, aunque pueda eliminar una pieza del adversario.`
				}
			},
			field: {
				title: `Campo`,
				help: `El campo de juego utilizado. Dependiendo del tamaño del campo y de la cantidad de filas, tendrás más o menos piezas iniciales. Algunos campos pueden admitir hasta cuatro jugadores.`,
				data: {
					'8x8': `Inglés (8x8)`,
					'10x10': `Internacional (10x10)`,
					'12x12': `Canadiense (12x12)`,
					plus: `Forma Plus (12x12)`
				}
			},
			winCondition: {
				help: `Cómo se determinará el ganador.`,
				data: {
					[WinConditionType.morePieces]: `Más piezas`,
					[WinConditionType.oppositeSide]: `Alcanzar el lado opuesto`
				}
			},
			kingCondition: {
				title: `Condición del Rey`,
				help: `Bajo qué condición una pieza se convierte en rey. Una pieza con rey puede moverse en todas direcciones.`,
				data: {
					[CheckersKingType.oppositeSide]: `Alcanzar el lado opuesto`,
					[CheckersKingType.take]: `Tomar una pieza`,
					[CheckersKingType.all]: `Empezar con todos los reyes`,
					[CheckersKingType.none]: `Desactivado`
				}
			},
			backwardsTake: {
				title: `Tomar hacia atrás`,
				help: `Establece si se permite que las piezas tomen hacia atrás a las piezas contrarias. Si se desactiva, sólo podrán hacerlo las piezas con rey.`
			},
			chainTake: {
				title: `Toma en cadena`,
				help: `Cuando está activada, una pieza puede tomar varias piezas en un movimiento, si están espaciadas adecuadamente. Alternativamente, cuando está desactivada, sólo se puede tomar una pieza a la vez.`
			},
			turnTime: {
				title: `Tiempo de turno`,
				help: `Cuánto tiempo puede decidir cada jugador su próximo movimiento.`
			},
			staleCount: {
				title: `Juego rancio`,
				help: `Después de cuántos turnos sin ninguna toma de posesión la partida debe considerarse caducada y finalizada.`
			},
			stuckThreshold: {
				title: `Umbral de atasco`,
				help: `Si un jugador está atascado durante esta cantidad de turnos seguidos perderá automáticamente.`
			},
			autoTurnThreshold: {
				title: `Umbral de retraso`,
				help: `Si un jugador llega tarde y se le hace un movimiento automáticamente este número de turnos seguidos, pierde automáticamente.`
			},
			rows: {
				title: `Filas`,
				help: `Con cuántas filas de piezas empieza cada jugador. Dependiendo del tamaño del campo se determinará la cantidad de filas.`
			}
		},
		presets: {
			default: {
				title: `Damas rectas (estándar)`,
				description: `Campo 8x8 - 24 piezas`
			},
			international: {
				title: `Damas Internacionales`,
				description: `campo 10x10 - 40 piezas - Tomar al revés`
			},
			canadian: {
				title: `Damas Canadienses`,
				description: `campo 12x12 - 60 piezas - Tomar al revés`
			},
			party: {
				title: `Fiesta de damas`,
				description: `Campo Plus - 36 piezas - 4 jugadores`
			}
		},
		help: {
			movement: {
				title: `Movimiento de la pieza`,
				description: [
					`Las piezas se pueden mover en diagonal. Cuando es tu turno, todas las piezas que puedes mover aparecen resaltadas`,
					`Puedes hacer clic en una pieza resaltada para ver todos los movimientos posibles disponibles para esa pieza.`
				]
			},
			take: {
				title: `Toma`,
				description: [
					`Si una pieza del adversario está en diagonal junto a tu pieza con un hueco libre detrás, puedes tomarla.`,
					`Dependiendo de la configuración, estás obligado a tomar piezas cuando sea posible o incluso puedes tomar hacia atrás.`
				]
			},
			king: {
				title: `Piezas tomadas`,
				description: [
					`Con la configuración por defecto, cuando alcanzas el lado opuesto con una pieza, ésta se convierte en rey`,
					`Las piezas con rey pueden moverse en todas las direcciones diagonales sin verse obligadas a avanzar.`
				]
			},
			goal: {
				title: `Gol`,
				description: [
					`Típicamente, el objetivo es eliminar todas las demás piezas del adversario o hasta que no se puedan hacer movimientos válidos.`,
					`El objetivo de la partida, también llamado condición de victoria, se puede cambiar en los ajustes.`
				]
			}
		}
	},
	[GameType.blomber]: {
		name: `Blomber`,
		heading: `Juega a Bomberman en línea con tus amigos`,
		tooltip: `Haz volar por los aires a tus oponentes en un intenso campo de batalla cuerpo a cuerpo repleto de potenciadores en este clásico juego de Bomberman`,
		description: `Blomber es un juego multijugador de Bomberman con más rejugabilidad que la mayoría de los juegos. Es gratis, fácil de jugar, personalizable y no requiere registro. Juega ahora.`,
		title: `Juego multijugador Bomberman | Bloob.io`,
		options: {
			field: {
				title: `Campo`,
				help: `El campo de juego utilizado. Los campos más grandes pueden alojar a más jugadores.`,
				data: {
					'9x9': `Pequeño cuadrado (9x9)`,
					'11x9': `Rectángulo (11x9)`,
					qrSquare: `Cuadrado QR (11x11)`
				}
			},
			winCondition: {
				data: {
					[WinConditionType.lastStanding]: `Último en quedar en pie (<b>0</b> vidas) | Último en quedar en pie (<b>1</b> vidas) | Último en quedar en pie (<b>{count}</b> vidas)`,
					[WinConditionType.killCount]: `Primero en conseguir <b>0</b> muertes | Primero en conseguir <b>1</b> muertes | Primero en conseguir <b>{count}</b> muertes`,
					[WinConditionType.time]: `Mayor número de muertes tras <b>0</b> min. | Más muertes tras <b>1</b> min. | Mayor número de muertes tras <b>{count}</b> min.`
				}
			},
			defaultBombCount: {
				title: `Cuento de bombas`,
				help: `Esta es la cantidad de bombas que un jugador puede colocar al mismo tiempo.`
			},
			defaultBombSize: {
				title: `Tamaño de la bomba`,
				help: `Este es el radio de explosión de una bomba. El tamaño se mide en baldosas en cada dirección.`
			},
			defaultSpeed: {
				title: `Velocidad del jugador`,
				help: `La velocidad del jugador al caminar.`
			},
			respawnDelay: {
				title: `Tiempo de respawn`,
				help: `El tiempo que el jugador tiene que esperar después de ser asesinado antes de poder volver a jugar.`
			},
			bombPush: {
				title: `Empuje de bomba`,
				help: `Cuando está activado, puedes caminar hacia una bomba para empujarla y deslizarla en una dirección.`
			},
			explosionDelay: {
				title: `RetrasoDeExplosión`,
				help: `El retraso antes de que explote una bomba colocada.`
			},
			chainReaction: {
				title: `Reacción en cadena`,
				help: `Cuando está activada, una explosión provocará que las bombas dentro del alcance también exploten. Las muertes serán para el jugador que colocó la bomba que inició la reacción en cadena. Si se desactiva, estas bombas se eliminarán en su lugar.`
			},
			cratePercentage: {
				title: `Cajas`,
				help: `El porcentaje de cajas que se mostrarán en el campo de juego. Las cajas se pueden hacer explotar y pueden contener potenciadores.`
			},
			powerUpPercentage: {
				title: `Potenciadores`,
				help: `Modifica la probabilidad de que caiga un potenciador al destruir una caja.`
			}
		},
		help: {},
		presets: {
			default: {
				title: `Por defecto`,
				description: `Campo 9x9 - 3 vidas - 4 jugadores`
			},
			party: {
				title: `Fiesta`,
				description: `Campo cuadrado QR - 6 vidas - 8 jugadores`
			},
			action: {
				title: `Acción repleta`,
				description: `Sin cajas - Reaparición rápida - 6 vidas - 8 jugadores`
			}
		}
	},
	[GameType.eightBallPool]: {
		name: `Billar de 8 bolas`,
		heading: `Juega al billar de 8 bolas en línea con amigos`,
		tooltip: `Juega aquí al popular juego de billar contra un bot o un jugador.`,
		description: `¡Da lo mejor de ti en el billar multijugador online! Mete todas las bolas y acaba con la Bola 8 para ganar en la mesa!`,
		title: `Juego multijugador gratuito para 2 jugadores`,
		options: {
			turnTime: {
				title: `Tiempo de turno`,
				help: `Cuánto tiempo tiene cada jugador para golpear la bola blanca.`
			},
			preview: {
				title: `Vista previa`,
				help: `La línea de vista previa muestra a dónde irá la bola de billar después de ser golpeada.`
			},
			illegalBallPocket: {
				title: `Bola Ilegal de Bolsillo`
			},
			ruleContactRailOnBreak: {
				title: `Riel en pausa`,
				help: `Al romper, determina cuántas bolas deben entrar en contacto con el raíl. Esta regla no se aplica si entroneras una bola.`,
				data: {
					one: `Una bola`,
					two: `Dos bolas`,
					three: `Tres bolas`,
					four: `Cuatro bolas`
				}
			},
			assignedGroup: {
				title: `Grupo asignado`,
				help: `Determina cómo se asigna a cada jugador su grupo (sólidos o rayas)`,
				data: {
					pocket: `En bolsillo`,
					random: `Aleatorio al inicio`
				}
			},
			ruleTurnCanHitBall: {
				title: `Puede Golpear la Bola`,
				help: `Sucede cuando el jugador golpea una bola que no le está permitido. La regla no se aplica al romper.`,
				data: {
					assignedGroup: `Grupo asignado`,
					assignedGroupPlus: `Grupo asignado + 8 bolas`,
					eitherGroup: `Cualquier grupo`,
					anyBall: `Cualquier bola`
				}
			},
			ruleTurnMustHitBall: {
				title: `Debes golpear la bola`,
				help: `Ocurre cuando el jugador no golpea una bola (de "Puede golpear la bola") durante su turno.`
			},
			ruleTurnContactRail: {
				title: `Debe contactar con el raíl`,
				help: `Ocurre cuando ninguna bola toca la banda (cojín). Esta regla no se aplica si el jugador emboca una bola.`
			},
			ruleConsecutiveFouls: {
				title: `Faltas consecutivas`,
				help: `Determina lo que debe ocurrir cuando un jugador comete varias faltas consecutivas. Esta regla desalienta el comportamiento antideportivo.`,
				data: {
					off: `Apagado`,
					loseOnTwo: `Perder después de dos`,
					loseOnThree: `Perder después de tres`,
					loseOnFour: `Pérdida después de cuatro`
				}
			},
			foul: {
				help: {
					disabled: `La falta está desactivada con la configuración actual.`
				},
				data: {
					nothing: `Nada`,
					keepTurn: `Mantener turno`,
					endTurn: `Fin de turno`,
					endTurnHand: `Fin de giro + Bola en mano`,
					reset: `Fin de turno + Restablecer campo`,
					resetHand: `Fin de turno + Restaurar campo + Pelota en mano`,
					instantWin: `victoria instantánea`,
					instantLoss: `Pérdida instantánea`
				}
			},
			foulPocketCueBall: {
				title: `Bola blanca de foul`,
				help: `Sucede cuando un jugador mete la Bola Blanca`
			},
			foulPocketOpponentBall: {
				title: `Meter la bola contraria`,
				help: `Se produce cuando un jugador mete la bola del adversario. Otras faltas tienen prioridad sobre ésta (por ejemplo, golpear primero la bola incorrecta).`
			},
			foulPocketOwnAndOpponentBall: {
				title: `Bolsear la bola propia + la del adversario`,
				help: `Se produce cuando un jugador emboca tanto una bola propia como una del adversario. Otras faltas tienen prioridad sobre ésta (por ejemplo, golpear primero la bola incorrecta).`
			},
			foulIllegalEightBallBreak: {
				title: `Meter la bola 8 durante el descanso`,
				help: `Sucede cuando un jugador consigue meter la Bola 8 durante el descanso.`
			},
			foulIllegalEightBallPocket: {
				title: `Meter la Bola 8 Ilegalmente`,
				help: `Sucede cuando un jugador mete la Bola 8 mientras comete otra falta al mismo tiempo (por ejemplo, meter también la bola blanca).`
			},
			foulIllegalEightBallPocketTooSoon: {
				title: `Meter la bola 8 demasiado pronto`,
				help: `Sucede cuando un jugador mete la Bola 8 cuando aún tiene otras bolas objetivas que meter`
			}
		},
		presets: {
			default: {
				title: `Conjunto de reglas de Bloob.io`
			},
			wpa: {
				title: `Conjunto de reglas de la WPA`,
				description: `Se asemeja mucho a las reglas de la Asociación Mundial de Billar`
			},
			upa: {
				title: `Conjunto de reglas de la UPA`,
				description: `Similar a las normas de la Asociación Profesional de Jugadores de Billar de EE.UU.`
			},
			relaxed: {
				title: `Reglas relajadas`,
				description: `Penas más leves y menos normas`
			},
			ruthless: {
				title: `Reglas despiadadas`,
				description: `Cualquier falta resultará en una pérdida instantánea`
			}
		},
		help: {
			field: {
				title: `Campo de juego`,
				description: [
					`El campo contiene 6 agujeros en los que se pueden meter las bolas. Hay un total de 16 bolas, una de las cuales es la bola blanca que golpeas en tu turno`,
					`Hay 7x bolas rayadas y 7x sólidas, así como 1x bola 8 negra. Al principio del juego, todas las bolas se colocan en un triángulo con la bola ocho en el centro. La bola blanca se coloca más lejos.`
				]
			},
			breaking: {
				title: `Inicio del juego (Rompiendo)`,
				description: [
					`Quien tenga su turno primero puede moverse alrededor de la bola blanca y golpear hacia el triángulo de bolas (su posición inicial)`,
					`Hay reglas para romper. No se puede meter la bola blanca y al menos dos bolas (excepto la blanca) deben golpear una colchoneta (las paredes que rodean el campo). Embocar una bola en el saque te garantiza otro turno justo después.`
				]
			},
			gameplay: {
				title: `Juego`,
				description: [
					`Hay bolas rayadas y sólidas. Quien meta una bola primero se convierte en ese grupo de bolas y tiene otro turno. A partir de ese momento, sólo debes meter bolas rayadas o macizas.`,
					`No importa el orden en que entres tus bolas. Cuando cometas una falta, tu oponente podrá mover la bola blanca para su turno.`
				]
			},
			objective: {
				title: `Objetivo`,
				description: [
					`Debes evitar meter la bola ocho negra hasta que hayas metido todas tus bolas. Entonces terminarás el juego embocando la bola ocho. Es importante que no cometas ninguna falta al hacerlo, de lo contrario perderás`,
					`Si metes la bola ocho demasiado pronto, perderás al instante. ¡Apunta con cuidado!`
				]
			}
		}
	}
}
