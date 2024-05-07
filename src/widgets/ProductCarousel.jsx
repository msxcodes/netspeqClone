import React from "react";
import { Button, Carousel } from "react-bootstrap";

function ProductCarousel() {
  return (
    <Carousel>
      <Carousel.Item>
        <div className="w-full h-[40vh] flex space-x-3 ">
          <div className="w-full h-full">
            <img
              src="/images/product01.jpeg"
              alt=""
              className="w-full h-full object-contain"
            />
          </div>
          <div className="w-full h-full">
            <img
              src="/images/product02.jpeg"
              alt=""
              className="h-full w-full object-contain"
            />
          </div>
        </div>
        <Carousel.Caption className=" md:block"></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className="w-full h-[40vh] flex space-x-3">
          <div className="w-full h-full">
            <img
              src="/images/product03.jpeg"
              alt=""
              className="w-full h-full object-contain"
            />
          </div>
          <div className="w-full h-full">
            <img
              src="/images/product04.jpeg"
              alt=""
              className="h-full w-full object-contain"
            />
          </div>
        </div>
        {/* <Carousel.Caption className="hidden md:block">
          <div className="flex flex-col w-full space-y-4 items-start absolute top-[-50vh]">
            <Button
              variant="outline-light"
              className="rounded-none text-sm py-2  px-4 text-white hover:bg-black/50"
            >
              DROP US A LINE
            </Button>{" "}
          </div>
        </Carousel.Caption> */}
      </Carousel.Item>
    </Carousel>
  );
}

export default ProductCarousel;
