import React from "react";
import { Button } from "react-bootstrap";
import { FaAngleRight } from "react-icons/fa";
import { Link } from "react-router-dom";

function CareerOpening() {
  return (
    <div>
      <div className="max-w-[70rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="grid sm:grid-cols-2 sm:items-center gap-12">
          <div className="sm:order-1">
            <div className="relative pt-[50%] sm:pt-[60%] ">
              <img
                className="size-full absolute top-0 start-0 object-cover "
                src="images/career-image-01.webp"
                alt="Image Description"
              />
            </div>
          </div>

          <div className="sm:order-2">
            <h2 className="text-3xl font-semibold lg:leading-tight xl:text-4xl xl:leading-tight text-black ">
              Join us in connecting the dots to shape tomorrow.
            </h2>

            <div className="mt-4 sm:mt-6 flex items-center">
              <p className="text-neutral-600 text-sm leading-6">
                Join Netspeq Solutions, where your career takes flight in an
                atmosphere of freedom and innovation. We offer collaborative
                spaces that spark creativity, encouraging you to bring your
                ideas to life.{" "}
              </p>
            </div>

            <div className="mt-5">
              <Button
                variant="outline-light"
                className="uppercase flex justify-center items-center  rounded-3xl text-xs py-[0.7rem]  px-10 font-medium border-1 bg-[#01649b] hover:bg-[#01649b] hover:text-white hover:border-[#01649b] transition-all duration-300"
              >
                <Link
                  to={"#"}
                  className="mr-1 w-full h-full flex items-center hover:mr-3 transition-all duration-400"
                >
                  View All Openings
                </Link>
                <FaAngleRight size={18} className="text-white mb-0.5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CareerOpening;
