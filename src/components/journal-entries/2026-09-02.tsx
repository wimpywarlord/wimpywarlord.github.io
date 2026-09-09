"use client"

import Link from "next/link"

import { GalleryImage } from "@/components/gallery"

export const JournalEntry20260902 = () => {
  return (
    <div>
      <p>
        Doubt has been loud lately. The kind that shows up mid-build, when the
        gap between where you are and where you want to be feels widest. I
        don&apos;t think it ever fully goes away — you just get better at
        noticing it without obeying it.
      </p>

      <p>
        But here&apos;s the thing I keep coming back to: look at the room. A
        few years ago I could not have imagined the calls I casually take now,
        the people who pick up, the conversations that are just... Tuesday.
      </p>

      <p>
        Today I spoke to{" "}
        <Link
          href="https://x.com/arlanr"
          target="_blank"
          className="text-primary hover:text-primary/80 underline underline-offset-2"
        >
          Arlan
        </Link>
        , with Meet on the call too.
      </p>

      <div className="my-6">
        <GalleryImage
          src="/blog/journal/2026-09-02-call-with-arlan.png"
          alt="Google Meet call with Meet Shukla, Arlan Rakhmetzhanov, and Kshitij Dhyani"
          width={1416}
          height={1622}
          className="w-full max-w-2xl rounded-lg mx-auto"
        />
      </div>

      <p>
        The doubt and the room are both real. I&apos;m choosing to trust the
        room.
      </p>
    </div>
  )
}
