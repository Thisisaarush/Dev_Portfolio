"use client";

import React, { useEffect, useState } from "react";

// Title data
const title = ["Developer", "Designer", "Frontend", "Backend"];

const HeroSection = () => {
  const [currentTitle, setCurrentTitle] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      if (currentTitle >= title.length - 1) {
        setCurrentTitle(0);
      } else {
        setCurrentTitle(currentTitle + 1);
      }
    }, 4000);
  }, [currentTitle]);

  return (
    <div className="absolute text-white top-1/4 left-1/2 -translate-x-1/2 flex flex-col justify-center items-center">
      <span className="font-black uppercase text-5xl sm:text-7xl">
        {title[currentTitle]}
      </span>
    </div>
  );
};

export default HeroSection;
