export default defineNuxtConfig({
	devtools: { enabled: true },
	vue: {
		compilerOptions: {
			isCustomElement: (tag) => tag.startsWith('discord-')
		}
	}
});
