"use client";
/* eslint-disable react/no-unescaped-entities */

import { useState } from "react";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { GalleryVideo, GalleryImage } from "@/components/gallery";
import { Copy, Check, ChevronDown, ChevronRight } from "lucide-react";

// Helper component for text highlighting
const Highlight = ({ children }: { children: React.ReactNode }) => {
  return <span className="text-primary font-semibold">{children}</span>;
};

// Helper component for copyable text
const CopyableText = ({ text }: { text: string }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative bg-muted/50 border border-border rounded-lg p-4 my-4">
      <button
        onClick={handleCopy}
        className="absolute top-3 right-3 p-2 rounded-md hover:bg-muted transition-colors"
        aria-label={copied ? "Copied" : "Copy to clipboard"}
      >
        {copied ? (
          <Check className="h-4 w-4 text-green-500" />
        ) : (
          <Copy className="h-4 w-4 text-muted-foreground" />
        )}
      </button>
      <code className="text-sm pr-10 block">{text}</code>
    </div>
  );
};

// Toggle component for Claude Code settings
const ClaudeCodeSettingsToggle = () => {
  const [isOpen, setIsOpen] = useState(false);

  const settingsJson = `{
  "env": {
    "ANTHROPIC_DEFAULT_HAIKU_MODEL": "claude-sonnet-4-5-20250929"
  },
  "permissions": {
    "allow": [
      "mcp__plugin_playwright_playwright__*",
      "Bash(git *)",
      "Bash(npm *)",
      "Bash(pip *)",
      "Bash(pip3 *)",
      "Bash(brew *)",
      "Bash(curl *)",
      "Bash(wget *)"
    ],
    "deny": []
  },
  "model": "opus",
  "alwaysThinkingEnabled": true,
  "hooks": {
    "SessionStart": [
      {
        "hooks": [
          {
            "type": "command",
            "command": "nohup afplay /Users/dhyani/.claude/yeah-boiii-i-i-i.mp3 >/dev/null 2>&1 &"
          },
          {
            "type": "command",
            "command": "open raycast://extensions/raycast/raycast/confetti"
          }
        ]
      }
    ],
    "UserPromptSubmit": [
      {
        "hooks": [
          {
            "type": "command",
            "command": "nohup afplay /Users/dhyani/.claude/someone-is-born-age-of-empires-1.mp3 >/dev/null 2>&1 &"
          }
        ]
      }
    ],
    "Notification": [
      {
        "hooks": [
          {
            "type": "command",
            "command": "nohup afplay /Users/dhyani/.claude/pluh.mp3 >/dev/null 2>&1 &"
          }
        ]
      }
    ],
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
}`;

  return (
    <div className="my-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors"
        aria-expanded={isOpen}
        aria-label={isOpen ? "Hide settings" : "Show settings"}
      >
        {isOpen ? (
          <ChevronDown className="h-4 w-4" />
        ) : (
          <ChevronRight className="h-4 w-4" />
        )}
        {isOpen ? "Hide" : "Show"} my settings.json
      </button>
      {isOpen && (
        <pre className="bg-muted/50 border border-border rounded-lg p-4 mt-4 overflow-x-auto">
          <code className="text-sm">{settingsJson}</code>
        </pre>
      )}
    </div>
  );
};

export function CrackedReactDev() {
  return (
    <div className="prose prose-sm sm:prose-base lg:prose-lg dark:prose-invert max-w-none">
      <p>
        Want to become an absolute <Highlight>beast</Highlight> at React
        development? This is my curated collection of tools, workflows, and
        resources that&apos;ll transform you from a regular dev into a{" "}
        <Highlight>cracked</Highlight> one.
      </p>

      <div className="my-8 border-b border-border" />

      <h3 className="text-primary">Cursor Workflows</h3>
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

      <h3 className="text-primary">Design Resources</h3>

      <h4>Design Systems Theory</h4>
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
        <li>
          <Link
            href="https://www.loftlyy.com/en"
            target="_blank"
            className="text-primary hover:text-primary/80 underline underline-offset-2"
          >
            Loftlyy
          </Link>
          {" - Discover real-world brand identities. Curated database of logos, color palettes, typography, and brand guidelines from 37+ major brands"}
        </li>
      </ul>

      <h4>CSS Design Experts</h4>
      <p>
        These writers deeply understand <Highlight>CSS</Highlight> and web design at a craft level:
      </p>
      <ul className="space-y-2">
        <li>
          <Link
            href="https://www.userinterface.wiki/"
            target="_blank"
            className="text-primary hover:text-primary/80 underline underline-offset-2"
          >
            User Interface Wiki
          </Link>
          {" - Deep dives into interface design patterns and CSS techniques"}
        </li>
        <li>
          <Link
            href="https://jakub.kr/"
            target="_blank"
            className="text-primary hover:text-primary/80 underline underline-offset-2"
          >
            Jakub.kr
          </Link>
          {" - Jakub's writing on CSS, design systems, and crafting beautiful web interfaces"}
        </li>
        <li>
          <Link
            href="https://davidumoru.me/"
            target="_blank"
            className="text-primary hover:text-primary/80 underline underline-offset-2"
          >
            David Umoru
          </Link>
          {" - Clean, tasteful portfolio with great CSS craft"}
        </li>
        <li>
          <Link
            href="https://www.fuma-nama.dev/"
            target="_blank"
            className="text-primary hover:text-primary/80 underline underline-offset-2"
          >
            Fuma Nama
          </Link>
          {" - Elegant dev portfolio with polished design and smooth interactions"}
        </li>
      </ul>

      <h4>Website Backgrounds</h4>
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

      <h4>Thumbnail & Visual Tools</h4>
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
            href="https://studio.neato.fun/"
            target="_blank"
            className="text-primary hover:text-primary/80 underline underline-offset-2"
          >
            Neato Studio
          </Link>
          {" - Generative design tools for creating unique visuals, patterns, and effects"}
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
            href="https://asc11.com/"
            target="_blank"
            className="text-primary hover:text-primary/80 underline underline-offset-2"
          >
            ASC11
          </Link>
          {" - ASCII art editor that animates images, videos, and live cam. Preview with HTML and export to JS"}
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
            href="https://grainrad.com/"
            target="_blank"
            className="text-primary hover:text-primary/80 underline underline-offset-2"
          >
            GrainRad
          </Link>
          {" - ASCII art style generator for creating textured, grainy visual effects"}
        </li>
        <li>
          <Link
            href="https://yourascii.vercel.app/"
            target="_blank"
            className="text-primary hover:text-primary/80 underline underline-offset-2"
          >
            Your ASCII
          </Link>
          {" - Turn any image into ASCII art"}
        </li>
        <li>
          <Link
            href="https://fluideffects.vercel.app/"
            target="_blank"
            className="text-primary hover:text-primary/80 underline underline-offset-2"
          >
            Fluid Effects
          </Link>
          {" - Interactive fluid simulation effects for the web"}
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

      <h4>Component Libraries</h4>
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
        <li>
          <Link
            href="https://micro.bossadizenith.me/"
            target="_blank"
            className="text-primary hover:text-primary/80 underline underline-offset-2"
          >
            Micro Interactions
          </Link>
          {" - Beautiful, modern, responsive micro interactions optimized for performance and UX"}
        </li>
        <li>
          <Link
            href="https://easemaster.satisui.xyz/"
            target="_blank"
            className="text-primary hover:text-primary/80 underline underline-offset-2"
          >
            Ease Master
          </Link>
          {" - Animation easing curve visualizer and generator for JavaScript"}
        </li>
      </ul>

      <h4>Shadcn UI Extension Libraries</h4>
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

      <h4>Color & Theming</h4>
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

      <h4>Icons</h4>
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
        <li>
          <Link
            href="https://www.itshover.com/icons"
            target="_blank"
            className="text-primary hover:text-primary/80 underline underline-offset-2"
          >
            Its Hover
          </Link>
          {" - Motion-first animated icons that trigger on hover. Built with Motion.dev, works with shadcn via CLI"}
        </li>
        <li>
          <Link
            href="https://www.thiings.co/things"
            target="_blank"
            className="text-primary hover:text-primary/80 underline underline-offset-2"
          >
            Thiings
          </Link>
          {" - Massive collection of free design resources, icons, illustrations & more"}
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
        {" "}and{" "}
        <Link
          href="https://www.brandbird.app/tools/svg-company-logos"
          target="_blank"
          className="text-primary hover:text-primary/80 underline underline-offset-2"
        >
          brandbird.app/svg-company-logos
        </Link>
      </p>

      <div className="my-8 border-b border-border" />

      <h3 className="text-primary">AI Development Tools</h3>

      <h4>Claude Code Tips</h4>

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

      <h5 className="text-base font-semibold mt-6">Jitter Fix</h5>
      <div className="my-6">
        <GalleryImage
          src="/blog/cracked_react_dev/claude_code_jitter_fix.jpg"
          alt="Claude Code jitter fix tip"
          width={800}
          height={600}
          className="w-full max-w-2xl rounded-lg mx-auto"
        />
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

      <h5 className="text-base font-semibold mt-6">Prevent Haiku Sub-Agents</h5>
      <p>
        If you've been burned by Claude Code default sub-agents using{" "}
        <Highlight>Haiku</Highlight> models, there's an easy workaround to
        permanently prevent it. Remap the alias via env vars in{" "}
        <code className="bg-muted px-2 py-1 rounded text-sm">
          ~/.claude/settings.json
        </code>
        :
      </p>
      <pre className="bg-muted/50 border border-border rounded-lg p-4 my-4 overflow-x-auto">
        <code className="text-sm">
          {`{
  "env": {
    "ANTHROPIC_DEFAULT_HAIKU_MODEL": "claude-sonnet-4-5-20250929"
  }
}`}
        </code>
      </pre>

      <h5 className="text-base font-semibold mt-6">
        Even Better: Use Sonnet 1M Context
      </h5>
      <p>
        The best thing I've done with Claude Code — by measure of ranting less
        to my agent sessions this past week. Use the{" "}
        <Highlight>1M context</Highlight> variant of Sonnet as the haiku model.
        Sub-agents get way more context to work with, which means fewer
        hallucinations and less back-and-forth:
      </p>
      <pre className="bg-muted/50 border border-border rounded-lg p-4 my-4 overflow-x-auto">
        <code className="text-sm">
          {`{
  "env": {
    "ANTHROPIC_DEFAULT_HAIKU_MODEL": "claude-sonnet-4-5-20250929[1m]"
  }
}`}
        </code>
      </pre>

      <h4>My Claude Code Settings</h4>
      <ClaudeCodeSettingsToggle />

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

      <h4>Spec-Based Development with Claude Code</h4>
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

      <p>
        Copy this prompt to start your spec interview:
      </p>
      <CopyableText text="Interview me using the AskUserQuestionTool. Let it ask about technical implementation, UI & UX, concerns, tradeoffs—but make sure the questions are not obvious." />

      <h4>Browser Automation</h4>
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

      <h4>AI Image Generation</h4>
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

      <h3 className="text-primary">Knowledge Management</h3>

      <h4>Obsidian - Your Second Brain</h4>
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

      <h3 className="text-primary">Dev Workflow Optimization</h3>

      <h4>Developer Utilities</h4>
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

      <h4>yt-dlp Commands</h4>
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

      <h4>Terminal Music Player</h4>
      <p>
        <Link
          href="https://github.com/bjarneo/cliamp"
          target="_blank"
          className="text-primary hover:text-primary/80 underline underline-offset-2"
        >
          cliamp
        </Link>
        {" - Winamp-inspired terminal music player with spectrum visualizer, 10-band EQ, and support for MP3/FLAC/WAV/OGG/AAC. Streams YouTube and SoundCloud via yt-dlp, plays internet radio, and has 17 built-in themes."}
      </p>
      <CopyableText text="curl -fsSL https://raw.githubusercontent.com/bjarneo/cliamp/HEAD/install.sh | sh" />

      <h4>The Primeagen Way</h4>
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

      <h3 className="text-primary">Startup Quick Setup</h3>
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
        <li>
          <Link
            href="https://visitors.now/"
            target="_blank"
            className="text-primary hover:text-primary/80 underline underline-offset-2"
          >
            Visitors.now
          </Link>
          {" - Beautiful landing page inspiration"}
        </li>
        <li>
          <Link
            href="https://www.startupperks.xyz/perks"
            target="_blank"
            className="text-primary hover:text-primary/80 underline underline-offset-2"
          >
            Startup Perks
          </Link>
          {" - Free perks and discounts for startups on tools, services, and credits"}
        </li>
      </ul>

      <Card className="bg-muted/50 p-4 my-6">
        <h5 className="text-primary text-sm uppercase tracking-wider font-semibold mb-3">
          Paid Resources
        </h5>
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

      <h3 className="text-primary">Tips & Tricks</h3>

      <h4>DevTools: Inspect Disappearing Elements</h4>
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

      <h4>Design System Prompt</h4>
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

      <h4>Meta Tags & SEO</h4>
      <ul className="space-y-2">
        <li>
          <Link
            href="https://metatags.io/?url=https://kshitijdhyani.com"
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

      <h4>Verification & Testing Tools</h4>
      <p>
        After deploying, test your metadata with these tools:
      </p>
      <ul className="space-y-2">
        <li>
          <Link
            href="https://www.opengraph.xyz/"
            target="_blank"
            className="text-primary hover:text-primary/80 underline underline-offset-2"
          >
            Open Graph Debugger
          </Link>
          {" - Preview how links appear on social media"}
        </li>
        <li>
          <Link
            href="https://developers.facebook.com/tools/debug/"
            target="_blank"
            className="text-primary hover:text-primary/80 underline underline-offset-2"
          >
            Facebook Sharing Debugger
          </Link>
          {" - Test Facebook/Meta preview"}
        </li>
        <li>
          <Link
            href="https://www.linkedin.com/post-inspector/"
            target="_blank"
            className="text-primary hover:text-primary/80 underline underline-offset-2"
          >
            LinkedIn Post Inspector
          </Link>
          {" - Test LinkedIn preview"}
        </li>
        <li>
          <Link
            href="https://search.google.com/test/rich-results"
            target="_blank"
            className="text-primary hover:text-primary/80 underline underline-offset-2"
          >
            Google Rich Results Test
          </Link>
          {" - Validate structured data (JSON-LD)"}
        </li>
        <li>
          <Link
            href="https://validator.schema.org/"
            target="_blank"
            className="text-primary hover:text-primary/80 underline underline-offset-2"
          >
            Schema.org Validator
          </Link>
          {" - Detailed schema validation"}
        </li>
      </ul>

      <h4>Performance Optimization</h4>
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

      <h4>Fonts That Hit Different</h4>
      <p>
        If you want to take your website typography to the next level, check out
        these 2 websites for fonts:
      </p>
      <ul className="space-y-2">
        <li>
          <Link
            href="https://fontshare.com"
            target="_blank"
            className="text-primary hover:text-primary/80 underline underline-offset-2"
          >
            Fontshare
          </Link>
          {" - Free, high-quality fonts by Indian Type Foundry"}
        </li>
        <li>
          <Link
            href="https://uncut.wtf"
            target="_blank"
            className="text-primary hover:text-primary/80 underline underline-offset-2"
          >
            Uncut
          </Link>
          {" - Free typefaces for the contemporary designer"}
        </li>
      </ul>

    </div>
  );
}
