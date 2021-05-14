import error from './error'
import game from './game'

export default {
	error,
	game,
	header: {
		message: {
			lobby: 'Match Lobby',
			finished: 'Match Finished',
			tied: `Match Tied`,
			pickActionCard: 'Picking Action Card',
			makingCardSelections: 'Making Card Selection',
			voting: 'Voting',
			voteResults: 'Vote Results',
			flippingField: 'Flipping Field',
			yourTurn: 'Your Turn',
			nameTurn: `%{name}'s Turn`,
			roundCount: `Round %{current} out of %{total}`
		},
		description: {
			lobby: `Waiting for players`,
			start: `Match starts in %{TEXT}...`,
			timeRemaining: `%{CLOCK} remaining...`,
			nextRound: `Next round in %{TEXT}...`,
			youWon: `You Won`,
			nameWon: `%{name} Has Won`
		}
	},
	placeholder: {
		cardContent: 'Fill in card content...',
		cardSetName: 'Fill in name for this card set...',
		nickname: 'Fill in a nickname...',
		matchId: 'Match ID or URL',
		message: 'Message...',
		username: 'Username',
		password: 'Password'
	},
	language: {
		'nl-NL': 'Dutch',
		'en-US': 'English (US)',
		'en-GB': 'English (UK)',
		'fr-FR': 'French',
		'de-DE': 'German',
		'it-IT': 'Italian',
		'pl-PL': 'Polish',
		'pt-BR': 'Portuguese (BR)',
		'es-ES': 'Spanish (EU)',
		'es-MX': 'Spanish (MX)',
		'sv-SE': 'Swedish'
	},
	topHeader: {
		matchesWaiting: `<b>0</b> matches waiting | <b>1</b> match waiting | <b>{count}</b> matches waiting`,
		playingGame: `<b>{count}</b> playing this game`,
		online: `<b>{count}</b> online`
	},
	content: {
		pickYourself: 'Pick for yourself',
		round: 'Round (%{current}/%{total})',
		skip: 'Skip (%{current}/%{total})',
		voteReduceTime: `The remaining time is automatically reduced when everyone has voted.`,
		filterDisclaimer: `Please note that this filter can only be guaranteed for official card sets. Custom sets may not work with this filter.`,
		resize: '<span class="warning-text">Resizes the interface to fit field.</span>',
		winningSelection: `%{name} won this round with selection %{selection}`,
		noticeDescription: 'A notice is stuck on the top of the page until removed',
		actionResponseCardCounter: `Action & response card counter. Some sets use the same cards; duplicates are removed automatically. Filtering <b>NSFW</b> or <b>Specific Cards</b> also reduces the total amount.`
	},
	category: {
		misc: 'Misc',
		filter: 'Filter',
		times: 'Times',
		round: 'Round',
		flip: 'Flip',
		basic: 'Basic',
		language: 'Language'
	},
	time: {
		hours: '0 hours | 1 hour | {count} hours',
		minutes: '0 minutes | 1 minute | {count} minutes',
		seconds: '0 seconds | 1 second | {count} seconds'
	},
	count: {
		files: '0 files | 1 file | {count} files',
		points: '0 points | 1 point | {count} points',
		wins: '0 wins | 1 win | {count} wins',
		cards: '0 cards | 1 card | {count} cards',
		matchesFound: '0 matches found | 1 match found | {count} matches found',
		matchesWaiting: '0 matches waiting | 1 match waiting | {count} matches waiting',
		needMorePlayers: 'Need 0 more players | Need 1 more player | Need {count} more players'
	},
	misc: {
		maintenance: 'Maintenance',
		notice: 'Notice',
		pending: 'Pending',
		connection: 'Connection',
		ping: 'Ping',
		timeOffset: 'Time Offset',
		version: 'Version',
		userID: 'User ID',
		unknown: 'Unknown',
		adminLogin: 'Admin Login',
		globalAnnouncement: 'Global Announcement',
		broadcast: 'Broadcast',
		login: 'Login',
		about: 'About',
		public: 'Public',
		private: 'Private',
		reserved: 'Rematch',
		yes: 'Yes',
		no: 'No',
		disabled: 'Disabled',
		enabled: 'Enabled',
		excluded: 'Excluded',
		included: 'Included',
		nsfw: 'NSFW',
		specificCards: 'Specific Cards',
		view: 'View',
		new: 'New',
		fixed: 'Fixed',
		changed: 'Changed',
		confirm: 'Confirm',
		close: 'Close',
		edit: 'Edit',
		delete: 'Delete',
		cancel: 'Cancel',
		reset: 'Reset',
		start: 'Start',
		download: 'Download',
		settings: 'Settings',
		preset: 'Preset',
		averageLength: 'Avg. Length',
		words: 'Words',
		score: 'Score',
		and: 'and',
		rank: 'Rank',
		points: 'Points',
		player: 'Player',
		players: 'Players',
		selectAll: 'Select all',
		deselectAll: 'Deselect all',
		areYouSure: 'Are you sure?',
		resetData: 'Reset Data',
		resetLobby: 'Reset Lobby',
		customise: 'Customise',
		cancelCountdown: 'Cancel Countdown',
		inviteOthers: 'Invite Others',
		rematch: 'Rematch',
		activeFilters: 'Active Filters',
		minMax: 'Min. %{min} | Max. %{max}',
		madeBy: 'Made by %{name}',
		incrementCounter: 'Increments of %{count}',
		selectedOfLimit: 'Selected %{current} out of %{total} limit',
		helpLocalise: 'Help improve localisation',
		howToPlay: 'Learn how to play this game',
		volume: {
			interface: 'Interface Volume',
			effects: 'Effects Volume'
		},
		match: {
			create: 'Create Match',
			start: 'Start Match',
			starting: 'Match Starting',
			leave: 'Leave Match',
			join: 'Join Match',
			rejoin: 'Rejoin Match',
			full: 'Full Match',
			reserved: 'Ongoing Rematch',
			waiting: 'Waiting for leader to start the match'
		},
		matches: {
			browse: 'Browse Matches',
			available: 'Available Matches',
			noneAvailable: 'No Available Matches'
		},
		game: {
			join: 'Join %{title} Match',
			help: '%{title} Help',
			leader: 'Game Leader',
			duration: 'Game Duration',
			menu: 'Game Menu'
		},
		card: {
			draw: 'Draw Cards',
			content: 'Card Content',
			editor: 'Card Editor',
			create: 'Create Card',
			none: 'No Cards',
			total: 'Total Cards',
			view: 'View Cards',
			noneFound: 'No Cards Found',
			type: {
				title: 'Card Type',
				black: 'Action (Black)',
				white: 'Response (White)'
			},
			sets: {
				create: 'Create Card Set',
				import: 'Import Card Set',
				name: 'Card Set Name',
				title: 'Card Sets',
				importer: 'Card Set Importer',
				namedTitle: 'Card Set "%{title}"',
				custom: 'Custom Card Sets',
				default: 'Default Card Sets',
				noneFound: 'No Sets Found',
				noneSelected: 'No Sets Selected',
				edit: 'Edit Sets',
				view: 'View Sets'
			}
		},
		select: {
			language: 'Select a Language',
			colour: 'Select a Colour'
		},
		changes: {
			latest: 'Latest Changes',
			new: 'New Changes',
			save: 'Save Changes',
			previous: 'See Previous Changes'
		},
		return: {
			menu: 'Return to Menu',
			lobby: 'Return to Lobby'
		}
	},
	info: {
		file: {
			upload: `Click to browse or drag your file(s) in here`,
			uploadAdditional: `Add more files by dragging or clicking here`
		},
		copy: {
			url: {
				success: `Copied URL to clipboard!`,
				error: `Unable to copy to clipboard`
			}
		},
		user: {
			inactive: `User is not connected to this match.`
		},
		match: {
			leave: {
				player: `You may not be able to join back if you choose to leave.`,
				alone: `This game will be disbanded when you leave, as you are the only person in it.`,
				others: `Your leadership will be transferred to another person when you leave.`
			},
			join: {
				private: `You can join a private match by filling in the four-digit ID.`,
				again: `Play again with the same settings`,
				another: `Join %{name} in another match`,
				rematch: `%{name} would like a rematch`
			},
			finishedSettings: `Finished editing the match settings?`,
			available: `New matches will show up here`,
			rematch: `Would you like to play again?`,
			public: `<b>Public</b>: Anyone can join by browsing the available matches.`,
			private: `<b>Private</b>: Players can only join using the URL or 4-digit ID.`,
			reserved: `<b>Rematch</b>: This game is reserved for users currently in this match only. No other players may join.`
		},
		judge: {
			pickingCard: `Judge %{name} is picking an action card`,
			waitForPicks: `You are the <b>judge</b> this round — wait for everyone to make their picks`
		},
		navigate: {
			self: `Navigate yourself`,
			judge: `See what judge sees`
		},
		opponent: {
			inactive: `Your opponent was inactive`,
			multipleInactive: `All opponents were inactive`
		},
		maintenance: {
			title: 'Under Maintenance',
			noMatch: 'You cannot make or join a match right now',
			description: 'During maintenance, nobody can create or join a match'
		},
		vote: {
			noSelfVote: 'Cannot vote for yourself',
			selection: 'Vote for %{selection}',
			selectionChange: 'Change vote to %{selection}',
			selected: 'You voted for %{selection}'
		},
		about: {
			description: `Bloob.io is a project of passion consisting of multiplayer browser games. Games should be fun, configurable, and easily accessible. Feel free to make suggestions!`,
			developedBy: 'Developed by %{name}',
			iconsSource: 'Icons courtesy of %{name} (Free)',
			soundsSource: 'Sounds provided by %{name} (Licensed)',
			rottenApples: 'Rotten Apples based on %{name} (Creative Commons BY-NC-SA 2.0)',
			support: 'Buy me a pizza'
		},
		card: {
			sets: {
				importer: `You can upload card sets here. Card sets from third parties (Cardcast, Pretend You're Xyzzy) have limited support and may contain errors. Please check on the resulting card sets afterwards.`,
				delete: `Deleting custom card set named "%{name}" cannot be undone. Download the set locally first if you wish to be able to recover it at a later time.`,
				storage: `Custom card sets are stored in your browser. Keep them safe by having a downloaded copy stored somewhere else.`,
				share: 'Share and browse for custom card sets here.',
				noneSelected: 'The match leader must select card sets.',
				notLeader: `Your imported cards are hidden, as you are not the game leader.`,
				sizeLimit: `Each custom card set takes up an amount of available storage. For performance reasons, a single game cannot use more than <b>%{size}</b> of custom card sets at a time.`,
				processing: {
					finished: 'Processed all %{total} card sets',
					progress: 'Processing card set %{current} out of %{total}',
					failed: 'Failed to process card set "%{name}"'
				},
				empty: {
					leader: `Your custom card sets will show up here.`,
					other: `The game leader has not selected any custom card sets.`,
					editor: `Your (imported) custom card sets will show up here.`
				}
			},
			edit: {
				success: `Modified card successfully!`
			},
			create: {
				success: `Added a new card successfully!`
			},
			underscore: 'Use _ to mark a space for reaction cards',
			noType: `There are no %{type} cards`,
			type: {
				black: 'action',
				white: 'response'
			},
			pickAction: `Pick an action card for this round`
		},
		game: {
			menu: 'Feel like playing something else?'
		},
		flip: {
			turns: 'Turns to flip | Turn to flip | Turns to flip',
			inProgress: 'Flipping field'
		},
		data: {
			unsaved: `You have unsaved changes which will be erased if you proceed.`,
			reset: `Resetting your data is irreversible and will clear your profile, settings, and statistics.`
		}
	}
}
