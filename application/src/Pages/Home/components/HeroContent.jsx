import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "@material-tailwind/react";
import "../styles/homePage.css";

import img1 from "../../../assets/img1.jpg";
import img2 from "../../../assets/img2.jpg";
import landingVid from "../../../assets/landingVid.mp4";

import { useNavigate } from "react-router-dom";

const API_KEY = "edNfqHU612bcbIFW3z7pBQ==KZcCGnlmrqJpWgcp";

function HeroContent() {
  const navigate = useNavigate();
  const [quote, setQuote] = useState("");

  useEffect(() => {
    getRandomQuote();
  }, []);

  const getRandomQuote = async () => {
    const { data } = await axios.get(
      "https://api.api-ninjas.com/v1/quotes?category=inspirational",
      { headers: { "X-Api-Key": API_KEY } }
    );

    console.log(data[0].quote);

    setQuote({ author: data[0].author, quote: data[0].quote });
  };

  return (
    <div className="bg-cp-dark">
      <div className="h-[calc(100vh-82px)] overflow-hidden relative z-[10] bg-black">
        <div className="absolute bottom-10 z-[20] italic w-full text-center">
          <p className="drop-in desc">
            {quote.quote} - {quote.author}
          </p>
        </div>
        <video
          className="object-contain relative min-w-full min-h-full absolute object-cover top-0 left-0 opacity-50"
          autoPlay
          muted
          loop
        >
          <source src={landingVid} type="video/mp4" />
        </video>
        <div className="absolute z-[20] w-full h-full flex flex-col justify-center items-center top-0 left-0 gap-y-8">
          <div className="overflow-hidden text-center">
            <p className="drop-in text-5xl antialiased label-2">
              Uncover Unique Flavors
            </p>
          </div>
          <div className="md:max-w-[80vw] lg:max-w-[40vw] text-center overflow-hidden sm:p-3">
            <p className="drop-in-2 antialiased desc">
              Discover your perfect morning brew, whether it's the comforting
              warmth of tea, the bold kick of coffee, or the energizing boost of
              your favorite energy drink. Explore a diverse array of naturally
              sourced products, handpicked from humble farms around the world,
              delivering unparalleled taste to elevate your mornings.
            </p>
          </div>
          <Button
            variant="outlined"
            className=" w-[250px] rounded-full text-cp-light border-transparent hover:!border-cp-light hover:!opacity-100 label-2 text-xl duration-300 hover:backdrop-blur-md"
            onClick={() => navigate("/shop")}
          >
            SHOP NOW
          </Button>
        </div>
      </div>

      {/* <div className="mt-10 bg-cp-md md:h-1/2 lg:h-2/3 pb-16 flex">
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
      </div> */}
    </div>
  );
}

export default HeroContent;
