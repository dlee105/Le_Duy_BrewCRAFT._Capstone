import React from "react";
import "./styles/homePage.css";

import StickyNavBar from "../components/StickyNavBar";
import HeroContent from "../components/HeroContent";
import SectionDivider from "../components/sectionDivider";
import FeaturesContent from "../components/FeaturesContent";
import FooterWithLogo from "../components/FooterWithLogo";

import { Card, Typography } from "@material-tailwind/react";

import highlightPic1 from "../../assets/hightlightPic1.jpg";
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
        <SectionDivider label={"Features"} />
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

function HighlightSection(props) {
  return (
    <div className="w-full flex lg:gap-1 flex-wrap justify-center">
      <img src={highlightPic1} alt="" className="lg:w-1/3 " />
      <div className="lg:w-1/2 md:w-full flex">
        <Card className="relative w-1/3 h-full rounded-none border border-cp-dark bg-cp-md flex text-center text-cp-dark overflow-hidden">
          <img
            src="https://oldcitycoffee.com/wp-content/uploads/2021/01/Occ-Coffee-Bag.png"
            alt=""
            className="hover:scale-110 transition-all ease-in-out"
          />

          <h1>BrewCraft. Original Light Roast</h1>
          <h1>$15</h1>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
            <path d="M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z" />
          </svg>
        </Card>
        <Card className="w-1/3 rounded-none border border-cp-dark bg-cp-md flex text-center text-cp-dark overflow-hidden">
          <img
            src="https://oldcitycoffee.com/wp-content/uploads/2021/01/Occ-Coffee-Bag.png"
            alt=""
            className="hover:scale-110 transition-all ease-in-out"
          />

          <h1>BrewCraft. Original Medium Roast</h1>
          <h1>$15</h1>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
            <path d="M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z" />
          </svg>
        </Card>
        <Card className="w-1/3 rounded-none border border-cp-dark bg-cp-md flex text-center text-cp-dark overflow-hidden">
          <img
            src="https://oldcitycoffee.com/wp-content/uploads/2021/01/Occ-Coffee-Bag.png"
            alt=""
            className="hover:scale-110 transition-all ease-in-out"
          />

          <h1>BrewCraft. Original Dark Roast</h1>
          <h1>$15</h1>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
            <path d="M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z" />
          </svg>
        </Card>
      </div>
    </div>
  );
}
