import { USER } from "@/features/portfolio/data/user"
import type { NavItem } from "@/types/nav"

export const SITE_INFO = {
  name: USER.displayName,
  url: process.env.APP_URL || "https://kshitijdhyani.com",
  ogImage: USER.ogImage,
  description: USER.bio,
  keywords: USER.keywords,
}

export const META_THEME_COLORS = {
  light: "#ffffff",
  dark: "#09090b",
}

export const MAIN_NAV: NavItem[] = [
  {
    title: "Portfolio",
    href: "/",
  },
  {
    title: "Blog",
    href: "/blog",
  },
]

export const GITHUB_USERNAME = "wimpywarlord"
export const SOURCE_CODE_GITHUB_URL = "https://github.com/wimpywarlord/wimpywarlord.github.io"

export const UTM_PARAMS = {
  utm_source: "kshitijdhyani.com",
}
