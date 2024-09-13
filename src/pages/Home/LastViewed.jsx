import React from "react";
import { RxEyeOpen } from "react-icons/rx";

import { CiHeart } from "react-icons/ci";

const LastViewed = () => {
  const data = [
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLjCdddtP4rgcfL8flLr-UqDpUCKcV_C_MJA&s",
      title:
        "  Xbox Series S - 512GB SSD Console with Wireless Controller - EUVersion",
      description:
        " Games built using the Xbox Series X|S development kit showcase unparalleled load times, visuals.",
      firstPrice: "800",
      DiscountedPrice: "400",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLjCdddtP4rgcfL8flLr-UqDpUCKcV_C_MJA&s",
      title:
        "  Xbox Series S - 512GB SSD Console with Wireless Controller - EUVersion",
      description:
        " Games built using the Xbox Series X|S development kit showcase unparalleled load times, visuals.",
      firstPrice: "800",
      DiscountedPrice: "400",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLjCdddtP4rgcfL8flLr-UqDpUCKcV_C_MJA&s",
      title:
        "  Xbox Series S - 512GB SSD Console with Wireless Controller - EUVersion",
      description:
        " Games built using the Xbox Series X|S development kit showcase unparalleled load times, visuals.",
      firstPrice: "800",
      DiscountedPrice: "400",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLjCdddtP4rgcfL8flLr-UqDpUCKcV_C_MJA&s",
      title:
        "  Xbox Series S - 512GB SSD Console with Wireless Controller - EUVersion",
      description:
        " Games built using the Xbox Series X|S development kit showcase unparalleled load times, visuals.",
      firstPrice: "800",
      DiscountedPrice: "400",
    },
  ];
  return (
    <>
      <div className="m-10">
        <div class="max-w-8xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden grid md:grid-cols-4 space-x-8">
          {data.map((el, id) => (
            <div class="bg-gray-100 rounded-xl">
              <img
                class="w-full h-48 object-contain"
                src={el.img}
                alt="Placeholder Image"
              />

              <div class="p-4">
                <div class="flex items-center">
                  <span class="text-yellow-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      class="w-5 h-5 inline"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M12 4.5v15m7.5-7.5h-15"
                      />
                    </svg>
                  </span>
                  <span class="text-yellow-500 ml-1 text-sm">4.5</span>
                  <span class="ml-2 text-gray-600 text-sm">(52,677)</span>
                </div>
                <h2 class="text-gray-900 text-lg font-bold mt-2">{el.title}</h2>
                <p class="text-gray-600 mt-2 text-sm">{el.description}</p>
                <div class="mt-4 flex items-center">
                  <span class="text-gray-400 line-through">
                    ${el.firstPrice}
                  </span>
                  <span class="text-blue-500 text-xl font-bold ml-2">
                    ${el.DiscountedPrice}
                  </span>
                </div>

                <div className="flex  justify-around items-center ">
                  <div className="">
                    <CiHeart size={30} />
                  </div>
                  <div>
                    {" "}
                    <button class=" w-full bg-orange-500 text-white font-semibold py-2 px-12 rounded hover:bg-orange-600">
                      ADD TO CART
                    </button>
                  </div>
                  <div className="">
                    <RxEyeOpen size={30} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default LastViewed;
