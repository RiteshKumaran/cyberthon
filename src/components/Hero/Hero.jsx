import $ from "jquery";
import React from "react";
import "../Hero/Hero.css";
import spaceLines from "../../assets/space-lines.gif";
import eye from "../../assets/eye.svg";
import stairs from "../../assets/stairs.png";
import pillar from "../../assets/intro-pillar.svg";
import cube from "../../assets/intro-cube.png";
import cubes from "../../assets/intro-cubes.png";
import laptop from "../../assets/laptop.png";
import {
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaDiscord,
} from "react-icons/fa";
import { BsArrowDown } from "react-icons/bs";
import { IoMdArrowDropup } from "react-icons/io";
import { HiOutlinePencilSquare } from "react-icons/hi2";
import { BsCalendarCheckFill } from "react-icons/bs";
import { FaMapMarkedAlt } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
export const Hero = () => {
  $(document).ready(function () {
    var homepage = document.querySelector("#Homepage");
    homepage.onload = scrolled;
    homepage.onscroll = scrolled;

    function scrolled() {
      const scrolledTop = homepage.scrollTop;
      const currentScrolled = scrolledTop + homepage.clientHeight;
      const totalScrolled = homepage.scrollHeight;

      const percentageScrolled = Math.round(
        (100 / totalScrolled) * currentScrolled
      );

      $(".progress-bar").click(function () {
        homepage.scrollTop = 0;
      });

      if (scrolledTop > 100) {
        $(".progress-bar").css({ display: "grid" });
      } else {
        $(".progress-bar").css({ display: "none" });
      }
      $(".progress-value").css({
        background: `conic-gradient(var(--primary-color) ${percentageScrolled}%, transparent 0 100%)`,
      });
    }
  });

  document.addEventListener("mousemove", parallax);
  function parallax(e) {
    document.querySelectorAll(".elements").forEach((element) => {
      const speed = element.getAttribute("data-speed");
      const x = (window.innerWidth - e.pageX * speed) / 200;
      const y = (window.innerHeight - e.pageY * speed) / 200;
      const scale = 1.2 + (speed * 0.1) / 3;
      element.style.transform =
        "translate(" + x + "px," + y + "px) scale(" + scale + ")";
    });
  }

  return (
    <section id="Hero" className="hero-section">
      <img src={stairs} data-speed="1" className="stair-el elements" alt="" />
      <img
        src={pillar}
        data-speed="-11"
        className="pillar-el elements"
        alt=""
      />
      {/* <img src={eye} data-speed="2" className="eye-el elements" alt="" /> */}
      <img src={laptop} data-speed="3" className="laptop-el elements" alt="" />
      {/* <img src={cube} data-speed="-3" className="cube-el elements" alt="" /> */}
      <img src={cubes} data-speed="-9" className="cubes-el elements" alt="" />
      <img className="space-lines" data-speed="-2" src={spaceLines} />

      <div className="hero-container">
        <div className="hero-title">
          <div className="hacks-text">
            CYBERTHON<span className=" -tracking-[.1em] "></span>
          </div>
        </div>
        <div className="hero-subtitle flex items-center justify-center">
          <BsCalendarCheckFill
            size={20}
            className="mr-2 mt-2  md:mt-0 md:mr-1"
          />{" "}
          3,4 FEB 2024
        </div>
        <div className="social-links">
          <a href="https://cybercarnival.in/event?id=CCev0001" target="_blank">
            <button className="register-btn">
              {/* <HiOutlinePencilSquare fontSize="1.6rem"/> */}
              REGISTER
            </button>
          </a>
        </div>

        {/* <div className="down-arrow">
          <BsArrowDown fontSize="2.5rem" />
        </div> */}
        <div className="progress-bar">
          <div className="progress-value"></div>
          <div className="progress-status">
            <IoMdArrowDropup />
          </div>
        </div>
      </div>
    </section>
  );
};
