"use client";
/* eslint-disable react/no-unescaped-entities */

import Link from "next/link";
import Image from "next/image";

export function DraculaTheming() {
  return (
    <div className="prose prose-sm sm:prose-base lg:prose-lg max-w-none">
      <p>
        I'll walk you through how to turn your macOS setup—and your favorite
        apps—into{" "}
        <Link
          href="https://draculatheme.com/"
          target="_blank"
          className="text-primary hover:text-primary/80 underline"
        >
          Dracula theme
        </Link>
        . We'll cover everything from your terminal to your browser, code
        editor, and even Discord. Let's get spooky!
      </p>

      <h2 className="text-primary">Step 1: Theming Your Browser & Web Apps</h2>

      <h3>Stylus: The Powerhouse for Custom Styles</h3>
      <p>
        <Link
          href="https://add0n.com/stylus.html"
          target="_blank"
          className="text-primary hover:text-primary/80 underline"
        >
          Stylus
        </Link>{" "}
        is a browser extension that lets you apply custom CSS themes to
        websites. It's available for Chrome, Firefox, and Edge. Once installed,
        you can grab Dracula themes for your favorite sites from{" "}
        <Link
          href="https://userstyles.world/"
          target="_blank"
          className="text-primary hover:text-primary/80 underline"
        >
          userstyles.world
        </Link>{" "}
        or GitHub.
      </p>

      <ul className="space-y-4">
        <li>
          <strong>Twitter/X:</strong> Modified{" "}
          <Link
            href="https://userstyles.world/style/18258/twitter-catppuccin"
            target="_blank"
            className="text-primary hover:text-primary/80 underline"
          >
            Catppuccin
          </Link>{" "}
          into custom{" "}
          <Link
            href="assets/twitter-dracula.user.css"
            download
            className="text-primary hover:text-primary/80 underline"
          >
            Dracula for Twitter
          </Link>
          .<br />
          <Image
            src="/blog/assets/CleanShot_2025-07-28_at_14.20.512x.png"
            alt="Dracula Twitter Screenshot"
            width={1200}
            height={800}
            className="rounded-lg my-4"
          />
        </li>
        <li>
          <strong>GitHub:</strong>{" "}
          <Link
            href="https://github.com/druxorey/dracula-for-stylus/blob/main/styles/dracula-for-github.css"
            target="_blank"
            className="text-primary hover:text-primary/80 underline"
          >
            Dracula for GitHub
          </Link>
          .<br />
          <Image
            src="/blog/assets/CleanShot_2025-07-28_at_14.26.262x.png"
            alt="Dracula GitHub Screenshot"
            width={1200}
            height={800}
            className="rounded-lg my-4"
          />
        </li>
        <li>
          <strong>YouTube:</strong>{" "}
          <Link
            href="https://github.com/druxorey/dracula-for-stylus/blob/main/styles/dracula-for-youtube.css"
            target="_blank"
            className="text-primary hover:text-primary/80 underline"
          >
            Dracula for YouTube
          </Link>
          .<br />
          <Image
            src="/blog/assets/CleanShot_2025-07-28_at_14.27.332x.png"
            alt="Dracula YouTube Screenshot"
            width={1200}
            height={800}
            className="rounded-lg my-4"
          />
        </li>
        <li>
          <strong>Reddit:</strong>{" "}
          <Link
            href="https://github.com/druxorey/dracula-for-stylus/blob/main/styles/dracula-for-reddit.css"
            target="_blank"
            className="text-primary hover:text-primary/80 underline"
          >
            Dracula for Reddit
          </Link>
          .<br />
          <Image
            src="/blog/assets/CleanShot_2025-07-28_at_14.25.542x.png"
            alt="Dracula Reddit Screenshot"
            width={1200}
            height={800}
            className="rounded-lg my-4"
          />
        </li>
      </ul>

      <p>
        To install a style, just click the link, hit "Install Style",
        and you're done! You can also tweak the CSS if you want to
        personalize your look.
      </p>

      <h2 className="text-primary">Step 2: Theming Your Code & Notes</h2>

      <h3>Obsidian: Dracula Gemini</h3>
      <p>
        <Link
          href="https://obsidian.md/"
          target="_blank"
          className="text-primary hover:text-primary/80 underline"
        >
          Obsidian
        </Link>{" "}
        is a powerful note-taking app for markdown lovers. The{" "}
        <Link
          href="https://github.com/clbn/dracula-gemini"
          target="_blank"
          className="text-primary hover:text-primary/80 underline"
        >
          Dracula Gemini
        </Link>{" "}
        theme brings the Dracula palette to your notes, making your second brain
        look as good as it works.
      </p>
      <Image
        src="/blog/assets/CleanShot_2025-07-28_at_14.31.352x.png"
        alt="Obsidian Dracula Screenshot"
        width={1200}
        height={800}
        className="rounded-lg my-4"
      />

      <h2 className="text-primary">Step 3: iTerm2 & Shell</h2>

      <h3>iTerm2 + Dracula + Powerlevel10k + Oh My Zsh</h3>
      <p>
        <Link
          href="https://iterm2.com/"
          target="_blank"
          className="text-primary hover:text-primary/80 underline"
        >
          iTerm2
        </Link>{" "}
        is the go-to terminal for macOS power users. Pair it with the{" "}
        <Link
          href="https://draculatheme.com/iterm"
          target="_blank"
          className="text-primary hover:text-primary/80 underline"
        >
          official Dracula theme
        </Link>
        ,{" "}
        <Link
          href="https://github.com/romkatv/powerlevel10k"
          target="_blank"
          className="text-primary hover:text-primary/80 underline"
        >
          Powerlevel10k
        </Link>{" "}
        for a stunning prompt, and{" "}
        <Link
          href="https://ohmyz.sh/"
          target="_blank"
          className="text-primary hover:text-primary/80 underline"
        >
          Oh My Zsh
        </Link>{" "}
        for plugin magic.
      </p>
      <Image
        src="/blog/assets/CleanShot_2025-07-28_at_14.35.402x.png"
        alt="iTerm2 Dracula Screenshot"
        width={1200}
        height={800}
        className="rounded-lg my-4"
      />

      <ul className="space-y-2">
        <li>
          Download the Dracula iTerm2 color scheme and import it via{" "}
          <strong>iTerm2 → Preferences → Profiles → Colors</strong>.
        </li>
        <li>
          Install Oh My Zsh:{" "}
          <code className="bg-muted px-2 py-1 rounded text-sm">
            sh -c "$(curl -fsSL
            https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
          </code>
        </li>
        <li>
          Install Powerlevel10k:{" "}
          <code className="bg-muted px-2 py-1 rounded text-sm">
            git clone --depth=1 https://github.com/romkatv/powerlevel10k.git $
            {"${ZSH_CUSTOM:-$HOME/.oh-my-zsh/custom}"}/themes/powerlevel10k
          </code>
        </li>
        <li>
          Set{" "}
          <code className="bg-muted px-2 py-1 rounded text-sm">
            ZSH_THEME="powerlevel10k/powerlevel10k"
          </code>{" "}
          in your{" "}
          <code className="bg-muted px-2 py-1 rounded text-sm">.zshrc</code>.
        </li>
      </ul>

      <h2 className="text-primary">Step 4: Discord</h2>

      <h3>BetterDiscord + Refactor Midnight</h3>
      <p>
        <Link
          href="https://betterdiscord.app/"
          target="_blank"
          className="text-primary hover:text-primary/80 underline"
        >
          BetterDiscord
        </Link>{" "}
        is a client mod that lets you add custom themes and plugins to Discord.
        For Dracula vibes, try{" "}
        <Link
          href="https://www.refact0r.dev/projects/midnight"
          target="_blank"
          className="text-primary hover:text-primary/80 underline"
        >
          Refactor Midnight
        </Link>{" "}
        and add your own custom CSS for extra flair.
      </p>
      <Image
        src="/blog/assets/CleanShot_2025-07-28_at_14.42.552x.png"
        alt="Discord Dracula Screenshot"
        width={1200}
        height={800}
        className="rounded-lg my-4"
      />

      <Link
        href="assets/discord-dracula.user.css"
        download
        className="text-primary hover:text-primary/80 underline"
      >
        Download Custom Dracula Discord CSS here
      </Link>

      <pre className="bg-muted/50 border border-border rounded-lg p-4 my-6 overflow-x-auto">
        <code className="text-sm">
          {`/* DEMO CSS */
button[aria-label],
button.button-38aScr,
button.buttonWrapper-3YFQGJ {
  color: var(--primary) !important;
  fill: var(--primary) !important;
}`}
        </code>
      </pre>

      <h2 className="text-primary">Step 5: Wallpapers</h2>
      <p>
        No theme is complete without a matching wallpaper. Here are some
        Dracula-inspired options:
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        <div className="relative group">
          <Image
            src="/blog/assets/dracula_mac_wallpaper.png"
            alt="Dracula Mac Wallpaper"
            width={800}
            height={600}
            className="w-full h-auto rounded-lg"
          />
          <Link
            href="assets/dracula_mac_wallpaper.png"
            download
            className="absolute inset-0 flex items-center justify-center bg-background/90 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg"
          >
            <span className="text-primary underline">Download</span>
          </Link>
        </div>
        <div className="relative group">
          <Image
            src="/blog/assets/Dracula.png"
            alt="Dracula Wallpaper"
            width={800}
            height={600}
            className="w-full h-auto rounded-lg"
          />
          <Link
            href="assets/Dracula.png"
            download
            className="absolute inset-0 flex items-center justify-center bg-background/90 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg"
          >
            <span className="text-primary underline">Download</span>
          </Link>
        </div>
        <div className="relative group">
          <Image
            src="/blog/assets/Ghost.png"
            alt="Ghost Wallpaper"
            width={800}
            height={600}
            className="w-full h-auto rounded-lg"
          />
          <Link
            href="assets/Ghost.png"
            download
            className="absolute inset-0 flex items-center justify-center bg-background/90 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg"
          >
            <span className="text-primary underline">Download</span>
          </Link>
        </div>
        <div className="relative group">
          <Image
            src="/blog/assets/Hand.png"
            alt="Hand Wallpaper"
            width={800}
            height={600}
            className="w-full h-auto rounded-lg"
          />
          <Link
            href="assets/Hand.png"
            download
            className="absolute inset-0 flex items-center justify-center bg-background/90 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg"
          >
            <span className="text-primary underline">Download</span>
          </Link>
        </div>
        <div className="relative group">
          <Image
            src="/blog/assets/Kraken.png"
            alt="Kraken Wallpaper"
            width={800}
            height={600}
            className="w-full h-auto rounded-lg"
          />
          <Link
            href="assets/Kraken.png"
            download
            className="absolute inset-0 flex items-center justify-center bg-background/90 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg"
          >
            <span className="text-primary underline">Download</span>
          </Link>
        </div>
        <div className="relative group">
          <Image
            src="/blog/assets/Rainbow_1.png"
            alt="Rainbow Wallpaper"
            width={800}
            height={600}
            className="w-full h-auto rounded-lg"
          />
          <Link
            href="assets/Rainbow_1.png"
            download
            className="absolute inset-0 flex items-center justify-center bg-background/90 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg"
          >
            <span className="text-primary underline">Download</span>
          </Link>
        </div>
        <div className="relative group">
          <Image
            src="/blog/assets/Tree.png"
            alt="Tree Wallpaper"
            width={800}
            height={600}
            className="w-full h-auto rounded-lg"
          />
          <Link
            href="assets/Tree.png"
            download
            className="absolute inset-0 flex items-center justify-center bg-background/90 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg"
          >
            <span className="text-primary underline">Download</span>
          </Link>
        </div>
        <div className="relative group">
          <Image
            src="/blog/assets/Waves_1.png"
            alt="Waves Wallpaper"
            width={800}
            height={600}
            className="w-full h-auto rounded-lg"
          />
          <Link
            href="assets/Waves_1.png"
            download
            className="absolute inset-0 flex items-center justify-center bg-background/90 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg"
          >
            <span className="text-primary underline">Download</span>
          </Link>
        </div>
      </div>

      <p>
        Find even more at{" "}
        <Link
          href="https://github.com/aynp/dracula-wallpapers"
          target="_blank"
          className="text-primary hover:text-primary/80 underline"
        >
          aynp/dracula-wallpapers
        </Link>
        .
      </p>

      <h2 className="text-primary">Step 6: macOS UI Customization</h2>

      <h3>SketchyBar & JankyBorders</h3>
      <p>
        For advanced users,{" "}
        <Link
          href="https://github.com/FelixKratz/SketchyBar"
          target="_blank"
          className="text-primary hover:text-primary/80 underline"
        >
          SketchyBar
        </Link>{" "}
        lets you create a fully custom, scriptable macOS status bar. Pair it
        with{" "}
        <Link
          href="https://github.com/FelixKratz/JankyBorders"
          target="_blank"
          className="text-primary hover:text-primary/80 underline"
        >
          JankyBorders
        </Link>{" "}
        for window borders that match your Dracula vibe. Check out{" "}
        <Link
          href="https://github.com/FelixKratz/SketchyBar/discussions/47"
          target="_blank"
          className="text-primary hover:text-primary/80 underline"
        >
          community configs
        </Link>{" "}
        for inspiration.
      </p>
      <Image
        src="/blog/assets/CleanShot_2025-07-28_at_15.20.012x.png"
        alt="SketchyBar Screenshot"
        width={1200}
        height={800}
        className="rounded-lg my-4"
      />

      <h2 className="text-primary">Resources & More Dracula</h2>
      <ul className="space-y-2">
        <li>
          <Link
            href="https://userstyles.world/"
            target="_blank"
            className="text-primary hover:text-primary/80 underline"
          >
            userstyles.world
          </Link>{" "}
          — Find and share user styles for all your favorite sites.
        </li>
        <li>
          <Link
            href="https://github.com/druxorey/dracula-for-stylus/tree/main/styles"
            target="_blank"
            className="text-primary hover:text-primary/80 underline"
          >
            Dracula for Stylus (Brave, gemini, google drive/docs, leetcode,
            whatsapp, wikipedia)
          </Link>
        </li>
      </ul>

      <h3 className="text-primary mt-10">Dracula Color Palette</h3>
      <p>The Dracula theme color palette - reference:</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 my-6">
        <div className="flex items-center justify-between p-3 rounded-lg bg-background/50 border border-border/50">
          <div className="flex-1">
            <p className="font-semibold text-sm">Background</p>
            <code className="text-xs text-muted-foreground">#282a36</code>
          </div>
          <div className="w-10 h-10 rounded-lg border-2 border-border" style={{ backgroundColor: '#282a36' }} />
        </div>

        <div className="flex items-center justify-between p-3 rounded-lg bg-background/50 border border-border/50">
          <div className="flex-1">
            <p className="font-semibold text-sm">Current Line</p>
            <code className="text-xs text-muted-foreground">#44475a</code>
          </div>
          <div className="w-10 h-10 rounded-lg border-2 border-border" style={{ backgroundColor: '#44475a' }} />
        </div>

        <div className="flex items-center justify-between p-3 rounded-lg bg-background/50 border border-border/50">
          <div className="flex-1">
            <p className="font-semibold text-sm">Selection</p>
            <code className="text-xs text-muted-foreground">#44475a</code>
          </div>
          <div className="w-10 h-10 rounded-lg border-2 border-border" style={{ backgroundColor: '#44475a' }} />
        </div>

        <div className="flex items-center justify-between p-3 rounded-lg bg-background/50 border border-border/50">
          <div className="flex-1">
            <p className="font-semibold text-sm">Foreground</p>
            <code className="text-xs text-muted-foreground">#f8f8f2</code>
          </div>
          <div className="w-10 h-10 rounded-lg border-2 border-border" style={{ backgroundColor: '#f8f8f2' }} />
        </div>

        <div className="flex items-center justify-between p-3 rounded-lg bg-background/50 border border-border/50">
          <div className="flex-1">
            <p className="font-semibold text-sm">Comment</p>
            <code className="text-xs text-muted-foreground">#6272a4</code>
          </div>
          <div className="w-10 h-10 rounded-lg border-2 border-border" style={{ backgroundColor: '#6272a4' }} />
        </div>

        <div className="flex items-center justify-between p-3 rounded-lg bg-background/50 border border-border/50">
          <div className="flex-1">
            <p className="font-semibold text-sm">Cyan</p>
            <code className="text-xs text-muted-foreground">#8be9fd</code>
          </div>
          <div className="w-10 h-10 rounded-lg border-2 border-border" style={{ backgroundColor: '#8be9fd' }} />
        </div>

        <div className="flex items-center justify-between p-3 rounded-lg bg-background/50 border border-border/50">
          <div className="flex-1">
            <p className="font-semibold text-sm">Green</p>
            <code className="text-xs text-muted-foreground">#50fa7b</code>
          </div>
          <div className="w-10 h-10 rounded-lg border-2 border-border" style={{ backgroundColor: '#50fa7b' }} />
        </div>

        <div className="flex items-center justify-between p-3 rounded-lg bg-background/50 border border-border/50">
          <div className="flex-1">
            <p className="font-semibold text-sm">Orange</p>
            <code className="text-xs text-muted-foreground">#ffb86c</code>
          </div>
          <div className="w-10 h-10 rounded-lg border-2 border-border" style={{ backgroundColor: '#ffb86c' }} />
        </div>

        <div className="flex items-center justify-between p-3 rounded-lg bg-background/50 border border-border/50">
          <div className="flex-1">
            <p className="font-semibold text-sm">Pink</p>
            <code className="text-xs text-muted-foreground">#ff79c6</code>
          </div>
          <div className="w-10 h-10 rounded-lg border-2 border-border" style={{ backgroundColor: '#ff79c6' }} />
        </div>

        <div className="flex items-center justify-between p-3 rounded-lg bg-background/50 border border-border/50">
          <div className="flex-1">
            <p className="font-semibold text-sm">Purple</p>
            <code className="text-xs text-muted-foreground">#bd93f9</code>
          </div>
          <div className="w-10 h-10 rounded-lg border-2 border-border" style={{ backgroundColor: '#bd93f9' }} />
        </div>

        <div className="flex items-center justify-between p-3 rounded-lg bg-background/50 border border-border/50">
          <div className="flex-1">
            <p className="font-semibold text-sm">Red</p>
            <code className="text-xs text-muted-foreground">#ff5555</code>
          </div>
          <div className="w-10 h-10 rounded-lg border-2 border-border" style={{ backgroundColor: '#ff5555' }} />
        </div>

        <div className="flex items-center justify-between p-3 rounded-lg bg-background/50 border border-border/50">
          <div className="flex-1">
            <p className="font-semibold text-sm">Yellow</p>
            <code className="text-xs text-muted-foreground">#f1fa8c</code>
          </div>
          <div className="w-10 h-10 rounded-lg border-2 border-border" style={{ backgroundColor: '#f1fa8c' }} />
        </div>
      </div>
    </div>
  );
}
