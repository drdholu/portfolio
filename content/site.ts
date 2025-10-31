export type SiteContent = {
  routes: { projects: string };
  home: { featuredProjectsCount: 2 | "all" };
  meta: { name: string; title: string; description: string; resumeUrl: string };
  socials: { github: string; linkedin: string; twitter?: string; email: string };
  hero: { headline: string; subheadline: string; ctaLabel: string };
  projects: Array<{
    id: string;
    title: string;
    description: string;
    tags: string[];
    image: string;
    links?: { demo?: string; repo?: string };
  }>;
  experience: Array<{
    company: string;
    role: string;
    location?: string;
    start: string;
    end?: string;
    bullets: string[];
  }>;
  about: { bio: string; skills: string[] };
  nav: Array<{ id: string; label: string; href: `#${string}` }>;
};

export const siteContent: SiteContent = {
  routes: { projects: "/projects" },
  home: { featuredProjectsCount: 2 },
  meta: {
    name: "Paras",
    title: "itsParas",
    description: "Lorem Ipsum",
    resumeUrl: "#",
  },
  socials: {
    github: "https://github.com/drdholu",
    linkedin: "https://www.linkedin.com/in/parasdhole/",
    email: "mailto:you@example.com",
  },
  hero: {
    headline: "Hi, I build minimal, fast web experiences.",
    subheadline: "Next.js, TypeScript, Design Systems.",
    ctaLabel: "View work",
  },
  projects: [
    {
      id: "proj-1",
      title: "LoremIpsum",
      description: "Lorem Ipsum",
      tags: ["Next.js", "TypeScript", "Tailwind"],
      image: "/placeholder/project-1.svg",
      links: { demo: "#", repo: "#" },
    },
    {
      id: "proj-2",
      title: "LoremIpsum",
      description: "Lorem Ipsum",
      tags: ["Node.js", "TypeScript"],
      image: "/placeholder/project-2.svg",
      links: { demo: "#", repo: "#" },
    },
    {
      id: "proj-3",
      title: "LoremIpsum",
      description: "Lorem Ipsum",
      tags: ["Next.js", "WebSockets"],
      image: "/placeholder/project-3.svg",
      links: { demo: "#", repo: "#" },
    },
    {
      id: "proj-4",
      title: "LoremIpsum",
      description: "Lorem Ipsum",
      tags: ["Next.js", "Design"],
      image: "/placeholder/project-4.svg",
      links: { demo: "#", repo: "#" },
    },
  ],
  experience: [
    {
      company: "Company A",
      role: "Lorem Ipsum",
      location: "Remote",
      start: "2025",
      bullets: [
        "Lorem Ipsum.",
        "Lorem Ipsum",
      ],
    },
  ],
  about: {
    bio: "I’m a Full Stack developer focused on minimal design, performance, and clean systems.",
    skills: ["Next.js", "TypeScript", "Tailwind", "Node.js"],
  },
  nav: [
    // { id: "home", label: "Home", href: "#home" },
    // { id: "work", label: "Work", href: "#work" },
    // { id: "experience", label: "Experience", href: "#experience" },
    // { id: "about", label: "About", href: "#about" },
    // { id: "contact", label: "Contact", href: "#contact" },
  ],
};


