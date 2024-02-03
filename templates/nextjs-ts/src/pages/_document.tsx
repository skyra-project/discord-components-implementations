import { Head, Html, Main, NextScript } from 'next/document';
import Script from 'next/script';

export default function Document() {
	return (
		<Html lang="en">
			<Head />
			<body>
				<Main />
				<NextScript />
				<Script src="/discord-components.config.js" strategy="beforeInteractive" />
			</body>
		</Html>
	);
}
