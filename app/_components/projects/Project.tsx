import Image, { StaticImageData } from "next/image";
import { IoIosArrowUp, IoIosLink } from "react-icons/io";
import { SiGithub } from "react-icons/si";
import Tooltip from "./Tooltip";
import { useState } from "react";
import { IconType } from "react-icons";

interface ProjectProps {
  name: string;
  imgSrc: StaticImageData;
  link: string;
  github: string;
  icons: {
    icon: IconType;
    title: string;
  }[];
  features: string[];
  tagline: string;
}

const Project = ({
  name,
  imgSrc,
  link,
  tagline,
  github,
  icons,
  features,
}: ProjectProps) => {
  const [accItem1show, setAccItem1Show] = useState(false);
  const [accItem2show, setAccItem2Show] = useState(false);
  return (
    <div className="min-w-full h-full flex flex-col md:flex-row text-primary dark:text-txt-primary border-txt-alt border-t-0 border">
      <div className="w-full md:w-2/3 md:h-full flex items-center border-txt-alt border-r">
        <Image src={imgSrc} alt={`${imgSrc}`} placeholder="blur" />
      </div>
      <div className="w-full md:w-1/3 *:p-4 md:*:p-8 *:text-sm">
        <div className="md:h-1/4 border-b border-txt-alt flex flex-col justify-evenly">
          <h3 className="text-2xl font-medium">{name}</h3>
          <p className="text-txt-alt ">{tagline}</p>
          <div className="flex items-center gap-4 mt-2">
            <a href={link} className="cursor-pointer">
              <div className="relative group">
                <IoIosLink
                  size={24}
                  className="text-primary dark:text-txt-primary hover:text-txt-alt hover:dark:text-txt-alt"
                />
                <Tooltip title="Live demo" />
              </div>
            </a>
            <a href={github} className="cursor-pointer">
              <div className="relative group">
                <SiGithub
                  size={24}
                  className="hover:text-txt-alt text-primary dark:text-txt-primary hover:dark:text-txt-alt"
                />
                <Tooltip title="Github" />
              </div>
            </a>
          </div>
        </div>
        <div className="md:h-3/4 flex flex-col gap-4 font-light">
          <div className="">
            <div
              onClick={() => setAccItem2Show(!accItem2show)}
              className="flex active:bg-primary/5 dark:active:bg-secondary cursor-pointer justify-between items-center mb-1"
            >
              <h4 className="text-2xl font-medium">Tech Stack</h4>
              <IoIosArrowUp
                className={`size-6 transition-transform duration-300 ${
                  accItem2show && "rotate-180"
                }`}
              />
            </div>
            <div
              className={`flex w-11/12 pt-8 justify-center gap-3 *:size-5 h-0 ${
                accItem2show && "h-[60px]"
              } transition-[height] duration-300 overflow-y-hidden overflow-x-visible`}
            >
              {icons.map((icon, index) => (
                <div className="relative group" key={`icon-${index}`}>
                  <icon.icon
                    size={24}
                    className="dark:text-txt-alt text-primary hover:text-secondary dark:hover:text-txt-primary"
                  />
                  <Tooltip title={icon.title} />
                </div>
              ))}
            </div>
          </div>
          <div className="">
            <div
              onClick={() => setAccItem1Show(!accItem1show)}
              className="flex active:bg-primary/5 dark:active:bg-secondary cursor-pointer justify-between items-center mb-1"
            >
              <h4 className="text-2xl font-medium">Features</h4>
              <IoIosArrowUp
                className={`size-6 transition-transform duration-300 ${
                  accItem1show && "rotate-180"
                }`}
              />
            </div>
            <ul
              className={`flex flex-col gap-1 h-0 list-disc list-inside ${
                accItem1show && "min-h-[212px]"
              } transition-[height] duration-300 overflow-y-scroll `}
            >
              {features.map((feature, i) => (
                <li key={`${name}-icon-${i}`}>{feature}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
