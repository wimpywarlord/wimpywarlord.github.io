import type { ProfilePage as PageSchema, WithContext } from "schema-dts"

import { About } from "@/features/portfolio/components/about"
import { Blog } from "@/features/portfolio/components/blog"
import { Experiences } from "@/features/portfolio/components/experiences"
import { Overview } from "@/features/portfolio/components/overview"
import { ProfileCover } from "@/features/portfolio/components/profile-cover"
import { ProfileHeader } from "@/features/portfolio/components/profile-header"
import { Projects } from "@/features/portfolio/components/projects"
import { SocialLinks } from "@/features/portfolio/components/social-links-v2"
import { TechStack } from "@/features/portfolio/components/tech-stack"
import { USER } from "@/features/portfolio/data/user"
import { cn } from "@/lib/utils"

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getPageJsonLd()).replace(/</g, "\\u003c"),
        }}
      />

      <div className="mx-auto md:max-w-3xl *:[[id]]:scroll-mt-22">
        <div className="screen-line-after border-x border-edge">
          <div
            className={cn(
              "h-8",
              "before:absolute before:-left-[100vw] before:-z-1 before:h-full before:w-[200vw]",
              "before:bg-[repeating-linear-gradient(315deg,var(--pattern-foreground)_0,var(--pattern-foreground)_1px,transparent_0,transparent_50%)] before:bg-size-[10px_10px] before:[--pattern-foreground:var(--color-edge)]/56"
            )}
          />
        </div>
        <ProfileCover />
        <Separator />
        <ProfileHeader />
        <Separator />

        <Overview />
        <SocialLinks />
        <Separator />

        <About />
        <Separator />

        <TechStack />
        <Separator />

        <Blog />
        <Separator />

        {/* <Experiences />
        <Separator />

        <Projects />
        <Separator /> */}
      </div>
    </>
  )
}

function getPageJsonLd(): WithContext<PageSchema> {
  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    dateCreated: new Date(USER.dateCreated).toISOString(),
    dateModified: new Date().toISOString(),
    mainEntity: {
      "@type": "Person",
      name: USER.displayName,
      identifier: USER.username,
      image: USER.avatar,
    },
  }
}

function Separator({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative flex h-8 w-full border-x border-edge",
        "after:absolute after:top-0 after:-left-[100vw] after:-z-1 after:h-px after:w-[200vw] after:bg-edge",
        "before:absolute before:-left-[100vw] before:-z-1 before:h-8 before:w-[200vw]",
        "before:bg-[repeating-linear-gradient(315deg,var(--pattern-foreground)_0,var(--pattern-foreground)_1px,transparent_0,transparent_50%)] before:bg-size-[10px_10px] before:[--pattern-foreground:var(--color-edge)]/56",
        className
      )}
    />
  )
}
