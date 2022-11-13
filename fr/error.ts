import { ErrorMessage } from '../types/error'

export default <ErrorMessage>{
	rateLimit: {
		secure: `Tu as atteint la limite dans ce canal sécurisé. Attends %{seconds} seconde(s).`,
		generic: `Ralentis un peu! Attends %{seconds} seconde(s).`
	},
	generic: {
		desync: `Désolé, on dirait que tu as été désynchronisé. Essaie à nouveau.`,
		alreadyConnected: null,
		title: `Une erreur s'est produite.`,
		invalid: `Les données fournies sont invalides.`,
		texture: `Le téléchargement de la texture "%{id}" a échoué.`,
		invalidAction: `Un action invalide de type "%{type}" a été donnée.`,
		maintenance: null,
		missingArguments: `Arguments nécessaires pour cette action manquants.`,
		missingAction: `Un type d'action est requis.`,
		cannotSelf: `Tu ne peux pas réaliser cette action sur toi-même.`,
		actionAgainstBot: `Tu ne peux pas réaliser cette action sur un bot.`,
		againstAgainstInactiveUser: `Cette action ne peut être réalisée sur un utilisateur inactif.`,
		invalidUser: `L'utilisateur avec l'ID donné n'est pas dans cette partie.`,
		invalidTime: `Tu ne peux pas réaliser cette action en ce moment.`,
		versionMismatch: null,
		clipboard: `Impossible de copier dans le presse-papiers!`
	},
	config: {
		invalidType: `Configuration invalide de type "%{type}".`,
		invalidOption: `Modification de configuration "%{option}" invalide.`,
		invalidArgument: `Argument invalide. Impossible d'établir "%{id}" à "%{argument}".`,
		displayOnly: `Type de configuration "%{type}" ne peut être modifié.`,
		integer: `Option "%{id}" doit être un nombre entier.`,
		max: `Option "%{id}" a une valeur maximale de "%{max}".`,
		min: `Option "%{id}" a une valeur minimale de "%{min}".`,
		increment: `Option "%{id}" requiert des incréments de "%{increment}".`,
		minExceedMaxLength: `La longueur minimale ne peut pas être supérieure à la longueur maximale.`,
		maxSubceedMinLength: `La longueur maximale ne peut pas être inférieure à la longueur minimale.`
	},
	start: {
		fieldRows: `Les champs sélectionnés ne peuvent supporter plus de %{rows} rangées.`,
		fieldCannotFitUsers: `Les champs sélectionnés ne peuvent supporter plus de %{users} joueurs.`,
		whiteCardThreshold: null,
		blackCardThreshold: null,
		insufficientPlayers: `Au moins %{min} joueurs sont requis pour commencer la partie.`
	},
	game: {
		velocity: `La vélocité donnée est hors de l'intervalle permis.`,
		playerForfeited: `Joueur "%{name}" a déclaré forfait et a automatiquement perdu.`,
		missedTurnWarning: `Tu as pris trop de temps et le tour a été donné à ton adversaire. Si ceci se produit trop de fois une à la suite de l'autre, tu seras éliminé. (%{current}/%{threshold})`,
		missedTurnKick: `Tu as été élminé pour avoir manqué %{current} tour(s) de suite.`,
		autoTurnWarning: `Tu as pris trop de temps, alors un mouvement a été joué à ta place. Si ceci se produit trop de fois, une à la suite de l'autre, tu perdras la partie. (%{current}/%{threshold})`,
		autoTurnKick: `Tu as perdu automatiquement parce que tu as joué en retard %{current} movement(s) de suite.`,
		insufficientRows: `Ce champ ne correspond pas au nombre de rangée sélectionnées.`,
		stuckSkip: `Ton tour a été passé puisque tu ne peux faire de mouvement.`,
		stuckThreshold: `Tu as été éliminé parce que tu n'a pas pu faire de mouvement %{moves} fois de suite.`,
		allStuck: `Personne ne peut plus faire de mouvement. La partie est terminée.`,
		invalid: `Le type de jeu "%{type}" n'existe pas.`,
		invalidMove: `Le mouvement donné est invalide.`,
		invalidVote: null,
		alreadyPlaced: `Tu as déjà placé quelque chose.`,
		alreadyVoted: null,
		invalidPlacement: `Ton placement de pièce est invalide.`,
		invalidBombPlacement: null,
		cellClaimed: `Une ou plusieurs cellules de ta sélection ont déjà été réclamées.`,
		colorClaimed: `Cette couleur a déjà été réclamée par un autre utilisateur.`,
		invalidColumnRow: `La colonne ou la rangée n'est pas configurée ou est invalide.`,
		invalidColumn: `La colonne n'est pas configurée ou est invalide.`,
		invalidWord: `Le mot donné ne figure pas dans le dictionnaire utilisé.`,
		wordTooShort: `La sélection du mot est trop courte (Min. %{min})`,
		wordTooLong: `La sélection du mot est trop longue (Max. %{max})`
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
		alreadyApplied: `Ce préréglage a déjà été appliqué.`,
		invalid: `Tu ne peux utiliser "%{id}" en tant que préréglage.`
	},
	match: {
		empty: `La salle est fermée. Tous les autres joueurs ont quitté la partie.`,
		rematchTimeout: `Tu n'as pas accepté la demande de revanche et tu as été redirigé vers le menu principal.`,
		rematchCancelled: `Désolé! Il n'y a pas assez de joueurs restants pour une revanche.`,
		inactive: `La partie dans laquelle tu étais a été fermée pour cause d'inactivité pendant trop longtemps.`,
		inactiveWarning: `La partie fermera bientôt pour cause d'inactivité à moins qu'une action soit réalisée.`,
		replacedByBot: null,
		kicked: `Tu as été expulsé de la partie dans laquelle tu étais.`,
		deleted: `La partie dans laquelle tu étais a été supprimée.`,
		invalid: `La partie avec ID "%{id}" n'existe pas.`,
		computer: `Ceci est une partie contre l'ordinateur, tu ne peux pas t'y joindre.`,
		private: `Ceci est une partie privée. Tu dois entrer un ID pour t'y joindre.`,
		startStop: `Tu ne peux pas commencer ou interrompre un jeu en cours.`,
		inProgress: `La partie est déjà en cours. Tu ne peux t'y joindre.`,
		full: `La partie est déjà pleine (%{current}/%{max}).`
	},
	profile: {
		profanity: null,
		missingData: `Nom d'utilisateur et/ou image manquants.`,
		invalidNickname: `Surnom formaté incorrectement.`,
		invalidPicture: `Image formatée incorrectement.`,
		nicknameMaxLength: null,
		nicknameMinLength: null,
		nicknameAllowedCharacters: null,
		inGame: `Ton profil ne peut pas être personalisé pendant que la partie est en cours.`
	},
	requirement: {
		credentials: `Tu as donné des informations d'identifications invalides.`,
		validAccount: `Ton compte n'a pas encore été validé. Sauvegarde les changements faits à ton profil.`,
		inLobby: `Tu ne peux pas réaliser cette action puisque la partie a déjà commencé.`,
		notJudge: null,
		judge: null,
		turn: `Tu ne peux pas réaliser cette action puisque ce n'est pas à ton tour.`,
		duringGame: `Tu ne peux seulement réaliser cette action pendant que la partie est en cours.`,
		finishedGame: `Tu ne peux seulement réaliser cette action après que la partie soit finie.`,
		inGame: `Tu dois être dans le jeu pour réaliser cette action.`,
		notInGame: `Tu ne peux pas réaliser cette action pendant que tu es dans un jeu.`,
		notMatchmaking: `Tu ne peux pas réaliser cette action pendant que le jumelage est en cours.`,
		matchHost: `Tu n'es pas l'hôte, donc tu ne peux pas réaliser cette action.`,
		admin: null
	}
}
