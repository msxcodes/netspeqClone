import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

function HomeCarousel() {
  return (
    <Carousel>
      <Carousel.Item>
        <div className="h-[90vh] ">
          <img
            src="/images/hero2.jpeg"
            alt=""
            className="size-full object-cover"
          />
        </div>
        <Carousel.Caption className=" md:block">
          <div className="flex flex-col w-full space-y-3 items-start absolute top-[-50vh]">
            <p className="hidden md:block ">
              Expertly Designed Solutions to Streamline Your Business Processes
            </p>
            <div className="flex flex-col items-start text-2xl mb-4  font-semibold md:text-5xl md:font-bold">
              <p className="">Innovating IT Solution </p>
              <p className="">for Modern Businesses</p>
            </div>
            <Link to={"/contactus"}>
              <Button
                variant="outline-light"
                className="rounded-none text-sm py-2 px-4 text-white hover:bg-black/50"
              >
                DROP US A LINE
              </Button>{" "}
            </Link>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className="h-[90vh]">
          <img
            src="/images/hero1.jpeg"
            className="size-full object-cover"
            alt=""
          />
        </div>
        <Carousel.Caption className="">
          <div className="flex flex-col w-full space-y-4 items-start absolute top-[-50vh]">
            <p className="hidden md:block">
              We promise strong business foundation to deliver greater
              efficiency and sustainability
            </p>
            <div className="flex flex-col items-start text-2xl mb-4  font-semibold md:text-5xl md:font-bold">
              <p className="">Driving Transformation</p>
              <p className=" text-red-500  ">with Data and Intelligence</p>
            </div>
            <Link to={"/contactus"}>
              <Button
                variant="outline-light"
                className="rounded-none text-sm py-2  px-4 text-white hover:bg-black/50"
              >
                DROP US A LINE
              </Button>{" "}
            </Link>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default HomeCarousel;
