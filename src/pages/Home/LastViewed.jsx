import React, { useState } from "react";

import Carts from "./Carts";
import { Link } from "react-router-dom";

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
        <div className="flex items-center justify-between" data-aos="fade-up"
          data-aos-duration="1000">
          <div className="md:flex flex-wrap md:space-x-5 py-8 items-center">
            <h2 className="md:text-2xl font-bold">Best Deals</h2>
            <div className="md:space-x-2 md:px-5 py-1 md:flex items-center flex-wrap">
              <p className="text-xs">Deals ends in</p>
              <div className='md:text-lg text-xs bg-yellow-200 sm:mt-1'>
                <span>{time.days}d</span>
                <span>:</span>
                <span>{time.hours}h</span>
                <span>:</span>
                <span>{time.minutes}m</span>
                <span>:</span>
                <span>{time.secounds}s</span>
              </div>
            </div>
          </div>
          <div>
            <Link to="/product" className="flex md:gap-5 gap-0 items-center text-blue-500 md:text-lg text-xs font-bold border-b-2 border-transparent hover:border-blue-500 transition-all duration-300">
              <span className='w-fit'>Browse All Product</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8" />
              </svg>
            </Link>
          </div>
        </div>
        <div className="max-w-8xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden grid md:grid-cols-4 xl:space-x-8 space-x-0 space-y-5 md:space-y-0">
          {data.map((el, id) => (
            <Carts el={el} />
          ))}
        </div>
      </div>
    </>
  );
};

export default LastViewed;
