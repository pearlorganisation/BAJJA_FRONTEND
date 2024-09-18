import Cart from "../../../assets/Cart.png";
import Profile from "../../../assets/Profile.png";
import Fav from "../../../assets/Fav.png";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { Link, NavLink } from "react-router-dom";
import { useLocation } from "react-router";
import { useEffect, useState } from "react";
import Search from "./Search/Search";

const Header = () => {
  const selector = useSelector(state => state);
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  let bg;
  switch (location.pathname.split("/")[1]) {
    case "services":
      bg = "orange-400";
      break;
    case "categories":
      bg = "yellow-400"
      break;
    default:
      bg = "primary";
      break;
  }
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  return (
    <div>
      <header className={`flex bg-${bg} border-b py-4 sm:px-8 px-6 font-[sans-serif] min-h-[80px] tracking-wide relative z-50`}>
        <div className="flex items-center justify-between lg:gap-y-2 gap-0 w-full">
          <Link to="/">
            <h1>LOGO</h1>
          </Link>
          <div className="flex items-center justify-between lg:gap-0 md:gap-0 gap-2">
            <div
              id="collapseMenu"
              className="lg:ml-10 max-lg:hidden lg:!block max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-50 max-lg:before:inset-0 max-lg:before:z-50"
            >


              <ul className="lg:flex lg:gap-x-3 max-lg:space-y-3 max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50">
                <li className="mb-6 hidden max-lg:block">
                  <a href="javascript:void(0)">
                    <img
                      src="https://readymadeui.com/readymadeui.svg"
                      alt="logo"
                      className="w-36"
                    />
                  </a>
                </li>
                <li className="max-lg:border-b max-lg:py-3 px-3">
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      `text-[#333] hover:text-[#007bff] text-[15px] block ${isActive ? "font-bold text-blue-800" : "font-semibold"
                      }`
                    }
                  >
                    Home
                  </NavLink>
                </li>
                <li className="max-lg:border-b max-lg:py-3 px-3">
                  <NavLink to="/categories"
                    className={({ isActive }) =>
                      `text-[#333] hover:text-[#007bff] text-[15px] block ${isActive ? "font-bold text-blue-500" : "font-semibold"
                      }`
                    }
                  >
                    Categories
                  </NavLink>
                </li>
                <li className="max-lg:border-b max-lg:py-3 px-3">
                  <NavLink to="/services"
                    className={({ isActive }) =>
                      `text-[#333] hover:text-[#007bff] text-[15px] block ${isActive ? "font-bold text-blue-500" : "font-semibold"
                      }`
                    }
                  >
                    Services
                  </NavLink>
                </li>
                <li className="max-lg:border-b max-lg:py-3 px-3">
                  <NavLink to="/create-ad"
                    href="javascript:void(0)"
                    className={({ isActive }) =>
                      `text-[#333] hover:text-[#007bff] text-[15px] block ${isActive ? "font-bold text-blue-500" : "font-semibold"
                      }`
                    }
                  >
                    Post an Ad
                  </NavLink>
                </li>
              </ul>
            </div>

            <div className="flex gap-x-10 gap-y-4 ml-2">
              <div className="flex w-full border-2 gap-2 bg-white focus-within:border-gray-400 rounded-none px-5 py-1 overflow-hidden  max-lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 192.904 192.904"
                  width="24px"
                  className="cursor-pointer fill-black w-5"
                >
                  <path d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z"></path>
                </svg>
                <input
                  type="text"
                  placeholder="Search for products,services and more"
                  className="w-80 h-10 text-sm bg-white outline-none pr-6 text-bold"
                />
              </div>
            </div>

            <div className="flex gap-x-10 gap-y-4 ml-auto">
              <div className="flex items-center md:space-x-7 space-x-5 pl-4" >

                <span className="lg:hidden">
                  <Search />
                </span>
                <span className="relative cursor-pointer md:w-10 w-7" onClick={() => navigate("/auth")}>
                  <img src={Profile} className="w-full" />
                </span>

                <span className="relative cursor-pointer md:w-10 w-7">
                  <img src={Fav} className="w-full" />
                  <span className="absolute left-auto md:ml-7 ml-5 top-[-3px] rounded-full bg-red-500 px-1 py-0 text-xs text-white">
                    {selector.favourite.length}
                  </span>
                </span>

                <span className="relative cursor-pointer md:w-10 w-7" onClick={() => navigate("/addToCart")}>
                  <img src={Cart} className="w-full" />
                  <span className="absolute left-auto md:ml-8 ml-5 top-0 rounded-full bg-red-500 px-1 py-0 text-xs text-white">
                    {selector.addToCart.length}
                  </span>
                </span>

                <button id="toggleOpen" className="lg:hidden" onClick={toggleMenu}>
                  <svg
                    className="md:w-10 w-10 h-7"
                    fill="#333"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-50 h-full"
          onClick={toggleMenu}
        />
      )}

      {/* Sidebar Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-1/2 bg-white shadow-lg transform transition-transform duration-1000 ease-in-out z-50 ${isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
        <div className="p-4">

          <button
            id="toggleClose"
            className="lg:hidden block fixed top-2 right-4 z-[100] rounded-full bg-white p-3"
            onClick={toggleMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 fill-black"
              viewBox="0 0 320.591 320.591"
            >
              <path
                d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
                data-original="#000000"
              ></path>
              <path
                d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
                data-original="#000000"
              ></path>
            </svg>
          </button>

          <ul className="mt-4 space-y-2 mt-8 font-bold">
            <li><Link to="/" onClick={toggleMenu} className="text-gray-800 hover:text-blue-500">Home</Link></li>
            <li><Link to="/categories" onClick={toggleMenu} className="text-gray-800 hover:text-blue-500">Categories</Link></li>
            <li><Link to="/services" onClick={toggleMenu} className="text-gray-800 hover:text-blue-500">Services</Link></li>
            <li><Link to="/create-ad" onClick={toggleMenu} className="text-gray-800 hover:text-blue-500">Post an Ad</Link></li>
          </ul>
        </div>
      </div>

    </div>
  );
};

export default Header;
