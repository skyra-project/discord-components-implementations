import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';

export const metadata: Metadata = {
	title: 'Discord Components Sample',
	description: 'Sample for Discord Components using NextJS in App Routing mode'
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang="en">
			<body>{children}</body>
			<Script src="/discord-components.config.js" strategy="afterInteractive" />
		</html>
	);
}
