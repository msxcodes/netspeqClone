import React from "react";
import { Link } from "react-router-dom";
import BannerFooter from "../utilities/BannerFooter";

function AboutUsBanner() {
  return (
    <div>
      <div className="relative mx-auto overflow-hidden py-32 shadow-lg">
        <div className="flex justify-around items-center">
          <div>
            <h1 className="mt-2 text-5xl font-bold text-black">About Us</h1>
            <p className="mt-2 mb-4 font-medium text-lg text-black">Join Us</p>
          </div>
          <div className="hidden md:block">
            <p className="uppercase text-black/70 text-sm  ">
              <Link to={"/"}> Home </Link> | <span> About us</span>
            </p>
          </div>
        </div>

        <BannerFooter />

        <img
          className="-z-10 absolute top-0 left-0  h-full w-full object-cover opacity-80 md:opacity-100"
          src="images/career-banner.webp"
          alt=""
        />
      </div>
    </div>
  );
}

export default AboutUsBanner;
