import React from "react";
import FeaturedProduct from "../components/products/FeaturedProduct";
import HeroSection from "../components/hero-section/HeroSection";
import Services from "../components/services-section/Services";
import Trusted from "../components/services-section/Trusted";

const Home = () => {
  const data = {
    name: "Ecommerce Store",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas laboriosam corporis quaerat explicabo totam velit, soluta dignissimos molestiae eos! Aliquam!",
  };

  return (
    <>
      <HeroSection HeroData={data} />
      <FeaturedProduct />
      <Services />
      <Trusted />
    </>
  );
};
export default Home;
