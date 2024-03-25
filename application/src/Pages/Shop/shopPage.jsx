import React, { useEffect, useState } from "react";
import "./styles/shopPage.css";

import { Checkbox, Button } from "@material-tailwind/react";

import StickyNavBar from "../Home/components/StickyNavBar";
import FooterWithLogo from "../Home/components/FooterWithLogo";
import { GET_ALL_ITEMS } from "../API-HELPERS";
import axios from "axios";

const PLACEHOLDER_IMG =
  "https://img.freepik.com/free-photo/delicious-coffee-beans-cup_23-2150691429.jpg";

const SEARCH_ICON = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke-width="1.5"
    stroke="currentColor"
    class="w-6 h-6"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
    />
  </svg>
);

function Shop() {
  const [currentItems, setCurrentItems] = useState([]);

  const getALLItems = async () => {
    const { data } = await axios.get("http://localhost:3000/api/items");

    setCurrentItems((prev) => [...data]);
  };

  useEffect(() => {
    getALLItems();
  });

  return (
    <div className="home-page-wrapper bg-cp-light w-full h-full">
      <StickyNavBar />
      <div className="bg-cp-md relative flex justify-between">
        <div className="flex">
          <div className="hover:outline outline-1 flex justify-center items-center px-3">
            <a href="">Coffee</a>
          </div>
          <div className="hover:outline outline-1 flex justify-center items-center px-3">
            <a href="">Tea</a>
          </div>
          <div className="hover:outline outline-1 flex justify-center items-center px-3">
            <a href="">S.America</a>
          </div>
          <div className="hover:outline outline-1 flex justify-center items-center px-3">
            <a href="">N.America</a>
          </div>
          <div className="hover:outline outline-1 flex justify-center items-center px-3">
            <a href="">Europe</a>
          </div>
          <div className="hover:outline outline-1 flex justify-center items-center px-3">
            <a href="">Asia</a>
          </div>
          <div className="hover:outline outline-1 flex justify-center items-center px-3">
            <a href="">Custom</a>
          </div>
        </div>
        <input
          type="search"
          name="search"
          placeholder="Search"
          className="border-2 border-grey-300 bg-cp-light w-[300px] h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none m-1"
        />
        <button
          className="absolute right-0 top-0 mt-3 mr-3 focus:border rounded-md border-cp-md"
          type="submit"
        >
          {SEARCH_ICON}
        </button>
      </div>
      <div className="flex py-10 border-b border-cp-dark">
        <div className="md:w-1/4 lg:w-1/8 p-1 bg-cp-light ">
          <div className="flex flex-col ">
            <div className="text-lg font-medium px-3 pt-2">Popular</div>
            <Checkbox color="green" label="Tea" className="" />
            <Checkbox color="green" label="Coffee" />
            <Checkbox color="green" label="Energy Drinks" />
          </div>
          <div className="flex flex-col">
            <div className="text-lg font-medium px-3 pt-2 ">Nationality</div>
            <Checkbox color="green" label="Columbia" className="" />
            <Checkbox color="green" label="Mexico" />
            <Checkbox color="green" label="USA" />
            <Checkbox color="green" label="Japan" />
            <Checkbox color="green" label="Vietnam" />
            <Checkbox color="green" label="Italy" />
            <Checkbox color="green" label="Brazil" />
          </div>
          <div className="flex p-3">
            <Button
              color="amber"
              size="sm"
              className=""
              onClick={() => {
                console.log(currentItems);
              }}
            >
              Apply
            </Button>
          </div>
        </div>
        <div className="md:w-3/4 lg:w-full p-3 bg-cp-light h-screen overflow-y-scroll border-l border-white">
          Results
          <div className="grid lg:grid-cols-2 gap-y-1  ">
            {currentItems.map((items) => (
              <div className="border border-cp-light bg-cp-dark flex relative">
                <div className=" flex justify-center items-center p-1">
                  <img src={PLACEHOLDER_IMG} alt="" className="" />
                </div>
                <div className="text-cp-light w-full p-5">
                  <div className="font-bold text-lg">{items.itemName}</div>
                  <div className="pt-3 italic sm:text-xs">
                    {items.description}
                  </div>
                </div>
                <div className="absolute bottom-1 right-1 flex gap-x-10">
                  <div className="flex justify-center items-center text-cp-light">
                    {items.price} USD
                  </div>
                  <div>
                    <div className="flex items-center gap-x-1.5 h-full text-cp-light">
                      <button
                        type="button"
                        className="size-6 inline-flex justify-center items-center gap-x-2 text-sm font-md "
                      >
                        <svg
                          class="flex-shrink-0 size-3.5"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path d="M5 12h14" />
                        </svg>
                      </button>
                      <input
                        class="p-0 w-6 bg-transparent border-0 text-center focus:ring-0 "
                        type="text"
                        value="0"
                        data-hs-input-number-input
                      ></input>
                      <button
                        type="button"
                        className="size-6 inline-flex justify-center items-center gap-x-2 text-sm font-md "
                      >
                        <svg
                          class="flex-shrink-0 size-3.5"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path d="M5 12h14" />
                          <path d="M12 5v14" />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <Button variant="gradient" color="amber">
                    Add To Cart
                  </Button>
                </div>
              </div>
            ))}
          </div>
          <div className="p-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ad aut
            placeat harum incidunt possimus. Illum distinctio asperiores rem
            laudantium incidunt ea amet? Ullam officia magni laborum. Veritatis
            recusandae illo delectus blanditiis non. Consequatur cumque officiis
            consequuntur tempore aliquam dignissimos, similique dolor nisi ea
            praesentium placeat? Quod illo officiis sint! Culpa, deleniti
            veritatis? Temporibus odio inventore cupiditate libero tenetur
            laborum animi. Tempore, placeat veritatis! Non recusandae natus, in
            nostrum unde est, soluta autem cumque deserunt quasi doloribus!
            Nihil vero eaque aliquam nesciunt maxime velit quibusdam quidem qui,
            optio voluptatem amet nostrum nobis nulla vitae molestias obcaecati.
            Distinctio expedita dolores dolorum!
          </div>
        </div>
      </div>

      <FooterWithLogo />
    </div>
  );
}

export default Shop;
