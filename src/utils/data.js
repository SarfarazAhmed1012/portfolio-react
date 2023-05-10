import { HiOutlineDesktopComputer } from "react-icons/hi";
import { CiMobile1 } from "react-icons/ci";
import { MdWorkspacesOutline } from "react-icons/md";
import { BiBrain } from "react-icons/bi";
export const projectExperience = [
  {
    name: "MERN Stack Projects",
    projects: 2,
    icon: HiOutlineDesktopComputer,
    bg: "#286F6C",
  },
  {
    name: "React Js",
    projects: 4,
    icon: BiBrain,
    bg: "#EEC048",
  },
  {
    name: "Data Structures and Database, OOP",
    projects: 3,
    icon: MdWorkspacesOutline,
    bg: "#F26440",
  },
];

export const WhatDoIHelp = [
  "I'm a graduate of DHA Suffa University Class of computer Science 2023 specializing in building exceptional digital experiences. Currently focusing on building accessible, human-centered products at Upstatement using React JS.",
];

export const workExp = [
  {
    place: "Software Channel",
    tenure: "June 2019 - Dec 2019",
    role: "Front end Web developer",
    detail:
      "Developed new User Interfaces. Translated wireframes and UI/UX designs into actual code. Collaborated with backend team for smooth processing of data communication using api integration.",
  },
];

export const comments = [
  {
    name: "Basic Social Media UI (Sociofy)",
    post: "Personal Project",
    comment:
      "Social Media UI using React JS. With the functionality of Dark Mode. This project helped me in enhancing my css and designing skills.",
    img: "./people1.png",
    link: "https://sociofy-a.netlify.app",
  },
  {
    name: "Loan Management System",
    post: "Final Year Project",
    comment:
      "The loan management system project was built using the MERN stack. The system provides an efficient and streamlined approach for managing loans, including borrower information, loan application processing, and loan repayment tracking. The user-friendly interface and easy-to-navigate dashboard make this loan management system an ideal solution for any financial institution looking to optimize its loan management processes.",
    img: "./people2.png",
    link: "https://github.com/Atta1900/fyp-temp",
  },
  {
    name: "Gym Exercises Finder",
    post: "Personal Project",
    comment:
      "A GYM application in which you can look for any exercise, you can search on the basis of the muscles, or equipments. On viewing an exercise, related exercises will be shown too. Exercises data is being fetched from Rapid API",
    img: "./people2.png",
    link: "https://gymsii.netlify.app/",
  },
  {
    name: "Quran Recitation Application",
    post: "Web Engineering Project",
    comment:
      "In this application you can select and listen to all the surahs from Quran e Pak and you also can change the reciters",
    img: "./people1.png",
    link: "https://quranrecitation.netlify.app/",
  },
];

export const sliderSettings = {
  dots: true,
  infinite: false,
  speed: 1000,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  touchMove: true,
  useCSS: true,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
