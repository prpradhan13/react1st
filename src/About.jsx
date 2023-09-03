import React from "react";
import about from "../src/images/about.jpg"
import Common from "./Common";

const About = () => {
  return (
    <>
      <Common
        name="Welcome to about page"
        imgsrc= {about}
        visit="/contact"
        btname="Contact Now"
      />
    </>
  );
};

export default About;
