import React from "react";
import "./Sponsors.css";
import booststairs1 from "../../assets/booststairs1.png";
import booststairs2 from "../../assets/booststairs2.png";
import Vector4 from "../../assets/Vector4.png";
import employment1 from "../../assets/employment1.png";
import talk1 from "../../assets/talk1.png";

const sponsorPoints = [
  {
    id: 1,
    header: "PROMOTION",
    body: "Sponsors will receive comprehensive promotion through all of our social media channels and during off-site events",
    imgSrc: Vector4,
  },
  {
    id: 2,
    header: "TALENT POOL",
    body: "Sponsoring Cyberthon provides a unique opportunity for companies to access a diverse pool of talented individuals for employment considerations.",
    imgSrc: employment1,
  },
  {
    id: 3,
    header: "BRAND AWARENESS",
    body: "Being part of Cyberthon will give valuable exposure and help a brand reach a large, engaged audience.",
    imgSrc: talk1,
  },
];

export const Sponsors = () => {
  function sponsor_us() {
    window.open("https://forms.gle/xzP1vVgXWMBpSdHF9");
  }
  return (
    <section
      id="Sponsors"
      className="prize relative bg-black overflow-hidden flex flex-col items-center pt-4"
    >
      <div className="relative w-100 h-100 p-8 pb-12">
        <h1 className="sponsors font-Hanson font-bold pb-12 text-white text-2xl md:text-lg text-center uppercase tracking-wider">
          {" "}
          WHY SPONSORS US ??
        </h1>
        <div className="grid grid-cols-3 md:grid-cols-1 gap-12 md:gap-12">
          {sponsorPoints.map((point) => (
            <div
              key={point.id}
              className="service  text-center text-4xl pt-8 pb-20 px-4 md:py-0 md:px-4 bg-transparent rounded-md"
            >
              <img
                src={point.imgSrc}
                alt=""
                className="fas fa-laptop-code mx-auto text-white mb-2.5"
              />
              <h2 className="font-primary text-xl md:text-base mb-2 text-white">
                {point.header}
              </h2>
              <p className="font-tertiary text-white text-base md:text-base mb-1">
                {point.body}
              </p>
            </div>
          ))}
        </div>
        <div className="buttons grid gap-4 justify-center content-center grid-cols-2 md:grid-cols-1 md:pt-12	">
          <a
            href="https://drive.google.com/file/d/1P8JrTJdUtfHKhXhcJ6ont4aWjQ6Lpg5P/view?usp=drivesdk"
            target="_blank"
            rel="noreferrer"
            className="justify-self-end md:justify-self-center"
          >
            <button className="brochure text-dark font-primary w-48">
              BROCHURE
            </button>
          </a>
          <button
            className="sponsor-us justify-self-start md:justify-self-center text-dark font-primary bg-primary w-48"
            onClick={sponsor_us}
          >
            {"  "}
            SPONSOR US
          </button>
        </div>
      </div>

      {/* <img className="boost-stairs-2" src={booststairs2} alt="boost-stairs-2" /> */}
      {/* <img className="boost-stairs-1" src={booststairs1} alt="boost-stairs-1" /> */}
    </section>
  );
};
