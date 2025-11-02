// components/store-buttons.tsx
"use client";

import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

export default function StoreButtons({
  playStoreUrl,
  appStoreUrl,
}: {
  playStoreUrl?: string;
  appStoreUrl?: string;
}) {
  if (!playStoreUrl && !appStoreUrl) return null;

  return (
    <div className="flex flex-wrap gap-2">
      {playStoreUrl && (
        <Button asChild size="sm">
          <a href={playStoreUrl} target="_blank" rel="noreferrer">
            <ExternalLink className="mr-2 h-4 w-4" />
            Google Play
          </a>
        </Button>
      )}
      {appStoreUrl && (
        <Button asChild size="sm" variant="secondary">
          <a href={appStoreUrl} target="_blank" rel="noreferrer">
            <ExternalLink className="mr-2 h-4 w-4" />
            App Store
          </a>
        </Button>
      )}
    </div>
  );
}
