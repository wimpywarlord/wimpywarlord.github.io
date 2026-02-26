import Image from "next/image"
import type { Metadata } from "next"
import { Suspense } from "react"

import { PostList } from "@/features/blog/components/post-list"
import { PostListWithSearch } from "@/features/blog/components/post-list-with-search"
import { PostSearchInput } from "@/features/blog/components/post-search-input"
import { getAllPosts } from "@/features/blog/data/posts"

export const metadata: Metadata = {
  title: "Blog",
  description: "A collection of articles on development, design, and ideas.",
}

export default function Page() {
  const allPosts = getAllPosts()

  return (
    <div className="min-h-svh">
      {/* Banner */}
      <div className="relative h-64 w-full overflow-hidden">
        <Image
          src="/assets/blog/banner_dark.jpg"
          alt="Blog banner"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="screen-line-after px-4">
        <h1 className="text-3xl font-semibold tracking-tight">Blog</h1>
      </div>

      <div className="p-4">
        <p className="font-mono text-sm text-balance text-muted-foreground">
          {metadata.description}
        </p>
      </div>

      <div className="screen-line-before screen-line-after p-2">
        <Suspense
          fallback={
            <div className="flex h-9 w-full rounded-lg border border-input shadow-xs dark:bg-input/30" />
          }
        >
          <PostSearchInput />
        </Suspense>
      </div>

      <Suspense fallback={<PostList posts={allPosts} />}>
        <PostListWithSearch posts={allPosts} />
      </Suspense>

      <div className="h-4" />
    </div>
  )
}
