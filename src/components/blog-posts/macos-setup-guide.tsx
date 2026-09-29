"use client";
/* eslint-disable react/no-unescaped-entities */

import Link from "next/link";
import { GalleryImage, GalleryVideo } from "@/components/gallery";

// Helper component for text highlighting
const Highlight = ({ children }: { children: React.ReactNode }) => {
  return <span className="text-primary font-semibold">{children}</span>;
};

const StepNumber = ({ number }: { number: number }) => (
  <span className="inline-block bg-primary text-background px-2 py-0.5 rounded font-semibold mr-2 text-sm">
    {number}
  </span>
);

const CommandBox = ({ children }: { children: React.ReactNode }) => (
  <div className="bg-muted/50 p-3 sm:p-4 rounded-lg my-3 sm:my-4">
    {children}
  </div>
);

const InfoBox = ({ children }: { children: React.ReactNode }) => (
  <div className="bg-muted/50 p-3 sm:p-4 rounded-lg my-4 sm:my-6 border-l-3 border-primary">
    {children}
  </div>
);

export function MacosOnSteroids() {
  return (
    <div className="prose prose-sm sm:prose-base lg:prose-lg dark:prose-invert max-w-none">
      <p>
        This is my almanac for setting up a new macOS machine to my workflows.
      </p>

      <div className="my-6 sm:my-8 border-b border-border" />

      <h3 className="text-primary text-xl sm:text-2xl">Initial System Setup</h3>

      <h4 className="text-base sm:text-lg">
        Step 1: Basic macOS Configuration
      </h4>
      <p>
        Before installing any applications, let's configure macOS for optimal
        productivity:
      </p>

      <CommandBox>
        <p>
          <StepNumber number={1} />
          Enable tap to click:
        </p>
        <code className="text-xs sm:text-sm block mt-2 text-primary">
          System Settings → Trackpad → Point & Click → Tap to click
        </code>
      </CommandBox>

      <CommandBox>
        <p>
          <StepNumber number={2} />
          Speed up key repeat rate:
        </p>
        <code className="text-xs sm:text-sm block mt-2 text-primary">
          defaults write -g InitialKeyRepeat -int 15
        </code>
        <code className="text-xs sm:text-sm block mt-1 text-primary">
          defaults write -g KeyRepeat -int 2
        </code>
      </CommandBox>

      <CommandBox>
        <p>
          <StepNumber number={3} />
          Show hidden files in Finder:
        </p>
        <code className="text-xs sm:text-sm block mt-2 text-primary">
          defaults write com.apple.finder AppleShowAllFiles YES
        </code>
        <code className="text-xs sm:text-sm block mt-1 text-primary">
          killall Finder
        </code>
      </CommandBox>

      <CommandBox>
        <p>
          <StepNumber number={4} />
          Disable press-and-hold for accented characters:
        </p>
        <code className="text-xs sm:text-sm block mt-2 text-primary">
          defaults write -g ApplePressAndHoldEnabled -bool false
        </code>
      </CommandBox>

      <CommandBox>
        <p>
          <StepNumber number={5} />
          Show path bar in Finder:
        </p>
        <code className="text-xs sm:text-sm block mt-2 text-primary">
          defaults write com.apple.finder ShowPathbar -bool true
        </code>
      </CommandBox>

      <CommandBox>
        <p>
          <StepNumber number={6} />
          Show status bar with available space in Finder:
        </p>
        <code className="text-xs sm:text-sm block mt-2 text-primary">
          defaults write com.apple.finder ShowStatusBar -bool true
        </code>
      </CommandBox>

      <CommandBox>
        <p>
          <StepNumber number={7} />
          Enable Quit option for Finder:
        </p>
        <code className="text-xs sm:text-sm block mt-2 text-primary">
          defaults write com.apple.Finder QuitMenuItem 1
        </code>
        <code className="text-xs sm:text-sm block mt-1 text-primary">
          killall Finder
        </code>
      </CommandBox>

      <InfoBox>
        <p className="text-sm sm:text-base">
          <strong>What this does:</strong> The path bar shows your current
          folder location at the bottom of Finder windows, while the status bar
          displays available disk space and item counts. Enabling the Quit menu
          item allows you to fully quit Finder (useful when using ForkLift as
          your primary file manager)!
        </p>
      </InfoBox>

      <CommandBox>
        <p>
          <StepNumber number={8} />
          Dock: right edge, small, instant auto-hide, a Quick Note hot corner
          (bottom-right), and nothing pinned but Zen. The Hyper keys below
          launch everything else, so the Dock barely needs to exist:
        </p>
        <pre className="text-xs sm:text-sm bg-background/50 p-2 sm:p-3 rounded overflow-x-auto mt-2">
          {`# Position, size, auto-hide
defaults write com.apple.dock orientation -string right
defaults write com.apple.dock tilesize -int 32
defaults write com.apple.dock autohide -bool true
defaults write com.apple.dock autohide-delay -float 0
defaults write com.apple.dock autohide-time-modifier -float 0.4

# Bottom-right hot corner → Quick Note
defaults write com.apple.dock wvous-br-corner -int 14
defaults write com.apple.dock wvous-br-modifier -int 0

# Dock contents: wipe Apple's defaults, pin only Zen
brew install dockutil
dockutil --remove all --no-restart
dockutil --add /Applications/Zen.app --no-restart

killall Dock`}
        </pre>
      </CommandBox>

      <CommandBox>
        <p>
          <StepNumber number={9} />
          Turn off macOS's built-in window tiling so it doesn't fight
          Rectangle:
        </p>
        <pre className="text-xs sm:text-sm bg-background/50 p-2 sm:p-3 rounded overflow-x-auto mt-2">
          {`defaults write com.apple.WindowManager EnableTilingByEdgeDrag -bool false
defaults write com.apple.WindowManager EnableTopTilingByEdgeDrag -bool false
defaults write com.apple.WindowManager EnableTilingOptionAccelerator -bool false
defaults write com.apple.WindowManager EnableTiledWindowMargins -bool false`}
        </pre>
      </CommandBox>

      <div className="my-6 sm:my-8 border-b border-border" />

      <h3 className="text-primary text-xl sm:text-2xl">
        Wallpapers & Visual Setup
      </h3>

      <h4 className="text-base sm:text-lg">Desktop Wallpapers</h4>
      <p>My collection of desktop wallpapers:</p>

      <GalleryImage
        src="/blog/mac_os_setup/assets/dracula_mac_wallpaper.png"
        alt="Dracula Mac Wallpaper"
        width={1200}
        height={800}
        className="w-full rounded-lg my-3 sm:my-4"
      />
      <GalleryImage
        src="/blog/mac_os_setup/assets/Wallpaper.jpg"
        alt="Main Wallpaper"
        width={1200}
        height={800}
        className="w-full rounded-lg my-3 sm:my-4"
      />
      <GalleryImage
        src="/blog/mac_os_setup/assets/satoru-gojo-suguru-3840x2160-16373.png"
        alt="Gojo Suguru Wallpaper"
        width={1200}
        height={800}
        className="w-full rounded-lg my-3 sm:my-4"
      />

      <h4 className="text-base sm:text-lg">Twitter Banners</h4>
      <p>For your Twitter account banners and social media:</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
        <GalleryImage
          src="/blog/mac_os_setup/assets/GwUsUFvXsAEZf83.jpg"
          alt="Twitter Banner"
          width={800}
          height={600}
          className="w-full rounded-lg"
        />
        <GalleryImage
          src="/blog/mac_os_setup/assets/IMG_1514.jpeg"
          alt="Social Media Banner"
          width={800}
          height={600}
          className="w-full rounded-lg"
        />
        <GalleryImage
          src="/blog/mac_os_setup/assets/IMG_1515.png"
          alt="Alternative Banner"
          width={800}
          height={600}
          className="w-full rounded-lg"
        />
        <GalleryImage
          src="/blog/mac_os_setup/assets/IMG_1680.jpeg"
          alt="Banner Option"
          width={800}
          height={600}
          className="w-full rounded-lg"
        />
        <GalleryImage
          src="/assets/banner_dark.jpg"
          alt="Dark Anime Banner"
          width={800}
          height={600}
          className="w-full rounded-lg sm:col-span-2"
        />
      </div>

      <h4 className="text-base sm:text-lg">Profile Pictures</h4>
      <p>For consistency across all your accounts:</p>

      <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 sm:gap-4 my-4">
        <GalleryImage
          src="/assets/pfp/original_pfp.jpg"
          alt="Original Profile Picture"
          width={400}
          height={400}
          className="w-full rounded-lg"
        />
        <GalleryImage
          src="/assets/pfp/light_pfp.png"
          alt="Light Theme Profile Picture"
          width={400}
          height={400}
          className="w-full rounded-lg"
        />
        <GalleryImage
          src="/assets/pfp/dark_pfp.png"
          alt="Dark Theme Profile Picture"
          width={400}
          height={400}
          className="w-full rounded-lg"
        />
        <GalleryImage
          src="/assets/pfp/silver_surfer.jpg"
          alt="Silver Surfer Profile Picture"
          width={400}
          height={400}
          className="w-full rounded-lg"
        />
        <GalleryImage
          src="/assets/pfp/matrix_pfp.png"
          alt="Matrix Agent Smith Pixel Art Profile Picture"
          width={400}
          height={400}
          className="w-full rounded-lg"
        />
      </div>

      <div className="my-6 sm:my-8 border-b border-border" />

      <h3 className="text-primary text-xl sm:text-2xl">
        Installing Homebrew & Core Applications
      </h3>

      <h4 className="text-base sm:text-lg">Step 1: Install Homebrew</h4>
      <p>
        Homebrew is the <Highlight>essential package manager</Highlight> for
        macOS. It simplifies installing and managing applications.
      </p>

      <CommandBox>
        <p className="mb-2">Run this command in Terminal:</p>
        <code className="text-xs sm:text-sm block text-primary break-all">
          /bin/bash -c "$(curl -fsSL
          https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
        </code>
      </CommandBox>

      <p>After installation, add Homebrew to your PATH:</p>
      <CommandBox>
        <code className="text-xs sm:text-sm block mb-1 text-primary break-all">
          echo 'eval "$(/opt/homebrew/bin/brew shellenv)"' &gt;&gt; ~/.zprofile
        </code>
        <code className="text-xs sm:text-sm block text-primary">
          eval "$(/opt/homebrew/bin/brew shellenv)"
        </code>
      </CommandBox>

      <h4 className="text-base sm:text-lg">
        Step 2: Install Essential Applications
      </h4>
      <p>
        Now let's install all the applications you'll need. I've organized them
        by category with detailed explanations:
      </p>

      <h4 className="text-base sm:text-lg">One-Command Installation</h4>
      <p>
        Install everything at once. Formulae and casks go in two separate
        commands, because a <code className="text-xs">--cask</code> anywhere
        in a single <code className="text-xs">brew install</code> makes Homebrew
        treat every name as a cask:
      </p>

      <CommandBox>
        <p className="text-xs sm:text-sm mb-2">CLI tools:</p>
        <code className="text-xs sm:text-sm block text-primary break-all">
          brew install node@24 python tmux git uv bun zoxide atuin yt-dlp
          gallery-dl fzf eza gh duti dockutil \<br />
          ffmpeg exiftool pandoc pngquant gifsicle poppler ghostscript
          terminal-notifier watch \<br />
          awscli azure-cli flyctl mongodb-atlas-cli sqlcmd
          anomalyco/tap/opencode
        </code>
      </CommandBox>

      <CommandBox>
        <p className="text-xs sm:text-sm mb-2">Apps:</p>
        <code className="text-xs sm:text-sm block text-primary break-all">
          brew install --cask zen-browser arc google-chrome cmux ghostty
          visual-studio-code cursor \<br />
          claude-code@latest codex chatgpt orbstack mongodb-compass
          ngrok \<br />
          notion notion-calendar obsidian bettertouchtool superkey appcleaner
          flux-app rectangle bartender \<br />
          alcove cotypist voiceink iloader forklift libreoffice calibre meru
          \<br />
          discord whatsapp slack telegram zoom cleanshot screen-studio figma
          iina soundsource finetune \<br />
          protonvpn little-snitch mole-app font-jetbrains-mono-nerd-font \
          <br />
          steipete/tap/codexbar steipete/tap/trimmy
          abue-ammar/tinycast/tinycast kamillobinski/thock/thock
        </code>
      </CommandBox>

      <p className="text-xs sm:text-sm">
        Not in the one-liners on purpose: DaVinci Resolve (no cask, see
        below), Pear Desktop (pinned version, see below), Mac App Store apps,
        and the alternatives I list next to my picks.
      </p>

      <h5 className="text-primary text-sm sm:text-base">
        Core Command Line Tools
      </h5>

      <CommandBox>
        <code className="text-xs sm:text-sm block mb-2 text-primary">
          brew install node@24 && brew link --force node@24
        </code>
        <p className="text-xs sm:text-sm">
          <Link
            href="https://nodejs.org/"
            target="_blank"
            className="text-primary hover:text-primary/80 underline"
          >
            Node.js
          </Link>
          {" - JavaScript runtime, pinned to the 24 LTS line. node@24 is keg-only, so link it to put node/npm on your PATH"}
        </p>
      </CommandBox>

      <CommandBox>
        <code className="text-xs sm:text-sm block mb-2 text-primary">
          brew install python
        </code>
        <p className="text-xs sm:text-sm">
          <Link
            href="https://www.python.org/"
            target="_blank"
            className="text-primary hover:text-primary/80 underline"
          >
            Python
          </Link>
          {" - Essential programming language for scripting and development"}
        </p>
      </CommandBox>

      <CommandBox>
        <code className="text-xs sm:text-sm block mb-2 text-primary">
          brew install tmux
        </code>
        <p className="text-xs sm:text-sm">
          <Link
            href="https://github.com/tmux/tmux"
            target="_blank"
            className="text-primary hover:text-primary/80 underline"
          >
            tmux
          </Link>
          {" - Terminal multiplexer for managing multiple terminal sessions"}
        </p>
      </CommandBox>

      <CommandBox>
        <code className="text-xs sm:text-sm block mb-2 text-primary">
          brew install git
        </code>
        <p className="text-xs sm:text-sm">
          <Link
            href="https://git-scm.com/"
            target="_blank"
            className="text-primary hover:text-primary/80 underline"
          >
            Git
          </Link>
          {
            " - Version control system (brew version is more up-to-date than macOS default)"
          }
        </p>
      </CommandBox>

      <CommandBox>
        <code className="text-xs sm:text-sm block mb-2 text-primary">
          brew install uv
        </code>
        <p className="text-xs sm:text-sm">
          <Link
            href="https://docs.astral.sh/uv/"
            target="_blank"
            className="text-primary hover:text-primary/80 underline"
          >
            uv
          </Link>
          {
            " - Extremely fast Python package and project manager, written in Rust"
          }
        </p>
      </CommandBox>

      <CommandBox>
        <code className="text-xs sm:text-sm block mb-2 text-primary">
          brew install zoxide
        </code>
        <p className="text-xs sm:text-sm">
          <Link
            href="https://github.com/ajeetdsouza/zoxide"
            target="_blank"
            className="text-primary hover:text-primary/80 underline"
          >
            zoxide
          </Link>
          {" - Smarter cd command that remembers your most used directories"}
        </p>
      </CommandBox>

      <CommandBox>
        <code className="text-xs sm:text-sm block mb-2 text-primary">
          brew install atuin
        </code>
        <p className="text-xs sm:text-sm">
          <Link
            href="https://docs.atuin.sh/"
            target="_blank"
            className="text-primary hover:text-primary/80 underline"
          >
            Atuin
          </Link>
          {" - Magical shell history with sync across machines"}
        </p>
      </CommandBox>

      <CommandBox>
        <code className="text-xs sm:text-sm block mb-2 text-primary">
          brew install yt-dlp
        </code>
        <p className="text-xs sm:text-sm">
          <Link
            href="https://github.com/yt-dlp/yt-dlp"
            target="_blank"
            className="text-primary hover:text-primary/80 underline"
          >
            yt-dlp
          </Link>
          {" - Download videos/images from YouTube and 1000+ other sites"}
        </p>
      </CommandBox>

      <CommandBox>
        <code className="text-xs sm:text-sm block mb-2 text-primary">
          brew install gallery-dl
        </code>
        <p className="text-xs sm:text-sm">
          <Link
            href="https://github.com/mikf/gallery-dl"
            target="_blank"
            className="text-primary hover:text-primary/80 underline"
          >
            gallery-dl
          </Link>
          {
            " - Download image galleries and collections from Instagram, Twitter/X, Reddit, Pinterest, and hundreds of other sites"
          }
        </p>
      </CommandBox>

      <CommandBox>
        <code className="text-xs sm:text-sm block mb-2 text-primary">
          brew install fzf
        </code>
        <p className="text-xs sm:text-sm">
          <Link
            href="https://github.com/junegunn/fzf"
            target="_blank"
            className="text-primary hover:text-primary/80 underline"
          >
            fzf
          </Link>
          {" - Command-line fuzzy finder for files, history, and processes"}
        </p>
      </CommandBox>

      <CommandBox>
        <code className="text-xs sm:text-sm block mb-2 text-primary">
          brew install eza
        </code>
        <p className="text-xs sm:text-sm">
          <Link
            href="https://github.com/eza-community/eza"
            target="_blank"
            className="text-primary hover:text-primary/80 underline"
          >
            eza
          </Link>
          {" - Modern, maintained replacement for ls with colors and icons"}
        </p>
      </CommandBox>

      <CommandBox>
        <code className="text-xs sm:text-sm block mb-2 text-primary">
          brew install gh
        </code>
        <p className="text-xs sm:text-sm">
          <Link
            href="https://cli.github.com/"
            target="_blank"
            className="text-primary hover:text-primary/80 underline"
          >
            GitHub CLI
          </Link>
          {" - PRs, issues, releases, and auth from the terminal. Coding agents lean on it heavily"}
        </p>
      </CommandBox>

      <CommandBox>
        <code className="text-xs sm:text-sm block mb-2 text-primary break-all">
          brew install ffmpeg exiftool pandoc pngquant gifsicle poppler
          ghostscript
        </code>
        <p className="text-xs sm:text-sm mb-1">Media & document toolbelt:</p>
        <ul className="text-xs sm:text-sm list-disc pl-5 space-y-1">
          <li>
            <strong>ffmpeg</strong> - convert, trim, and transcode any
            audio/video
          </li>
          <li>
            <strong>exiftool</strong> - read, write, and strip photo/video
            metadata
          </li>
          <li>
            <strong>pandoc</strong> - convert between Markdown, DOCX, HTML, PDF,
            and friends
          </li>
          <li>
            <strong>pngquant</strong> / <strong>gifsicle</strong> - shrink PNGs
            and GIFs
          </li>
          <li>
            <strong>poppler</strong> / <strong>ghostscript</strong> - PDF text
            extraction, rendering, and compression
          </li>
        </ul>
      </CommandBox>

      <CommandBox>
        <code className="text-xs sm:text-sm block mb-2 text-primary break-all">
          brew install awscli azure-cli flyctl mongodb-atlas-cli sqlcmd
        </code>
        <p className="text-xs sm:text-sm">
          Cloud & database CLIs: AWS, Azure,{" "}
          <Link
            href="https://fly.io/docs/flyctl/"
            target="_blank"
            className="text-primary hover:text-primary/80 underline"
          >
            Fly.io
          </Link>
          , MongoDB Atlas, and SQL Server
        </p>
      </CommandBox>

      <CommandBox>
        <code className="text-xs sm:text-sm block mb-2 text-primary">
          brew install terminal-notifier watch
        </code>
        <p className="text-xs sm:text-sm">
          <Link
            href="https://github.com/julienXX/terminal-notifier"
            target="_blank"
            className="text-primary hover:text-primary/80 underline"
          >
            terminal-notifier
          </Link>
          {" - Native macOS notifications from the shell (powers my Claude Code \"task complete\" hook, see below). watch - rerun a command every N seconds"}
        </p>
      </CommandBox>

      <h5 className="text-primary text-sm sm:text-base">Browsers</h5>

      <CommandBox>
        <code className="text-xs sm:text-sm block mb-2 text-primary">
          brew install --cask zen-browser
        </code>
        <p className="text-xs sm:text-sm">
          <Link
            href="https://zen-browser.app/"
            target="_blank"
            className="text-primary hover:text-primary/80 underline"
          >
            Zen Browser
          </Link>
          {" - Privacy-focused browser with excellent customization. My default browser"}
        </p>
      </CommandBox>

      <CommandBox>
        <code className="text-xs sm:text-sm block mb-2 text-primary">
          brew install --cask arc
        </code>
        <p className="text-xs sm:text-sm">
          <Link
            href="https://arc.net/"
            target="_blank"
            className="text-primary hover:text-primary/80 underline"
          >
            Arc
          </Link>
          {" - Chromium browser with spaces and a vertical sidebar. My second browser, on Hyper + Q"}
        </p>
      </CommandBox>

      <CommandBox>
        <code className="text-xs sm:text-sm block mb-2 text-primary">
          brew install --cask google-chrome
        </code>
        <p className="text-xs sm:text-sm">
          <Link
            href="https://www.google.com/chrome/"
            target="_blank"
            className="text-primary hover:text-primary/80 underline"
          >
            Chrome
          </Link>
          {" - Primary browser with excellent DevTools"}
        </p>
      </CommandBox>

      <h5 className="text-primary text-sm sm:text-base">Development Tools</h5>

      <CommandBox>
        <code className="text-xs sm:text-sm block mb-2 text-primary">
          brew install --cask cursor
        </code>
        <p className="text-xs sm:text-sm">
          <Link
            href="https://cursor.sh/"
            target="_blank"
            className="text-primary hover:text-primary/80 underline"
          >
            Cursor
          </Link>
          {
            " - AI-powered code editor built on VSCode, perfect for AI-assisted development"
          }
        </p>
      </CommandBox>

      <CommandBox>
        <code className="text-xs sm:text-sm block mb-2 text-primary">
          brew install --cask visual-studio-code
        </code>
        <p className="text-xs sm:text-sm">
          <Link
            href="https://code.visualstudio.com/"
            target="_blank"
            className="text-primary hover:text-primary/80 underline"
          >
            VS Code
          </Link>
          {" - My main editor (Hyper + A), with the Claude Code extension docked in the panel"}
        </p>
      </CommandBox>

      <CommandBox>
        <code className="text-xs sm:text-sm block mb-2 text-primary">
          brew install --cask claude-code@latest
        </code>
        <p className="text-xs sm:text-sm">
          <Link
            href="https://claude.com/product/claude-code"
            target="_blank"
            className="text-primary hover:text-primary/80 underline"
          >
            Claude Code
          </Link>
          {" - Anthropic's terminal coding agent. The @latest cask tracks the fast release channel; plain claude-code is the stable channel. Skills, plugins, and config are covered further down"}
        </p>
      </CommandBox>

      <CommandBox>
        <code className="text-xs sm:text-sm block mb-2 text-primary">
          brew install --cask codex
        </code>
        <p className="text-xs sm:text-sm">
          <Link
            href="https://github.com/openai/codex"
            target="_blank"
            className="text-primary hover:text-primary/80 underline"
          >
            Codex CLI
          </Link>
          {" - OpenAI's terminal coding agent. The desktop Codex experience lives inside the ChatGPT app (below)"}
        </p>
      </CommandBox>

      <CommandBox>
        <code className="text-xs sm:text-sm block mb-2 text-primary">
          brew install anomalyco/tap/opencode
        </code>
        <p className="text-xs sm:text-sm">
          <Link
            href="https://github.com/anomalyco/opencode"
            target="_blank"
            className="text-primary hover:text-primary/80 underline"
          >
            opencode
          </Link>
          {" - Open-source, provider-agnostic terminal coding agent"}
        </p>
      </CommandBox>

      <CommandBox>
        <code className="text-xs sm:text-sm block mb-2 text-primary">
          brew install --cask orbstack
        </code>
        <p className="text-xs sm:text-sm">
          <Link
            href="https://orbstack.dev/"
            target="_blank"
            className="text-primary hover:text-primary/80 underline"
          >
            OrbStack
          </Link>
          {" - Drop-in Docker Desktop replacement plus lightweight Linux VMs. Faster, lighter on battery, and the docker CLI just works"}
        </p>
      </CommandBox>

      <CommandBox>
        <code className="text-xs sm:text-sm block mb-2 text-primary">
          brew install --cask mongodb-compass
        </code>
        <p className="text-xs sm:text-sm">
          <Link
            href="https://www.mongodb.com/products/compass"
            target="_blank"
            className="text-primary hover:text-primary/80 underline"
          >
            MongoDB Compass
          </Link>
          {" - GUI for exploring and querying MongoDB"}
        </p>
      </CommandBox>

      <CommandBox>
        <code className="text-xs sm:text-sm block mb-2 text-primary">
          brew install --cask ngrok
        </code>
        <p className="text-xs sm:text-sm">
          <Link
            href="https://ngrok.com/"
            target="_blank"
            className="text-primary hover:text-primary/80 underline"
          >
            ngrok
          </Link>
          {" - Expose a localhost port on a public URL for webhooks and demos"}
        </p>
      </CommandBox>

      <CommandBox>
        <code className="text-xs sm:text-sm block mb-2 text-primary">
          brew install --cask ghostty
        </code>
        <p className="text-xs sm:text-sm">
          <Link
            href="https://ghostty.org/"
            target="_blank"
            className="text-primary hover:text-primary/80 underline"
          >
            Ghostty
          </Link>
          {" - Fast, feature-rich terminal emulator"}
        </p>
      </CommandBox>

      <CommandBox>
        <code className="text-xs sm:text-sm block mb-2 text-primary">
          brew install --cask cmux
        </code>
        <p className="text-xs sm:text-sm">
          <Link
            href="https://www.cmux.dev/"
            target="_blank"
            className="text-primary hover:text-primary/80 underline"
          >
            cmux
          </Link>
          {" - Ghostty-based terminal built for running coding agents: vertical tabs and per-agent notifications. My daily terminal (Hyper + E)"}
        </p>
      </CommandBox>

      <CommandBox>
        <code className="text-xs sm:text-sm block mb-2 text-primary">
          brew install --cask steipete/tap/codexbar
        </code>
        <p className="text-xs sm:text-sm">
          <Link
            href="https://codexbar.app/"
            target="_blank"
            className="text-primary hover:text-primary/80 underline"
          >
            CodexBar
          </Link>
          {" - Free, open-source menu bar app that keeps every AI coding usage window, credit balance, and reset timer in view across 40+ providers (Codex, Claude Code, Cursor, and more). No login required"}
        </p>
      </CommandBox>

      <h5 className="text-primary text-sm sm:text-base">
        Productivity & System Tools
      </h5>

      <CommandBox>
        <code className="text-xs sm:text-sm block mb-2 text-primary">
          brew install --cask notion
        </code>
        <p className="text-xs sm:text-sm">
          <Link
            href="https://www.notion.so/"
            target="_blank"
            className="text-primary hover:text-primary/80 underline"
          >
            Notion
          </Link>
          {
            " - All-in-one workspace for notes, documents, and project management"
          }
        </p>
      </CommandBox>

      <CommandBox>
        <code className="text-xs sm:text-sm block mb-2 text-primary">
          brew install --cask obsidian
        </code>
        <p className="text-xs sm:text-sm">
          <Link
            href="https://obsidian.md/"
            target="_blank"
            className="text-primary hover:text-primary/80 underline"
          >
            Obsidian
          </Link>
          {" - Local-first Markdown knowledge base. Plain files on disk, so agents can read and write my notes too (Hyper + D)"}
        </p>
      </CommandBox>

      <CommandBox>
        <code className="text-xs sm:text-sm block mb-2 text-primary">
          brew install --cask abue-ammar/tinycast/tinycast
        </code>
        <p className="text-xs sm:text-sm">
          <Link
            href="https://github.com/abue-ammar/tinycast"
            target="_blank"
            className="text-primary hover:text-primary/80 underline"
          >
            Tinycast
          </Link>
          {" - Tiny, fully native launcher with hotkeys and clipboard history. My Raycast replacement"}
        </p>
      </CommandBox>

      <CommandBox>
        <code className="text-xs sm:text-sm block mb-2 text-primary">
          brew install --cask bettertouchtool
        </code>
        <p className="text-xs sm:text-sm">
          <Link
            href="https://folivora.ai/"
            target="_blank"
            className="text-primary hover:text-primary/80 underline"
          >
            BetterTouchTool
          </Link>
          {" - Customize trackpad gestures, keyboard shortcuts, and Touch Bar"}
        </p>
      </CommandBox>

      <CommandBox>
        <code className="text-xs sm:text-sm block mb-2 text-primary">
          brew install --cask superkey
        </code>
        <p className="text-xs sm:text-sm">
          <Link
            href="https://superkey.app/"
            target="_blank"
            className="text-primary hover:text-primary/80 underline"
          >
            SuperKey
          </Link>
          {" - Transform your caps lock into a powerful productivity key"}
        </p>
      </CommandBox>

      <CommandBox>
        <code className="text-xs sm:text-sm block mb-2 text-primary">
          brew install --cask appcleaner
        </code>
        <p className="text-xs sm:text-sm">
          <Link
            href="https://freemacsoft.net/appcleaner/"
            target="_blank"
            className="text-primary hover:text-primary/80 underline"
          >
            AppCleaner
          </Link>
          {" - Thoroughly uninstall applications and their associated files"}
        </p>
      </CommandBox>

      <CommandBox>
        <code className="text-xs sm:text-sm block mb-2 text-primary">
          brew install --cask flux-app
        </code>
        <p className="text-xs sm:text-sm">
          <Link
            href="https://justgetflux.com/"
            target="_blank"
            className="text-primary hover:text-primary/80 underline"
          >
            f.lux
          </Link>
          {" - Adjust screen color temperature based on time of day"}
        </p>
      </CommandBox>

      <CommandBox>
        <code className="text-xs sm:text-sm block mb-2 text-primary">
          brew install --cask rectangle
        </code>
        <p className="text-xs sm:text-sm">
          <Link
            href="https://rectangleapp.com/"
            target="_blank"
            className="text-primary hover:text-primary/80 underline"
          >
            Rectangle
          </Link>
          {" - Window management made simple with keyboard shortcuts"}
        </p>
      </CommandBox>

      <CommandBox>
        <code className="text-xs sm:text-sm block mb-2 text-primary">
          brew install --cask bartender
        </code>
        <p className="text-xs sm:text-sm">
          <Link
            href="https://www.macbartender.com/"
            target="_blank"
            className="text-primary hover:text-primary/80 underline"
          >
            Bartender
          </Link>
          {" - My go-to menu bar manager. Hide, reorder, and reveal menu bar items, with triggers, hotkeys, and per-item show/hide rules. Paid, the most polished option. Heads-up: the cask now installs Bartender 7, so check your license covers it"}
        </p>
      </CommandBox>

      <CommandBox>
        <code className="text-xs sm:text-sm block mb-2 text-primary">
          brew install --cask jordanbaird-ice
        </code>
        <p className="text-xs sm:text-sm">
          <Link
            href="https://github.com/jordanbaird/Ice"
            target="_blank"
            className="text-primary hover:text-primary/80 underline"
          >
            Ice
          </Link>
          {" - Free, open-source alternative to Bartender. Hide, organize, and reorder menu bar items, with an Ice Bar that tucks overflow items below the notch"}
        </p>
      </CommandBox>

      <CommandBox>
        <p className="text-xs sm:text-sm">
          <Link
            href="https://apps.apple.com/us/app/amphetamine/id937984704"
            target="_blank"
            className="text-primary hover:text-primary/80 underline"
          >
            Amphetamine
          </Link>
          {" - Keep your Mac awake. Free from the Mac App Store with advanced triggers and session control"}
        </p>
      </CommandBox>

      <CommandBox>
        <p className="text-xs sm:text-sm">
          <Link
            href="https://apps.apple.com/us/app/klack/id6446206067"
            target="_blank"
            className="text-primary hover:text-primary/80 underline"
          >
            Klack
          </Link>
          {" - Satisfying mechanical keyboard sounds for every keystroke. Available on the Mac App Store"}
        </p>
      </CommandBox>

      <CommandBox>
        <code className="text-xs sm:text-sm block mb-2 text-primary">
          brew install --cask kamillobinski/thock/thock
        </code>
        <p className="text-xs sm:text-sm">
          <Link
            href="https://github.com/kamillobinski/thock"
            target="_blank"
            className="text-primary hover:text-primary/80 underline"
          >
            Thock
          </Link>
          {" - Klack alternative. Free, open-source keyboard sounds, installable with brew"}
        </p>
      </CommandBox>

      <CommandBox>
        <code className="text-xs sm:text-sm block mb-2 text-primary">
          brew install --cask steipete/tap/trimmy
        </code>
        <p className="text-xs sm:text-sm">
          <Link
            href="https://trimmy.app/"
            target="_blank"
            className="text-primary hover:text-primary/80 underline"
          >
            Trimmy
          </Link>
          {" - Watches your clipboard and folds multi-line shell snippets (pipes, redirects, line continuations) into a single pasteable line. No dock icon, no network, no daemon"}
        </p>
      </CommandBox>

      <CommandBox>
        <code className="text-xs sm:text-sm block mb-2 text-primary">
          brew install --cask cotypist
        </code>
        <p className="text-xs sm:text-sm">
          <Link
            href="https://cotypist.app/"
            target="_blank"
            className="text-primary hover:text-primary/80 underline"
          >
            Cotypist
          </Link>
          {" - On-device AI that predicts your next words in every Mac app. Press Tab to accept. Open source — make your own version"}
        </p>
      </CommandBox>

      <CommandBox>
        <p className="text-xs sm:text-sm">
          <Link
            href="https://www.cotabby.app/"
            target="_blank"
            className="text-primary hover:text-primary/80 underline"
          >
            Cotabby
          </Link>
          {" - Cotypist alternative. Free, open-source, on-device AI autocomplete in every Mac app, using Apple Intelligence or local GGUF models. Inline ghost text, Tab to accept"}
        </p>
      </CommandBox>

      <CommandBox>
        <code className="text-xs sm:text-sm block mb-2 text-primary">
          brew install --cask voiceink
        </code>
        <p className="text-xs sm:text-sm">
          <Link
            href="https://tryvoiceink.com/"
            target="_blank"
            className="text-primary hover:text-primary/80 underline"
          >
            VoiceInk
          </Link>
          {" - Voice-to-text dictation into any app, transcribed on-device. Much faster than typing long prompts to agents"}
        </p>
      </CommandBox>

      <CommandBox>
        <code className="text-xs sm:text-sm block mb-2 text-primary">
          brew install --cask alcove
        </code>
        <p className="text-xs sm:text-sm">
          <Link
            href="https://tryalcove.com/"
            target="_blank"
            className="text-primary hover:text-primary/80 underline"
          >
            Alcove
          </Link>
          {" - Turns the notch into a Dynamic Island — music controls, notifications, and widgets in the dead space. Lightweight, one-time purchase"}
        </p>
      </CommandBox>

      <CommandBox>
        <code className="text-xs sm:text-sm block mb-2 text-primary">
          brew install --cask iloader
        </code>
        <p className="text-xs sm:text-sm">
          <Link
            href="https://iloader.app/"
            target="_blank"
            className="text-primary hover:text-primary/80 underline"
          >
            iloader
          </Link>
          {" - iOS sideloading companion for getting apps onto your iPhone from the Mac"}
        </p>
      </CommandBox>

      <h5 className="text-primary text-sm sm:text-base">File Management</h5>

      <CommandBox>
        <code className="text-xs sm:text-sm block mb-2 text-primary">
          brew install --cask forklift
        </code>
        <p className="text-xs sm:text-sm">
          <Link
            href="https://binarynights.com/"
            target="_blank"
            className="text-primary hover:text-primary/80 underline"
          >
            ForkLift
          </Link>
          {" - Advanced file manager and FTP client"}
        </p>
      </CommandBox>

      <h5 className="text-primary text-sm sm:text-base">Office & Documents</h5>

      <CommandBox>
        <code className="text-xs sm:text-sm block mb-2 text-primary">
          brew install --cask libreoffice
        </code>
        <p className="text-xs sm:text-sm">
          <Link
            href="https://www.libreoffice.org/"
            target="_blank"
            className="text-primary hover:text-primary/80 underline"
          >
            LibreOffice
          </Link>
          {" - Free and powerful office suite"}
        </p>
      </CommandBox>

      <CommandBox>
        <code className="text-xs sm:text-sm block mb-2 text-primary">
          brew install --cask notion-calendar
        </code>
        <p className="text-xs sm:text-sm">
          <Link
            href="https://www.notion.com/product/calendar"
            target="_blank"
            className="text-primary hover:text-primary/80 underline"
          >
            Notion Calendar
          </Link>
          {" - Calendar for scheduling, linked to Notion docs (Hyper + C)"}
        </p>
      </CommandBox>

      <CommandBox>
        <code className="text-xs sm:text-sm block mb-2 text-primary">
          brew install --cask meru
        </code>
        <p className="text-xs sm:text-sm">
          <Link
            href="https://meru.so/"
            target="_blank"
            className="text-primary hover:text-primary/80 underline"
          >
            Meru
          </Link>
          {
            " - Gmail as a proper desktop app: native notifications, unread badge, multiple accounts. My default mail app (Hyper + X)"
          }
        </p>
      </CommandBox>

      <CommandBox>
        <p className="text-xs sm:text-sm">
          For PDF editing, download{" "}
          <Link
            href="https://www.pdfgear.com/"
            target="_blank"
            className="text-primary hover:text-primary/80 underline"
          >
            PDF Gear
          </Link>
          {" - excellent free PDF editor with annotation tools (also on the Mac App Store). My default PDF app."}
        </p>
      </CommandBox>

      <CommandBox>
        <code className="text-xs sm:text-sm block mb-2 text-primary">
          brew install --cask calibre
        </code>
        <p className="text-xs sm:text-sm">
          <Link
            href="https://calibre-ebook.com/"
            target="_blank"
            className="text-primary hover:text-primary/80 underline"
          >
            calibre
          </Link>
          {" - Ebook library manager and converter. How books get onto my Kobo"}
        </p>
      </CommandBox>

      <h5 className="text-primary text-sm sm:text-base">Communication</h5>

      <CommandBox>
        <code className="text-xs sm:text-sm block mb-2 text-primary">
          brew install --cask discord
        </code>
        <p className="text-xs sm:text-sm">
          <Link
            href="https://discord.com/"
            target="_blank"
            className="text-primary hover:text-primary/80 underline"
          >
            Discord
          </Link>
          {" - Community and team communication"}
        </p>
      </CommandBox>

      <CommandBox>
        <code className="text-xs sm:text-sm block mb-2 text-primary">
          brew install --cask whatsapp
        </code>
        <p className="text-xs sm:text-sm">
          <Link
            href="https://www.whatsapp.com/"
            target="_blank"
            className="text-primary hover:text-primary/80 underline"
          >
            WhatsApp
          </Link>
          {" - Popular messaging platform"}
        </p>
      </CommandBox>

      <CommandBox>
        <code className="text-xs sm:text-sm block mb-2 text-primary">
          brew install --cask slack
        </code>
        <p className="text-xs sm:text-sm">
          <Link
            href="https://slack.com/"
            target="_blank"
            className="text-primary hover:text-primary/80 underline"
          >
            Slack
          </Link>
          {" - Work and team communication"}
        </p>
      </CommandBox>

      <CommandBox>
        <code className="text-xs sm:text-sm block mb-2 text-primary">
          brew install --cask telegram
        </code>
        <p className="text-xs sm:text-sm">
          <Link
            href="https://macos.telegram.org/"
            target="_blank"
            className="text-primary hover:text-primary/80 underline"
          >
            Telegram
          </Link>
          {" - Fast messaging with a native macOS client"}
        </p>
      </CommandBox>

      <CommandBox>
        <code className="text-xs sm:text-sm block mb-2 text-primary">
          brew install --cask zoom
        </code>
        <p className="text-xs sm:text-sm">
          <Link
            href="https://www.zoom.us/"
            target="_blank"
            className="text-primary hover:text-primary/80 underline"
          >
            Zoom
          </Link>
          {" - Video calls"}
        </p>
      </CommandBox>

      <h5 className="text-primary text-sm sm:text-base">
        Creative & Media Tools
      </h5>

      <CommandBox>
        <code className="text-xs sm:text-sm block mb-2 text-primary">
          brew install --cask cleanshot
        </code>
        <p className="text-xs sm:text-sm">
          <Link
            href="https://cleanshot.com/"
            target="_blank"
            className="text-primary hover:text-primary/80 underline"
          >
            CleanShot X
          </Link>
          {" - Advanced screenshot and screen recording tool"}
        </p>
      </CommandBox>

      <CommandBox>
        <p className="text-xs sm:text-sm">
          <Link
            href="https://pixelsnap.com/"
            target="_blank"
            className="text-primary hover:text-primary/80 underline"
          >
            PixelSnap 2
          </Link>
          {" - Pixel-perfect on-screen measurement tool with edge detection. Measure distances, sizes, and grab colors anywhere on screen. Integrates with CleanShot for design and dev work"}
        </p>
      </CommandBox>

      <CommandBox>
        <code className="text-xs sm:text-sm block mb-2 text-primary">
          brew install --cask screen-studio
        </code>
        <p className="text-xs sm:text-sm">
          <Link
            href="https://www.screen.studio/"
            target="_blank"
            className="text-primary hover:text-primary/80 underline"
          >
            Screen Studio
          </Link>
          {" - Professional screen recording with beautiful animations"}
        </p>
      </CommandBox>

      <CommandBox>
        <p className="text-xs sm:text-sm">
          <Link
            href="https://www.blackmagicdesign.com/products/davinciresolve"
            target="_blank"
            className="text-primary hover:text-primary/80 underline"
          >
            DaVinci Resolve
          </Link>
          {" - Professional video editing and color grading. The Homebrew cask is gone, so download the installer from Blackmagic directly"}
        </p>
      </CommandBox>

      <CommandBox>
        <code className="text-xs sm:text-sm block mb-2 text-primary">
          brew install --cask figma
        </code>
        <p className="text-xs sm:text-sm">
          <Link
            href="https://www.figma.com/"
            target="_blank"
            className="text-primary hover:text-primary/80 underline"
          >
            Figma
          </Link>
          {" - Collaborative design tool for UI/UX"}
        </p>
      </CommandBox>

      <h5 className="text-primary text-sm sm:text-base">Media Players</h5>

      <CommandBox>
        <code className="text-xs sm:text-sm block mb-2 text-primary">
          brew install --cask iina
        </code>
        <p className="text-xs sm:text-sm">
          <Link
            href="https://iina.io/"
            target="_blank"
            className="text-primary hover:text-primary/80 underline"
          >
            IINA
          </Link>
          {" - Modern media player designed specifically for macOS. My default for all audio and video (setup below)"}
        </p>
      </CommandBox>

      <CommandBox>
        <code className="text-xs sm:text-sm block mb-2 text-primary">
          brew tap pear-devs/pear && brew install --cask pear-desktop
        </code>
        <p className="text-xs sm:text-sm">
          <Link
            href="https://github.com/pear-devs/pear-desktop"
            target="_blank"
            className="text-primary hover:text-primary/80 underline"
          >
            Pear Desktop
          </Link>
          {
            " - Unofficial YouTube Music desktop app (formerly th-ch/youtube-music) with ad-block, plugins, and a proper native window. Installs as YouTube Music.app"
          }
        </p>
      </CommandBox>

      <InfoBox>
        <p className="text-xs sm:text-sm mb-2">
          <Highlight>I'm pinned to 3.11.0.</Highlight> 3.12.0 was a
          regression for my setup, so the brew cask (which tracks{" "}
          <code className="text-xs">latest</code>) is not the way to restore
          it. Pull the exact DMG from GitHub releases instead:
        </p>
        <pre className="text-xs sm:text-sm bg-background/50 p-2 sm:p-3 rounded overflow-x-auto">
          {`cd ~/Downloads
curl -LO https://github.com/pear-devs/pear-desktop/releases/download/v3.11.0/YouTube-Music-3.11.0-arm64.dmg
MOUNT=$(hdiutil attach -nobrowse YouTube-Music-3.11.0-arm64.dmg | grep -o '/Volumes/.*')
rm -rf "/Applications/YouTube Music.app"
cp -R "$MOUNT/YouTube Music.app" /Applications/
hdiutil detach "$MOUNT"
defaults read "/Applications/YouTube Music.app/Contents/Info.plist" CFBundleShortVersionString   # → 3.11.0`}
        </pre>
        <p className="text-xs sm:text-sm mt-2">
          Settings and plugins live in{" "}
          <code className="text-xs">~/Library/Application Support/YouTube Music</code>{" "}
          and survive a swap of the .app. Back that folder up if you care about
          your config.
        </p>
        <p className="text-xs sm:text-sm mt-2">
          <Highlight>Keeping it pinned:</Highlight> plain{" "}
          <code className="text-xs">brew upgrade</code> skips this cask
          (auto_updates), so the daily routine is safe. Never run{" "}
          <code className="text-xs">brew upgrade --greedy</code> or{" "}
          <code className="text-xs">brew reinstall --cask pear-desktop</code>{" "}
          — both drag in latest. Inside the app, keep auto-update off (Options
          menu, or set <code className="text-xs">"autoUpdates": false</code>{" "}
          under <code className="text-xs">options</code> in config.json) and
          decline the update prompt if it ever shows.
        </p>
      </InfoBox>

      <h5 className="text-primary text-sm sm:text-base">Audio Utilities</h5>

      <CommandBox>
        <code className="text-xs sm:text-sm block mb-2 text-primary">
          brew install --cask soundsource
        </code>
        <p className="text-xs sm:text-sm">
          <Link
            href="https://rogueamoeba.com/soundsource/"
            target="_blank"
            className="text-primary hover:text-primary/80 underline"
          >
            SoundSource
          </Link>
          {" - Advanced per-app volume control, audio routing, and system-wide EQ"}
        </p>
      </CommandBox>

      <CommandBox>
        <code className="text-xs sm:text-sm block mb-2 text-primary">
          brew install --cask finetune
        </code>
        <p className="text-xs sm:text-sm">
          <Link
            href="https://github.com/ronitsingh10/FineTune"
            target="_blank"
            className="text-primary hover:text-primary/80 underline"
          >
            FineTune
          </Link>
          {" - Free, open-source SoundSource alternative. Per-app volume control and audio routing in the menu bar"}
        </p>
      </CommandBox>

      <h5 className="text-primary text-sm sm:text-base">Security & Privacy</h5>

      <CommandBox>
        <code className="text-xs sm:text-sm block mb-2 text-primary">
          brew install --cask protonvpn
        </code>
        <p className="text-xs sm:text-sm">
          <Link
            href="https://protonvpn.com/"
            target="_blank"
            className="text-primary hover:text-primary/80 underline"
          >
            ProtonVPN
          </Link>
          {" - Secure VPN service with strong privacy focus"}
        </p>
      </CommandBox>

      <CommandBox>
        <code className="text-xs sm:text-sm block mb-2 text-primary">
          brew install --cask little-snitch
        </code>
        <p className="text-xs sm:text-sm">
          <Link
            href="https://www.obdev.at/products/littlesnitch/index.html"
            target="_blank"
            className="text-primary hover:text-primary/80 underline"
          >
            Little Snitch
          </Link>
          {" - Outbound firewall. See and block every connection every app tries to make"}
        </p>
      </CommandBox>

      <CommandBox>
        <code className="text-xs sm:text-sm block mb-2 text-primary">
          brew install --cask chatgpt
        </code>
        <p className="text-xs sm:text-sm">
          <Link
            href="https://openai.com/index/chatgpt-for-your-most-ambitious-work/"
            target="_blank"
            className="text-primary hover:text-primary/80 underline"
          >
            ChatGPT
          </Link>
          {
            " - Official OpenAI desktop app. As of July 2026, the standalone Codex app has merged into ChatGPT: one app with Chat, Work, and Codex modes. No separate Codex desktop install — update ChatGPT (or your old Codex app) and switch to the Codex view for repos, diffs, PRs, and agent coding. You can set Codex as the default view / app icon if you live in the coding agent"
          }
        </p>
      </CommandBox>

      <div className="my-6 sm:my-8 border-b border-border" />

      <h3 className="text-primary text-xl sm:text-2xl">
        Terminal Setup with Oh My Zsh
      </h3>

      <h4 className="text-base sm:text-lg">Step 1: Install Oh My Zsh</h4>
      <p>
        Oh My Zsh is a framework for managing your Zsh configuration with{" "}
        <Highlight>tons of helpful features</Highlight>.
      </p>

      <CommandBox>
        <code className="text-xs sm:text-sm block text-primary break-all">
          sh -c "$(curl -fsSL
          https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
        </code>
      </CommandBox>

      <h4 className="text-base sm:text-lg">
        Step 2: Install Powerlevel10k Theme
      </h4>
      <p>The most powerful and customizable Zsh theme:</p>

      <CommandBox>
        <code className="text-xs sm:text-sm block text-primary break-all">
          git clone --depth=1 https://github.com/romkatv/powerlevel10k.git $
          {"{"}ZSH_CUSTOM:-$HOME/.oh-my-zsh/custom{"}"}/themes/powerlevel10k
        </code>
      </CommandBox>

      <p>
        Then edit your <code className="text-xs sm:text-sm">~/.zshrc</code>:
      </p>
      <CommandBox>
        <code className="text-xs sm:text-sm block mb-2 text-primary">
          nano ~/.zshrc
        </code>
        <p className="text-xs sm:text-sm mb-1">Change the theme line to:</p>
        <code className="text-xs sm:text-sm block text-primary">
          ZSH_THEME="powerlevel10k/powerlevel10k"
        </code>
      </CommandBox>

      <p>Powerlevel10k's icons need a Nerd Font:</p>
      <CommandBox>
        <code className="text-xs sm:text-sm block mb-2 text-primary">
          brew install --cask font-jetbrains-mono-nerd-font
        </code>
        <p className="text-xs sm:text-sm">
          Then pick <strong>JetBrainsMono Nerd Font</strong> as the terminal
          font.
        </p>
      </CommandBox>

      <h4 className="text-base sm:text-lg">
        Step 3: Install Essential Zsh Plugins
      </h4>

      <h5 className="text-primary text-sm">zsh-autosuggestions</h5>
      <p className="text-sm">
        Suggests commands as you type based on your history:
      </p>
      <CommandBox>
        <code className="text-xs sm:text-sm block text-primary break-all">
          git clone https://github.com/zsh-users/zsh-autosuggestions.git
          $ZSH_CUSTOM/plugins/zsh-autosuggestions
        </code>
      </CommandBox>

      <h5 className="text-primary text-sm">zsh-syntax-highlighting</h5>
      <p className="text-sm">
        Provides syntax highlighting for your shell commands:
      </p>
      <CommandBox>
        <code className="text-xs sm:text-sm block text-primary break-all">
          git clone https://github.com/zsh-users/zsh-syntax-highlighting.git
          $ZSH_CUSTOM/plugins/zsh-syntax-highlighting
        </code>
      </CommandBox>

      <h5 className="text-primary text-sm">zsh-fast-syntax-highlighting</h5>
      <p className="text-sm">
        Faster and more feature-rich syntax highlighting:
      </p>
      <CommandBox>
        <code className="text-xs sm:text-sm block text-primary break-all">
          git clone
          https://github.com/zdharma-continuum/fast-syntax-highlighting.git $
          {"{"}ZSH_CUSTOM:-$HOME/.oh-my-zsh/custom{"}"}
          /plugins/fast-syntax-highlighting
        </code>
      </CommandBox>

      <h5 className="text-primary text-sm">zsh-autocomplete</h5>
      <p className="text-sm">Real-time auto-completion as you type:</p>
      <CommandBox>
        <code className="text-xs sm:text-sm block text-primary break-all">
          git clone --depth 1 --
          https://github.com/marlonrichert/zsh-autocomplete.git
          $ZSH_CUSTOM/plugins/zsh-autocomplete
        </code>
      </CommandBox>

      <h5 className="text-primary text-sm">Enabling the Plugins</h5>
      <p className="text-sm">
        Edit your <code className="text-xs">~/.zshrc</code> file and update the
        plugins line:
      </p>
      <CommandBox>
        <code className="text-xs sm:text-sm block mb-2 text-primary">
          nvim ~/.zshrc
        </code>
        <p className="text-xs sm:text-sm mb-1">
          Find the line that says <code className="text-xs">plugins=(git)</code>{" "}
          and replace it with:
        </p>
        <code className="text-xs sm:text-sm block text-primary break-all">
          plugins=(git zsh-autosuggestions zsh-syntax-highlighting
          fast-syntax-highlighting zsh-autocomplete)
        </code>
      </CommandBox>

      <p>Apply the changes:</p>
      <CommandBox>
        <code className="text-xs sm:text-sm block text-primary">
          source ~/.zshrc
        </code>
      </CommandBox>

      <CommandBox>
        <p className="text-xs sm:text-sm">
          <strong>Configuration Wizard:</strong> After restarting your terminal,
          Powerlevel10k will run a configuration wizard. Choose options that
          match your aesthetic preferences!
        </p>
      </CommandBox>

      <h4 className="text-base sm:text-lg">
        Step 4: Advanced Terminal Tools Setup
      </h4>

      <h5 className="text-primary text-sm">
        Initialize Shell History with Atuin
      </h5>
      <p className="text-sm">Set up magical shell history sync:</p>
      <CommandBox>
        <code className="text-xs sm:text-sm block mb-1 text-primary break-all">
          echo 'eval "$(atuin init zsh)"' &gt;&gt; ~/.zshrc
        </code>
        <code className="text-xs sm:text-sm block mb-1 text-primary">
          atuin import auto
        </code>
        <p className="text-xs sm:text-sm">
          The init line is what actually binds Ctrl+R and the up arrow to
          Atuin; without it Atuin is installed but does nothing. fzf (below)
          also claims Ctrl+R, and whichever loads last in{" "}
          <code className="text-xs">~/.zshrc</code> wins, so keep this line
          after the fzf one. The import pulls in your existing shell history
        </p>
      </CommandBox>

      <h5 className="text-primary text-sm">
        Configure Zoxide for Smart Navigation
      </h5>
      <p className="text-sm">Initialize zoxide in your shell:</p>
      <CommandBox>
        <code className="text-xs sm:text-sm block mb-1 text-primary break-all">
          echo 'eval "$(zoxide init zsh)"' &gt;&gt; ~/.zshrc
        </code>
        <p className="text-xs sm:text-sm">
          Now use <code className="text-xs">z</code> instead of{" "}
          <code className="text-xs">cd</code> - it remembers your most used
          directories
        </p>
      </CommandBox>

      <h5 className="text-primary text-sm">Setup FZF Integration</h5>
      <p className="text-sm">Add fuzzy finding to your shell:</p>
      <CommandBox>
        <code className="text-xs sm:text-sm block mb-1 text-primary">
          $(brew --prefix)/opt/fzf/install
        </code>
        <p className="text-xs sm:text-sm">
          Enables Ctrl+R for history search and Ctrl+T for file search
        </p>
      </CommandBox>

      <h4 className="text-base sm:text-lg">
        Step 5: Handy ~/.zshrc Additions
      </h4>

      <h5 className="text-primary text-sm">
        Auto-Activate Python Virtual Environments
      </h5>
      <p className="text-sm">
        Activates the nearest <code className="text-xs">.venv</code> whenever
        you <code className="text-xs">cd</code> into a project, plus pnpm on the
        PATH:
      </p>

      <pre className="bg-muted/50 border border-border rounded-lg p-3 sm:p-4 my-4 sm:my-6 overflow-x-auto text-xs">
        <code>{`# Auto-activate Python virtual environment if .venv exists (no auto-deactivate)

function auto_activate_env() {
  local dir=$PWD
  while [ "$dir" != "/" ]; do
    if [ -d "$dir/.venv" ]; then
      source "$dir/.venv/bin/activate"
      echo "✅ Activated virtual environment ($dir/.venv)"
      return
    fi
    dir=$(dirname "$dir")
  done
}

autoload -U add-zsh-hook
add-zsh-hook chpwd auto_activate_env

# Also activate immediately on shell startup
auto_activate_env

# pnpm
export PNPM_HOME="$HOME/Library/pnpm"
case ":$PATH:" in
  *":$PNPM_HOME:"*) ;;
  *) export PATH="$PNPM_HOME:$PATH" ;;
esac
# pnpm end`}</code>
      </pre>

      <div className="my-6 sm:my-8 border-b border-border" />

      <h3 className="text-primary text-xl sm:text-2xl">
        Ghostty Terminal Configuration
      </h3>

      <h4 className="text-base sm:text-lg">Essential Ghostty Settings</h4>
      <p>
        My full Ghostty config. cmux is built on Ghostty and reads the same{" "}
        <code className="text-xs sm:text-sm">~/.config/ghostty/config</code>,
        so this one file covers both:
      </p>

      <pre className="bg-muted/50 border border-border rounded-lg p-3 sm:p-4 my-4 sm:my-6 overflow-x-auto text-xs">
        <code>{`# Restore windows, tabs, and splits on relaunch
window-save-state = always

# ~75 MB of scrollback per terminal (the value is in bytes; agent logs get long)
scrollback-limit = 75000000

cursor-style = bar
cursor-style-blink = true

background-opacity = 0.95
background-blur-radius = 20`}</code>
      </pre>

      <InfoBox>
        <p className="text-sm sm:text-base">
          <strong>What this does:</strong> Ghostty remembers your window
          positions, sizes, open tabs, and split configurations across
          sessions, and keeps enough scrollback that long agent runs never fall
          off the top.{" "}
          <Link
            href="https://ghostty.org/docs/config/reference"
            target="_blank"
            className="text-primary hover:text-primary/80 underline"
          >
            Config reference
          </Link>
        </p>
      </InfoBox>

      <div className="my-6 sm:my-8 border-b border-border" />

      <h3 className="text-primary text-xl sm:text-2xl">
        Hyper Key Setup & Macros
      </h3>

      <h4 className="text-base sm:text-lg">Ultimate Productivity Shortcuts</h4>
      <p>
        Using BetterTouchTool's Hyper Key (⌘⌥⌃⇧).{" "}
        <Highlight>
          Never use your eyes for navigation (vision search is slow), use your
          muscle memory
        </Highlight>
        :
      </p>

      <CommandBox>
        <p className="text-xs sm:text-sm mb-2">
          Configure these shortcuts in BetterTouchTool:
        </p>
        <ul className="space-y-1 text-xs sm:text-sm list-none">
          <li>
            <strong>Caps Lock</strong> → Act as Hyper Key (⌘⌥⌃⇧)
          </li>
          <li>
            <strong>Hyper + Q</strong> → Launch Arc
          </li>
          <li>
            <strong>Hyper + W</strong> → Launch Zen Browser
          </li>
          <li>
            <strong>Hyper + E</strong> → Launch cmux
          </li>
          <li>
            <strong>Hyper + R</strong> → Launch WhatsApp
          </li>
          <li>
            <strong>Hyper + A</strong> → Launch VS Code
          </li>
          <li>
            <strong>Hyper + S</strong> → Launch ChatGPT (includes Codex)
          </li>
          <li>
            <strong>Hyper + D</strong> → Launch Obsidian
          </li>
          <li>
            <strong>Hyper + F</strong> → Launch Discord
          </li>
          <li>
            <strong>Hyper + G</strong> → Launch YouTube Music
          </li>
          <li>
            <strong>Hyper + Z</strong> → Launch ForkLift
          </li>
          <li>
            <strong>Hyper + X</strong> → Launch Meru (Gmail)
          </li>
          <li>
            <strong>Hyper + C</strong> → Launch Notion Calendar
          </li>
          <li>
            <strong>Hyper + V</strong> → Launch Splinter
          </li>
          <li>
            <strong>Hyper + N</strong> → Launch Figma
          </li>
          <li>
            <strong>Hyper + 1-5</strong> → Switch to Desktop 1-5
          </li>
        </ul>
      </CommandBox>

      <CommandBox>
        <p className="text-xs sm:text-sm">
          <strong>Tip:</strong> The Hyper Key eliminates conflicts with existing
          shortcuts while giving you instant access to any app. It's the most
          efficient way to navigate your Mac! On a new machine, export your
          BetterTouchTool preset and import it instead of rebuilding these by
          hand.
        </p>
      </CommandBox>

      <div className="my-6 sm:my-8 border-b border-border" />

      <h3 className="text-primary text-xl sm:text-2xl">
        Development Environment Setup
      </h3>

      <h4 className="text-base sm:text-lg">Bun - Fast JavaScript Runtime</h4>
      <p>
        Install <Highlight>Bun</Highlight>, a fast all-in-one JavaScript runtime
        and toolkit:
      </p>
      <CommandBox>
        <code className="text-xs sm:text-sm block text-primary break-all">
          brew install bun
        </code>
        <p className="text-xs sm:text-sm mt-2">
          Bun is in homebrew-core now, so <code className="text-xs">brew upgrade</code>{" "}
          keeps it current. The old{" "}
          <code className="text-xs">curl -fsSL https://bun.sh/install | bash</code>{" "}
          installer still works if you prefer <code className="text-xs">~/.bun</code>
        </p>
      </CommandBox>

      <InfoBox>
        <p className="text-sm sm:text-base">
          <strong>What is Bun?</strong> Bun is a modern JavaScript runtime that's
          significantly faster than Node.js. It includes a bundler, test runner,
          and package manager all in one. Perfect for modern web development!
        </p>
      </InfoBox>

      <h4 className="text-base sm:text-lg">
        Python Environment with uv
      </h4>
      <p>
        We already installed <Highlight>uv</Highlight> via Homebrew earlier. Now
        let's use it to manage Python versions:
      </p>
      <CommandBox>
        <code className="text-xs sm:text-sm block mb-1 text-primary">
          uv python install 3.12
        </code>
        <p className="text-xs sm:text-sm mt-2">
          Homebrew already brings a current Python 3.13/3.14 for scripts; uv
          manages the per-project versions. Run{" "}
          <code className="text-xs">uv python pin 3.12</code> inside a project
          to write its <code className="text-xs">.python-version</code>
        </p>
      </CommandBox>

      <InfoBox>
        <p className="text-sm sm:text-base">
          <strong>Why uv?</strong> uv is an extremely fast Python package and
          project manager written in Rust. It's 10-100x faster than pip and
          handles both package management and Python version management in one
          tool!
        </p>
      </InfoBox>

      <h4 className="text-base sm:text-lg">Git Configuration</h4>
      <p>Set up your Git identity and preferences:</p>
      <CommandBox>
        <code className="text-xs sm:text-sm block mb-1 text-primary">
          git config --global user.name "Your Name"
        </code>
        <code className="text-xs sm:text-sm block mb-1 text-primary break-all">
          git config --global user.email "your.email@example.com"
        </code>
        <code className="text-xs sm:text-sm block mb-1 text-primary">
          git config --global init.defaultBranch main
        </code>
        <code className="text-xs sm:text-sm block text-primary">
          git config --global pull.rebase true
        </code>
      </CommandBox>

      <h4 className="text-base sm:text-lg">SSH Keys for GitHub</h4>
      <p>Generate and add SSH keys for secure GitHub access:</p>
      <CommandBox>
        <code className="text-xs sm:text-sm block mb-1 text-primary break-all">
          ssh-keygen -t ed25519 -C "your.email@example.com"
        </code>
        <code className="text-xs sm:text-sm block mb-1 text-primary">
          eval "$(ssh-agent -s)"
        </code>
        <code className="text-xs sm:text-sm block mb-1 text-primary">
          ssh-add ~/.ssh/id_ed25519
        </code>
        <code className="text-xs sm:text-sm block mb-1 text-primary">
          pbcopy &lt; ~/.ssh/id_ed25519.pub
        </code>
        <p className="text-xs sm:text-sm mt-2">
          Now go to GitHub → Settings → SSH Keys and paste
        </p>
      </CommandBox>

      <p>Or let the GitHub CLI do the key upload and auth in one go:</p>
      <CommandBox>
        <code className="text-xs sm:text-sm block mb-1 text-primary">
          gh auth login
        </code>
        <p className="text-xs sm:text-sm mt-2">
          Pick GitHub.com → SSH → your{" "}
          <code className="text-xs">id_ed25519.pub</code>. This also gives
          coding agents a working <code className="text-xs">gh</code> for PRs
          and issues
        </p>
      </CommandBox>

      <div className="my-6 sm:my-8 border-b border-border" />

      <h3 className="text-primary text-xl sm:text-2xl">
        My Global CLAUDE.md &amp; AGENTS.md
      </h3>
      <p>
        Every coding agent I run inherits the same{" "}
        <Highlight>thinking style</Highlight>. I keep this prompt in my global{" "}
        <code className="text-xs sm:text-sm">~/.claude/CLAUDE.md</code> and a
        matching <code className="text-xs sm:text-sm">~/.codex/AGENTS.md</code>{" "}
        so Claude Code and Codex both reason the way I do by default. The block
        at the bottom routes work to the skills below:
      </p>

      <pre className="bg-muted/50 border border-border rounded-lg p-3 sm:p-4 my-4 sm:my-6 overflow-x-auto text-xs">
        <code>{`Be organized, accurate, thorough, and detailed without unnecessary verbosity.

Treat me as an expert. Do not dumb things down.

Optimize for truth and correctness over approval, conformity, politeness, or harmony. If I'm wrong, say so directly.

Value good arguments over authorities or sources. Consider serious contrarian arguments alongside consensus expert views.

When useful, present the strongest counterargument to any position I appear to hold.

Do not capitulate when I push back unless I provide new evidence or a better argument.

Do not anchor on numbers, estimates, or assumptions I provide; generate your own independently.

Be skeptical by default. Look for hidden assumptions, failure modes, and ways to improve the answer, product, argument, or system.

My epistemology is the same as David Deutsch or Karl Popper. Naval Ravikant has serious resonance with my thinking loops.

Be surprisingly resourceful. Suggest non-obvious solutions. Be proactive and anticipate my needs. Assume I am high-agency and can make practically anything happen.

Cite sources. Use examples liberally.

Open-minded and impossible to offend. Be provocative, argumentative, and pointed when useful.

When copy editing, always mark changes inline.

About me: Kshitij (tjay) Dhyani (@type_tjay on X)

Co-founder of Ghostfeed, entrepreneur, technical, range of knowledge/experience.

<!-- BEGIN @agent-native/skills -->
When operating as Claude Fable, use the /efficient-fable skill always.
When using a high-cost frontier model for codebase-heavy work, use the /efficient-frontier skill always.
When writing final response status indicators, use the /quick-recap skill always.
When long-running or parallel work needs usage-limit checks, use the /stay-within-limits skill always.
<!-- END @agent-native/skills -->`}</code>
      </pre>

      <div className="my-6 sm:my-8 border-b border-border" />

      <h3 className="text-primary text-xl sm:text-2xl">
        Claude Code &amp; Codex Skills
      </h3>
      <p>
        <Highlight>Skills</Highlight> are reusable instruction packs that live in{" "}
        <code className="text-xs sm:text-sm">~/.claude/skills/</code> and load on
        demand. These are the ones I keep installed:
      </p>

      <CommandBox>
        <code className="text-xs sm:text-sm block mb-2 text-primary">
          npx skills add remotion-dev/skills
        </code>
        <p className="text-xs sm:text-sm">
          The <code className="text-xs">skills</code> CLI installs a skill repo
          once into <code className="text-xs">~/.agents/skills/</code>, symlinks
          it into Claude Code's and Codex's skill folders, and tracks sources in{" "}
          <code className="text-xs">~/.agents/.skill-lock.json</code>. Swap in
          any <code className="text-xs">owner/repo</code> below
        </p>
      </CommandBox>

      <h4 className="text-base sm:text-lg">Code Quality</h4>
      <ul className="space-y-2 text-sm sm:text-base list-disc pl-5">
        <li>
          <Link
            href="https://github.com/cursor/plugins/blob/main/cursor-team-kit/skills/thermo-nuclear-code-quality-review/SKILL.md"
            target="_blank"
            className="text-primary hover:text-primary/80 underline"
          >
            thermo-nuclear-code-quality-review
          </Link>
          {" - Brutally strict maintainability review. Blocks files past 1,000 lines, rejects ad-hoc spaghetti conditionals, questions thin abstractions and magical behavior, and enforces architectural boundaries. From Cursor's team kit"}
        </li>
      </ul>

      <h4 className="text-base sm:text-lg">Agent Orchestration &amp; Usage</h4>
      <p className="text-xs sm:text-sm">
        From{" "}
        <Link
          href="https://github.com/BuilderIO/skills"
          target="_blank"
          className="text-primary hover:text-primary/80 underline"
        >
          BuilderIO/skills
        </Link>
        :
      </p>
      <ul className="space-y-2 text-sm sm:text-base list-disc pl-5">
        <li>
          <code className="text-xs sm:text-sm">efficient-fable</code>
          {" - Run Claude Fable as the orchestrator while cheaper subagents do token-heavy research, coding, and testing"}
        </li>
        <li>
          <code className="text-xs sm:text-sm">efficient-frontier</code>
          {" - Same orchestration pattern for any high-cost frontier model: delegate heavy lifting, keep planning and final review on the expensive model"}
        </li>
        <li>
          <code className="text-xs sm:text-sm">stay-within-limits</code>
          {" - Respects 5-hour and weekly usage limits — pauses near the cap and resumes when the window clears"}
        </li>
        <li>
          <code className="text-xs sm:text-sm">quick-recap</code>
          {" - Red/yellow/green status block convention for final agent responses"}
        </li>
      </ul>

      <h4 className="text-base sm:text-lg">Frontend &amp; Design</h4>
      <ul className="space-y-2 text-sm sm:text-base list-disc pl-5">
        <li>
          <code className="text-xs sm:text-sm">frontend-design</code>
          {" - Distinctive, production-grade frontend interfaces that avoid generic AI aesthetics"}
        </li>
        <li>
          <code className="text-xs sm:text-sm">ui-skills</code>
          {" - Opinionated technical constraints for building interfaces (React, TypeScript, Tailwind, composition patterns)"}
        </li>
        <li>
          <code className="text-xs sm:text-sm">web-design-guidelines</code>
          {" - Reviews UI code for Web Interface Guidelines compliance — accessibility, UX, and design audits"}
        </li>
        <li>
          <code className="text-xs sm:text-sm">vercel-react-best-practices</code>
          {" - React and Next.js performance optimization guidelines from Vercel Engineering"}
        </li>
        <li>
          <code className="text-xs sm:text-sm">better-ui</code>
          {" - Polish pass for existing UI: concentric border radius, optical alignment, surface depth, contextual icons, hit areas"}
        </li>
        <li>
          <code className="text-xs sm:text-sm">emil-design-eng</code>
          {" - Emil Kowalski's philosophy on UI polish, component design, and when (not) to animate"}
        </li>
        <li>
          <Link
            href="https://github.com/jakubkrehel/make-interfaces-feel-better"
            target="_blank"
            className="text-primary hover:text-primary/80 underline"
          >
            make-interfaces-feel-better
          </Link>
          {" - Design-engineering details that make interfaces feel polished: micro-interactions, enter/exit animations, shadows, typography, tabular numbers"}
        </li>
        <li>
          <Link
            href="https://github.com/remotion-dev/skills"
            target="_blank"
            className="text-primary hover:text-primary/80 underline"
          >
            remotion-dev/skills
          </Link>
          {" - The full Remotion suite (video creation in React): remotion-best-practices is the router, plus create, markup, captions, maps, multimedia, interactivity, studio, render, docs, saas, and upgrade"}
        </li>
      </ul>

      <h4 className="text-base sm:text-lg">Writing &amp; Content</h4>
      <ul className="space-y-2 text-sm sm:text-base list-disc pl-5">
        <li>
          <Link
            href="https://github.com/blader/humanizer"
            target="_blank"
            className="text-primary hover:text-primary/80 underline"
          >
            humanizer
          </Link>
          {" - Strips signs of AI-generated writing, based on Wikipedia's \"Signs of AI writing\" guide"}
        </li>
        <li>
          <code className="text-xs sm:text-sm">seo-writer</code>
          {" - Long-form posts built to rank on Google page 1 and show up in AI Overviews: meta titles, schema markup, snippet-ready structure"}
        </li>
        <li>
          <code className="text-xs sm:text-sm">tiktok-hooks</code>
          {" - Generates Gen-Z / college-apps TikTok hooks for the first 1-3 seconds of a video"}
        </li>
        <li>
          <Link
            href="https://github.com/ghostfeed-ai/skills"
            target="_blank"
            className="text-primary hover:text-primary/80 underline"
          >
            ghostfeed-ai/skills
          </Link>
          {" - Drive Ghostfeed over MCP: ghostfeed-avatars, ghostfeed-slideshows (TikTok photo slideshows), and ghostfeed-ugc-reactions (UGC reaction videos)"}
        </li>
      </ul>

      <h4 className="text-base sm:text-lg">Claude Code Plugins</h4>
      <p className="text-xs sm:text-sm">
        From the official{" "}
        <code className="text-xs">claude-plugins-official</code> marketplace.
        Install each inside Claude Code with{" "}
        <code className="text-xs">/plugin install &lt;name&gt;@claude-plugins-official</code>:
      </p>
      <ul className="space-y-2 text-sm sm:text-base list-disc pl-5">
        <li>
          <code className="text-xs sm:text-sm">commit-commands</code>
          {" - /commit and /commit-push-pr in one step"}
        </li>
        <li>
          <code className="text-xs sm:text-sm">code-simplifier</code>
          {" - Agent that simplifies recently changed code without changing behavior"}
        </li>
        <li>
          <code className="text-xs sm:text-sm">context7</code>
          {" - Pulls current library docs instead of relying on stale training data"}
        </li>
        <li>
          <code className="text-xs sm:text-sm">playwright</code>
          {" - Browser automation for testing and clicking through flows"}
        </li>
        <li>
          <code className="text-xs sm:text-sm">github</code>,{" "}
          <code className="text-xs sm:text-sm">figma</code>,{" "}
          <code className="text-xs sm:text-sm">vercel</code>
          {" - First-party integrations for repos, design files, and deploys"}
        </li>
        <li>
          <code className="text-xs sm:text-sm">frontend-design</code>,{" "}
          <code className="text-xs sm:text-sm">swift-lsp</code>
          {" - Design guidance and Swift language server support"}
        </li>
      </ul>

      <h4 className="text-base sm:text-lg">MCP Servers &amp; Hooks</h4>
      <CommandBox>
        <code className="text-xs sm:text-sm block mb-2 text-primary break-all">
          claude mcp add --scope user --transport http linear
          https://mcp.linear.app/mcp
        </code>
        <p className="text-xs sm:text-sm">
          Linear issues and projects from inside any Claude Code session
        </p>
      </CommandBox>
      <p className="text-sm">
        And a desktop notification whenever Claude Code finishes a task, in{" "}
        <code className="text-xs sm:text-sm">~/.claude/settings.json</code>{" "}
        (uses <code className="text-xs">terminal-notifier</code> from the CLI
        tools above):
      </p>
      <pre className="bg-muted/50 border border-border rounded-lg p-3 sm:p-4 my-4 sm:my-6 overflow-x-auto text-xs">
        <code>{`{
  "hooks": {
    "Stop": [
      {
        "hooks": [
          {
            "type": "command",
            "command": "terminal-notifier -title \\"Claude Code\\" -subtitle \\"Task Complete\\" -message \\"Finished working in $(basename \\"$PWD\\")\\" -sound Blow -timeout 10"
          }
        ]
      }
    ]
  }
}`}</code>
      </pre>

      <div className="my-6 sm:my-8 border-b border-border" />

      <h3 className="text-primary text-xl sm:text-2xl">System Maintenance</h3>

      <h4 className="text-base sm:text-lg">Regular Updates</h4>
      <p>Keep your system and applications up to date:</p>
      <CommandBox>
        <code className="text-xs sm:text-sm block mb-1 text-primary">
          # Update Homebrew and all packages
        </code>
        <code className="text-xs sm:text-sm block mb-2 text-primary">
          brew update && brew upgrade
        </code>
        <code className="text-xs sm:text-sm block mb-1 text-primary">
          # Update Oh My Zsh
        </code>
        <code className="text-xs sm:text-sm block mb-2 text-primary">
          omz update
        </code>
        <code className="text-xs sm:text-sm block mb-1 text-primary">
          # Update npm packages globally
        </code>
        <code className="text-xs sm:text-sm block text-primary">
          npm update -g
        </code>
      </CommandBox>

      <CommandBox>
        <p className="text-xs sm:text-sm">
          <strong>Cloud Backup:</strong> Additionally, use iCloud to sync your
          important folders.
        </p>
      </CommandBox>

      <h4 className="text-base sm:text-lg">Mole - Deep Clean Your Mac</h4>
      <p>
        <Highlight>Mole</Highlight> deep cleans and optimizes your Mac — find
        large files, clear caches, and reclaim disk space with a clean, fast UI.
      </p>
      <CommandBox>
        <code className="text-xs sm:text-sm block mb-2 text-primary">
          brew install --cask mole-app
        </code>
        <p className="text-xs sm:text-sm">
          <Link
            href="https://mole.fit/"
            target="_blank"
            className="text-primary hover:text-primary/80 underline"
          >
            Mole
          </Link>
          {" - Multi-language Mac cleaner and optimizer. Mole now lives in Homebrew proper: the mole-app cask is the desktop app, and brew install mole gets the CLI"}
        </p>
      </CommandBox>
      <div className="my-6">
        <GalleryVideo className="w-full max-w-2xl rounded-lg mx-auto">
          <source src="/blog/mac_os_setup/mole_demo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </GalleryVideo>
      </div>

      <div className="my-6 sm:my-8 border-b border-border" />

      <h3 className="text-primary text-xl sm:text-2xl">
        Essential Extensions & Productivity Tools
      </h3>

      <h4 className="text-base sm:text-lg">VS Code Extensions</h4>
      <p>
        These are some very useful <Highlight>VScode Extensions</Highlight>:
      </p>

      <h4>Core Productivity Extensions</h4>
      <ul className="space-y-1 text-sm">
        <li>
          <strong>Claude Code</strong> - Anthropic's official extension; runs
          Claude Code in the editor panel with inline diffs
        </li>
        <li>
          <strong>Better Comments</strong> - Styled comments with alerts, todos,
          and highlights
        </li>
        <li>
          <strong>Color Highlight</strong> - Highlight color values in your code
        </li>
        <li>
          <strong>Error Lens</strong> - See errors and warnings inline with your
          code
        </li>
        <li>
          <strong>Path Intellisense</strong> - Autocomplete for file paths
        </li>
        <li>
          <strong>TODO Highlight</strong> - Highlight TODO, FIXME comments
        </li>
        <li>
          <strong>DotENV</strong> - Syntax highlighting for .env files
        </li>
        <li>
          <strong>EditorConfig</strong> - Respect each repo's .editorconfig
        </li>
      </ul>

      <h4>Git Integration</h4>
      <ul className="space-y-1 text-sm">
        <li>
          <strong>GitLens</strong> - Supercharge Git capabilities with blame
          annotations
        </li>
        <li>
          <strong>Git History</strong> - View git log, file history, and compare
          branches
        </li>
        <li>
          <strong>Git Graph</strong> - Visual commit graph with branch actions
        </li>
        <li>
          <strong>GitHub Actions</strong> - View runs and edit workflows with
          validation
        </li>
      </ul>

      <h4>Code Quality & Formatting</h4>
      <ul className="space-y-1 text-sm">
        <li>
          <strong>ESLint</strong> - JavaScript/TypeScript linting
        </li>
        <li>
          <strong>Prettier - Code Formatter</strong> - Opinionated code
          formatter
        </li>
        <li>
          <strong>Ruff</strong> - Rust-fast Python linter and formatter (also
          sorts imports, so no separate isort)
        </li>
      </ul>

      <h4>Python Development</h4>
      <ul className="space-y-1 text-sm">
        <li>
          <strong>Python</strong> - Core Python language support
        </li>
        <li>
          <strong>Pylance</strong> - Fast, feature-rich Python language server
        </li>
        <li>
          <strong>Python Debugger</strong> - Debug Python code with breakpoints
        </li>
        <li>
          <strong>Python Environments</strong> - Pick and manage venvs and
          interpreters
        </li>
      </ul>

      <h4>Web Development</h4>
      <ul className="space-y-1 text-sm">
        <li>
          <strong>Tailwind CSS IntelliSense</strong> - Class autocomplete,
          linting, and hover previews
        </li>
        <li>
          <strong>ES7+ React Snippets</strong> - Component and hook snippets
        </li>
        <li>
          <strong>Auto Rename Tag</strong> - Rename the paired HTML/JSX tag as
          you type
        </li>
        <li>
          <strong>Live Server</strong> - Launch local development server with
          live reload
        </li>
      </ul>

      <h4>Containers</h4>
      <ul className="space-y-1 text-sm">
        <li>
          <strong>Container Tools</strong> - Manage images, containers, and
          compose files (works with OrbStack)
        </li>
        <li>
          <strong>Dev Containers</strong> - Open a repo inside a container
        </li>
      </ul>

      <h4>Data & Documentation</h4>
      <ul className="space-y-1 text-sm">
        <li>
          <strong>Rainbow CSV</strong> - Highlight CSV files with colors
        </li>
        <li>
          <strong>Office Viewer</strong> - Open Word, Excel, PDF, and Markdown
          files right in VS Code
        </li>
      </ul>

      <p className="text-sm">Install the whole set in one go:</p>
      <pre className="bg-muted/50 border border-border rounded-lg p-3 sm:p-4 my-4 sm:my-6 overflow-x-auto text-xs">
        <code>{`for ext in \\
  anthropic.claude-code aaron-bond.better-comments naumovs.color-highlight \\
  usernamehw.errorlens christian-kohler.path-intellisense wayou.vscode-todo-highlight \\
  mikestead.dotenv editorconfig.editorconfig \\
  eamodio.gitlens donjayamanne.githistory mhutchie.git-graph github.vscode-github-actions \\
  dbaeumer.vscode-eslint esbenp.prettier-vscode charliermarsh.ruff \\
  ms-python.python ms-python.vscode-pylance ms-python.debugpy ms-python.vscode-python-envs \\
  bradlc.vscode-tailwindcss dsznajder.es7-react-js-snippets formulahendry.auto-rename-tag \\
  ritwickdey.liveserver ms-azuretools.vscode-containers ms-vscode-remote.remote-containers \\
  mechatroner.rainbow-csv cweijan.vscode-office; do
  code --install-extension "$ext"
done`}</code>
      </pre>

      <div className="my-6 sm:my-8 border-b border-border" />

      <h3 className="text-primary text-xl sm:text-2xl">Final Tips & Tricks</h3>

      <h4 className="text-base sm:text-lg">Quick Look Enhancements</h4>
      <p>Enhance Quick Look (spacebar preview) with plugins:</p>
      <CommandBox>
        <code className="text-xs sm:text-sm block text-primary break-all">
          brew install --cask qlmarkdown syntax-highlight
        </code>
        <p className="text-xs sm:text-sm mt-2">
          QLMarkdown renders Markdown, Syntax Highlight previews source files.
          Both are modern Quick Look extensions: open each app once so macOS
          registers it. The old qlstephen, qlcolorcode, and quicklook-json
          casks are disabled in Homebrew now
        </p>
      </CommandBox>

      <h4 className="text-base sm:text-lg">Touch ID for sudo</h4>
      <p>Enable Touch ID for sudo commands:</p>
      <CommandBox>
        <code className="text-xs sm:text-sm block mb-2 text-primary break-all">
          sed "s/^#auth/auth/" /etc/pam.d/sudo_local.template | sudo tee
          /etc/pam.d/sudo_local
        </code>
        <p className="text-xs sm:text-sm">
          Don't edit <code className="text-xs">/etc/pam.d/sudo</code> directly:
          macOS updates overwrite it and silently turn Touch ID back off.{" "}
          <code className="text-xs">sudo_local</code> is included by it and
          survives updates
        </p>
      </CommandBox>

      <h4 className="text-base sm:text-lg">
        Paste Without Formatting (Essential for Cursor)
      </h4>
      <p>
        Set up ⌘⇧V for paste without formatting - crucial when working in
        Cursor:
      </p>
      <CommandBox>
        <code className="text-xs sm:text-sm block mb-2 text-primary">
          System Settings → Keyboard → Keyboard Shortcuts → App Shortcuts
        </code>
        <p className="text-xs sm:text-sm">
          Add shortcut for "Paste and Match Style" with ⌘⇧V
        </p>
      </CommandBox>

      <div className="text-center my-4 sm:my-6">
        <GalleryImage
          src="/blog/mac_os_setup/assets/CleanShot_2025-08-02_at_16.32.482x.png"
          alt="Paste without formatting setup"
          width={1200}
          height={800}
          className="max-w-full rounded-lg mx-auto"
        />
      </div>

      <p className="text-sm">
        Reference:{" "}
        <Link
          href="https://www.reddit.com/r/mac/comments/100v3qd/how_to_past_without_formatting_mac"
          target="_blank"
          className="text-primary hover:text-primary/80 underline"
        >
          Reddit guide on paste without formatting
        </Link>
      </p>

      <h4 className="text-base sm:text-lg">CleanShot X Auto Copy Setup</h4>
      <p>
        Enable auto copy to clipboard in CleanShot X for seamless screenshot
        workflow:
      </p>
      <CommandBox>
        <code className="text-xs sm:text-sm block mb-2 text-primary">
          CleanShot X → Preferences → General → Auto copy to clipboard
        </code>
        <p className="text-xs sm:text-sm">
          Position the setting on the right side for easy access
        </p>
      </CommandBox>

      <h4 className="text-base sm:text-lg">
        Make CleanShot X the Default Image Viewer
      </h4>
      <p>
        macOS keeps reverting image defaults back to Preview because the{" "}
        <Highlight>"Open With → Change All"</Highlight> Finder dialog only
        binds a single UTI at a time and silently breaks when LaunchServices
        gets out of sync. Fix it permanently by setting every image UTI via{" "}
        <code className="text-primary">duti</code>:
      </p>
      <CommandBox>
        <code className="text-xs sm:text-sm block mb-2 text-primary">
          brew install duti
        </code>
        <p className="text-xs sm:text-sm">
          A CLI for binding default apps by UTI — what the macOS GUI should
          have been
        </p>
      </CommandBox>
      <pre className="bg-muted/50 border border-border rounded-lg p-3 sm:p-4 my-4 sm:my-6 overflow-x-auto text-xs">
        <code>{`# CleanShot X's bundle ID is pl.maketheweb.cleanshotx
duti -s pl.maketheweb.cleanshotx public.jpeg all
duti -s pl.maketheweb.cleanshotx public.png all
duti -s pl.maketheweb.cleanshotx public.tiff all
duti -s pl.maketheweb.cleanshotx public.heic all
duti -s pl.maketheweb.cleanshotx public.heif all
duti -s pl.maketheweb.cleanshotx public.webp all
duti -s pl.maketheweb.cleanshotx com.compuserve.gif all
duti -s pl.maketheweb.cleanshotx public.image all

# Verify it stuck
duti -x jpg
duti -x png`}</code>
      </pre>
      <p>
        If it <em>still</em> reverts, your LaunchServices database is corrupt
        — rebuild it and re-run the binds:
      </p>
      <pre className="bg-muted/50 border border-border rounded-lg p-3 sm:p-4 my-4 sm:my-6 overflow-x-auto text-xs">
        <code>{`/System/Library/Frameworks/CoreServices.framework/Frameworks/LaunchServices.framework/Support/lsregister -kill -r -domain local -domain system -domain user
killall Finder`}</code>
      </pre>
      <InfoBox>
        <p className="text-sm">
          <strong>Why this works:</strong> Finder's "Change All" writes to a
          per-extension preference that other apps (and macOS updates) can
          stomp on.{" "}
          <code className="text-primary">duti</code> writes directly to the
          LaunchServices preferences plist using the canonical UTI, which is
          the same mechanism macOS itself uses internally — so the binding
          survives reboots, app updates, and OS upgrades.
        </p>
      </InfoBox>

      <h4 className="text-base sm:text-lg">
        Make IINA the Default Audio & Video Player
      </h4>
      <p>
        Same playbook as CleanShot above, but for{" "}
        <Link
          href="https://iina.io/"
          target="_blank"
          className="text-primary hover:text-primary/80 underline underline-offset-2"
        >
          IINA
        </Link>{" "}
        — the only macOS video player worth running. Bind every common
        audio/video UTI to <code className="text-primary">com.colliderli.iina</code>{" "}
        so QuickTime and Music stop hijacking your double-clicks:
      </p>
      <pre className="bg-muted/50 border border-border rounded-lg p-3 sm:p-4 my-4 sm:my-6 overflow-x-auto text-xs">
        <code>{`IINA=com.colliderli.iina

# --- Video UTIs ---
for uti in \\
  public.movie public.video public.audiovisual-content \\
  public.mpeg-4 public.mpeg public.mpeg-2-video \\
  public.avi public.3gpp public.3gpp2 \\
  com.apple.quicktime-movie com.apple.m4v-video \\
  com.microsoft.windows-media-wmv com.microsoft.advanced-systems-format \\
  org.webmproject.webm public.flc-animation; do
  duti -s "$IINA" "$uti" all
done

# --- Audio UTIs ---
for uti in \\
  public.audio public.mp3 public.mpeg-4-audio public.aac-audio \\
  public.aifc-audio public.aiff-audio \\
  com.apple.m4a-audio com.apple.coreaudio-format \\
  com.microsoft.waveform-audio \\
  org.xiph.flac org.xiph.ogg-audio com.real.realaudio; do
  duti -s "$IINA" "$uti" all
done

# --- Extension fallbacks for formats with non-canonical UTIs ---
# (.ts is deliberately left out: it's TypeScript far more often than MPEG-TS video)
for ext in mkv opus webm flac ogg m2ts mts mxf wv ape \\
           rm rmvb ra asf vob flv f4v divx dv mp2 m3u m3u8; do
  duti -s "$IINA" "$ext" all
done

# Force-register IINA so LaunchServices knows its claims
/System/Library/Frameworks/CoreServices.framework/Frameworks/LaunchServices.framework/Support/lsregister -f "/Applications/IINA.app"
killall Finder`}</code>
      </pre>
      <p>
        Verify with <code className="text-primary">duti -x mp4</code>,{" "}
        <code className="text-primary">duti -x mkv</code>,{" "}
        <code className="text-primary">duti -x mp3</code> — all three should
        print <Highlight>IINA</Highlight>.
      </p>
      <InfoBox>
        <p className="text-sm">
          <strong>Gotchas:</strong> A few obscure formats (
          <code className="text-primary">tak, amv, xvid</code>) have no
          registered UTI on macOS and will fail silently — ignore them.{" "}
          <code className="text-primary">.pls</code> playlists are aggressively
          claimed by Apple Music and IINA doesn't even declare them; not worth
          fighting since you'll likely never see one. Everything that matters
          (<code className="text-primary">mp4 / mov / mkv / webm / mp3 / m4a /
          flac / opus / wav</code>) sticks permanently.
        </p>
      </InfoBox>

      <p>Same trick for PDFs, pointing them at PDF Gear:</p>
      <CommandBox>
        <code className="text-xs sm:text-sm block text-primary break-all">
          duti -s com.pdfeditor.pdfeditormac com.adobe.pdf all
        </code>
      </CommandBox>

      <h4 className="text-base sm:text-lg">
        Make VS Code the Default for Text & Code
      </h4>
      <p>
        Out of the box, macOS scatters text files everywhere: Markdown into
        whatever ebook app claimed it, JSON into the browser, CSV into ChatGPT,{" "}
        <code className="text-primary">.ts</code> into a video player. One pass
        fixes it, and routes Word docs to LibreOffice while we're at it:
      </p>
      <pre className="bg-muted/50 border border-border rounded-lg p-3 sm:p-4 my-4 sm:my-6 overflow-x-auto text-xs">
        <code>{`VSCODE=com.microsoft.VSCode

# --- Text, code, config, and data UTIs ---
for uti in public.plain-text public.source-code public.script public.shell-script \\
  public.json public.xml public.yaml public.comma-separated-values-text \\
  net.daringfireball.markdown com.apple.property-list com.apple.log; do
  duti -s "$VSCODE" "$uti" all
done

# --- Extensions macOS knows ---
for ext in md markdown txt log json yaml yml xml plist csv tsv \\
           js mjs ts py sh zsh bash swift c h cpp hpp java rb php css svg; do
  duti -s "$VSCODE" "$ext" all
done

# --- Word-processor docs -> LibreOffice (sheets and slides already go there) ---
for ext in docx doc rtf odt; do
  duti -s org.libreoffice.script "$ext" all
done`}</code>
      </pre>
      <p>
        Extensions no app registers a proper type for (
        <code className="text-primary">tsx, jsx, go, rs, toml, scss, sql, env</code>
        , …) make <code className="text-primary">duti</code> fail with{" "}
        <code className="text-primary">error -50</code>. Write those the way
        Finder's "Change All" does, as extension handlers, then restart
        LaunchServices so it reloads them instead of saving over them:
      </p>
      <pre className="bg-muted/50 border border-border rounded-lg p-3 sm:p-4 my-4 sm:my-6 overflow-x-auto text-xs">
        <code>{`D=com.apple.LaunchServices/com.apple.launchservices.secure
defaults export $D /tmp/ls.plist

python3 - <<'EOF'
import plistlib
p = "/tmp/ls.plist"
d = plistlib.load(open(p, "rb"))
exts = ("mdx jsonc toml cjs tsx jsx go rs kt lua scss sass less env ini conf cfg "
        "sql graphql vue svelte astro lock").split()
hs = [h for h in d.get("LSHandlers", []) if h.get("LSHandlerContentTag") not in exts]
hs += [{"LSHandlerContentTag": e,
        "LSHandlerContentTagClass": "public.filename-extension",
        "LSHandlerRoleAll": "com.microsoft.vscode",
        "LSHandlerPreferredVersions": {"LSHandlerRoleAll": "-"}} for e in exts]
d["LSHandlers"] = hs
plistlib.dump(d, open(p, "wb"))
EOF

defaults import $D /tmp/ls.plist && killall lsd`}</code>
      </pre>
      <InfoBox>
        <p className="text-sm">
          <strong>Gotchas:</strong> Run the duti commands first, then this.
          Editing the plist without the{" "}
          <code className="text-primary">killall lsd</code> doesn't stick:
          LaunchServices keeps its own copy in memory and writes it back over
          your change. macOS may pop a confirmation for a type another app
          already owns (<code className="text-primary">.ts</code> vs IINA);
          click the VS Code option. Verify with{" "}
          <code className="text-primary">duti -x tsx</code>.
        </p>
      </InfoBox>

      <h4 className="text-base sm:text-lg">
        Remove Full Screen Shortcut Conflict
      </h4>
      <p>
        Disable ⌘⇧F full screen shortcut to avoid conflicts with code search:
      </p>
      <CommandBox>
        <code className="text-xs sm:text-sm block mb-2 text-primary">
          System Settings → Keyboard → Keyboard Shortcuts → App Shortcuts
        </code>
        <p className="text-xs sm:text-sm">
          Find "Enter Full Screen" and remove ⌘⇧F shortcut
        </p>
      </CommandBox>

      <h4 className="text-base sm:text-lg">VS Code Auto Close Tags</h4>
      <p>
        Enable automatic tag closing in VS Code for faster HTML/JSX editing:
      </p>
      <CommandBox>
        <code className="text-xs sm:text-sm block mb-2 text-primary">
          VS Code → Settings → Search "auto close tags"
        </code>
        <p className="text-xs sm:text-sm">Enable "Auto Close Tags" setting</p>
      </CommandBox>

      <h4 className="text-base sm:text-lg">VS Code Settings</h4>
      <p>
        The handful of settings I change, via Command Palette (⌘⇧P) →
        "Preferences: Open User Settings (JSON)":
      </p>

      <pre className="bg-muted/50 border border-border rounded-lg p-3 sm:p-4 my-4 sm:my-6 overflow-x-auto text-xs">
        <code>{`{
  // File tree on the right, so opening it doesn't shift the code
  "workbench.sideBar.location": "right",

  // Never lose work to a forgotten save
  "files.autoSave": "afterDelay",

  // Claude Code lives in the bottom panel instead of a sidebar
  "claudeCode.preferredLocation": "panel",

  // Use Homebrew's Python by default
  "python.defaultInterpreterPath": "/opt/homebrew/bin/python3"
}`}</code>
      </pre>

      <div className="my-6 sm:my-8 border-b border-border" />

      <h3 className="text-primary text-xl sm:text-2xl">Shortcuts to Live By</h3>

      <p>
        These keyboard shortcuts will <Highlight>save you time</Highlight>:
      </p>

      <h4 className="text-base sm:text-lg">VS Code / Cursor Shortcuts</h4>

      <ul className="list-none text-xs sm:text-sm text-center">
        <li>
          <strong>⌘ + ←</strong> Collapse all folders in file explorer
        </li>
      </ul>
    </div>
  );
}
