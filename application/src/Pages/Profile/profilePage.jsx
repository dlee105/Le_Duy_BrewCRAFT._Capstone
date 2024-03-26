import React from "react";
import StickyNavBar from "../components/StickyNavBar";
import FooterWithLogo from "../components/FooterWithLogo";

function Profile() {
  return (
    <div className="home-page-wrapper bg-cp-dark w-full h-full">
      <StickyNavBar />
      <div>
        <img
          src="https://wallpapers.com/images/featured/4k-nature-ztbad1qj8vdjqe0p.jpg"
          alt=""
          className="absolute top-0 max-h-[50vh] w-full"
        />
      </div>
      <div className="z-[90] mt-32 bg-cp-light h-screen mx-5 mb-10 rounded-lg p-5 relative">
        <div className="rounded-full flex justify-center items-center p-2 h-40 w-40 bg-cp-light absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 overflow-hidden">
          <img
            src="https://i.pinimg.com/originals/4c/9d/63/4c9d63813bf3aa83f0318d99be78d326.png"
            alt=""
            className="w-full h-full rounded-full"
          />
        </div>
        <div className="flex flex-col justify-center items-center pt-20 ">
          <div className="label">JOHN JONES</div>
          <div>@jonbones</div>
        </div>
      </div>
      <FooterWithLogo />
    </div>
  );
}

export default Profile;
