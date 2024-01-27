import React, { useState, useEffect } from "react";

const CountdownTimer = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    // Clear timeout if the component is unmounted
    return () => clearTimeout(timer);
  });

  return (
    <div className="flex space-x-4 bg-black text-white p-5 rounded-md bg-transparent">
      {Object.keys(timeLeft).map((interval) => (
        <div
          className="flex flex-col items-center w-[100px] sm:w-[auto]"
          key={interval}
        >
          <span className="text-2xl font-semibold p-2 bg-primary text-black mb-4 mt-4 rounded">
            {timeLeft[interval].toString().padStart(2, "0")}
          </span>
          <span className="sm:text-xss">{interval.toUpperCase()}</span>
        </div>
      ))}
    </div>
  );
};

export default CountdownTimer;
