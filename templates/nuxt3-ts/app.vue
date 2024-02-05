<template>
	<ClientOnly fallback-tag="span" fallback="Loading discord components on the client...">
		<DiscordComponents></DiscordComponents>
	</ClientOnly>
</template>

<style>
body {
	color: #eee;
	background-color: #2a2a2a;
	font-family: Arial, Helvetica, sans-serif;
}
</style>
