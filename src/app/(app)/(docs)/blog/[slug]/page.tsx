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
import {
  findNeighbour,
  getAllPosts,
  getPostBySlug,
} from "@/features/blog/data/posts"
import type { Post } from "@/features/blog/types/post"
import { USER } from "@/features/portfolio/data/user"
import { cn } from "@/lib/utils"

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const slug = (await params).slug
  const post = getPostBySlug(slug)

  if (!post) {
    return notFound()
  }

  const { title, description, image, createdAt, updatedAt } = post.metadata
  const postUrl = `/blog/${slug}`

  return {
    title,
    description,
    alternates: {
      canonical: postUrl,
    },
    openGraph: {
      url: postUrl,
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

function getPageJsonLd(post: Post): WithContext<PageSchema> {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.metadata.title,
    description: post.metadata.description,
    image: post.metadata.image,
    url: `${SITE_INFO.url}/blog/${post.slug}`,
    datePublished: new Date(post.metadata.createdAt).toISOString(),
    dateModified: new Date(post.metadata.updatedAt).toISOString(),
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
    slug: string
  }>
}) {
  const slug = (await params).slug
  const post = getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  const allPosts = getAllPosts()
  const { previous, next } = findNeighbour(allPosts, slug)

  const PostComponent = post.component

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getPageJsonLd(post)).replace(/</g, "\\u003c"),
        }}
      />

      <PostKeyboardShortcuts basePath="/blog" previous={previous} next={next} />

      <div className="flex items-center justify-between p-2 pl-4">
        <Button
          className="h-7 gap-2 rounded-lg px-0 font-mono text-muted-foreground transition-[color] hover:text-foreground"
          variant="link"
          asChild
        >
          <Link href="/blog">
            <ArrowLeftIcon />
            Blog
          </Link>
        </Button>

        <div className="flex items-center gap-2">
          <PostShareMenu
            title={post.metadata.title}
            url={`/blog/${post.slug}`}
          />

          {previous && (
            <Tooltip>
              <TooltipTrigger
                render={
                  <Button variant="secondary" size="icon-sm" asChild>
                    <Link href={`/blog/${previous.slug}`}>
                      <ArrowLeftIcon />
                      <span className="sr-only">Previous</span>
                    </Link>
                  </Button>
                }
              />
              <TooltipContent className="pr-2 pl-3">
                <div className="flex items-center gap-3">
                  Previous Post
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
                    <Link href={`/blog/${next.slug}`}>
                      <span className="sr-only">Next</span>
                      <ArrowRightIcon />
                    </Link>
                  </Button>
                }
              />
              <TooltipContent className="pr-2 pl-3">
                <div className="flex items-center gap-3">
                  Next Post
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

      <Prose className="px-4">
        <h1 className="screen-line-after text-3xl font-semibold tracking-tight">
          {post.metadata.title}
        </h1>

        <p className="text-muted-foreground">{post.metadata.description}</p>

        <GalleryProvider>
          <div>
            <PostComponent />
          </div>
        </GalleryProvider>
      </Prose>

      <div className="screen-line-before h-4 w-full" />
    </>
  )
}
