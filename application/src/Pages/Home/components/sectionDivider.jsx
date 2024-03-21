import React from "react";
import "../styles/homePage.css";

function SectionDivider(props) {
  return (
    <div class="divider my-8">
      <span className="divider-text sm:text-lg lg:text-3xl md:text-2xl text-cp-light reg">
        {props.label}
      </span>
    </div>
  );
}

export default SectionDivider;
