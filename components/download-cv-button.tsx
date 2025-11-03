"use client";

import { useLang } from "./lang-context";
import { Button } from "./ui/button";
import Link from "next/link";

type DownloadCVButtonProps = React.ComponentProps<typeof Button>;

const DownloadCVButton = ({
  className,
  variant,
  size,
  ...rest
}: DownloadCVButtonProps) => {
  const { lang } = useLang();

  const href =
    lang === "fr" ? "/Ahmad_Habib_CV_FR.pdf" : "/Ahmad_Habib_CV_EN.pdf";

  return (
    <Button
      className={className}
      variant={variant}
      size={size}
      asChild
      {...rest}
    >
      <Link href={href} download>
        {lang === "fr" ? "Télécharger le CV" : "Download CV"}
      </Link>
    </Button>
  );
};

export default DownloadCVButton;
