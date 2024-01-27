import React from "react";
import "./AboutInfo.css";
import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
import { IoMdPerson } from "react-icons/io";
import { FaLaptopCode } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AboutInfo = () => {
  return (
    <div className="about-info-container grid  grid-cols-4 py-6  md:grid-cols-2 sm:!grid-cols-1 gap-x-16 gap-y-12 md:gap-6 mx-auto">
      <div className="flex items-center">
        <FaMapMarkerAlt className="about-icon" />
        <div className="about-info">
          <h3 className="detail-text">Mode of Conduct</h3>
          <h4 className="detail-sub-text">Online & Offline</h4>
        </div>
      </div>
      <div className="flex items-center">
        <FaCalendarAlt className="about-icon" />
        <div className="about-info">
          <h3 className="detail-text">Date & Time</h3>
          <h4 className="detail-sub-text"> 3rd & 4th Feb, 2024</h4>
        </div>
      </div>
      <div className="flex items-center">
        <IoMdPerson className="about-icon" />
        <div className="about-info">
          <h3 className="detail-text">Team Size</h3>
          <h4 className="detail-sub-text">1 to 4 members</h4>
        </div>
      </div>
      <div className="flex items-center">
        {/* <img src={laptop} className="about-icon" /> */}
        <FaLaptopCode className="about-icon" />
        <div className="about-info">
          <h3 className="detail-text">Domains</h3>
          <h4 className="detail-sub-text">Multiple hack Domains</h4>
        </div>
      </div>
    </div>
  );
};

export default AboutInfo;
