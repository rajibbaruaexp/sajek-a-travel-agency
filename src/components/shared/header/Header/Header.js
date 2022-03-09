import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <>
      <div className="header-wrapper bg-sky-500">
        <div className="header py-5 flex w-9/12 items-center justify-between text-white my-0 mx-auto">
          <div className="site-logo">
            <p className="text-4xl">Sajek</p>
          </div>
          <div className="site-menu">
            <ul className="flex w-96 justify-around">
              <li>Home</li>
              <li>About</li>
              <li>Places</li>
              <li>Hotels</li>
              <li>Blogs</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
