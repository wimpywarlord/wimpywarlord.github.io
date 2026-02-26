"use client"

import { XIcon } from "lucide-react"
import { useHotkeys } from "react-hotkeys-hook"

import { Icons } from "@/components/icons"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group"

import { useSearchQuery } from "../hooks/use-search-query"

export function PostSearchInput() {
  const { query, setQuery } = useSearchQuery()

  useHotkeys("esc", () => setQuery(null), { enableOnFormTags: true })

  return (
    <InputGroup className="rounded-lg">
      <InputGroupAddon className="pl-2">
        <Icons.search />
      </InputGroupAddon>

      <InputGroupInput
        placeholder="Search Blog…"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value)
        }}
      />

      <InputGroupAddon
        className="data-[disabled=true]:hidden"
        align="inline-end"
        data-disabled={!query.length}
      >
        <InputGroupButton
          aria-label="Clear"
          title="Clear"
          size="icon-xs"
          onClick={() => setQuery(null)}
        >
          <XIcon />
        </InputGroupButton>
      </InputGroupAddon>
    </InputGroup>
  )
}
