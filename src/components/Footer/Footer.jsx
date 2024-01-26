import React from "react";
import "./Footer.css";
import logo from "../../assets/logo.png";
// import car from "../../assets/car.png"
import { FaDiscord } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import BacktoFuture from "../../assets/BacktoFuture.png";

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
            className="font-tertiary text-light my-2 mx-0 opacity-70"
            href="#About"
          >
            About
          </a>
          <a
            className="font-tertiary text-light my-2 mx-0 opacity-70"
            href="#Themes"
          >
            Themes
          </a>
          <a
            className="font-tertiary text-light my-2 mx-0 opacity-70"
            href="#sponsors-list"
          >
            Sponsors
          </a>
          <a
            className="font-tertiary text-light my-2 mx-0 opacity-70"
            href="#Faq"
          >
            FAQ
          </a>
          <a
            className="font-tertiary text-light my-2 mx-0 opacity-70"
            href="#join"
          >
            Join Us
          </a>
        </section>
        <section className="flex-content relative flex flex-col p-4">
          <h1>CYBERTHON</h1>
        </section>
        <section className="flex-content relative flex flex-col p-4">
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
            <a
              className="font-tertiary text-light my-2 mx-0 opacity-70"
              href="https://www.linkedin.com/company/opinhacks/"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillLinkedin
                size="2rem"
                className="socials-icon text-primary"
              />
            </a>
            <a
              className="font-tertiary text-light my-2 mx-0 opacity-70"
              href="https://twitter.com/opinhacks"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                icon={faXTwitter}
                size="2x"
                className="socials-icon text-primary"
              />
            </a>
          </div>
        </section>
      </div>
      <hr className="hr-tag w-4/5 opacity-30 mx-auto" />
      <div className="flex">
        <section className="flex-content relative flex p-4 pb-0 w-full">
          <p className="disclaimer mx-auto flex justify-center items-center gap-1.5 font-tertiary">
            Made with{" "}
            <span className="heart text-lg font-Satoshi  font-semibold">
              {" "}
              3 AM coffee! &#9749;
            </span>
          </p>
        </section>
      </div>
    </footer>
  );
};

export default Footernew;
