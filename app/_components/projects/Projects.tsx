import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import {
  SiBootstrap,
  SiChartdotjs,
  SiCss3,
  SiExpress,
  SiGreensock,
  SiHtml5,
  SiJavascript,
  SiMapbox,
  SiMongodb,
  SiMongoose,
  SiNextdotjs,
  SiNodedotjs,
  SiPassport,
  SiReact,
  SiSocketdotio,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

import streakar from "@/public/streakar.png";
import keyNkong from "@/public/keyNkong.png";
import calc from "@/public/calc.png";
import simonGame from "@/public/simonGame.png";
import hotelHive from "@/public/hotelHive.png";

import dynamic from "next/dynamic";

import Project from "./Project";

import useIndex from "@/app/_hooks/useIndex";

const DynamicHeader = dynamic(() => import("./Header"), { ssr: false });

const Projects = () => {
  const { idx, setIdx } = useIndex();
  const w = window.innerWidth * 0.8;
  const projects = [
    {
      name: "Streakar",
      imgSrc: streakar,
      tagline: "Build Habits with Collaborative tracking",
      link: "https://streakar.vercel.app/",
      github: "https://github.com/khan-farzad/streakar/",
      icons: [
        { icon: SiReact, title: "React" },
        { icon: SiMongodb, title: "Mongodb" },
        { icon: SiGreensock, title: "GSAP" },
        { icon: SiNextdotjs, title: "Next.js" },
        { icon: SiTypescript, title: "Typescript" },
        { icon: SiTailwindcss, title: "Tailwind CSS" },
        { icon: SiMongoose, title: "Mongoose" },
      ],
      features: [
        "Utilizes GSAP for interactive and engaging landing page interactions.",
        "Your ultimate companion for building and maintaining habits, helping you stay consistent and achieve your goals.",
        "Track progress with daily streaks and manage habit lists easily.",
        "Includes features for tracking hobbies, creating tasks, and collaborating with friends, making the process engaging and effective.",
      ],
    },
    {
      name: "keyNkong",
      imgSrc: keyNkong,
      tagline: "Elevate your typing skills with friends",
      link: "https://keynkong.vercel.app/race",
      github: "https://github.com/khan-farzad/keynkong/",
      icons: [
        { icon: SiReact, title: "React" },
        { icon: SiNextdotjs, title: "Next.js" },
        { icon: SiTypescript, title: "Typescript" },
        { icon: SiTailwindcss, title: "Tailwind CSS" },
        { icon: SiChartdotjs, title: "Chart.js" },
        { icon: SiSocketdotio, title: "Socket.io" },
      ],
      features: [
        "Incorporates WebSocket technology to support multiplayer mode.",
        "Offers multiple modes, including Time Mode (15, 30, 60, 120 seconds), Word Mode (25, 50, 100 words), and Quotes Mode.",
        "Utilizes Graph.js to display users' wpm and raw typing speed over the duration of the test.",
        "After completing a typing test, users can view detailed statistics, including their wpm, raw wpm, accuracy, character stats.",
      ],
    },
    {
      name: "calc",
      imgSrc: calc,
      tagline: "Simplify calculations for you! ❤️",
      link: "https://khan-farzad.github.io/calc/",
      github: "https://github.com/khan-farzad/calc/",
      icons: [
        { icon: SiHtml5, title: "HTML" },
        { icon: SiCss3, title: "CSS" },
        { icon: SiJavascript, title: "Javascript" },
      ],
      features: [
        "A simple four-function calculator application.",
        "Includes a number pad and buttons for adding, subtracting, multiplying, and dividing.",
        "Supports the use of brackets for complex calculations.",
      ],
    },
    {
      name: "Simon Game",
      imgSrc: simonGame,
      tagline: "Test Your Memory with a simple & fun game",
      link: "https://khan-farzad.github.io/simon-game/",
      github: "https://github.com/khan-farzad/simon-game/",
      icons: [
        { icon: SiHtml5, title: "HTML" },
        { icon: SiCss3, title: "CSS" },
        { icon: SiJavascript, title: "Javascript" },
      ],
      features: [
        "Generates a series of tones and lights using JavaScript, challenging users to repeat the sequence accurately.",
        "Utilizes HTML for structuring the game interface and CSS for styling the visual elements and animations.",
        "The sequence becomes progressively longer and more complex with each successful repetition.",
        "The game ends when the user fails to repeat the sequence or the time limit runs out.",
      ],
    },
    {
      name: "Hotel Hive",
      imgSrc: hotelHive,
      tagline: "Easy Management and Reviews for Smarter Stays",
      link: "https://hotel-hive.onrender.com/",
      github: "https://github.com/khan-farzad/Hotel-Hive",
      icons: [
        { icon: SiJavascript, title: "Javascript" },
        { icon: SiBootstrap, title: "Bootstrap" },
        { icon: SiNodedotjs, title: "Node.js" },
        { icon: SiMongoose, title: "Mongoose" },
        { icon: SiPassport, title: "Passport.js" },
        { icon: SiExpress, title: "Express" },
        { icon: SiMongodb, title: "Mongodb" },
        { icon: SiMapbox, title: "Mapbox" },
      ],
      features: [
        "Implemented REST APIs for an interactive website, empowering hotel owners to efficiently manage listings while allowing users to seamlessly submit reviews.",
        "Incorporated user authentication from scratch, ensuring data integrity and system security.",
        "Leveraged MongoDB for cloud database management and Cloudinary for efficient image upload and storage.",
        "Integrated Mapbox for comprehensive mapping and geocoding functionality, enhancing user experience.",
      ],
    },
  ];

  return (
    <div className="flex flex-col z-10 relative items-center h-screen bg-txt-primary dark:bg-primary">
      <h2 className="my-3 font-black text-primary dark:text-accent">
        Projects
      </h2>
      <DynamicHeader />
      <div className="grow w-full flex justify-center">
        <button
          onClick={() => setIdx(idx === 0 ? 4 : idx - 1)}
          className="h-full flex justify-center items-center group w-[10%] active:bg-primary/5 dark:active:bg-secondary cursor-pointer"
        >
          <IoIosArrowRoundBack className="text-txt-alt  group-hover:text-primary dark:group-hover:text-txt-primary size-12 group-active:scale-90" />
        </button>
        <div className="w-[80%] overflow-hidden relative">
          <div
            style={{ left: -idx * w }}
            className="size-full flex absolute transition-all duration-300"
          >
            {projects.map((project, i) => (
              <Project
                key={`project-${i}`}
                name={project.name}
                link={project.link}
                imgSrc={project.imgSrc}
                tagline={project.tagline}
                features={project.features}
                github={project.github}
                icons={project.icons}
              />
            ))}
          </div>
        </div>
        <button
          onClick={() => setIdx(idx === 4 ? 0 : idx + 1)}
          className="h-full flex justify-center items-center group w-[10%] active:bg-primary/5 dark:active:bg-secondary cursor-pointer"
        >
          <IoIosArrowRoundForward className="text-txt-alt group-hover:text-primary dark:group-hover:text-txt-primary size-12 group-active:scale-90" />
        </button>
      </div>
    </div>
  );
};

export default Projects;