"use client";

import { Card } from "@/components/ui/card";
import { useLang } from "./lang-context";
import DownloadCVButton from "./download-cv-button";

export default function Contact() {
  const { lang } = useLang();

  return (
    <div className="py-12">
      <h2 className="text-2xl md:text-3xl font-bold">Contact</h2>
      <p className="opacity-80 mt-2">
        {lang === "fr"
          ? "Travaillons ensemble. Je suis ouvert aux collaborations et aux postes."
          : "Let's work together. I'm open to collaborations and roles."}
      </p>

      <Card className="p-6 mt-6">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6">
          <div>
            <div className="font-medium">Email</div>
            <a
              className="opacity-90 hover:underline"
              href="mailto:ahmadalkali.dev@gmail.com"
            >
              ahmadalkali.dev@gmail.com
            </a>
          </div>
          <div>
            <div className="font-medium">LinkedIn</div>
            <a
              className="opacity-90 hover:underline"
              href="https://www.linkedin.com/in/ahmad--habib/"
              target="_blank"
            >
              linkedin.com/in/ahmad--habib
            </a>
          </div>
          <div>
            <div className="font-medium">GitHub</div>
            <a
              className="opacity-90 hover:underline"
              href="https://github.com/Habib-Ahmad"
              target="_blank"
            >
              github.com/Habib-Ahmad
            </a>
          </div>

          <DownloadCVButton asChild className="ml-auto" />
        </div>
      </Card>
    </div>
  );
}
