"use client";

import { GalleryVideo } from "@/components/gallery";

export function Mindset() {
  return (
    <div className="prose prose-sm sm:prose-base lg:prose-lg max-w-none">
      <h2 className="text-primary">Just Show Up</h2>
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
    </div>
  );
}
