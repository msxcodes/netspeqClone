import React from "react";

function FooterCard() {
  return (
    <div className="relative mx-auto  mb  overflow-hidden py-40 text-center shadow-lg">
      <h1 className="mt-2 text-3xl mx-auto w-[80%] md:w-[40%] font-bold text-white">
        United by Innovation, Fueled by Passion. Together, we build the future
        at Netspeq Solutions.
      </h1>
      <img
        className="-z-10 absolute top-0 left-0 h-full w-full object-cover"
        src="images/groupImg.jpg"
        alt=""
      />
    </div>
  );
}

export default FooterCard;
