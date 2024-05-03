import React, { useEffect } from "react";
import CareerBanner from "../career/CareerBanner";
import CareerOpening from "../career/CareerOpening";
import CareerWork from "../career/CareerWork";
import CareerApproch from "../aboutus/CareerApproch";

function CareerPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div>
      <CareerBanner />
      <CareerOpening />
      <CareerWork />
      <CareerApproch />
    </div>
  );
}

export default CareerPage;
