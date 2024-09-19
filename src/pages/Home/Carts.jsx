import React, { memo } from 'react'
import { CiHeart } from "react-icons/ci";
import { RxEyeOpen } from "react-icons/rx";
import { ADD_TO_CART, FAVOURITE, REMOVE_TO_CART } from "../../redux/actionTypes/actionTypes";
import { useDispatch, useSelector } from 'react-redux';
const Carts = ({ el }) => {
    const dispatch = useDispatch();
    const selector = useSelector(state => state);
    const cartData = (el) => {
        dispatch({
            type: ADD_TO_CART,
            addToCart: el
        })
    }
    const favourite = (el) => {
        dispatch({
            type: FAVOURITE,
            favourite: el
        })
    }
    const removeToCart = (el) => {
        dispatch({
            type: REMOVE_TO_CART,
            removeToCart: el
        })
    }
    return (
        <div class="bg-gray-100 rounded-xl lg:w-80 md:w-48" data-aos="fade-up"
            data-aos-duration="1000">
            <img
                class="w-full h-48 object-contain"
                src={el.img}
                alt="Placeholder Image"
            />

            <div class="p-4">
                <div class="flex items-center">
                    <span class="text-yellow-500">
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
                            <span key={i} className={`lg:text-2xl text-lg ${i < Math.floor(el.rating) ? 'text-yellow-600' : (i === Math.floor(el.rating) && el.rating % 1 >= 0.5) ? 'relative text-yellow-600 before:content-["★"] before:absolute before:inset-0  before:w-1/2 before:left-0 before:overflow-hidden before:text-gray-300' : 'text-gray-300'}`}>★</span>
                        ))}
                    </span>
                    <span class="text-yellow-600 ml-1 mt-1 text-sm font-bold">{el.rating}</span>
                    <span class="ml-2 text-gray-600 text-sm mt-1">(52,677)</span>
                </div>
                <h2 className="text-gray-900 text-xs lg:text-lg font-bold mt-2">{el.title}</h2>
                <p className="text-gray-600 mt-2 text-xs sm:text-sm">{el.description}</p>
                <div class="mt-4 flex items-center">
                    <span class="text-gray-400 line-through">
                        ${el.firstPrice}
                    </span>
                    <span class="text-blue-500 text-xl font-bold ml-2">
                        ${el.DiscountedPrice}
                    </span>
                </div>

                <div className="flex  justify-around items-center ">
                    <div className={`cursor-pointer ${selector.favourite.find((item) => item.id === el.id) ? "text-red-500" : "text-black"}`} onClick={() => favourite(el)}>
                        <CiHeart className='w-5 h-5 lg:h-10 lg:w-10' />
                    </div>
                    <div>
                        {selector.addToCart.some((item) => item.id === el.id) ?
                            <button className="w-full bg-orange-500 text-white font-semibold text-xs lg:text-base py-2 lg:px-8 px-3 rounded hover:bg-orange-600"
                                onClick={() => removeToCart(el)}>
                                Remove to Cart
                            </button>
                            :
                            <button className="w-full bg-orange-500 text-white font-semibold text-xs lg:text-base py-2 lg:px-8 px-4 rounded hover:bg-orange-600"
                                onClick={() => cartData(el)}
                            >
                                ADD TO CART
                            </button>
                        }
                    </div>
                    <div className="">
                        <RxEyeOpen  className='w-5 h-5 lg:h-10 lg:w-10'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default memo(Carts)