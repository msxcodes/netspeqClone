import React from "react";
import { Button } from "react-bootstrap";
import { FaAngleRight } from "react-icons/fa";
import { Link } from "react-router-dom";

function ProductBtn() {
  return (
    <div className="h-[12vh] w-full bg-[#01649b] flex justify-center items-center ">
      <Link to="" className="">
        <Button
          variant="outline-light"
          className="flex justify-center items-center  uppercase rounded-none text-xs font-[500] tracking-widest py-2  px-12  bg-neutral-900 hover:border-black hover:bg-neutral-900 hover:text-white transition-all duration-300"
        >
          <span className="hover:mr-2 transition-all duration-300">
            view all products
          </span>
          <FaAngleRight size={18} className="pl-2 mb-0.5 " />
        </Button>{" "}
      </Link>
    </div>
  );
}

export default ProductBtn;
