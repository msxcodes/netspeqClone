import React from "react";

function IT() {
  const data = {
    img: "/images/ind03.jpg",
    p1: "The information technology (IT) sector comprises companies that produce software, hardware or semiconductor equipment, or companies that provide internet or related services. India is the leading sourcing destination across the world, accounting for approximately 55% market share of the US$ 200-250 billion global services sourcing business in 2019-20.Indian IT's core competencies and strengths have attracted significant investment from major countries.",
    p2: "Information Technology is a field which is undergoing rapid evolution and is changing the shape of Indian business standards. There are a lot of problems that have been solved by the IT industry globally. There are even more problems that unearth every day. With innovation at our core, Netspeq Solutions is focused on solving problems. We are committed to utilizing technology to improve the quality of people’s lives and businesses. Our dedicated experts will work closely with your team to determine the right IT solutions and services that maximize your business advantage, streamline your workflows, and reduce your operating costs.",
  };

  return (
    <div className="w-full space-y-3 col-span-2 px-8 md:px-0">
      <div>
        <img src={data.img} alt="" />
      </div>
      <div className="space-y-2">
        <p className="text-xs text-neutral-600 leading-6">{data.p1}</p>
        <p className="text-xs text-neutral-600 leading-6">{data.p2}</p>
      </div>
    </div>
  );
}

export default IT;
