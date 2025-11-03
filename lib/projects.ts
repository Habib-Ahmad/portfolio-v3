export type Project = {
  id: string;
  title: string;
  description: string;
  stack: string[];
  github?: string;
  live?: string;
  image?: string;
  featured?: boolean;
  isMobileApp?: boolean;
  playStoreUrl?: string;
  appStoreUrl?: string;
  beta?: boolean;
};

export type ProjectsByLang = {
  fr: Project[];
  en: Project[];
};

export const projects: ProjectsByLang = {
  fr: [
    {
      id: "neosocial",
      title: "NeoSocial",
      description:
        "Réseau social basé sur un graphe, avec mises à jour en temps réel et partage de médias. Utilise Neo4j et WebSockets pour avoir un fil rapide et des recommandations selon les relations. Contient posts, commentaires, groupes, messagerie et upload d’images. Pensé pour une expérience fluide et réactive.",
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
        "On pose une question en langage naturel et on obtient du SQL sécurisé avec des graphiques instantanés. Les garde-fous permettent seulement les requêtes SELECT, ajoutent des limites et tiennent compte du schéma. Neon/Postgres sert au stockage et Recharts affiche les données dans une interface propre. Pensé pour faire de l’analyse rapide et fiable.",
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
        "Place de marché pour réserver des prestataires avec chat en direct et suivi du statut. L’utilisateur peut demander, valider, terminer ou annuler une mission facilement. La messagerie temps réel tourne sur WebSockets et le backend est en Spring Boot + MongoDB. Le but est de réduire les frictions et les rendez-vous manqués.",
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
        "Site vitrine pour une entreprise d’innovation. Pages rapides, responsive, avec un bon SEO de base.",
      stack: ["Next.js", "TypeScript", "Tailwind"],
      github: undefined,
      live: "https://pillais.group/",
    },
    {
      id: "famly",
      title: "FAMLY Fintech App",
      description:
        "Application de finance coopérative pour les cotisations, les objectifs d’épargne et les achats groupés. Les opérations en temps réel gardent les soldes et les statuts à jour sur tous les appareils.",
      stack: ["Next.js", "Convex", "Tailwind", "TypeScript"],
      github: "https://github.com/your/repo2",
      live: undefined, // pas encore de lien public
      image: "/project2.png",
      isMobileApp: true,
      playStoreUrl:
        "https://play.google.com/store/apps/details?id=com.famlyapp",
      appStoreUrl: "https://apps.apple.com/app/famly/id1234567890",
    },
    {
      id: "ultra",
      title: "Ultra Crypto Trading",
      description:
        "Application mobile de trading crypto avec parcours simples et tableaux de bord clairs. Pensée pour faire ses actions vite et suivre son portefeuille depuis le téléphone.",
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
        "Plateforme pour chercher et comparer des logements pour étudiants. Filtres simples et listes claires pour trouver vite ce qui convient.",
      stack: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
      github: "https://github.com/Habib-Ahmad/student-shelter",
      live: undefined,
    },
    {
      id: "cspillai",
      title: "CSPillai Website",
      description:
        "Site corporate pour CSPillai. Léger, responsive, et centré sur la lisibilité.",
      stack: ["React.js", "CSS"],
      github: undefined,
      live: "https://cspillai.com/",
    },
    {
      id: "invest2exit",
      title: "Invest2Exit",
      description:
        "Plateforme d’investissement qui met en relation startups et investisseurs et met en avant les opportunités. Contient l’onboarding, les pages de deals et un suivi de base.",
      stack: ["React.js", "Node.js", "Express", "MongoDB"],
      github: undefined,
      live: "https://foundingbystakeholders.cspillai.com/",
    },
  ],
  en: [
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
      playStoreUrl:
        "https://play.google.com/store/apps/details?id=com.famlyapp",
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
  ],
};
