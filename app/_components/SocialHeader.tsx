"use client";
import {
  SiCodingninjas,
  SiGithub,
  SiGmail,
  SiHackerrank,
  SiLeetcode,
  SiLinkedin,
  SiX,
} from "react-icons/si";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const SocialHeader = () => {
  type HeaderProps = {
    icon: JSX.Element;
    href: string;
  };

  const icons: HeaderProps[] = [
    { icon: <SiGmail />, href: "mailto:farzadk10000@gmail.com" },
    {
      icon: <SiX />,
      href: "https://twitter.com/farzadhimself/",
    },
    {
      icon: <SiLeetcode />,
      href: "https://leetcode.com/khanFarzad/",
    },
    {
      icon: <SiLinkedin />,
      href: "https://www.linkedin.com/in/khan-farzad/",
    },
    {
      icon: <SiGithub />,
      href: "https://github.com/khan-farzad",
    },
    {
      icon: <SiHackerrank />,
      href: "https://www.hackerrank.com/profile/farzadk10000",
    },
    {
      icon: <SiCodingninjas />,
      href: "https://www.codingninjas.com/studio/profile/1475259b-495d-4bc1-b013-9e368eb6a08d",
    },
  ];

  useGSAP(() => {
    gsap.from(".social-icons", {
      yPercent: 150,
      opacity: 0,
      stagger: {
        each: 0.2,
        from: "random",
      },
      duration: 0.75,
    });
  }, []);

  return (
    <header className="sticky top-0 left-0 h-16 bg-accent dark:bg-secondary p-2">
      <div className="overflow-hidden h-12 flex justify-center dark:text-txt-alt text-txt-primary items-center gap-5">
        {icons.map((i: HeaderProps, idx: number) => (
          <a
            key={idx}
            href={i.href}
            target="_blank"
            className="social-icons hover:text-secondary dark:hover:text-txt-primary"
          >
            {i.icon}
          </a>
        ))}
      </div>
    </header>
  );
};

export default SocialHeader;
