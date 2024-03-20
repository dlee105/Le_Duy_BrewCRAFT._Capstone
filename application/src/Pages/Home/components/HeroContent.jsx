import React from "react";

import img1 from "../../../assets/img1.jpg";
import img2 from "../../../assets/img2.jpg";

function HeroContent() {
  return (
    <div className="bg-cp-dark flex md:flex-col ">
      <div className="bg-cp-md md:h-1/2 lg:h-2/3 pb-16 flex">
        <img
          src="https://afar.brightspotcdn.com/dims4/default/c4b0db3/2147483647/strip/false/crop/1600x1066+0+0/resize/1486x990!/quality/90/?url=https%3A%2F%2Fafar-media-production-web.s3.us-west-2.amazonaws.com%2Fbrightspot%2F2a%2Fc6%2Ff4a467120e71172ba0b6971d4336%2Foriginal-vietnam-shutterstock-1218765286.jpg"
          alt=""
          className="w-2/3 shadow-2xl"
        />
        <div className=" pt-32 text-cp-light md:text-xl lg:text-4xl w-full text-center">
          WELCOME TO DUYCOFFEE
        </div>
      </div>
      <div className="bg-cp-dark md:h-1/2 lg:h-2/3 pb-16 flex ">
        <div className=" pt-32 text-cp-light md:text-xl lg:text-4xl w-full text-center">
          WELCOME TO DUYCOFFEE
        </div>
        <img
          src="https://afar.brightspotcdn.com/dims4/default/c4b0db3/2147483647/strip/false/crop/1600x1066+0+0/resize/1486x990!/quality/90/?url=https%3A%2F%2Fafar-media-production-web.s3.us-west-2.amazonaws.com%2Fbrightspot%2F2a%2Fc6%2Ff4a467120e71172ba0b6971d4336%2Foriginal-vietnam-shutterstock-1218765286.jpg"
          alt=""
          className="w-2/3 shadow-2xl"
        />
      </div>
    </div>
  );
}

export default HeroContent;
