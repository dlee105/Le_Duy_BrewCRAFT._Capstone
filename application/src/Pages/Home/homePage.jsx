import React from "react";
import "./styles/homePage.css";

import StickyNavBar from "../components/StickyNavBar";
import HeroContent from "../components/HeroContent";
import SectionDivider from "../components/sectionDivider";
import FeaturesContent from "../components/FeaturesContent";
import FooterWithLogo from "../components/FooterWithLogo";
import HighlightSection from "../components/HighlightSection";

function Home() {
  return (
    <>
      <div className="home-page-wrapper bg-cp-dark pb-32">
        <StickyNavBar />
        <HeroContent />
        <SectionDivider label={"Features"} />
        <div className="w-full h-[calc(50vh)] text-center text-cp-light p-32 label">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos quod,
          sed, optio voluptatibus necessitatibus animi minus ex voluptatem
          tenetur, libero eius? Vero soluta, quas quaerat deleniti dignissimos
          deserunt ut dolorem dolore nihil fugiat nulla quo facere quae
          excepturi, maxime consectetur unde quasi officia, ab alias dolor ad!
        </div>
        <FeaturesContent />
        <SectionDivider label={"Highlights"} />
        <div className="w-full h-[calc(50vh)] text-center text-cp-light p-32 label">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos quod,
          sed, optio voluptatibus necessitatibus animi minus ex voluptatem
          tenetur, libero eius? Vero soluta, quas quaerat deleniti dignissimos
          deserunt ut dolorem dolore nihil fugiat nulla quo facere quae
          excepturi, maxime consectetur unde quasi officia, ab alias dolor ad!
        </div>
        <HighlightSection />
        <HighlightSection />
        <HighlightSection />
      </div>
      <FooterWithLogo />
    </>
  );
}

export default Home;
