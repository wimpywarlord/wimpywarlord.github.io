"use client";
/* eslint-disable react/no-unescaped-entities */

import { GalleryVideo } from "@/components/gallery";

// Helper component for text highlighting
const Highlight = ({ children }: { children: React.ReactNode }) => {
  return <span className="text-primary font-semibold">{children}</span>;
};

export function InterfaceForReality() {
  return (
    <div className="prose prose-sm sm:prose-base lg:prose-lg max-w-none">
      <p>
        The universe operates through <Highlight>interfaces</Highlight> we rarely
        notice. From gravitational shields to atmospheric filters, these natural
        systems shape our reality in profound ways.
      </p>

      <div className="my-8 border-b border-border" />

      <h2 className="text-primary">Jupiter: Earth's Cosmic Shield</h2>
      <p>
        Jupiter's immense gravity acts as a cosmic vacuum cleaner, deflecting and
        capturing asteroids that would otherwise threaten Earth. This gas giant
        has been protecting our planet for billions of years—an invisible
        interface between us and cosmic destruction.
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
            src="/blog/interface_for_reality/jupiter_asteroid_protection.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </GalleryVideo>
      </div>

      <div className="my-8 border-b border-border" />

      <h2 className="text-primary">Earth's Tilt: The Interface of Seasons</h2>
      <p>
        Earth's 23.5° axial tilt is the invisible interface that gives us
        seasons. This simple angle creates the rhythm of life—determining when
        crops grow, animals migrate, and civilizations celebrate. The{" "}
        <Highlight>solstices</Highlight> mark the extremes: the longest and
        shortest days of the year when the sun reaches its highest or lowest
        point in the sky. The <Highlight>equinoxes</Highlight> bring balance:
        equal day and night across the globe as the sun crosses the celestial
        equator.
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
            src="/blog/interface_for_reality/season_earth_tilt.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </GalleryVideo>
      </div>

      <div className="my-8 border-b border-border" />

      <h2 className="text-primary">Final Thoughts</h2>
      <p>
        Understanding these natural interfaces helps us appreciate the delicate
        balance that makes life possible. Reality itself is filtered through
        countless systems we take for granted.
      </p>
    </div>
  );
}
