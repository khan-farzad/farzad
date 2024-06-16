"use client";
import { useGSAP } from "@gsap/react";
import gsap, { Power1 } from "gsap";
import { Dancing_Script } from "next/font/google";
import React, { useEffect, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const Hero = () => {
  const greetings: string[] = [
    "Hello",
    "Hola",
    "Bonjour",
    "Ni hao",
    "Kon'nichiwa",
    "Namaste",
    "Ciao",
    "Salaam",
  ];

  let [direction, setDirection] = useState(-1);
  const [greet, setGreet] = useState(greetings[0]);
  let [letterIdx, setLetterIdx] = useState(greet.length);
  useEffect(() => {
    let fn = setInterval(() => {
      setLetterIdx((prvIdx) => prvIdx + direction);
      if (letterIdx === 0) {
        setDirection(1);
        setGreet(greetings[Math.floor(Math.random() * 8)]);
      } else if (letterIdx === greet.length) {
        setDirection(-1);
      }
    }, 250);

    return () => {
      clearInterval(fn);
    };
  }, [letterIdx, direction]);

  useGSAP(() => {
    gsap.defaults({ ease: Power1.easeInOut });
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(".greet-text", {
      width: 0,
      scrollTrigger: {
        trigger: "#hero-div",
        start: "top 64px",
        end: "center top",
        pin: "#hero-div",
        scrub: true,
      },
      stagger: 0.4,
    });
  }, []);

  return (
    <div>
      <div
        id="hero-div"
        className="h-[calc(100dvh-64px)] bg-accent dark:bg-secondary text-txt-primary/5 flex justify-center items-center"
      >
        <div
          className={`${dancingScript.className} h-full flex w-[22rem] md:w-[39rem] flex-col font-bold justify-center items-start *:whitespace-nowrap *:text-7xl md:*:text-9xl`}
        >
          <div
            className={`text-primary dark:text-accent pr-4 min-h-20 md:min-h-32 ${
              greet.length > letterIdx && "border-r-4"
            } border-txt-primary`}
          >
            {greet.substring(0, letterIdx)}
          </div>
          <div className="relative w-24 md:w-44">
            I'm
            <div className="greet-text absolute w-full top-0 overflow-hidden text-txt-alt">
              I'm
            </div>
          </div>
          <div className="relative w-[22rem] md:w-[39rem]">
            Farzad Khan
            <div className="greet-text absolute w-full top-0 overflow-hidden text-txt-primary h-20 md:h-36">
              Farzad Khan
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
