"use client"

import { CopyIcon, MailIcon } from "lucide-react"
import { useHotkeys } from "react-hotkeys-hook"
import { toast } from "sonner"

import { Button } from "@/components/ui/button"
import { useIsClient } from "@/hooks/use-is-client"
import { copyText } from "@/utils/copy"
import { decodeEmail } from "@/utils/string"

import {
  IntroItem,
  IntroItemContent,
  IntroItemIcon,
  IntroItemLink,
} from "./intro-item"

type EmailItemProps = {
  email: string
}

export function EmailItem({ email }: EmailItemProps) {
  const isClient = useIsClient()
  const emailDecoded = decodeEmail(email)

  useHotkeys("shift+e", () => {
    copyText(emailDecoded)
    toast.success("Email copied")
  })

  return (
    <IntroItem className="group">
      <IntroItemIcon>
        <MailIcon />
      </IntroItemIcon>

      <IntroItemContent>
        <IntroItemLink
          href={isClient ? `mailto:${emailDecoded}` : "#"}
          aria-label={
            isClient ? `Send email to ${emailDecoded}` : "Email address"
          }
        >
          {isClient ? emailDecoded : "[Email protected]"}
        </IntroItemLink>
      </IntroItemContent>

      <div className="-translate-x-2 translate-y-px opacity-0 transition-opacity group-hover:opacity-100">
        <Button
          className="text-muted-foreground"
          variant="ghost"
          size="icon-xs"
          onClick={() => {
            copyText(isClient ? emailDecoded : "")
            toast.success("Email copied")
          }}
        >
          <CopyIcon className="size-3" />
          <span className="sr-only">Copy email</span>
        </Button>
      </div>
    </IntroItem>
  )
}
