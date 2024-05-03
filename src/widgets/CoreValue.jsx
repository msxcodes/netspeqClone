import React from "react";
import { FaRegSnowflake, FaRocket, FaShieldAlt } from "react-icons/fa";

function CoreValue() {
  return (
    <div className="w-[60vw] grid grid-cols-3 mx-auto mt-16">
      <div className="flex pr-2">
        <div className="h-[90px] w-[250px] bg-gray-300 shadow-2xl flex justify-center items-center mr-4">
          <FaRocket className="" size={40} />
        </div>
        <div>
          <h3 className="font-semibold mb-4">Mission</h3>
          <p className="text-xs text-gray-600 leading-5">
            We build lasting relationships, delivering top-quality,
            cost-effective solutions for our clients' sustainable success.
          </p>
        </div>
      </div>
      <div className="flex pr-2">
        <div className="h-[90px] w-[250px] bg-gray-300 shadow-2xl flex justify-center items-center mr-4">
          <FaShieldAlt className="" size={40} />
        </div>
        <div>
          <h3 className="font-semibold mb-4">Vision</h3>
          <p className="text-xs text-gray-600 leading-5">
            We aim for industry excellence, ensuring superior quality and
            exceptional service for our valued clients.
          </p>
        </div>
      </div>
      <div className="flex ">
        <div className="h-[90px] w-[250px] bg-gray-300 shadow-2xl flex justify-center items-center mr-4">
          <FaRegSnowflake className="" size={40} />
        </div>
        <div>
          <h3 className="font-semibold mb-4">Core Values</h3>
          <p className="text-xs text-gray-600 leading-5">
            Integrity, Respect, Excellence, Customer Focus, and Leadership guide
            our unwavering commitment to exceptional service.
          </p>
        </div>
      </div>
    </div>
  );
}

export default CoreValue;
