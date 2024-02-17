import {
	DiscordActionRow,
	DiscordAttachment,
	DiscordAttachments,
	DiscordBold,
	DiscordButton,
	DiscordCode,
	DiscordCommand,
	DiscordCustomEmoji,
	DiscordEmbed,
	DiscordEmbedDescription,
	DiscordEmbedField,
	DiscordEmbedFields,
	DiscordEmbedFooter,
	DiscordHeader,
	DiscordInvite,
	DiscordItalic,
	DiscordLink,
	DiscordMention,
	DiscordMessage,
	DiscordMessages,
	DiscordQuote,
	DiscordReaction,
	DiscordReactions,
	DiscordReply,
	DiscordSpoiler,
	DiscordSystemMessage,
	DiscordTenorVideo,
	DiscordThread,
	DiscordThreadMessage,
	DiscordTime,
	DiscordUnderlined
} from '@skyra/discord-components-react';

export default function Home() {
	return (
		<>
			<div>
				<div>
					<h1 className="logo">@skyra/discord-components-core</h1>
					<span>
						[
						<a target="_blank" rel="noopener noreferrer" href="https://github.com/skyra-project/discord-components/">
							Github
						</a>
						]
					</span>
				</div>
				<main>
					<h3 className="title">A normal conversation</h3>
					<DiscordMessages>
						<DiscordMessage author="Alyx Vargas"> Hey guys, I'm new here! Glad to be able to join you all! </DiscordMessage>
						<DiscordMessage
							author="Fenton Smart"
							avatar="https://raw.githubusercontent.com/skyra-project/discord-components-implementations/main/shared/public/avafive.png"
						>
							{' '}
							Hi, I'm new here too!{' '}
						</DiscordMessage>
						<DiscordMessage profile="maximillian">
							Hey, <DiscordMention>Alyx Vargas</DiscordMention> and <DiscordMention>Dawn</DiscordMention>. Welcome to our server!
							<br />
							Be sure to read through the <DiscordMention type="channel">rules</DiscordMention>. You can ping{' '}
							<DiscordMention type="role" color="#70f0b4">
								Support
							</DiscordMention>{' '}
							if you need help.
						</DiscordMessage>
						<DiscordMessage profile="willard">Hello everyone! How's it going?</DiscordMessage>
						<DiscordMessage author="Alyx Vargas" highlight>
							Thank you <DiscordMention highlight>Maximillian Osborn</DiscordMention>!
						</DiscordMessage>
						<DiscordMessage
							author="Kayla Feeney"
							avatar="https://raw.githubusercontent.com/skyra-project/discord-components-implementations/main/shared/public/avafour.png"
						>
							I'm doing well, <DiscordMention>Willard Walton</DiscordMention>. What about yourself?
						</DiscordMessage>
						<DiscordMessage profile="willard"> s!8ball How am I doing today? </DiscordMessage>
						<DiscordMessage profile="skyra"> Yes. </DiscordMessage>
					</DiscordMessages>

					<h3 className="title">The different kind of mentions</h3>
					<DiscordMessages>
						<DiscordMessage author="Alyx Vargas">
							<DiscordMention type="user">users</DiscordMention> <br />
							<DiscordMention type="role" color="#ff0000">
								roles with #ff0000
							</DiscordMention>{' '}
							<br />
							<DiscordMention type="channel">channels</DiscordMention> <br />
							<DiscordMention type="voice">voice channels</DiscordMention> <br />
							<DiscordMention type="locked">locked channels</DiscordMention> <br />
							<DiscordMention type="thread">thread channels</DiscordMention> <br />
							<DiscordMention type="forum">forum channels</DiscordMention> <br />
							<DiscordMention type="server-guide">server guide channels</DiscordMention> <br />
							<DiscordMention type="channels-and-roles">channels-and-roles channel</DiscordMention> <br />
							<DiscordMention type="customize-community">customize-community channel</DiscordMention> <br />
							<DiscordMention type="slash">slash commands</DiscordMention>
						</DiscordMessage>
					</DiscordMessages>

					<h3 className="title">Light mode</h3>
					<DiscordMessages light-theme>
						<DiscordMessage>Look at me I'm a beautiful butterfly</DiscordMessage>
						<DiscordMessage edited>Fluttering in the sunlight 🌞</DiscordMessage>
						<DiscordMessage author="Alyx Vargas">
							Thank you
							<DiscordMention highlight>Maximillian Osborn</DiscordMention>!
						</DiscordMessage>
					</DiscordMessages>

					<h3 className="title">Compact mode</h3>
					<DiscordMessages compactMode>
						<DiscordMessage>Look at me I'm a beautiful butterfly</DiscordMessage>
						<DiscordMessage>Fluttering in the moonlight 🌝</DiscordMessage>
						<DiscordMessage>Waiting for the day when</DiscordMessage>
						<DiscordMessage>Compact mode would be turned on</DiscordMessage>
						<DiscordMessage>Oh here it is!</DiscordMessage>
					</DiscordMessages>

					<h3 className="title">Markdown Styling</h3>
					<DiscordMessages>
						<DiscordMessage>
							<DiscordBold>I am bold text!</DiscordBold>
						</DiscordMessage>
						<DiscordMessage>
							<DiscordItalic>I am italic text!</DiscordItalic>
						</DiscordMessage>
						<DiscordMessage>
							<DiscordBold>
								<DiscordItalic>I am bold italic text!</DiscordItalic>
							</DiscordBold>
						</DiscordMessage>
						<DiscordMessage>
							<DiscordUnderlined>I am underlined text!</DiscordUnderlined>
						</DiscordMessage>
						<DiscordMessage>
							<DiscordCode>I am inline-code text!</DiscordCode>
						</DiscordMessage>
						<DiscordMessage>
							<DiscordCode multiline>I am multi-\nline code text!</DiscordCode>
						</DiscordMessage>
						<DiscordMessage>
							<DiscordSpoiler>I am spoiler text!</DiscordSpoiler>
						</DiscordMessage>
						<DiscordMessage>
							<DiscordQuote>I am quoted text!</DiscordQuote>
						</DiscordMessage>
					</DiscordMessages>

					<h3 className="title">No Background mode</h3>
					<DiscordMessages no-background>
						<DiscordMessage>This message blends perfectly with your own background</DiscordMessage>
						<DiscordMessage>No Background mode is turned on here</DiscordMessage>
					</DiscordMessages>

					<h3 className="title">Mentions</h3>
					<DiscordMessages>
						<DiscordMessage profile="maximillian">
							Hey, <DiscordMention>Alyx Vargas</DiscordMention> and <DiscordMention>Dawn</DiscordMention>. Welcome to our server! Be
							sure to read through the <DiscordMention type="channel">rules</DiscordMention>. You can ping
							<DiscordMention type="role" color="#70f0b4">
								Support
							</DiscordMention>
							if you need help. Feel free to join
							<DiscordMention type="voice">General</DiscordMention>
							and talk with us and post thoughts in <DiscordMention type="forum">feedback</DiscordMention>.
						</DiscordMessage>
						<DiscordMessage author="Alyx Vargas">
							Hey there
							<DiscordMention highlight>Maximillian Osborn</DiscordMention>, thanks! I will!
						</DiscordMessage>
						<DiscordMessage profile="maximillian">
							Also, make sure to run
							<DiscordMention type="slash">profile</DiscordMention> to create your server profile!
						</DiscordMessage>
					</DiscordMessages>

					<h3 className="title">Custom Discord Emojis</h3>
					<DiscordMessages>
						<DiscordMessage profile="favna">
							Hey these are some custom emojis:
							<DiscordCustomEmoji
								name="blobparty"
								url="https://raw.githubusercontent.com/skyra-project/discord-components-implementations/main/shared/public/blobparty.gif"
							></DiscordCustomEmoji>
							<DiscordCustomEmoji name="skyra" url="https://github.com/NM-EEA-Y.png"></DiscordCustomEmoji>
							<DiscordEmbed slot="embeds" color="#0F52BA" embed-title="diamond Emojis in the embed title">
								<DiscordEmbedDescription slot="description">
									Custom emojis in the embed description:
									<DiscordCustomEmoji
										name="pikawow"
										url="https://raw.githubusercontent.com/skyra-project/discord-components-implementations/main/shared/public/pikawow.png"
										embed-emoji
									></DiscordCustomEmoji>
								</DiscordEmbedDescription>
								<DiscordEmbedFields slot="fields">
									<DiscordEmbedField fieldTitle="dragonite Custom emojis in the field title">
										Custom emojis in the field content <DiscordCustomEmoji name="sapphire" embed-emoji></DiscordCustomEmoji>
									</DiscordEmbedField>
								</DiscordEmbedFields>
							</DiscordEmbed>
						</DiscordMessage>
					</DiscordMessages>

					<h3 className="title">Server Invites</h3>
					<DiscordMessages>
						<DiscordMessage profile="favna">
							discord.gg/djs <br />
							discord.gg/code <br />
							discord.gg/6gakFR2
							<DiscordAttachments slot="attachments">
								<DiscordInvite
									name="discord.js - Imagine a bot"
									icon="https://raw.githubusercontent.com/skyra-project/discord-components-implementations/main/shared/public/discordjs.png"
									url="https://discord.gg/djs"
									online={16417}
									members={87147}
									verified={true}
								></DiscordInvite>
								<DiscordInvite
									name="The Coding Den"
									icon="https://raw.githubusercontent.com/skyra-project/discord-components-implementations/main/shared/public/tcd.png"
									url="https://discord.gg/code"
									online={18456}
									members={73548}
									partnered={true}
								></DiscordInvite>
								<DiscordInvite
									name="Skyra Lounge"
									url="https://join.skyra.pw"
									icon="https://raw.githubusercontent.com/skyra-project/discord-components-implementations/main/shared/public/skyralounge.gif"
									online={176}
									members={738}
								></DiscordInvite>
							</DiscordAttachments>
						</DiscordMessage>
					</DiscordMessages>

					<h3 className="title">Image Attachments with small images</h3>
					<DiscordMessages>
						<DiscordMessage profile="Alyx Vargas">
							That's a very small logo image!
							<DiscordAttachment
								slot="attachments"
								url="https://raw.githubusercontent.com/skyra-project/discord-components-implementations/main/shared/public/lit.png"
								height={100}
								width={100}
								alt="lit-logo"
							/>
						</DiscordMessage>
					</DiscordMessages>

					<h3 className="title">Image Attachments with large images</h3>
					<DiscordMessages>
						<DiscordMessage profile="favna">
							Hey guys, check out this awesome, cute, and totally amazing dragon!
							<DiscordAttachment
								slot="attachments"
								url="https://raw.githubusercontent.com/skyra-project/discord-components-implementations/main/shared/public/dragonite.png"
								height={512}
								width={512}
								alt="dragonite"
							/>
						</DiscordMessage>
					</DiscordMessages>

					<h3 className="title">System Messages</h3>
					<DiscordMessages>
						<DiscordSystemMessage type="join">
							Welcome, <i style={{ color: '#a155ab' }}>Snazzah</i>. We hope you brought pizza.
							<DiscordReactions slot="reactions">
								<DiscordReaction
									name="👀"
									emoji="https://raw.githubusercontent.com/skyra-project/discord-components-implementations/main/shared/public/eyes.svg"
								></DiscordReaction>
							</DiscordReactions>
						</DiscordSystemMessage>
						<DiscordSystemMessage type="join">
							<i>Snazzah</i> has added <i>Discord Developers #DiscordApiAnnouncements</i> to this channel. Its most important updates
							will show up here.
						</DiscordSystemMessage>
						<DiscordSystemMessage type="boost">
							{' '}
							<i style={{ color: '#a155ab' }}>Favna</i> just boosted the server!{' '}
						</DiscordSystemMessage>
						<DiscordSystemMessage type="thread">
							<i style={{ color: '#a155ab' }}>Favna</i> started a thread: <i>Skyra Suggestion Thread</i>. See all <i>threads</i>.
						</DiscordSystemMessage>
					</DiscordMessages>

					<DiscordMessages>
						<DiscordSystemMessage type="join">
							{' '}
							<i>Snazzah</i> added <i>Favna</i> to the group.{' '}
						</DiscordSystemMessage>
						<DiscordSystemMessage type="call">
							{' '}
							<i>Favna</i> started a call that lasted an hour.{' '}
						</DiscordSystemMessage>
						<DiscordSystemMessage type="edit">
							{' '}
							<i>Snazzah</i> changed the channel icon.{' '}
						</DiscordSystemMessage>
						<DiscordSystemMessage type="edit" channel-name>
							<i>Snazzah</i> changed the channel name: <b>A humble Group DM</b>
						</DiscordSystemMessage>
						<DiscordSystemMessage type="missed-call">
							{' '}
							You missed a call from <i>Favna</i> that lasted a minute.{' '}
						</DiscordSystemMessage>
						<DiscordSystemMessage type="leave">
							{' '}
							<i>Favna</i> left the group.{' '}
						</DiscordSystemMessage>
						<DiscordSystemMessage type="pin">
							<i>Favna</i> pinned <i>a message</i> to this channel. See all <i>pinned messages</i>.
						</DiscordSystemMessage>
						<DiscordSystemMessage type="alert">Warning! Warning! This library is the coolest of them all!</DiscordSystemMessage>
						<DiscordSystemMessage type="error">Error! Cool overload!.</DiscordSystemMessage>
					</DiscordMessages>

					<h3 className="title">Threads</h3>
					<DiscordMessages>
						<DiscordSystemMessage type="thread">
							<i style={{ color: '#a155ab' }}>Favna</i> started a thread: <i>Skyra Suggestion Thread</i>. See all <i>threads</i>.
							<DiscordThread slot="thread" cta="2 Messages">
								<DiscordThreadMessage profile="skyra">Pong!</DiscordThreadMessage>
							</DiscordThread>
						</DiscordSystemMessage>
						<DiscordMessage profile="favna">
							Let's make a thread!
							<DiscordThread slot="thread" name="A cool thread!">
								There are no messages in this thread yet.
							</DiscordThread>
						</DiscordMessage>
					</DiscordMessages>

					<h3 className="title">Reactions</h3>
					<DiscordMessages>
						<DiscordMessage profile="favna">
							React to this message!
							<DiscordReactions slot="reactions">
								<DiscordReaction
									name="👍"
									emoji="https://raw.githubusercontent.com/skyra-project/discord-components-implementations/main/shared/public/thumbsup.svg"
									count={1}
								></DiscordReaction>
								<DiscordReaction
									name="👀"
									emoji="https://raw.githubusercontent.com/skyra-project/discord-components-implementations/main/shared/public/eyes.svg"
									count={2}
									reacted
								></DiscordReaction>
								<DiscordReaction
									interactive={true}
									name="dragonite"
									emoji="https://raw.githubusercontent.com/skyra-project/discord-components-implementations/main/shared/public/dragonite.png"
									count={10}
									reacted
								></DiscordReaction>
							</DiscordReactions>
						</DiscordMessage>
					</DiscordMessages>

					<h3 className="title">Replies</h3>
					<DiscordMessages>
						<DiscordMessage profile="favna">
							<DiscordReply slot="reply" profile="skyra" edited attachment>
								What do you think about this image?
							</DiscordReply>
							Looks nice!
						</DiscordMessage>
						<DiscordMessage profile="maximillian" highlight>
							<DiscordReply slot="reply" profile="favna" mentions>
								Looks nice!
							</DiscordReply>
							I agree!
						</DiscordMessage>
					</DiscordMessages>

					<h3 className="title">Replies in Compact Mode</h3>
					<DiscordMessages compactMode>
						<DiscordMessage profile="favna">
							<DiscordReply slot="reply" profile="skyra" edited attachment>
								What do you think about this image?
							</DiscordReply>
							Looks nice!
						</DiscordMessage>
						<DiscordMessage profile="maximillian" highlight>
							<DiscordReply slot="reply" profile="favna" mentions>
								Looks nice!
							</DiscordReply>
							I agree!
						</DiscordMessage>
					</DiscordMessages>

					<h3 className="title">Commands</h3>
					<DiscordMessages>
						<DiscordMessage profile="skyra">
							<DiscordCommand slot="reply" profile="favna" command="/ping"></DiscordCommand>
							Pong!
						</DiscordMessage>
						<DiscordMessage profile="skyra" ephemeral>
							<DiscordReply slot="reply" profile="skyra" command>
								Pong!
							</DiscordReply>
							Took 100ms.
						</DiscordMessage>
					</DiscordMessages>

					<h3 className="title">Commands with deleted message</h3>
					<DiscordMessages>
						<DiscordMessage profile="skyra">
							<DiscordReply slot="reply" deleted></DiscordReply>
							Took 100ms.
						</DiscordMessage>
					</DiscordMessages>

					<h3 className="title">Commands in Compact Mode</h3>
					<DiscordMessages compactMode>
						<DiscordMessage profile="skyra">
							<DiscordCommand slot="reply" profile="favna" command="/ping"></DiscordCommand>
							Pong!
						</DiscordMessage>
						<DiscordMessage profile="skyra" ephemeral>
							<DiscordReply slot="reply" profile="skyra" command>
								Pong!
							</DiscordReply>
							Took 100ms.
						</DiscordMessage>
					</DiscordMessages>

					<h3 className="title">Components</h3>
					<DiscordMessages>
						<DiscordMessage profile="skyra">
							Here are some components!
							<DiscordAttachments slot="components">
								<DiscordActionRow>
									<DiscordButton type="primary">Primary Button</DiscordButton>
									<DiscordButton type="secondary">Secondary Button</DiscordButton>
									<DiscordButton type="success">Green Button</DiscordButton>
									<DiscordButton type="destructive">Red Button</DiscordButton>
									<DiscordButton
										url="https://join.skyra.pw"
										emoji="https://raw.githubusercontent.com/skyra-project/discord-components-implementations/main/shared/public/eyes.svg"
										emoji-name="👀"
									>
										Link
									</DiscordButton>
								</DiscordActionRow>
								<DiscordActionRow>
									<DiscordButton type="primary" disabled>
										Primary Button
									</DiscordButton>
									<DiscordButton type="secondary" disabled>
										Secondary Button
									</DiscordButton>
									<DiscordButton type="success" disabled>
										Green Button
									</DiscordButton>
									<DiscordButton type="destructive" disabled>
										Red Button
									</DiscordButton>
									<DiscordButton
										url="https://join.skyra.pw"
										disabled
										emoji="https://raw.githubusercontent.com/skyra-project/discord-components-implementations/main/shared/public/eyes.svg"
										emoji-name="👀"
									>
										Link
									</DiscordButton>
								</DiscordActionRow>
							</DiscordAttachments>
						</DiscordMessage>
					</DiscordMessages>

					<h3 className="title">Verified Discord bots</h3>
					<DiscordMessages>
						<DiscordMessage profile="skyra"> Wow I just got verified! </DiscordMessage>
					</DiscordMessages>

					<h3 className="title">Full embed example</h3>
					<DiscordMessages>
						<DiscordMessage profile="skyra">
							<DiscordEmbed
								slot="embeds"
								author-image="https://raw.githubusercontent.com/skyra-project/discord-components-implementations/main/shared/public/sapphire.png"
								author-name="Sapphire Developers"
								author-url="https://sapphirejs.dev"
								color="#0F52BA"
								embed-title="Sapphire"
								image="https://raw.githubusercontent.com/skyra-project/discord-components-implementations/main/shared/public/sapphire.png"
								thumbnail="https://raw.githubusercontent.com/skyra-project/discord-components-implementations/main/shared/public/sapphire.png"
								url="https://sapphirejs.dev"
							>
								<DiscordEmbedDescription slot="description">
									Sapphire is a next-gen object-oriented
									<DiscordLink target="_blank" rel="noopener noreferrer" href="https://discord.js.org/">
										Discord.js
									</DiscordLink>
									bot framework.
									<br />
									<br />
									Sapphire is a community driven framework that aims to give you all the features you need to make your Discord bot.
									<br />
									<br />
									With a history of many other Discord bot frameworks (both for NodeJS and other languages) to inspire Sapphire, it
									has become the ultimate modern experience of writing your code.
								</DiscordEmbedDescription>
								<DiscordEmbedFields slot="fields">
									<DiscordEmbedField fieldTitle="Created">
										<DiscordTime>1 year ago</DiscordTime>
									</DiscordEmbedField>
									<DiscordEmbedField fieldTitle="Installation"> yarn add @sapphire/framework </DiscordEmbedField>
									<DiscordEmbedField fieldTitle="Key Features">
										<ul style={{ paddingInlineStart: '20px', marginBlockStart: '0.5em' }}>
											<li>
												<div>
													<span></span>
												</div>
												<div>Advanced plugin support</div>
											</li>
											<li>
												<div>
													<span></span>
												</div>
												<div>Supports both CommonJS and ESM</div>
											</li>
											<li>
												<div>
													<span></span>
												</div>
												<div>Completely modular and extendable</div>
											</li>
											<li>
												<div>
													<span></span>
												</div>
												<div>Designed with first class TypeScript support in mind</div>
											</li>
											<li>
												<div>
													<span></span>
												</div>
												<div>Includes optional utilities that you can use in any project</div>
											</li>
										</ul>
									</DiscordEmbedField>
								</DiscordEmbedFields>
								<DiscordEmbedFooter
									slot="footer"
									footer-image="https://raw.githubusercontent.com/skyra-project/discord-components-implementations/main/shared/public/sapphire.png"
									timestamp={new Date()}
								>
									Open source libraries to aid in the creation of Discord bots
								</DiscordEmbedFooter>
							</DiscordEmbed>
						</DiscordMessage>
					</DiscordMessages>

					<h3 className="title">Server crosspost messages</h3>
					<DiscordMessages>
						<DiscordMessage profile="discordjs" timestamp="28/01/2024">
							Hey peeps!
							<br />
							<br />
							We have a redesigned website over at
							<DiscordLink target="_blank" href="https://discord.js.org/">
								https://discord.js.org/
							</DiscordLink>
							<br />
							Check it out if you want or not
							<br />
							<br />
							You're most likely using a cached version of the old website because of our service worker, so make sure to clear your
							cache and any cookies/service workers you have. For some of you nothing needs to be done, for others a so called
							"hard-refresh" will do the trick too.
							<br />
							<br />
							Bugs and improvement requests go into our
							<DiscordMention type="channel">site-discussion</DiscordMention>
							channel (you have to be in the server for this)
						</DiscordMessage>
					</DiscordMessages>

					<h3 className="title">Embedded video</h3>
					<DiscordMessages>
						<DiscordMessage profile="skyra">
							<DiscordEmbed
								slot="embeds"
								provider="Blender"
								author-name="Blender"
								author-url="https://peach.blender.org/download/"
								color="#019DD8"
								embed-title="Big Buck Bunny"
								video="https://download.blender.org/peach/bigbuckbunny_movies/big_buck_bunny_1080p_stereo.ogg"
								url="https://download.blender.org/peach/bigbuckbunny_movies/big_buck_bunny_1080p_stereo.ogg"
							></DiscordEmbed>
						</DiscordMessage>
					</DiscordMessages>

					<h3 className="title">Embed fields</h3>
					<DiscordMessages>
						<DiscordMessage profile="skyra">
							<DiscordEmbed slot="embeds">
								<DiscordEmbedFields slot="fields">
									<DiscordEmbedField fieldTitle="Field title">Some value here. Some value here. Some value here.</DiscordEmbedField>
									<DiscordEmbedField fieldTitle="Field title">Some value here. Some value here. Some value here.</DiscordEmbedField>
									<DiscordEmbedField fieldTitle="Field title">Some value here. Some value here. Some value here.</DiscordEmbedField>
								</DiscordEmbedFields>
							</DiscordEmbed>
						</DiscordMessage>
					</DiscordMessages>

					<h3 className="title">A tenor-gif in video format</h3>
					<DiscordMessages>
						<DiscordMessage profile="maximillian">
							<DiscordTenorVideo slot="attachments" url="https://c.tenor.com/oTeBa4EVepMAAAPo/business-cat-working.mp4" />
						</DiscordMessage>
					</DiscordMessages>

					<h3 className="title">Inline fields</h3>
					<DiscordMessages>
						<DiscordMessage profile="skyra">
							<DiscordEmbed slot="embeds">
								<DiscordEmbedFields slot="fields">
									<DiscordEmbedField fieldTitle="Inline field title" inline inline-index="1">
										{' '}
										Some value here{' '}
									</DiscordEmbedField>
									<DiscordEmbedField fieldTitle="Inline field title" inline inline-index="2">
										{' '}
										Some value here{' '}
									</DiscordEmbedField>
									<DiscordEmbedField fieldTitle="Inline field title" inline inline-index="3">
										{' '}
										Some value here{' '}
									</DiscordEmbedField>
								</DiscordEmbedFields>
							</DiscordEmbed>
						</DiscordMessage>
					</DiscordMessages>

					<h3 className="title">Inline fields with a thumbnail</h3>
					<DiscordMessages>
						<DiscordMessage profile="skyra">
							<DiscordEmbed
								slot="embeds"
								thumbnail="https://raw.githubusercontent.com/skyra-project/discord-components-implementations/main/shared/public/sapphire.png"
							>
								<DiscordEmbedFields slot="fields">
									<DiscordEmbedField fieldTitle="Inline field title" inline inline-index="1">
										{' '}
										Some value here{' '}
									</DiscordEmbedField>
									<DiscordEmbedField fieldTitle="Inline field title" inline inline-index="2">
										{' '}
										Some value here{' '}
									</DiscordEmbedField>
									<DiscordEmbedField fieldTitle="Inline field title" inline inline-index="3">
										{' '}
										Some value here{' '}
									</DiscordEmbedField>
								</DiscordEmbedFields>
							</DiscordEmbed>
						</DiscordMessage>
					</DiscordMessages>
					<h3 className="title">Headers</h3>
					<DiscordMessages>
						<DiscordMessage profile="favna">
							<DiscordHeader level={1}>This is a header 1</DiscordHeader>
							<DiscordHeader level={2}>This is a header 2</DiscordHeader>
							<DiscordHeader level={3}>This is a header 3</DiscordHeader>
						</DiscordMessage>
					</DiscordMessages>
				</main>
			</div>
		</>
	);
}
