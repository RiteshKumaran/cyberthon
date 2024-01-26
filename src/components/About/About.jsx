import React from "react";
import "../About/About.css";
import CardBackground from "../../assets/about/background-about.png";
import Discussion from "../../assets/about/about-discussion.png";
import Product from "../../assets/about/about-product.png";
import Community from "../../assets/about/about-community.png";
import Pillar from "../../assets/pillar.png";
import Pillarmed from "../../assets/pillar-medium.png";
import Pillarsmall from "../../assets/pillar-small.png";
import Pillarlarge from "../../assets/pillar-large.png";

export const About = () => {
  const hackDetails = [
    {
      title: "300+",
      description: "Attendees",
    },
    {
      title: "36 Hours",
      description: "OF NONSTOP HACKING ",
    },
    {
      title: "₹1,00,000+",
      description: "worth of prizes",
    },
  ];

  const aboutInfo = [
    {
      id: 0,
      logo: Product,
      title: "CG’s Tech Revolution",
      description: "The very first MLH 36-hour hackathon of State",
    },
    {
      id: 1,
      logo: Community,
      title: "Hack the Present, Change the Future",
      description: "Theme: A battle through time!",
    },
    {
      id: 2,
      logo: Product,
      title: "Pre-Hack sessions & Mentorship",
      description:
        "Upskill through pre-hack sessions, workshops to polish your project",
    },
  ];

  const aboutInfoStyle = {
    backgroundImage: `url(${CardBackground})`,
  };

  return (
    <section
      id="About"
      className="about-section relative w-full min-h-full md:min-h-[50%] mt-29 md:mt-0 mb-15 md:mb-12 overflow-hidden z-1 flex flex-col items-center justify-center"
    >
      {/* <img className="col3 absolute w-60.313 h-36.096 -left" src={Pillarmed} />
      <img className="col2 absolute" src={Pillarsmall} />
      <img className="col1 absolute" src={Pillarmed} />
      <img className="col8 absolute" src={Pillar} />
      <img className="col6 absolute" src={Pillar} />
      <img className="col4 absolute" src={Pillarmed} />
      <img className="col absolute" src={Pillar} /> */}
      {/* <div className="about-content w-100 p-4">
        <h1 className="about relative font-Hanson font-bold flex justify-center items-center text-center text-black uppercase tracking-wider pt-3 text-2xl">
          About Us
        </h1>
        <p className="para text-xs font-secondary font-medium leading-8 pb-8 flex tracking-wider text-black text-center px-16 pt-6">
          Whether you're a seasoned developer or just starting out, OpInHacks is
          the perfect platform to challenge yourself, develop new skills, and
          network with like-minded individuals. OpInHacks will be a thrilling
          and dynamic OFFLINE hackathon event designed to bring together coders
          from all backgrounds and levels of expertise. With a focus on
          fostering a competitive and inclusive environment, this 36-hour
          hackathon will feature multiple tracks, including both tech and
          non-tech, to cater to a diverse range of interests. With an emphasis
          on learning and growth, OpInHacks is not just about winning, but about
          the journey of becoming a better developer.
        </p>
      </div> */}

      <h1 className="mt-20 mb-12 md:mt-8 md:mb-6 font-karrera text-primary text-center tracking-widest text-5xl md:text-3xl pb-10 md:py-6">
        ABOUT US
      </h1>
      <div className="main-about w-[90%] grid grid-cols-2 md:gap-12 md:grid-cols-1 items-center">
        <div className="about-body mx-auto">
          <p className="question mb-4 text-4xl text-white font-Satoshi">
            Cyberthon - What’s the deal?
          </p>
          <p className="answer text-lg  font-secondary text-white opacity-60">
            Embark on a journey into the heart of cybersecurity excellence with
            Cyberthon, a flagship event of the Cyber Carnival’24. This
            high-octane hackathon beckons participants to unravel intricate
            challenges, simulate real-world cyber threats.
          </p>
        </div>
      </div>
    </section>
  );
};
