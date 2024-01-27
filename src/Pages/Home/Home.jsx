import React, { useEffect } from "react";
import { About } from "../../components/About/About";
import { Hero } from "../../components/Hero/Hero";
import Navbar from "../../components/Navbar/Navbar";
import "../Home/Home.css";
import Footernew from "../../components/Footer/Footer";
import { Sponsors } from "../../components/Sponsors/Sponsors";
import { Faq } from "../../components/Faq/Faq";
import { Organizers } from "../../components/Organizers/Organizers";
import SponsorsList from "../../components/SponsorsList/SponsorsList";
import Themes from "../../components/Themes/Themes";
import mlhBadge from "../../assets/mlh-badge.png";
import AboutInfo from "../../components/AboutInfo/AboutInfo";

import JoinUs from "../../components/JoinUs/JoinUs";
import Timeline from "../../components/Timeline/timeline";
import CountdownTimer from "../../components/Countdown/Countdown";
import Schedule from "../../components/Schedule/Schedule";
export const Home = () => {
  const handleScroll = () => {
    const homepage = document.getElementById("Homepage");
    const navbar = document.getElementById("Navbar");

    if (homepage.scrollTop >= 80) {
      navbar.classList.add("active");
    } else {
      navbar.classList.remove("active");
    }
  };

  const events = [
    { date: "5%", day: "DAY 1", time: "08:30 AM", activity: "Inaugration" },
    { date: "15%", day: "DAY 1", time: "10:00 AM", activity: "Start" },
    { date: "25%", day: "DAY 2", time: "01:00 PM", activity: "Judging-1" },
    { date: "35%", day: "DAY 2", time: "03:30 PM", activity: "Judging-2" },
    { date: "45%", day: "DAY 2", time: "06:00 PM", activity: "Closing" },
  ];

  return (
    <div id="Homepage" className="homepage-container" onScroll={handleScroll}>
      <Navbar />
      <Hero />

      <About />

      <AboutInfo />

      <Themes />

      <Schedule />
      <Timeline events={events} />
      {/* <Organizers /> */}
      {/* <SponsorsList /> */}
      {/* <Sponsors /> */}
      <Faq />

      <JoinUs />
      <Footernew />
    </div>
  );
};
