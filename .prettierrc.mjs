import sapphirePrettierConfig from '@sapphire/prettier-config';
import merge from 'lodash.merge';

export default {
	...sapphirePrettierConfig,
	plugins: merge(['prettier-plugin-astro'], sapphirePrettierConfig.plugins),
	overrides: merge(
		[
			{
				files: ['README.md', 'templates/react-docusaurus-ts/docs/**/*.mdx', 'templates/react-docusaurus-ts/docs/**/*.md'],
				options: {
					tabWidth: 2,
					useTabs: false,
					printWidth: 120,
					proseWrap: 'always'
				}
			},
			{
				files: '*.astro',
				options: {
					parser: 'astro'
				}
			}
		],
		sapphirePrettierConfig.overrides
	)
};
