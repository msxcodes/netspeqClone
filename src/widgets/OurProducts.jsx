import React from "react";
import ProductCarousel from "./ProductCarousel";
import ProductBtn from "./ProductBtn";

function OurProducts() {
  return (
    <>
      <div className="py-12 md:py-0 px-4 mx-auto bg-gray-900 ">
        <div className="max-w-screen-xl mx-auto md:grid md:grid-cols-2 md:items-center md:gap-2 xl:gap-12">
          <div className="sm:mt-10 lg:mt-0">
            <div className="space-y-6 sm:space-y-8">
              <div className="space-y-2 md:space-y-4">
                <h2 className="font-semibold mb-4 text-2xl lg:text-3xl text-gray-800 dark:text-neutral-200">
                  Our Products
                </h2>
                <p className="text-gray-500 dark:text-neutral-300 text-sm leading-7">
                  Explore our diverse product range, including NetERPX, Zodobay,
                  and SwiftLogiX. Our solutions are meticulously crafted through
                  extensive research and analysis, catering to the varying needs
                  of clients with options for both ready-made and customized
                  deployments.
                </p>
              </div>
            </div>
          </div>
          <div className="">
            <ProductCarousel />
          </div>
        </div>
      </div>
      <ProductBtn />
    </>
  );
}

export default OurProducts;
