import React, { useState } from "react";

const tabsData = [
  { name: "PHASE 1", content: "Registrations" },
  { name: "PHASE 2", content: "Hackathon Starts" },
  { name: "PHASE 3", content: "Judging Round 1" },
  { name: "PHASE 4", content: "Judging Round 2" },
];

const Schedule = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const changeTab = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="w-full" id="Schedule">
      <h1 className="mt-20 mb-12 md:mt-8 md:mb-6 font-karrera text-primary text-center tracking-widest text-5xl md:text-3xl pb-10 md:py-6">
        SCHEDULE
      </h1>
      <div className="flex flex-wrap justify-center p-2">
        {tabsData.map((tab, index) => (
          <button
            key={tab.name}
            className={`px-4 py-2 text-sm font-medium rounded-md shadow-sm m-1 transition-all duration-200 ease-in-out transform hover:-translate-y-1 ${
              activeIndex === index
                ? "bg-primary text-black"
                : "text-primary bg-white hover:bg-green-100"
            }`}
            style={{ backgroundColor: activeIndex === index ? "#00D54B" : "" }}
            onClick={() => changeTab(index)}
          >
            {tab.name}
          </button>
        ))}
      </div>
      <div className="flex justify-center p-4 mt-4 bg-transparent rounded-lg shadow-inner">
        <div className="text-center">
          <div
            className={`text-lg font-semibold transition-all duration-500 ease-in-out transform text-primary`}
          >
            {tabsData[activeIndex].content}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
