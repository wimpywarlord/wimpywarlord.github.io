"use client";
/* eslint-disable react/no-unescaped-entities */

import Image from "next/image";

// Helper component for text highlighting
const Highlight = ({ children }: { children: React.ReactNode }) => {
  return <span className="text-primary font-semibold">{children}</span>;
};

export function Taste() {
  return (
    <div className="prose prose-sm sm:prose-base lg:prose-lg max-w-none">
      <p>
        Developing <Highlight>taste</Highlight> in design is about recognizing
        what works and why. Here are some examples of exceptional design
        choices that demonstrate refined taste.
      </p>

      <div className="my-8 border-b border-border" />

      <h2 className="text-primary">Cool Landing Page Navigation</h2>
      <p>
        Smooth, intuitive navigation that feels effortless. The best interfaces
        are the ones you don't notice.
      </p>
      <div className="my-6">
        <video
          controls
          loop
          autoPlay
          muted
          className="w-full max-w-2xl rounded-lg mx-auto"
        >
          <source
            src="/blog/taste/cool_landing_page_navigation.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="my-8 border-b border-border" />

      <h2 className="text-primary">Vertical Sidebar Navigation</h2>
      <p>
        Clean, minimal sidebar design that maximizes content space while
        maintaining easy access to navigation. Less is more.
      </p>
      <div className="my-6">
        <Image
          src="/blog/taste/side_vertical_nav_bar.png"
          alt="Vertical sidebar navigation example"
          width={800}
          height={600}
          className="w-full max-w-2xl rounded-lg mx-auto"
        />
      </div>

      <div className="my-8 border-b border-border" />

      <h2 className="text-primary">Old Songs in Trailers</h2>
      <p>
        Using nostalgic music in modern trailers creates emotional resonance.
        Great design isn't just visual—it's about the complete experience.
      </p>
      <div className="my-6">
        <Image
          src="/blog/taste/old_song_in_trailer.jpeg"
          alt="Old songs used in movie trailers"
          width={800}
          height={600}
          className="w-full max-w-2xl rounded-lg mx-auto max-h-96 object-contain"
        />
      </div>

      <div className="my-8 border-b border-border" />

      <h2 className="text-primary">Landing Page Inspiration</h2>
      <p>
        Study these examples of exceptional landing page design to refine your
        own taste:
      </p>
      <ul className="space-y-2">
        <li>
          <a
            href="https://mymind.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-primary/80 underline underline-offset-2"
          >
            MyMind
          </a>
          {" - Minimalist design that lets content breathe"}
        </li>
      </ul>

      <div className="my-8 border-b border-border" />

      <h2 className="text-primary">Final Thoughts</h2>
      <p>
        Taste is learned through exposure and iteration. Study what you admire,
        understand why it works, and apply those principles to your own work.
      </p>
    </div>
  );
}
