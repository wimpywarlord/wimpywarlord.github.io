"use client";
/* eslint-disable react/no-unescaped-entities */

import Link from "next/link";
import { Card } from "@/components/ui/card";
import { GalleryVideo, GalleryImage } from "@/components/gallery";

// Helper component for text highlighting
const Highlight = ({ children }: { children: React.ReactNode }) => {
  return <span className="text-primary font-semibold">{children}</span>;
};

export function CrackedReactDev() {
  return (
    <div className="prose prose-sm sm:prose-base lg:prose-lg max-w-none">
      <p>
        Want to become an absolute <Highlight>beast</Highlight> at React
        development? This is my curated collection of tools, workflows, and
        resources that&apos;ll transform you from a regular dev into a{" "}
        <Highlight>cracked</Highlight> one.
      </p>

      <div className="my-8 border-b border-border" />

      <h2 className="text-primary">Cursor Workflows</h2>
      <p>
        Master the art of building beautiful UIs with Cursor AI. These tutorials
        will show you how to leverage AI to 10x your development speed.
      </p>

      <ul className="space-y-2">
        <li>
          <Link
            href="https://m.youtube.com/watch?v=djDZHAi75dk&pp=0gcJCfwAo7VqN5tD"
            target="_blank"
            className="text-primary hover:text-primary/80 underline underline-offset-2"
          >
            How to make beautiful UI with Cursor
          </Link>
          {" - Essential techniques"}
        </li>
        <li>
          <Link
            href="https://www.youtube.com/watch?v=U1_nzjWUpL4"
            target="_blank"
            className="text-primary hover:text-primary/80 underline underline-offset-2"
          >
            Advanced Cursor Workflows
          </Link>
          {" - Next-level productivity"}
        </li>
        <li>
          <Link
            href="https://youtu.be/OwgRJStlrQQ?si=hial_OMFD-0ZEKI4"
            target="_blank"
            className="text-primary hover:text-primary/80 underline underline-offset-2"
          >
            Figma MCP for Cursor
          </Link>
          {" - Design to code workflow"}
        </li>
      </ul>

      <div className="my-8 border-b border-border" />

      <h2 className="text-primary">Design Resources</h2>

      <h3>Design Systems Theory</h3>
      <p>Learn the principles behind great design systems:</p>
      <ul className="space-y-2">
        <li>
          <Link
            href="https://designsystems.surf"
            target="_blank"
            className="text-primary hover:text-primary/80 underline underline-offset-2"
          >
            Design Systems Surf
          </Link>
          {" - Comprehensive design systems resource"}
        </li>
      </ul>

      <h3>Website Backgrounds</h3>
      <p>
        Creating stunning backgrounds is crucial for that{" "}
        <Highlight>polished</Highlight> look:
      </p>
      <ul className="space-y-2">
        <li>
          <Link
            href="https://patterncraft.fun/"
            target="_blank"
            className="text-primary hover:text-primary/80 underline underline-offset-2"
          >
            PatternCraft
          </Link>
          {" - Beautiful patterns for modern web design"}
        </li>
        <li>
          <Link
            href="https://photogradient.com/"
            target="_blank"
            className="text-primary hover:text-primary/80 underline underline-offset-2"
          >
            PhotoGradient
          </Link>
          {" - Gorgeous gradient backgrounds"}
        </li>
        <li>
          <Link
            href="https://ascii.0xbalance.xyz/"
            target="_blank"
            className="text-primary hover:text-primary/80 underline underline-offset-2"
          >
            ASCII Patterns
          </Link>
          {" - Dynamic ASCII patterns for unique backgrounds"}
        </li>
      </ul>

      <h3>Thumbnail & Visual Tools</h3>
      <p>Create eye-catching thumbnails and visuals:</p>
      <ul className="space-y-2">
        <li>
          <Link
            href="https://x.com/adityaships/status/1960187782414098892?s=46"
            target="_blank"
            className="text-primary hover:text-primary/80 underline underline-offset-2"
          >
            Text Between Background & Subject Tool
          </Link>
          {" - Perfect for thumbnail text layering"}
        </li>
        <li>
          <Link
            href="https://dither.floriankiem.com/"
            target="_blank"
            className="text-primary hover:text-primary/80 underline underline-offset-2"
          >
            Dither Plugin
          </Link>
          {
            " - The easiest way to add dither effects on the web. The dither plugin for TailwindCSS is adding a dither effect to your elements by using simple CSS filters. The plugin is free to use and open-source."
          }
        </li>
        <li>
          <Link
            href="https://efecto.app/"
            target="_blank"
            className="text-primary hover:text-primary/80 underline underline-offset-2"
          >
            Efecto
          </Link>
          {" - ASCII dither effect generator for creating unique retro-style visuals"}
        </li>
        <li>
          <Link
            href="https://lego-pixellation.vercel.app/"
            target="_blank"
            className="text-primary hover:text-primary/80 underline underline-offset-2"
          >
            Lego Pixellation
          </Link>
          {" - Convert images into legofied versions with pixel art aesthetic ("}
          <Link
            href="https://github.com/rock-biter/lego-pixellation"
            target="_blank"
            className="text-primary hover:text-primary/80 underline underline-offset-2"
          >
            GitHub
          </Link>
          {", "}
          <Link
            href="https://x.com/__rockbiter/status/1984919825072664586"
            target="_blank"
            className="text-primary hover:text-primary/80 underline underline-offset-2"
          >
            Tweet
          </Link>
          {")"}
        </li>
        <li>
          <Link
            href="https://cmyk.danielpetho.com/"
            target="_blank"
            className="text-primary hover:text-primary/80 underline underline-offset-2"
          >
            CMYK Emulator
          </Link>
          {
            " - Web-based CMYK print emulator with pre-filter settings, blur, antialiasing, and MP4 recording (works on mobile too)"
          }
        </li>
        <li>
          <Link
            href="https://postspark.app/templates"
            target="_blank"
            className="text-primary hover:text-primary/80 underline underline-offset-2"
          >
            PostSpark
          </Link>
          {
            " - Quickly create eye-catching screenshot mockups for social media with customizable templates"
          }
        </li>
        <li>
          <Link
            href="https://app.bigforge.net/"
            target="_blank"
            className="text-primary hover:text-primary/80 underline underline-offset-2"
          >
            BigForge
          </Link>
          {" - Photoshop for making memes"}
        </li>
      </ul>

      <h3>Component Libraries</h3>
      <p>
        Why reinvent the wheel? Use these <Highlight>premium</Highlight>{" "}
        component libraries:
      </p>
      <ul className="space-y-2">
        <li>
          <Link
            href="https://www.fancycomponents.dev/"
            target="_blank"
            className="text-primary hover:text-primary/80 underline underline-offset-2"
          >
            Fancy Components
          </Link>
          {
            " - Growing library of ready-to-use React components & microinteractions. Free & open source"
          }
        </li>
        <li>
          <Link
            href="https://21st.dev/home"
            target="_blank"
            className="text-primary hover:text-primary/80 underline underline-offset-2"
          >
            21st Demo
          </Link>
          {" - Modern component showcase"}
        </li>
        <li>
          <Link
            href="https://www.shadcnui-blocks.com/components/avatar"
            target="_blank"
            className="text-primary hover:text-primary/80 underline underline-offset-2"
          >
            Shadcn UI Blocks
          </Link>
          {" - Production-ready components"}
        </li>
        <li>
          <Link
            href="https://reactbits.dev/text-animations/falling-text"
            target="_blank"
            className="text-primary hover:text-primary/80 underline underline-offset-2"
          >
            React Bits
          </Link>
          {" - Stunning text animations and effects"}
        </li>
        <li>
          <Link
            href="https://animejs.com/"
            target="_blank"
            className="text-primary hover:text-primary/80 underline underline-offset-2"
          >
            Anime.js
          </Link>
          {
            " - Powerful JavaScript animation library for creating smooth, complex animations"
          }
        </li>
      </ul>

      <h3>Shadcn UI Extension Libraries</h3>
      <p>
        If you use Shadcn UI, these libraries will{" "}
        <Highlight>supercharge</Highlight> your component toolkit:
      </p>
      <ul className="space-y-2">
        <li>
          <Link
            href="https://kokonutui.com"
            target="_blank"
            className="text-primary hover:text-primary/80 underline underline-offset-2"
          >
            Kokonut UI
          </Link>
          {" - Beautiful Shadcn-compatible components"}
        </li>
        <li>
          <Link
            href="https://cult-ui.com"
            target="_blank"
            className="text-primary hover:text-primary/80 underline underline-offset-2"
          >
            Cult UI
          </Link>
          {" - Stunning UI components for modern apps"}
        </li>
        <li>
          <Link
            href="https://pro.cult-ui.com"
            target="_blank"
            className="text-primary hover:text-primary/80 underline underline-offset-2"
          >
            Cult UI Pro
          </Link>
          {" - Premium components and templates"}
        </li>
        <li>
          <Link
            href="https://tailark.com"
            target="_blank"
            className="text-primary hover:text-primary/80 underline underline-offset-2"
          >
            Tailark
          </Link>
          {" - Modern UI components with Tailwind"}
        </li>
        <li>
          <Link
            href="https://smoothui.dev"
            target="_blank"
            className="text-primary hover:text-primary/80 underline underline-offset-2"
          >
            Smooth UI
          </Link>
          {" - Sleek and smooth animated components"}
        </li>
        <li>
          <Link
            href="https://motion-primitives.com"
            target="_blank"
            className="text-primary hover:text-primary/80 underline underline-offset-2"
          >
            Motion Primitives
          </Link>
          {" - Animation primitives for React & Tailwind"}
        </li>
      </ul>

      <h3>Color & Theming</h3>
      <ul className="space-y-2">
        <li>
          <Link
            href="https://tweakcn.com/"
            target="_blank"
            className="text-primary hover:text-primary/80 underline underline-offset-2"
          >
            TweakCN
          </Link>
          {" - Shadcn color palette generator"}
        </li>
        <li>
          <Link
            href="https://colorion.co/"
            target="_blank"
            className="text-primary hover:text-primary/80 underline underline-offset-2"
          >
            Colorion
          </Link>
          {" - Color palette selection tool"}
        </li>
      </ul>

      <h3>Icons</h3>
      <p>Only two libraries you need for icons:</p>
      <ul className="space-y-2">
        <li>
          <Link
            href="https://react-icons.github.io/react-icons/search/#q=ok"
            target="_blank"
            className="text-primary hover:text-primary/80 underline underline-offset-2"
          >
            React Icons
          </Link>
          {" - Popular icon packs in a single package"}
        </li>
        <li>
          <Link
            href="https://lucide.dev/icons/"
            target="_blank"
            className="text-primary hover:text-primary/80 underline underline-offset-2"
          >
            Lucide Icons
          </Link>
          {" - Beautiful & consistent icon toolkit"}
        </li>
        <li>
          <Link
            href="https://lucide-animated.com/"
            target="_blank"
            className="text-primary hover:text-primary/80 underline underline-offset-2"
          >
            Lucide Animated
          </Link>
          {" - Beautifully crafted animated icons, open-source (MIT License)"}
        </li>
      </ul>

      <p>was looking for brand icons today</p>
      <p>
        then remembered this existed{" "}
        <Link
          href="https://svgl.app/"
          target="_blank"
          className="text-primary hover:text-primary/80 underline underline-offset-2"
        >
          https://svgl.app/
        </Link>
      </p>

      <div className="my-8 border-b border-border" />

      <h2 className="text-primary">AI Development Tools</h2>

      <h3>Claude Code Tips</h3>

      <p>
        <code className="bg-muted px-2 py-1 rounded text-sm">Ctrl+S</code> to
        stash your prompt. Send something else, then auto-restore your draft.{" "}
        <Highlight>git stash</Highlight> for prompts.
      </p>
      <div className="my-6">
        <GalleryVideo className="w-full max-w-2xl rounded-lg mx-auto">
          <source
            src="/blog/cracked_react_dev/saving_prompt.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </GalleryVideo>
      </div>

      <ul className="space-y-2">
        <li>
          <Link
            href="https://www.youtube.com/watch?v=n7iT5r0Sl_Y"
            target="_blank"
            className="text-primary hover:text-primary/80 underline underline-offset-2"
          >
            Claude Code Tips
          </Link>
          {" - Master the AI assistant"}
        </li>
        <li>
          <Link
            href="https://www.aitmpl.com/"
            target="_blank"
            className="text-primary hover:text-primary/80 underline underline-offset-2"
          >
            Claude Code Templates (aitmpl.com)
          </Link>
          {
            " - Ready-to-use configurations for Anthropic's Claude Code. A comprehensive collection of AI agents, custom commands, settings, hooks, external integrations (MCPs), and project templates to enhance your development workflow."
          }
        </li>
        <li>
          <Link
            href="https://x.com/boringmarketer/status/1993104146044797140"
            target="_blank"
            className="text-primary hover:text-primary/80 underline underline-offset-2"
          >
            Claude Code Frontend Design Skill
          </Link>
          {
            " - Install this skill for enhanced frontend design capabilities. Run: /plugin marketplace add anthropics/claude-code then /plugin install frontend-design@claude-code-plugins"
          }
        </li>
        <li>
          <Link
            href="https://www.npmjs.com/package/code-simplifier"
            target="_blank"
            className="text-primary hover:text-primary/80 underline underline-offset-2"
          >
            Code Simplifier Agent
          </Link>
          {
            " - Open sourced by the Claude Code team. Use at the end of long coding sessions or to clean up complex PRs. Install: claude plugin install code-simplifier (or /plugin marketplace update claude-plugins-official then /plugin install code-simplifier)"
          }
        </li>
        <li>
          <Link
            href="https://github.com/blader/humanizer"
            target="_blank"
            className="text-primary hover:text-primary/80 underline underline-offset-2"
          >
            Humanizer
          </Link>
          {
            " - A Claude Code skill that removes signs of AI-generated writing from text, making it sound more natural and human"
          }
        </li>
        <li>
          <Link
            href="https://www.remotion.dev/"
            target="_blank"
            className="text-primary hover:text-primary/80 underline underline-offset-2"
          >
            Remotion Agent Skills
          </Link>
          {" - Make videos just with Claude Code! Install: "}
          <code className="bg-muted px-2 py-1 rounded text-sm">
            npx skills add remotion-dev/skills
          </code>
          {" ("}
          <Link
            href="https://gist.github.com/JonnyBurger/5b801182176f1b76447901fbeb5a84ac"
            target="_blank"
            className="text-primary hover:text-primary/80 underline underline-offset-2"
          >
            Example
          </Link>
          {")"}
        </li>
      </ul>

      <h3>My Claude Code Settings</h3>
      <p>
        Here's my personal <Highlight>settings.json</Highlight> for Claude Code
        with useful plugins and configurations:
      </p>
      <pre className="bg-muted/50 border border-border rounded-lg p-4 my-6 overflow-x-auto">
        <code className="text-sm">
          {`{
  "permissions": {
    "allow": [
      "mcp__plugin_playwright_playwright__*",
      "Bash"
    ],
    "deny": []
  },
  "model": "opus",
  "alwaysThinkingEnabled": true,
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
  },
  "enabledPlugins": {
    "code-simplifier@claude-plugins-official": true,
    "frontend-design@claude-plugins-official": true,
    "github@claude-plugins-official": true,
    "commit-commands@claude-plugins-official": true,
    "context7@claude-plugins-official": true,
    "playwright@claude-plugins-official": true
  }
}`}
        </code>
      </pre>
      <p>
        Key features: Uses <Highlight>Opus</Highlight> model with always-on
        thinking, safe Bash permissions that block destructive commands, desktop
        notifications when tasks complete, and essential plugins for frontend
        design, GitHub, commits, documentation lookup (Context7), and browser
        automation (Playwright).
      </p>

      <div className="my-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
        <GalleryVideo className="w-full rounded-lg">
          <source
            src="/blog/cracked_react_dev/remotion_1.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </GalleryVideo>
        <GalleryVideo className="w-full rounded-lg">
          <source
            src="/blog/cracked_react_dev/remotion_2.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </GalleryVideo>
      </div>

      <h3>Spec-Based Development with Claude Code</h3>
      <p>
        My favorite way to build large features with Claude Code is{" "}
        <Highlight>spec-based</Highlight>. Start with a minimal spec or prompt
        and ask Claude to interview you using the AskUserQuestionTool. Let it
        ask about technical implementation, UI & UX, concerns, tradeoffs—but
        make sure the questions are not obvious.
      </p>
      <p>
        Be very in-depth and continue the interview until it's complete. Then
        make a <Highlight>new session</Highlight> to execute the spec. This
        separation keeps context clean and execution focused.
      </p>
      <div className="my-6">
        <GalleryImage
          src="/blog/cracked_react_dev/how_to_use_claude_code_effectively.jpg"
          alt="How to use Claude Code effectively with spec-based development"
          width={800}
          height={600}
          className="w-full max-w-2xl rounded-lg mx-auto"
        />
      </div>

      <h3>Browser Automation</h3>
      <ul className="space-y-2">
        <li>
          <Link
            href="https://stagewise.io/"
            target="_blank"
            className="text-primary hover:text-primary/80 underline underline-offset-2"
          >
            Stagewise
          </Link>
          {" - Frontend Cursor helper"}
        </li>
        <li>
          <Link
            href="https://browsermcp.io/"
            target="_blank"
            className="text-primary hover:text-primary/80 underline underline-offset-2"
          >
            Browser MCP
          </Link>
          {" - Browser automation toolkit"}
        </li>
        <li>
          <Link
            href="https://www.react-grab.com/"
            target="_blank"
            className="text-primary hover:text-primary/80 underline underline-offset-2"
          >
            React Grab
          </Link>
          {
            " - Select elements and copy context (HTML, React component, file source). Makes Cursor, Claude Code, Copilot run up to 55% faster"
          }
        </li>
      </ul>

      <h3>AI Image Generation</h3>
      <p>
        Generate stunning visuals with <Highlight>AI-powered</Highlight> image
        generation tools:
      </p>
      <ul className="space-y-2">
        <li>
          <Link
            href="https://www.comfy.org/"
            target="_blank"
            className="text-primary hover:text-primary/80 underline underline-offset-2"
          >
            ComfyUI
          </Link>
          {" - Powerful and modular Stable Diffusion GUI and backend"}
        </li>
        <li>
          <Link
            href="https://www.youtube.com/watch?v=g74Cq9Ip2ik"
            target="_blank"
            className="text-primary hover:text-primary/80 underline underline-offset-2"
          >
            ComfyUI Tutorial
          </Link>
          {" - Learn how to use ComfyUI effectively"}
        </li>
      </ul>

      <div className="my-8 border-b border-border" />

      <h2 className="text-primary">Knowledge Management</h2>

      <h3>Obsidian - Your Second Brain</h3>
      <p>
        Every cracked dev needs a <Highlight>second brain</Highlight> to store
        knowledge:
      </p>
      <ul className="space-y-2">
        <li>
          <Link
            href="https://www.youtube.com/watch?v=dfbT9_kww4U"
            target="_blank"
            className="text-primary hover:text-primary/80 underline underline-offset-2"
          >
            Building the Second Brain
          </Link>
          {" - Complete guide"}
        </li>
        <li>
          <Link
            href="https://www.youtube.com/watch?v=QgbLb6QCK88&list=PL3NaIVgSlAVLHty1-NuvPa9V0b0UwbzBd&index=1"
            target="_blank"
            className="text-primary hover:text-primary/80 underline underline-offset-2"
          >
            Obsidian Basics
          </Link>
          {" - Get started"}
        </li>
      </ul>

      <div className="my-8 border-b border-border" />

      <h2 className="text-primary">Dev Workflow Optimization</h2>

      <h3>Developer Utilities</h3>
      <ul className="space-y-2">
        <li>
          <Link
            href="https://github.com/productdevbook/port-killer"
            target="_blank"
            className="text-primary hover:text-primary/80 underline underline-offset-2"
          >
            Port Killer
          </Link>
          {" - Native macOS app for finding and killing processes on open ports. Perfect for developers"}
        </li>
        <li>
          <Link
            href="https://github.com/tw93/Mole"
            target="_blank"
            className="text-primary hover:text-primary/80 underline underline-offset-2"
          >
            Mole
          </Link>
          {" - Deep clean and optimize your Mac. Install via: brew install tw93/tap/mole"}
        </li>
      </ul>

      <h3>yt-dlp Commands</h3>
      <p>
        <Link
          href="https://github.com/yt-dlp/yt-dlp"
          target="_blank"
          className="text-primary hover:text-primary/80 underline underline-offset-2"
        >
          yt-dlp
        </Link>
        {" is essential for downloading videos and audio from YouTube and 1000+ other sites. Here are the two commands you'll use most:"}
      </p>
      <p className="mt-4 mb-2 font-semibold">Download as MP4 (best quality video):</p>
      <pre className="bg-muted/50 border border-border rounded-lg p-4 my-2 overflow-x-auto">
        <code className="text-sm">
          {`yt-dlp -f "bestvideo[ext=mp4]+bestaudio[ext=m4a]/best[ext=mp4]/best" <URL>`}
        </code>
      </pre>
      <p className="mt-4 mb-2 font-semibold">Download as MP3 (audio only):</p>
      <pre className="bg-muted/50 border border-border rounded-lg p-4 my-2 overflow-x-auto">
        <code className="text-sm">
          {`yt-dlp -x --audio-format mp3 <URL>`}
        </code>
      </pre>

      <h3>The Primeagen Way</h3>
      <p>
        Learn from one of the most <Highlight>efficient</Highlight> developers
        in the game:
      </p>
      <ul className="space-y-2">
        <li>
          <Link
            href="https://youtu.be/bdumjiHabhQ"
            target="_blank"
            className="text-primary hover:text-primary/80 underline underline-offset-2"
          >
            Primeagen Dev Workflow
          </Link>
          {" - Speed is everything"}
        </li>
        <li>
          <Link
            href="https://www.youtube.com/watch?v=CbQGeaa8XrQ"
            target="_blank"
            className="text-primary hover:text-primary/80 underline underline-offset-2"
          >
            NVIM Guide
          </Link>
          {" - Master the editor"}
        </li>
      </ul>

      <div className="my-8 border-b border-border" />

      <h2 className="text-primary">Startup Quick Setup</h2>
      <p>
        Need to ship <Highlight>FAST</Highlight>? These are premium resources:
      </p>

      <ul className="space-y-2 mb-6">
        <li>
          <Link
            href="https://www.aura.build/"
            target="_blank"
            className="text-primary hover:text-primary/80 underline underline-offset-2"
          >
            Aura
          </Link>
          {" - Like Replit or Lovable, but specifically for beautiful landing pages. Ship stunning pages fast."}
        </li>
      </ul>

      <Card className="bg-muted/50 p-4 my-6">
        <h4 className="text-primary text-sm uppercase tracking-wider font-semibold mb-3">
          Paid Resources
        </h4>
        <ul className="space-y-2">
          <li>
            <Link
              href="https://pro.magicui.design/?ref=muhammadadil"
              target="_blank"
              className="text-primary hover:text-primary/80 underline underline-offset-2"
            >
              Magic UI Pro
            </Link>
            {" - Beautiful component library"}
          </li>
          <li>
            <Link
              href="https://pro.alignui.com/blocks"
              target="_blank"
              className="text-primary hover:text-primary/80 underline underline-offset-2"
            >
              Align UI Pro
            </Link>
            {" - Production-ready blocks"}
          </li>
          <li>
            <Link
              href="https://bentogrids.com/"
              target="_blank"
              className="text-primary hover:text-primary/80 underline underline-offset-2"
            >
              Bento Grids
            </Link>
            {" - Modern grid layouts"}
          </li>
          <li>
            <Link
              href="https://reactbits.dev/text-animations/text-trail"
              target="_blank"
              className="text-primary hover:text-primary/80 underline underline-offset-2"
            >
              React Bits Pro
            </Link>
            {" - Premium animations"}
          </li>
        </ul>
      </Card>

      <div className="my-8 border-b border-border" />

      <h2 className="text-primary">Tips & Tricks</h2>

      <h3>DevTools: Inspect Disappearing Elements</h3>
      <p>
        Ever struggled to inspect tooltips or dropdowns that disappear when you
        move your mouse? Here's a <Highlight>pro tip</Highlight> from{" "}
        <Link
          href="https://x.com/kamrify/status/1951884835951202500"
          target="_blank"
          className="text-primary hover:text-primary/80 underline underline-offset-2"
        >
          @kamrify
        </Link>
        :
      </p>

      <div className="my-6">
        <GalleryVideo className="w-full max-w-2xl rounded-lg mx-auto">
          <source
            src="/blog/cracked_react_dev/devtools-inspect-disappearing-elements.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </GalleryVideo>
      </div>

      <p>
        Use the <Highlight>DevTools debugger</Highlight> to freeze the page:
      </p>
      <ul className="space-y-2">
        <li>Open DevTools Console</li>
        <li>Trigger the element you want to inspect</li>
        <li>
          While it's visible, run:{" "}
          <code className="bg-muted px-2 py-1 rounded text-sm">
            {`setTimeout(() => {debugger}, 3000)`}
          </code>
        </li>
        <li>
          You now have 3 seconds to position your cursor before the page freezes
        </li>
        <li>Inspect the element at your leisure!</li>
      </ul>

      <div className="my-8 border-b border-border" />

      <h3>Design System Prompt</h3>
      <p>Use this prompt to extract design systems from any website:</p>

      <pre className="bg-muted/50 border border-border rounded-lg p-4 my-6 overflow-x-auto">
        <code className="text-sm">
          {`Create a JSON profile design system that extracts visual data from
these screenshots so that I can use the JSON output in Cursor to
give it context on how to replicate such design systems in a
consistent style. Avoid including the contents of the specific
images. The output should include the design style, the structure
and anything that'll help an AI replicate such designs.`}
        </code>
      </pre>

      <h3>Meta Tags & SEO</h3>
      <ul className="space-y-2">
        <li>
          <Link
            href="https://metatags.io/?url=https://kshitijdhyani.com/GradBro/"
            target="_blank"
            className="text-primary hover:text-primary/80 underline underline-offset-2"
          >
            Meta Tags Generator
          </Link>
          {" - Preview and optimize your meta tags"}
        </li>
        <li>
          <Link
            href="https://seotest.me/"
            target="_blank"
            className="text-primary hover:text-primary/80 underline underline-offset-2"
          >
            SEO Test
          </Link>
          {" - Comprehensive SEO analysis tool"}
        </li>
        <li>
          <Link
            href="https://favicon.io/"
            target="_blank"
            className="text-primary hover:text-primary/80 underline underline-offset-2"
          >
            Favicon.io
          </Link>
          {" - Quick and easy favicon generator for your website"}
        </li>
      </ul>

      <h3>Performance Optimization</h3>
      <ul className="space-y-2">
        <li>
          <Link
            href="https://x.com/brenolasserre/status/1956290374881693745?s=46"
            target="_blank"
            className="text-primary hover:text-primary/80 underline underline-offset-2"
          >
            Reducing Image Load Size
          </Link>
          {" - Crucial for performance"}
        </li>
        <li>
          <Link
            href="https://squoosh.app/"
            target="_blank"
            className="text-primary hover:text-primary/80 underline underline-offset-2"
          >
            Squoosh
          </Link>
          {" - Google's powerful image compression tool with various codecs"}
        </li>
        <li>
          <Link
            href="https://clarityai.co/"
            target="_blank"
            className="text-primary hover:text-primary/80 underline underline-offset-2"
          >
            Clarity AI
          </Link>
          {" - Upscale and enhance your images with AI Magic"}
        </li>
      </ul>

      <h3>CSS Typography Tip</h3>
      <p>
        Improve text readability and avoid awkward single words on the last
        line:
      </p>
      <pre className="bg-muted/50 border border-border rounded-lg p-4 my-6 overflow-x-auto">
        <code className="text-sm">
          {`text-wrap: pretty;`}
        </code>
      </pre>
      <p>
        This CSS property makes text line breaks look more natural and
        professional, especially in headings and paragraphs.
      </p>

      <div className="my-8 border-b border-border" />

      <h2 className="text-primary">Final Words</h2>
      <p>I will keep improving this resource.</p>
    </div>
  );
}
