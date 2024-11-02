import { useTranslations } from "next-intl";
import {
  IconCode,
  IconDeviceLaptop,
  IconSettings,
  IconWallet,
  IconBoltFilled,
  IconMessageChatbotFilled,
} from "@tabler/icons-react";

export const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/service" },
  { name: "Contact", href: "/contact" },
];

export const navLogoItems = {
  light: "/images/brand/logo-icon-light.png",
  dark: "/images/brand/logo-icon-dark.png",
};

export const heroItems = {
  title: "Build Your Digital Presence",
  subtitle: "Innovative Web Solutions for Your Business",
  description:
    "We create high-quality, responsive websites that elevate your brand and engage your audience. Let us handle the technical details while you focus on growing your business.",
  buttonPrimaryText: "Start a Project",
  buttonPrimaryLink: "/contact",

  buttonSecondaryText: "Our Services",
  buttonSecondaryLink: "/services",

  image: "/images/hero/hero-img.png",
  imageMobile: "/images/hero/hero-screen-shot.png",

  offers: {
    offerTitle: "What We Offer",
    offerDescription:
      "Our comprehensive services are designed to help your business succeed online.",
    offerLink: "/services",

    offerItems: [
      {
        title: "Custom Development",
        description: "Bespoke websites tailored to your unique needs.",
        icon: <IconCode size={20} />,
      },
      {
        title: "Rapid Deployment",
        description: "Fast and efficient project turnaround times.",
        icon: <IconBoltFilled size={20} />,
      },
      {
        title: "Technical Expertise",
        description:
          "Expert handling of all technical aspects from start to finish.",
        icon: <IconSettings size={20} />,
      },
      {
        title: "Responsive Design",
        description: "Optimized for all devices and screen sizes.",
        icon: <IconDeviceLaptop size={20} />,
      },
      {
        title: "Dedicated Support",
        description: "Professional assistance whenever you need it.",
        icon: <IconMessageChatbotFilled size={20} />,
      },
      {
        title: "Competitive Pricing",
        description: "Quality services that fit your budget.",
        icon: <IconWallet size={20} />,
      },
    ],
  },
};
export const reviews = [
  {
    name: "nibo",
    username: "@nibo",
    body: ".............................................",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "seagate",
    username: "@seagate",
    body: "..............................................",
    img: "https://avatar.vercel.sh/jill",
  },
];
{
  /*map in about page in magic card  section*/
}
export const aboutitems = {
  items: [
    {
      title: "Quality",
      description:
        "We focus on delivering the highest quality in everything we",
    },
    {
      title: "Reliability",
      description: "Our team is reliable and we always deliver on time.",
    },
    {
      title: "Experience",
      description: " We have many years of experience in the industry.",
    },
  ],
};

export const stats = [
  {
    number: 100,
    title: "Years of Experience",
  },
  {
    number: 50,
    title: "state2",
  },
  {
    number: 25,
    title: "state3",
  },
  {
    number: 32,
    title: "state4",
  },
  {
    number: 67,
    title: "state5",
  },
];

// socialmedia are icon and must be string

export const teamdateils = [
  {
    image: "/nibo.jpg",
    name: "Leo Khani",
    title: "React Developer",
    description: "",
    socilamedia: "",
    github: "https://github.com/mrnibo",
    linkedin: "https://www.linkedin.com/in/mrnibo/",
    twitter: "https://twitter.com/mrnibo",
    contact: "Email: johndoe@example.com | Phone: (123) 456-7890",
  },
  {
    image: "/Seagate.jpg",
    name: "Seyed Mohammad Sadegh Mortazavi Moghadam",
    title: "UI/UX Designer",
    description: "",
    socilamedia: "",
    github: "https://github.com/TechPreist",
    linkedin: "https://www.linkedin.com/in/mrnibo/",
    twitter: "https://twitter.com/mrnibo",
    contact: "Email: sadeghmor134@gmail.com | Phone: (123) 456-7890",
  },
];
export const quality = [
  {
    icon: "",
    title: "UI",
    description: "We will proive best UI for your Website.",
    link: "More",
  },
  {
    icon: "",
    title: "Back-end/Front-end",
    description:
      "We will provide you website a most optimise back-end and front-end",
    link: "More",
  },
  {
    icon: "",
    title: "App Designer",
    description: "We also made you app UI/UX",
  },
];
