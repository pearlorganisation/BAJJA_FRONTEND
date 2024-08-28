import { NavLink } from "react-router-dom";
import { FaCaretDown } from "react-icons/fa";

import Call from "../../../assets/Call.png";
import Compare from "../../../assets/Compare.png";
import Support from "../../../assets/Support.png";
import Info from "../../../assets/Info.png";
import Location from "../../../assets/Location.png";

const DropdownLinks = [
  {
    name: "Our Services",
    link: "/#services",
  },
  {
    name: "Top Brands",
    link: "/#mobile_brands",
  },
  {
    name: "Location",
    link: "/#location",
  },
];

const Navbar2 = () => {
  return (
    <>
      <nav className=" w-full  bg-white dark:bg-black dark:text-white backdrop-blur-sm text-black shadow-md">
        <div className="container py-3 sm:py-0">
          <div className="flex justify-between items-center">
            <div className="hidden md:block justify-between">
              <ul className="flex items-center gap-6 ">
                <li className="py-4 flex">
                  <NavLink to="/" activeClassName="active">
                    All Categories
                    <span>
                      <FaCaretDown className="transition-all duration-200" />
                    </span>
                  </NavLink>

                  <div className="absolute -left-9 z-[9999] hidden w-[150px] rounded-md bg-white p-2 text-black group-hover:block shadow-md ">
                    <ul className="space-y-3">
                      {DropdownLinks.map((data) => (
                        <li key={data.name}>
                          <a
                            className="inline-block w-full rounded-md p-2 hover:bg-primary/20"
                            href={data.link}
                          >
                            {data.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
                <li className="py-4 flex flex-row">
                  <NavLink to="/" activeClassName="active">
                    All Services
                    <span>
                      <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
                    </span>
                  </NavLink>

                  <div className="absolute -left-9 z-[9999] hidden w-[150px] rounded-md bg-white p-2 text-black group-hover:block shadow-md ">
                    <ul className="space-y-3">
                      {DropdownLinks.map((data) => (
                        <li key={data.name}>
                          <a
                            className="inline-block w-full rounded-md p-2 hover:bg-primary/20"
                            href={data.link}
                          >
                            {data.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              </ul>
            </div>

            <div className="inline-flex flex-row gap-2">
              <div className="flex gap-2 ml-2 mt-2 items-center justify-center">
                <img src={Location} alt="location" />
                <p>Track Location</p>
              </div>
              <div className="flex gap-2 ml-2 mt-2 items-center justify-center">
                <img src={Location} alt="location" />
                <p>Track Order</p>
              </div>

              <div className="flex gap-2 ml-2 mt-2 items-center justify-center">
                <img src={Compare} alt="location" />
                <p>Compare</p>
              </div>

              <div className="flex gap-2 ml-2 mt-2 items-center justify-center">
                <img src={Support} alt="location" />
                <p>Customer Support</p>
              </div>

              <div className="flex gap-2 ml-2 mt-2 items-center justify-center">
                <img src={Info} alt="location" />
                <p>Need Help</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex  gap-2  mt-2 items-center ">
                <img src={Call} alt="location" />
                <p>+1-202-555-0104</p>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar2;
