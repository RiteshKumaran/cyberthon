import React from "react";
import "./Footer.css";
import logo from "../../assets/logo.png";
// import car from "../../assets/car.png"
import { FaDiscord, FaInstagram } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import BacktoFuture from "../../assets/BacktoFuture.png";

const socialLinks = [
  {
    text: "INSTAGRAM",
    icon: FaInstagram,
    href: "https://www.instagram.com/cyber_carnival_srmrmp/",
  },
];

const Footernew = () => {
  function discordlink() {
    window.open("https://discord.gg/KnthBxzApR");
  }
  function registration() {
    window.open("https://lu.ma/opin-hacks");
  }
  function sponsor_us() {
    window.open("https://forms.gle/xzP1vVgXWMBpSdHF9");
  }
  return (
    <footer id="Footer" className="p-8 md:p-4 bg-dark text-light">
      <div className="grid grid-cols-4 md:grid-cols-2">
        <section className="flex-content relative flex flex-col p-4 pl-8 font-tertiary">
          <h3 className="text-lg font-primary text-light mb-4">Site</h3>
          <a
            className="font-tertiary text-light my-2 mx-0 opacity-70"
            href="#Hero"
          >
            Home
          </a>
          <a
            className="font-tertiary text-light my-3 mx-0 opacity-70"
            href="#About"
          >
            About
          </a>
          <a
            className="font-tertiary text-light my-3 mx-0 opacity-70"
            href="#Themes"
          >
            Themes
          </a>
          <a
            className="font-tertiary text-light my-3 mx-0 opacity-70"
            href="#Schedule"
          >
            Schedule
          </a>
          <a
            className="font-tertiary text-light my-3 mx-0 opacity-70"
            href="#Timeline"
          >
            Timeline
          </a>
          <a
            className="font-tertiary text-light my-3 mx-0 opacity-70"
            href="#Faq"
          >
            FAQ
          </a>
          <a
            className="font-tertiary text-light my-3 mx-0 opacity-70"
            href="#join"
          >
            Join Us
          </a>
        </section>

        {/* <section className="flex-content relative flex flex-col p-4">
          <h3 className="social-text ml-4 font-primary text-lg text-light mb-4">
            Socials
          </h3>
          <div className="flex-socials w-full flex flex-row flex-nowrap gap-4">
            <a
              className="font-tertiary text-light my-2 mx-0 opacity-70"
              href="https://www.instagram.com/opinhacks/"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillInstagram
                size="2rem"
                className="socials-icon text-primary"
              />
            </a>
          </div>
        </section> */}
        <section className="flex-content relative flex flex-col p-4">
          <h1 className="my-3">Contact</h1>
          <h3 className="font-tertiary text-light my-3 mx-0 opacity-70">
            Ashwathaman: +91 9113242040
          </h3>
          <h3 className="font-tertiary text-light my-3 mx-0 opacity-70">
            Sarvesh: +91 7299078701
          </h3>
          <h3 className="font-tertiary text-light my-3 mx-0 opacity-70">
            Eeshwar: +91 9442954949
          </h3>

          <div className=" w-[60vh] md:w-[100%] xs:scale-75 xxs:ml-[-14px] xs:ml-[-18px]">
            {socialLinks.map((link, index) => (
              <div className="social-links">
                <a key={index} href={link.href} target="_blank">
                  <button className="register-btn flex items-center">
                    {link.icon === faXTwitter ? (
                      <FontAwesomeIcon
                        icon={faXTwitter}
                        size="lg"
                        className="text-black"
                      />
                    ) : (
                      <link.icon className="text-black md:w-[1rem] w-[2rem] " />
                    )}
                    <span className="mt-1 ">{link.text}</span>
                  </button>
                </a>
              </div>
            ))}
          </div>
        </section>
      </div>
      <hr className="hr-tag w-4/5 opacity-30 mx-auto" />
    </footer>
  );
};

export default Footernew;
