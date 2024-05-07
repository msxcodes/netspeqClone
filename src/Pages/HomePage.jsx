import React, { useEffect } from "react";
import ExpCard from "../widgets/ExpCard";
import CoreValue from "../widgets/CoreValue";
import ServiesCard from "../widgets/ServiesCard";
import OurProducts from "../widgets/OurProducts";
import IndustriesCard from "../widgets/IndustriesCard";
import FooterCard from "../widgets/FooterCard";
import HeroCard from "../widgets/HeroCard";
import HomeCarousel from "../widgets/HomeCarousel";

function HomePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <HomeCarousel />
      <HeroCard />
      <div className="mt-[65vh] md:mt-[15vh]">
        <ExpCard />
        <CoreValue />
      </div>
      <div className="bg-blue-50/50">
        <ServiesCard />
      </div>
      <OurProducts />
      <IndustriesCard />
      <FooterCard />
    </>
  );
}

export default HomePage;
