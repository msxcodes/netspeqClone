import React from "react";
import "./Header.css";
import { GoDotFill } from "react-icons/go";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className=" px-4 shadow">
      <div className="relative mx-auto flex max-w-screen-xl flex-col py-3 sm:flex-row sm:items-center sm:justify-between ">
        <Link className="flex items-center text-2xl font-black" to="/">
          <img src="/images/logo.png" className="h-[55px]" />
        </Link>
        <input className="peer hidden " type="checkbox" id="navbar-open" />
        <label
          className="absolute right-0 mt-3 cursor-pointer text-xl sm:hidden transition-all duration-300"
          htmlFor="navbar-open"
        >
          <span className="sr-only">Toggle Navigation</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="0.88em"
            height="1em"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 448 512"
          >
            <path
              fill="currentColor"
              d="M0 96c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zm0 160c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zm448 160c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h384c17.7 0 32 14.3 32 32z"
            />
          </svg>
        </label>
        <nav
          aria-label="Header Navigation"
          className="peer-checked:block hidden pl-2 py-6 sm:block sm:py-0 "
        >
          <ul className="flex flex-col nav-ul gap-y-4 sm:flex-row sm:gap-x-8">
            <li className="">
              <Link className="nav-link" to={"/"}>
                HOME
              </Link>
            </li>
            <GoDotFill size={14} className="nav-icon hidden md:block" />
            <li className="">
              <Link className="nav-link" to={"/industries"}>
                {" "}
                INDUSTRIES{" "}
              </Link>
            </li>
            <GoDotFill size={14} className="nav-icon hidden md:block" />
            <li className="">
              <Link className="nav-link" to="/career">
                CAREER{" "}
              </Link>
            </li>
            <GoDotFill size={14} className="nav-icon hidden md:block" />
            <li className="sm:mt-0">
              <Link className="nav-link" to="/login">
                LOGIN
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
