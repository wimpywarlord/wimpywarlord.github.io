"use client";
/* eslint-disable react/no-unescaped-entities */

import Link from "next/link";

const Highlight = ({ children }: { children: React.ReactNode }) => {
  return <span className="text-primary font-semibold">{children}</span>;
};

export function LifeHacks() {
  return (
    <div className="prose prose-sm sm:prose-base lg:prose-lg dark:prose-invert max-w-none">
      <p>
        Small things that compound. <Highlight>Life hacks</Highlight> I've
        actually used and felt the difference from.
      </p>

      <div className="my-8 border-b border-border" />

      <h3 className="text-primary">Travel</h3>

      <h4>Skip the chains, book boutique</h4>
      <p>
        I now use{" "}
        <Link
          href="https://hotelist.com/"
          target="_blank"
          className="text-primary hover:text-primary/80 underline underline-offset-2"
        >
          Hotelist
        </Link>
        {" "}to find hotels when I travel. Quickly realized smaller{" "}
        <Highlight>privately owned boutique hotels</Highlight> are generally a
        way better experience than the big hotel chains — more character, often
        cheaper, and the staff actually cares.
      </p>
    </div>
  );
}
