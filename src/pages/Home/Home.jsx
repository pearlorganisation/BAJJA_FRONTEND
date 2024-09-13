import { CiDeliveryTruck } from "react-icons/ci";
import { CiTrophy } from "react-icons/ci";
import { MdOutlinePayment } from "react-icons/md";
import { BiSupport } from "react-icons/bi";
import LastViewed from "./LastViewed";

const Home = () => {
  return (
    <>
      <div>
        <div className="grid md:grid-cols-[60%_auto]  container mx-auto">
          <div>
            <img src="banner.jpg" />
          </div>

          <div>
            <div>
              <img src="banner2.jpg" />
            </div>
            <div>
              <img src="banner3.jpg" />
            </div>
          </div>
        </div>

        <div>
          <div className="max-w-screen-xl mx-auto my-8 p-4 border rounded-lg">
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
        </div>
      </div>
      <LastViewed />
    </>
  );
};

export default Home;
