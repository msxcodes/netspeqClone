import React from "react";

function ContactForm() {
  return (
    <div className="max-w-[85rem] px-4 pt-4 pb-8 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="max-w-8xl mx-auto">
        <div className="mt-12 grid items-center lg:grid-cols-3 gap-4 lg:gap-16">
          <div className="flex flex-col rounded-xl md:p-6 lg:p-8 ">
            <h2 className="mb-8 text-md font-semibold text-gray-800 ">
              Send Us Message
            </h2>

            <form>
              <div className="grid gap-4">
                <div className="grid grid-cols-1 gap-4 ">
                  <div>
                    <label
                      htmlFor="hs-firstname-contacts-1"
                      className="sr-only"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="hs-firstname-contacts-1"
                      id="hs-firstname-contacts-1"
                      className="py-2 px-2 block w-full border placeholder:text-neutral-600
                       rounded-md text-md focus:border focus:ring-[#01649b] disabled:opacity-50 disabled:pointer-events-none "
                      placeholder="Your Name"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="hs-email-contacts-1" className="sr-only">
                    Email
                  </label>
                  <input
                    type="email"
                    name="hs-email-contacts-1"
                    id="hs-email-contacts-1"
                    autocomplete="email"
                    className="py-2 px-2 block w-full border placeholder:text-neutral-600
                    rounded-md text-md focus:border focus:ring-[#01649b] disabled:opacity-50 disabled:pointer-events-none"
                    placeholder="Your Email"
                  />
                </div>

                <div>
                  <label htmlFor="hs-phone-number-1" className="sr-only">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    name="hs-phone-number-1"
                    id="hs-phone-number-1"
                    className="py-2 px-2 block w-full border placeholder:text-neutral-600
                    rounded-md text-md focus:border focus:ring-[#01649b] disabled:opacity-50 disabled:pointer-events-none"
                    placeholder="Phone Number"
                  />
                </div>
              </div>

              <div className="mt-6 grid">
                <button
                  type="submit"
                  className="py-2 px-4 max-w-40 uppercase border-gray-200 rounded-sm tracking-wider font-medium text-xs focus:border-blue-500 focus:ring-blue-500 hover:bg-[#01649b] hover:text-white transition-all duration-300 disabled:opacity-50 disabled:pointer-events-none border"
                >
                  submit form
                </button>
              </div>
            </form>
          </div>

          <div className="divide-y divide-gray-200 dark:divide-neutral-800">
            <div>
              <label htmlFor="hs-about-contacts-1" className="sr-only">
                Details
              </label>
              <textarea
                id="hs-about-contacts-1"
                name="hs-about-contacts-1"
                rows="6"
                className="py-2 px-2 block w-full border placeholder:text-neutral-600
                rounded-md text-md focus:border focus:ring-[#01649b] disabled:opacity-50 disabled:pointer-events-none"
                placeholder="Your Message"
              ></textarea>
            </div>
          </div>

          <div className="space-y-2 mb-8 p-2">
            <div className="mt-4 mb-4 font-semibold text-md xl:mb-4 text-black">
              Contact Info
            </div>
            <div className="flex border-b-2  text-xs items-center">
              <span className="text-[#01649b] font-bold my-2 mr-4">
                Address:
              </span>
              NH10/A, Deorali, Gangtok, Sikkim
            </div>
            <div className="flex border-b-2  text-xs items-center">
              <span className="text-[#01649b] font-bold my-2 mr-4">Phone:</span>
              +91-98326-14898 (IN)
            </div>
            <div className="flex border-b-2  text-xs items-center">
              <span className="text-[#01649b] font-bold my-2 mr-4">Phone:</span>
              +61-672714224 (AU)
            </div>
            <div className="flex border-b-2  text-xs items-center">
              <span className="text-[#01649b] font-bold my-2 mr-6">Email:</span>
              admin@netspeq.com
            </div>
            <div className="flex border-b-2  text-xs items-center">
              <span className="text-[#01649b] font-bold my-2 mr-8">Open:</span>
              Sunday - Friday 08:00 - 18:00
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
