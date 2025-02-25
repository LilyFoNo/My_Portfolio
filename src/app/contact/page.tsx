"use client";

import { ContactComponent, StarsCanvas } from "../components";

const Contact = () => {
  return (
    <>
      <div className="relative z-0">
        <ContactComponent />
        <StarsCanvas />
      </div>
    </>
  );
};

export default Contact;
