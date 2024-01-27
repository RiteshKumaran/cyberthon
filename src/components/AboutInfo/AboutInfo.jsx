import React from "react";
import "./AboutInfo.css";
import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
import { IoMdPerson } from "react-icons/io";
import { FaLaptopCode } from "react-icons/fa";

const AboutInfo = () => {
  return (
    <div className="about-info-container">
      <FaMapMarkerAlt size={30} className="about-icon" />
      <div className="about-info">
        <h3 className="detail-text">Mode of Conduct</h3>
        <h4 className="detail-sub-text">Online & Offline</h4>
      </div>
      <FaCalendarAlt size={30} className="about-icon" />
      <div className="about-info">
        <h3 className="detail-text">Date & Time</h3>
        <h4 className="detail-sub-text"> 3rd & 4th Feb, 2024</h4>
      </div>
      <IoMdPerson size={35} className="about-icon" />
      <div className="about-info">
        <h3 className="detail-text">Team Size</h3>
        <h4 className="detail-sub-text">1 to 4 members</h4>
      </div>
      <FaLaptopCode size={35} className="about-icon" />
      <div className="about-info">
        <h3 className="detail-text">Domains</h3>
        <h4 className="detail-sub-text">Multiple hack Domains</h4>
      </div>
    </div>
  );
};

export default AboutInfo;
