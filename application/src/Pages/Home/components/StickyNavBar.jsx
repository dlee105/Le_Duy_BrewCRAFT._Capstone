import React from "react";
import { useState, useEffect } from "react";

import logo from "../../../assets/brewCraftLogo.png";
import logo2 from "../../../assets/brewCraftLogo2.png";

import {
  Navbar,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  ThemeProvider,
} from "@material-tailwind/react";

import { useNavigate } from "react-router-dom";

const customMenu = {
  menu: {
    defaultProps: {
      placement: "bottom",
      offset: 5,
      dismiss: {
        itemPress: true,
      },
      animate: {
        unmount: {},
        mount: {},
      },
      lockScroll: false,
    },
    styles: {
      base: {
        menu: {
          bg: "bg-cp-light",
          minWidth: "min-w-[180px]",
          p: "p-1",
          border: "border border-cp-md",
          borderRadius: "rounded-md",
          boxShadow: "shadow-lg shadow-blue-gray-500/10",
          fontFamily: "font-sans",
          fontSize: "text-sm",
          fontWeight: "font-medium",
          color: "text-blue-gray-500",
          overflow: "overflow-auto",
          outline: "focus:outline-none",
          zIndex: "z-[999]",
        },
        item: {
          initial: {
            display: "block",
            width: "w-full",
            pt: "pt-[9px]",
            pb: "pb-2",
            px: "px-3",
            borderRadius: "rounded-none",
            textAlign: "text-start",
            lightHeight: "leading-tight",
            cursor: "cursor-pointer",
            userSelect: "select-none",
            transition: "transition-all",
            bg: "hover:bg-cp-md ",
            color: "text-cp-dark hover:text-cp-light",
            outline: "outline-none",
          },
          disabled: {
            opacity: "opacity-50",
            cursor: "cursor-not-allowed",
            pointerEvents: "pointer-events-none",
            userSelect: "select-none",
            bg: "hover:bg-transparent focus:bg-transparent active:bg-transparent",
            color:
              "hover:text-blue-gray-500 focus:text-blue-gray-500 active:text-blue-gray-500",
          },
        },
      },
    },
  },
};

function StickyNavBar() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [logoHoverState, setLogoHoverState] = useState(false);

  const handleLogoHover = () => {
    setLogoHoverState((curr) => !curr);
  };

  function changeState() {
    setMenuOpen(!menuOpen);
  }

  const HAMBURGER_BTN = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      className="w-6 h-6 hover:cursor-pointer transition-all text-cp-dark"
      onClick={changeState}
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
      />
    </svg>
  );

  const X_BTN = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6 hover:cursor-pointer transition-all text-cp-dark"
      onClick={changeState}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18 18 6M6 6l12 12"
      />
    </svg>
  );

  return (
    <Navbar className="sticky flex justify-between items-center flex-wrap top-0 bg-cp-light rounded-none border-none text-black !w-full !max-w-full min-h-20 z-[100] overflow-hidden">
      {menuOpen ? X_BTN : HAMBURGER_BTN}
      <div
        className="absolute w-32 h-32 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all ease-in-out"
        onMouseOver={handleLogoHover}
        onClick={() => navigate("/")}
      >
        <img src={logo} alt="" className="z-[0]" />
        {/* {logoHoverState ? (
          
        ) : (
          <img src={logo2} alt="" className="z-[0]" />
        )} */}
      </div>

      <NavBarIconGroup />
    </Navbar>
  );
}

export default StickyNavBar;
const PROFILE_SVG = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6 text-cp-dark"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
    />
  </svg>
);

const CART_SVG = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke-width="1.5"
    stroke="currentColor"
    class="w-6 h-6 text-cp-dark"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
    />
  </svg>
);

const SEARCH_SVG = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor "
    className="w-6 h-6 text-cp-dark"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
    />
  </svg>
);

function NavBarIconGroup() {
  return (
    <div className="flex gap-x-5">
      {SEARCH_SVG}
      {CART_SVG}
      <ThemeProvider value={customMenu}>
        <Menu>
          <MenuHandler>{PROFILE_SVG}</MenuHandler>
          <MenuList>
            <MenuItem>Profile</MenuItem>
            <MenuItem>About</MenuItem>
            <MenuItem>Sign Out</MenuItem>
          </MenuList>
        </Menu>
      </ThemeProvider>
    </div>
  );
}
