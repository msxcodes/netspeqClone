import React from "react";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { TfiYoutube } from "react-icons/tfi";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-neutral-950">
      <div className="mx-auto grid max-w-screen-2xl gap-y-8 gap-x-12 px-4 py-12 md:grid-cols-2 xl:grid-cols-4 xl:px-10">
        <div className="max-w-sm mt-8">
          <div className="mb-6 flex h-12 items-center space-x-2">
            <span className="h-[7vh] w-[50vw] ">
              <img src="/images/footer-logo.png" alt="" className="h-full " />
            </span>
          </div>
          <div className="text-gray-300 text-xs leading-6 ">
            We are IT consultancy and Digital Integrator Company providing best
            in class & cutting edge technology today, for tomorrow.
          </div>
        </div>
        <div className="md:ml-12">
          <div className="mt-4 mb-2  font-semibold xl:mb-4 text-white text-lg">
            Quick Links
          </div>
          <nav aria-label="Footer Navigation" className="text-gray-500">
            <ul className="space-y-2 text-xs mt-4 text-gray-300 ">
              <li>
                <Link
                  className="hover:text-white hover:font-semibold transition-all duration-300"
                  to={"/"}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-white hover:font-semibold transition-all duration-300"
                  to="#"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-white hover:font-semibold transition-all duration-300"
                  to="#"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-white hover:font-semibold transition-all duration-300"
                  to="/industries"
                >
                  Industries
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-white hover:font-semibold transition-all duration-300"
                  to="/career"
                >
                  Career
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-white hover:font-semibold transition-all duration-300"
                  to="/aboutus"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-white hover:font-semibold transition-all duration-300"
                  to="/contactus"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="">
          <div className="mt-4 mb-4 font-semibold xl:mb-4 text-white text-lg ">
            Our Location
          </div>

          <div className="flex justify-start items-center text-gray-300 text-xs mb-4">
            <span className="w-7 rounded-md mr-2 overflow-hidden">
              <img src="images/flag-in.svg" alt="" />
            </span>
            NH10/A, Deorali, Gangtok, Sikkim
          </div>
          <div className="flex text-gray-300 justify-start items-center text-xs">
            <span className="w-7 rounded-md overflow-hidden mr-2">
              <img src="images/flag-au.svg" alt="" />
            </span>
            Unit 5/76 Northumberland St Tusmore
          </div>
        </div>

        <div className="space-y-2">
          <div className="mt-4 mb-4 font-semibold text-lg xl:mb-4 text-white">
            Contact Us
          </div>
          <div className="flex text-gray-200 text-xs items-center">
            <span className="text-[#01649b] font-bold text-sm mb-1 mr-4">
              Phone:
            </span>
            +91-98326-14898 (IN)
          </div>
          <div className="flex text-gray-200 text-xs items-center">
            <span className="text-[#01649b] font-bold text-sm mb-1 mr-4">
              Phone:
            </span>
            +61-672714224 (AU)
          </div>
          <div className="flex text-gray-200 text-xs items-center">
            <span className="text-[#01649b] font-bold text-sm mb-1 mr-6">
              Email:
            </span>
            admin@netspeq.com
          </div>
          <div className="flex text-gray-200 text-xs items-center">
            <span className="text-[#01649b] font-bold text-sm mb-1 mr-8">
              Web:
            </span>
            <a href="#">https://www.netspeq.com</a>
          </div>
        </div>
      </div>
      <div className="bg-black">
        <div className="mx-auto flex items-center max-w-screen-2xl flex-col gap-y-4 px-4 py-3 text-center text-gray-500 sm:flex-row sm:justify-between sm:text-left">
          <div className=" text-xs text-gray-300">
            © Copyright 2023 -{" "}
            <span className="text-[#01649b] font-semibold ">
              Netspeq Solution
            </span>{" "}
          </div>
          <div className="flex space-x-3 items-center text-gray-200 ">
            <a
              className="p-1 hover:bg-[#01649b] rounded-full transition-all duration-300"
              href="#"
            >
              <FaFacebookF />
            </a>
            <span>|</span>
            <a
              className="p-1 hover:bg-[#01649b] rounded-full transition-all duration-300"
              href="#"
            >
              <FaLinkedinIn />
            </a>
            <span>|</span>
            <a
              className="p-1 hover:bg-[#01649b] rounded-full transition-all duration-300"
              href="#"
            >
              <TfiYoutube />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
