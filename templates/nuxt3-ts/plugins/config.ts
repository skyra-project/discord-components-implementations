import { setConfig } from '@skyra/discord-components-core';

function configure() {
	setConfig({
		profiles: {
			maximillian: {
				author: 'Maximillian Osborn',
				avatar: 'https://raw.githubusercontent.com/skyra-project/discord-components-implementations/main/shared/public/avaone.png',
				roleColor: '#f9d61b'
			},
			willard: {
				author: 'Willard Walton',
				avatar: 'https://raw.githubusercontent.com/skyra-project/discord-components-implementations/main/shared/public/avatwo.png',
				roleColor: '#ffb12f'
			},
			skyra: {
				author: 'Skyra',
				avatar: 'https://github.com/NM-EEA-Y.png',
				roleColor: '#1e88e5',
				bot: true,
				verified: true
			},
			favna: {
				author: 'Favna',
				avatar: 'https://github.com/favna.png',
				roleColor: '#a155ab'
			},
			discordjs: {
				author: 'Discord.js Official #announcements',
				avatar: 'https://raw.githubusercontent.com/skyra-project/discord-components-implementations/main/shared/public/discordjs.png',
				roleColor: '#ffffff',
				server: true
			}
		},

		emojis: {
			diamond: {
				name: 'diamond',
				url: 'https://raw.githubusercontent.com/skyra-project/discord-components-implementations/main/shared/public/diamond.png'
			},
			aichansmile: {
				name: 'aichansmile',
				url: 'https://raw.githubusercontent.com/skyra-project/discord-components-implementations/main/shared/public/aichansmile.png'
			},
			dragonite: {
				name: 'dragonite',
				url: 'https://raw.githubusercontent.com/skyra-project/discord-components-implementations/main/shared/public/dragonite.png'
			},
			sapphire: {
				name: 'sapphire',
				url: 'https://raw.githubusercontent.com/skyra-project/discord-components-implementations/main/shared/public/sapphire.png'
			}
		}
	});
}

export default defineNuxtPlugin({
	name: 'discord-components-config',
	enforce: 'pre', // or 'post'
	async setup() {
		configure();
	},
	hooks: {
		'vue:setup'() {
			configure();
		},
		'app:created'() {
			configure();
		},
		'app:beforeMount'() {
			configure();
		}
	},
	env: {
		islands: true
	}
});
