"use client";
/* eslint-disable react/no-unescaped-entities */

import Link from "next/link";
import Image from "next/image";

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
    <div className="prose prose-sm sm:prose-base lg:prose-lg max-w-none">
      <p>
        This is my almanac for setting up a new macOS machine to my workflows.
      </p>

      <div className="my-6 sm:my-8 border-b border-border" />

      <h2 className="text-primary text-xl sm:text-2xl">Initial System Setup</h2>

      <h3 className="text-base sm:text-lg">
        Step 1: Basic macOS Configuration
      </h3>
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
          Apply Finder changes:
        </p>
        <code className="text-xs sm:text-sm block mt-2 text-primary">
          killall Finder
        </code>
      </CommandBox>

      <InfoBox>
        <p className="text-sm sm:text-base">
          <strong>What this does:</strong> The path bar shows your current
          folder location at the bottom of Finder windows, while the status bar
          displays available disk space and item counts - essential for file
          management!
        </p>
      </InfoBox>

      <div className="my-6 sm:my-8 border-b border-border" />

      <h2 className="text-primary text-xl sm:text-2xl">
        Wallpapers & Visual Setup
      </h2>

      <h3 className="text-base sm:text-lg">Desktop Wallpapers</h3>
      <p>My collection of desktop wallpapers:</p>

      <Image
        src="/blog/mac_os_setup/assets/dracula_mac_wallpaper.png"
        alt="Dracula Mac Wallpaper"
        width={1200}
        height={800}
        className="w-full rounded-lg my-3 sm:my-4"
      />
      <Image
        src="/blog/mac_os_setup/assets/Wallpaper.jpg"
        alt="Main Wallpaper"
        width={1200}
        height={800}
        className="w-full rounded-lg my-3 sm:my-4"
      />
      <Image
        src="/blog/mac_os_setup/assets/satoru-gojo-suguru-3840x2160-16373.png"
        alt="Gojo Suguru Wallpaper"
        width={1200}
        height={800}
        className="w-full rounded-lg my-3 sm:my-4"
      />

      <h3 className="text-base sm:text-lg">Twitter Banners</h3>
      <p>For your Twitter account banners and social media:</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
        <Image
          src="/blog/mac_os_setup/assets/GwUsUFvXsAEZf83.jpg"
          alt="Twitter Banner"
          width={800}
          height={600}
          className="w-full rounded-lg"
        />
        <Image
          src="/blog/mac_os_setup/assets/IMG_1514.jpeg"
          alt="Social Media Banner"
          width={800}
          height={600}
          className="w-full rounded-lg"
        />
        <Image
          src="/blog/mac_os_setup/assets/IMG_1515.png"
          alt="Alternative Banner"
          width={800}
          height={600}
          className="w-full rounded-lg"
        />
        <Image
          src="/blog/mac_os_setup/assets/IMG_1680.jpeg"
          alt="Banner Option"
          width={800}
          height={600}
          className="w-full rounded-lg"
        />
      </div>

      <h3 className="text-base sm:text-lg">Profile Pictures</h3>
      <p>For consistency across all your accounts:</p>

      <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 my-4">
        <Image
          src="/blog/mac_os_setup/assets/Group_2.png"
          alt="Profile Picture"
          width={400}
          height={400}
          className="max-w-[200px] mx-auto sm:mx-0 rounded-lg"
        />
        <Image
          src="/blog/mac_os_setup/assets/1689993698983_1.png"
          alt="Alternative Profile Picture"
          width={400}
          height={400}
          className="max-w-[200px] mx-auto sm:mx-0 rounded-lg"
        />
        <Image
          src="/blog/mac_os_setup/assets/profile.png"
          alt="Main Profile Picture"
          width={400}
          height={400}
          className="max-w-[200px] mx-auto sm:mx-0 rounded-lg"
        />
      </div>

      <div className="my-6 sm:my-8 border-b border-border" />

      <h2 className="text-primary text-xl sm:text-2xl">
        Installing Homebrew & Core Applications
      </h2>

      <h3 className="text-base sm:text-lg">Step 1: Install Homebrew</h3>
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

      <h3 className="text-base sm:text-lg">
        Step 2: Install Essential Applications
      </h3>
      <p>
        Now let's install all the applications you'll need. I've organized them
        by category with detailed explanations:
      </p>

      <h3 className="text-base sm:text-lg">One-Command Installation</h3>
      <p>Install everything at once with this single command:</p>

      <CommandBox>
        <code className="text-xs sm:text-sm block text-primary break-all">
          brew install node python tmux git uv zoxide atuin yt-dlp fzf eza \
          <br />
          --cask zen-browser superkey protonvpn notion libreoffice ghostty
          iterm2 \<br />
          bettertouchtool postman screen-studio flux forklift fork
          davinci-resolve \<br />
          discord cursor cleanshot chatgpt aldente raycast appcleaner rectangle
        </code>
      </CommandBox>

      <h4 className="text-primary text-sm sm:text-base">
        Core Command Line Tools
      </h4>

      <CommandBox>
        <code className="text-xs sm:text-sm block mb-2 text-primary">
          brew install node
        </code>
        <p className="text-xs sm:text-sm">
          <Link
            href="https://nodejs.org/"
            target="_blank"
            className="text-primary hover:text-primary/80 underline"
          >
            Node.js
          </Link>
          {" - JavaScript runtime for server-side development"}
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

      <h4 className="text-primary text-sm sm:text-base">Browsers</h4>

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
          {" - Privacy-focused browser with excellent customization"}
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

      <h4 className="text-primary text-sm sm:text-base">Development Tools</h4>

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
          brew install --cask postman
        </code>
        <p className="text-xs sm:text-sm">
          <Link
            href="https://www.postman.com/"
            target="_blank"
            className="text-primary hover:text-primary/80 underline"
          >
            Postman
          </Link>
          {
            " - API development and testing platform with collaboration features"
          }
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
          brew install --cask fork
        </code>
        <p className="text-xs sm:text-sm">
          <Link
            href="https://git-fork.com/"
            target="_blank"
            className="text-primary hover:text-primary/80 underline"
          >
            Fork
          </Link>
          {" - Beautiful Git client with intuitive interface"}
        </p>
      </CommandBox>

      <h4 className="text-primary text-sm sm:text-base">
        Productivity & System Tools
      </h4>

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
          brew install --cask raycast
        </code>
        <p className="text-xs sm:text-sm">
          <Link
            href="https://www.raycast.com/"
            target="_blank"
            className="text-primary hover:text-primary/80 underline"
          >
            Raycast
          </Link>
          {" - Blazingly fast launcher with extensions and modern interface"}
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
          brew install --cask aldente
        </code>
        <p className="text-xs sm:text-sm">
          <Link
            href="https://apphousekitchen.com/"
            target="_blank"
            className="text-primary hover:text-primary/80 underline"
          >
            AlDente
          </Link>
          {" - Battery health management to extend MacBook battery life"}
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
          brew install --cask flux
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

      <h4 className="text-primary text-sm sm:text-base">File Management</h4>

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

      <h4 className="text-primary text-sm sm:text-base">Office & Documents</h4>

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
        <p className="text-xs sm:text-sm">
          Don't forget to set up{" "}
          <Link
            href="https://www.notion.com/product/calendar"
            target="_blank"
            className="text-primary hover:text-primary/80 underline"
          >
            Notion Calendar
          </Link>
          {" and "}
          <Link
            href="https://www.notion.com/product/mail"
            target="_blank"
            className="text-primary hover:text-primary/80 underline"
          >
            Notion Mail
          </Link>
          {" for seamless integration with your workspace."}
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
          {" - excellent free PDF editor with annotation tools."}
        </p>
      </CommandBox>

      <h4 className="text-primary text-sm sm:text-base">Communication</h4>

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

      <h4 className="text-primary text-sm sm:text-base">
        Creative & Media Tools
      </h4>

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
        <code className="text-xs sm:text-sm block mb-2 text-primary">
          brew install --cask davinci-resolve
        </code>
        <p className="text-xs sm:text-sm">
          <Link
            href="https://www.blackmagicdesign.com/products/davinciresolve"
            target="_blank"
            className="text-primary hover:text-primary/80 underline"
          >
            DaVinci Resolve
          </Link>
          {" - Professional video editing and color grading"}
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

      <h4 className="text-primary text-sm sm:text-base">Media Players</h4>

      <CommandBox>
        <p className="text-xs sm:text-sm">
          For video playback, use{" "}
          <Link
            href="https://iina.io/"
            target="_blank"
            className="text-primary hover:text-primary/80 underline"
          >
            IINA
          </Link>
          {" - Modern media player designed specifically for macOS"}
        </p>
      </CommandBox>

      <CommandBox>
        <p className="text-xs sm:text-sm">
          For music, try{" "}
          <Link
            href="https://github.com/th-ch/youtube-music"
            target="_blank"
            className="text-primary hover:text-primary/80 underline"
          >
            YouTube Music Desktop
          </Link>
          {" - Unofficial YouTube Music app with additional features"}
        </p>
      </CommandBox>

      <h4 className="text-primary text-sm sm:text-base">Security & Privacy</h4>

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
          brew install --cask chatgpt
        </code>
        <p className="text-xs sm:text-sm">
          <Link
            href="https://openai.com/chatgpt/desktop"
            target="_blank"
            className="text-primary hover:text-primary/80 underline"
          >
            ChatGPT
          </Link>
          {" - Official OpenAI ChatGPT desktop app"}
        </p>
      </CommandBox>

      <div className="my-6 sm:my-8 border-b border-border" />

      <h2 className="text-primary text-xl sm:text-2xl">
        Terminal Setup with Oh My Zsh
      </h2>

      <h3 className="text-base sm:text-lg">Step 1: Install Oh My Zsh</h3>
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

      <h3 className="text-base sm:text-lg">
        Step 2: Install Powerlevel10k Theme
      </h3>
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

      <h3 className="text-base sm:text-lg">
        Step 3: Install Essential Zsh Plugins
      </h3>

      <h4 className="text-primary text-sm">zsh-autosuggestions</h4>
      <p className="text-sm">
        Suggests commands as you type based on your history:
      </p>
      <CommandBox>
        <code className="text-xs sm:text-sm block text-primary break-all">
          git clone https://github.com/zsh-users/zsh-autosuggestions.git
          $ZSH_CUSTOM/plugins/zsh-autosuggestions
        </code>
      </CommandBox>

      <h4 className="text-primary text-sm">zsh-syntax-highlighting</h4>
      <p className="text-sm">
        Provides syntax highlighting for your shell commands:
      </p>
      <CommandBox>
        <code className="text-xs sm:text-sm block text-primary break-all">
          git clone https://github.com/zsh-users/zsh-syntax-highlighting.git
          $ZSH_CUSTOM/plugins/zsh-syntax-highlighting
        </code>
      </CommandBox>

      <h4 className="text-primary text-sm">zsh-fast-syntax-highlighting</h4>
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

      <h4 className="text-primary text-sm">zsh-autocomplete</h4>
      <p className="text-sm">Real-time auto-completion as you type:</p>
      <CommandBox>
        <code className="text-xs sm:text-sm block text-primary break-all">
          git clone --depth 1 --
          https://github.com/marlonrichert/zsh-autocomplete.git
          $ZSH_CUSTOM/plugins/zsh-autocomplete
        </code>
      </CommandBox>

      <h4 className="text-primary text-sm">Enabling the Plugins</h4>
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

      <h3 className="text-base sm:text-lg">
        Step 4: Advanced Terminal Tools Setup
      </h3>

      <h4 className="text-primary text-sm">
        Initialize Shell History with Atuin
      </h4>
      <p className="text-sm">Set up magical shell history sync:</p>
      <CommandBox>
        <code className="text-xs sm:text-sm block mb-1 text-primary">
          atuin import auto
        </code>
        <p className="text-xs sm:text-sm">
          Imports your existing shell history
        </p>
      </CommandBox>

      <h4 className="text-primary text-sm">
        Configure Zoxide for Smart Navigation
      </h4>
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

      <h4 className="text-primary text-sm">Setup FZF Integration</h4>
      <p className="text-sm">Add fuzzy finding to your shell:</p>
      <CommandBox>
        <code className="text-xs sm:text-sm block mb-1 text-primary">
          $(brew --prefix)/opt/fzf/install
        </code>
        <p className="text-xs sm:text-sm">
          Enables Ctrl+R for history search and Ctrl+T for file search
        </p>
      </CommandBox>

      <h4 className="text-primary text-sm">
        macOS UI Customization (Advanced)
      </h4>
      <p className="text-sm">
        For power users who want to customize the macOS interface:
      </p>
      <ul className="space-y-2 text-sm">
        <li>
          <Link
            href="https://github.com/FelixKratz/JankyBorders"
            target="_blank"
            className="text-primary hover:text-primary/80 underline"
          >
            <strong>JankyBorders</strong>
          </Link>
          {" - Add colored borders around windows"}
        </li>
        <li>
          <Link
            href="https://github.com/FelixKratz/SketchyBar"
            target="_blank"
            className="text-primary hover:text-primary/80 underline"
          >
            <strong>SketchyBar</strong>
          </Link>
          {" - Highly customizable status bar"}
        </li>
        <li>
          <Link
            href="https://github.com/Jean-Tinland/simple-bar"
            target="_blank"
            className="text-primary hover:text-primary/80 underline"
          >
            <strong>Simple Bar</strong>
          </Link>
          {" - Alternative clean status bar"}
        </li>
        <li>
          <Link
            href="https://github.com/junegunn/fzf-git.sh"
            target="_blank"
            className="text-primary hover:text-primary/80 underline"
          >
            <strong>fzf-git</strong>
          </Link>
          {" - Enhanced Git workflows with fuzzy finding"}
        </li>
      </ul>

      <div className="my-6 sm:my-8 border-b border-border" />

      <h2 className="text-primary text-xl sm:text-2xl">iTerm2 Configuration</h2>

      <h3 className="text-base sm:text-lg">Essential iTerm2 Settings</h3>
      <p>Configure iTerm2 for the optimal terminal experience:</p>

      <h4 className="text-primary text-sm">Enable Natural Text Editing</h4>
      <CommandBox>
        <code className="text-xs sm:text-sm block text-primary">
          iTerm2 → Preferences → Profiles → Keys → Key Mappings
        </code>
        <p className="text-xs sm:text-sm mt-2">
          Set up natural text editing shortcuts for smooth cursor movement
        </p>
      </CommandBox>

      <h4 className="text-primary text-sm">Transparency and Blur Settings</h4>
      <CommandBox>
        <code className="text-xs sm:text-sm block text-primary">
          iTerm2 → Preferences → Profiles → Window
        </code>
        <p className="text-xs sm:text-sm mt-2">
          Set Transparency to <strong>26</strong> and Blur to{" "}
          <strong>32</strong> for the perfect aesthetic
        </p>
      </CommandBox>

      <h3 className="text-base sm:text-lg">
        Auto-Activate Python Virtual Environments
      </h3>
      <p>
        Add this to your <code className="text-xs sm:text-sm">~/.zshrc</code>{" "}
        for automatic virtual environment activation:
      </p>

      <pre className="bg-muted/50 border border-border rounded-lg p-3 sm:p-4 my-4 sm:my-6 overflow-x-auto text-xs">
        <code>{`# Auto-activate Python virtual environment if .env or .venv exists (no auto-deactivate)

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
export PNPM_HOME="/Users/wimpy/Library/pnpm"
case ":$PATH:" in
  *":$PNPM_HOME:"*) ;;
  *) export PATH="$PNPM_HOME:$PATH" ;;
esac
# pnpm end`}</code>
      </pre>

      <div className="my-6 sm:my-8 border-b border-border" />

      <h2 className="text-primary text-xl sm:text-2xl">
        Hyper Key Setup & Macros
      </h2>

      <h3 className="text-base sm:text-lg">Ultimate Productivity Shortcuts</h3>
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
            <strong>Hyper + ←</strong> → Act as Hyper Key
          </li>
          <li>
            <strong>Hyper + Q</strong> → Launch Zen Browser
          </li>
          <li>
            <strong>Hyper + W</strong> → Launch Cursor
          </li>
          <li>
            <strong>Hyper + E</strong> → Launch iTerm
          </li>
          <li>
            <strong>Hyper + R</strong> → Launch Notion
          </li>
          <li>
            <strong>Hyper + T</strong> → Launch WhatsApp
          </li>
          <li>
            <strong>Hyper + F</strong> → Launch Finder
          </li>
          <li>
            <strong>Hyper + D</strong> → Launch Discord
          </li>
          <li>
            <strong>Hyper + Y</strong> → Launch YouTube Music
          </li>
          <li>
            <strong>Hyper + P</strong> → Launch Postman
          </li>
          <li>
            <strong>Hyper + M</strong> → Launch MongoDB Compass
          </li>
          <li>
            <strong>Hyper + S</strong> → Launch ChatGPT
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
          efficient way to navigate your Mac!
        </p>
      </CommandBox>

      <div className="my-6 sm:my-8 border-b border-border" />

      <h2 className="text-primary text-xl sm:text-2xl">
        Development Environment Setup
      </h2>

      <h3 className="text-base sm:text-lg">Node.js & npm</h3>
      <p>Install Node Version Manager (nvm) for managing Node.js versions:</p>
      <CommandBox>
        <code className="text-xs sm:text-sm block text-primary break-all">
          curl -o-
          https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
        </code>
      </CommandBox>

      <p>Install the latest LTS Node.js:</p>
      <CommandBox>
        <code className="text-xs sm:text-sm block mb-1 text-primary">
          nvm install --lts
        </code>
        <code className="text-xs sm:text-sm block mb-1 text-primary">
          nvm use --lts
        </code>
        <code className="text-xs sm:text-sm block text-primary">
          nvm alias default node
        </code>
      </CommandBox>

      <h3 className="text-base sm:text-lg">Python Environment</h3>
      <p>Install pyenv for Python version management:</p>
      <CommandBox>
        <code className="text-xs sm:text-sm block mb-1 text-primary">
          brew install pyenv
        </code>
        <code className="text-xs sm:text-sm block mb-1 text-primary break-all">
          echo 'eval "$(pyenv init -)"' &gt;&gt; ~/.zshrc
        </code>
        <code className="text-xs sm:text-sm block text-primary">
          source ~/.zshrc
        </code>
      </CommandBox>

      <p>Install Python:</p>
      <CommandBox>
        <code className="text-xs sm:text-sm block mb-1 text-primary">
          pyenv install 3.11.0
        </code>
        <code className="text-xs sm:text-sm block text-primary">
          pyenv global 3.11.0
        </code>
      </CommandBox>

      <h3 className="text-base sm:text-lg">Git Configuration</h3>
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

      <h3 className="text-base sm:text-lg">SSH Keys for GitHub</h3>
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

      <div className="my-6 sm:my-8 border-b border-border" />

      <h2 className="text-primary text-xl sm:text-2xl">System Maintenance</h2>

      <h3 className="text-base sm:text-lg">Regular Updates</h3>
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

      <div className="my-6 sm:my-8 border-b border-border" />

      <h2 className="text-primary text-xl sm:text-2xl">
        Essential Extensions & Productivity Tools
      </h2>

      <h3 className="text-base sm:text-lg">Raycast Extensions</h3>
      <p>
        Supercharge your macOS workflow with these{" "}
        <Highlight>must-have Raycast extensions</Highlight>:
      </p>
      <ul className="space-y-1 text-sm">
        <li>
          <strong>GitHub</strong> - Search repos, issues, and PRs
        </li>
        <li>
          <strong>Linear</strong> - Task management integration
        </li>
        <li>
          <strong>Kill Process</strong> - Quickly terminate hanging processes
        </li>
        <li>
          <strong>Clipboard History</strong> - Access your clipboard history
        </li>
        <li>
          <strong>Window Management</strong> - Alternative to Rectangle
        </li>
        <li>
          <strong>Speedtest</strong> - Quick internet speed tests
        </li>
        <li>
          <strong>Color Picker</strong> - Pick colors from anywhere
        </li>
      </ul>

      <h3 className="text-base sm:text-lg">VS Code Extensions</h3>
      <p>
        These are some very useful <Highlight>VScode Extensions</Highlight>:
      </p>

      <h3>Core Productivity Extensions</h3>
      <ul className="space-y-1 text-sm">
        <li>
          <strong>All Autocomplete</strong> - Enhanced autocomplete across all
          files
        </li>
        <li>
          <strong>AutoClose Find</strong> - Automatically close find dialog when
          you stop typing
        </li>
        <li>
          <strong>Better Comments</strong> - Styled comments with alerts, todos,
          and highlights
        </li>
        <li>
          <strong>Code Spell Checker</strong> - Catch spelling errors in your
          code
        </li>
        <li>
          <strong>Color Highlighter</strong> - Highlight color values in your
          code
        </li>
        <li>
          <strong>Error Lens</strong> - See errors and warnings inline with your
          code
        </li>
        <li>
          <strong>Path Intellisense</strong> - Autocomplete for file paths
        </li>
        <li>
          <strong>Todo Highlight</strong> - Highlight TODO, FIXME comments
        </li>
      </ul>

      <h3>Theme & Icons</h3>
      <ul className="space-y-1 text-sm">
        <li>
          <strong>Dracula Theme Official</strong> - The perfect dark theme for
          long coding sessions
        </li>
        <li>
          <strong>Material Icon Theme</strong> - Beautiful file and folder icons
        </li>
      </ul>

      <h3>Git Integration</h3>
      <ul className="space-y-1 text-sm">
        <li>
          <strong>GitLens</strong> - Supercharge Git capabilities with blame
          annotations
        </li>
        <li>
          <strong>Git History</strong> - View git log, file history, and compare
          branches
        </li>
      </ul>

      <h3>Code Quality & Formatting</h3>
      <ul className="space-y-1 text-sm">
        <li>
          <strong>ESLint</strong> - JavaScript/TypeScript linting
        </li>
        <li>
          <strong>Prettier - Code Formatter</strong> - Opinionated code
          formatter
        </li>
      </ul>

      <h3>Python Development</h3>
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
          <strong>isort</strong> - Sort Python imports automatically
        </li>
      </ul>

      <h3>Web Development</h3>
      <ul className="space-y-1 text-sm">
        <li>
          <strong>Live Server</strong> - Launch local development server with
          live reload
        </li>
      </ul>

      <h3>Data & Documentation</h3>
      <ul className="space-y-1 text-sm">
        <li>
          <strong>Rainbow CSV</strong> - Highlight CSV files with colors
        </li>
        <li>
          <strong>Markdown Preview Enhanced</strong> - Enhanced markdown preview
          with math support
        </li>
      </ul>

      <div className="my-6 sm:my-8 border-b border-border" />

      <h2 className="text-primary text-xl sm:text-2xl">Final Tips & Tricks</h2>

      <h3 className="text-base sm:text-lg">Quick Look Enhancements</h3>
      <p>Enhance Quick Look (spacebar preview) with plugins:</p>
      <CommandBox>
        <code className="text-xs sm:text-sm block text-primary break-all">
          brew install --cask qlmarkdown qlstephen qlcolorcode quicklook-json
        </code>
      </CommandBox>

      <h3 className="text-base sm:text-lg">Touch ID for sudo</h3>
      <p>Enable Touch ID for sudo commands:</p>
      <CommandBox>
        <code className="text-xs sm:text-sm block mb-2 text-primary">
          sudo nano /etc/pam.d/sudo
        </code>
        <p className="text-xs sm:text-sm mb-1">Add this line at the top:</p>
        <code className="text-xs sm:text-sm block text-primary">
          auth sufficient pam_tid.so
        </code>
      </CommandBox>

      <h3 className="text-base sm:text-lg">Show Path Bar in Finder</h3>
      <CommandBox>
        <code className="text-xs sm:text-sm block text-primary">
          defaults write com.apple.finder ShowPathbar -bool true
        </code>
      </CommandBox>

      <h3 className="text-base sm:text-lg">Faster Dock Auto-Hide</h3>
      <CommandBox>
        <code className="text-xs sm:text-sm block mb-1 text-primary">
          defaults write com.apple.dock autohide-delay -float 0
        </code>
        <code className="text-xs sm:text-sm block mb-1 text-primary break-all">
          defaults write com.apple.dock autohide-time-modifier -float 0.4
        </code>
        <code className="text-xs sm:text-sm block text-primary">
          killall Dock
        </code>
      </CommandBox>

      <h3 className="text-base sm:text-lg">
        Paste Without Formatting (Essential for Cursor)
      </h3>
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
        <Image
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

      <h3 className="text-base sm:text-lg">CleanShot X Auto Copy Setup</h3>
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

      <h3 className="text-base sm:text-lg">
        Remove Full Screen Shortcut Conflict
      </h3>
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

      <h3 className="text-base sm:text-lg">VS Code Auto Close Tags</h3>
      <p>
        Enable automatic tag closing in VS Code for faster HTML/JSX editing:
      </p>
      <CommandBox>
        <code className="text-xs sm:text-sm block mb-2 text-primary">
          VS Code → Settings → Search "auto close tags"
        </code>
        <p className="text-xs sm:text-sm">Enable "Auto Close Tags" setting</p>
      </CommandBox>

      <h3 className="text-base sm:text-lg">
        VS Code Block Highlighting & Bracket Colorization
      </h3>
      <p>
        Enhanced code readability with Dracula-themed bracket colors and block
        highlighting:
      </p>
      <CommandBox>
        <p className="text-xs sm:text-sm mb-2">
          <strong>Step 1:</strong> Open Command Palette (⌘⇧P) → "Preferences:
          Open User Settings (JSON)"
        </p>
        <p className="text-xs sm:text-sm">
          <strong>Step 2:</strong> Add this configuration for perfect Dracula
          integration:
        </p>
      </CommandBox>

      <pre className="bg-muted/50 border border-border rounded-lg p-3 sm:p-4 my-4 sm:my-6 overflow-x-auto text-xs">
        <code>{`{
  // --- Block Highlighter core settings ---
  // Semi-transparent Dracula purple (#bd93f9) with ~10% alpha
  "blockHighlighter.background": [189, 147, 249, 0.10], // RGBA
  "blockHighlighter.isWholeLine": true,
  "blockHighlighter.omit": ["plain", "markdown"],

  // --- Bracket pair colorization (VS Code built-in) ---
  "editor.bracketPairColorization.enabled": true,
  "editor.guides.bracketPairs": "active",
  "editor.guides.bracketPairsHorizontal": "active",

  // --- Theme-scoped workbench colors for Dracula ---
  "workbench.colorCustomizations": {
    "[Dracula]": {
      // Keep the highlight subtle against Dracula background
      "editor.selectionHighlightBackground": "#bd93f933",
      "editor.wordHighlightBackground": "#8be9fd22",
      // Bracket highlights that echo Dracula palette
      "editorBracketHighlight.foreground1": "#bd93f9",
      "editorBracketHighlight.foreground2": "#50fa7b",
      "editorBracketHighlight.foreground3": "#ff79c6",
      "editorBracketHighlight.foreground4": "#8be9fd",
      "editorBracketHighlight.foreground5": "#ffb86c",
      "editorBracketHighlight.foreground6": "#f1fa8c",
      "editorBracketHighlight.unexpectedBracket.foreground": "#ff5555"
    }
  },

  // Optional: fine-tune token colors only when Dracula is active
  "editor.tokenColorCustomizations": {
    "[Dracula]": {
      "textMateRules": [
        {
          "scope": "punctuation.definition.block",
          "settings": { "foreground": "#bd93f9" }
        },
        {
          "scope": "punctuation.section.block",
          "settings": { "foreground": "#bd93f9" }
        }
      ]
    }
  }
}`}</code>
      </pre>

      <InfoBox>
        <p className="text-sm">
          <strong>What this does:</strong> Adds subtle purple block
          highlighting, colorized bracket pairs using Dracula colors, and
          enhanced code structure visibility while maintaining the beautiful
          Dracula aesthetic.
        </p>
      </InfoBox>

      <div className="my-6 sm:my-8 border-b border-border" />

      <h2 className="text-primary text-xl sm:text-2xl">Shortcuts to Live By</h2>

      <p>
        These keyboard shortcuts will <Highlight>save you time</Highlight>:
      </p>

      <h3 className="text-base sm:text-lg">VS Code / Cursor Shortcuts</h3>

      <ul className="list-none text-xs sm:text-sm text-center">
        <li>
          <strong>⌘ + ←</strong> Collapse all folders in file explorer
        </li>
      </ul>

      <div className="my-6 sm:my-8 border-b border-border" />

      <h2 className="text-primary text-xl sm:text-2xl">Dracula Theme Setup</h2>

      <p>
        For complete Dracula theming across all your applications, check out my
        detailed guide{" "}
        <Highlight>
          <Link href="/blog/dracula-theming">here.</Link>
        </Highlight>
      </p>

      <p>
        This guide covers theming for VS Code, iTerm2, browsers with Stylus,
        Discord, Obsidian, and more!
      </p>
    </div>
  );
}
