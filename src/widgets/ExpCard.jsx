import React from "react";
import { Button } from "react-bootstrap";
import { FaAngleRight } from "react-icons/fa";
import { Link } from "react-router-dom";

function ExpCard() {
  return (
    <div>
      <div className="grid md:grid-cols-3 w-screen mx-auto px-[10vw] md:px-[15vw] py-16 ">
        <div className="flex flex-col justify-evenly items-center border border-gray-500 py-5 space-y-2">
          <h3 className="text-9xl font-semibold">20</h3>
          <span className="text-[#01649b] uppercase w-3/4 text-center font-semibold text-sm tracking-widest">
            {" "}
            + years of cumulative experience.{" "}
          </span>
        </div>
        <div>
          <h2 className="text-2xl md:text-3xl font-bold py-6 md:p-12">
            {" "}
            Crafting technology solutions that streamlines your business.
          </h2>
        </div>
        <div>
          <p className="text-sm leading-5 text-gray-600 mb-3 md:my-3">
            Netspeq Solutions stands for innovation and simplicity. It has been
            operating in Gangtok, Sikkim since 2014 and has etched its
            footprints by delivering comprehensive, top-quality and
            cost-effective solutions for our clients. We believe that catering
            to any client for IT-related services is a process involving mutual
            trust and confidence. We also believe in developing a perfect
            delivery engine and aligning ourselves with emerging business needs.
          </p>
          <Link to="/aboutus" className="hover:text-black">
            <Button
              variant="outline-light"
              className="flex justify-center items-center uppercase rounded-none text-xs font-semibold tracking-widest py-2  px-12  bg-neutral-900 hover:bg-white hover:border hover:border-neutral-900 "
            >
              about us <FaAngleRight size={18} className="pl-2" />
            </Button>{" "}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ExpCard;
