import { component$ } from '@builder.io/qwik';
import '@skyra/discord-components-core';

import './app.css';

export const App = component$(() => {
	return (
		<div>
			<div>
				<h1 class="logo">&#64;skyra/discord-components-core</h1>
				<span>
					[
					<a
						title="GitHub repository"
						class="link"
						target="_blank"
						rel="noopener noreferrer"
						href="https://github.com/skyra-project/discord-components/"
					>
						Github
					</a>
					]
				</span>
			</div>

			<div>
				<h2>Explanation</h2>
				<div>
					This website contains various samples for
					<a
						title="GitHub repository"
						class="link"
						target="_blank"
						rel="noopener noreferrer"
						href="https://github.com/skyra-project/discord-components/"
					>
						&#64;skyra/discord-components-core
					</a>
					which is a webcomponents library (powered by
					<a title="Lit website" class="link" target="_blank" rel="noopener noreferrer" href="https://lit.dev">
						Lit
					</a>
					) to create Discord-like messages with rich content. The always up-to-date version of this document can be found
					<a
						title="Demo index.html"
						class="link"
						target="_blank"
						rel="noopener noreferrer"
						href="https://github.com/skyra-project/discord-components-implementations/blob/main/templates/qwik-vite-ts/src/app.tsx"
					>
						here
					</a>
					.
				</div>
			</div>

			<main id="demo">
				<h3 class="title">A normal conversation</h3>
				<discord-messages>
					<discord-message author="Alyx Vargas"> Hey guys, I'm new here! Glad to be able to join you all! </discord-message>
					<discord-message
						author="Fenton Smart"
						avatar="https://raw.githubusercontent.com/skyra-project/discord-components-implementations/main/shared/public/avafive.png"
					>
						Hi, I'm new here too!
					</discord-message>
					<discord-message profile="maximillian">
						Hey, <discord-mention>Alyx Vargas</discord-mention> and <discord-mention>Dawn</discord-mention>. Welcome to our server!
						<br />
						Be sure to read through the <discord-mention type="channel">rules</discord-mention>. You can ping
						<discord-mention type="role" color="#70f0b4">
							Support
						</discord-mention>
						if you need help.
					</discord-message>
					<discord-message profile="willard">Hello everyone! How's it going?</discord-message>
					<discord-message author="Alyx Vargas">
						Thank you
						<discord-mention highlight={true}>Maximillian Osborn</discord-mention>!
					</discord-message>
					<discord-message
						author="Kayla Feeney"
						avatar="https://raw.githubusercontent.com/skyra-project/discord-components-implementations/main/shared/public/avafour.png"
					>
						I'm doing well, <discord-mention>Willard Walton</discord-mention>. What about yourself?
					</discord-message>
					<discord-message profile="willard"> s!8ball How am I doing today? </discord-message>
					<discord-message profile="skyra"> Yes. </discord-message>
				</discord-messages>
				<h3 class="title">The different kind of mentions</h3>
				<discord-messages>
					<discord-message author="Alyx Vargas">
						<discord-mention type="user">users</discord-mention> <br />
						<discord-mention type="role" color="#ff0000">
							roles with #ff0000
						</discord-mention>{' '}
						<br />
						<discord-mention type="channel">channels</discord-mention> <br />
						<discord-mention type="voice">voice channels</discord-mention> <br />
						<discord-mention type="locked">locked channels</discord-mention> <br />
						<discord-mention type="thread">thread channels</discord-mention> <br />
						<discord-mention type="forum">forum channels</discord-mention> <br />
						<discord-mention type="server-guide">server guide channels</discord-mention> <br />
						<discord-mention type="channels-and-roles">channels-and-roles channel</discord-mention> <br />
						<discord-mention type="customize-community">customize-community channel</discord-mention> <br />
						<discord-mention type="slash">slash commands</discord-mention>
					</discord-message>
				</discord-messages>
				<h3 class="title">Light mode</h3>
				<discord-messages lightTheme={true}>
					<discord-message>Look at me I'm a beautiful butterfly</discord-message>
					<discord-message edited={true}>Fluttering in the sunlight 🌞</discord-message>
					<discord-message author="Alyx Vargas">
						Thank you
						<discord-mention highlight={true}>Maximillian Osborn</discord-mention>!
					</discord-message>
				</discord-messages>
				<h3 class="title">Compact mode</h3>
				<discord-messages compactMode={true}>
					<discord-message>Look at me I'm a beautiful butterfly</discord-message>
					<discord-message>Fluttering in the moonlight 🌝</discord-message>
					<discord-message>Waiting for the day when</discord-message>
					<discord-message>Compact mode would be turned on</discord-message>
					<discord-message>Oh here it is!</discord-message>
				</discord-messages>
				<h3 class="title">With subsequent messages</h3>
				<discord-messages>
					<discord-message profile="favna">I can send multiple messages with my avatar showing only once</discord-message>
					<discord-message
						profile="favna"
						messageBodyOnly={true}
						// @ts-expect-error qwik currently does not support this property that is typed as `string | Date | null`
						timestamp="12:39"
					>
						That's how Discord handles multiple messages from the same author as well
					</discord-message>
					<discord-message
						profile="favna"
						messageBodyOnly={true}
						// @ts-expect-error qwik currently does not support this property that is typed as `string | Date | null`
						timestamp="12:40"
					>
						Just keep in mind that Discord does some funky stuff like with time between messages, this library doesn't automatically
						change what is displayed!
					</discord-message>
				</discord-messages>

				<h3 class="title">With subsequent messages and compact mode</h3>
				<discord-messages compactMode={true}>
					<discord-message
						profile="favna"
						twentyFour={true}
						// @ts-expect-error qwik currently does not support this property that is typed as `string | Date | null`
						timestamp="12:38"
					>
						I can send multiple messages with my avatar showing only once
					</discord-message>
					<discord-message
						profile="favna"
						messageBodyOnly={true}
						// @ts-expect-error qwik currently does not support this property that is typed as `string | Date | null`
						timestamp="12:39"
					>
						That's how Discord handles multiple messages from the same author as well
					</discord-message>
					<discord-message
						profile="favna"
						messageBodyOnly={true}
						// @ts-expect-error qwik currently does not support this property that is typed as `string | Date | null`
						timestamp="12:40"
					>
						Just keep in mind that Discord does some funky stuff like with time between messages, this library doesn't automatically
						change what is displayed!
					</discord-message>
				</discord-messages>
				<h3 class="title">Markdown Styling</h3>
				<discord-messages>
					<discord-message profile="favna">
						<discord-bold>I am bold text!</discord-bold>
					</discord-message>
					<discord-message profile="favna">
						<discord-italic>I am italic text!</discord-italic>
					</discord-message>
					<discord-message profile="favna">
						<discord-bold>
							<discord-italic>I am bold italic text!</discord-italic>
						</discord-bold>
					</discord-message>
					<discord-message profile="favna">
						<discord-underlined>I am underlined text!</discord-underlined>
					</discord-message>
					<discord-message profile="favna">
						I have subscript:
						<discord-subscript>
							Only you can see this •
							<discord-link href="https://discord.com/vanityurl/dotcom/steakpants/flour/flower/index11.html" target="_blank">
								Dismiss message
							</discord-link>
						</discord-subscript>
					</discord-message>
					<discord-message profile="favna">
						<discord-code>I am inline-code text!</discord-code>
					</discord-message>
					<discord-message profile="favna">
						<discord-code multiline={true}>
							I am multi-
							<br />
							line code
						</discord-code>
					</discord-message>
					<discord-message profile="favna">
						<discord-spoiler>I am spoiler text!</discord-spoiler>
					</discord-message>
					<discord-message profile="favna">
						<discord-quote>I am quoted text!</discord-quote>
					</discord-message>
				</discord-messages>
				<h3 class="title">No Background mode</h3>
				<discord-messages noBackground={true}>
					<discord-message>This message blends perfectly with your own background</discord-message>
					<discord-message>No Background mode is turned on here</discord-message>
				</discord-messages>
				<h3 class="title">Mentions</h3>
				<discord-messages>
					<discord-message profile="maximillian">
						Hey, <discord-mention>Alyx Vargas</discord-mention> and <discord-mention>Dawn</discord-mention>. Welcome to our server! Be
						sure to read through the <discord-mention type="channel">rules</discord-mention>. You can ping
						<discord-mention type="role" color="#70f0b4">
							Support
						</discord-mention>
						if you need help. Feel free to join
						<discord-mention type="voice">General</discord-mention>
						and talk with us and post thoughts in <discord-mention type="forum">feedback</discord-mention>.
					</discord-message>
					<discord-message author="Alyx Vargas">
						Hey there
						<discord-mention highlight={true}>Maximillian Osborn</discord-mention>, thanks! I will!
					</discord-message>
					<discord-message profile="maximillian">
						Also, make sure to run
						<discord-mention type="slash">profile</discord-mention> to create your server profile!
					</discord-message>
				</discord-messages>
				<h3 class="title">Custom Discord Emojis</h3>
				<discord-messages>
					<discord-message profile="favna">
						Hey these are some custom emojis:
						<discord-custom-emoji
							name="blobparty"
							url="https://raw.githubusercontent.com/skyra-project/discord-components-implementations/main/shared/public/blobparty.gif"
						></discord-custom-emoji>
						<discord-custom-emoji name="skyra" url="https://github.com/NM-EEA-Y.png"></discord-custom-emoji>
						<discord-embed slot="embeds" color="#0F52BA" embedTitle="diamond Emojis in the embed title">
							<discord-embed-description slot="description">
								Custom emojis in the embed description:
								<discord-custom-emoji
									name="pikawow"
									url="https://raw.githubusercontent.com/skyra-project/discord-components-implementations/main/shared/public/pikawow.png"
									embedEmoji={true}
								></discord-custom-emoji>
							</discord-embed-description>
							<discord-embed-fields slot="fields">
								<discord-embed-field fieldTitle="dragonite Custom emojis in the field title">
									Custom emojis in the field content <discord-custom-emoji name="sapphire" embedEmoji={true}></discord-custom-emoji>
								</discord-embed-field>
							</discord-embed-fields>
						</discord-embed>
					</discord-message>
				</discord-messages>
				<h3 class="title">Server Invites</h3>
				<discord-messages>
					<discord-message profile="favna">
						discord.gg/djs <br />
						discord.gg/code <br />
						discord.gg/6gakFR2
						<discord-attachments slot="attachments">
							<discord-invite
								name="discord.js - Imagine a bot"
								icon="https://raw.githubusercontent.com/skyra-project/discord-components-implementations/main/shared/public/discordjs.png"
								url="https://discord.gg/djs"
								online={16417}
								members={87147}
								verified={true}
							></discord-invite>
							<discord-invite
								name="The Coding Den"
								icon="https://raw.githubusercontent.com/skyra-project/discord-components-implementations/main/shared/public/tcd.png"
								url="https://discord.gg/code"
								online={18456}
								members={73548}
								partnered={true}
							></discord-invite>
							<discord-invite
								name="Skyra Lounge"
								url="https://join.skyra.pw"
								icon="https://raw.githubusercontent.com/skyra-project/discord-components-implementations/main/shared/public/skyralounge.gif"
								online={176}
								members={738}
							></discord-invite>
						</discord-attachments>
					</discord-message>
				</discord-messages>
				<h3 class="title">Image Attachments with small images</h3>
				<discord-messages>
					<discord-message>
						That's a very small logo image!
						<discord-image-attachment
							slot="attachments"
							url="https://raw.githubusercontent.com/skyra-project/discord-components-implementations/main/shared/public/lit.png"
							height={100}
							width={100}
							alt="lit-logo"
						/>
					</discord-message>
				</discord-messages>
				<h3 class="title">Image Attachments with custom image components (you can see this in the code only)</h3>
				<discord-messages>
					<discord-message profile="favna">
						This has a custom image component!
						<discord-image-attachment slot="attachments" custom-image-element>
							<img
								src="https://raw.githubusercontent.com/skyra-project/discord-components-implementations/main/shared/public/lit.png"
								height={100}
								width={100}
								alt="lit-logo"
							/>
						</discord-image-attachment>
					</discord-message>
				</discord-messages>
				<h3 class="title">Image Attachments with large images</h3>
				<discord-messages>
					<discord-message profile="favna">
						Hey guys, check out this awesome, cute, and totally amazing dragon!
						<discord-image-attachment
							slot="attachments"
							url="https://raw.githubusercontent.com/skyra-project/discord-components-implementations/main/shared/public/dragonite.png"
							height={512}
							width={512}
							alt="dragonite"
						/>
					</discord-message>
				</discord-messages>
				<h3 class="title">File Attachments</h3>
				<discord-messages>
					<discord-message profile="favna">
						This pk9 file is definitely not a virus! (It's a PKHeX export of a Dragonite)
						<discord-file-attachment
							slot="attachments"
							name="dragonite.pk9"
							bytes={344}
							href="https://favna.s-ul.eu/pZqminUa.pk9"
							target="_blank"
							type="application/octet-stream"
						/>
					</discord-message>
				</discord-messages>
				<h3 class="title">Audio attachments</h3>
				<discord-messages>
					<discord-message profile="favna">
						Listen to this amazing song from Baldur's Gate 3!
						<discord-audio-attachment
							slot="attachments"
							href="https://favna.s-ul.eu/ZJuz23c7.mp3"
							name="01 Baldurs Gate 3 OST - Main Theme Part I"
							bytes={6.38}
							bytes-unit="MB"
						/>
					</discord-message>
				</discord-messages>
				<h3 class="title">Video attachments</h3>
				<discord-messages>
					<discord-message profile="favna">
						Look at this video!
						<discord-video-attachment
							slot="attachments"
							href="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm"
							poster="https://favna.s-ul.eu/On2pqpAq.png"
						/>
					</discord-message>
				</discord-messages>
				<h3 class="title">System Messages</h3>
				<discord-messages>
					<discord-system-message type="join">
						Welcome, <i style="color: #a155ab">Snazzah</i>. We hope you brought pizza.
						<discord-reactions slot="reactions">
							<discord-reaction
								name="👀"
								emoji="https://raw.githubusercontent.com/skyra-project/discord-components-implementations/main/shared/public/eyes.svg"
							></discord-reaction>
						</discord-reactions>
					</discord-system-message>
					<discord-system-message type="join">
						<i>Snazzah</i> has added <i>Discord Developers #discord-api-announcements</i> to this channel. Its most important updates will
						show up here.
					</discord-system-message>
					<discord-system-message type="boost">
						{' '}
						<i style="color: #a155ab">Favna</i> just boosted the server!{' '}
					</discord-system-message>
					<discord-system-message type="thread">
						<i style="color: #a155ab">Favna</i> started a thread: <i>Skyra Suggestion Thread</i>. See all <i>threads</i>.
					</discord-system-message>
				</discord-messages>
				<discord-messages>
					<discord-system-message type="join">
						{' '}
						<i>Snazzah</i> added <i>Favna</i> to the group.{' '}
					</discord-system-message>
					<discord-system-message type="call">
						{' '}
						<i>Favna</i> started a call that lasted an hour.{' '}
					</discord-system-message>
					<discord-system-message type="edit">
						{' '}
						<i>Snazzah</i> changed the channel icon.{' '}
					</discord-system-message>
					<discord-system-message type="edit" channel-name>
						<i>Snazzah</i> changed the channel name: <b>A humble Group DM</b>
					</discord-system-message>
					<discord-system-message type="missed-call">
						{' '}
						You missed a call from <i>Favna</i> that lasted a minute.{' '}
					</discord-system-message>
					<discord-system-message type="leave">
						{' '}
						<i>Favna</i> left the group.{' '}
					</discord-system-message>
					<discord-system-message type="pin">
						<i>Favna</i> pinned <i>a message</i> to this channel. See all <i>pinned messages</i>.
					</discord-system-message>
					<discord-system-message type="alert">Warning! Warning! This library is the coolest of them all!</discord-system-message>
					<discord-system-message type="error">Error! Cool overload!.</discord-system-message>
				</discord-messages>
				<h3 class="title">Threads</h3>
				<discord-messages>
					<discord-system-message type="thread">
						<i style="color: #a155ab">Favna</i> started a thread: <i>Skyra Suggestion Thread</i>. See all <i>threads</i>.
						<discord-thread slot="thread" cta="2 Messages">
							<discord-thread-message profile="skyra">Pong!</discord-thread-message>
						</discord-thread>
					</discord-system-message>
					<discord-message profile="favna">
						Let's make a thread!
						<discord-thread slot="thread" name="A cool thread!">
							There are no messages in this thread yet.
						</discord-thread>
					</discord-message>
				</discord-messages>
				<h3 class="title">Reactions</h3>
				<discord-messages>
					<discord-message profile="favna">
						React to this message!
						<discord-reactions slot="reactions">
							<discord-reaction
								name="👍"
								emoji="https://raw.githubusercontent.com/skyra-project/discord-components-implementations/main/shared/public/thumbsup.svg"
								count={1}
							></discord-reaction>
							<discord-reaction
								name="👀"
								emoji="https://raw.githubusercontent.com/skyra-project/discord-components-implementations/main/shared/public/eyes.svg"
								count={2}
								reacted={true}
							></discord-reaction>
							<discord-reaction
								interactive={true}
								name="dragonite"
								emoji="https://raw.githubusercontent.com/skyra-project/discord-components-implementations/main/shared/public/dragonite.png"
								count={10}
								reacted={true}
							></discord-reaction>
						</discord-reactions>
					</discord-message>
				</discord-messages>
				<h3 class="title">Replies</h3>
				<discord-messages>
					<discord-message profile="favna">
						<discord-reply slot="reply" profile="skyra" edited={true} attachment={true}>
							What do you think about this image?
						</discord-reply>
						Looks nice!
					</discord-message>
					<discord-message profile="maximillian" highlight={true}>
						<discord-reply slot="reply" profile="favna" mentions={true}>
							Looks nice!
						</discord-reply>
						I agree!
					</discord-message>
				</discord-messages>
				<h3 class="title">Replies in Compact Mode</h3>
				<discord-messages compactMode={true}>
					<discord-message profile="favna">
						<discord-reply slot="reply" profile="skyra" edited={true} attachment={true}>
							What do you think about this image?
						</discord-reply>
						Looks nice!
					</discord-message>
					<discord-message profile="maximillian" highlight={true}>
						<discord-reply slot="reply" profile="favna" mentions={true}>
							Looks nice!
						</discord-reply>
						I agree!
					</discord-message>
				</discord-messages>
				<h3 class="title">Commands</h3>
				<discord-messages>
					<discord-message profile="skyra">
						<discord-command slot="reply" profile="favna" command="/ping"></discord-command>
						Pong!
					</discord-message>
					<discord-message profile="skyra" ephemeral={true}>
						<discord-reply slot="reply" profile="skyra" command={true}>
							Pong!
						</discord-reply>
						Took 100ms.
					</discord-message>
				</discord-messages>
				<h3 class="title">Commands with deleted message</h3>
				<discord-messages>
					<discord-message profile="skyra">
						<discord-reply slot="reply" deleted></discord-reply>
						Took 100ms.
					</discord-message>
				</discord-messages>
				<h3 class="title">Commands in Compact Mode</h3>
				<discord-messages compactMode={true}>
					<discord-message profile="skyra">
						<discord-command slot="reply" profile="favna" command="/ping"></discord-command>
						Pong!
					</discord-message>
					<discord-message profile="skyra" ephemeral={true}>
						<discord-reply slot="reply" profile="skyra" command={true}>
							Pong!
						</discord-reply>
						Took 100ms.
					</discord-message>
				</discord-messages>
				<h3 class="title">Components</h3>
				<discord-messages>
					<discord-message profile="skyra">
						Here are some components!
						<discord-attachments slot="components">
							<discord-action-row>
								<discord-button type="primary">Primary Button</discord-button>
								<discord-button type="secondary">Secondary Button</discord-button>
								<discord-button type="success">Green Button</discord-button>
								<discord-button type="destructive">Red Button</discord-button>
								<discord-button
									url="https://join.skyra.pw"
									emoji="https://raw.githubusercontent.com/skyra-project/discord-components-implementations/main/shared/public/eyes.svg"
									emojiName="👀"
								>
									Link
								</discord-button>
							</discord-action-row>
							<discord-action-row>
								<discord-button type="primary" disabled={true}>
									Primary Button
								</discord-button>
								<discord-button type="secondary" disabled={true}>
									Secondary Button
								</discord-button>
								<discord-button type="success" disabled={true}>
									Green Button
								</discord-button>
								<discord-button type="destructive" disabled={true}>
									Red Button
								</discord-button>
								<discord-button
									url="https://join.skyra.pw"
									disabled={true}
									emoji="https://raw.githubusercontent.com/skyra-project/discord-components-implementations/main/shared/public/eyes.svg"
									emojiName="👀"
								>
									Link
								</discord-button>
							</discord-action-row>
						</discord-attachments>
					</discord-message>
				</discord-messages>
				<h3 class="title">Verified Discord bots</h3>
				<discord-messages>
					<discord-message profile="skyra"> Wow I just got verified! </discord-message>
				</discord-messages>
				<h3 class="title">Full embed example</h3>
				<discord-messages>
					<discord-message profile="skyra">
						<discord-embed
							slot="embeds"
							authorImage="https://raw.githubusercontent.com/skyra-project/discord-components-implementations/main/shared/public/sapphire.png"
							authorName="Sapphire Developers"
							authorUrl="https://sapphirejs.dev"
							color="#0F52BA"
							embedTitle="Sapphire"
							image="https://raw.githubusercontent.com/skyra-project/discord-components-implementations/main/shared/public/sapphire.png"
							thumbnail="https://raw.githubusercontent.com/skyra-project/discord-components-implementations/main/shared/public/sapphire.png"
							url="https://sapphirejs.dev"
						>
							<discord-embed-description slot="description">
								Sapphire is a next-gen object-oriented
								<discord-link target="_blank" rel="noopener noreferrer" href="https://discord.js.org/">
									Discord.js
								</discord-link>
								bot framework.
								<br />
								<br />
								Sapphire is a community driven framework that aims to give you all the features you need to make your Discord bot.
								<br />
								<br />
								With a history of many other Discord bot frameworks (both for NodeJS and other languages) to inspire Sapphire, it has
								become the ultimate modern experience of writing your code.
							</discord-embed-description>
							<discord-embed-fields slot="fields">
								<discord-embed-field fieldTitle="Created">
									<discord-time>1 year ago</discord-time>
								</discord-embed-field>
								<discord-embed-field fieldTitle="Installation"> yarn add &#64;sapphire/framework </discord-embed-field>
								<discord-embed-field fieldTitle="Key Features">
									<ul style="padding-inline-start: 20px; margin-block-start: 0.5em">
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
								</discord-embed-field>
							</discord-embed-fields>
							<discord-embed-footer
								slot="footer"
								footerImage="https://raw.githubusercontent.com/skyra-project/discord-components-implementations/main/shared/public/sapphire.png"
								// @ts-expect-error qwik currently does not support this property that is typed as `string | Date | null`
								timestamp="28/01/2024"
							>
								Open source libraries to aid in the creation of Discord bots
							</discord-embed-footer>
						</discord-embed>
					</discord-message>
				</discord-messages>
				<h3 class="title">Server crosspost messages</h3>
				<discord-messages>
					<discord-message
						profile="discordjs"
						// @ts-expect-error qwik currently does not support this property that is typed as `string | Date | null`
						timestamp="28/01/2024"
					>
						Hey peeps!
						<br />
						<br />
						We have a redesigned website over at
						<discord-link target="_blank" href="https://discord.js.org/">
							https://discord.js.org/
						</discord-link>
						<br />
						Check it out if you want or not
						<br />
						<br />
						You're most likely using a cached version of the old website because of our service worker, so make sure to clear your cache
						and any cookies/service workers you have. For some of you nothing needs to be done, for others a so called "hard-refresh" will
						do the trick too.
						<br />
						<br />
						Bugs and improvement requests go into our
						<discord-mention type="channel">site-discussion</discord-mention>
						channel (you have to be in the server for this)
					</discord-message>
				</discord-messages>
				<h3 class="title">Embedded video</h3>
				<discord-messages>
					<discord-message profile="skyra">
						<discord-embed
							slot="embeds"
							provider="MDN"
							authorName="MDN"
							authorUrl="https://developer.mozilla.org/en-US/"
							color="#019DD8"
							embedTitle="Flower blooming"
							video="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm"
							url="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm"
						></discord-embed>
					</discord-message>
				</discord-messages>
				<h3 class="title">Embed fields</h3>
				<discord-messages>
					<discord-message profile="skyra">
						<discord-embed slot="embeds">
							<discord-embed-fields slot="fields">
								<discord-embed-field fieldTitle="Field title">Some value here. Some value here. Some value here.</discord-embed-field>
								<discord-embed-field fieldTitle="Field title">Some value here. Some value here. Some value here.</discord-embed-field>
								<discord-embed-field fieldTitle="Field title">Some value here. Some value here. Some value here.</discord-embed-field>
							</discord-embed-fields>
						</discord-embed>
					</discord-message>
				</discord-messages>
				<h3 class="title">A tenor-gif in video format</h3>
				<discord-messages>
					<discord-message profile="maximillian">
						<discord-tenor-video slot="attachments" url="https://c.tenor.com/oTeBa4EVepMAAAPo/business-cat-working.mp4" />
					</discord-message>
				</discord-messages>
				<h3 class="title">Inline fields</h3>
				<discord-messages>
					<discord-message profile="skyra">
						<discord-embed slot="embeds">
							<discord-embed-fields slot="fields">
								<discord-embed-field fieldTitle="Inline field title" inline={true} inlineIndex={1}>
									{' '}
									Some value here{' '}
								</discord-embed-field>
								<discord-embed-field fieldTitle="Inline field title" inline={true} inlineIndex={2}>
									{' '}
									Some value here{' '}
								</discord-embed-field>
								<discord-embed-field fieldTitle="Inline field title" inline={true} inlineIndex={3}>
									{' '}
									Some value here{' '}
								</discord-embed-field>
							</discord-embed-fields>
						</discord-embed>
					</discord-message>
				</discord-messages>
				<h3 class="title">Inline fields with a thumbnail</h3>
				<discord-messages>
					<discord-message profile="skyra">
						<discord-embed
							slot="embeds"
							thumbnail="https://raw.githubusercontent.com/skyra-project/discord-components-implementations/main/shared/public/sapphire.png"
						>
							<discord-embed-fields slot="fields">
								<discord-embed-field fieldTitle="Inline field title" inline={true} inlineIndex={1}>
									{' '}
									Some value here{' '}
								</discord-embed-field>
								<discord-embed-field fieldTitle="Inline field title" inline={true} inlineIndex={2}>
									{' '}
									Some value here{' '}
								</discord-embed-field>
								<discord-embed-field field-title="Inline field title" inline inline-index="3">
									{' '}
									Some value here{' '}
								</discord-embed-field>
							</discord-embed-fields>
						</discord-embed>
					</discord-message>
				</discord-messages>

				<h3 class="title">Headers</h3>
				<discord-messages>
					<discord-message profile="favna">
						<discord-header level={1}>This is a header 1</discord-header>
						<discord-header level={2}>This is a header 2</discord-header>
						<discord-header level={3}>This is a header 3</discord-header>
					</discord-message>
				</discord-messages>

				<h3 class="title">Ordered list items</h3>
				<discord-messages>
					<discord-message profile="favna">
						<discord-ordered-list>
							<discord-list-item>This is an ordered list item</discord-list-item>
							<discord-ordered-list start={99}>
								<discord-list-item>You can start your list item at a custom number</discord-list-item>
								<discord-list-item>We will calculate the length internally</discord-list-item>
								<discord-list-item>This whole level is considered to have a start number length of 3</discord-list-item>
							</discord-ordered-list>
						</discord-ordered-list>
					</discord-message>
				</discord-messages>

				<h3 class="title">Unordered list items</h3>
				<discord-messages>
					<discord-message profile="favna">
						<discord-unordered-list>
							<discord-list-item>Discord</discord-list-item>
							<discord-unordered-list>
								<discord-list-item>imposes</discord-list-item>
								<discord-unordered-list>
									<discord-list-item>a</discord-list-item>
									<discord-unordered-list>
										<discord-list-item>limit</discord-list-item>
										<discord-unordered-list>
											<discord-list-item>of</discord-list-item>
											<discord-unordered-list>
												<discord-list-item>eleven</discord-list-item>
												<discord-unordered-list>
													<discord-list-item>levels</discord-list-item>
													<discord-unordered-list>
														<discord-list-item>but</discord-list-item>
														<discord-unordered-list>
															<discord-list-item>we</discord-list-item>
															<discord-unordered-list>
																<discord-list-item>can</discord-list-item>
																<discord-unordered-list>
																	<discord-list-item>go (this is 11)</discord-list-item>
																	<discord-unordered-list>
																		<discord-list-item>deeper</discord-list-item>
																		<discord-unordered-list>
																			<discord-list-item>ain't that cool</discord-list-item>
																		</discord-unordered-list>
																	</discord-unordered-list>
																</discord-unordered-list>
															</discord-unordered-list>
														</discord-unordered-list>
													</discord-unordered-list>
												</discord-unordered-list>
											</discord-unordered-list>
										</discord-unordered-list>
									</discord-unordered-list>
								</discord-unordered-list>
							</discord-unordered-list>
						</discord-unordered-list>
					</discord-message>
				</discord-messages>
			</main>
		</div>
	);
});
