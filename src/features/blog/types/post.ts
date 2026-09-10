import type React from "react"

export type PostMetadata = {
  title: string
  description: string
  image?: string
  createdAt: string
  updatedAt: string
  pinned?: boolean
  new?: boolean
  archived?: boolean
}

export type Post = {
  metadata: PostMetadata
  slug: string
  component: React.ComponentType
}

export type PostPreview = {
  slug: string
  title: string
}
