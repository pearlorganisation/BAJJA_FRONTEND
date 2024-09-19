import { CiDeliveryTruck } from "react-icons/ci";
import { CiTrophy } from "react-icons/ci";
import { MdOutlinePayment } from "react-icons/md";
import { BiSupport } from "react-icons/bi";

import { useEffect, useState } from "react";
import LastViewed from "../Home/LastViewed";
import { useLocation, useParams } from "react-router";

const HomePage_Categories_Services_Goods = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { type } = useParams();
  const images = ['banner.jpg', 'banner2.jpg', 'banner3.jpg'];
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <>
      <div>
        {/* Crousal */}
        <div className="relative w-full overflow-hidden" data-aos="fade-up"
          data-aos-duration="500">
          <div
            className="flex transition-transform duration-500 "
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {images.map((image, index) => (
              <div className="w-full lg:h-96 h-72 flex-shrink-0" key={index}>
                <img src={image} alt={`Slide ${index}`} className="w-full h-full  " />
              </div>
            ))}
          </div>
          <div className="absolute bottom-10 left-1/2 transform-translate-x-1/2 flex space-x-2">
            {images.map((_, index) => (
              <span
                key={index}
                className={`w-3 h-3 rounded-full cursor-pointer ${index === currentIndex ? 'bg-gray-700' : 'bg-gray-300'}`}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>
        </div>


        <div>
          <div className="max-w-screen-xl md:mx-auto mx-10 my-8 p-4 border rounded-lg">
            <div className="flex flex-col md:flex-row justify-between space-y-6 md:space-y-0">
              <div className="flex items-center space-x-4" data-aos="fade-up"
                data-aos-duration="500">
                <div className="p-3 bg-gray-100 rounded-full">
                  <CiDeliveryTruck />
                </div>
                <div className="text-center md:text-left">
                  <p className="text-sm font-semibold">FAST DELIVERY</p>
                </div>
              </div>

              <div className="divider mt-5 md:hidden"></div>

              <div className="hidden md:block w-px h-12 bg-gray-200"></div>

              <div className="flex items-center space-x-4" data-aos="fade-up"
                data-aos-duration="500">
                <div className="p-3 bg-gray-100 rounded-full">
                  <CiTrophy />
                </div>
                <div className="text-center md:text-left">
                  <p className="text-sm font-semibold">TRUSTED DEALERS</p>
                </div>
              </div>

              <div className="divider mt-5 md:hidden"></div>

              <div className="hidden md:block w-px h-12 bg-gray-200"></div>

              <div className="flex items-center space-x-4" data-aos="fade-up"
                data-aos-duration="500">
                <div className="p-3 bg-gray-100 rounded-full">
                  <MdOutlinePayment />
                </div>
                <div className="text-center md:text-left">
                  <p className="text-sm font-semibold">SECURE PAYMENT</p>
                  <p className="text-xs text-gray-500">Your money is safe</p>
                </div>
              </div>

              <div className="divider mt-5 md:hidden"></div>

              <div className="hidden md:block w-px h-12 bg-gray-200"></div>

              <div className="flex items-center space-x-4" data-aos="fade-up"
                data-aos-duration="500">
                <div className="p-3 bg-gray-100 rounded-full">
                  <BiSupport />
                </div>
                <div className="text-center md:text-left">
                  <p className="text-sm font-semibold">SUPPORT 24/7</p>
                  <p className="text-xs text-gray-500">Live contact/message</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <LastViewed />
    </>
  );
}

export default HomePage_Categories_Services_Goods