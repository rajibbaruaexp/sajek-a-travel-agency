import React from "react";
import HotelFilter from "../HotelFilter/HotelFilter";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero-area py-40 text-center bg-cover bg-center relative flex items-center justify-center flex-col">
      <div className="absolute bg-sky-300  h-64 w-64 top-1/4  mix-blend-multiply rounded-full animate-blob animation-delay-3000"></div>
      <div className="absolute bg-red-300 mix-blend-multiply h-64 w-64 top-1/4 left-1/4 rounded-full animate-blob animation-delay-4000 z-1"></div>
      <div className="absolute bg-teal-900 mix-blend-multiply h-64 w-64 top-1/4 right-1/4 rounded-full  animate-blob animation-delay-2000"></div>
      <div className="hero-items relative text-white">
        <h1 className="text-5xl">Find Your Perfect Hotels</h1>
        <p className="text-lg">Get the best prices on 20,000+ properties</p>
      </div>
      <div className="hotel-filter-wrapper relative mt-5">
        <HotelFilter />
      </div>
    </div>
  );
};  

export default Hero;
