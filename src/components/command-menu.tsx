"use client"

import { useCommandState } from "cmdk"
import type { LucideProps } from "lucide-react"
import {
  CornerDownLeftIcon,
  LayersIcon,
  MoonStarIcon,
  MousePointer2Icon,
  RssIcon,
  SunMediumIcon,
  TextIcon,
  TextInitialIcon,
} from "lucide-react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { useTheme } from "next-themes"
import React, { useCallback, useMemo, useState } from "react"
import { useHotkeys } from "react-hotkeys-hook"

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import type { PostPreview } from "@/features/blog/types/post"
import { SOCIAL_LINKS } from "@/features/portfolio/data/social-links"
import { useDuckFollowerVisibility } from "@/hooks/use-duck-follower-visibility"
import { cn } from "@/lib/utils"

import { Icons } from "./icons"
import { Button } from "./ui/button"
import { Kbd, KbdGroup } from "./ui/kbd"
import { Separator } from "./ui/separator"

type CommandLinkItem = {
  title: string
  href: string
  icon?: React.ComponentType<LucideProps>
  iconImage?: string
  keywords?: string[]
  openInNewTab?: boolean
}

const MENU_LINKS: CommandLinkItem[] = [
  {
    title: "Portfolio",
    href: "/",
    icon: TextInitialIcon,
  },
  {
    title: "Blog",
    href: "/blog",
    icon: RssIcon,
  },
]

const PORTFOLIO_LINKS: CommandLinkItem[] = [
  {
    title: "About",
    href: "/#about",
    icon: TextInitialIcon,
  },
  {
    title: "Tech Stack",
    href: "/#stack",
    icon: LayersIcon,
  },
]

const SOCIAL_LINK_ITEMS: CommandLinkItem[] = SOCIAL_LINKS.map((item) => ({
  title: item.title,
  href: item.href,
  iconImage: item.icon,
  openInNewTab: true,
}))

export function CommandMenu({ posts }: { posts: PostPreview[] }) {
  const router = useRouter()
  const { setTheme } = useTheme()
  const [open, setOpen] = useState(false)
  const [, setIsDuckFollowerVisible] = useDuckFollowerVisibility()

  useHotkeys("mod+k, slash", (e) => {
    e.preventDefault()
    setOpen((open) => !open)
  })

  const handleOpenLink = useCallback(
    (href: string, openInNewTab = false) => {
      setOpen(false)
      if (openInNewTab) {
        window.open(href, "_blank", "noopener")
      } else {
        router.push(href)
      }
    },
    [router]
  )

  const createThemeHandler = useCallback(
    (theme: "light" | "dark" | "system") => () => {
      setOpen(false)
      setTheme(theme)
    },
    [setTheme]
  )

  const handleToggleDuckFollower = useCallback(() => {
    setOpen(false)
    setIsDuckFollowerVisible((isVisible) => !isVisible)
  }, [setIsDuckFollowerVisible])

  const blogLinks = useMemo(
    () =>
      posts.map<CommandLinkItem>((post) => ({
        title: post.title,
        href: `/blog/${post.slug}`,
      })),
    [posts]
  )

  return (
    <>
      <Button
        variant="secondary"
        className={cn(
          "h-8 gap-1.5 rounded-full border border-input bg-white px-2.5 text-muted-foreground shadow-xs select-none hover:bg-white dark:bg-input/30 dark:hover:bg-input/30",
          "relative before:pointer-events-none before:absolute before:inset-0 before:rounded-full before:shadow-[0_1px_--theme(--color-black/4%)] dark:before:shadow-[0_-1px_--theme(--color-white/6%)]"
        )}
        onClick={() => setOpen(true)}
      >
        <Icons.search aria-hidden />

        <span className="font-sans text-sm/4 font-medium sm:hidden">
          Search…
        </span>

        <KbdGroup className="hidden sm:in-[.os-macos_&]:flex">
          <Kbd className="w-5 min-w-5">⌘</Kbd>
          <Kbd className="w-5 min-w-5">K</Kbd>
        </KbdGroup>

        <KbdGroup className="hidden sm:not-[.os-macos_&]:flex">
          <Kbd>Ctrl</Kbd>
          <Kbd className="w-5 min-w-5">K</Kbd>
        </KbdGroup>
      </Button>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search…" />

        <CommandList className="min-h-80 supports-timeline-scroll:scroll-fade-effect-y">
          <CommandEmpty>No results found.</CommandEmpty>

          <CommandLinkGroup
            heading="Menu"
            links={MENU_LINKS}
            onLinkSelect={handleOpenLink}
          />

          <CommandLinkGroup
            heading="Portfolio"
            links={PORTFOLIO_LINKS}
            onLinkSelect={handleOpenLink}
          />

          <CommandLinkGroup
            heading="Blog"
            links={blogLinks}
            fallbackIcon={TextIcon}
            onLinkSelect={handleOpenLink}
          />

          <CommandLinkGroup
            heading="Social Links"
            links={SOCIAL_LINK_ITEMS}
            onLinkSelect={handleOpenLink}
          />

          <CommandGroup heading="Theme">
            <CommandItem
              keywords={["theme"]}
              onSelect={createThemeHandler("light")}
            >
              <SunMediumIcon />
              Light
            </CommandItem>
            <CommandItem
              keywords={["theme"]}
              onSelect={createThemeHandler("dark")}
            >
              <MoonStarIcon />
              Dark
            </CommandItem>
            <CommandItem
              keywords={["theme"]}
              onSelect={createThemeHandler("system")}
            >
              <Icons.contrast />
              Auto
            </CommandItem>
          </CommandGroup>

          <CommandGroup heading="Interactive Features">
            <CommandItem onSelect={handleToggleDuckFollower}>
              <MousePointer2Icon />
              Toggle Duck Follower
            </CommandItem>
          </CommandGroup>
        </CommandList>

        <CommandMenuFooter />
      </CommandDialog>
    </>
  )
}

function CommandLinkGroup({
  heading,
  links,
  fallbackIcon,
  onLinkSelect,
}: {
  heading: string
  links: CommandLinkItem[]
  fallbackIcon?: React.ComponentType<LucideProps>
  onLinkSelect: (href: string, openInNewTab?: boolean) => void
}) {
  return (
    <CommandGroup heading={heading}>
      {links.map((link) => {
        const Icon = link?.icon ?? fallbackIcon ?? React.Fragment

        return (
          <CommandItem
            key={link.href}
            keywords={link.keywords}
            onSelect={() => onLinkSelect(link.href, link.openInNewTab)}
          >
            {link?.iconImage ? (
              <Image
                className="rounded-sm corner-squircle supports-corner-shape:rounded-[50%]"
                src={link.iconImage}
                alt={link.title}
                width={16}
                height={16}
                unoptimized
              />
            ) : (
              <Icon />
            )}
            {link.title}
          </CommandItem>
        )
      })}
    </CommandGroup>
  )
}

type CommandKind = "command" | "page" | "link"

const ENTER_ACTION_LABELS: Record<CommandKind, string> = {
  command: "Run Command",
  page: "Go to Page",
  link: "Open Link",
}

function buildCommandMetaMap() {
  const commandMetaMap = new Map<string, { commandKind: CommandKind }>()

  commandMetaMap.set("Light", { commandKind: "command" })
  commandMetaMap.set("Dark", { commandKind: "command" })
  commandMetaMap.set("Auto", { commandKind: "command" })
  commandMetaMap.set("Toggle Duck Follower", { commandKind: "command" })

  SOCIAL_LINK_ITEMS.forEach((item) => {
    commandMetaMap.set(item.title, { commandKind: "link" })
  })

  return commandMetaMap
}

const COMMAND_META_MAP = buildCommandMetaMap()

function CommandMenuFooter() {
  const selectedCommandKind = useCommandState(
    (state) => COMMAND_META_MAP.get(state.value)?.commandKind ?? "page"
  )

  return (
    <>
      <div className="flex h-10" />

      <div className="absolute inset-x-0 bottom-0 flex h-10 items-center justify-end gap-2 rounded-b-2xl border-t bg-zinc-100/30 px-4 text-xs font-medium dark:bg-zinc-800/30">
        <div className="flex shrink-0 items-center gap-2">
          <span>{ENTER_ACTION_LABELS[selectedCommandKind]}</span>
          <Kbd>
            <CornerDownLeftIcon />
          </Kbd>
          <Separator
            orientation="vertical"
            className="data-[orientation=vertical]:h-4"
          />
          <span className="text-muted-foreground">Exit</span>
          <Kbd>Esc</Kbd>
        </div>
      </div>
    </>
  )
}
