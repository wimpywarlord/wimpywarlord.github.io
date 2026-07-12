"use client";
/* eslint-disable react/no-unescaped-entities */

import { useMemo, useState } from "react";
import Link from "next/link";
import { readingBooks, type ReadingBook } from "./reading-list-data";
import "@/styles/book-shelf.css";

const shortTitle = (title: string, max = 42) => {
  if (title.length <= max) return title;
  return `${title.slice(0, max - 1).trimEnd()}…`;
};

/**
 * Markup mirrors the original 3D book demo:
 * .container > .book > (.front > .cover) + .left-side
 */
const Book3D = ({ book }: { book: ReadingBook }) => {
  return (
    <div className="book-cell">
      <div className="book" aria-label={`${book.title} by ${book.author}`}>
        <div className="front">
          <div
            className="cover"
            style={
              book.cover
                ? { backgroundImage: `url("${book.cover}")` }
                : undefined
            }
          >
            {!book.cover ? (
              <div className="cover-fallback-inner">
                <p className="fallback-title">{shortTitle(book.title, 48)}</p>
                <p className="fallback-author">{book.author}</p>
              </div>
            ) : null}
          </div>
        </div>
        <div className="left-side">
          <h2>
            <span>{shortTitle(book.author, 16)}</span>
            <span>{shortTitle(book.title, 24)}</span>
          </h2>
        </div>
      </div>
    </div>
  );
};

const essays = [
  {
    title: "Billion Dollar PDFs",
    href: "https://billiondollarpdf.com/",
    note: "Memos, decks, papers, and threads that moved real capital",
  },
  {
    title: "Instapaper #2023239314",
    href: "https://www.instapaper.com/read/2023239314",
    note: "",
  },
  {
    title: "Instapaper #2006346990",
    href: "https://www.instapaper.com/read/2006346990",
    note: "",
  },
  {
    title: "Instapaper #2025326415",
    href: "https://www.instapaper.com/read/2025326415",
    note: "",
  },
  {
    title: "Instapaper #2023639448",
    href: "https://www.instapaper.com/read/2023639448",
    note: "",
  },
] as const;

export function ReadingList() {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return readingBooks;
    return readingBooks.filter(
      (b) =>
        b.title.toLowerCase().includes(q) ||
        b.author.toLowerCase().includes(q) ||
        b.authorSort.toLowerCase().includes(q)
    );
  }, [query]);

  return (
    <div className="prose prose-sm sm:prose-base lg:prose-lg dark:prose-invert max-w-none">
      <p>
        Reading is how I update my model of the world. Not for status, not for
        finishing badges — for better decisions under uncertainty. The through
        line is simple:{" "}
        <span className="text-primary font-semibold">
          knowledge is conjecture and criticism
        </span>
        , power compounds, markets are more honest than most institutions, and
        agency is a skill you train. Philosophy, startups, finance, systems —
        different surface, same project: see clearly, act freely, stay hard to
        capture.
      </p>
      <p>
        Below is everything currently in Calibre, then a short list of essays and
        PDFs that punch above most books.
      </p>

      <div className="not-prose my-6 w-full">
        <label className="sr-only" htmlFor="library-search">
          Search library
        </label>
        <input
          id="library-search"
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search title or author…"
          className="box-border w-full rounded-md border border-border bg-muted/40 px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary/40"
        />
        <p className="mt-2 text-xs text-muted-foreground">
          {filtered.length} books
        </p>
      </div>

      <div className="book-shelf not-prose">
        {filtered.map((book) => (
          <Book3D key={book.id} book={book} />
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="text-sm text-muted-foreground">No books match.</p>
      ) : null}

      <div className="my-6 sm:my-8 border-b border-border" />

      <h3 className="text-primary text-xl sm:text-2xl">Essays</h3>
      <ul className="space-y-2">
        {essays.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              target="_blank"
              className="text-primary hover:text-primary/80 underline underline-offset-2"
            >
              {item.title}
            </Link>
            {item.note ? ` — ${item.note}` : null}
          </li>
        ))}
      </ul>
    </div>
  );
}
