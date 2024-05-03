import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const IndNames = [
  "Education",
  "Health Care",
  "IT Sector",
  "E-Governance",
  "Telecommunication",
];

function IndustriesCard() {
  return (
    <section className="w-screen py-10">
      <h1 className="text-center  text-3xl font-semibold">Industries</h1>
      <div className="mx-auto grid max-w-screen-xl grid-cols-1 gap-2 pt-5 ml sm:grid-cols-2 md:grid-cols-5 lg:gap-10">
        {IndNames.map((name) => {
          return (
            <div
              className="aria-[current=page]:bg-black w-[200px] h-[200px] flex justify-center hover:bg-black hover:text-white  items-center rounded-full bg-[#01649b] transition-all duration-300"
              key={name}
            >
              <Link to="" className=" font-bold hover:text-white ">
                {name}
              </Link>
            </div>
          );
        })}

        <div className="flex w-[80vw] mt-12">
          <div className="w-[80%] text-xs text-gray-600 leading-6 border border-black p-4">
            At Netspeq Solutions, we've made a significant impact on the
            education industry by seamlessly incorporating technology into
            learning environments. Our expertise extends from cutting-edge
            e-learning platforms to efficient administrative systems. Join us on
            this transformative journey towards a brighter future in education
            sector
          </div>
        </div>
      </div>
    </section>
  );
}

export default IndustriesCard;
