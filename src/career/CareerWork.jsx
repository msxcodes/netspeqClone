import React from "react";
import { BsGraphUpArrow } from "react-icons/bs";
import { MdOutlineWork } from "react-icons/md";
import { TfiWrite } from "react-icons/tfi";

function CareerWork() {
  return (
    <div>
      <div class="max-w-screen-xl px-4 py-10 sm:px-6 lg:px-8 mx-auto">
        <div class="flex   ">
          <div class=" bg-blue-50 flex flex-col justify-center px-14">
            <h2 class="text-lg font-semibold md:text-xl lg:text-2xl mb-8 lg:leading-tight xl:text-3xl xl:leading-tight text-black ">
              Why work in Netspeq
            </h2>

            <div class="mt-4 sm:mt-6 flex flex-col space-y-12">
              <div className="flex ">
                <TfiWrite size={100} className="text-[#01649b] " />
                <div className="ml-8">
                  <h3 className="font-semibold mb-3">Work Culture</h3>
                  <p className="text-neutral-600 text-xs leading-6">
                    We foster an environment of collaboration, respect, and
                    continuous growth. With open communication and a shared
                    commitment to excellence, we create a positive workplace
                    where every team member can thrive and contribute to our
                    collective success
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <BsGraphUpArrow size={100} className="text-[#01649b]" />
                <div className="ml-8">
                  <h3 className="font-semibold mb-3">Career Growth</h3>
                  <p className="text-neutral-600 text-xs leading-6 ">
                    At Netspeq Solutions, we prioritize and invest in your
                    career growth. We understand that your journey is unique,
                    and we're committed to providing you with the tools,
                    mentorship, and a wide array of challenging projects that
                    will not only help you excel but also create a fulfilling
                    and rewarding professional path
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="">
            <div class="w-[180%] h-[60vh]">
              <img
                class="size-full object-cover"
                src="images/career-image-02.webp"
                alt="Image Description"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CareerWork;
