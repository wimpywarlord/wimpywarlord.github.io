"use client";
/* eslint-disable react/no-unescaped-entities */

import Link from "next/link";
import { Card } from "@/components/ui/card";

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

      <h2 className="text-primary">Backend with Go</h2>
      <p>
        Great for concurrent and parallel use cases. Go is becoming the{" "}
        <Highlight>go-to</Highlight> backend language for React apps.
      </p>
      <ul className="space-y-2">
        <li>
          <Link
            href="https://www.youtube.com/watch?v=yyUHQIec83I"
            target="_blank"
            className="text-primary hover:text-primary/80 underline underline-offset-2"
          >
            Learn Go
          </Link>
          {" - Complete tutorial"}
        </li>
        <li>
          <Link
            href="https://github.com/burakorkmez/react-go-tutorial/blob/master/COMPARISONS.md"
            target="_blank"
            className="text-primary hover:text-primary/80 underline underline-offset-2"
          >
            Go vs Node.js Comparisons
          </Link>
          {" - Make an informed choice"}
        </li>
      </ul>

      <div className="my-8 border-b border-border" />

      <h2 className="text-primary">AI Development Tools</h2>

      <h3>Claude Code Tips</h3>
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
      </ul>

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
        <video controls className="w-full max-w-2xl rounded-lg mx-auto">
          <source
            src="/blog/cracked_react_dev/devtools-inspect-disappearing-elements.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
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
