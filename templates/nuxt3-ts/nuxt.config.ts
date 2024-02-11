export default defineNuxtConfig({
	devtools: { enabled: true },
	vue: {
		compilerOptions: {
			isCustomElement: (tag) => tag.startsWith('discord-')
		}
	},
	app: {
		head: {
			charset: 'utf-8',
			viewport: 'width=device-width, initial-scale=1',
			title: 'Nuxt Sample',
			meta: [{ name: 'description', content: 'Sample for Discord Components using Nuxt' }]
		}
	}
});
