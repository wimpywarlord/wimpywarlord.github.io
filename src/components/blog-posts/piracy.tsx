"use client";
/* eslint-disable react/no-unescaped-entities */

export function Piracy() {
  return (
    <div className="prose prose-sm sm:prose-base lg:prose-lg max-w-none">
      <h2 className="text-primary">Display Technology: The Visual Interface</h2>
      <p>
        How we see digital content is defined by the interface between light and
        our eyes. Here's how modern display technologies work:
      </p>

      <h3 className="text-primary/80">LED, Mini LED & QLED</h3>
      <p>
        These are all variations of the same concept: shine light through an LCD
        layer of pixels which have color to make an image.
      </p>
      <ul className="space-y-2">
        <li>
          <strong>LED</strong> — Has a few dozen light emitting diodes behind
          the picture layer, letting the TV darken and brighten zones for better
          contrast.
        </li>
        <li>
          <strong>Mini LED</strong> — Hundreds or even thousands of LEDs, so the
          number of zones is much higher, giving even better contrast.
        </li>
        <li>
          <strong>QLED</strong> — Uses quantum dots, basically a fancy science
          pigment, to make really vibrant colors. Think like how blacklight
          stuff works, but without the blacklight.
        </li>
      </ul>

      <h3 className="text-primary/80">OLED</h3>
      <p>
        OLED pixels glow colors all by themselves—they don't need any LEDs
        behind them. This means effectively infinite contrast because an OLED
        pixel that is black is completely off, while an LED pixel that is black
        is just blocking most (but not all) of the light trying to pass through
        it. More contrast means a better looking picture.
      </p>

      <h3 className="text-primary/80">Micro LED: The Best of All</h3>
      <p>
        Micro LED uses regular LEDs which are very bright and colorful, but they
        are very very tiny—so you can use three of them to make a pixel without
        an LCD layer to create the color. This gives you the bright image of an
        LED display, with the vibrant color of quantum dots, and the infinite
        contrast of OLED. Currently very expensive, and might be a while before
        it's affordable because OLED keeps getting better.
      </p>

      <h2 className="text-primary">Free Streaming: Stremio + Torrentio + Real Debrid</h2>
      <p>
        The holy trinity of free streaming. Works on smart TVs, Fire Sticks, or
        any platform with a Stremio client. Real Debrid is optional but
        recommended — it routes through a server instead of peer-to-peer, so
        your IP stays private and streams are faster.
      </p>

      <details className="group border border-border rounded-lg p-3 sm:p-4 mb-3">
        <summary className="cursor-pointer font-semibold text-primary list-none flex items-center justify-between">
          <span>Step 1: Install Stremio</span>
          <span className="text-xs text-muted-foreground group-open:rotate-90 transition-transform">&#9654;</span>
        </summary>
        <ol className="mt-3 space-y-2 pl-4">
          <li>
            Go to{" "}
            <a
              href="https://www.stremio.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
              tabIndex={0}
              aria-label="Stremio website"
            >
              stremio.com
            </a>
          </li>
          <li>Download the client for your platform (Windows/Mac/Linux)</li>
          <li>Open Stremio and sign up with email or Facebook</li>
        </ol>
      </details>

      <details className="group border border-border rounded-lg p-3 sm:p-4 mb-3">
        <summary className="cursor-pointer font-semibold text-primary list-none flex items-center justify-between">
          <span>Step 2: Set Up Real Debrid (Optional but Recommended)</span>
          <span className="text-xs text-muted-foreground group-open:rotate-90 transition-transform">&#9654;</span>
        </summary>
        <ol className="mt-3 space-y-2 pl-4">
          <li>
            Go to{" "}
            <a
              href="http://real-debrid.com/?id=7913336"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
              tabIndex={0}
              aria-label="Real Debrid website (referral link)"
            >
              real-debrid.com
            </a>{" "}
            <span className="text-xs text-muted-foreground">(referral link)</span>
          </li>
          <li>Sign up for an account</li>
          <li>Go to <strong>Premium Offers</strong> and choose a package</li>
          <li>
            Go to the{" "}
            <a
              href="https://real-debrid.com/apitoken"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
              tabIndex={0}
              aria-label="Real Debrid API token page"
            >
              API token page
            </a>{" "}
            and copy your API key
          </li>
        </ol>
      </details>

      <details className="group border border-border rounded-lg p-3 sm:p-4 mb-3">
        <summary className="cursor-pointer font-semibold text-primary list-none flex items-center justify-between">
          <span>Step 3: Install Torrentio Addon</span>
          <span className="text-xs text-muted-foreground group-open:rotate-90 transition-transform">&#9654;</span>
        </summary>
        <ol className="mt-3 space-y-2 pl-4">
          <li>
            Go to{" "}
            <a
              href="https://torrentio.strem.fun/configure"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
              tabIndex={0}
              aria-label="Torrentio configuration page"
            >
              torrentio.strem.fun/configure
            </a>
          </li>
          <li>Choose your options for providers, quality, foreign language etc.</li>
          <li>
            If using Real Debrid, paste your API key under{" "}
            <strong>RealDebrid API Key</strong>
          </li>
          <li>
            You can also install without a Debrid provider — it works, but your
            IP will be visible in peer-to-peer and speeds may vary
          </li>
          <li>Click <strong>Install</strong></li>
        </ol>
      </details>

      <details className="group border border-border rounded-lg p-3 sm:p-4 mb-3">
        <summary className="cursor-pointer font-semibold text-primary list-none flex items-center justify-between">
          <span>Step 4: Start Streaming</span>
          <span className="text-xs text-muted-foreground group-open:rotate-90 transition-transform">&#9654;</span>
        </summary>
        <ol className="mt-3 space-y-2 pl-4">
          <li>
            Verify the addon: click the puzzle piece icon (top right) &rarr;{" "}
            <strong>My Addons</strong> &rarr; scroll to find Torrentio
          </li>
          <li>
            Go to <strong>Discover</strong>, click on any movie or TV show
          </li>
          <li>
            You should see streams labeled{" "}
            <strong>[RD+] Torrentio - Quality</strong>
          </li>
          <li>Pick a stream and enjoy</li>
        </ol>
        <p className="mt-3 text-xs text-muted-foreground italic">
          2025 Inflation update — added referral code to Real Debrid link
        </p>
      </details>

      <h2 className="text-primary">E-Readers & Digital Reading</h2>

      <h3 className="text-primary/80">KOReader AI Assistant Plugin</h3>
      <p>
        An AI helper plugin for KOReader that lets you interact with language
        models (Claude, GPT-4, Gemini, DeepSeek, Ollama etc.) while reading.
        Look up words, get summaries, ask questions about your book — all
        without leaving the reader.
      </p>
      <ul className="space-y-2">
        <li>
          <a
            href="https://github.com/omer-faruq/assistant.koplugin"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
            tabIndex={0}
            aria-label="KOReader AI Assistant Plugin on GitHub"
          >
            assistant.koplugin — GitHub
          </a>
        </li>
      </ul>

      <h3 className="text-primary/80">Kindle Jailbreaking</h3>
      <p>
        Jailbreaking a Kindle opens up KOReader, custom fonts, better PDF
        rendering, and full control over your device.
      </p>
      <ul className="space-y-2">
        <li>
          <a
            href="https://kindlemodding.org/jailbreaking/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
            tabIndex={0}
            aria-label="Kindle Jailbreaking Guide"
          >
            kindlemodding.org — Jailbreaking Guide
          </a>
        </li>
        <li>
          <a
            href="https://www.mobileread.com/forums/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
            tabIndex={0}
            aria-label="MobileRead Forums"
          >
            MobileRead Forums — E-Reader Community
          </a>
        </li>
      </ul>

      <h3 className="text-primary/80">Resolution: SD, HD, UHD</h3>
      <p>
        These describe how many pixels are in the image. More pixels means more
        detail:
      </p>
      <ul className="space-y-2">
        <li>
          <strong>SD</strong> — Like a DVD. Looks okay on a 32" screen, but not
          so good on a 55".
        </li>
        <li>
          <strong>HD</strong> — Basically 4x DVD pixels. Looks nice and sharp on
          a 55" TV, but maybe a little soft on an 85".
        </li>
        <li>
          <strong>UHD (4K)</strong> — 4x more pixels again. Looks good on even
          very big screens—movie theaters are currently 4K resolution.
        </li>
        <li>
          <strong>8K</strong> — Exists, but there's not really any content for
          it yet.
        </li>
      </ul>
    </div>
  );
}
