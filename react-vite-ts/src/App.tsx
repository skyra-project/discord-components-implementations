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
  DiscordInvite,
  DiscordItalic,
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
  DiscordUnderlined,
} from "@skyra/discord-components-react";

function App() {
  return (
    <div>
      <div>
        <h1 className="logo">@skyra/discord-components-core</h1>
        <span>
          [
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/skyra-project/discord-components/"
          >
            Github
          </a>
          ]
        </span>
      </div>
      <main>
        <h3 className="title">A normal conversation</h3>
        <DiscordMessages>
          <DiscordMessage author="Alyx Vargas">
            {" "}
            Hey guys, I'm new here! Glad to be able to join you all!{" "}
          </DiscordMessage>
          <DiscordMessage author="Fenton Smart" avatar="/avafive.png">
            {" "}
            Hi, I'm new here too!{" "}
          </DiscordMessage>
          <DiscordMessage profile="maximillian">
            Hey, <DiscordMention>Alyx Vargas</DiscordMention> and{" "}
            <DiscordMention>Dawn</DiscordMention>. Welcome to our server!
            <br />
            Be sure to read through the{" "}
            <DiscordMention type="channel">rules</DiscordMention>. You can ping
            <DiscordMention type="role" color="#70f0b4">
              Support
            </DiscordMention>{" "}
            if you need help.
          </DiscordMessage>
          <DiscordMessage profile="willard">
            Hello everyone! How's it going?
          </DiscordMessage>
          <DiscordMessage author="Alyx Vargas">
            Thank you
            <DiscordMention highlight>Maximillian Osborn</DiscordMention>!
          </DiscordMessage>
          <DiscordMessage author="Kayla Feeney" avatar="/avafour.png">
            I'm doing well, <DiscordMention>Willard Walton</DiscordMention>.
            What about yourself?
          </DiscordMessage>
          <DiscordMessage profile="willard">
            {" "}
            s!8ball How am I doing today?{" "}
          </DiscordMessage>
          <DiscordMessage profile="skyra"> Yes. </DiscordMessage>
        </DiscordMessages>

        <h3 className="title">Custom Discord Emojis</h3>
        <DiscordMessages>
          <DiscordMessage profile="favna">
            Hey these are some custom emojis:
            <DiscordCustomEmoji name="blobparty" url="/blobparty.gif" />
            <DiscordCustomEmoji name="skyra" url="/skyra.png" />
            <DiscordEmbed
              slot="embeds"
              color="#0F52BA"
              embedTitle="diamond Emojis in the embed title"
            >
              <DiscordEmbedDescription slot="description">
                Custom emojis in the embed description:
              </DiscordEmbedDescription>
              <DiscordCustomEmoji
                name="pikawow"
                url="/pikawow.png"
                embedEmoji
              />
              <DiscordEmbedFields slot="fields">
                <DiscordEmbedField fieldTitle="dragonite Custom emojis in the field title">
                  Custom emojis in the field content{" "}
                  <DiscordCustomEmoji
                    name="sapphire"
                    url="/skyra.png"
                    embedEmoji
                  />
                </DiscordEmbedField>
              </DiscordEmbedFields>
            </DiscordEmbed>
          </DiscordMessage>
        </DiscordMessages>

        <h3 className="title">Light mode</h3>
        <DiscordMessages lightTheme>
          <DiscordMessage>Look at me I'm a beautiful butterfly</DiscordMessage>
          <DiscordMessage edited>
            Fluttering in the sunlight{" "}
            <span role="img" aria-label="Sun Emoji">
              🌞
            </span>
          </DiscordMessage>
        </DiscordMessages>

        <h3 className="title">Compact mode</h3>
        <DiscordMessages compactMode>
          <DiscordMessage>Look at me I'm a beautiful butterfly</DiscordMessage>
          <DiscordMessage>
            Fluttering in the moonlight{" "}
            <span role="img" aria-label="Moon Emoji">
              🌝
            </span>
          </DiscordMessage>
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
            <DiscordSpoiler>I am spoiler text!</DiscordSpoiler>
          </DiscordMessage>
          <DiscordMessage>
            <DiscordQuote>I am quoted text!</DiscordQuote>
          </DiscordMessage>
        </DiscordMessages>

        <h3 className="title">No Background mode</h3>
        <DiscordMessages noBackground>
          <DiscordMessage>
            This message blends perfectly with your own background
          </DiscordMessage>
          <DiscordMessage>No Background mode is turned on here</DiscordMessage>
        </DiscordMessages>

        <h3 className="title">Mentions</h3>
        <DiscordMessages>
          <DiscordMessage profile="maximillian">
            Hey, <DiscordMention>Alyx Vargas</DiscordMention> and{" "}
            <DiscordMention>Dawn</DiscordMention>. Welcome to our server! Be
            sure to read through the{" "}
            <DiscordMention type="channel">rules</DiscordMention>. You can ping
            <DiscordMention type="role" color="#70f0b4">
              Support
            </DiscordMention>
            if you need help. Feel free to join
            <DiscordMention type="voice">General</DiscordMention>
            and talk with us.
          </DiscordMessage>
          <DiscordMessage author="Alyx Vargas">
            Hey there
            <DiscordMention highlight>Maximillian Osborn</DiscordMention>,
            thanks! I will!
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
                icon="/discordjs.png"
                url="https://discord.gg/djs"
                online={16417}
                members={87147}
                verified
              ></DiscordInvite>
              <DiscordInvite
                name="The Coding Den"
                icon="/tcd.png"
                url="https://discord.gg/code"
                online={18456}
                members={73548}
                partnered
              ></DiscordInvite>
              <DiscordInvite
                name="Skyra Lounge"
                url="https://join.skyra.pw"
                icon="/skyralounge.gif"
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
              url="/stencil.png"
              height={100}
              width={100}
              alt="stencil-logo"
            />
          </DiscordMessage>
        </DiscordMessages>

        <h3 className="title">Image Attachments with large images</h3>
        <DiscordMessages>
          <DiscordMessage profile="favna">
            Hey guys, check out this awesome, cute, and totally amazing dragon!
            <DiscordAttachment
              slot="attachments"
              url="/dragonite.png"
              height={512}
              width={512}
              alt="dragonite"
            />
          </DiscordMessage>
        </DiscordMessages>

        <h3 className="title">System Messages</h3>
        <DiscordMessages>
          <DiscordSystemMessage type="join">
            Welcome, <i style={{ color: "#a155ab" }}>Snazzah</i>. We hope you
            brought pizza.
            <DiscordReactions slot="reactions">
              <DiscordReaction name="👀" emoji="/eyes.svg"></DiscordReaction>
            </DiscordReactions>
          </DiscordSystemMessage>
          <DiscordSystemMessage type="join">
            <i>Snazzah</i> has added{" "}
            <i>Discord Developers #DiscordApiAnnouncements</i> to this channel.
            Its most important updates will show up here.
          </DiscordSystemMessage>
          <DiscordSystemMessage type="boost">
            {" "}
            <i style={{ color: "#a155ab" }}>Favna</i> just boosted the server!{" "}
          </DiscordSystemMessage>
          <DiscordSystemMessage type="thread">
            <i style={{ color: "#a155ab" }}>Favna</i> started a thread:{" "}
            <i>Skyra Suggestion Thread</i>. See all <i>threads</i>.
          </DiscordSystemMessage>
        </DiscordMessages>
        <DiscordMessages>
          <DiscordSystemMessage type="join">
            {" "}
            <i>Snazzah</i> added <i>Favna</i> to the group.{" "}
          </DiscordSystemMessage>
          <DiscordSystemMessage type="call">
            {" "}
            <i>Favna</i> started a call that lasted an hour.{" "}
          </DiscordSystemMessage>
          <DiscordSystemMessage type="edit">
            {" "}
            <i>Snazzah</i> changed the channel icon.{" "}
          </DiscordSystemMessage>
          <DiscordSystemMessage type="edit" channelName>
            <i>Snazzah</i> changed the channel name: <b>A humble Group DM</b>
          </DiscordSystemMessage>
          <DiscordSystemMessage type="missed-call">
            {" "}
            You missed a call from <i>Favna</i> that lasted a minute.{" "}
          </DiscordSystemMessage>
          <DiscordSystemMessage type="leave">
            {" "}
            <i>Favna</i> left the group.{" "}
          </DiscordSystemMessage>
        </DiscordMessages>

        <h3 className="title">Threads</h3>
        <DiscordMessages>
          <DiscordSystemMessage type="thread">
            <i style={{ color: "#a155ab" }}>Favna</i> started a thread:{" "}
            <i>Skyra Suggestion Thread</i>. See all <i>threads</i>.
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
                emoji="/thumbsup.svg"
                count={1}
              ></DiscordReaction>
              <DiscordReaction
                name="👀"
                emoji="/eyes.svg"
                count={2}
                reacted
              ></DiscordReaction>
              <DiscordReaction
                interactive
                name="dragonite"
                emoji="/dragonite.png"
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
            <DiscordCommand
              slot="reply"
              profile="favna"
              command="/ping"
            ></DiscordCommand>
            Pong!
          </DiscordMessage>
          <DiscordMessage profile="skyra" ephemeral>
            <DiscordReply slot="reply" profile="skyra" command>
              Pong!
            </DiscordReply>
            Took 100ms.
          </DiscordMessage>
        </DiscordMessages>

        <h3 className="title">Commands in Compact Mode</h3>
        <DiscordMessages compactMode>
          <DiscordMessage profile="skyra">
            <DiscordCommand
              slot="reply"
              profile="favna"
              command="/ping"
            ></DiscordCommand>
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
                  emoji="/eyes.svg"
                  emojiName="👀"
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
                  emoji="/eyes.svg"
                  emojiName="👀"
                >
                  Link
                </DiscordButton>
              </DiscordActionRow>
            </DiscordAttachments>
          </DiscordMessage>
        </DiscordMessages>

        <h3 className="title">Verified Discord bots</h3>
        <DiscordMessages>
          <DiscordMessage profile="skyra">
            {" "}
            Wow I just got verified!{" "}
          </DiscordMessage>
        </DiscordMessages>

        <h3 className="title">Full embed example</h3>
        <DiscordMessages>
          <DiscordMessage profile="skyra">
            <DiscordEmbed
              slot="embeds"
              authorImage="/sapphire.png"
              authorName="Sapphire Developers"
              authorUrl="https://sapphirejs.dev"
              color="#0F52BA"
              embedTitle="Sapphire"
              image="/sapphire.png"
              thumbnail="/sapphire.png"
              url="https://sapphirejs.dev"
            >
              <DiscordEmbedDescription slot="description">
                Sapphire is a next-gen object-oriented
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://discord.js.org/"
                >
                  Discord.js
                </a>
                bot framework.
                <br />
                <br />
                Sapphire is a community driven framework that aims to give you
                all the features you need to make your Discord bot.
                <br />
                <br />
                With a history of many other Discord bot frameworks (both for
                NodeJS and other languages) to inspire Sapphire, it has become
                the ultimate modern experience of writing your code.
              </DiscordEmbedDescription>
              <DiscordEmbedFields slot="fields">
                <DiscordEmbedField fieldTitle="Created">
                  <DiscordTime>1 year ago</DiscordTime>
                </DiscordEmbedField>
                <DiscordEmbedField fieldTitle="Installation">
                  {" "}
                  yarn add @sapphire/framework{" "}
                </DiscordEmbedField>
                <DiscordEmbedField fieldTitle="Key Features">
                  <ul
                    style={{
                      paddingInlineStart: 20,
                      marginBlockStart: "0.5em",
                    }}
                  >
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
                      <div>
                        Designed with first class TypeScript support in mind
                      </div>
                    </li>
                    <li>
                      <div>
                        <span></span>
                      </div>
                      <div>
                        Includes optional utilities that you can use in any
                        project
                      </div>
                    </li>
                  </ul>
                </DiscordEmbedField>
              </DiscordEmbedFields>
              <DiscordEmbedFooter
                slot="footer"
                footerImage="/sapphire.png"
                timestamp="03/20/2021"
              >
                Open source libraries to aid in the creation of Discord bots
              </DiscordEmbedFooter>
            </DiscordEmbed>
          </DiscordMessage>
        </DiscordMessages>

        <h3 className="title">Server crosspost messages</h3>
        <DiscordMessages>
          <DiscordMessage profile="discordjs" timestamp="12/06/2021">
            Hey peeps!
            <br />
            <br />
            We have a redesigned website over at
            <a target="_blank" href="https://discord.js.org/" rel="noreferrer">
              https://discord.js.org/
            </a>
            <br />
            Check it out if you want or not
            <br />
            <br />
            You're most likely using a cached version of the old website because
            of our service worker, so make sure to clear your cache and any
            cookies/service workers you have. For some of you nothing needs to
            be done, for others a so called "hard-refresh" will do the trick
            too.
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
              authorName="Blender"
              authorUrl="https://peach.blender.org/download/"
              color="#019DD8"
              embedTitle="Big Buck Bunny"
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
                <DiscordEmbedField fieldTitle="Field title">
                  Some value here. Some value here. Some value here.
                </DiscordEmbedField>
                <DiscordEmbedField fieldTitle="Field title">
                  Some value here. Some value here. Some value here.
                </DiscordEmbedField>
                <DiscordEmbedField fieldTitle="Field title">
                  Some value here. Some value here. Some value here.
                </DiscordEmbedField>
              </DiscordEmbedFields>
            </DiscordEmbed>
          </DiscordMessage>
        </DiscordMessages>

        <h3 className="title">A tenor-gif in video format</h3>
        <DiscordMessages>
          <DiscordMessage profile="maximillian">
            <DiscordTenorVideo
              slot="attachments"
              url="https://c.tenor.com/oTeBa4EVepMAAAPo/business-cat-working.mp4"
            />
          </DiscordMessage>
        </DiscordMessages>

        <h3 className="title">Inline fields</h3>
        <DiscordMessages>
          <DiscordMessage profile="skyra">
            <DiscordEmbed slot="embeds">
              <DiscordEmbedFields slot="fields">
                <DiscordEmbedField
                  fieldTitle="Inline field title"
                  inline
                  inlineIndex={1}
                >
                  {" "}
                  Some value here{" "}
                </DiscordEmbedField>
                <DiscordEmbedField
                  fieldTitle="Inline field title"
                  inline
                  inlineIndex={2}
                >
                  {" "}
                  Some value here{" "}
                </DiscordEmbedField>
                <DiscordEmbedField
                  fieldTitle="Inline field title"
                  inline
                  inlineIndex={3}
                >
                  {" "}
                  Some value here{" "}
                </DiscordEmbedField>
              </DiscordEmbedFields>
            </DiscordEmbed>
          </DiscordMessage>
        </DiscordMessages>

        <h3 className="title">Inline fields with a thumbnail</h3>
        <DiscordMessages>
          <DiscordMessage profile="skyra">
            <DiscordEmbed slot="embeds" thumbnail="/sapphire.png">
              <DiscordEmbedFields slot="fields">
                <DiscordEmbedField
                  fieldTitle="Inline field title"
                  inline
                  inlineIndex={1}
                >
                  {" "}
                  Some value here{" "}
                </DiscordEmbedField>
                <DiscordEmbedField
                  fieldTitle="Inline field title"
                  inline
                  inlineIndex={2}
                >
                  {" "}
                  Some value here{" "}
                </DiscordEmbedField>
                <DiscordEmbedField
                  fieldTitle="Inline field title"
                  inline
                  inlineIndex={3}
                >
                  {" "}
                  Some value here{" "}
                </DiscordEmbedField>
              </DiscordEmbedFields>
            </DiscordEmbed>
          </DiscordMessage>
        </DiscordMessages>
      </main>
    </div>
  );
}

export default App;
