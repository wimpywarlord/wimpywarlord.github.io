import type { Project } from "../types/projects"

export const PROJECTS: Project[] = [
  {
    id: "gradbro",
    title: "Gradbro",
    period: {
      start: "2024",
    },
    link: "https://gradbro.com",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "Python",
      "AI",
      "Product",
    ],
    description:
      "Helping students navigate the graduate school admissions process. Building to 1M MRR.",
    isExpanded: true,
  },
  {
    id: "black-myth-wukong-ai",
    title: "Black Myth Wukong AI Agent",
    period: {
      start: "2025",
    },
    link: "https://github.com/wimpywarlord",
    skills: ["Python", "AI", "Computer Vision", "Reinforcement Learning"],
    description:
      "AI agent that plays Black Myth Wukong using computer vision and reinforcement learning techniques.",
  },
  {
    id: "accomplice",
    title: "Accomplice",
    period: {
      start: "2023",
      end: "2024",
    },
    link: "https://github.com/wimpywarlord",
    skills: ["React", "TypeScript", "AI", "Full-stack"],
    description: "AI-powered productivity and collaboration tool.",
  },
  {
    id: "messit",
    title: "MessIt",
    period: {
      start: "2022",
      end: "2023",
    },
    link: "https://github.com/wimpywarlord",
    skills: ["React Native", "TypeScript", "Firebase", "Mobile"],
    description: "Real-time messaging application with modern UX.",
  },
  {
    id: "alzheimers-research",
    title: "Alzheimer's Research",
    period: {
      start: "2021",
      end: "2022",
    },
    link: "https://github.com/wimpywarlord",
    skills: ["Python", "Machine Learning", "Research", "Healthcare"],
    description:
      "Research project applying machine learning to early Alzheimer's disease detection.",
  },
]
