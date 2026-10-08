// Edit this file to update everything on the site — no component changes required.

export type ExperienceItem = {
  company: string;
  role: string;
  dates: string;
  description?: string;
  link?: { label: string; url: string };
};

type SiteConfig = {
  name: string;
  title: string;
  description: string;
  intro: string[];
  social: {
    substack: string;
    linkedin: string;
    twitter: string;
    email: string;
  };
  experience: ExperienceItem[];
  writing: WritingItem[];
  reading: ReadingItem[];
};

export type WritingItem = {
  title: string;
  date: string;
  description?: string;
  url: string;
};

export type ReadingType = "Book" | "Essay" | "Paper" | "Other";

export type ReadingItem = {
  title: string;
  author: string;
  type: ReadingType;
  year?: string;
  url?: string;
  note?: string;
};

export const siteConfig: SiteConfig = {
  name: "Sachith Mankala",

  title: "Sachith Mankala",
  description:
    "Personal website of Sachith Mankala — experience, writing, and reading.",

  intro: [
    "I'm 20 and studied Computer Science and AI at Penn.",
    "I'm extremely curious about how consumers and enterprises behave to rapid advancements in technology.",
    "I'm passionate about all aspects of investing, pairing incredibly talented people to exceptional companies and discovering new and exciting founders and startups.",
    "Scrappiness. Hunger. Curiosity. Are principles I shape my life around.",
    "If you’re building a company, looking to recruit great talent from top universities, exploring your next startup, or just want intros to interesting people - let's chat!",
  ],

  social: {
    substack: "https://sachithm.substack.com/subscribe",
    linkedin: "https://www.linkedin.com/in/sachith-mankala/",
    twitter: "https://twitter.com/sachithmankala",
    email: "sachith.mankala@gmail.com",
  },

  experience: [
    {
      company: "TBD",
      role: "More to come.",
      dates: "",
      description: "",
    },
    {
      company: "Mido Capital",
      role: "Investor",
      dates: "2026 - Present",
      description: "Bryan Kim's debut fund.",
      link: {
        label: "WSJ",
        url: "https://www.wsj.com/pro/venture-capital/former-andreessen-horowitz-partner-targets-100-million-new-fund-29e24438",
      },
    },
    {
      company: "Blue Owl Capital",
      role: "Investor",
      dates: "2026 - 2026",
      description: "Opportunistic Credit.",
    },
    {
      company: "First Round Capital",
      role: "Investor",
      dates: "2025 - 2026",
      description: "Got to work with the best.",
    },
    {
      company: "Oaktree Capital Management",
      role: "Investor",
      dates: "2025 - 2025",
      description: "Met Howard Marks.",

    },
    {
      company: "FedTec",
      role: "Software Engineer",
      dates: "2024 - 2024",
      description: "Acquired for $XXX million.",

    },
  ],

  writing: [],

  // Add a `year` to entries once you have enough to group the list by year.
  reading: [],
};
