"use client";

import { projects } from "@/lib/projects";
import { ProjectCard } from "./project-card";
import { Separator } from "@/components/ui/separator";
import { useLang } from "./lang-context";

export default function Projects() {
  const { lang } = useLang();

  const featured = projects[lang].filter((p) => p.featured);
  const others = projects[lang].filter((p) => !p.featured);

  return (
    <div className="py-12">
      <h2 className="text-2xl md:text-3xl font-bold">
        {lang === "fr" ? "Projets" : "Projects"}
      </h2>
      <p className="opacity-80 mt-2">
        {lang === "fr"
          ? "Voici quelques-uns des projets sur lesquels j'ai travaillé récemment. Vous pouvez consulter plus de projets sur mon GitHub."
          : "Here are some of the projects I've worked on recently. You can find more projects on my GitHub."}
      </p>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        {featured.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>

      {others.length > 0 && (
        <>
          <Separator className="my-10" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {others.map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
