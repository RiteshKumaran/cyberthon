import React from "react";
import "./Organizers.css";

import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import GDSC from "../../assets/gdsc.png";
import hackreboot from "../../assets/Hackreboot.png";
import opinco from "../../assets/opincologo.png";
import hole2 from "../../assets/hole2.png";
import track2 from "../../assets/track2.png";
import column from "../../assets/column.png";
import sidestairs2 from "../../assets/sidestairs2.png";
import greenmonster from "../../assets/greenmonster.png";
import staircubes from "../../assets/staircubes.png";
import sidestairs from "../../assets/sidestairs.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";

export const Organizers = () => {
  function gdsc_insta() {
    window.open("https://instagram.com/gdscbitd?igshid=YmMyMTA2M2Y=");
  }
  function gdsc_twitter() {
    window.open("https://twitter.com/gdscbitd?t=tRPkbvIxmQdZmlDb66-JvA&s=08");
  }
  function hack_insta() {
    window.open("https://instagram.com/hackrebootbitd?igshid=YmMyMTA2M2Y=");
  }

  function hack_twitter() {
    window.open(
      "https://twitter.com/HackRebootBITD?t=tjJczxvMfF0go2-7xN4iJg&s=08"
    );
  }
  function opinco_insta() {
    window.open("https://www.instagram.com/opincocommunity/");
  }
  function opinco_twitter() {
    window.open("https://twitter.com/opincocommunity");
  }

  const organizers = [
    {
      id: 1,
      name: "GDSC BITD",
      img: GDSC,
      insta: gdsc_insta,
      twitter: gdsc_twitter,
    },
    {
      id: 2,
      name: "HackReboot",
      img: hackreboot,
      insta: hack_insta,
      twitter: hack_twitter,
    },
    {
      id: 3,
      name: "OpInCo",
      img: opinco,
      insta: opinco_insta,
      twitter: opinco_twitter,
    },
  ];

  return (
    // <div className="entire">
    <section
      id="Organisers"
      className="organizers-container  bg-primary pt-8 pb-4 relative flex flex-col items-center overflow-hidden w-100 m-auto "
    >
      <h1 className="organize-text text-center text-2xl pt-2">ORGANISERS</h1>
      {/* <img src={hole2} alt="" className="img1 hole"/> */}
      <img src={greenmonster} alt="" className="img1 greenmonster" />
      {/* <img src={track2} alt="" className="img1 track"/> */}
      {/* <img src={column} alt="" className="img1 column"/> */}
      <img src={sidestairs2} alt="" className="img1 sidestairs2" />
      <img src={staircubes} alt="" className="img1 staircubes" />
      <img src={sidestairs} alt="" className="img1 sidestairs" />
      {/* <div className="organ-container"> */}

      <div className="card-section flex flex-wrap items-center justify-center p-4 pt-8 md:p-4 relative z-10">
        {organizers.map(({ id, name, img, insta, twitter }) => (
          <div className="card max-w-xs md:w-7/12	 m-8 shadow-lg" key={id}>
            <img src={img} alt="GDSC" className="img bg-white w-full" />
            <div className="card-text grid grid-rows grid-cols-2 items-center bg-black text-white p-4 md:p-2">
              <div className="text w-100 justify-self-start">
                <p className="organize-text-p font-tertiary opacity-70 text-base/[1.2rem] md:text-xs">
                  Organiser
                </p>
                <p className="org text-xl text-lg/[1.5rem] md:text-sm font-tertiary font-semibold">
                  {name}
                </p>
              </div>
              <div className="socials-buttons w-100 h-8 flex items-center justify-end">
                <button
                  className="insta mr-2.5 w-1/5 flex items-center justify-center relative h-full"
                  onClick={insta}
                >
                  <FaInstagram size="1.5rem" className="absolute text-dark" />
                </button>
                <button
                  className="twitter w-1/5 flex items-center justify-center relative h-full"
                  onClick={twitter}
                >
                  <FontAwesomeIcon
                    icon={faXTwitter}
                    size="xl"
                    className="absolute text-dark"
                  />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
    // </div>
  );
};
