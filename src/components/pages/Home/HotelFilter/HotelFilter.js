import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaDoorOpen } from "react-icons/fa";
import { FaDoorClosed } from "react-icons/fa";
import { FaUserFriends } from "react-icons/fa";
import { FaBed } from "react-icons/fa";

const HotelFilter = () => {
  return (
    <div className="hotel-filter-wrapper my-10 sticky top-0">
      <div className="hotel-filter p-2 w-1170 bg-white rounded-md shadow-xl flex">
        <div className="single-filter flex items-center justify-center p-5">
          <div className="filter-icon">
            <FaMapMarkerAlt className="text-gray-400 mx-2 text-3xl" />
          </div>
          <div className="filter-query text-left text-sm cursor-pointer">
            <p>Destination</p>
            <p className="text-sky-500">Where are you going?</p>
          </div>
        </div>
        <div className="single-filter flex items-center justify-center p-5">
          <div className="filter-icon">
            <FaBed className="text-gray-400 mx-2 text-3xl" />
          </div>
          <div className="filter-query text-left text-sm cursor-pointer">
            <p>Hotels</p>
            <p className="text-sky-500">Choose hotel</p>
          </div>
        </div>
        <div className="single-filter flex items-center justify-center p-5">
          <div className="filter-icon">
            <FaDoorOpen className="text-gray-400 mx-2 text-3xl" />
          </div>
          <div className="filter-query text-left text-sm cursor-pointer">
            <p>Check-in</p>
            <p className="text-sky-500">Where are you going?</p>
          </div>
        </div>
        <div className="single-filter flex items-center justify-center p-5">
          <div className="filter-icon">
            <FaDoorClosed className="text-gray-400 mx-2 text-3xl" />
          </div>
          <div className="filter-query text-left text-sm cursor-pointer">
            <p>Check-out</p>
            <p className="text-sky-500">Where are you going?</p>
          </div>
        </div>

        <div className="single-filter flex items-center justify-center p-5">
          <div className="filter-icon">
            <FaUserFriends className="text-gray-400 mx-2 text-3xl" />
          </div>
          <div className="filter-query text-left text-sm cursor-pointer">
            <p>Guests</p>
            <p className="text-sky-500">Where are you going?</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelFilter;
