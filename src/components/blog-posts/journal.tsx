"use client"

import { format } from "date-fns"
import Link from "next/link"

import { getAllJournalEntries } from "@/features/journal/data/entries"

export const Journal = () => {
  const entries = getAllJournalEntries()

  return (
    <div>
      <p>
        A running log. One page per day — unpolished, written for me first.
        Newest on top.
      </p>

      <ul className="list-none space-y-4 pl-0">
        {entries.map((entry) => (
          <li key={entry.slug} className="pl-0">
            <Link
              href={`/blog/journal/${entry.slug}`}
              className="group flex flex-col gap-0.5 no-underline"
            >
              <span className="font-mono text-sm text-muted-foreground">
                {format(new Date(`${entry.slug}T00:00:00`), "dd.MM.yyyy")}
              </span>
              <span className="text-primary underline-offset-2 group-hover:underline">
                {entry.metadata.title}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
