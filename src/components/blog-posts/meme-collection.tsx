"use client";
/* eslint-disable react/no-unescaped-entities */

import Link from "next/link";
import { GalleryVideo } from "@/components/gallery";

// Helper component for text highlighting
const Highlight = ({ children }: { children: React.ReactNode }) => {
  return <span className="text-primary font-semibold">{children}</span>;
};

export function MemeCollection() {
  return (
    <div className="prose prose-sm sm:prose-base lg:prose-lg dark:prose-invert max-w-none">
      <p>
        A curated collection of <Highlight>meme assets</Highlight>, sound
        effects, and tools for when you need to add that perfect comedic timing
        to your content.
      </p>

      <div className="my-8 border-b border-border" />

      <h3 className="text-primary">Meme Videos</h3>

      <div className="my-6">
        <GalleryVideo className="w-full max-w-2xl rounded-lg mx-auto">
          <source
            src="/blog/memes/chatgpt_to_claude.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </GalleryVideo>
      </div>

      <div className="my-6">
        <GalleryVideo className="w-full max-w-2xl rounded-lg mx-auto">
          <source
            src="/blog/memes/figma_ai_storm.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </GalleryVideo>
      </div>

      <div className="my-6">
        <GalleryVideo className="w-full max-w-2xl rounded-lg mx-auto">
          <source
            src="/blog/memes/frontend_devs_vs_ai.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </GalleryVideo>
      </div>

      <div className="my-6">
        <GalleryVideo className="w-full max-w-2xl rounded-lg mx-auto">
          <source
            src="/blog/memes/frontend_devs_wake_up_cursor.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </GalleryVideo>
      </div>

      <div className="my-6">
        <GalleryVideo className="w-full max-w-2xl rounded-lg mx-auto">
          <source
            src="/blog/memes/perfect_arigato.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </GalleryVideo>
      </div>

      <div className="my-6">
        <GalleryVideo className="w-full max-w-2xl rounded-lg mx-auto">
          <source
            src="/blog/memes/sideshift_moving.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </GalleryVideo>
      </div>

      <div className="my-6">
        <GalleryVideo className="w-full max-w-2xl rounded-lg mx-auto">
          <source
            src="/blog/memes/fuckgrowth_fruit_drama.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </GalleryVideo>
      </div>

      <div className="my-8 border-b border-border" />

      <h3 className="text-primary">Sound Effects</h3>

      <h4>MyInstants - The Holy Grail</h4>
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

      <h3 className="text-primary">Meme Editor</h3>

      <h4>BigForge - The Goated Meme Editor</h4>
      <p>
        The best meme editor out there. Clean UI, fast, and just works.
      </p>
      <ul className="space-y-2">
        <li>
          <Link
            href="https://app.bigforge.net/"
            target="_blank"
            className="text-primary hover:text-primary/80 underline underline-offset-2"
          >
            BigForge
          </Link>
          {" - Goated meme editor for creating and editing memes"}
        </li>
      </ul>
    </div>
  );
}
