import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
const TopHeader = () => {
  return (
    <>
      <div className="social-icons">
        <ul className="flex">
          <li>
            <FaFacebookF />
          </li>
          <li>
            <FaInstagram />
          </li>
          <li>
            <FaTwitter />
          </li>
        </ul>
      </div>
    </>
  );
};

export default TopHeader;
