"use client";
/* eslint-disable react/no-unescaped-entities */

import Image from "next/image";

export function RealizedMan() {
  return (
    <div className="prose prose-sm sm:prose-base lg:prose-lg max-w-none">
      <p className="text-base sm:text-lg leading-relaxed my-4 sm:my-6">
        My father served the nation for close to 37 years. While this service
        earned him a lot many of things — it does come at a price.
      </p>

      <p className="text-base sm:text-lg leading-relaxed my-4 sm:my-6">
        Price of a son not knowing his father.
      </p>

      <p className="text-base sm:text-lg leading-relaxed my-4 sm:my-6">
        For roughly 16 years of my life I barely understood my father (to both
        of our faults).
      </p>

      <p className="text-base sm:text-lg leading-relaxed my-4 sm:my-6">
        I saw him as someone who showed up during summer holidays and gave a lot
        of lectures.
      </p>

      <p className="text-base sm:text-lg leading-relaxed my-4 sm:my-6">
        Things he was trying to tell me, I just wasn't ready for them.
      </p>

      <p className="text-base sm:text-lg leading-relaxed my-4 sm:my-6">
        At 16 years of age life presented me with an opportunity to live with
        him. Just him and me.
      </p>

      <p className="text-base sm:text-lg leading-relaxed my-4 sm:my-6">
        We lived like two men are expected to live. We had 1 mattress- 1 TV and
        1 lonely table in a big house.
      </p>

      <p className="text-base sm:text-lg leading-relaxed my-4 sm:my-6">
        Not once did we feel like we were missing something.
      </p>

      <p className="text-base sm:text-lg leading-relaxed my-4 sm:my-6">
        We lived like broke bachelors, but our conversations were rich.
      </p>

      <p className="text-base sm:text-lg leading-relaxed my-4 sm:my-6">
        Rich in temper.
      </p>

      <p className="text-base sm:text-lg leading-relaxed my-4 sm:my-6">
        Rich in banter.
      </p>

      <p className="text-base sm:text-lg leading-relaxed my-4 sm:my-6">
        Rich in laughter.
      </p>

      <p className="text-base sm:text-lg leading-relaxed my-4 sm:my-6">
        Rich in wisdom.
      </p>

      <p className="text-base sm:text-lg leading-relaxed my-4 sm:my-6">
        A 16 year of lost teenager found solace in those conversations.
      </p>

      <p className="text-base sm:text-lg leading-relaxed my-4 sm:my-6">
        He taught me how to think bigger than one self.
      </p>

      <p className="text-base sm:text-lg leading-relaxed my-4 sm:my-6">
        How to observe one self.
      </p>

      <p className="text-base sm:text-lg leading-relaxed my-4 sm:my-6">
        He danced the subtle dance of a young mans silent anguish.
      </p>

      <p className="text-base sm:text-lg leading-relaxed my-4 sm:my-6">
        He has taught me countless many things.
      </p>

      <p className="text-base sm:text-lg leading-relaxed my-4 sm:my-6">
        but most of all he taught me how to be a REALIZED MAN.
      </p>

      <div className="my-8 sm:my-12 flex justify-center">
        <div className="w-full max-w-3xl">
          <Image
            src="/blog/realized_man/father.jpeg"
            alt="Father and son"
            width={1200}
            height={800}
            className="w-full rounded-lg mb-4 sm:mb-6"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            <video controls className="w-full rounded-lg">
              <source src="/blog/realized_man/video1.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            <video controls className="w-full rounded-lg">
              <source src="/blog/realized_man/video2.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </div>
  );
}
