import React from "react";
import Hero from "../../components/hero";
import Featured from "../sections/featuredServices";
import Promotions from "../sections/promotions";
import Services from "../sections/services";
import WhoWeAre from "../sections/whoWeAre";
import Blog from "../sections/blog";

function Home() {
  return (
    <>
      <Hero />
      <Featured />
      <WhoWeAre />
      <Services />
      <Promotions />
      <Blog />
    </>
  );
}

export default Home;
