import React, { useEffect } from "react";
import ContactBanner from "../contact/ContactBanner";
import ContactForm from "../contact/ContactForm";

function ContactUsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div>
      <ContactBanner />
      <ContactForm />
    </div>
  );
}

export default ContactUsPage;
