import React, { useEffect } from "react";
import IndustryBanner from "../industries/IndustryBanner";
import ContactUs from "../industries/ContactUs";
import { Outlet } from "react-router-dom";
import IndustryDetails from "../industries/IndustryDetails";

function IndustryPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div>
      <IndustryBanner />
      <div className="grid max-w-screen-lg mx-auto md:grid-cols-3 py-20">
        <IndustryDetails />
        <Outlet />
      </div>
      <ContactUs />
    </div>
  );
}

export default IndustryPage;
