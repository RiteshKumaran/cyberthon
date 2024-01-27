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
import JoinUs from "../../components/JoinUs/JoinUs";
import Timeline from "../../components/Timeline/timeline";
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
  { date: '15%', day: 'DAY 1', time: '09:00 AM', activity: 'Event 1' },
  { date: '25%', day: 'DAY 1', time: '10:30 AM', activity: 'Event 2' },
  { date: '35%', day: 'DAY 2', time: '01:00 PM', activity: 'Event 3' },
  { date: '45%', day: 'DAY 2', time: '03:30 PM', activity: 'Event 4' },
  { date: '55%', day: 'DAY 3', time: '06:00 PM', activity: 'Event 5' },
  { date: '65%', day: 'DAY 3', time: '09:30 AM', activity: 'Event 6' },
  { date: '75%', day: 'DAY 4', time: '12:00 PM', activity: 'Event 7' },
  ];

  return (
    <div id="Homepage" className="homepage-container" onScroll={handleScroll}>
      <Navbar />
      <Hero />
      <About />
      <Themes />
      <Timeline events={events} />
      {/* <Organizers /> */}
      <SponsorsList />
      <Sponsors />
      <Faq />
      <JoinUs />  
      <Footernew />
    </div>
  );
};
