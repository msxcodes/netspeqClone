import React from "react";
import { Link } from "react-router-dom";
import ServiceData from "./ServiceData";

function ServiesCard() {
  return (
    <section className="w-screen py-10 mt-14 ">
      <h1 className="text-center  text-3xl font-semibold">Our Services</h1>
      <div className="mx-auto grid max-w-screen-xl grid-cols-1 gap-2 pt-5 sm:grid-cols-2 md:grid-cols-4 lg:gap-10">
        {ServiceData.map((data) => {
          return (
            <article className="group overflow-hidden border-2 border-gray-200 border-opacity-60 shadow-lg mx-6 my-2 md:my-0 md:mx-0">
              <img
                className="w-full transform object-cover object-center transition duration-500 ease-in-out group-hover:scale-105 md:h-36 lg:h-48"
                src={data.img}
                alt="blog"
              />

              <div className="pt-4 px-6">
                <h1 className="title-font mb-3 inline-block cursor-pointer text-md capitali font-bold tracking-wide text-gray-800">
                  {data.title}
                </h1>
                <p className="line-clamp-6 text-xs cursor-pointer overflow-hidden leading-relaxed text-gray-500">
                  {data.des}
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
          );
        })}
      </div>
    </section>
  );
}

export default ServiesCard;
