import { FaHtml5 } from "react-icons/fa6";
import { FaCss3Alt } from "react-icons/fa6";
import { RiJavascriptFill } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";
import { FaReact } from "react-icons/fa";
import { TbBrandRedux } from "react-icons/tb";
import { RiTailwindCssFill } from "react-icons/ri";
import { RiNodejsLine } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { TbBrandThreejs } from "react-icons/tb";
import { RiNextjsFill } from "react-icons/ri";
import { FaGitAlt } from "react-icons/fa";

export const navLinks = [
  {
    path: "#about",
    id: "about",
    title: "About",
  },
  {
    path: "#work",
    id: "work",
    title: "Work",
  },
  {
    path: "#contact",
    id: "contact",
    title: "Contact",
  },
];

const socialMediaIcons = [
  {
    title: "LinkedIn",
    icon: "FaLinkedinIn",
    color: "#0072b1",
    size: 35,
    url: "https://www.linkedin.com/in/liliana-forero-noguera/?originalSubdomain=co",
    className: "rounded-xl hover:shadow-linkedin",
  },
  {
    title: "GitHub",
    icon: "IoLogoGithub",
    color: "white",
    size: 35,
    url: "https://github.com/LilyFoNo",
    className: "rounded-full hover:shadow-gitHub",
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: "/assets/tech/html.png",
    icon_mobile: FaHtml5,
  },
  {
    name: "CSS 3",
    icon: "/assets/tech/css.png",
    icon_mobile: FaCss3Alt,
  },
  {
    name: "JavaScript",
    icon: "/assets/tech/javascript.png",
    icon_mobile: RiJavascriptFill,
  },
  {
    name: "TypeScript",
    icon: "/assets/tech/typescript.png",
    icon_mobile: BiLogoTypescript,
  },
  {
    name: "React JS",
    icon: "/assets/tech/reactjs.png",
    icon_mobile: FaReact,
  },
  {
    name: "Redux Toolkit",
    icon: "/assets/tech/redux.png",
    icon_mobile: TbBrandRedux,
  },
  {
    name: "Tailwind CSS",
    icon: "/assets/tech/tailwind.png",
    icon_mobile: RiTailwindCssFill,
  },
  {
    name: "Node JS",
    icon: "/assets/tech/nodejs.png",
    icon_mobile: RiNodejsLine,
  },
  {
    name: "MongoDB",
    icon: "/assets/tech/mongodb.png",
    icon_mobile: SiMongodb,
  },
  {
    name: "Three JS",
    icon: "/assets/tech/threejs.svg",
    icon_mobile: TbBrandThreejs,
  },
  {
    name: "Next JS",
    icon: "/assets/tech/next.svg",
    icon_mobile: RiNextjsFill,
  },
  {
    name: "git",
    icon: "/assets/tech/git.png",
    icon_mobile: FaGitAlt,
  },
];

const projects = [
  {
    num: "01",
    name: "Alpha Bites",
    category: "Full-Stack Project",
    description:
      "eCommerce platform built with Next.js 15, Clerk for authentication, and Contentful CMS for content management. It allows users to browse featured items publicly and grants access to the full catalog once authenticated. The platform demonstrates integration of user authentication, CMS, and protected routes, providing a smooth and secure user experience with a visually appealing interface.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "Next.js",
        color: "pink-text-gradient",
      },
      {
        name: "Tailwind.css",
        color: "sunset-orange-text-gradient",
      },
    ],
    image: "/assets/projects/AlphaBites.png",
    image_mobile: "/assets/projects/AlphaBites_mobile.png",
    link: "https://github.com/LilyFoNo/Alpha_Bites",
    url: "https://alpha-bites.vercel.app/",
  },
  {
    num: "02",
    name: "Cook Up Magic",
    category: "Full-Stack Project",
    description:
      "It is a React.js + Node.js web app that allows you to store your recipes and ingredients that you have in a fridge. Recipes can be filtered by ingredients, cuisine, diet, intolerance, and more.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "Node.js",
        color: "pink-text-gradient",
      },
    ],
    image: "/assets/projects/CookUpMagic.png",
    image_mobile: "/assets/projects/CookUpMagic_mobile.png",
    link: "https://github.com/LilyFoNo/cookUpMagic",
    url: "",
  },
];

const about = {
  title: "About Me",
  description: `I'm a skilled software developer with experience in TypeScript and JavaScript, specializing in frameworks like React, Node.js, and Next.js. As a quick learner, I thrive in collaborative environments, working closely with teams to create efficient, scalable, and user-friendly solutions that address real-world challenges.`,
  info: [
    {
      fieldName: "Name",
      fieldValue: "Liliana Forero",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Colombian",
    },
    {
      fieldName: "Email",
      fieldValue: "lilianaforeronoguera@gmail.com",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Spanish",
    },
  ],
};

const education = {
  icon: "/assets/education.png",
  title: "My Education",
  items: [
    {
      institution: "Cornerstone International Community College of Canada",
      degree: "Web Development Specialist Diploma",
      duration: "April 2024 - Present",
    },
    {
      institution: "Platzi",
      degree: "Typescript Course",
      duration: "2024",
    },
    {
      institution: "ICIP | Instituto Científico del Pacífico",
      degree: "MATLAB Course",
      duration: "2023",
    },
    {
      institution: "ICIP | Instituto Científico del Pacífico",
      degree: "Advanced Excel Course",
      duration: "2023",
    },
  ],
};

export { socialMediaIcons, technologies, projects, about, education };
