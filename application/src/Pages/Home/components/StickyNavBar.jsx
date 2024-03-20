import React from "react";
import { useState, useEffect } from "react";

import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  Card,
} from "@material-tailwind/react";

function StickyNavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

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
      className="w-6 h-6 hover:cursor-pointer transition-all"
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
      className="w-6 h-6 hover:cursor-pointer transition-all"
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
    <Navbar className="sticky top-0 bg-cp-light rounded-none border text-black !w-full !max-w-full z-[100]">
      {menuOpen ? X_BTN : HAMBURGER_BTN}
    </Navbar>
  );
}

export default StickyNavBar;
