import React, { useRef } from "react";

import CustomTalentExploreCard from "./CustomTalentExploreCard";

import useScrollAnimation from "../../CustomHooks/useScrollAnimation";
const TalentExploreSection = () => {

  const aboutRef = useRef(null);
  const isVisible = useScrollAnimation(aboutRef);
 

  
  
  return (
    <div
    ref={aboutRef} 
    className={`text-white ${isVisible ? "animate-fadeIn" : "opacity-0"}`}>
      <div className="flex justify-center mb-10">
        <h1 className="text-4xl tracking-widest">Find Best Talents from Across the World</h1>
      </div>
      <CustomTalentExploreCard />
    </div>
  );
};

export default TalentExploreSection;
