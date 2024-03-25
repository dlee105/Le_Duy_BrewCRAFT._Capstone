import React from "react";
import "./styles/shopPage.css";

import { Checkbox, Button } from "@material-tailwind/react";

import StickyNavBar from "../Home/components/StickyNavBar";
import FooterWithLogo from "../Home/components/FooterWithLogo";

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
  return (
    <div className="home-page-wrapper bg-cp-dark w-full h-full">
      <StickyNavBar />
      <div className="bg-cp-md relative flex justify-between ">
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
      <div className="flex py-10">
        <div className="md:w-1/4 lg:w-1/8 p-1 bg-cp-light">
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
            <Button color="amber" size="sm" className="" onClick={() => {}}>
              Apply
            </Button>
          </div>
        </div>
        <div className="md:w-3/4 lg:w-full p-3 bg-cp-light h-screen">
          Results
        </div>
      </div>

      <FooterWithLogo />
    </div>
  );
}

export default Shop;
