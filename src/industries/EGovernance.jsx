import React from "react";

function EGovernance() {
  const data = {
    img: "/images/ind04.jpg",
    p1: "Netspeq Solutions offers IT services and solutions for the betterment and ease of governance. Government-to-citizen services have always involved a tiresome physical procedure, running here and there, leading to harassment for citizens. With the e-governance services that we provide, government incentives and schemes that were lurking in the shadows have finally found their limelight. Citizens are happier with the ease and comfort digital services have brought to their lives. There are a plethora of challenges that widen the gap between the government and citizens. Our services help governments effectively tackle these challenges. In addition, it also enables them to transform their citizen services with emerging technologies to deliver exceptional experience and success.",
    p2: "Electronic governance or e-governance can be defined as the usage of Information and Communication Technology (ICT) by the government to provide and facilitate government services, exchange of information, communication transactions and integration of various stand-alone systems and services. Through e-governance, government services are made available to citizens in a convenient, efficient, and transparent manner.",
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

export default EGovernance;
