import React from "react";

function BannerFooter() {
  return (
    <div className="bg-gray-900/50 hidden md:flex justify-evenly absolute w-full bottom-0 ">
      <div className="text-gray-300 py-4 flex flex-col justify-center items-center">
        <h3 className="text-sm font-semibold text-white uppercase">
          contact us
        </h3>
        <p className="text-xs text-white mt-1">admin@netspeq.com</p>
      </div>
      <div className="text-gray-300 py-4 flex flex-col justify-center items-center">
        <h3 className="text-sm font-semibold text-white uppercase">
          Our location
        </h3>
        <p className="text-xs text-white mt-1">
          NH10/A, Deorali, Gangtok, Sikkim
        </p>
      </div>
      <div className="text-gray-300 py-4 flex flex-col justify-center items-center">
        <h3 className="text-sm font-semibold text-white uppercase">
          Customer support
        </h3>
        <p className="text-xs text-white mt-1">+91-98326-14898</p>
      </div>
    </div>
  );
}

export default BannerFooter;
