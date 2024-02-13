import DiscordComponents from '@site/src/components/DiscordComponents/DiscordComponents';
import Layout from '@theme/Layout';

export default function PageExample() {
	return (
		<Layout title="Docusaurus TSX Example" description="Sample for Discord Components using Docusaurus on a TSX page">
			<main style={{ padding: '2rem' }}>
				<DiscordComponents />
			</main>
		</Layout>
	);
}
