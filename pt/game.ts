import { GameType, GenericType, CheckersKingType, WinConditionType } from '../types/index'
import { GameMessage } from '../types/game'

export default <GameMessage>{
	[GenericType.generic]: {
		heading: `Jogos Multiplayer Que Você Pode Encontrar no Bloob.io`,
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
				title: `Preencher com bots`,
				help: `Quando ativado, os bots preencherão todos os espaços de jogador vazios. Isso também resultará na substituição de um jogador por um bot se ele sair cedo.`
			},
			botDifficulty: {
				title: `Dificuldade do computador`,
				data: {
					easy: `Fácil`,
					normal: `Normal`,
					hard: `Difícil`
				}
			},
			generic: {
				data: {
					required: `Obrigatório`,
					notRequired: `Opcional`
				}
			},
			winCondition: {
				title: `Condição de Vitória`,
				help: `Determina quando o jogo deve chegar a uma conclusão.`
			},
			winAmount: {
				title: `Quantidade vencedora`
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
		heading: `Jogue um Jogo Único de Busca de Palavras`,
		name: `Corrida de Palavras`,
		tooltip: `Encontre palavras em qualquer direção em um campo gerado aleatoriamente enquanto compete contra outras pessoas com o mesmo objetivo.`,
		description: `A Corrida de Palavras é um jogo de busca de palavras exclusivo e gratuito com configurações personalizáveis para gerar para cada jogador um desafio. Não requer inscrição. Jogue agora.`,
		title: `Jogo de palavras multijogador exclusivo | Bloob.io`,
		options: {
			globalLanguage: {
				title: `Idioma Global`,
				help: {
					enabled: `Todos procuram palavras no idioma que você definiu.`,
					disabled: `Cada jogador seleciona um idioma de sua escolha.`
				}
			},
			language: {
				title: `Idioma`,
				help: {
					intro: `O idioma em que estão as palavras que todos têm de procurar.`,
					globalLanguage: `Se o <b>Idioma Global</b> estiver desativado, cada jogador pode selecionar um idioma de sua escolha.`
				}
			},
			sharedField: {
				title: `Campo Compartilhado`,
				help: `Todo mundo sempre vê o mesmo campo. Se um campo for compartilhado, significa que quando uma letra for reivindicada, ninguém mais poderá pegá-la. Assim o jogo fica mais difícil com o passar do tempo.`
			},
			multiplier: {
				title: `Multiplicadores`,
				help: `Multiplicadores são anexados a letras aleatórias no campo e multiplicam a pontuação de uma palavra encontrada se for usada na seleção.`,
				data: {
					off: `Desligado`,
					uncommon: `Incomum (2,5%)`,
					common: `Comum (5%)`,
					veryCommon: `Muito Comum (10%)`,
					extreme: `Extrema (25%)`
				}
			},
			roundTotal: {
				title: `Rodadas`,
				help: `Cada rodada irá gerar um novo campo de jogo.`
			},
			roundDuration: {
				title: `Duração da Rodada`,
				help: `Quanto tempo dura uma única rodada.`
			},
			roundIntermission: {
				title: `Tempo de Intervalo`,
				help: `Quanto tempo dura o intervalo entre as rodadas.`
			},
			minWordLength: {
				title: `Comprimento mínimo da palavra`,
				help: `Uma escolha de palavra deve ter pelo menos este comprimento para ser considerada válida.`
			},
			maxWordLength: {
				title: `Comprimento máximo da palavra`,
				help: `Uma escolha de palavra não pode exceder este comprimento para ser considerada válida.`
			},
			_wordLength: {
				title: `Comprimento da palavra`,
				help: `Uma escolha de palavra deve estar entre estes tamanhos para ser considerada válida.`,
				data: {
					between: `Entre %{min} e %{max}`
				}
			},
			field: {
				title: `Tamanho do campo`,
				help: {
					change: `O tamanho do campo de jogo. Campos maiores facilitam jogar com mais pessoas.`,
					notice: `Observe que campos grandes aumentam o tamanho da interface e podem não caber na janela do navegador para todos os jogadores.`
				},
				data: {
					'10x8': `Pequeno (10x8)`,
					'13x10': `Médio (13x10)`,
					'16x14': `Grande (16x14)`,
					'20x18': `Extremo (20x18)`
				}
			},
			_gameDuration: {
				title: `Duração do jogo`
			}
		},
		presets: {
			largeGroup: {
				title: `Grande Grupo`,
				description: `Campo grande — Idiomas individuais — Mais jogadores`
			},
			blitz: {
				title: `Blitz`,
				description: `Muitas rodadas curtas — Muitos multiplicadores`
			}
		},
		help: {
			find_word: {
				title: `Seleção de palavras`,
				description: [
					`Clique e segure em uma letra no campo de jogo e arraste em qualquer direção para formar uma palavra.`,
					`Depois de soltar, a palavra é processada e você ganha pontos dependendo do tamanho da palavra.`
				]
			},
			gameplay: {
				title: `Jogabilidade`,
				description: [
					`Todo mundo está tentando encontrar palavras ao mesmo tempo que você, afinal é uma corrida. As letras reivindicadas não podem ser usadas novamente.`,
					`Às vezes é mais inteligente procurar muitas palavras curtas, em vez de gastar tempo com palavras mais longas.`
				]
			},
			multiplier: {
				title: `Multiplicadores`,
				description: [
					`Quando ativados, os multiplicadores são mostrados em letras aleatórias no campo e multiplicam a pontuação das palavras encontradas!`,
					`Os multiplicadores se acumulam, então ter uma palavra com <b>x2</b> e <b>x3</b> multiplicaria a pontuação da palavra <b>x5</b>!`
				]
			},
			language: {
				title: `Idioma`,
				description: [
					`O anfitrião decide se todos jogam no mesmo idioma ou se podem escolher individualmente.`,
					`As palavras serão válidas apenas para o idioma em que você está jogando e os acentos serão ignorados.`
				]
			}
		}
	},
	[GameType.fourInARow]: {
		heading: `Conecte Quatro em Linha Online com Amigos`,
		name: `Quatro em uma Fileira`,
		tooltip: `Jogue Quatro em uma Fileira com até seis jogadores no modo de jogo clássico ou nas variações disponíveis.`,
		description: `Jogue Quatro em uma Fileira com até seis jogadores no modo de jogo clássico ou nas variações disponíveis.`,
		title: `Jogo Multiplayer Grátis para 2-6 Jogadores`,
		options: {
			field: {
				title: `Tamanho do campo`,
				help: `O tamanho do campo de jogo.`,
				data: {
					'7x6': `Padrão (7x6)`,
					'9x4': `Estendido (9x4)`,
					'9x6': `Grande (9x6)`,
					'13x8': `Muito grande (13x8)`,
					'17x10': `Extremo (17x10)`
				}
			},
			turnTime: {
				title: `Tempo para jogada`,
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
				title: `Modo Tetris`,
				help: `Quando ativado, uma linha totalmente preenchida desaparecerá e todas as peças que estiverem acima cairão por baixo da linha. Isso também torna impossível empatar em um jogo.`
			}
		},
		presets: {
			fiveInARow: {
				title: `Cinco em uma linha`,
				description: `Colunas laterais — Campo grande`
			},
			tetris: {
				title: `Tetris`,
				description: `Remova linhas completas automaticamente`
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
		heading: `Jogue um Jogo de Cartas Multiplayer Online com Amigos`,
		name: `Maçãs Podres`,
		tooltip: `Jogue um clone do Cards Against Humanity e personalize sua experiência ao seu gosto.`,
		description: `Jogue um clone do Cards Against Humanity e personalize sua experiência ao seu gosto. Crie seus próprios conjuntos de cartas personalizados e inclua-os em sua próxima partida.`,
		title: `Cards Against Humanity Multiplayer | Bloob`,
		options: {
			winCondition: {
				data: {
					first: `O primeiro a obter <b>0</b> pontos | O primeiro a obter <b>1</b> ponto | O primeiro a obter <b>{count}</b> pontos`,
					most: `Mais pontos após <b>0</b> rodadas | Mais pontos após <b>1</b> rodada | Mais pontos após <b>{count}</b> rodadas`
				}
			},
			handSize: {
				title: `Tamanho da Mão`,
				help: `A quantidade de cartões de resposta que todos têm em mãos a qualquer momento.`
			},
			judgeSystem: {
				title: `Sistema Judicial`,
				help: `Ou um juiz ou todos podem determinar quem teve a melhor jogada em cada rodada.`,
				data: {
					single: `Novo juiz a cada rodada`,
					everyone: `Todos votam`
				}
			},
			pickBlackCard: {
				title: `Escolha a Carta de Ação`,
				help: `Quando ativado, três cartas de ação aleatória são mostradas ao juiz para que escolha entre elas.`
			},
			handPreview: {
				title: `Pré-visualização da mão`,
				help: `Quando ativado, um período é adicionado no início do jogo e após cada rodada de despejo. Durante este tempo, todos podem dar uma olhada em suas (novas) cartas em suas mãos.`
			},
			dumpRound: {
				title: `Rodada de despejo`,
				help: `Uma rodada de despejo permite que todos selecionem cartas em suas mãos que gostariam de remover. Novos cartões de resposta são dados como substitutos após o término da rodada.`,
				data: {
					disabled: `Desativado`,
					round: `A cada <b>0</b> rodadas | A cada <b>1</b> rodada | A cada <b>{count}</b> rodadas`
				}
			},
			dumpRoundAmount: {
				title: `Valor da Rodada de Despejo`
			},
			showNsfw: {
				title: `Cartas NSFW`,
				help: `Cartas contendo sexo ou palavrões.`
			},
			showSpecific: {
				title: `Cartas Específicas`,
				help: `Cartas contendo marcas, palavras difíceis ou pessoas.`
			},
			_filter: {
				title: `Filtro`,
				help: `Filtros ativos fazem com que as cartas que se encaixam nos seguintes critérios sejam deixadas de fora:`
			},
			timePicking: {
				title: `Tempo para escolher a carta de ação`,
				help: `Defina quanto tempo cada um tem para escolher a carta de ação para jogar.`
			},
			responseCardLimit: {
				title: `Limite do cartão de resposta`,
				help: `Por padrão, as cartas de ação podem solicitar que você retire até 3 cartões de resposta. Ao alterar esse limite, as cartas de ação que solicitam mais do que esse limite serão filtradas para fora do jogo.`
			},
			timeDeciding: {
				title: `Tempo para decidir (Por Carta)`,
				help: {
					intro: `Defina quanto tempo cada um terá para fazer a seleção da carta de resposta.`,
					calc: `O tempo total é calculado como <b>CARTAS DE RESPOSTA * ESTE TEMPO</b>`
				}
			},
			timeVoting: {
				title: `Tempo para Votar (Por Carta)`,
				help: {
					intro: `Defina quanto tempo todos terão para votar na seleção da carta vencedora.`,
					calc: `O tempo total é calculado como <b>CARTAS DE RESPOSTA * JOGADORES * ESTE TEMPO</b>`
				}
			},
			timeReveal: {
				title: `Tempo para Revelação do Voto (Por Carta)`,
				help: {
					intro: `Defina quanto tempo cada um terá para ver a seleção vencedora.`,
					calc: `O tempo total é calculado como <b>CARTAS DE RESPOSTA * ESTE TEMPO</b>`
				}
			},
			timeHandPreview: {
				title: `Tempo de visualização da mão (por carta)`,
				help: {
					intro: `Defina quanto tempo no início de um jogo ou após uma rodada de despejo todos podem ver as suas (novas) cartas.`,
					calc: `O tempo total é calculado como <b>3 SEGUNDOS + CARTAS NA MÃO * ESTE TEMPO</b>`
				}
			},
			timeDumpRound: {
				title: `Tempo da Rodada de Despejo (Por Carta)`,
				help: {
					intro: `Defina quanto tempo todos têm para selecionar quais cartas gostariam de jogar fora.`,
					calc: `O tempo total é calculado como <b>3 SEGUNDOS + CARTAS NA MÃO * ESTE TEMPO</b></b>`
				}
			}
		},
		presets: {
			democracy: {
				title: `Democracia`,
				description: `Todos podem votar`
			}
		},
		help: {
			action: {
				title: `Carta de Ação`,
				description: [
					`A cada rodada é apresentada uma nova carta de ação preta com espaços em branco (___) a serem preenchidos pelos jogadores.`,
					`Os espaços em branco são preenchidos usando as cartas de resposta brancas em sua mão. Assim que todos os jogadores estiverem prontos, o juiz escolhe sua resposta favorita.`
				]
			},
			move: {
				title: `Cartas de Resposta`,
				description: [
					`Sua mão mostrará suas cartas de resposta. Você pode arrastá-las para os espaços disponíveis ou clicar para selecioná-las.`,
					`Após cada rodada, as cartas que você usou em sua seleção são trocadas por novas.`
				]
			},
			vote: {
				title: `Votação`,
				description: [
					`A votação é feita por um único juiz ou por todos. Isso depende de como o anfitrião configurou o jogo.`,
					`No final de cada rodada, o(s) juiz(es) vota(m) em sua resposta favorita. Um ponto é concedido ao vencedor.`
				]
			},
			sets: {
				title: `Conjuntos de cartas`,
				description: [
					`Antes do início do jogo, o anfitrião pode escolher entre muitos conjuntos disponíveis ou importar alguns personalizados.`,
					`Conjuntos de cartas personalizados podem ser importados e salvos em sua conta, permitindo que você os use novamente mais tarde.`
				]
			}
		}
	},
	[GameType.checkers]: {
		heading: `Jogue Damas Online com Amigos`,
		name: `Damas`,
		tooltip: `Jogue aqui às damas com até 4 jogadores com todos os tipos de regras personalizáveis.`,
		description: `Damas é um jogo de tabuleiro clássico e emocionante! Altere as regras como quiser e jogue com seus amigos agora. Jogue agora!`,
		title: `Jogo de Tabuleiro Multijogador Clássico | Bloob.io`,
		options: {
			forceTake: {
				title: `Captura Obrigatória`,
				help: {
					enabled: `<b>Ativada</b>: Quando possível, o jogador será obrigado a capturar a peça do adversário.`,
					disabled: `<b>Desativada</b>: O jogador pode escolher o movimento que quer fazer, mesmo sendo possível capturar uma peça do adversário.`
				}
			},
			field: {
				title: `Tabuleiro`,
				help: `O tabuleiro de jogo usado. Dependendo do tamanho do tabuleiro e da quantidade de linhas, você obterá mais ou menos peças iniciais. Alguns tabuleiros podem suportar até quatro jogadores.`,
				data: {
					'8x8': `Inglês (8x8)`,
					'10x10': `Internacional (10x10)`,
					'12x12': `Canadense (12x12)`,
					plus: `Sinal de mais (12x12)`
				}
			},
			winCondition: {
				help: `Como o vencedor será determinado.`,
				data: {
					[WinConditionType.morePieces]: `Mais peças`,
					[WinConditionType.oppositeSide]: `Chegar ao lado oposto`
				}
			},
			kingCondition: {
				title: `Condição de Dama`,
				help: `Em que condição uma peça se torna dama. Uma dama pode se mover em todas as direções.`,
				data: {
					[CheckersKingType.oppositeSide]: `Chegar ao lado oposto`,
					[CheckersKingType.take]: `Capturar uma peça`,
					[CheckersKingType.all]: `Começar com todas as damas`,
					[CheckersKingType.none]: `Desativado`
				}
			},
			backwardsTake: {
				title: `Capturar para trás`,
				help: `Defina se as peças podem capturar as peças do oponente para trás. Se a opção  estiver desativada, isso só pode ser feito pelas damas.`
			},
			chainTake: {
				title: `Captura em sequência`,
				help: `Quando ativada, uma peça pode capturar várias outras peças em um movimento, se elas estiverem espaçadas corretamente. Caso contrário, se estiver desativada, apenas uma peça pode ser capturada por vez.`
			},
			turnTime: {
				title: `Tempo da Jogada`,
				help: `Quanto tempo cada jogador tem para decidir qual será seu próximo movimento.`
			},
			staleCount: {
				title: `Empate`,
				help: `Depois de quantos turnos sem nenhuma captura o jogo deve ser considerado empatado e encerrado.`
			},
			stuckThreshold: {
				title: `Limite para estar preso`,
				help: `Se um jogador ficar preso por esta quantidade de turnos consecutivos, ele perderá automaticamente.`
			},
			autoTurnThreshold: {
				title: `Limite de Demora`,
				help: `Se um jogador se atrasar e uma jogada for feita automaticamente para ele por este quantidade de rodadas seguidas, ele perderá automaticamente.`
			},
			rows: {
				title: `Linhas`,
				help: `Com quantas linhas de peças cada jogador começa. Dependendo do tamanho do tabuleiro, a quantidade de linhas será padronizada.`
			}
		},
		presets: {
			default: {
				title: `Jogo de Damas Simples (Padrão)`,
				description: `Tabuleiro 8x8 — 24 peças`
			},
			international: {
				title: `Jogo de Damas Internacional`,
				description: `Tabuleiro 10x10 — 40 peças — Captura para trás`
			},
			canadian: {
				title: `Jogo de Damas Canadenses`,
				description: `Tabuleiro 12x12 — 60 peças — Captura para trás`
			},
			party: {
				title: `Jogo de Damas em Equipe`,
				description: `Tabuleiro Mais — 36 peças — 4 jogadores`
			}
		},
		help: {
			movement: {
				title: `Movimento da Peça`,
				description: [
					`As peças podem ser movidas diagonalmente. Quando for a sua vez, todas as peças que você pode mover são destacadas.`,
					`Você pode clicar em uma peça destacada para ver todos os movimentos possíveis disponíveis para aquela peça.`
				]
			},
			take: {
				title: `Capturas`,
				description: [
					`Se a peça de um oponente estiver diagonalmente ao lado da sua peça com um espaço vazio atrás dela, você pode capturá-la.`,
					`Dependendo das configurações, você será obrigado a capturar as peças quando possível ou inclusive capturar para trás.`
				]
			},
			king: {
				title: `Damas`,
				description: [
					`De acordo com as configurações padrão, quando você alcança o lado oposto com uma peça, ela se torna uma dama.`,
					`As damas são capazes de se mover em todas as direções diagonais sem estarem obrigadas a mover-se para frente.`
				]
			},
			goal: {
				title: `Objetivo`,
				description: [
					`Normalmente, o objetivo é tirar todas as outras peças do oponente ou até que nenhum movimento válido possa ser feito.`,
					`O objetivo do jogo, também conhecido como condição de vitória, pode ser alterado nas configurações.`
				]
			}
		}
	},
	[GameType.blomber]: {
		heading: `Jogue Bomberman Online com Amigos`,
		name: `Blomber`,
		tooltip: `Exploda seus oponentes em um intenso campo de batalha de curta distância repleto de power-ups neste clássico jogo de Bomberman.`,
		description: `Blomber é um Bomberman multijogador com mais diversão que outros jogos. Gratuito, fácil, personalizável, sem inscrição. Jogue agora!`,
		title: `Jogo multijogador Bomberman | Bloob.io`,
		options: {
			field: {
				title: `Campo`,
				help: `O campo de jogo usado. Tamanhos de campo maiores podem permitir mais jogadores.`,
				data: {
					'9x9': `Quadrado Pequeno (9x9)`,
					'11x9': `Retângulo (11x9)`,
					qrSquare: `Quadrado QR (11x11)`
				}
			},
			winCondition: {
				data: {
					[WinConditionType.lastStanding]: `Último sobrevivente (<b>0</b> vidas) | Último sobrevivente (<b>1</b> vida) | Último sobrevivente (<b>{count}</b> vidas)`,
					[WinConditionType.killCount]: `Primeiro a conseguir <b>0</b> mortes | Primeiro a conseguir <b>1</b> morte | Primeiro a conseguir <b>{count}</b> mortes`,
					[WinConditionType.time]: `Mais mortes após <b>0</b> min. | Mais mortes após <b>1</b> min. | Mais mortes após <b>{count}</b> min.`
				}
			},
			defaultBombCount: {
				title: `Quantidade de bombas`,
				help: `Esta é a quantidade de bombas que um jogador pode colocar ao mesmo tempo.`
			},
			defaultBombSize: {
				title: `Tamanho da bomba`,
				help: `Este é o raio de explosão de uma bomba. O tamanho é medido em ladrilhos em cada direção.`
			},
			defaultSpeed: {
				title: `Velocidade do jogador`,
				help: `A velocidade de caminhada do jogador.`
			},
			respawnDelay: {
				title: `Tempo para Ressurgir`,
				help: `O tempo que o jogador tem que esperar depois de ser morto antes de poder jogar novamente.`
			},
			bombPush: {
				title: `Empurrar Bomba`,
				help: `Quando ativado, você pode caminhar em direção a uma bomba para empurrá-la e deslizá-la em uma direção.`
			},
			explosionDelay: {
				title: `Tempo para Explodir`,
				help: `O tempo transcorrido antes que uma bomba colocada exploda.`
			},
			chainReaction: {
				title: `Reação em Cadeia`,
				help: `Quando ativada, uma explosão fará com que as bombas dentro do alcance também explodam. As mortes irão para o jogador que colocou a bomba que iniciou a reação em cadeia. Se desativada, essas outras bombas serão removidas em vez de explodir.`
			},
			cratePercentage: {
				title: `Caixas`,
				help: `A porcentagem de caixas que serão mostradas no campo de jogo. As caixas podem ser explodidas e podem conter power-ups.`
			},
			powerUpPercentage: {
				title: `Power-ups`,
				help: `Modifique a probabilidade de que surja um power-up quando uma caixa é destruída.`
			}
		},
		help: {},
		presets: {
			default: {
				title: `Padrão`,
				description: `Campo 9x9 — 3 vidas — 4 jogadores`
			},
			party: {
				title: `Party`,
				description: `Campo Quadrado QR — 6 vidas — 8 jogadores`
			},
			action: {
				title: `Repleto de Ação`,
				description: `Sem caixas — Ressurgimento rápido — 6 vidas — 8 jogadores`
			}
		}
	},
	[GameType.eightBallPool]: {
		heading: `Jogue 8 Ball Pool Online com Amigos`,
		name: `8 Ball Pool`,
		tooltip: `Jogue o popular jogo de bilhar aqui contra um bot ou jogador.`,
		description: `Dê o seu melhor lance na sinuca multiplayer online! Afunde todas as suas bolas e finalize com a bola 8 para ganhar na mesa!`,
		title: `Jogo Multiplayer Grátis para 2 Jogadores`,
		options: {
			turnTime: {
				title: `Tempo para jogada`,
				help: `Quanto tempo cada jogador tem para acertar a bola branca.`
			},
			preview: {
				title: `Visualização`,
				help: `A linha de visualização mostra para onde a bola branca irá depois de ser atingida.`
			},
			illegalBallPocket: {
				title: `Encaçapada Proibida`
			},
			ruleContactRailOnBreak: {
				title: `Bolas na Tabela na Tacada Inicial`,
				help: `Na tacada inicial, determine quantas bolas devem entrar em contato com os lados. Esta regra não se aplica se você encaçapar uma bola.`,
				data: {
					one: `Uma bola`,
					two: `Duas bolas`,
					three: `Três bolas`,
					four: `Quatro bolas`
				}
			},
			assignedGroup: {
				title: `Grupo Atribuído`,
				help: `Determine como cada grupo de bolas (sólidas ou listradas) é atribuído a cada jogador.`,
				data: {
					pocket: `Ao encaçapar`,
					random: `Aleatório ao iniciar`
				}
			},
			ruleTurnCanHitBall: {
				title: `Pode acertar a bola`,
				help: `Ocorre quando o jogador acerta uma bola que não é permitido. A regra não se aplica na tacada inicial.`,
				data: {
					assignedGroup: `Grupo atribuído`,
					assignedGroupPlus: `Grupo atribuído + Bola 8`,
					eitherGroup: `Qualquer grupo`,
					anyBall: `Qualquer bola`
				}
			},
			ruleTurnMustHitBall: {
				title: `Deve Acertar a Bola`,
				help: `Ocorre quando o jogador não acerta uma bola (de "Pode Acertar a Bola") durante sua vez.`
			},
			ruleTurnContactRail: {
				title: `Deve Tocar os Lados`,
				help: `Ocorre quando nenhuma bola atinge os lados da mesa. Esta regra não se aplica se o jogador encaçapar uma bola.`
			},
			ruleConsecutiveFouls: {
				title: `Faltas consecutivas`,
				help: `Determine o que deve acontecer quando um jogador comete várias faltas seguidas. Esta regra desencoraja o comportamento antidesportivo.`,
				data: {
					off: `Desligado`,
					loseOnTwo: `Perda após duas`,
					loseOnThree: `Perda após três`,
					loseOnFour: `Perda após quatro`
				}
			},
			foul: {
				help: {
					disabled: `As faltas estão desabilitadas com as configurações atuais.`
				},
				data: {
					nothing: `Nada`,
					keepTurn: `Continua a vez`,
					endTurn: `Termina a vez`,
					endTurnHand: `Termina a vez + Bola na mão`,
					reset: `Termina a vez + Restaurar mesa`,
					resetHand: `Termina a vez + Restaurar mesa + Bola na mão`,
					instantWin: `Vitória instantânea`,
					instantLoss: `Derrota instantânea`
				}
			},
			foulPocketCueBall: {
				title: `Encaçapar a Bola Branca`,
				help: `Ocorre quando um jogador encaçapa a Bola Branca.`
			},
			foulPocketOpponentBall: {
				title: `Encaçapar uma bola do oponente`,
				help: `Ocorre quando um jogador encaçapa uma bola do adversário. Outras faltas prevalecem sobre esta (por exemplo, acertar primeiro a bola errada).`
			},
			foulPocketOwnAndOpponentBall: {
				title: `Encaçapar uma bola sua e uma do adversário`,
				help: `Ocorre quando um jogador encaçapa uma bola sua e uma do adversário. Outras faltas prevalecem sobre esta (por exemplo, acertar primeiro a bola errada).`
			},
			foulIllegalEightBallBreak: {
				title: `Encaçapar a bola 8 na tacada inicial`,
				help: `Ocorre quando um jogador consegue encaçapar a Bola 8 na tacada inicial.`
			},
			foulIllegalEightBallPocket: {
				title: `Encaçapar a bola 8 de modo proibido`,
				help: `Ocorre quando um jogador encaçapa a Bola 8 e comete uma falta diferente ao mesmo tempo (por exemplo, encaçapa a bola branca também).`
			},
			foulIllegalEightBallPocketTooSoon: {
				title: `Encaçapar a bola 8 antes da hora`,
				help: `Ocorre quando um jogador encaçapa a Bola 8 enquanto ainda tem outras bolas para encaçapar.`
			}
		},
		presets: {
			default: {
				title: `Conjunto de regras Bloob.io`
			},
			wpa: {
				title: `Conjunto de regras WPA`,
				description: `Assemelha-se muito às regras da World Pool-Billiard Association`
			},
			upa: {
				title: `Conjunto de regras UPA`,
				description: `Assemelha-se muito às regras da US Professional Poolplayers Association`
			},
			relaxed: {
				title: `Regras Relaxadas`,
				description: `Punições mais brandas e menos regras`
			},
			ruthless: {
				title: `Regras implacáveis`,
				description: `Qualquer falta resultará em perda instantânea`
			}
		},
		help: {
			field: {
				title: `Mesa de jogo`,
				description: [
					`A mesa contém 6 buracos nos quais as bolas podem ser encaçapadas. Há um total de 16 bolas, uma das quais é a bola branca que você acerta na sua vez.`,
					`Existem 7 bolas listradas e 7 de cor sólida, bem como 1 bola oito preta. No início do jogo todas as bolas são posicionadas em um triângulo com a bola oito no meio. A bola branca é colocada mais longe.`
				]
			},
			breaking: {
				title: `Iniciando o Jogo (Tacada Inicial)`,
				description: [
					`Aquele que tiver a vez primeiro pode usar a bola branca para rebater em direção ao triângulo de bolas (sua posição inicial).`,
					`Existem regras para a tacada inicial. A bola branca não pode ser encaçapada e pelo menos duas bolas (exceto a bola branca) devem atingir as paredes ao redor da mesa. Ao encaçapar uma bola na tacada inicial, você pode fazer outra tacada.`
				]
			},
			gameplay: {
				title: `Jogabilidade`,
				description: [
					`Existem bolas listradas e sólidas. Quem encaçapar uma bola primeiro assume aquele grupo de bolas e tem outra jogada. A partir desse momento, você deve encaçapar apenas bolas listradas ou sólidas.`,
					`A ordem com que você encaçapa suas bolas não importa. Quando você cometer uma falta, seu oponente poderá mover a bola branca na vez dele.`
				]
			},
			objective: {
				title: `Objetivo`,
				description: [
					`Você deve evitar encaçapar a bola oito preta até que tenha encaçapado todas as suas bolas. Você então termina o jogo encaçapando a bola oito. É importante que você não cometa nenhuma falta ao fazê-lo, caso contrário, você perde.`,
					`Encaçapar a bola oito antes da hora resultará em uma derrota instantânea. Certifique-se de mirar com cuidado!`
				]
			}
		}
	}
}
