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
      "A graph-based social network with real-time updates and rich media sharing.",
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
      "AI-powered analytics dashboard with interactive data visualizations. You can ask questions about your data in natural language and get instant insights.",
    stack: ["Next.js", "TypeScript", "Postgres", "Mistral", "Recharts"],
    github: "https://github.com/Habib-Ahmad/mistral-analytics-chat",
    live: "https://mistral-analytics-chat.vercel.app/",
    image: "/mistral.png",
    featured: true,
  },
  {
    id: "fixperts",
    title: "Fixperts",
    description: "Expert repair marketplace with real-time communication.",
    stack: ["Spring Boot", "MongoDB", "React.js", "WebSockets"],
    github: "https://github.com/Habib-Ahmad/fixperts",
    live: "https://fixperts.onrender.com/",
    image: "/fixperts.png",
    featured: true,
  },
  {
    id: "pillais-group",
    title: "Pillais Group",
    description: "Website for Pillais Group, an innovation ecosystem company.",
    stack: ["Next.js", "TypeScript", "Tailwind"],
    github: undefined,
    live: "https://pillais.group/",
  },
  {
    id: "famly",
    title: "FAMLY Fintech App",
    description: "Cooperative finance platform with real-time operations.",
    stack: ["Next.js", "Convex", "Tailwind", "TypeScript"],
    github: "https://github.com/your/repo2",
    live: undefined, // no live link yet
    image: "/project2.png",
  },
  {
    id: "ultra",
    title: "Ultra Crypto Trading",
    description: "Mobile trading app; dashboards & flows.",
    stack: ["React Native", ".NET Core"],
    github: "https://github.com/your/repo4",
    isMobileApp: true,
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.ultra.app",
    appStoreUrl: "https://apps.apple.com/app/ultra-crypto-trading/id1234567890",
  },
  {
    id: "cspillai",
    title: "CSPillai Website",
    description: "Corporate site for CSPillai consulting firm.",
    stack: ["React.js", "CSS"],
    github: undefined,
    live: "https://cspillai.com/",
  },
  {
    id: "invest2exit",
    title: "Invest2Exit",
    description: "Investment platform connecting startups with investors.",
    stack: ["React.js", "Node.js", "Express", "MongoDB"],
    github: undefined,
    live: "https://foundingbystakeholders.cspillai.com/",
  },
  {
    id: "student-shelter",
    title: "Student Shelter",
    description: "Platform connecting students with housing options.",
    stack: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    github: "https://github.com/Habib-Ahmad/student-shelter",
    live: undefined,
  },
];
