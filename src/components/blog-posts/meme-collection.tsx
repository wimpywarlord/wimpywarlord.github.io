"use client";
/* eslint-disable react/no-unescaped-entities */

import Link from "next/link";

// Helper component for text highlighting
const Highlight = ({ children }: { children: React.ReactNode }) => {
  return <span className="text-primary font-semibold">{children}</span>;
};

export function MemeCollection() {
  return (
    <div className="prose prose-sm sm:prose-base lg:prose-lg max-w-none">
      <p>
        A curated collection of <Highlight>meme assets</Highlight>, sound
        effects, and tools for when you need to add that perfect comedic timing
        to your content.
      </p>

      <div className="my-8 border-b border-border" />

      <h2 className="text-primary">Sound Effects</h2>

      <h3>MyInstants - The Holy Grail</h3>
      <p>
        Every meme sound effect you could ever need, all in one place. The{" "}
        <Highlight>Vine boom</Highlight>, the <Highlight>Windows XP error</Highlight>,
        the <Highlight>Metal Gear Solid alert</Highlight> — it's all here.
      </p>
      <ul className="space-y-2">
        <li>
          <Link
            href="https://www.myinstants.com/en/index/us/"
            target="_blank"
            className="text-primary hover:text-primary/80 underline underline-offset-2"
          >
            MyInstants
          </Link>
          {" - Massive library of instant sound buttons for memes"}
        </li>
      </ul>

      <div className="my-8 border-b border-border" />

      <h2 className="text-primary">More Coming Soon</h2>
      <p>
        This collection is just getting started. More meme resources, templates,
        and tools will be added as I find them.
      </p>
    </div>
  );
}
