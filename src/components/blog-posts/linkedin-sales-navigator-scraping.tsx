"use client";
/* eslint-disable react/no-unescaped-entities */

import Link from "next/link";

import { GalleryImage } from "@/components/gallery";

const ToolLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <Link
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-primary hover:text-primary/80 underline underline-offset-2"
  >
    {children}
  </Link>
);

export function LinkedinSalesNavigatorScraping() {
  return (
    <div className="prose prose-sm sm:prose-base lg:prose-lg dark:prose-invert max-w-none">
      <p>
        This is a write-up of learning after trying to collect a targeted
        <ToolLink href="https://www.linkedin.com"> LinkedIn</ToolLink> audience
        at scale (roughly 10,000 profiles).
      </p>

      <p>
        The hard part was not "scraping LinkedIn
        profiles." A lot of tools can scrape a profile if you already give them
        the profile URL (since that data is publicly available, most scraper can do it for pretty cheap around $1.5/1K records).
      </p>

      <p>
        Tip: Dont use something like <ToolLink href="https://apify.com">Apify</ToolLink> for this, Apify scrapers are wrapper over something like{" "}
        <ToolLink href="https://brightdata.com/products/web-scraper/linkedin">
          Bright Data
        </ToolLink>{" "}
        or <ToolLink href="https://scrapfly.io">Scrapfly</ToolLink> and they just charge a markup.
      </p>

      <p>
        The hard part was discovery - cause that requires scraping of non public data, that is hidden behind search queries, and rate limits.
      </p>

      <div className="my-6 sm:my-8 border-b border-border" />

      <h4 className="text-primary">The Goal</h4>

      <p>
       I wanted to scrape employee details for a company "X". The only way to get that data is through search, however on free accounts linkedin only shows 1000 profiles in a single search, and on paid accounts I believe the limit is around 2500. My target records was close to 10K.
       <br></br>
       <br></br>
       I had no idea where to start, additionally I had a scare of getting my personal account banned.
      </p>

      <h4 className="text-primary">
        Attempt 1: New LinkedIn Account, Residential Proxy, New Phone Number
      </h4>

      <p>The first try was to create a fresh LinkedIn account.</p>

      <p>
        I used a residential proxy and a new phone number from <ToolLink href="https://tello.com">Tello</ToolLink>. Tried my best to keep the scraping activity away from my personal LinkedIn
        account.
      </p>

      <p>
        The new account did not have trust. It did not have history. It did not
        have normal behavior, linkedin obviously has checks in place to detect that.
      </p>

      <p>
        That account quickly got restricted and required government ID plus face
        verification. Extremely not the vibe.
      </p>

      <p>In all my scraping experience so far, linkedin was the most difficult to work with. No wonder why all the LLMs refuse to get data from the these websites.</p>

      <p>
        LinkedIn cares a lot about account age, behavioral history, identity consistency,
        payment consistency, and whether the account looks like a real person
        over time.

        In my research I learned it takes about 2-3 weeks of warmup and full profile population before you can even think of scarping anything.
      </p>

      <p>
        Infact what I learned after the fact is that residential proxies dont even let you access the most popular sites such as Linkedin, due to legal concerns.
      </p>

      <h4 className="text-primary">
        Attempt 2: New Account Plus Sales Navigator Trial
      </h4>

      <p>
        Another idea was to create a new account and use the one-month free
        <ToolLink href="https://business.linkedin.com/sales-solutions/sales-navigator"> Sales Navigator</ToolLink> trial.
      </p>

      <p>But the account still needs to look real first.</p>

      <p>
        I tried to create a new account and buy or activate Sales Navigator from
        that account. The account was not properly warmed up. The payment method
        also did not line up cleanly with the account identity.
      </p>

      <p>That was enough to trigger a restriction. Straight up banned.</p>

      <p>
        I did not want to spend two or three weeks babysitting a LinkedIn
        account so it could grow up and become a productive member of society.
        For my use case, that was too much operational pain.
      </p>

      <p>
        So the "new account plus free trial" path may be possible, but it is not
        a shortcut. It is its own project.
      </p>

      <h4 className="text-primary">
        Attempt 3: Bright Data, Apify, Oxylabs, And Similar Providers
      </h4>

      <p>
        I also looked at providers like{" "}
        <ToolLink href="https://brightdata.com/products/web-scraper/linkedin">
          Bright Data
        </ToolLink>, <ToolLink href="https://apify.com">Apify</ToolLink>,{" "}
        <ToolLink href="https://oxylabs.io/products/scraper-api/web/linkedin">
          Oxylabs
        </ToolLink>, and similar LinkedIn data tools.
      </p>

      <p>The key distinction I learned:</p>

      <blockquote>
        <p>
          Many providers can scrape LinkedIn profiles if you already have the
          profile URLs. Very few solve Sales Navigator search discovery.
        </p>
      </blockquote>

      <p>That is a huge difference.</p>

      <p>If I give a provider a list like:</p>

      <pre>
        <code>{`https://www.linkedin.com/in/person-1/`}</code>
        <br />
        <br />

        <code>{`https://www.linkedin.com/in/person-1/`}</code>
        <br />
        <br />
        <code>{`https://www.linkedin.com/in/person-1/`}</code>
      </pre>

      <p>then several tools can enrich those profiles, but that is only after you have bulk discovered them, in the first place</p>

      <h4 className="text-primary">What Finally Worked</h4>

      <p>What worked was using my existing LinkedIn account.</p>

      <p>
        That account is aged, real, and warmed up because it is my actual
        personal account. It has normal history (for about 8 years now).
        Plus I did the <ToolLink href="https://www.clearme.com">CLEAR</ToolLink> face + government ID verification on that to be extra safe.
      </p>

      <p>
        Then I bought <ToolLink href="https://business.linkedin.com/sales-solutions/compare-plans">Sales Navigator</ToolLink>, which cost about $120. That unlocked the
        actual search layer with higher rate limits and page size of search (2500 instead of 1000).
      </p>

      <p>
        From there, the tool that worked for this specific workflow was{" "}
        <ToolLink href="https://www.vayne.io">Vayne</ToolLink> (I have heard good things about{" "}
        <ToolLink href="https://phantombuster.com">PhantomBuster</ToolLink> as well).
      </p>

      <p>
        Vayne uses the Sales Navigator session and lets you submit Sales
        Navigator search URLs. The important part is that it can process Sales
        Navigator search queries (and break then into smaller search queries on its own and bulk scrape records for you, while also de-duplicating the overlapping results from sub queries).
      </p>

      <div className="my-6 sm:my-8">
        <GalleryImage
          src="/blog/linkedin_sales_navigator_scraping/vayne-dashboard.png"
          alt="Vayne dashboard showing Sales Navigator orders, credits, and LinkedIn connection status"
          width={3374}
          height={2118}
          className="w-full rounded-lg border border-border"
        />
      </div>

      <p>
        For example, if I want to scrape all the employees of "Company X", I can build a Sales Navigator search for that. But that search will have more than 2500 results, so Vayne will automatically break it into smaller searches (for example by state) and run those separately, while also deduping the overlapping results.
      </p>

      <ul className="space-y-2">
        <li>Missouri</li>
        <li>Illinois</li>
        <li>California</li>
        <li>New York</li>
        <li>Texas</li>
        <li>Florida</li>
        <li>and so on</li>
      </ul>

     <p>A few safety layers was that, remember to buy <ToolLink href="https://www.vayne.io/fr/pricing">Starter</ToolLink> pack or higher in Vayne, I wasted $29 like this, they dont allow API access in lower plans. Also make sure you tell your AI to write resumable scripts, and also to write as you go in memory. I have learned these things the hard way.</p>

      <p>You can scrape upto 15000 records a day, beyond that you are risking ban. So if you buy Sales Navigator for the month you can are looking 15K * 30 days = 450K records from a single account.</p>

      <h4 className="text-primary">What Happens After You Have The URLs</h4>

      <p>
        Once you have the LinkedIn URLs scraped from Sales Navigator search,
        life gets much easier.
      </p>

      <p>
        At that point, you can use profile scraping and enrichment tools for the
        second phase. Something like{" "}
        <ToolLink href="https://brightdata.com/pricing/web-scraper">
          Bright Data-style web scrapers
        </ToolLink>{" "}
        can scrape full profiles from a clean URL list, and if Bright Data is
        offering enrichment inside the same flow, even better. One less vendor,
        one less dashboard, one less place for credits to mysteriously become
        confetti.
      </p>

      <p>
        If your discovery data is clean, enrichment is boring in the best way.
      </p>

      <h4 className="text-primary">
        Realistic Starting Cost For 10K Records
      </h4>

      <p>
        If I had to price a serious 10K-record run from zero (although I wasted money on the fake-account/proxy/burner-phone approach) - I would
        budget for the stack that actually gets you from Sales Navigator search
        discovery to enriched records.
      </p>

      <div className="overflow-x-auto my-4 sm:my-6">
        <table className="min-w-full border-collapse text-xs sm:text-sm">
          <thead>
            <tr className="border-b border-border">
              <th className="border border-border bg-muted !py-3 !pr-4 !pl-6 text-left font-semibold sm:!py-4 sm:!pl-7">
                Item
              </th>
              <th className="border border-border bg-muted p-2 sm:p-3 text-left font-semibold">
                Why
              </th>
              <th className="border border-border bg-muted p-2 sm:p-3 text-left font-semibold">
                Cost
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-border">
              <td className="border border-border bg-background !py-3 !pr-4 !pl-6 text-left align-middle sm:!py-4 sm:!pl-7">
                Sales Navigator Core
              </td>
              <td className="border border-border bg-background p-2 sm:p-3">
                Search access and larger result window
              </td>
              <td className="border border-border bg-background p-2 sm:p-3">
                $119.99/mo
              </td>
            </tr>
            <tr className="border-b border-border">
              <td className="border border-border bg-background !py-3 !pr-4 !pl-6 text-left align-middle sm:!py-4 sm:!pl-7">
                Vayne Starter
              </td>
              <td className="border border-border bg-background p-2 sm:p-3">
                Sales Navigator extraction, API access, CSV export, dedupe
              </td>
              <td className="border border-border bg-background p-2 sm:p-3">
                $49/mo
              </td>
            </tr>
            <tr className="border-b border-border">
              <td className="border border-border bg-background !py-3 !pr-4 !pl-6 text-left align-middle sm:!py-4 sm:!pl-7">
                Bright Data profile scrape
              </td>
              <td className="border border-border bg-background p-2 sm:p-3">
                10K profile URLs x $1.50 per 1K records
              </td>
              <td className="border border-border bg-background p-2 sm:p-3">
                $15
              </td>
            </tr>
            <tr className="border-b border-border">
              <td className="border border-border bg-background !py-3 !pr-4 !pl-6 text-left align-middle sm:!py-4 sm:!pl-7">
                Bright Data enrichment add-on
              </td>
              <td className="border border-border bg-background p-2 sm:p-3">
                10K records x $3 per 1K records
              </td>
              <td className="border border-border bg-background p-2 sm:p-3">
                $30
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>
        So the realistic starting number is about <strong>$214</strong> before
        taxes for one serious 10K-record run: $119.99 for Sales Navigator, $49
        for Vayne Starter, $15 for the profile scrape, and $30 for Bright Data
        enrichment. That is way cleaner than adding another $149/mo enrichment
        subscription if the Bright Data add-on works for your fields.
      </p>

      <p>
        That assumes one enrichment pass at $3-$8 per 1K (I have seen such numbers been thrown around for enrichment). If you verify every
        email, retry misses, enrich phone numbers, or run the list through
        multiple vendors, the number moves.
      </p>

      <p>
        Also: this does not include your time, failed experiments, cold email
        domains/inboxes, compliance review, or the emotional damage of watching
        a fresh LinkedIn account ask for face verification (haha ;D).
      </p>
    </div>
  );
}
