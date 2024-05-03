import React from "react";

function CareerApproch() {
  return (
    <footer className="w-full max-w-screen py-10 px-4 sm:px-6 lg:px-8 bg-gray-700">
      <div className="flex justify-center items-center mb-12">
        <h2 className="text-2xl text-white font-bold w-2/4 border-b-2 border-gray-600 text-center py-4">
          Our Approach
        </h2>
      </div>
      <div className="grid max-w-screen-xl mx-auto grid-cols-2 md:grid-cols-4 mb-10 gap-4">
        <div>
          <h4 className="text-md font-semibold text-gray-900  dark:text-neutral-100">
            Initial Planning
          </h4>

          <div className="mt-3 grid space-y-3 text-xs">
            <p className="text-neutral-300">
              Meet, get acquinted to clients vision, collaborate and build
              strategy
            </p>
          </div>
        </div>
        <div>
          <h4 className="text-md font-semibold text-gray-900  dark:text-neutral-100">
            Requirement Gathering
          </h4>

          <div className="mt-3 grid space-y-3 text-xs">
            <p className="text-neutral-300">
              Work out an action plan, create milestones and set priorities
            </p>
          </div>
        </div>
        <div>
          <h4 className="text-md font-semibold text-gray-900  dark:text-neutral-100">
            Development & Testing
          </h4>

          <div className="mt-3 grid space-y-3 text-xs">
            <p className="text-neutral-300">
              Product development with rigorous testing
            </p>
          </div>
        </div>
        <div>
          <h4 className="text-md font-semibold text-gray-900  dark:text-neutral-100">
            Deployment & Beyond
          </h4>

          <div className="mt-3 grid space-y-3 text-xs">
            <p className="text-neutral-300">
              Post implementation support with maintainence and training
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default CareerApproch;
