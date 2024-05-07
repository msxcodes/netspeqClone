import React from "react";
import { GoClock, GoPeople } from "react-icons/go";
import { MdPeopleAlt } from "react-icons/md";

function HeroCard() {
  return (
    <div className="absolute bottom-[-20vh] md:bottom-[-15%] px-[10vw] space-y-6 md:space-y-0 md:px-[15vw] text-white  grid  md:grid-cols-3 w-screen h-[25vh] z-10 ">
      <div className="bg-[#01649b] flex flex-col justify-evenly items-center  py-4 ">
        <h3 className="text-lg font-semibold"> Time Bound & Trustable</h3>
        <GoClock size={80} />
        <p className="text-gray-300 text-sm text-wrap text-center ">
          We consistently provide top-tier deliverables, always ensuring on-time
          completion.
        </p>
      </div>
      <div className="bg-gray-400 flex flex-col justify-evenly items-center  py-4 text-black">
        <h3 className="text-lg font-semibold "> Dedicated Team Members</h3>
        <MdPeopleAlt size={80} />
        <p className="text-black text-sm text-wrap text-center ">
          Diverse team, unwavering excellence in their work, fostering
          innovation and growth.
        </p>
      </div>
      <div className="bg-[#01649b] flex flex-col justify-evenly items-center  py-4">
        <h3 className="text-lg font-semibold">Vouched for by customers</h3>
        <GoPeople size={80} />
        <p className="text-gray-300 text-sm text-wrap text-center px-4">
          We've earned trust through exceptional work, a reputation our clients
          rely on.
        </p>
      </div>
    </div>
  );
}

export default HeroCard;
