// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';

// Project Section Logo's
import tenziesLogo from "./assets/work_logo/tenziesLogo.png"
import palinLogo from './assets/work_logo/palinLogo.png';
import restLogo from './assets/work_logo/restLogo.png';
import secondBrain from './assets/work_logo/secondBrain.png';

import sendifyAppLogo from './assets/work_logo/sendifyApp.png'
import blogLogo from "./assets/work_logo/blog.png"


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Firebase', logo: firebaseLogo },
      { name: 'PostgreSQL', logo: postgreLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'TypeScript', logo: typescriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];

  export const projects = [
    {
      id: 0,
      title: "Sendify Chat App",
      description:
        "Sendify Chat App is a sleek and intuitive React-based messaging platform designed for seamless communication. Built with modern web technologies, it offers real-time chat functionality, user-friendly navigation, and a smooth experience across devices",
      image: sendifyAppLogo,
      tags: ["React JS", "TailwindCss", "Zustand", "Socket.io", "NodeJs", "ExpressJs", "MongoDb"],
      github: "https://github.com/AddyChet/chat-app-project",
      webapp: "https://chat-app-project-bpq1.onrender.com/",
      ongoing : false
    },
    {
      id: 1,
      title: "Full Stack Blog Application",
      description:
        "This full-featured blogging platform empowers users to craft, manage, and share content effortlessly. Built with the MERN stack and enhanced by Firebase and Cloudinary integrations, it delivers a seamless experience from post creation to publishing.",
      image: blogLogo,
      tags: ["React JS", "TailwindCss", "ContextApi", "Firebase", "NodeJs", "ExpressJs", "MongoDb", "Framer-Motion"],
      github: "https://github.com/AddyChet/MERN-Blog-App",
      webapp: "",
      ongoing : true
    },
    {
      id: 2,
      title: "Second Brain",
      description:
        "Second Brain is a smart and intuitive tool designed to help users save and organize links they want to remember for future reference.",
      image: secondBrain,
      tags: ["React JS", "Node.js", "MongoDB", "Express", "TailwindCSS", "TypeScript"],
      github: "https://github.com/AddyChet/SecondBrain",
      webapp: "",
      ongoing : true
    },
    {
      id: 3,
      title: "Tenzies React Game",
      description:
        "Tenzies React Game is a fun and addictive dice-rolling challenge designed to test your quick decision-making skills. Built using React, this game tracks your best time, highest score, and the number of dice rolled as you aim for a perfect match.",
      image: tenziesLogo,
      tags: ["React JS","HTML", "CSS", "JavaScript"],
      github: "https://github.com/AddyChet/TenziesGame",
      webapp: "https://tenziesbyaddy.netlify.app/",
      ongoing : false
    },
    {
      id: 4,
      title: "Complex Palindrom Checker",
      description:
        "Complex Palindrome Checker is a powerful tool designed to analyze and verify palindromes beyond simple word reversals. Unlike traditional palindrome checkers, this advanced version determines whether a given word or phrase is a palindrome and also evaluates if it can be transformed into one through character swaps.",
      image: palinLogo,
      tags: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/AddyChet/PalindromeChecker",
      webapp: "https://palincheck.netlify.app/",
      ongoing : false
    },

    {
      id: 5,
      title: "Rest Countries API",
      description:
        "Rest Countries API is a powerful and easy-to-use API that provides detailed information about countries worldwide. It allows developers to fetch data such as country names, capitals, population, currencies, languages, flags, and more.",
      image: restLogo,
      tags: ["HTML", "CSS", "JavaScript", "API"],
      github: "https://github.com/AddyChet/RESTCOUNTRIES-API",
      webapp: "https://restcountriesapibyaddy.netlify.app/",
      ongoing : false
    },



  ];  