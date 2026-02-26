import type { Experience } from "../types/experiences"

export const EXPERIENCES: Experience[] = [
  {
    id: "washu",
    companyName: "Washington University in St. Louis",
    positions: [
      {
        id: "washu-db-analyst",
        title: "Database Analyst",
        employmentPeriod: {
          start: "09.2024",
        },
        employmentType: "Full-time",
        icon: "code",
        skills: [
          "Python",
          "Data Analysis",
          "SQL",
          "Machine Learning",
        ],
        isExpanded: true,
      },
    ],
    isCurrentEmployer: true,
  },
  {
    id: "illumio",
    companyName: "Illumio",
    companyWebsite: "https://illumio.com",
    positions: [
      {
        id: "illumio-mts2",
        title: "Member of Technical Staff 2",
        employmentPeriod: {
          start: "06.2025",
          end: "10.2025",
        },
        employmentType: "Full-time",
        icon: "code",
        skills: ["React", "TypeScript", "Python", "Security"],
      },
    ],
  },
  {
    id: "ego-yc",
    companyName: "ego (YC W24)",
    positions: [
      {
        id: "ego-ai-engineer",
        title: "Full Stack AI Engineer",
        employmentPeriod: {
          start: "01.2025",
          end: "07.2025",
        },
        employmentType: "Full-time",
        icon: "code",
        skills: ["React", "TypeScript", "Python", "AI"],
      },
    ],
  },
  {
    id: "rivian",
    companyName: "Rivian",
    companyWebsite: "https://rivian.com",
    positions: [
      {
        id: "rivian-swe-intern",
        title: "Software Engineering Intern - Factory Systems",
        employmentPeriod: {
          start: "05.2023",
          end: "12.2023",
        },
        employmentType: "Full-time",
        icon: "code",
        skills: ["React", "TypeScript", "Python", "Cloud"],
      },
    ],
  },
  {
    id: "asu-dt",
    companyName: "Arizona State University",
    positions: [
      {
        id: "asu-dt-swe",
        title: "Software Developer at Decision Theater",
        employmentPeriod: {
          start: "09.2022",
          end: "01.2025",
        },
        employmentType: "Part-time",
        icon: "code",
        skills: ["GitHub", "Flutter", "Firebase", "Git", "Python"],
      },
    ],
  },
  {
    id: "education",
    companyName: "Education",
    positions: [
      {
        id: "asu",
        title: "Arizona State University",
        employmentPeriod: {
          start: "2020",
          end: "2024",
        },
        icon: "education",
        description: "Computer Science",
        skills: [
          "Algorithms",
          "Data Structures",
          "Systems Design",
          "Machine Learning",
        ],
      },
      {
        id: "vit",
        title: "VIT University",
        employmentPeriod: {
          start: "2018",
          end: "2020",
        },
        icon: "education",
        description: "Computer Science and Engineering",
        skills: ["C++", "Java", "Python", "Data Structures"],
      },
    ],
  },
]
