"use client";

import Image from "next/image";
import { Github, ExternalLink } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Project } from "@/lib/projects";
import StoreButtons from "./store-buttons";

export function ProjectCard({ project }: { project: Project }) {
  const isBig = Boolean(project.featured);

  return (
    <Card className="p-4 md:p-6 h-full flex flex-col">
      {isBig && project.image && (
        <div className="relative w-full aspect-video mb-4 overflow-hidden rounded-xl border">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
          />
        </div>
      )}

      <div className="flex items-center gap-2">
        <h3 className="text-lg md:text-xl font-semibold">{project.title}</h3>
        {project.beta && <Badge variant="outline">Beta</Badge>}
        {project.isMobileApp && <Badge variant="secondary">Mobile</Badge>}
      </div>

      <p className="mt-2 text-sm opacity-90">{project.description}</p>

      <div className="mt-3 flex flex-wrap gap-2">
        {project.stack.map((s) => (
          <Badge key={s} variant="secondary">
            {s}
          </Badge>
        ))}
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-2">
        {project.isMobileApp ? (
          <StoreButtons
            playStoreUrl={project.playStoreUrl}
            appStoreUrl={project.appStoreUrl}
          />
        ) : (
          <>
            {project.github && (
              <Button asChild size="sm" variant="outline">
                <a href={project.github} target="_blank" rel="noreferrer">
                  <Github className="mr-2 h-4 w-4" /> GitHub
                </a>
              </Button>
            )}
            {project.live && (
              <Button asChild size="sm">
                <a href={project.live} target="_blank" rel="noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" /> Live
                </a>
              </Button>
            )}
          </>
        )}
      </div>
    </Card>
  );
}
