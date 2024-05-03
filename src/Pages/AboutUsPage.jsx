import React, { useEffect } from "react";
import AboutUsBanner from "../aboutus/AboutUsBanner";
import ContactUs from "../industries/ContactUs";
import AboutContext from "../aboutus/AboutContext";

function AboutUsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <AboutUsBanner />
      <AboutContext />
      <ContactUs />
    </div>
  );
}

export default AboutUsPage;
