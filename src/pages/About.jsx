import React from "react";
import HeroSection from "../components/hero-section/HeroSection";

const About = () => {
  const data = {
    name: "About the Store",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas laboriosam corporis quaerat explicabo totam velit, soluta dignissimos molestiae eos! Aliquam!",
  };
  return <HeroSection HeroData={data} />;
};

export default About;
