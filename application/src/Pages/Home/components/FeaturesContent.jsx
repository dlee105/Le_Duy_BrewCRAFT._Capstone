import React, { useState } from "react";

function FeaturesContent() {
  return (
    <div className="flex flex-wrap md:gap-y-5 relative">
      <FeatureItems
        img={
          "https://www.matchaeologist.com/cdn/shop/articles/Our-Products-max_16-9.jpg?v=1568377892"
        }
        desc={`Indulge in the delicate balance of umami undertones and refreshing grassy notes, 
        meticulously preserved through traditional methods. Whether whisked into a frothy latte 
        or enjoyed in its purest form, our matcha offers a sensory experience like no other.`}
        label={`BrewCRAFT's Japanese Morning Macha`}
      />
      <FeatureItems
        img={
          "https://images.unsplash.com/photo-1626402679707-b248aa61e5ff?q=80&w=1031&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
        desc={`Indulge in the harmonious balance of earthy undertones and velvety notes, 
          characteristic of the Vietnamese coffee tradition. Each sip is a symphony of flavor, 
          transporting you to the bustling streets of Saigon or the tranquil shores of Ha Long Bay.`}
        label={`BrewCRAFT's Vietnamese Vintage`}
      />
      <FeatureItems
        img={
          "https://images.pexels.com/photos/17060529/pexels-photo-17060529/free-photo-of-close-up-of-an-elderly-person-standing-a-container-full-of-coffee-beans.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }
        desc={`Indulge in the delicate balance of umami undertones and refreshing grassy notes, 
        meticulously preserved through traditional methods. Whether whisked into a frothy latte 
        or enjoyed in its purest form, our matcha offers a sensory experience like no other.`}
        label={`BrewCRAFT's Colombian Choice`}
      />

      <FeatureItems
        img={
          "https://bigislandcoffeeroasters.com/cdn/shop/articles/feature_kona-vs-kau_1600x.jpg?v=1680510188"
        }
        desc={`Indulge in the harmonious balance of earthy undertones and velvety notes, 
          characteristic of the Vietnamese coffee tradition. Each sip is a symphony of flavor, 
          transporting you to the bustling streets of Saigon or the tranquil shores of Ha Long Bay.`}
        label={`BrewCRAFT's Hawaiian Heartly`}
      />

      <div className="w-[200px] h-[200px] text-cp-light border border-cp-light z-[90] absolute flex justify-center items-center rounded-full top-1/2 left-1/2 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-cp-dark md:hidden sm:hidden">
        Best Sellers
      </div>
    </div>
  );
}
("https://www.matchaeologist.com/cdn/shop/articles/Our-Products-max_16-9.jpg?v=1568377892");

export default FeaturesContent;

function FeatureItems(props) {
  const [imgSat, setImgSat] = useState(true);

  const handleHover = () => {
    setImgSat((curr) => !curr);
  };

  return (
    <div className="bg-cp-light lg:w-1/2 relative overflow-hidden !max-h-[50vh] !min-h-[25vh] outline outline-1 outline-cp-md">
      <img
        src={props.img}
        alt=""
        className={
          imgSat
            ? "w-full h-full saturate-50 transition-all ease-in-out duration-500"
            : "w-full h-full transition-all ease-in-out duration-500"
        }
      />
      <div
        className="flex absolute z-[90] w-full top-0 hover:text-white items-end h-[800px] hover:!h-full transition-all duration-500 ease-in-out cursor-pointer "
        onMouseEnter={handleHover}
        onMouseLeave={handleHover}
      >
        {/** LOOK HERE**/}
        <div className="w-full justify-self-center z-[0] backdrop-blur-md">
          <div className="mt-10 ml-10 label sm:!ml-5">{props.label}</div>
          <div className="mt-5 ml-10 mb-10 lg:pr-[35%] desc sm:!ml-5">
            {props.desc}
          </div>
        </div>
      </div>
    </div>
  );
}
