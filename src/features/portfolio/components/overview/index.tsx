import { LinkIcon, MapPinIcon } from "lucide-react"

import { USER } from "@/features/portfolio/data/user"
import { urlToName } from "@/utils/url"

import { Panel, PanelContent } from "../panel"
import { CurrentLocalTimeItem } from "./current-local-time-item"
import { EmailItem } from "./email-item"
import {
  IntroItem,
  IntroItemContent,
  IntroItemIcon,
  IntroItemLink,
} from "./intro-item"

export function Overview() {
  return (
    <Panel className="after:content-none">
      <h2 className="sr-only">Overview</h2>

      <PanelContent className="space-y-2.5">
        <div className="grid gap-x-4 gap-y-2.5 sm:grid-cols-2">
          <IntroItem>
            <IntroItemIcon>
              <MapPinIcon />
            </IntroItemIcon>
            <IntroItemContent>
              <IntroItemLink
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(USER.address)}`}
                aria-label={`Location: ${USER.address}`}
              >
                <span aria-hidden="true">🇮🇳</span> Delhi — <span aria-hidden="true">🇺🇸</span> Phoenix
              </IntroItemLink>
            </IntroItemContent>
          </IntroItem>

          <CurrentLocalTimeItem timeZone={USER.timeZone} />

          <EmailItem email={USER.email} />

          <IntroItem>
            <IntroItemIcon>
              <LinkIcon />
            </IntroItemIcon>
            <IntroItemContent>
              <IntroItemLink
                href={USER.website}
                aria-label={`Personal website: ${urlToName(USER.website)}`}
              >
                {urlToName(USER.website)}
              </IntroItemLink>
            </IntroItemContent>
          </IntroItem>
        </div>
      </PanelContent>
    </Panel>
  )
}
