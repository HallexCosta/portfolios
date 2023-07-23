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
      icon = () => (
        <a href={url} target="_blank">
          <LinkedinLogo
            className={`${className} cursor-pointer`}
            color="white"
            width={27}
            height={27}
          />
        </a>
      );
      break;
    case "instagram":
      icon = () => (
        <a href={url} target="_blank">
          <InstagramLogo
            className={`${className} cursor-pointer`}
            color="white"
            width={27}
            height={27}
          />
        </a>
      );
      break;
    case "github":
      icon = () => (
        <a href={url} target="_blank">
          <GithubLogo
            className={`${className} cursor-pointer`}
            color="white"
            width={27}
            height={27}
          />
        </a>
      );
      break;
    case "facebook":
      icon = () => (
        <a href={url} target="_blank">
          <FacebookLogo
            className={`${className} cursor-pointer`}
            color="white"
            width={27}
            height={27}
          />
        </a>
      );
      break;
    default:
      break;
  }
  return icon();
}
