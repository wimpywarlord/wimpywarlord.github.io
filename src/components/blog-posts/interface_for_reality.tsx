"use client";
/* eslint-disable react/no-unescaped-entities */

import { GalleryVideo } from "@/components/gallery";

export function InterfaceForReality() {
  return (
    <div className="prose prose-sm sm:prose-base lg:prose-lg max-w-none">
      <h2 className="text-primary">Jupiter: Earth's Cosmic Shield</h2>
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

      <h2 className="text-primary">Planets in Motion</h2>
      <div className="my-6">
        <GalleryVideo
          controls
          loop
          autoPlay
          muted
          className="w-full max-w-2xl rounded-lg mx-auto"
        >
          <source
            src="/blog/interface_for_reality/planets_rotation_IFR.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </GalleryVideo>
      </div>

      <div className="my-8 border-b border-border" />

      <h2 className="text-primary">The Ear: Sound Interface</h2>
      <div className="my-6">
        <GalleryVideo
          controls
          loop
          autoPlay
          muted
          className="w-full max-w-2xl rounded-lg mx-auto"
        >
          <source
            src="/blog/interface_for_reality/ear_IFR.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </GalleryVideo>
      </div>

      <div className="my-8 border-b border-border" />

      <h2 className="text-primary">Awareness: The Ultimate Interface</h2>
      <div className="my-6">
        <GalleryVideo
          controls
          loop
          autoPlay
          muted
          className="w-full max-w-2xl rounded-lg mx-auto"
        >
          <source
            src="/blog/interface_for_reality/awareness_is_you.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </GalleryVideo>
      </div>
    </div>
  );
}
