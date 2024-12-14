import react from '@astrojs/react';
import { defineConfig } from 'astro/config';

export default defineConfig({
	// Enable many frameworks to support all different kinds of components.
	// No `include` is needed if you are only using a single JSX framework!
	integrations: [
		react({
			include: ['**/react/*']
		})
	]
});
