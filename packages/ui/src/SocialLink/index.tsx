"use client";
import {
  FacebookLogo,
  GithubLogo,
  InstagramLogo,
  LinkedinLogo,
} from "phosphor-react";

interface SocialLinkProps {
  name: "linkedin" | "instagram" | "facebook" | "github";
  className?: string;
  url?: string;
}

export function SocialLink({ name, url, className }: SocialLinkProps) {
  let icon = () => <></>;
  switch (name) {
    case "linkedin":
      const linkedinIcon = () => (
        <a href={url} target="_blank">
          <LinkedinLogo
            className={`${className} cursor-pointer`}
            color="white"
            width={27}
            height={27}
          />
        </a>
      );
      icon = linkedinIcon;
      break;
    case "instagram":
      const instagramIcon = () => (
        <a href={url} target="_blank">
          <InstagramLogo
            className={`${className} cursor-pointer`}
            color="white"
            width={27}
            height={27}
          />
        </a>
      );

      icon = instagramIcon;
      break;
    case "github":
      const githubIcon = () => (
        <a href={url} target="_blank">
          <GithubLogo
            className={`${className} cursor-pointer`}
            color="white"
            width={27}
            height={27}
          />
        </a>
      );
      icon = githubIcon;
      break;
    case "facebook":
      const facebookIcon = () => (
        <a href={url} target="_blank">
          <FacebookLogo
            className={`${className} cursor-pointer`}
            color="white"
            width={27}
            height={27}
          />
        </a>
      );
      icon = facebookIcon;
      break;
    default:
      break;
  }
  return icon();
}
