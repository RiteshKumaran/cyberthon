import React from "react";
import Joinus from "../../assets/Join_content.png";
import { FaInstagram, FaLinkedinIn, FaDiscord } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import "./JoinUs.css";

const JoinUs = () => {
  return (
    <section
      id="join"
      className="flex flex-col  p-10 md:justify-center md:items-center join"
    >
      <div className="text-4xl text-primary font-karrera">Join Us</div>

      <div className="flex flex-row flex-1 justify-center  gap-20 md:gap-5  mt-10 md:flex-col md:justify-center md:items-center">
        <div className="flex flex-col mt-4 flex-1 gap-10 md:justify-center md:items-center ">
          <div className="text-[#CACACA] text-lg font-secondary w-[90%] g">
            Take the leap and immerse yourself in the most exciting tech event
            of the season, where 'hacking' is not just encouraged, it's your
            signature trait! Spark discussions, fuse ideas, and stay connected
            to the latest trends.
          </div>
          <div className="social-links ml-auto mr-auto">
            <a
              href="https://cybercarnival.in/event?id=CCev0001"
              target="_blank"
            >
              <button className="register-btn ">
                <span className="mt-1">REGISTER</span>
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinUs;
