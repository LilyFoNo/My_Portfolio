export const navLinks = [
  {
    path: "/about",
    title: "About",
  },
  {
    path: "/work",
    title: "Work",
  },
  {
    path: "/contact",
    title: "Contact",
  },
];



const socialMediaIcons = [
  {
    title: "LinkedIn",
    icon: "FaLinkedinIn",
    color: "#0072b1",
    size: 35,
    url: "https://www.linkedin.com/in/liliana-forero-2b6099348/",
    className: 'rounded-xl hover:shadow-linkedin'
  },
  {
    title: "GitHub",
    icon: "IoLogoGithub",
    color: "white",
    size: 35,
    url: "https://github.com/LilyFoNo",
    className: 'ounded-full hover:shadow-gitHub',
  }
];

const technologies = [
  {
    name: "HTML 5",
    icon: "/assets/tech/html.png",
  },
  {
    name: "CSS 3",
    icon: "/assets/tech/css.png",
  },
  {
    name: "JavaScript",
    icon: "/assets/tech/javascript.png",
  },
  {
    name: "TypeScript",
    icon: "/assets/tech/typescript.png",
  },
  {
    name: "React JS",
    icon: "/assets/tech/reactjs.png",
  },
  {
    name: "Redux Toolkit",
    icon: "/assets/tech/redux.png",
  },
  {
    name: "Tailwind CSS",
    icon: "/assets/tech/tailwind.png",
  },
  {
    name: "Node JS",
    icon: "/assets/tech/nodejs.png",
  },
  {
    name: "MongoDB",
    icon: "/assets/tech/mongodb.png",
  },
  {
    name: "Three JS",
    icon: "/assets/tech/threejs.svg",
  },
  {
    name: "Next JS",
    icon: "/assets/tech/next.svg",
  },
  {
    name: "git",
    icon: "/assets/tech/git.png",
  },
];

const projects = [
  {
    name: "Project 1",
    description:
      "Web-based platform that allows users to search for...",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "nodejs",
        color: "pink-text-gradient",
      },
    ],
    image: "/assets/herobg.png",
    link: "https://github.com/",
  },
  {
    name: "Project 2",
    description:
      "Web application that enables users to search for...",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: "/assets/herobg.png",
    link: "https://github.com/",
  },
  {
    name: "Project 3",
    description:
      "A comprehensive platform that allows users to...",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: "/assets/herobg.png",
    link: "https://github.com/",
  },
];

export { socialMediaIcons, technologies, projects };
