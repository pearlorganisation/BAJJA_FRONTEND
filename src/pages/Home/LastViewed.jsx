import React, { useState } from "react";

import Carts from "./Carts";

const LastViewed = () => {

  const data = [
    {
      id: 0,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLjCdddtP4rgcfL8flLr-UqDpUCKcV_C_MJA&s",
      title:
        "  Xbox Series S - 512GB SSD Console with Wireless Controller - EUVersion",
      description:
        " Games built using the Xbox Series X|S development kit showcase unparalleled load times, visuals.",
      firstPrice: "800",
      DiscountedPrice: "400",
      rating: 4.5
    },
    {
      id: 1,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLjCdddtP4rgcfL8flLr-UqDpUCKcV_C_MJA&s",
      title:
        "  Xbox Series S - 512GB SSD Console with Wireless Controller - EUVersion",
      description:
        " Games built using the Xbox Series X|S development kit showcase unparalleled load times, visuals.",
      firstPrice: "800",
      DiscountedPrice: "400",
      rating: 5
    },
    {
      id: 2,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLjCdddtP4rgcfL8flLr-UqDpUCKcV_C_MJA&s",
      title:
        "  Xbox Series S - 512GB SSD Console with Wireless Controller - EUVersion",
      description:
        " Games built using the Xbox Series X|S development kit showcase unparalleled load times, visuals.",
      firstPrice: "800",
      DiscountedPrice: "400",
      rating: 3.5
    },
    {
      id: 3,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLjCdddtP4rgcfL8flLr-UqDpUCKcV_C_MJA&s",
      title:
        "  Xbox Series S - 512GB SSD Console with Wireless Controller - EUVersion",
      description:
        " Games built using the Xbox Series X|S development kit showcase unparalleled load times, visuals.",
      firstPrice: "800",
      DiscountedPrice: "400",
      rating: 4
    },
  ];

  const [time, setTime] = useState({
    days: 16,
    hours: 21,
    minutes: 57,
    secounds: 23
  })
  

  // useEffect(() => {
  //   let timer = setInterval(() => {
  //     setTime(prevTime => {
  //       const { days, hours, minutes, seconds } = prevTime;

  //       // Calculate new seconds, minutes, hours, and days
  //       const newSeconds = seconds > 0 ? seconds - 1 : 59;
  //       const newMinutes = seconds === 0 ? (minutes > 0 ? minutes - 1 : 59) : minutes;
  //       const newHours = minutes === 0 && seconds === 0 ? (hours > 0 ? hours - 1 : 23) : hours;
  //       const newDays = hours === 0 && minutes === 0 && seconds === 0 ? (days > 0 ? days - 1 : days) : days;

  //       return { days: newDays, hours: newHours, minutes: newMinutes, seconds: newSeconds };
  //     });
  //   }, 1000); 
  //   return () => clearInterval(timer)

  // }, [])
  return (
    <>
      <div className="m-10">
        <div className="flex space-x-5 py-8 items-center">
          <h2 className="text-2xl font-bold">Best Deals</h2>
          <p className="text-xs">Deals ends in</p>
          <div className="space-x-2 bg-yellow-200 px-5 py-1">
            <span>{time.days}d</span>
            <span>:</span>
            <span>{time.hours}h</span>
            <span>:</span>
            <span>{time.minutes}m</span>
            <span>:</span>
            <span>{time.secounds}s</span>
          </div>
        </div>
        <div className="max-w-8xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden grid md:grid-cols-4 space-x-8">
          {data.map((el, id) => (
            <Carts el={el} />
          ))}
        </div>
      </div>
    </>
  );
};

export default LastViewed;
