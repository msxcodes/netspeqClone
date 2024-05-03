import React from "react";
import { Link } from "react-router-dom";

function ServiesCard() {
  return (
    <div>
      <section className="w-screen py-10 mt-14">
        <h1 className="text-center  text-3xl font-semibold">Our Services</h1>
        <div className="mx-auto grid max-w-screen-xl grid-cols-1 gap-2 pt-5 sm:grid-cols-2 md:grid-cols-4 lg:gap-10">
          <article className="group overflow-hidden border-2 border-gray-200 border-opacity-60 shadow-lg">
            <img
              className="w-full transform object-cover object-center transition duration-500 ease-in-out group-hover:scale-105 md:h-36 lg:h-48"
              src="images/service01.jpeg"
              alt="blog"
            />

            <div className="pt-4 px-6">
              <h1 className="title-font mb-3 inline-block cursor-pointer text-md capitali font-bold tracking-wide text-gray-800">
                Software Solution
              </h1>
              <p className="line-clamp-6 text-xs cursor-pointer overflow-hidden leading-relaxed text-gray-500">
                We provide rapid, affordable web and custom software
                development. Using proven best practices at every stage of the
                development cycle to bring your id...
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-end px-2 ">
              <div className="">
                <Link to={"#"}>
                  <span className="mr-3 ml-auto pb-3 inline-flex items-center pr-3 text-xs font-semibold  text-blue-400 md:ml-0 lg:ml-auto">
                    read more
                  </span>
                </Link>
              </div>
            </div>
          </article>
          <article className="group overflow-hidden border-2 border-gray-200 border-opacity-60 shadow-lg">
            <div className="pt-4 px-6">
              <h1 className="title-font mb-3 inline-block cursor-pointer text-md capitali font-bold tracking-wide text-gray-800">
                Hardware & Networking
              </h1>
              <p className="line-clamp-6 text-xs cursor-pointer overflow-hidden leading-relaxed text-gray-500">
                Accelerate organizational growth and performance by enhancing
                your Network and Hardware frontiers. Netspeq offers diverse
                services for your Hardware a...
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-end px-2 ">
              <div className="">
                <a href="">
                  <span className="mr-3 ml-auto pb-3 inline-flex items-center pr-3 text-xs font-semibold  text-blue-400 md:ml-0 lg:ml-auto">
                    read more
                  </span>
                </a>
              </div>
            </div>
            <img
              className="w-full transform object-cover object-center transition duration-500 ease-in-out group-hover:scale-105 md:h-36 lg:h-48"
              src="/images/service02.jpeg"
              alt="blog"
            />
          </article>
          <article className="group overflow-hidden border-2 border-gray-200 border-opacity-60 shadow-lg">
            <img
              className="w-full transform object-cover object-center transition duration-500 ease-in-out group-hover:scale-105 md:h-36 lg:h-48"
              src="images/service03.jpeg"
              alt="blog"
            />

            <div className="pt-4 px-6">
              <h1 className="title-font mb-3 inline-block cursor-pointer text-md capitali font-bold tracking-wide text-gray-800">
                Mobile App Development
              </h1>
              <p className="line-clamp-6 text-xs cursor-pointer overflow-hidden leading-relaxed text-gray-500">
                Got an Idea? Let’s get started at developing best in class App
                for it. Netspeq Solutions is the leading cross-platform mobile
                application development...
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-end px-2 ">
              <div className="">
                <a href="">
                  <span className="mr-3 ml-auto pb-3 inline-flex items-center pr-3 text-xs font-semibold  text-blue-400 md:ml-0 lg:ml-auto">
                    read more
                  </span>
                </a>
              </div>
            </div>
          </article>
          <article className="group overflow-hidden border-2 border-gray-200 border-opacity-60 shadow-lg">
            <div className="pt-4 px-6">
              <h1 className="title-font mb-3 inline-block cursor-pointer text-md capitali font-bold tracking-wide text-gray-800">
                Infrastructure & Cloud Services
              </h1>
              <p className="line-clamp-6 text-xs cursor-pointer overflow-hidden leading-relaxed text-gray-500">
                A better network solution always requires better hardware and
                infrastructure planning. We focus to bridge this gap by of...
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-end px-2 ">
              <div className="">
                <a href="">
                  <span className="mr-3 ml-auto pb-3 inline-flex items-center pr-3 text-xs font-semibold  text-blue-400 md:ml-0 lg:ml-auto">
                    read more
                  </span>
                </a>
              </div>
            </div>
            <img
              className="w-full transform object-cover object-center transition duration-500 ease-in-out group-hover:scale-105 md:h-36 lg:h-48"
              src="images/service04.jpeg"
              alt="blog"
            />
          </article>
        </div>
      </section>
    </div>
  );
}

export default ServiesCard;
