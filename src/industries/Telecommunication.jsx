import React from "react";

function Telecommunication() {
  const data = {
    img: "/images/ind05.jpg",
    p1: "The telecommunication sector is made up of companies that make communication possible on a global scale, whether it is through the phone or the Internet, through airwaves or cables, through wires or wirelessly. Currently, India is the world’s second-largest telecommunications market with a subscriber base of 1.16 billion and has registered strong growth in the last decade. The telecom sector continues to be at the epicenter for growth, innovation, and disruption for virtually any industry. It is like the world’s biggest machine put together by complex networks, telephones, mobile phones, and internet-enabled PCs.",
    p2: "Communication is now the backbone of technology. Without the use of communication, our lives wouldn’t be as connected and rich as it is today. Netspeq Solutions strives to provide the best telecommunication services and equipment to our clients. Our vision to help our clients embrace newer and better telecommunication technologies has placed us above our peers in terms of accepting new challenges and providing great results.",
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

export default Telecommunication;
