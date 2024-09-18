import React, { useState } from 'react';

const Search = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSearch = () => {
        setIsOpen((prev) => !prev);
    };

    return (
        <div className="">
            <span className="lg:hidden " onClick={toggleSearch}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 192.904 192.904"

                    className="cursor-pointer fill-black md:w-7 w-5"
                >
                    <path d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z"></path>
                </svg>
            </span>
            {isOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm z-40" onClick={toggleSearch} />
            )}
            <div
                className={`w-full absolute top-0 md:p-20 py-10 px-5 flex gap-2 left-0 h-[50vh] bg-white shadow-lg transform transition-transform duration-1000 ease-in-out z-50 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
            >
                <input
                    type="text"
                    placeholder="Search..."
                    className="p-2 w-full h-10 border border-gray-300 rounded-md"
                />
                <button
                    onClick={toggleSearch}
                    className="px-5 bg-gray-100 hover:bg-blue-500 fill-black hover:fill-white rounded-md h-10"
                >
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 192.904 192.904"

                    className="cursor-pointer md:w-7 w-5"
                >
                    <path d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z"></path>
                </svg>
                </button>
            </div>
        </div>
    );
};

export default Search;
