import Call from "../../../assets/Call.png";
import Compare from "../../../assets/Compare.png";
import Support from "../../../assets/Support.png";
import Info from "../../../assets/Info.png";
import Location from "../../../assets/Location.png";
import { useState } from "react";
import { Services } from "../../../../JSON Data/Services/Services";
import { Professional_Services } from "../../../../JSON Data/Services/Sub_Services/Professional_Services";
import { Health_Wellness_Services } from "../../../../JSON Data/Services/Sub_Services/Health_Wellness_Services";
import { Educational_Services } from "../../../../JSON Data/Services/Sub_Services/Educational_Services";
import { Entertainment_Services } from "../../../../JSON Data/Services/Sub_Services/Entertainment_Services";
import { Automotive_Services } from "../../../../JSON Data/Services/Sub_Services/Automotive_Services";
import { Financial_Services } from "../../../../JSON Data/Services/Sub_Services/Financial_Services";
import { Real_Esate_Services } from "../../../../JSON Data/Services/Sub_Services/Real_Esate_Services";
import { Personal_Services } from "../../../../JSON Data/Services/Sub_Services/Personal_Services";
import { Travel_Hospitality_Services } from "../../../../JSON Data/Services/Sub_Services/Travel_Hospitality_Services";
import { Home_Services } from "../../../../JSON Data/Services/Sub_Services/Home_Services";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isCategory, setIsCategory] = useState(false);
  const [isServies, setIsServies] = useState(false);
  const [serviceName, setServiceName] = useState("");
  const [isSubServices, setIsSubServices] = useState([]);

  const toggleAllServicesDropdown = ()=>{
    setIsSubServices([]);
    setIsServies(false);
  }

  const toggleAllCategoryDropdown = () => {
    setIsCategory(!isCategory);
  };
  const handleServicesData = (title) => {
    setServiceName(title)
    switch (title) {
      case "Professional_Services":
        setIsSubServices(Professional_Services)
        break;
      case "Health_and_Wellness_Services":
        setIsSubServices(Health_Wellness_Services)
        break;
      case "Educational_Services":
        setIsSubServices(Educational_Services)
        break;
      case "Entertainment_Services":
        setIsSubServices(Entertainment_Services)
        break;
      case "Automotive_Services":
        setIsSubServices(Automotive_Services)
        break;
      case "Financial_Services":
        setIsSubServices(Financial_Services)
        break;
      case "Real_Esate_Services":
        setIsSubServices(Real_Esate_Services)
        break;
      case "Personal_Services":
        setIsSubServices(Personal_Services)
        break;
      case "Travel_Hospitality_Services":
        setIsSubServices(Travel_Hospitality_Services)
        break;
      case "Home_Services":
        setIsSubServices(Home_Services)
        break;
      default:
        setIsSubServices([]);
        break;
    }
  }

  return (
    <div className="m-2 mx-10 flex items-center justify-between">
      <div className="flex items-center justify-between space-x-8">
        <div>
          <div className="inline-flex"
            onMouseLeave={toggleAllCategoryDropdown}
          >
            <button
              id="hs-dropdown-with-dividers"
              type="button"
              className={`py-3 px-8 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-gray-200 ${isCategory ? 'bg-orange-500 text-white' : 'bg-white text-gray-800'} shadow-sm focus:outline-none focus:bg-orange-600 focus:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 tracking-wide`}
              aria-haspopup="menu"
              aria-expanded={isCategory}
              aria-label="Dropdown"
              // onClick={toggleAllCategoryDropdown}
              onMouseEnter={toggleAllCategoryDropdown}
            >
              All Category
              <svg
                className={`ml-2 transition-transform ${isCategory ? 'rotate-180' : ''}`}
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>

            <div
              className={`transition-[opacity,margin] duration-300 ${isCategory ? 'opacity-100' : 'opacity-0'} ${isCategory ? 'block' : 'hidden'} absolute z-10 min-w-60 bg-white shadow-md rounded-lg p-1 space-y-0.5 mt-14 divide-y divide-gray-200 dark:bg-neutral-800 dark:border dark:border-neutral-700 dark:divide-neutral-700`}
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="hs-dropdown-with-dividers"
            >
              <div className="py-2 first:pt-0 last:pb-0">
                <a
                  className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700"
                  href="#"
                >
                  Newsletter
                </a>
                <a
                  className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700"
                  href="#"
                >
                  Purchases
                </a>
                <a
                  className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700"
                  href="#"
                >
                  Downloads
                </a>
                <a
                  className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700"
                  href="#"
                >
                  Team Account
                </a>
              </div>
              <div className="py-2 first:pt-0 last:pb-0">
                <a
                  className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700"
                  href="#"
                >
                  Upgrade License
                </a>
              </div>
              <div className="py-2 first:pt-0 last:pb-0">
                <a
                  className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700"
                  href="#"
                >
                  Account Settings
                </a>
                <a
                  className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700"
                  href="#"
                >
                  Sign out
                </a>
              </div>
            </div>
          </div>
          <div className="hs-dropdown relative inline-flex ml-2"
            onMouseLeave={toggleAllServicesDropdown}
          >
            <button
              id="hs-dropdown-with-dividers"
              type="button"
              className={`py-3 px-8 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-gray-200 ${isServies ? 'bg-orange-500 text-white' : 'bg-white text-gray-800'} shadow-sm focus:outline-none focus:bg-orange-600 focus:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 tracking-wide`}
              aria-haspopup="menu"
              aria-expanded={isServies}
              aria-label="Dropdown"
              // onClick={toggleAllServiesDropdown}
              onMouseEnter={() => setIsServies(true)}

            >
              All Services
              <svg
                className={`ml-2 transition-transform ${isServies ? 'rotate-180' : ''}`}
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>

            <div
              className={`transition-[opacity,margin] duration-300 ${isServies ? 'opacity-100' : 'opacity-0'} ${isServies ? 'block' : 'hidden'} absolute z-10 min-w-64 bg-white shadow-md rounded-lg p-1 space-y-0.5 mt-12 divide-y divide-gray-200 dark:bg-neutral-800 dark:border dark:border-neutral-700 dark:divide-neutral-700`}
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="hs-dropdown-with-dividers"
            >
              <div className="py-2 first:pt-0 last:pb-0">
                {Services.map((item, index) => (
                  <Link 
                    className="flex items-center justify-between gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700"
                    key={index}
                    onMouseEnter={() => handleServicesData(item.title)}

                  ><span>
                      {item.name}
                    </span>
                    <svg fill="#000000" height="10px" width="10px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 330 330" xml:space="preserve"
                      // className={`${isSubServices.length > 0 ? 'opacity-100' : 'opacity-0'}`}
                    >
                      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                      <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                      <g id="SVGRepo_iconCarrier">
                        <path id="XMLID_222_" d="M250.606,154.389l-150-149.996c-5.857-5.858-15.355-5.858-21.213,0.001 c-5.857,5.858-5.857,15.355,0.001,21.213l139.393,139.39L79.393,304.394c-5.857,5.858-5.857,15.355,0.001,21.213 C82.322,328.536,86.161,330,90,330s7.678-1.464,10.607-4.394l149.999-150.004c2.814-2.813,4.394-6.628,4.394-10.606 C255,161.018,253.42,157.202,250.606,154.389z">
                        </path>
                      </g>
                    </svg>
                  </Link>
                ))}
              </div>
            
             {/* <div className="py-2 first:pt-0 last:pb-0">
                <a
                  className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700"
                  href="#"
                >
                  Account Settings
                </a>
                <a
                  className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700"
                  href="#"
                >
                  Sign out
                </a>
              </div> */}
            </div>
            <div
              className={`ml-64 transition-[opacity,margin] duration-300 ${isSubServices.length > 0 ? 'opacity-100' : 'opacity-0'} ${isSubServices.length > 0 ? 'block' : 'hidden'} absolute z-10 min-w-64 bg-white shadow-md rounded-lg p-1 space-y-0.5 mt-14 divide-y divide-gray-200 dark:bg-neutral-800 dark:border dark:border-neutral-700 dark:divide-neutral-700`}
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="hs-dropdown-with-dividers"
              // onMouseEnter={() => setIsAutomotive(true)}
              onMouseLeave={() => setIsSubServices([])}
            >
              <div className="py-2 first:pt-0 last:pb-0">
                {isSubServices.length > 0 && isSubServices.map((item, index) => (

                  <Link to={`/services/${serviceName.toLocaleLowerCase()}/${item.name.toLowerCase().split(" ").join('_')}`}
                    className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700"
                    href="#"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
         
            </div>

          </div>
        </div>
        <div className="inline-flex flex-row gap-2">
          <div className="flex gap-2 ml-2 mt-2 items-center justify-center cursor-pointer">
            <img src={Location} alt="location" />
            <p className="hover:border-b-2 border-transparent border-gray-500 transition-all duration-100">Track Location</p>
          </div>
          <div className="flex gap-2 ml-2 mt-2 items-center justify-center cursor-pointer">
            <img src={Location} alt="location" />
            <p className="hover:border-b-2 border-transparent border-gray-500 transition-all duration-100">Track Order</p>
          </div>

          <div className="flex gap-2 ml-2 mt-2 items-center justify-center cursor-pointer">
            <img src={Compare} alt="location" />
            <p className="hover:border-b-2 border-transparent border-gray-500 transition-all duration-100">Compare</p>
          </div>

          <div className="flex gap-2 ml-2 mt-2 items-center justify-center cursor-pointer">
            <img src={Support} alt="location" />
            <p className="hover:border-b-2 border-transparent border-gray-500 transition-all duration-100">Customer Support</p>
          </div>

          <div className="flex gap-2 ml-2 mt-2 items-center justify-center cursor-pointer">
            <img src={Info} alt="location" />
            <p className="hover:border-b-2 border-transparent border-gray-500 transition-all duration-100">Need Help</p>
          </div>

        </div>
      </div>
      <div className="flex  gap-2  mt-2 items-center justify-self-end">
        <img src={Call} alt="location" />
        <p>+1-202-555-0104</p>
      </div>
    </div>
  );
};

export default Navbar;
