import Navbar from "@/components/Navbar";
import Image from "next/image";
import React from "react";

export default function HeroSection() {
  return (
    <>
      <div className="bg-[url('/images/img_hero.png')] bg-cover bg-no-repeat w-full h-[840px]">
        <Navbar />
      </div>
    </>
  );
}
