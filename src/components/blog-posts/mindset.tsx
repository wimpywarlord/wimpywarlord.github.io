"use client";

import { GalleryVideo } from "@/components/gallery";

export function Mindset() {
  return (
    <div className="prose prose-sm sm:prose-base lg:prose-lg dark:prose-invert max-w-none">
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

      <div className="my-6">
        <GalleryVideo
          controls
          loop
          autoPlay
          muted
          className="w-full max-w-2xl rounded-lg mx-auto"
        >
          <source src="/blog/mindset/time_is_but_a_illusion.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </GalleryVideo>
      </div>
    </div>
  );
}
