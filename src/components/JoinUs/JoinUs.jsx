import React from "react";
import Joinus from "../../assets/Join_content.png";
import { FaInstagram, FaLinkedinIn, FaDiscord } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import "./JoinUs.css";

const socialLinks = [
  {
    text: "Discord",
    icon: FaDiscord,
    href: "https://discord.gg/KnthBxzApR",
  },
  {
    text: "X / Twitter",
    icon: faXTwitter,
    href: "https://twitter.com/opinhacks",
  },
  {
    text: "Instagram",
    icon: FaInstagram,
    href: "https://www.instagram.com/opinhacks/",
  },
  {
    text: "LinkedIn",
    icon: FaLinkedinIn,
    href: "https://www.linkedin.com/company/opinhacks/",
  },
];

const JoinUs = () => {
  return (
    <section
      id="join"
      className="flex flex-col  p-10 md:justify-center md:items-center join"
    >
      <div className="text-4xl text-primary font-karrera ml-5">Join Us</div>

      <div className="flex flex-row flex-1 justify-center  gap-20 md:gap-5  mt-10 md:flex-col md:justify-center md:items-center">
        <div className="flex flex-col mt-4 flex-1 gap-10 md:justify-center md:items-center ">
          <div className="flex flex-col gap-4 md:justify-center  w-[100%]">
            <div className="text-[#CACACA] text-lg font-secondary w-[90%]">
              Take the leap and immerse yourself in the most exciting tech event
              of the season, where 'hacking' is not just encouraged, it's your
              signature trait! Spark discussions, fuse ideas, and stay connected
              to the latest trends.
            </div>
          </div>
          <div className="grid grid-cols-2 gap-10 md:gap-5 w-[60vh] md:w-[100%]">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="__blank"
                className="text-light border border-primary flex  py-3 pl-3   bg-black rounded-lg"
              >
                <div className="flex items-center gap-5 md:gap-3 font-Satoshi text-xl md:text-[1rem]  font-bold text-primary">
                  {link.icon === faXTwitter ? (
                    <FontAwesomeIcon icon={faXTwitter} size="lg" className="" />
                  ) : (
                    <link.icon className="text-primary md:w-[1rem] w-[2rem]" />
                  )}
                  {link.text}
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinUs;
