import React from "react";
import { Button } from "react-bootstrap";
import { FaAngleRight } from "react-icons/fa";
import { Link } from "react-router-dom";

function ContactUs() {
  return (
    <div>
      <div className="w-screen  flex flex-col md:flex-row  pb-0.5">
        <div className="md:w-[45%] md:h-[35vh]">
          <img
            src="images/contact-us.webp"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="bg-neutral-950 md:w-[55%] flex flex-col justify-center pl-[10%] items-start space-y-8 py-20">
          <h3 className="text-white text-3xl font-semibold md:w-[55%]">
            Step into the future with our technology.
          </h3>
          <Button
            variant="outline-light"
            className="uppercase flex justify-center items-center  rounded-3xl text-xs py-2  px-10 font-medium border-1 border-gray-500/75 text-white hover:bg-[#01649b] hover:border-[#01649b] transition-all duration-300"
          >
            <Link
              to={"/contactus"}
              className="mr-1 w-full h-full flex items-center hover:mr-3 transition-all duration-400"
            >
              Contact Us
            </Link>
            <FaAngleRight size={18} className="text-white mb-0.5" />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
