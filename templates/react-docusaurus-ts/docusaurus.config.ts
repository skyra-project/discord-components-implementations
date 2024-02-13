import type * as Preset from '@docusaurus/preset-classic';
import type { Config } from '@docusaurus/types';
import { themes as prismThemes } from 'prism-react-renderer';

const config: Config = {
	scripts: [
		{
			src: '/discord-components.config.js',
			async: false
		}
	],

	title: 'Discord Components Example',
	tagline: 'Example of Discord Components on a Docusaurus powered website',
	favicon: 'img/favicon.ico',

	// Set the production url of your site here
	url: 'https://your-docusaurus-site.example.com',
	// Set the /<baseUrl>/ pathname under which your site is served
	// For GitHub pages deployment, it is often '/<projectName>/'
	baseUrl: '/',

	// GitHub pages deployment config.
	// If you aren't using GitHub pages, you don't need these.
	organizationName: 'skyra-project', // Usually your GitHub org/user name.
	projectName: 'discord-components', // Usually your repo name.

	onBrokenLinks: 'throw',
	onBrokenMarkdownLinks: 'warn',

	// Even if you don't use internationalization, you can use this field to set
	// useful metadata like html lang. For example, if your site is Chinese, you
	// may want to replace "en" with "zh-Hans".
	i18n: {
		defaultLocale: 'en',
		locales: ['en']
	},

	presets: [
		[
			'classic',
			{
				docs: {
					sidebarPath: './sidebars.ts',
					// Please change this to your repo.
					// Remove this to remove the "edit this page" links.
					editUrl: 'https://github.com/skyra-project/discord-components-implementations/tree/main/templates/react-docusaurus-ts/'
				},
				theme: {
					customCss: './src/css/custom.css'
				}
			} satisfies Preset.Options
		]
	],

	themeConfig: {
		// Replace with your project's social card
		image: 'img/docusaurus-social-card.jpg',
		colorMode: {
			defaultMode: 'dark',
			respectPrefersColorScheme: true
		},
		navbar: {
			title: 'Discord Components',
			logo: {
				alt: 'Docusaurus Logo',
				src: 'img/logo.svg'
			},
			items: [
				{
					type: 'docSidebar',
					sidebarId: 'discordComponentsSidebar',
					position: 'left',
					label: 'Discord Components (MDX)'
				},
				{ to: '/page-example', label: 'Discord Components (TSX)', position: 'left' },
				{
					href: 'https://github.com/skyra-project/discord-components',
					label: 'GitHub',
					position: 'right'
				}
			]
		},
		footer: {
			style: 'dark',
			links: [
				{
					title: 'Docs',
					items: [
						{
							label: 'Discord Components (MDX)',
							to: '/docs/discord-components/discord-components-inline'
						}
					]
				},
				{
					title: 'Community',
					items: [
						{
							label: 'Discord',
							href: 'https://join.skyra.pw'
						}
					]
				},
				{
					title: 'More',
					items: [
						{
							label: 'GitHub',
							href: 'https://github.com/skyra-project/discord-components'
						}
					]
				}
			],
			copyright: `Copyright © ${new Date().getFullYear()} Skyra Project, Built with Docusaurus.`
		},
		prism: {
			theme: prismThemes.github,
			darkTheme: prismThemes.dracula
		}
	} satisfies Preset.ThemeConfig
};

export default config;
