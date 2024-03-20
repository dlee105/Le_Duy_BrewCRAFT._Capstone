import React from "react";
import "./styles/homePage.css";

import StickyNavBar from "./components/StickyNavBar";
import HeroContent from "./components/HeroContent";

function Home() {
  return (
    <>
      <div className="home-page-wrapper">
        <StickyNavBar />
        <HeroContent />
      </div>
    </>
  );
}

export default Home;
