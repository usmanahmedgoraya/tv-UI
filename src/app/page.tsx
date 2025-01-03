'use client'
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import SVG from "@/components/SVG";
import { useState } from "react";

export default function Home() {
  const [isWatch, setIsWatch] = useState(false)
  const [videoUrl, setVideoUrl] = useState();
  const [selectedCartoon, setSelectedCartoon] = useState(null);

  return (
    <div className="relative ">
      <div className="relative">
        <img src="/tv.jpg" alt="tv" className="md:w-[835.4px] w-auto" />
        {/* <Navbar/> */}
        {!isWatch && <Hero videoUrl={videoUrl} setVideoUrl={setVideoUrl} setIsWatch={setIsWatch} setSelectedCartoon={setSelectedCartoon} selectedCartoon={selectedCartoon} />}
        {isWatch &&
          <SVG videoUrl={videoUrl} setVideoUrl={setVideoUrl} setIsWatch={setIsWatch} isWatch={isWatch}  />
        }
      </div>

    </div>
  );
}
