import React from "react";
import { RxEyeOpen } from "react-icons/rx";

import { CiHeart } from "react-icons/ci";

const LastViewed = () => {
  const data = [
    {
      img: "https://s3-alpha-sig.figma.com/img/a81e/e337/d4864b5bf82a65669ff6c6b965655324?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lOZP5jTjpkc5sbIkiV6zedEr8TwrauL3FjNT5V8ak3JWMaW5KvnYOtrRnk2LapksRsLQS06AvKxmXKfZcjahh2FAsRxUqwK0l6Sa1QAhoCVDAwxtxZg2aJvnrCCk4B35kwrbwWTykYdQCouRhdCqElNQ9oZNDLXOSmYZcHWPlyVl5AUK7pTaNEWT~GtLukoF6ANjHqOxc8yuTQIH-69l0aTjDddvzEBQpRJCmQMKE2-J3HBi-nlJUvWWkro9GyS4TVUTiyviv-By-YyujaF7PW5wYiODkqf-Szb-n8JGJXdOPXDK282YvWFoXrQ3B8XtaongVksCsunkYPBqPkGlOA__",
      title:
        "  Xbox Series S - 512GB SSD Console with Wireless Controller - EUVersion",
      description:
        " Games built using the Xbox Series X|S development kit showcase unparalleled load times, visuals.",
      firstPrice: "800",
      DiscountedPrice: "400",
    },
    {
      img: "https://s3-alpha-sig.figma.com/img/a81e/e337/d4864b5bf82a65669ff6c6b965655324?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lOZP5jTjpkc5sbIkiV6zedEr8TwrauL3FjNT5V8ak3JWMaW5KvnYOtrRnk2LapksRsLQS06AvKxmXKfZcjahh2FAsRxUqwK0l6Sa1QAhoCVDAwxtxZg2aJvnrCCk4B35kwrbwWTykYdQCouRhdCqElNQ9oZNDLXOSmYZcHWPlyVl5AUK7pTaNEWT~GtLukoF6ANjHqOxc8yuTQIH-69l0aTjDddvzEBQpRJCmQMKE2-J3HBi-nlJUvWWkro9GyS4TVUTiyviv-By-YyujaF7PW5wYiODkqf-Szb-n8JGJXdOPXDK282YvWFoXrQ3B8XtaongVksCsunkYPBqPkGlOA__",
      title:
        "  Xbox Series S - 512GB SSD Console with Wireless Controller - EUVersion",
      description:
        " Games built using the Xbox Series X|S development kit showcase unparalleled load times, visuals.",
      firstPrice: "800",
      DiscountedPrice: "400",
    },
    {
      img: "https://s3-alpha-sig.figma.com/img/a81e/e337/d4864b5bf82a65669ff6c6b965655324?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lOZP5jTjpkc5sbIkiV6zedEr8TwrauL3FjNT5V8ak3JWMaW5KvnYOtrRnk2LapksRsLQS06AvKxmXKfZcjahh2FAsRxUqwK0l6Sa1QAhoCVDAwxtxZg2aJvnrCCk4B35kwrbwWTykYdQCouRhdCqElNQ9oZNDLXOSmYZcHWPlyVl5AUK7pTaNEWT~GtLukoF6ANjHqOxc8yuTQIH-69l0aTjDddvzEBQpRJCmQMKE2-J3HBi-nlJUvWWkro9GyS4TVUTiyviv-By-YyujaF7PW5wYiODkqf-Szb-n8JGJXdOPXDK282YvWFoXrQ3B8XtaongVksCsunkYPBqPkGlOA__",
      title:
        "  Xbox Series S - 512GB SSD Console with Wireless Controller - EUVersion",
      description:
        " Games built using the Xbox Series X|S development kit showcase unparalleled load times, visuals.",
      firstPrice: "800",
      DiscountedPrice: "400",
    },
    {
      img: "https://s3-alpha-sig.figma.com/img/a81e/e337/d4864b5bf82a65669ff6c6b965655324?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lOZP5jTjpkc5sbIkiV6zedEr8TwrauL3FjNT5V8ak3JWMaW5KvnYOtrRnk2LapksRsLQS06AvKxmXKfZcjahh2FAsRxUqwK0l6Sa1QAhoCVDAwxtxZg2aJvnrCCk4B35kwrbwWTykYdQCouRhdCqElNQ9oZNDLXOSmYZcHWPlyVl5AUK7pTaNEWT~GtLukoF6ANjHqOxc8yuTQIH-69l0aTjDddvzEBQpRJCmQMKE2-J3HBi-nlJUvWWkro9GyS4TVUTiyviv-By-YyujaF7PW5wYiODkqf-Szb-n8JGJXdOPXDK282YvWFoXrQ3B8XtaongVksCsunkYPBqPkGlOA__",
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
      <div className="">
        <div class="max-w-8xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden grid md:grid-cols-4">
          {data.map((el, id) => (
            <div class="">
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
