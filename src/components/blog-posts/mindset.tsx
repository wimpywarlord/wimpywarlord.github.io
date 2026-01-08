"use client";
/* eslint-disable react/no-unescaped-entities */

import { GalleryVideo } from "@/components/gallery";

// Helper component for text highlighting
const Highlight = ({ children }: { children: React.ReactNode }) => {
  return <span className="text-primary font-semibold">{children}</span>;
};

export function Mindset() {
  return (
    <div className="prose prose-sm sm:prose-base lg:prose-lg max-w-none">
      <p>
        <Highlight>Mindset</Highlight> separates those who achieve extraordinary
        things from those who don't. These insights from Elon Musk, Peter Thiel,
        and Jack Dorsey reveal the mental frameworks that drive success.
      </p>

      <div className="my-8 border-b border-border" />

      <h2 className="text-primary">Just Show Up</h2>
      <p>
        The simplest yet most powerful advice: show up consistently. Most people
        fail not because they lack talent, but because they don't put themselves
        in the arena. Showing up is half the battle.
      </p>
      <div className="my-6">
        <GalleryVideo
          controls
          loop
          autoPlay
          muted
          className="w-full max-w-2xl rounded-lg mx-auto"
        >
          <source src="/blog/mindset/just_show_up.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </GalleryVideo>
      </div>

      <div className="my-8 border-b border-border" />

      <h2 className="text-primary">Many Tries</h2>
      <p>
        Success isn't about getting it right the first time—it's about
        persisting through countless failures. Each attempt brings you closer to
        the breakthrough. The ones who succeed are simply the ones who{" "}
        <Highlight>didn't quit</Highlight>.
      </p>
      <div className="my-6">
        <GalleryVideo
          controls
          loop
          autoPlay
          muted
          className="w-full max-w-2xl rounded-lg mx-auto"
        >
          <source src="/blog/mindset/many_tries.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </GalleryVideo>
      </div>

      <div className="my-8 border-b border-border" />

      <h2 className="text-primary">Market Crashes</h2>
      <p>
        When markets crash and everyone panics, the right mindset sees
        opportunity. Fear creates the best buying opportunities for those with
        conviction and long-term thinking. Volatility is the price of{" "}
        <Highlight>exceptional returns</Highlight>.
      </p>
      <div className="my-6">
        <GalleryVideo
          controls
          loop
          autoPlay
          muted
          className="w-full max-w-2xl rounded-lg mx-auto"
        >
          <source src="/blog/mindset/market_crashes.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </GalleryVideo>
      </div>

      <div className="my-8 border-b border-border" />

      <h2 className="text-primary">Currency is Energy</h2>
      <p>
        Money is simply stored energy—a representation of value created and
        exchanged. Understanding this reframes how you think about wealth
        creation. It's not about hoarding, but about{" "}
        <Highlight>generating and directing energy</Highlight> toward meaningful
        outcomes.
      </p>
      <div className="my-6">
        <GalleryVideo
          controls
          loop
          autoPlay
          muted
          className="w-full max-w-2xl rounded-lg mx-auto"
        >
          <source src="/blog/mindset/currency_is_energy.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </GalleryVideo>
      </div>

      <div className="my-8 border-b border-border" />

      <h2 className="text-primary">Instinct Over Intellect</h2>
      <p>
        Cillian Murphy on trusting your gut. In moments of uncertainty, your{" "}
        <Highlight>instinct</Highlight> often knows before your intellect
        catches up. The rational mind can paralyze with analysis—sometimes you
        just have to feel your way through.
      </p>
      <div className="my-6">
        <GalleryVideo
          controls
          loop
          autoPlay
          muted
          className="w-full max-w-2xl rounded-lg mx-auto"
        >
          <source
            src="/blog/mindset/instinct_instinct_instinct.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </GalleryVideo>
      </div>

      <div className="my-8 border-b border-border" />

      <h2 className="text-primary">Details Matter</h2>
      <p>
        Jack Dorsey on the importance of <Highlight>sweating the details</Highlight>.
        The difference between good and great often lies in the small things that
        most people overlook. Excellence is built through obsessive attention to
        every aspect of what you're creating.
      </p>
      <div className="my-6">
        <GalleryVideo
          controls
          loop
          autoPlay
          muted
          className="w-full max-w-2xl rounded-lg mx-auto"
        >
          <source src="/blog/mindset/jack_dorsy_details.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </GalleryVideo>
      </div>

      <div className="my-8 border-b border-border" />

      <h2 className="text-primary">Final Thoughts</h2>
      <p>
        Mindset isn't something you're born with—it's cultivated through
        deliberate practice and exposure to the right ideas. Study those who've
        achieved what you want, and adopt their mental frameworks.
      </p>
    </div>
  );
}
