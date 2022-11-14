import { ErrorMessage } from '../types/error'

export default <ErrorMessage>{
	rateLimit: {
		secure: `Você atingiu o valor limite neste canal seguro. Espere %{seconds} segundo(s).`,
		generic: `Diminua um pouco! Espere %{seconds} segundo(s).`
	},
	generic: {
		desync: `Desculpe, parece que você foi desincronizado. Por favor, tente novamente.`,
		alreadyConnected: null,
		title: `Ocorreu um erro.`,
		invalid: `A informação fornecida é inválida.`,
		texture: `Falha ao carregar uma textura "%{id}".`,
		invalidAction: `Uma ação inválida tipo "%{type}" foi dada.`,
		maintenance: null,
		missingArguments: `Argumentos insuficientes para esta ação.`,
		missingAction: `Um tipo de ação é necessário.`,
		cannotSelf: `Você não pode realizar esta ação para si mesmo.`,
		actionAgainstBot: `Você não pode executar esta ação para um bot.`,
		againstAgainstInactiveUser: `Não é possível executar esta ação em um usuário inativo.`,
		invalidUser: `O usuário com determinada ID não está nesta partida.`,
		invalidTime: `Você não pode executar esta ação neste momento.`,
		versionMismatch: null,
		clipboard: `Não é possível copiar para a área de transferência`
	},
	config: {
		invalidType: `Tipo de configuração fornecida "%{type}" é inválido.`,
		invalidOption: `Modificação de configuração fornecida "%{option}" é inválida`,
		invalidArgument: `Argumento inválido. Não é possível definir "%{id}" to "%{argument}".`,
		displayOnly: `O tipo de configuração fornecido "%{type}" não pode ser modificado.`,
		integer: `A opção "%{id}" deve ser um número inteiro.`,
		max: `A opção "%{id}" tem um valor máximo de "%{max}".`,
		min: `A opção "%{id}" tem um valor mínimo de "%{min}".`,
		increment: `A opção "%{id}" requer incrementos de "%{increment}".`,
		minExceedMaxLength: `O comprimento mínimo não pode ser maior do que o comprimento máximo.`,
		maxSubceedMinLength: `O comprimento máximo não pode ser menor do que o comprimento mínimo.`
	},
	start: {
		fieldRows: `O campo selecionado não pode suportar mais do que %{rows} linhas`,
		fieldCannotFitUsers: `O campo selecionado não pode suportar mais do que %{users} jogadores`,
		whiteCardThreshold: null,
		blackCardThreshold: null,
		insufficientPlayers: `É necessário pelo menos %{min} jogadores para iniciar a partida.`
	},
	game: {
		velocity: `A velocidade fornecida está fora da faixa permitida.`,
		playerForfeited: `Jogador "%{name}" desistiu e perdeu automaticamente.`,
		missedTurnWarning: `Você demorou demais e seu oponente teve sua vez. Se isto acontecer muitas vezes seguidas, você será kickado. (%{current}/%{threshold})`,
		missedTurnKick: `Você foi kickado porque perdeu %{current} turnos consecutivos.`,
		autoTurnWarning: `Você chegou muito tarde e uma mudança foi feita para você. Se isto acontecer muitas vezes seguidas, você vai perder. (%{current}/%{threshold})`,
		autoTurnKick: `Você perdeu automaticamente por ter se atrasado para %{current} movimentos em uma sequência.`,
		insufficientRows: `Este campo não corresponde à quantidade de fileiras selecionadas.`,
		stuckSkip: `Sua vez foi passada, pois você não pode fazer nenhuma jogada.`,
		stuckThreshold: `Você foi eliminado por ter ficado preso por %{moves} movimento(s) em uma fileira.`,
		allStuck: `Ninguém mais pode fazer uma jogada. A partida foi concluída.`,
		invalid: `O tipo de jogo "%{type}" não existe.`,
		invalidMove: `O movimento fornecido é inválido.`,
		invalidVote: null,
		alreadyPlaced: `Você já inseriu algo.`,
		alreadyVoted: null,
		invalidPlacement: `A colocação de sua peça é inválida.`,
		invalidBombPlacement: null,
		cellClaimed: `Uma ou mais células em sua seleção já foram reivindicadas.`,
		colorClaimed: `Esta cor já foi reivindicada por outro usuário.`,
		invalidColumnRow: `A coluna ou linha não está definida ou é inválida.`,
		invalidColumn: `A coluna não está configurada ou inválida.`,
		invalidWord: `A palavra fornecida não está no dicionário utilizado.`,
		wordTooShort: `Seleção de palavras muito curta (Min. %{min})`,
		wordTooLong: `Seleção de palavras muito longa (Max. %{max})`
	},
	card: {
		loadingSets: null,
		invalid: null,
		invalidSet: null,
		invalidSelection: null,
		notInHand: null,
		loadError: null,
		underscore: null,
		empty: null,
		pickLimit: null,
		setSizeLimit: null,
		setName: null
	},
	preset: {
		alreadyApplied: `Esta predefinição já foi aplicada.`,
		invalid: `Você não pode usar o "%{id}" como uma predefinição.`
	},
	match: {
		empty: `Sala fechada. Todos os outros jogadores deixaram a partida.`,
		rematchTimeout: `Você não aceitou o pedido de revanche e foi enviado de volta para o menu principal.`,
		rematchCancelled: `Desculpe! Não há jogadores suficientes para uma revanche.`,
		inactive: `A partida em que você estava foi encerrada, pois ficou inativa por muito tempo.`,
		inactiveWarning: `A partida será encerrada em breve devido à inatividade, a menos que sejam tomadas medidas.`,
		replacedByBot: null,
		kicked: `Você foi expulso da partida em que estava.`,
		deleted: `A partida em que você estava foi eliminada.`,
		invalid: `A partida com a ID "%{id}" não existe.`,
		computer: `Esta é uma partida contra o computador, você não pode participar.`,
		private: `Esta é uma partida particular. Você deve inserir uma identificação para participar.`,
		startStop: `Você não pode iniciar ou parar um jogo que está em andamento.`,
		inProgress: `A partida já está em andamento. Você não pode participar.`,
		full: `Esta partida já está cheia (%{current}/%{max}).`
	},
	profile: {
		profanity: null,
		missingData: `Argumentos de nome de usuário e/ou imagem em falta.`,
		invalidNickname: `O apelido está formatado incorretamente.`,
		invalidPicture: `A imagem está formatada incorretamente.`,
		nicknameMaxLength: null,
		nicknameMinLength: null,
		nicknameAllowedCharacters: null,
		inGame: `Não é possível personalizar seu perfil enquanto o jogo estiver em andamento.`
	},
	requirement: {
		credentials: `Você deu credenciais inválidas.`,
		validAccount: `Sua conta ainda não foi validada. Por favor, salve suas mudanças de perfil.`,
		inLobby: `Você não pode realizar esta ação, pois a partida já começou.`,
		notJudge: null,
		judge: null,
		turn: `Você não pode realizar esta ação, pois não é a sua vez.`,
		duringGame: `Você só pode realizar esta ação enquanto a partida estiver em andamento.`,
		finishedGame: `Você só pode realizar esta ação depois que a partida tiver terminado.`,
		inGame: `Você deve estar em um jogo para realizar esta ação.`,
		notInGame: `Você não pode realizar esta ação enquanto estiver em um jogo.`,
		notMatchmaking: `Você não pode realizar esta ação enquanto estiver fazendo um jogo.`,
		matchHost: `Você não é o anfitrião e não pode executar esta ação.`,
		admin: null
	}
}
