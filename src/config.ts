import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://adyanf.com/", // replace this with your deployed domain
  author: "Adya Naufal Fikri",
  desc: "A personal blog to share my thought",
  title: "Adya Naufal Fikri",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerPage: 3,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
};

export const LOCALE = {
  lang: "en", // html lang code. Set this empty and default will be "en"
  langTag: ["en-EN"], // BCP 47 Language Tags. Set this empty [] to use the environment default
} as const;

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/adyanf/",
    linkTitle: `${SITE.title} on LinkedIn`,
    active: true,
  },

  {
    name: "Instagram",
    href: "https://instagram.com/adyanaufalfikri",
    linkTitle: `${SITE.title} on Instagram`,
    active: true,
  },
  {
    name: "Github",
    href: "https://github.com/adyanf",
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  },
  {
    name: "Mail",
    href: "mailto:adyanaufalf@gmail.com",
    linkTitle: `Send an email to ${SITE.title}`,
    active: true,
  },
];
