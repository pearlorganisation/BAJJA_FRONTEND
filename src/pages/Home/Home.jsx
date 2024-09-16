import { CiDeliveryTruck } from "react-icons/ci";
import { CiTrophy } from "react-icons/ci";
import { MdOutlinePayment } from "react-icons/md";
import { BiSupport } from "react-icons/bi";
import LastViewed from "./LastViewed";
import { useEffect, useState } from "react";
import RegisterUserCarts from "./RegisterUserCarts/RegisterUserCarts";
import ProductCategorySection from "../../components/ProductCategorySection/ProductCategorySection";
import LastCardsHome from "./LastCardsHome/LastCardsHome";

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
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
      <div className="md:flex lg:flex">
        {/* Carousel Section */}
        <div className="relative md:w-[70%] lg:w-[70%] w-full overflow-hidden">
          <div
            className="flex transition-transform duration-1000 bg-gray-400"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {images.map((image, index) => (
              <div className="w-full lg:h-[32rem] md:h-[28rem] flex-shrink-0" key={index}>
                <img src={image} alt={`Slide ${index}`} className="w-full h-full" />
              </div>
            ))}
          </div>

          <div className="absolute lg:bottom-20 bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {images.map((_, index) => (
              <span
                key={index}
                className={`w-3 h-3 rounded-full cursor-pointer ${index === currentIndex ? 'bg-gray-700' : 'bg-gray-300'}`}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>
        </div>

        {/* Static Images Section */}
        <div className="md:w-1/2 lg:w-1/2 w-full flex flex-col justify-between p-4 h-1/2">
          <div className="flex-1 mb-4">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQch0cfJLDLv63ba-nZq1ugxaiLUovhKCjK1w&s" alt="Static Image 1" className="w-full lg:h-60 md:h-48 h-80" />
          </div>
          <div className="flex-1">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhwQ94aiPif4XtrdhPtfvFfP90l0bjZV1cTw&s" alt="Static Image 2" className="w-full lg:h-60 md:h-48 h-80" />
          </div>
        </div>
      </div>

      <div className="my-8 mx-20 p-4 border rounded-lg">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-gray-100 rounded-full">
              <CiDeliveryTruck />
            </div>
            <div className="text-center md:text-left">
              <p className="text-sm font-semibold">FAST DELIVERY</p>
            </div>
          </div>

          <div className="hidden md:block w-px h-12 bg-gray-200"></div>

          <div className="flex items-center space-x-4">
            <div className="p-3 bg-gray-100 rounded-full">
              <CiTrophy />
            </div>
            <div className="text-center md:text-left">
              <p className="text-sm font-semibold">TRUSTED DEALERS</p>
            </div>
          </div>

          <div className="hidden md:block w-px h-12 bg-gray-200"></div>

          <div className="flex items-center space-x-4">
            <div className="p-3 bg-gray-100 rounded-full">
              <MdOutlinePayment />
            </div>
            <div className="text-center md:text-left">
              <p className="text-sm font-semibold">SECURE PAYMENT</p>
              <p className="text-xs text-gray-500">Your money is safe</p>
            </div>
          </div>

          <div className="hidden md:block w-px h-12 bg-gray-200"></div>

          <div className="flex items-center space-x-4">
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
      {/** if user not regiser then call this lastviewed component */}

      {/* <LastViewed /> */}
      
      <RegisterUserCarts />
      <div className="mt-10">
        <h1 className='text-center font-bold text-3xl text-gray-700'>Shop By Category</h1>
        <ProductCategorySection showItem={5} swiperWidth={90} margin={"auto"} />
        <ProductCategorySection showItem={5} swiperWidth={90} margin={"auto"} />
        <div className="ml-20">
          <ProductCategorySection showItem={3} swiperWidth={50} margin={0} />
        </div>
        <LastCardsHome/>
      </div>
            
    </>
  );
};

export default Home;
