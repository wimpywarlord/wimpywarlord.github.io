import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react"
import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import type { BlogPosting as PageSchema, WithContext } from "schema-dts"

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/base/ui/tooltip"
import { GalleryProvider } from "@/components/gallery"
import { Button } from "@/components/ui/button"
import { Kbd } from "@/components/ui/kbd"
import { Prose } from "@/components/ui/typography"
import { SITE_INFO } from "@/config/site"
import { PostKeyboardShortcuts } from "@/features/blog/components/post-keyboard-shortcuts"
import { PostShareMenu } from "@/features/blog/components/post-share-menu"
import { findNeighbour } from "@/features/blog/data/posts"
import type { Post } from "@/features/blog/types/post"
import {
  getAllJournalEntries,
  getJournalEntryByDay,
} from "@/features/journal/data/entries"
import { USER } from "@/features/portfolio/data/user"
import { cn } from "@/lib/utils"

export async function generateStaticParams() {
  const entries = getAllJournalEntries()
  return entries.map((entry) => ({
    day: entry.slug,
  }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ day: string }>
}): Promise<Metadata> {
  const day = (await params).day
  const entry = getJournalEntryByDay(day)

  if (!entry) {
    return notFound()
  }

  const { title, description, image, createdAt, updatedAt } = entry.metadata
  const entryUrl = `/blog/journal/${day}`

  return {
    title,
    description,
    alternates: {
      canonical: entryUrl,
    },
    openGraph: {
      url: entryUrl,
      type: "article",
      publishedTime: new Date(createdAt).toISOString(),
      modifiedTime: new Date(updatedAt).toISOString(),
      ...(image && {
        images: {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      }),
    },
    twitter: {
      card: "summary_large_image",
      ...(image && { images: [image] }),
    },
  }
}

function getPageJsonLd(entry: Post): WithContext<PageSchema> {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: entry.metadata.title,
    description: entry.metadata.description,
    image: entry.metadata.image,
    url: `${SITE_INFO.url}/blog/journal/${entry.slug}`,
    datePublished: new Date(entry.metadata.createdAt).toISOString(),
    dateModified: new Date(entry.metadata.updatedAt).toISOString(),
    author: {
      "@type": "Person",
      name: USER.displayName,
      identifier: USER.username,
      image: USER.avatar,
    },
  }
}

export default async function Page({
  params,
}: {
  params: Promise<{
    day: string
  }>
}) {
  const day = (await params).day
  const entry = getJournalEntryByDay(day)

  if (!entry) {
    notFound()
  }

  const allEntries = getAllJournalEntries()
  const { previous, next } = findNeighbour(allEntries, day)

  const EntryComponent = entry.component

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getPageJsonLd(entry)).replace(/</g, "\\u003c"),
        }}
      />

      <PostKeyboardShortcuts
        basePath="/blog/journal"
        previous={previous}
        next={next}
      />

      <div className="flex items-center justify-between p-2 pl-4">
        <Button
          className="h-7 gap-2 rounded-lg px-0 font-mono text-muted-foreground transition-[color] hover:text-foreground"
          variant="link"
          asChild
        >
          <Link href="/blog/journal">
            <ArrowLeftIcon />
            Journal
          </Link>
        </Button>

        <div className="flex items-center gap-2">
          <PostShareMenu
            title={entry.metadata.title}
            url={`/blog/journal/${entry.slug}`}
          />

          {previous && (
            <Tooltip>
              <TooltipTrigger
                render={
                  <Button variant="secondary" size="icon-sm" asChild>
                    <Link href={`/blog/journal/${previous.slug}`}>
                      <ArrowLeftIcon />
                      <span className="sr-only">Previous</span>
                    </Link>
                  </Button>
                }
              />
              <TooltipContent className="pr-2 pl-3">
                <div className="flex items-center gap-3">
                  Previous Day
                  <Kbd>
                    <ArrowLeftIcon />
                  </Kbd>
                </div>
              </TooltipContent>
            </Tooltip>
          )}

          {next && (
            <Tooltip>
              <TooltipTrigger
                render={
                  <Button variant="secondary" size="icon-sm" asChild>
                    <Link href={`/blog/journal/${next.slug}`}>
                      <span className="sr-only">Next</span>
                      <ArrowRightIcon />
                    </Link>
                  </Button>
                }
              />
              <TooltipContent className="pr-2 pl-3">
                <div className="flex items-center gap-3">
                  Next Day
                  <Kbd>
                    <ArrowRightIcon />
                  </Kbd>
                </div>
              </TooltipContent>
            </Tooltip>
          )}
        </div>
      </div>

      <div className="screen-line-before screen-line-after">
        <div
          className={cn(
            "h-8",
            "before:absolute before:-left-[100vw] before:-z-1 before:h-full before:w-[200vw]",
            "before:bg-[repeating-linear-gradient(315deg,var(--pattern-foreground)_0,var(--pattern-foreground)_1px,transparent_0,transparent_50%)] before:bg-size-[10px_10px] before:[--pattern-foreground:var(--color-edge)]/56"
          )}
        />
      </div>

      <Prose className="px-4 pb-8">
        <h1 className="screen-line-after text-3xl font-semibold tracking-tight">
          {entry.metadata.title}
        </h1>

        <p className="text-muted-foreground">{entry.metadata.description}</p>

        <GalleryProvider>
          <div>
            <EntryComponent />
          </div>
        </GalleryProvider>
      </Prose>

      <div className="screen-line-before screen-line-after">
        <div
          className={cn(
            "h-8",
            "before:absolute before:-left-[100vw] before:-z-1 before:h-full before:w-[200vw]",
            "before:bg-[repeating-linear-gradient(315deg,var(--pattern-foreground)_0,var(--pattern-foreground)_1px,transparent_0,transparent_50%)] before:bg-size-[10px_10px] before:[--pattern-foreground:var(--color-edge)]/56"
          )}
        />
      </div>
    </>
  )
}
