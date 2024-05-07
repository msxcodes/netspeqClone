import React, { useState } from "react";
import IndustryData from "./data";
import { NavLink } from "react-router-dom";

function IndustryDetails() {
  return (
    <div className="text-white font-semibold text-sm w-screen mb-10 items-center md:items-start md:w-full space-y-2 flex flex-col">
      {IndustryData.map((data) => (
        <NavLink
          key={data.id}
          to={data.link}
          className="aria-[current=page]:bg-[#01649b]   aria-[current=page]:text-white
               w-[80%] mb-2 bg-gray-200 text-gray-500 hover:text-black hover:bg-[#01649b] py-3 px-4  transition-all duration-300"
        >
          {data.title}
        </NavLink>
      ))}
    </div>
  );
}

export default IndustryDetails;
