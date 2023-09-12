import React from "react";
import HeroBanner from "@/app/Components/home/hero-banner";
import ExperienceApp from "@/app/Components/home/experience-leap-app";
import InsideApp from "@/app/Components/home/inside-app";
import Ecohacks from "@/app/Components/home/ecohacks";

function Homepage() {
  return (
    <>
      <article>
        <div className="w-full mx-auto">
          <HeroBanner />
          <ExperienceApp />
          <InsideApp />
          <Ecohacks />
        </div>
      </article>
    </>
  );
}
Homepage.title = 'Leap Home';

export default Homepage;
