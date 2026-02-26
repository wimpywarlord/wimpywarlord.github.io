import type { User } from "@/features/portfolio/types/user"

export const USER = {
  firstName: "Kshitij",
  lastName: "Dhyani",
  displayName: "Kshitij (Tjay) Dhyani",
  username: "wimpywarlord",
  gender: "male",
  pronouns: "he/him",
  bio: "Database Analyst at WashU. Former Illumio, ego (YC W24), Rivian.",
  flipSentences: [
    "Your PATH is uniquely yours",
    "Limit the number of details every detail perfect",
    "Work becomes flow at the limits of ability",
    "Happiness is a skill you identify and develop",
  ],
  address: "Delhi — Phoenix",
  phoneNumber: "", // not public
  email: "ZW1haWxvZmtzaGl0aWpkaHlhbmlAZ21haWwuY29t", // base64 encoded
  website: "https://kshitijdhyani.com",
  jobTitle: "Database Analyst",
  jobs: [
    {
      title: "Database Analyst",
      company: "Washington University in St. Louis",
      website: "https://wustl.edu",
    },
  ],
  about: `
- Part of projects [shortsbro.com](https://shortsbro.com), [gradmits.com](https://gradmits.com), and [gradbro.com](https://gradbro.com).
- Started coding to help my grandfather fight Alzheimer's — built this.
- Cooked up:
  - AI agent that plays — [Black Myth Wukong](/blog/llm-video-games).
  - Social deduction AI game — [Accomplice](https://www.linkedin.com/posts/kshitijdhyani_joined-ego-yc-w24-in-january-bringing-activity-7308904504999976960-4piP).
  - Campus utility app for my university — [MessIt](https://play.google.com/store/apps/details?id=com.vinnovateit.messit).
`,
  avatar: "/assets/logo.jpg",
  ogImage: "/assets/logo.jpg",
  namePronunciationUrl: "/assets/my_name.mp3",
  timeZone: "America/Denver",
  keywords: [
    "kshitij dhyani",
    "kshitij",
    "dhyani",
    "wimpywarlord",
    "gradbro",
    "tjay",
    "type_kshitij",
  ],
  dateCreated: "2024-01-01",
} satisfies User
