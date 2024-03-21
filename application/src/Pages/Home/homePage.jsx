import React from "react";
import "./styles/homePage.css";

import StickyNavBar from "./components/StickyNavBar";
import HeroContent from "./components/HeroContent";
import SectionDivider from "./components/sectionDivider";
import FeaturesContent from "./components/FeaturesContent";

function Home() {
  return (
    <>
      <div className="home-page-wrapper bg-cp-dark">
        <StickyNavBar />
        <HeroContent />
        <SectionDivider label={"Features"} />
        <FeaturesContent />

        <SectionDivider label={"Highlights"} />
        <FeaturesContent />
      </div>
    </>
  );
}

export default Home;
