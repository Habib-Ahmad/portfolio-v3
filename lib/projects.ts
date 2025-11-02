export type Project = {
  id: string;
  title: string;
  description: string;
  stack: string[];
  github?: string;
  live?: string;
  image?: string; // for big cards
  featured?: boolean; // big card flag

  isMobileApp?: boolean;
  playStoreUrl?: string;
  appStoreUrl?: string;
  beta?: boolean;
};

export const projects: Project[] = [
  {
    id: "neosocial",
    title: "NeoSocial",
    description:
      "A graph-based social network with real-time updates and rich media sharing. Built on Neo4j and WebSockets for fast feeds and relationship-driven recommendations. Includes posts, comments, groups, messaging, and image uploads. Designed with React + TypeScript for a smooth, responsive UX.",
    stack: ["React.js", "TypeScript", "Neo4j", "Node.js", "WebSockets"],
    github: "https://github.com/Habib-Ahmad/neosocial",
    live: "https://neosocial.onrender.com/login",
    image: "/neosocial.png",
    featured: true,
  },
  {
    id: "mistral-analytics",
    title: "Mistral Analytics Chatbot",
    description:
      "Ask questions in natural language and get safe, validated SQL with instant charts. Guardrails enforce SELECT-only queries, auto-limits, and schema awareness. Neon/Postgres powers storage; Recharts renders visuals in a polished Next.js UI. Built for quick, trustworthy exploratory analysis.",
    stack: ["Next.js", "TypeScript", "Postgres", "Mistral", "Recharts"],
    github: "https://github.com/Habib-Ahmad/mistral-analytics-chat",
    live: "https://mistral-analytics-chat.vercel.app/",
    image: "/mistral.png",
    featured: true,
  },
  {
    id: "fixperts",
    title: "Fixperts",
    description:
      "A services marketplace for booking skilled providers with live chat and status updates. Users can request, confirm, complete, or cancel jobs with clear flows. Real-time messaging runs on WebSockets; the backend uses Spring Boot with MongoDB. Built to reduce friction and missed appointments.",
    stack: ["Spring Boot", "MongoDB", "React.js", "WebSockets"],
    github: "https://github.com/Habib-Ahmad/fixperts",
    live: "https://fixperts.onrender.com/",
    image: "/fixperts.png",
    featured: true,
  },
  {
    id: "pillais-group",
    title: "Pillais Group",
    description:
      "Corporate website for an innovation ecosystem company. Clean, fast pages with responsive layouts and solid SEO defaults.",
    stack: ["Next.js", "TypeScript", "Tailwind"],
    github: undefined,
    live: "https://pillais.group/",
  },
  {
    id: "famly",
    title: "FAMLY Fintech App",
    description:
      "A cooperative finance app for contributions, savings targets, and group deals. Real-time operations keep balances and statuses in sync across devices.",
    stack: ["Next.js", "Convex", "Tailwind", "TypeScript"],
    github: "https://github.com/your/repo2",
    live: undefined, // no live link yet
    image: "/project2.png",
    isMobileApp: true,
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.famlyapp",
    appStoreUrl: "https://apps.apple.com/app/famly/id1234567890",
  },
  {
    id: "ultra",
    title: "Ultra Crypto Trading",
    description:
      "A mobile crypto trading app with streamlined order flows and clear dashboards. Built for quick actions and portfolio tracking on the go.",
    stack: ["React Native", ".NET Core"],
    github: "https://github.com/your/repo4",
    isMobileApp: true,
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.ultra",
    appStoreUrl: "https://apps.apple.com/app/ultra/id1234567890",
  },
  {
    id: "student-shelter",
    title: "Student Shelter",
    description:
      "Search and compare housing options tailored for students. Simple filters and listings make it easy to find a good match.",
    stack: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    github: "https://github.com/Habib-Ahmad/student-shelter",
    live: undefined,
  },
  {
    id: "cspillai",
    title: "CSPillai Website",
    description:
      "Corporate site for CSPillai consulting. Lightweight, responsive build focused on clarity and speed.",
    stack: ["React.js", "CSS"],
    github: undefined,
    live: "https://cspillai.com/",
  },
  {
    id: "invest2exit",
    title: "Invest2Exit",
    description:
      "Investment platform that connects startups with investors and showcases opportunities. Includes onboarding, deal pages, and basic tracking.",
    stack: ["React.js", "Node.js", "Express", "MongoDB"],
    github: undefined,
    live: "https://foundingbystakeholders.cspillai.com/",
  },
];
