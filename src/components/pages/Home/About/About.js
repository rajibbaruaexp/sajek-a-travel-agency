import React from "react";
import "./About.css";
import HeroImage from "../../../../images/about-image.jpg";
const About = () => {
  return (
    <div className="w-1170 py-20 flex items-center justify-end">
      <div className="about-desk w-6/12">
        <p className="text-sm ">Our Hotels</p>
        <h1 className="text-6xl text-yellow-400 font-light my-4">Relax in our Resort</h1>
        <p className="text-sm font-light">
          Vivamus volutpat eros pulvinar velit laoreet, sit amet egestas erat
          dignissim. Sed quis rutrum tellus, sit amet viverra felis. Cras
          sagittis sem sit amet urna feugiat rutrum. Nam nulla ipsum, venenatis
          malesuada felis.
        </p>
        <button className="bg-sky-400 text-white py-1 px-5 mt-5">
          About Us
        </button>
      </div>
      <div className="about-img  w-6/12">
        <img src={HeroImage} alt="" />
      </div>
    </div>
  );
};

export default About;
