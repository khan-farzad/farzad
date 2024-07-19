"use client";
import { useState } from "react";
import BulbThemeSwitcher from "./_components/BulbThemeSwitcher";
import Hero from "./_components/Hero";
import SocialHeader from "./_components/SocialHeader";
import dynamic from "next/dynamic";
const DynamicProjects = dynamic(
  () => import("./_components/projects/Projects"),
  { ssr: false }
);

export default function Home() {
  const [dark, setDark] = useState(true);
  return (
    <div className={`${dark ? "dark" : ""}`}>
      <BulbThemeSwitcher dark={dark} setDark={setDark} />
      <SocialHeader />
      <Hero />
      <DynamicProjects />
    </div>
  );
}
