import Image from "next/image";
import { Dispatch, SetStateAction } from "react";

interface BulbThemeSwitcherProps {
  dark: boolean;
  setDark: Dispatch<SetStateAction<boolean>>;
}
const BulbThemeSwitcher = ({ dark, setDark }: BulbThemeSwitcherProps) => {
  return (
    <div className="fixed right-10 top-0 z-20 origin-top swingAnim flex flex-col items-center">
      <div className="bg-txt-alt w-0.5 h-16"></div>
      <div
        className="size-6 cursor-pointer dark:before:shadow-[1rem_1.8rem_2.5rem_2.2rem_rgba(246,225,86)]"
        onClick={() => setDark(!dark)}
      >
        <Image
          src={`${dark ? "/on_bulb.png" : "/off_bulb.png"}`}
          alt="dark mode"
          width={99}
          height={99}
        />
      </div>
    </div>
  );
};

export default BulbThemeSwitcher;
