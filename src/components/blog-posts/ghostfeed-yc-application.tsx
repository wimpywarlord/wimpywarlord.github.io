"use client"

import Link from "next/link"
import type React from "react"

type QAProps = {
  question: string
  children: React.ReactNode
}

type SectionProps = {
  title: string
  children: React.ReactNode
}

const mutedText = "text-muted-foreground"

function ExternalLink({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noreferrer"
      className="text-primary underline underline-offset-4 hover:text-primary/80"
    >
      {children}
    </Link>
  )
}

function Section({ title, children }: SectionProps) {
  return (
    <section className="my-10">
      <h2 className="mt-0 border-b border-border pb-2 text-2xl font-semibold tracking-tight">
        {title}
      </h2>
      <div className="mt-6 space-y-6">{children}</div>
    </section>
  )
}

function QA({ question, children }: QAProps) {
  return (
    <div className="not-prose">
      <h3 className="text-sm font-semibold leading-snug text-foreground">
        {question}
      </h3>
      <div className="mt-3 space-y-3 text-sm leading-7 text-muted-foreground sm:text-base">
        {children}
      </div>
    </div>
  )
}

function MiniStat({
  label,
  value,
}: {
  label: string
  value: React.ReactNode
}) {
  return (
    <div className="border-t border-border pt-3">
      <dt className="font-mono text-xs uppercase tracking-normal text-muted-foreground">
        {label}
      </dt>
      <dd className="mt-1 text-base font-medium text-foreground">{value}</dd>
    </div>
  )
}

function Bullets({ items }: { items: React.ReactNode[] }) {
  return (
    <ul className="my-0 list-disc space-y-2 pl-5">
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  )
}

function Unanswered() {
  return <p className={mutedText}>Unanswered</p>
}

export function GhostfeedYcApplication() {
  return (
    <div className="prose prose-sm sm:prose-base lg:prose-lg dark:prose-invert max-w-none">
      <dl className="not-prose my-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <MiniStat label="Company" value="Ghostfeed AI" />
        <MiniStat label="Batch" value="Summer 2026" />
        <MiniStat label="Category" value="Adtech" />
        <MiniStat label="Status" value="Live with revenue" />
      </dl>

      <Section title="Founders">
        <QA question="How long have the founders known one another and how did you meet? Have any of the founders not met in person?">
          <p>
            8+ years. We were roommates in undergrad for 4 years and have kept
            in touch ever since.
          </p>
        </QA>

        <QA question="Who writes code, or does other technical work on your product? Was any of it done by a non-founder?">
          <p>Both co-founders are technical.</p>
        </QA>

        <QA question="Are you looking for a cofounder?">
          <p>No.</p>
        </QA>

        <div className="not-prose pt-2">
          <h3 className="text-sm font-semibold leading-snug text-foreground">
            Founder Video
          </h3>
          <video
            controls
            preload="metadata"
            className="mt-3 w-full rounded-lg border border-border bg-black"
            aria-label="Ghostfeed AI founder video"
          >
            <source
              src="/blog/ghostfeed_yc_application/founder-video.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </Section>

      <Section title="Company">
        <QA question="Company name">
          <p>Ghostfeed AI</p>
        </QA>

        <QA question="Describe what your company does in 50 characters or less.">
          <p>Shortform AI UGC Marketing at Scale</p>
        </QA>

        <QA question="Company URL, if any">
          <p>
            <ExternalLink href="https://ghostfeed.ai/">
              https://ghostfeed.ai/
            </ExternalLink>
          </p>
        </QA>

        <QA question="Demo Video">
          <p>No video uploaded.</p>
        </QA>

        <QA question="Please provide a link to the product, if any.">
          <Unanswered />
        </QA>

        <QA question="What is your company going to make? Please describe your product and what it does or will do.">
          <p>
            Ghostfeed helps consumer companies grow on TikTok and Instagram
            using AI creators.
          </p>
          <p>
            Companies use Ghostfeed to create AI personas, generate UGC-style
            videos, and A/B test hooks without hiring a large creator team.
          </p>
          <p>
            It is becoming a system where companies can define their product and
            Ghostfeed will:
          </p>
          <Bullets
            items={[
              "Boot up phone farms",
              "Warm up accounts within relevant audience niche",
              "Test thousands of hooks",
              "Learn from performance",
              "Manage entire TikTok and Instagram campaigns",
            ]}
          />
        </QA>

        <QA question="Where do you live now, and where would the company be based after YC?">
          <p>San Francisco, United States</p>
        </QA>

        <QA question="Explain your decision regarding location.">
          <p>
            San Francisco is a gravity well for the smartest minds attacking
            life from different paradigms. We are naturally attracted.
          </p>
        </QA>
      </Section>

      <Section title="Progress">
        <QA question="How far along are you?">
          <p>
            Ghostfeed is live. The product already supports AI persona creation,
            AI UGC-style video generation, TikTok slideshow generation, hook +
            demo workflows, and entirely automated content scheduling.
          </p>
          <p>
            We are now expanding from a software tool into a managed AI UGC
            system for enterprise customers. For that we are procuring old
            phones from FB Marketplace, and setting up Android Debug Bridge to
            auto warm up new accounts in their specific niches.
          </p>
        </QA>

        <QA question="How long have each of you been working on this? How much of that has been full-time?">
          <p>
            We have been working on Ghostfeed for almost three months. Both
            founders spend 40-50+ hours per week on it. We have some residual
            obligations outside the company, but Ghostfeed is where all of our
            time and energy is allocated.
          </p>
        </QA>

        <QA question="What tech stack are you using, or planning to use, to build this product? Include AI models and AI coding tools you use.">
          <Bullets
            items={[
              "Frontend: Next.js, Tanstack, Sharp, Canvas, and Fabric",
              "Backend: Node, MongoDB/Mongoose, Cloudflare, FFmpeg, Fal, Replicate",
              "Content models: Kling 3.0, Grok Imagine, Seedance 2.0, Nano Banana, GPT Image 2.0",
              "AI models: GPT-5, Anthropic Claude Sonnet 4.7, Gemini 3 Pro",
              "Tools: Claude Code and Spotify",
            ]}
          />
        </QA>

        <QA question="Optional: attach a coding agent session you're particularly proud of.">
          <Unanswered />
        </QA>

        <QA question="Are people using your product?">
          <p>Yes.</p>
        </QA>

        <QA question="How many active users or customers do you have? How many are paying? Who is paying you the most, and how much do they pay you?">
          <Bullets
            items={[
              "800+ signups",
              "20-25 new signups per day",
              "85 paying customers",
              "About $1,000 MRR",
              "About $4,000 revenue in the last 3 months",
            ]}
          />
        </QA>

        <QA question="Do you have revenue?">
          <p>Yes.</p>
        </QA>

        <QA question="How much revenue do you have?">
          <Bullets
            items={[
              "Mar 2026: $1,561",
              "Feb 2026: $860",
              "Jan 2026: $918",
            ]}
          />
        </QA>

        <QA question="Where does your revenue come from? If your revenue comes from multiple sources, please break down how much is coming from each source.">
          <p>
            All revenue comes from Ghostfeed subscriptions and usage-based
            credits.
          </p>
          <p>We offer three main plans:</p>
          <Bullets
            items={[
              "Starter: $29/month",
              "Growth: $49/month",
              "Agency: $99/month",
            ]}
          />
          <p>
            We are also beginning to add enterprise/managed-service revenue for
            larger customers at $200/account.
          </p>
        </QA>

        <QA question="Anything else you would like us to know regarding your revenue or growth rate?">
          <Unanswered />
        </QA>

        <QA question="If you are applying with the same idea as a previous batch, did anything change? If you applied with a different idea, why did you pivot and what did you learn from the last idea?">
          <p>
            We previously worked on GradBro, our past YC application idea: a
            college applications SaaS tool.
          </p>
          <p>
            Our users were high-school students who live on TikTok, and we
            quickly learned that we had an unrelatable face and a thick accent.
          </p>
          <p>
            So we built Ghostfeed internally to create AI personas and market
            GradBro ourselves. It worked better than our own content almost
            immediately.
          </p>
          <p>
            We then noticed companies like Cal AI, Cluely, Interview Coder, and
            Coconote growing through UGC-style short-form content, and realized
            the same playbook could be replicated with AI at much higher volume
            and lower cost.
          </p>
          <p>
            Ghostfeed was clearly the bigger opportunity. GradBro is now mostly
            a dogfooding use case for Ghostfeed.
          </p>
        </QA>

        <QA question='If you have already participated or committed to participate in an incubator, "accelerator" or "pre-accelerator" program, please tell us about it.'>
          <Unanswered />
        </QA>
      </Section>

      <Section title="Idea">
        <QA question="Why did you pick this idea to work on? Do you have domain expertise in this area? How do you know people need what you're making?">
          <p>We picked this idea because we had the problem ourselves.</p>
          <p>
            While building GradBro, we could not afford to hire enough UGC
            creators to test content at scale, neither did we have time to
            manage them. We scaled to 12 AI personas, shared the journey, and
            founders started asking to use the tool. That became Ghostfeed.
          </p>
          <p>
            Kshitij (Tjay) has worked at EgoAI (YC W24) where he specialized in
            building agentic AI architectures. Meet is a senior engineer at
            Trend Micro building enterprise AI solutions.
          </p>
          <p>
            We have also developed taste for virality, consistently hitting 100K
            views/week across multiple accounts. We gained experience managing
            TikTok campaigns for enterprise customers in the Shopify apps niche.
          </p>
        </QA>

        <QA question="Who are your competitors? What do you understand about your business that they don't?">
          <p>
            Competitors include Doublespeed, ReelFarm, Gen Viral, TikTok
            automation companies, AI avatar/video tools, UGC agencies, creator
            marketplaces, and social schedulers.
          </p>
          <p>
            Most competitors either generate videos, schedule posts, or help
            companies manage real creators. We are a tasteful AI-first UGC
            marketing agency with technology as the base pillar.
          </p>
          <p>
            Currently, consumer businesses rely mostly on human creators. There
            are agencies like Playkit charging upwards of $40K+/month for
            delivering 2,000 videos from human creators. We can deliver the same
            volume at comparable quality at 1/10th the cost.
          </p>
        </QA>

        <QA question="How do or will you make money? How much could you make?">
          <p>
            We currently make money through SaaS subscriptions, usage-based
            credits, and done-for-you service for enterprise customers.
          </p>
          <p>
            We believe Ghostfeed can become a $50M+ ARR company. Consumer
            companies already spend heavily on UGC, influencer marketing, and
            short-form content. AI video has started being used in performance
            marketing because it creates a faster feedback loop.
          </p>
          <p>
            As token cost keeps going down, we want Ghostfeed to be the AI
            creator arm for consumer marketing teams.
          </p>
        </QA>

        <QA question="Which category best applies to your company?">
          <p>Adtech</p>
        </QA>

        <QA question="If you had any other ideas you considered applying with, please list them.">
          <Unanswered />
        </QA>
      </Section>

      <Section title="Equity">
        <QA question="Have you formed ANY legal entity yet?">
          <p>No.</p>
        </QA>

        <QA question="If you have not formed the company yet, describe the planned equity ownership breakdown among the founders, employees and any other proposed stockholders.">
          <Bullets
            items={[
              "Meet Shukla - Co-founder - 50%",
              "Kshitij Dhyani - Co-founder - 49%",
            ]}
          />
        </QA>

        <QA question="Have you taken any investment yet?">
          <p>No.</p>
        </QA>

        <QA question="Are you currently fundraising?">
          <p>No.</p>
        </QA>
      </Section>

      <Section title="Curious">
        <QA question="What convinced you to apply to Y Combinator? Did someone encourage you to apply? Have you been to any YC events?">
          <p>
            Living in San Francisco, I have experienced the YC effect first
            hand. I worked at Ego AI (YC W24). I was their 7th employee. Having
            hung around the landing and gone to YC events, I am completely
            convinced that YC is a life-changing experience for any founder.
          </p>
        </QA>

        <QA question="How did you hear about Y Combinator?">
          <p>
            I worked with Peggy Wang (EgoAI and DigiPals YC F25), Vish (Ego AI
            YC W24), and Samraaj Bath (Ion Design YC W24).
          </p>
        </QA>
      </Section>

      <Section title="Batch Preference">
        <QA question="What batch do you want to apply for?">
          <p>Current.</p>
        </QA>
      </Section>
    </div>
  )
}
