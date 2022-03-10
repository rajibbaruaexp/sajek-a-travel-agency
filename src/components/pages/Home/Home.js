import React from "react";
import Header from "../../shared/header/Header/Header";
import About from "./About/About";
import Hero from "./Hero/Hero";
import HotelFilter from './HotelFilter/HotelFilter'
const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <HotelFilter/>
      <About />
    </>
  );
};

export default Home;
