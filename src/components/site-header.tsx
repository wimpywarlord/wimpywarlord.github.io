import dynamic from "next/dynamic"
import Link from "next/link"

import { DesktopNav } from "@/components/desktop-nav"
import { MAIN_NAV } from "@/config/site"
import { getAllPosts } from "@/features/blog/data/posts"
import type { PostPreview } from "@/features/blog/types/post"
import { cn } from "@/lib/utils"

import { ThemeToggle } from "./theme-toggle"

const CommandMenu = dynamic(() =>
  import("@/components/command-menu").then((mod) => mod.CommandMenu)
)

const MobileNav = dynamic(() =>
  import("@/components/mobile-nav").then((mod) => mod.MobileNav)
)

export function SiteHeader() {
  const posts = getAllPosts()

  const postPreviews: PostPreview[] = posts.map((post) => ({
    slug: post.slug,
    title: post.metadata.title,
  }))

  return (
    <header
      className={cn(
        "sticky top-0 z-50 max-w-screen overflow-x-hidden bg-background px-2 pt-2"
      )}
    >
      <div
        className="screen-line-before screen-line-after mx-auto flex h-12 items-center justify-between gap-2 border-x border-edge px-2 after:z-1 after:transition-[background-color] sm:gap-4 md:max-w-3xl"
        data-header-container
      >
        <Link
          className="transition-[scale] ease-out active:scale-[0.98] font-semibold text-lg"
          href="/"
          aria-label="Home"
        >
          Kshitij (Tjay) Dhyani
        </Link>

        <div className="flex-1" />

        <DesktopNav items={MAIN_NAV} />

        <div className="flex items-center *:first:mr-2">
          <CommandMenu posts={postPreviews} />
          <span className="mx-2 flex h-4 w-px bg-border" />
          <ThemeToggle />
          <MobileNav items={MAIN_NAV} />
        </div>
      </div>
    </header>
  )
}
