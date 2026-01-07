"use client";
/* eslint-disable react/no-unescaped-entities */

import Link from "next/link";

// Helper component for text highlighting
const Highlight = ({ children }: { children: React.ReactNode }) => {
  return <span className="text-primary font-semibold">{children}</span>;
};

export function SovereignIndividual() {
  return (
    <div className="prose prose-sm sm:prose-base lg:prose-lg max-w-none">
      <p>
        The <Highlight>Sovereign Individual</Highlight> thesis predicts a future
        where technology empowers individuals to operate outside traditional
        nation-state constraints. Privacy, financial sovereignty, and
        decentralization are the pillars of this new paradigm.
      </p>

      <div className="my-8 border-b border-border" />

      <h2 className="text-primary">Zcash Shielded Pool</h2>
      <p>
        The <Highlight>shielded pool</Highlight> in Zcash represents the total
        amount of ZEC held in privacy-preserving addresses. It's a direct
        indicator of adoption and can signal price movements—when more people
        shield their coins, it often precedes significant market activity.
      </p>
      <p className="mt-4">
        <Link
          href="https://zecprice.com/"
          target="_blank"
          className="text-primary hover:text-primary/80 underline underline-offset-2"
        >
          ZEC Price - Shielded Pool Tracker
        </Link>
        {" - Monitor the size of the shielded pool and its correlation with price action."}
      </p>
      <p className="mt-4">
        <Link
          href="https://zechub.wiki/dashboard"
          target="_blank"
          className="text-primary hover:text-primary/80 underline underline-offset-2"
        >
          ZecHub Dashboard
        </Link>
        {" - Track shielded pool supply trends and Zcash ecosystem metrics."}
      </p>

      <div className="my-8 border-b border-border" />

      <h2 className="text-primary">Final Thoughts</h2>
      <p>
        Financial privacy isn't about having something to hide—it's about
        preserving the freedom to transact without surveillance. The tools exist;
        understanding them is the first step.
      </p>
    </div>
  );
}
