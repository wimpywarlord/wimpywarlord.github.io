import { cache } from "react"

import { JournalEntry20260902 } from "@/components/journal-entries/2026-09-02"
import type { Post } from "@/features/blog/types/post"

// Journal entries reuse the Post shape: slug is the day (YYYY-MM-DD),
// so they plug straight into findNeighbour and PostKeyboardShortcuts.
const entriesRaw: Post[] = [
  {
    slug: "2026-09-02",
    metadata: {
      title: "Dealing with doubt — but I'm in rooms I could never have imagined",
      description: "Doubt is loud. The room says otherwise.",
      createdAt: "2026-09-02",
      updatedAt: "2026-09-02",
    },
    component: JournalEntry20260902,
  },
]

export const getAllJournalEntries = cache(() => {
  return [...entriesRaw].sort(
    (a, b) =>
      new Date(b.metadata.createdAt).getTime() -
      new Date(a.metadata.createdAt).getTime()
  )
})

export function getJournalEntryByDay(day: string) {
  return getAllJournalEntries().find((entry) => entry.slug === day)
}
