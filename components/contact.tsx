import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Contact() {
  return (
    <div className="py-12">
      <h2 className="text-2xl md:text-3xl font-bold">Contact</h2>
      <p className="opacity-80 mt-2">
        Let&apos;s work together. I&apos;m open to collaborations and roles.
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
          <Button asChild className="ml-auto md:ml-auto">
            <a href="/AhmadHabibCV.pdf" download>
              Download CV
            </a>
          </Button>
        </div>
      </Card>
    </div>
  );
}
