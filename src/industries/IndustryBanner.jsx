import React from "react";
import { Link } from "react-router-dom";
import BannerFooter from "../utilities/BannerFooter";

function IndustryBanner() {
  return (
    <div>
      <div className="relative mx-auto overflow-hidden py-32 shadow-lg">
        <img
          className="-z-10 absolute top-0 left-0  h-full w-full object-cover"
          src="images/industry-banner.webp"
          alt=""
        />
        <div className="flex justify-around items-center px-4 md:px-0">
          <div>
            <h1 className="mt-2 text-5xl font-bold text-white">Industries</h1>
            <p className="mt-6 text-lg text-white font-semibold">
              New technology is common, new thinking is rare.
            </p>
          </div>
          <div className="hidden md:block">
            <p className="uppercase text-gray-300 text-sm font-medium ">
              <Link to={"/"}> Home </Link> | <span> industry </span>
            </p>
          </div>
        </div>

        <BannerFooter />
      </div>
    </div>
  );
}

export default IndustryBanner;
