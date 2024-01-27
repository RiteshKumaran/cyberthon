import React, { useState } from "react";
import "../Faq/Faq.css";
import Faqbg from "../../assets/FAQbackground.png";
import FAQ from "../../assets/faq.png";

// import spaceLines from "../../assets/space-lines.png";
// import { Faq } from "../../components/Faq/Faq.json";

export const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const faqData = [
    {
      question: "What is Hackathon?",
      reply:
        "A hackathon is a dynamic, time-limited event that brings together minds to swiftly cultivate innovation, often in the realm of technology. It serves as a breeding ground for solutions and ideas to flourish.",
    },
    {
      question: "Who can participate?? ",
      reply:
        "Cyberthon extends its open arms to everyone, providing you with the chance to embrace the role of an eager coder who is dedicated to the journey of learning, evolving, and thriving together.",
    },
    {
      question:
        "Can we bring our own team or do we have to form a team at the event?",
      reply:
        "Participants can either bring their own team or form a team at the event. The team size should consist of 1 to 4 individuals.",
    },
    {
      question: "Is there any registration fee?",
      reply: "Yes. The registration fee is 749/-",
    },
    {
      question: "What should you bring with you for the hackathon?",
      reply:
        "You'll need a laptop along with the essential charging gear, any required software or hardware tools for your project, and a willingness to engage in collaborative efforts with a positive mindset.",
    },
    {
      question: "Have a question aside from these?",
      reply: "Reach out to us at : ",
      links: " hello@cybercarnival.in",
    },
  ];

  const faqTab = (question, reply, links, index) => {
    const isActive = index === activeIndex;
    const activeClass = isActive ? "border border-primary" : "";

    return (
      <>
        <div
          className={`faq-tab group relative bg-[#0D1714] font-secondary p-3 text-light rounded-lg shadow-lg flex flex-col justify-center ${activeClass}`}
        >
          <input
            className="faq-input peer/input appearance-none"
            type="checkbox"
            name="faq"
            id={`id${index}`}
            onChange={() => {
              handleClick(index);
            }}
            // onChange={(e) => {
            //   setInputCheck(e.target);
            // }}
            // onClick={handleCross}
          />
          <label
            htmlFor={`id${index}`}
            className="cursor-pointer inline-flex flex-row flex-nowrap items-center justify-between transition-opacity duration-300 
            after:content-['+'] after:ml-auto after:h-6 after:w-6 after:text-grey after:flex after:items-center after:justify-center after:text-3xl after:opacity-30
            after:transition-transform
            after:duration-200
            group-hover:after:opacity-100
            peer-checked/input:after:rotate-[135deg]
            "
          >
            <h2 className="font-normal font-secondary text-base text-light  pr-2 md:text-[10px]/3 md:p-0">
              {question}
            </h2>
          </label>
          <div className="faq-content max-h-0 overflow-hidden ease-in-out duration-200 peer-checked/input:max-h-screen">
            <h5 className="text-[0.85rem] font-secondary font-normal pt-2 w-[80%] opacity-70 md:text-[0.5rem]">
              {reply}
            </h5>
            {links ? (
              <a
                href={links.includes("@gmail.com") ? `mailto:${links}` : links}
                target="_blank"
                rel="noreferrer"
                className="faq-links text-[blue] pt-0 text-xs font-bold"
              >
                {links.includes("@gmail.com")
                  ? links
                  : links.replace("mailto:", "")}
              </a>
            ) : (
              " "
            )}
          </div>
        </div>
      </>
    );
  };
  // const [inputCheck, setInputCheck] = useState();
  // const handleCross = () => {
  //   const checkedInput = document.querySelector('input[name="faq"]:checked');

  //     if (inputCheck && inputCheck.checked === checkedInput.checked) {

  //       document.querySelector('input[name="faq"]:checked').checked = false;
  //       console.log("running");

  //     }
  // };

  return (
    <section
      id="Faq"
      className="faq-section relative flex flex-col items-center  p-8 md:p-0  overflow-hidden"
    >
      {/* <img
        className="space-lines space-line-footer scale-125 "
        src={spaceLines}
        alt=""
      /> */}
      {/* <h1 className="text-2xl text-center pt-8 text-white">FAQ's</h1> */}
      <img src={Faqbg} alt="" className=" absolute z-[-1]" />
      <div className="faqs-container  flex flex-row flex-1  z-1 m-0 max-w-7xl p-8 ">
        {/* <div className="faq-tab">
          <input
            className="faq-input"
            type="checkbox"
            name="faq"
            id="id1"
            // onChange={(e) => {
            //   setInputCheck(e.target);
            // }}
            // onClick={handleCross}
          />
          <label htmlFor="id1">
            <h2>Is pizza legal ?</h2>
          </label>
          <div className="faq-content">
            <h5>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias
              minima est exercitationem recusandae odit reiciendis pariatur
              ducimus ipsum, veritatis deleniti.
            </h5>
          </div>
        </div> */}
        {/* {faqTab(1)}
        {faqTab(2)}
        {faqTab(3)}
        {faqTab(4)}
        {faqTab(5)}
        {faqTab(6)}
        {faqTab(7)}
        {faqTab(8)}
        {faqTab(9)}
        {faqTab(10)} */}
        <div className="flex flex-col  gap-3 md:items-center ">
          <div className="text-light text-5xl md:text-4xl font-Satoshi tracking-wide font-bold mb-5 w-full some">
            Some of the frequently <br /> asked questions
          </div>
          <div className="w-[70%] md:w-[100%] max-h-[60vh] overflow-y-scroll custom-scrollbar grid gap-4 ">
            <div className="grid gap-4">
              {faqData.map((data, index) => {
                return faqTab(data.question, data.reply, data.links, index);
              })}
            </div>
          </div>
        </div>
        <div className="md:hidden h-fit">
          <img src={FAQ} alt="" />
        </div>
      </div>
    </section>
  );
};
