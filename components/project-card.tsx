"use client";

import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Project } from "@/lib/projects";
import StoreButtons from "./store-buttons";

export function ProjectCard({ project }: { project: Project }) {
  const isBig = Boolean(project.featured);

  return (
    <Card
      className="
        group relative h-full overflow-hidden flex flex-col border
        bg-card
        shadow-sm
        hover:shadow-md transition
        hover:ring-1 hover:ring-primary/15 dark:hover:ring-primary/20
      "
    >
      <span
        aria-hidden
        className="
          absolute inset-x-0 top-0 h-0.5
          bg-linear-to-r from-primary/30 via-primary/10 to-transparent
          dark:from-primary/70 dark:via-primary/30
        "
      />

      {isBig && project.image && (
        <div className="relative w-full aspect-video overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            sizes="(min-width: 768px) 50vw, 100vw"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-t via-transparent to-transparent dark:from-background/70" />
        </div>
      )}

      <div className="flex-1 p-4 md:p-6 flex flex-col">
        <div className="flex items-center gap-2">
          <h3 className="text-lg md:text-xl font-semibold tracking-tight">
            {project.title}
          </h3>
          {project.beta && (
            <Badge variant="outline" className="h-5 px-1.5 text-[11px]">
              Beta
            </Badge>
          )}
          {project.isMobileApp && (
            <Badge variant="secondary" className="h-5 px-1.5 text-[11px]">
              Mobile
            </Badge>
          )}
        </div>

        <p className="mt-2 text-sm text-muted-foreground">
          {project.description}
        </p>

        <div className="mt-auto pt-4 flex flex-wrap items-center gap-2">
          {project.isMobileApp ? (
            <StoreButtons
              playStoreUrl={project.playStoreUrl}
              appStoreUrl={project.appStoreUrl}
            />
          ) : (
            <>
              {project.github && (
                <Button asChild size="sm" variant="outline" className="gap-2">
                  <a href={project.github} target="_blank" rel="noreferrer">
                    <Image
                      src="/github.svg"
                      alt="GitHub"
                      width={16}
                      height={16}
                      className="dark:invert h-4 w-4"
                    />
                    GitHub
                  </a>
                </Button>
              )}
              {project.live && (
                <Button asChild size="sm" className="gap-2">
                  <a href={project.live} target="_blank" rel="noreferrer">
                    <ExternalLink className="h-4 w-4" />
                    Live
                  </a>
                </Button>
              )}
            </>
          )}
        </div>
      </div>
    </Card>
  );
}
