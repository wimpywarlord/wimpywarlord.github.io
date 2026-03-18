import { cache } from "react"

import { CrackedReactDev } from "@/components/blog-posts/cracked-dev"
import { CsGuideForAutisticNerds } from "@/components/blog-posts/cs-guide-for-autistic-nerds"
import { InterfaceForReality } from "@/components/blog-posts/interface_for_reality"
import { LlmWukong } from "@/components/blog-posts/llm-video-games"
import { MacosOnSteroids } from "@/components/blog-posts/macos-setup-guide"
import { MemeCollection } from "@/components/blog-posts/meme-collection"
import { Mindset } from "@/components/blog-posts/mindset"
import { Piracy } from "@/components/blog-posts/piracy"
import { RealizedMan } from "@/components/blog-posts/realized-man"
import { SovereignIndividual } from "@/components/blog-posts/sovereign_individual"
import { Taste } from "@/components/blog-posts/taste"
import { SoulfulCss } from "@/components/blog-posts/soulful-css"
import { DraculaTheming } from "@/components/blog-posts/theming-macos"
import type { Post } from "@/features/blog/types/post"

const postsRaw: Post[] = [
  {
    slug: "soulful-css",
    metadata: {
      title: "Soulful CSS",
      description:
        "CSS that doesn't just work — it feels right. Subtle differences that separate functional from beautiful.",
      image: "/assets/blog/blog_thum_soulful_css.gif",
      createdAt: "2026-03-17",
      updatedAt: "2026-03-17",
      pinned: false,
    },
    component: SoulfulCss,
  },
  {
    slug: "cracked-react-dev",
    metadata: {
      title: "Cracked React Dev",
      description:
        "Collection of tools, workflows, and resources to become an elite React developer.",
      image: "/assets/blog/blog_thum_12.gif",
      createdAt: "2025-06-29",
      updatedAt: "2025-06-29",
      pinned: true,
    },
    component: CrackedReactDev,
  },
  {
    slug: "cs-guide-for-autistic-nerds",
    metadata: {
      title: "CS Guide for Autistic Nerds",
      description:
        "A computer science study plan for the obsessively curious.",
      image: "/assets/blog/blog_thum_1.gif",
      createdAt: "2025-05-15",
      updatedAt: "2025-05-15",
    },
    component: CsGuideForAutisticNerds,
  },
  {
    slug: "interface-for-reality",
    metadata: {
      title: "Interface for Reality",
      description:
        "Exploring the intersection of digital interfaces and our perception of reality.",
      image: "/assets/blog/blog_thum_2.gif",
      createdAt: "2025-04-20",
      updatedAt: "2025-04-20",
    },
    component: InterfaceForReality,
  },
  {
    slug: "llm-video-games",
    metadata: {
      title: "LLM Video Games",
      description:
        "Using AI agents to play Black Myth Wukong and exploring the future of game AI.",
      image: "/assets/blog/blog_thum_3.gif",
      createdAt: "2025-04-10",
      updatedAt: "2025-04-10",
    },
    component: LlmWukong,
  },
  {
    slug: "macos-setup-guide",
    metadata: {
      title: "macOS on Steroids",
      description:
        "The ultimate macOS setup guide for developers who want peak productivity.",
      image: "/assets/blog/blog_thum_4.gif",
      createdAt: "2025-03-25",
      updatedAt: "2025-03-25",
    },
    component: MacosOnSteroids,
  },
  {
    slug: "meme-collection",
    metadata: {
      title: "Meme Collection",
      description: "A curated collection of the finest memes from the internet.",
      image: "/assets/blog/blog_thum_5.gif",
      createdAt: "2025-03-15",
      updatedAt: "2025-03-15",
    },
    component: MemeCollection,
  },
  {
    slug: "mindset",
    metadata: {
      title: "Mindset",
      description:
        "Thoughts on cultivating the right mindset for building and creating.",
      image: "/assets/blog/blog_thum_6.gif",
      createdAt: "2025-03-01",
      updatedAt: "2025-03-01",
    },
    component: Mindset,
  },
  {
    slug: "piracy",
    metadata: {
      title: "Piracy",
      description: "A deep dive into display technology and digital media.",
      image: "/assets/blog/blog_thum_7.gif",
      createdAt: "2025-02-20",
      updatedAt: "2025-02-20",
    },
    component: Piracy,
  },
  {
    slug: "realized-man",
    metadata: {
      title: "Realized Man",
      description:
        "Reflections on service, purpose, and what it means to be fully realized.",
      image: "/assets/blog/blog_thum_8.gif",
      createdAt: "2025-02-10",
      updatedAt: "2025-02-10",
    },
    component: RealizedMan,
  },
  {
    slug: "sovereign-individual",
    metadata: {
      title: "Sovereign Individual",
      description:
        "Notes on sovereignty, independence, and building your own path.",
      image: "/assets/blog/blog_thum_9.gif",
      createdAt: "2025-01-25",
      updatedAt: "2025-01-25",
    },
    component: SovereignIndividual,
  },
  {
    slug: "taste",
    metadata: {
      title: "Taste",
      description:
        "Developing taste in design — recognizing what works and why.",
      image: "/assets/blog/blog_thum_10.gif",
      createdAt: "2025-01-15",
      updatedAt: "2025-01-15",
    },
    component: Taste,
  },
  {
    slug: "theming-macos",
    metadata: {
      title: "Theming macOS with Dracula",
      description:
        "A guide to theming your entire macOS setup with the Dracula color scheme.",
      image: "/assets/blog/blog_thum_11.gif",
      createdAt: "2025-01-05",
      updatedAt: "2025-01-05",
    },
    component: DraculaTheming,
  },
]

export const getAllPosts = cache(() => {
  return [...postsRaw].sort((a, b) => {
    if (a.metadata.pinned && !b.metadata.pinned) return -1
    if (!a.metadata.pinned && b.metadata.pinned) return 1
    return (
      new Date(b.metadata.createdAt).getTime() -
      new Date(a.metadata.createdAt).getTime()
    )
  })
})

export function getPostBySlug(slug: string) {
  return getAllPosts().find((post) => post.slug === slug)
}

export function findNeighbour(posts: Post[], slug: string) {
  const len = posts.length
  for (let i = 0; i < len; ++i) {
    if (posts[i].slug === slug) {
      return {
        previous: i > 0 ? posts[i - 1] : null,
        next: i < len - 1 ? posts[i + 1] : null,
      }
    }
  }
  return { previous: null, next: null }
}
