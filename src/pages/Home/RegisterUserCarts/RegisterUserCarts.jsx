import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { CiHeart } from "react-icons/ci";
import { RxEyeOpen } from "react-icons/rx";

const RegisterUserCarts = () => {
    const [time, setTime] = useState({
        days: 16,
        hours: 21,
        minutes: 57,
        secounds: 23
    })
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
    return (
        <div className='m-10'>
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

            <div className="bg-gray-50 rounded-xl flex lg:flex-nowrap flex-wrap items-center justify-between">
                <div className='bg-gray-100 lg:w-1/4 w-full h-full' data-aos="fade-up"
                    data-aos-duration="1000">
                    <img
                        className="w-full h-72 object-contain"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRFaGZGTWDBPyIl_v10Nd8esrazMuVyIbwTw&s"
                        alt="Placeholder Image"
                    />

                    <div className="p-4">
                        <div className="flex items-center">
                            <span className="text-yellow-500">
                                {/* <svg
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
                        </svg> */}

                                {Array.from({ length: 5 }, (_, i) => (
                                    <span key={i} className={`text-2xl ${i < Math.floor(5) ? 'text-yellow-600' : (i === Math.floor(5) && 5 % 1 >= 0.5) ? 'relative text-yellow-600 before:content-["★"] before:absolute before:inset-0  before:w-1/2 before:left-0 before:overflow-hidden before:text-gray-300' : 'text-gray-300'}`}>★</span>
                                ))}
                            </span>
                            <span className="text-yellow-600 ml-1 mt-1 text-sm font-bold">5</span>
                            <span className="ml-2 text-gray-600 text-sm mt-1">(52,677)</span>
                        </div>
                        <h2 className="text-gray-900 text-lg font-bold mt-2">Xbox Series S - 512GB SSD Console with Wireless Controller - EU Versio...</h2>
                        <div className="mt-4 flex items-center">
                            <span className="text-gray-400 line-through">
                                $865.99
                            </span>
                            <span className="text-blue-500 text-xl font-bold ml-2">
                                $442.12
                            </span>
                        </div>
                        <p className="text-gray-600 my-2 text-sm">Games built using the Xbox Series X|S development kit showcase unparalleled load times, visuals.</p>

                        <div className="flex  justify-around items-center ">
                            {/* For dynamic */}

                            {/* <div className={`cursor-pointer ${selector.favourite.find((item) => item.id === el.id) ? "text-red-500" : "text-black"}`} onClick={() => favourite(el)}>
                        <CiHeart size={30} />
                    </div> */}
                            <CiHeart size={30} />
                            <div>
                                {/* For Dynamic */}
                                {/* {selector.addToCart.some((item) => item.id === el.id) ?
                            <button class=" w-full bg-orange-500 text-white font-semibold py-2 px-8 rounded hover:bg-orange-600"
                                onClick={() => removeToCart(el)}
                            >
                                REMOVE TO CART
                            </button> :
                            <button class=" w-full bg-orange-500 text-white font-semibold py-2 px-12 rounded hover:bg-orange-600"
                                onClick={() => cartData(el)}
                            >
                                ADD TO CART
                            </button>
                        } */}

                                <button className=" w-full bg-orange-500 text-white font-semibold py-2 px-12 rounded hover:bg-orange-600"
                                    onClick={(e) => cartData(e)}
                                >
                                    ADD TO CART
                                </button>
                            </div>
                            <div className="">
                                <RxEyeOpen size={30} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex items-center justify-between flex-wrap lg:w-3/4 w-full'>
                    {data.map((item, index) => (
                        <div className='md:w-64 h-74 border-2 border-gray-200 px-2 pt-2' key={index} data-aos="fade-up"
                            data-aos-duration="1000">
                            <div className='h-40 md:w-60'>
                                <img src={item.img} alt={item.title} className='h-full w-full' />
                            </div>
                            <h3>{item.title}</h3>
                            <div className="mt-4 flex items-center">
                                <span className="text-gray-400 line-through">
                                    ${item.firstPrice}
                                </span>
                                <span className="text-blue-500 text-xl font-bold ml-2">
                                    ${item.DiscountedPrice}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default RegisterUserCarts