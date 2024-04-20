import '@skyra/discord-components-core';

function App() {
	return (
		<div>
			<div>
				<h1 class="logo">&#64;skyra/discord-components-core</h1>
				<span>
					[
					<a target="_blank" rel="noopener noreferrer" href="https://github.com/skyra-project/discord-components/">
						Github
					</a>
					]
				</span>
			</div>

			<main id="demo">
				<h3 class="title">A normal conversation</h3>
				<discord-messages>
					<discord-message prop:author="Alyx Vargas"> Hey guys, I'm new here! Glad to be able to join you all! </discord-message>
					<discord-message
						prop:author="Fenton Smart"
						prop:avatar="https://raw.githubusercontent.com/skyra-project/discord-components-implementations/main/shared/public/avafive.png"
					>
						Hi, I'm new here too!
					</discord-message>
					<discord-message prop:profile="maximillian">
						Hey, <discord-mention>Alyx Vargas</discord-mention> and <discord-mention>Dawn</discord-mention>. Welcome to our server!
						<br />
						Be sure to read through the <discord-mention prop:type="channel">rules</discord-mention>. You can ping{' '}
						<discord-mention prop:type="role" prop:color="#70f0b4">
							Support
						</discord-mention>{' '}
						if you need help.
					</discord-message>
					<discord-message prop:profile="willard">Hello everyone! How's it going?</discord-message>
					<discord-message prop:author="Alyx Vargas" prop:highlight={true}>
						Thank you <discord-mention>Maximillian Osborn</discord-mention>!
					</discord-message>
					<discord-message
						prop:author="Kayla Feeney"
						prop:avatar="https://raw.githubusercontent.com/skyra-project/discord-components-implementations/main/shared/public/avafour.png"
					>
						I'm doing well, <discord-mention>Willard Walton</discord-mention>. What about yourself?
					</discord-message>
					<discord-message prop:profile="willard"> s!8ball How am I doing today? </discord-message>
					<discord-message prop:profile="skyra"> Yes. </discord-message>
				</discord-messages>
				<h3 class="title">The different kind of mentions</h3>
				<discord-messages>
					<discord-message prop:author="Alyx Vargas">
						<discord-mention prop:type="user">users</discord-mention> <br />
						<discord-mention prop:type="role" prop:color="#ff0000">
							roles with #ff0000
						</discord-mention>{' '}
						<br />
						<discord-mention prop:type="channel">channels</discord-mention> <br />
						<discord-mention prop:type="voice">voice channels</discord-mention> <br />
						<discord-mention prop:type="locked">locked channels</discord-mention> <br />
						<discord-mention prop:type="thread">thread channels</discord-mention> <br />
						<discord-mention prop:type="forum">forum channels</discord-mention> <br />
						<discord-mention prop:type="server-guide">server guide channels</discord-mention> <br />
						<discord-mention prop:type="channels-and-roles">channels-and-roles channel</discord-mention> <br />
						<discord-mention prop:type="customize-community">customize-community channel</discord-mention> <br />
						<discord-mention prop:type="slash">slash commands</discord-mention>
					</discord-message>
				</discord-messages>
				<h3 class="title">Light mode</h3>
				<discord-messages prop:lightTheme={true}>
					<discord-message>Look at me I'm a beautiful butterfly</discord-message>
					<discord-message prop:edited={true}>Fluttering in the sunlight 🌞</discord-message>
					<discord-message prop:author="Alyx Vargas">
						Thank you <discord-mention prop:highlight={true}>Maximillian Osborn</discord-mention>!
					</discord-message>
				</discord-messages>
				<h3 class="title">Compact mode</h3>
				<discord-messages prop:compactMode={true}>
					<discord-message>Look at me I'm a beautiful butterfly</discord-message>
					<discord-message>Fluttering in the moonlight 🌝</discord-message>
					<discord-message>Waiting for the day when</discord-message>
					<discord-message>Compact mode would be turned on</discord-message>
					<discord-message>Oh here it is!</discord-message>
				</discord-messages>
				<h3 class="title">Markdown Styling</h3>
				<discord-messages>
					<discord-message>
						<discord-bold>I am bold text!</discord-bold>
					</discord-message>
					<discord-message>
						<discord-italic>I am italic text!</discord-italic>
					</discord-message>
					<discord-message>
						<discord-bold>
							<discord-italic>I am bold italic text!</discord-italic>
						</discord-bold>
					</discord-message>
					<discord-message>
						<discord-underlined>I am underlined text!</discord-underlined>
					</discord-message>
					<discord-message>
						<discord-code>I am inline-code text!</discord-code>
					</discord-message>
					<discord-message>
						<discord-code prop:multiline={true}>I am multi-\nline code text!</discord-code>
					</discord-message>
					<discord-message>
						<discord-spoiler>I am spoiler text!</discord-spoiler>
					</discord-message>
					<discord-message>
						<discord-quote>I am quoted text!</discord-quote>
					</discord-message>
				</discord-messages>
				<h3 class="title">No Background mode</h3>
				<discord-messages prop:noBackground={true}>
					<discord-message>This message blends perfectly with your own background</discord-message>
					<discord-message>No Background mode is turned on here</discord-message>
				</discord-messages>
				<h3 class="title">Mentions</h3>
				<discord-messages>
					<discord-message prop:profile="maximillian">
						Hey, <discord-mention>Alyx Vargas</discord-mention> and <discord-mention>Dawn</discord-mention>. Welcome to our server! Be
						sure to read through the <discord-mention prop:type="channel">rules</discord-mention>. You can ping{' '}
						<discord-mention prop:type="role" prop:color="#70f0b4">
							Support
						</discord-mention>{' '}
						if you need help. Feel free to join <discord-mention prop:type="voice">General</discord-mention>
						and talk with us and post thoughts in <discord-mention prop:type="forum">feedback</discord-mention>.
					</discord-message>
					<discord-message prop:author="Alyx Vargas">
						Hey there <discord-mention prop:highlight={true}>Maximillian Osborn</discord-mention>, thanks! I will!
					</discord-message>
					<discord-message prop:profile="maximillian">
						Also, make sure to run <discord-mention prop:type="slash">profile</discord-mention> to create your server profile!
					</discord-message>
				</discord-messages>
				<h3 class="title">Custom Discord Emojis</h3>
				<discord-messages>
					<discord-message prop:profile="favna">
						Hey these are some custom emojis:
						<discord-custom-emoji
							prop:name="blobparty"
							prop:url="https://raw.githubusercontent.com/skyra-project/discord-components-implementations/main/shared/public/blobparty.gif"
						></discord-custom-emoji>
						<discord-custom-emoji prop:name="skyra" prop:url="https://github.com/NM-EEA-Y.png"></discord-custom-emoji>
						<discord-embed prop:slot="embeds" prop:color="#0F52BA" prop:embedTitle="diamond Emojis in the embed title">
							<discord-embed-description prop:slot="description">
								Custom emojis in the embed description:
								<discord-custom-emoji
									prop:name="pikawow"
									prop:url="https://raw.githubusercontent.com/skyra-project/discord-components-implementations/main/shared/public/pikawow.png"
									prop:embedEmoji={true}
								></discord-custom-emoji>
							</discord-embed-description>
							<discord-embed-fields prop:slot="fields">
								<discord-embed-field prop:fieldTitle="dragonite Custom emojis in the field title">
									Custom emojis in the field content{' '}
									<discord-custom-emoji prop:name="sapphire" prop:embedEmoji={true}></discord-custom-emoji>
								</discord-embed-field>
							</discord-embed-fields>
						</discord-embed>
					</discord-message>
				</discord-messages>
				<h3 class="title">Server Invites</h3>
				<discord-messages>
					<discord-message prop:profile="favna">
						discord.gg/djs <br />
						discord.gg/code <br />
						discord.gg/6gakFR2
						<discord-attachments prop:slot="attachments">
							<discord-invite
								prop:name="discord.js - Imagine a bot"
								prop:icon="https://raw.githubusercontent.com/skyra-project/discord-components-implementations/main/shared/public/discordjs.png"
								prop:url="https://discord.gg/djs"
								prop:online={16417}
								prop:members={87147}
								prop:verified={true}
							></discord-invite>
							<discord-invite
								prop:name="The Coding Den"
								prop:icon="https://raw.githubusercontent.com/skyra-project/discord-components-implementations/main/shared/public/tcd.png"
								prop:url="https://discord.gg/code"
								prop:online={18456}
								prop:members={73548}
								prop:partnered={true}
							></discord-invite>
							<discord-invite
								prop:name="Skyra Lounge"
								prop:url="https://join.skyra.pw"
								prop:icon="https://raw.githubusercontent.com/skyra-project/discord-components-implementations/main/shared/public/skyralounge.gif"
								prop:online={176}
								prop:members={738}
							></discord-invite>
						</discord-attachments>
					</discord-message>
				</discord-messages>
				<h3 class="title">Image Attachments with small images</h3>
				<discord-messages>
					<discord-message prop:author="Alyx Vargas">
						That's a very small logo image!
						<discord-attachment
							prop:slot="attachments"
							prop:url="https://raw.githubusercontent.com/skyra-project/discord-components-implementations/main/shared/public/lit.png"
							prop:height={100}
							prop:width={100}
							prop:alt="lit-logo"
						/>
					</discord-message>
				</discord-messages>
				<h3 class="title">Image Attachments with large images</h3>
				<discord-messages>
					<discord-message prop:profile="favna">
						Hey guys, check out this awesome, cute, and totally amazing dragon!
						<discord-attachment
							prop:slot="attachments"
							prop:url="https://raw.githubusercontent.com/skyra-project/discord-components-implementations/main/shared/public/dragonite.png"
							prop:height={512}
							prop:width={512}
							prop:alt="dragonite"
						/>
					</discord-message>
				</discord-messages>
				<h3 class="title">System Messages</h3>
				<discord-messages>
					<discord-system-message prop:type="join">
						Welcome, <i style="color: #a155ab">Snazzah</i>. We hope you brought pizza.
						<discord-reactions prop:slot="reactions">
							<discord-reaction
								prop:name="👀"
								prop:emoji="https://raw.githubusercontent.com/skyra-project/discord-components-implementations/main/shared/public/eyes.svg"
							></discord-reaction>
						</discord-reactions>
					</discord-system-message>
					<discord-system-message prop:type="join">
						<i>Snazzah</i> has added <i>Discord Developers #discord-api-announcements</i> to this channel. Its most important updates will
						show up here.
					</discord-system-message>
					<discord-system-message prop:type="boost">
						{' '}
						<i style="color: #a155ab">Favna</i> just boosted the server!{' '}
					</discord-system-message>
					<discord-system-message prop:type="thread">
						<i style="color: #a155ab">Favna</i> started a thread: <i>Skyra Suggestion Thread</i>. See all <i>threads</i>.
					</discord-system-message>
				</discord-messages>
				<discord-messages>
					<discord-system-message prop:type="join">
						{' '}
						<i>Snazzah</i> added <i>Favna</i> to the group.{' '}
					</discord-system-message>
					<discord-system-message prop:type="call">
						{' '}
						<i>Favna</i> started a call that lasted an hour.{' '}
					</discord-system-message>
					<discord-system-message prop:type="edit">
						{' '}
						<i>Snazzah</i> changed the channel icon.{' '}
					</discord-system-message>
					<discord-system-message prop:type="edit" channel-name>
						<i>Snazzah</i> changed the channel name: <b>A humble Group DM</b>
					</discord-system-message>
					<discord-system-message prop:type="missed-call">
						{' '}
						You missed a call from <i>Favna</i> that lasted a minute.{' '}
					</discord-system-message>
					<discord-system-message prop:type="leave">
						{' '}
						<i>Favna</i> left the group.{' '}
					</discord-system-message>
					<discord-system-message prop:type="pin">
						<i>Favna</i> pinned <i>a message</i> to this channel. See all <i>pinned messages</i>.
					</discord-system-message>
					<discord-system-message prop:type="alert">Warning! Warning! This library is the coolest of them all!</discord-system-message>
					<discord-system-message prop:type="error">Error! Cool overload!.</discord-system-message>
				</discord-messages>
				<h3 class="title">Threads</h3>
				<discord-messages>
					<discord-system-message prop:type="thread">
						<i style="color: #a155ab">Favna</i> started a thread: <i>Skyra Suggestion Thread</i>. See all <i>threads</i>.
						<discord-thread prop:slot="thread" prop:cta="2 Messages">
							<discord-thread-message prop:profile="skyra">Pong!</discord-thread-message>
						</discord-thread>
					</discord-system-message>
					<discord-message prop:profile="favna">
						Let's make a thread!
						<discord-thread prop:slot="thread" prop:name="A cool thread!">
							There are no messages in this thread yet.
						</discord-thread>
					</discord-message>
				</discord-messages>
				<h3 class="title">Reactions</h3>
				<discord-messages>
					<discord-message prop:profile="favna">
						React to this message!
						<discord-reactions prop:slot="reactions">
							<discord-reaction
								prop:name="👍"
								prop:emoji="https://raw.githubusercontent.com/skyra-project/discord-components-implementations/main/shared/public/thumbsup.svg"
								prop:count={1}
							></discord-reaction>
							<discord-reaction
								prop:name="👀"
								prop:emoji="https://raw.githubusercontent.com/skyra-project/discord-components-implementations/main/shared/public/eyes.svg"
								prop:count={2}
								prop:reacted={true}
							></discord-reaction>
							<discord-reaction
								prop:interactive={true}
								prop:name="dragonite"
								prop:emoji="https://raw.githubusercontent.com/skyra-project/discord-components-implementations/main/shared/public/dragonite.png"
								prop:count={10}
								prop:reacted={true}
							></discord-reaction>
						</discord-reactions>
					</discord-message>
				</discord-messages>
				<h3 class="title">Replies</h3>
				<discord-messages>
					<discord-message prop:profile="favna">
						<discord-reply prop:slot="reply" prop:profile="skyra" prop:edited={true} prop:attachment={true}>
							What do you think about this image?
						</discord-reply>
						Looks nice!
					</discord-message>
					<discord-message prop:profile="maximillian" prop:highlight={true}>
						<discord-reply prop:slot="reply" prop:profile="favna" prop:mentions={true}>
							Looks nice!
						</discord-reply>
						I agree!
					</discord-message>
				</discord-messages>
				<h3 class="title">Replies in Compact Mode</h3>
				<discord-messages prop:compactMode={true}>
					<discord-message prop:profile="favna">
						<discord-reply prop:slot="reply" prop:profile="skyra" prop:edited={true} prop:attachment={true}>
							What do you think about this image?
						</discord-reply>
						Looks nice!
					</discord-message>
					<discord-message prop:profile="maximillian" prop:highlight={true}>
						<discord-reply prop:slot="reply" prop:profile="favna" prop:mentions={true}>
							Looks nice!
						</discord-reply>
						I agree!
					</discord-message>
				</discord-messages>
				<h3 class="title">Commands</h3>
				<discord-messages>
					<discord-message prop:profile="skyra">
						<discord-command prop:slot="reply" prop:profile="favna" prop:command="/ping"></discord-command>
						Pong!
					</discord-message>
					<discord-message prop:profile="skyra" prop:ephemeral={true}>
						<discord-reply prop:slot="reply" prop:profile="skyra" prop:command={true}>
							Pong!
						</discord-reply>
						Took 100ms.
					</discord-message>
				</discord-messages>
				<h3 class="title">Commands with deleted message</h3>
				<discord-messages>
					<discord-message prop:profile="skyra">
						<discord-reply prop:slot="reply" prop:deleted={true}></discord-reply>
						Took 100ms.
					</discord-message>
				</discord-messages>
				<h3 class="title">Commands in Compact Mode</h3>
				<discord-messages prop:compactMode={true}>
					<discord-message prop:profile="skyra">
						<discord-command prop:slot="reply" prop:profile="favna" prop:command="/ping"></discord-command>
						Pong!
					</discord-message>
					<discord-message prop:profile="skyra" prop:ephemeral={true}>
						<discord-reply prop:slot="reply" prop:profile="skyra" prop:command={true}>
							Pong!
						</discord-reply>
						Took 100ms.
					</discord-message>
				</discord-messages>
				<h3 class="title">Components</h3>
				<discord-messages>
					<discord-message prop:profile="skyra">
						Here are some components!
						<discord-attachments prop:slot="components">
							<discord-action-row>
								<discord-button prop:type="primary">Primary Button</discord-button>
								<discord-button prop:type="secondary">Secondary Button</discord-button>
								<discord-button prop:type="success">Green Button</discord-button>
								<discord-button prop:type="destructive">Red Button</discord-button>
								<discord-button
									prop:url="https://join.skyra.pw"
									prop:emoji="https://raw.githubusercontent.com/skyra-project/discord-components-implementations/main/shared/public/eyes.svg"
									prop:emojiName="👀"
								>
									Link
								</discord-button>
							</discord-action-row>
							<discord-action-row>
								<discord-button prop:type="primary" prop:disabled={true}>
									Primary Button
								</discord-button>
								<discord-button prop:type="secondary" prop:disabled={true}>
									Secondary Button
								</discord-button>
								<discord-button prop:type="success" prop:disabled={true}>
									Green Button
								</discord-button>
								<discord-button prop:type="destructive" prop:disabled={true}>
									Red Button
								</discord-button>
								<discord-button
									prop:url="https://join.skyra.pw"
									prop:disabled={true}
									prop:emoji="https://raw.githubusercontent.com/skyra-project/discord-components-implementations/main/shared/public/eyes.svg"
									prop:emojiName="👀"
								>
									Link
								</discord-button>
							</discord-action-row>
						</discord-attachments>
					</discord-message>
				</discord-messages>
				<h3 class="title">Verified Discord bots</h3>
				<discord-messages>
					<discord-message prop:profile="skyra"> Wow I just got verified! </discord-message>
				</discord-messages>
				<h3 class="title">Full embed example</h3>
				<discord-messages>
					<discord-message prop:profile="skyra">
						<discord-embed
							prop:slot="embeds"
							prop:authorImage="https://raw.githubusercontent.com/skyra-project/discord-components-implementations/main/shared/public/sapphire.png"
							prop:authorName="Sapphire Developers"
							prop:authorUrl="https://sapphirejs.dev"
							prop:color="#0F52BA"
							prop:embedTitle="Sapphire"
							prop:image="https://raw.githubusercontent.com/skyra-project/discord-components-implementations/main/shared/public/sapphire.png"
							prop:thumbnail="https://raw.githubusercontent.com/skyra-project/discord-components-implementations/main/shared/public/sapphire.png"
							prop:url="https://sapphirejs.dev"
						>
							<discord-embed-description prop:slot="description">
								Sapphire is a next-gen object-oriented
								<discord-link prop:target="_blank" prop:rel="noopener noreferrer" prop:href="https://discord.js.org/">
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
							<discord-embed-fields prop:slot="fields">
								<discord-embed-field prop:fieldTitle="Created">
									<discord-time>1 year ago</discord-time>
								</discord-embed-field>
								<discord-embed-field prop:fieldTitle="Installation"> yarn add &#64;sapphire/framework </discord-embed-field>
								<discord-embed-field prop:fieldTitle="Key Features">
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
								prop:slot="footer"
								prop:footerImage="https://raw.githubusercontent.com/skyra-project/discord-components-implementations/main/shared/public/sapphire.png"
								prop:timestamp="28/01/2024"
							>
								Open source libraries to aid in the creation of Discord bots
							</discord-embed-footer>
						</discord-embed>
					</discord-message>
				</discord-messages>
				<h3 class="title">Server crosspost messages</h3>
				<discord-messages>
					<discord-message prop:profile="discordjs" prop:timestamp="28/01/2024">
						Hey peeps!
						<br />
						<br />
						We have a redesigned website over at
						<discord-link prop:target="_blank" prop:href="https://discord.js.org/">
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
						<discord-mention prop:type="channel">site-discussion</discord-mention>
						channel (you have to be in the server for this)
					</discord-message>
				</discord-messages>
				<h3 class="title">Embedded video</h3>
				<discord-messages>
					<discord-message prop:profile="skyra">
						<discord-embed
							prop:slot="embeds"
							prop:provider="Blender"
							prop:authorName="Blender"
							prop:authorUrl="https://peach.blender.org/download/"
							prop:color="#019DD8"
							prop:embedTitle="Big Buck Bunny"
							prop:video="https://download.blender.org/peach/bigbuckbunny_movies/big_buck_bunny_1080p_stereo.ogg"
							prop:url="https://download.blender.org/peach/bigbuckbunny_movies/big_buck_bunny_1080p_stereo.ogg"
						></discord-embed>
					</discord-message>
				</discord-messages>
				<h3 class="title">Embed fields</h3>
				<discord-messages>
					<discord-message prop:profile="skyra">
						<discord-embed prop:slot="embeds">
							<discord-embed-fields prop:slot="fields">
								<discord-embed-field prop:fieldTitle="Field title">
									{' '}
									Some value here. Some value here. Some value here.{' '}
								</discord-embed-field>
								<discord-embed-field prop:fieldTitle="Field title">
									{' '}
									Some value here. Some value here. Some value here.{' '}
								</discord-embed-field>
								<discord-embed-field prop:fieldTitle="Field title">
									{' '}
									Some value here. Some value here. Some value here.{' '}
								</discord-embed-field>
							</discord-embed-fields>
						</discord-embed>
					</discord-message>
				</discord-messages>
				<h3 class="title">A tenor-gif in video format</h3>
				<discord-messages>
					<discord-message prop:profile="maximillian">
						<discord-tenor-video prop:slot="attachments" prop:url="https://c.tenor.com/oTeBa4EVepMAAAPo/business-cat-working.mp4" />
					</discord-message>
				</discord-messages>
				<h3 class="title">Inline fields</h3>
				<discord-messages>
					<discord-message prop:profile="skyra">
						<discord-embed prop:slot="embeds">
							<discord-embed-fields prop:slot="fields">
								<discord-embed-field prop:fieldTitle="Inline field title" prop:inline={true} prop:inlineIndex={1}>
									{' '}
									Some value here{' '}
								</discord-embed-field>
								<discord-embed-field prop:fieldTitle="Inline field title" prop:inline={true} prop:inlineIndex={2}>
									{' '}
									Some value here{' '}
								</discord-embed-field>
								<discord-embed-field prop:fieldTitle="Inline field title" prop:inline={true} prop:inlineIndex={3}>
									{' '}
									Some value here{' '}
								</discord-embed-field>
							</discord-embed-fields>
						</discord-embed>
					</discord-message>
				</discord-messages>
				<h3 class="title">Inline fields with a thumbnail</h3>
				<discord-messages>
					<discord-message prop:profile="skyra">
						<discord-embed
							prop:slot="embeds"
							prop:thumbnail="https://raw.githubusercontent.com/skyra-project/discord-components-implementations/main/shared/public/sapphire.png"
						>
							<discord-embed-fields prop:slot="fields">
								<discord-embed-field prop:fieldTitle="Inline field title" prop:inline={true} prop:inlineIndex={1}>
									{' '}
									Some value here{' '}
								</discord-embed-field>
								<discord-embed-field prop:fieldTitle="Inline field title" prop:inline={true} prop:inlineIndex={2}>
									{' '}
									Some value here{' '}
								</discord-embed-field>
								<discord-embed-field prop:fieldTitle="Inline field title" prop:inline={true} prop:inlineIndex={3}>
									{' '}
									Some value here{' '}
								</discord-embed-field>
							</discord-embed-fields>
						</discord-embed>
					</discord-message>
				</discord-messages>
				<h3 class="title">Headers</h3>
				<discord-messages>
					<discord-message prop:profile="favna">
						<discord-header prop:level={1}>This is a header 1</discord-header>
						<discord-header prop:level={2}>This is a header 2</discord-header>
						<discord-header prop:level={3}>This is a header 3</discord-header>
					</discord-message>
				</discord-messages>

				<h3 class="title">Ordered list items</h3>
				<discord-messages>
					<discord-message prop:profile="favna">
						<discord-ordered-list>
							<discord-list-item>This is an ordered list item</discord-list-item>
							<discord-ordered-list prop:start={99}>
								<discord-list-item>You can start your list item at a custom number</discord-list-item>
								<discord-list-item>We will calculate the length internally</discord-list-item>
								<discord-list-item>This whole level is considered to have a start number length of 3</discord-list-item>
							</discord-ordered-list>
						</discord-ordered-list>
					</discord-message>
				</discord-messages>

				<h3 class="title">Unordered list items</h3>
				<discord-messages>
					<discord-message prop:profile="favna">
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
}

export default App;

declare module 'solid-js' {
	namespace JSX {
		type ElementProps<T> = {
			// Add both the element's prefixed properties and the attributes
			[K in keyof T]: Props<T[K]> & HTMLAttributes<T[K]>;
		};
		// Prefixes all properties with `prop:` to match Solid's property setting syntax
		type Props<T> = {
			[K in keyof T as `prop:${string & K}`]?: T[K];
		};
		interface IntrinsicElements extends ElementProps<HTMLElementTagNameMap> {}
	}
}
