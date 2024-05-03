import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

function HomeCarousel() {
  return (
    <Carousel>
      <Carousel.Item>
        <div className="h-[90vh]">
          <img src="/images/hero2.jpeg" alt="" className="size-full" />
        </div>
        <Carousel.Caption className=" md:block">
          <div className="flex flex-col w-full space-y-3 items-start absolute top-[-50vh]">
            <p className="">
              Expertly Designed Solutions to Streamline Your Business Processes
            </p>
            <p className="text-5xl font-bold">Innovating IT Solution </p>
            <p className=" text-5xl font-bold">for Modern Businesses</p>
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
          <img src="/images/hero1.jpeg" className="carousel-img" alt="" />
        </div>
        <Carousel.Caption className="hidden md:block">
          <div className="flex flex-col w-full space-y-4 items-start absolute top-[-50vh]">
            <p className="">
              We promise strong business foundation to deliver greater
              efficiency and sustainability
            </p>
            <p className=" text-5xl font-bold">Driving Transformation</p>
            <p className=" text-red-500  text-5xl font-bold">
              with Data and Intelligence
            </p>
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
