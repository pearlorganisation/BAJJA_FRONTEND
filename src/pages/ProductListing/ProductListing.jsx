import BreadCrumb from "./BreadCrumb";
import Product from "../../assets/prod1.png";
// import CartLogo from "../../assets/btncart.png";
import ArrowRight from "../../assets/ArrowRight.png";
import Star from "../../assets/Star.png";
import { useState } from "react";
import ArrowLeft from "../../assets/ArrowLeft.png";

const categories = [
  {
    id: 1,
    name: "Lipsticks",
  },
  {
    id: 2,
    name: "Computer and Laptops",
  },
  {
    id: 3,
    name: "Smart Phone",
  },
  {
    id: 4,
    name: "Headphone",
  },
  {
    id: 5,
    name: "Gaming Consoles",
  },
  {
    id: 6,
    name: "Watches",
  },
  {
    id: 7,
    name: "Home Appliances",
  },
];

const priceRanges = [
  {
    id: 1,
    name: "All Prices",
  },
  {
    id: 2,
    name: "Under $20",
  },
  {
    id: 3,
    name: "$20 to $100",
  },
  {
    id: 4,
    name: "$100 to 300",
  },
  {
    id: 5,
    name: "$300 to $500",
  },
  {
    id: 6,
    name: "$500 to $1,000",
  },
  {
    id: 7,
    name: "$1,000 to $10,000",
  },
];
const brands = [
  {
    id: 1,
    isChecked: true,
    name: "Nykaa",
  },
  {
    id: 2,
    isChecked: true,
    name: "Swiss Beauty",
  },
  {
    id: 3,
    isChecked: true,
    name: "Kay Beauty",
  },
  {
    id: 4,
    isChecked: true,
    name: "Himalaya",
  },
  {
    id: 5,
    isChecked: true,
    name: "Cetaphil",
  },
  {
    id: 6,
    isChecked: true,
    name: "Dot and Key",
  },

  {
    id: 7,
    isChecked: true,
    name: "Plum",
  },
  {
    id: 8,
    isChecked: true,
    name: "Minimalist",
  },
  {
    id: 9,
    isChecked: true,
    name: "Nivea",
  },
  {
    id: 10,
    isChecked: true,
    name: "Sugar",
  },
];

const tags = [
  {
    id: 1,
    name: "Lipstick",
  },
  {
    id: 2,
    name: "Foundation",
  },
  {
    id: 3,
    name: "Eye Liner",
  },
  {
    id: 4,
    name: "Face Wash",
  },
  {
    id: 5,
    name: "Moisturizer",
  },
  {
    id: 6,
    name: "Kajal",
  },

  {
    id: 7,
    name: "Lip Balm",
  },
  {
    id: 8,
    name: "Sunscreen",
  },
  {
    id: 9,
    name: "Primer",
  },
  {
    id: 10,
    name: "Cleanser",
  },
  {
    id: 11,
    name: "Toner",
  },
];

const products = [
  {
    id: 1,
    tag: "New Arrival",
    tagColor: "#aced1a",
    image: "https://readymadeui.com/images/laptop2.webp",
    name: " HP Polycarbonate Laptop 15S, AMD, 15.6-IInch (39.6 Cm)",
    price: "600",
    stars: 5,
    reviews: "1203",
  },
  {
    id: 2,
    tag: "Hot",
    image: "https://readymadeui.com/images/laptop2.webp",
    name: "Lipstck Set",
    price: "350",
    stars: 2,
    reviews: "64",
  },
  {
    id: 3,
    image: "https://readymadeui.com/images/laptop2.webp",
    name: "PS 5 Slim Disc Edition",
    price: "90",
    stars: 5,
    reviews: "11,236",
    originalPrice: "500",
  },
  {
    id: 4,
    image: "https://readymadeui.com/images/laptop2.webp",
    name: "iPhone 15",
    price: "15",
    stars: 4,
    reviews: "2,738",
  },
  {
    id: 5,
    image: "https://readymadeui.com/images/laptop2.webp",
    name: " Ziva Purse",
    price: "58",
    stars: 1,
    tag: "25% OFF",
    reviews: "42",
    originalPrice: "73",
  },
  {
    id: 6,
    image: "https://readymadeui.com/images/laptop2.webp",
    name: " HP Polycarbonate Laptop 15S, AMD, 15.6-IInch (39.6 Cm)",
    price: "325",
    stars: 3,
    reviews: "2",
  },
  {
    id: 7,
    image: "https://readymadeui.com/images/laptop2.webp",
    name: " HP Polycarbonate Laptop 15S, AMD, 15.6-IInch (39.6 Cm)",
    price: "136",
    stars: 5,
    reviews: "755",
  },
];

const ProductListing = () => {
  const [priceValue, setPriceValue] = useState(30);
  return (
    <div className="bg-white">
      <div className="p-4 bg-[#F2F4F5] my-2 bg-color-black">
        <h1 className="text-blue-500">Product </h1>
      </div>

      <BreadCrumb />

      <div className="flex">
        <div className="w-[25%]">
          <div className="p-8">
            <div className="flex gap-8 justify-between">
              <h1 className="mt-2 mb-3">Category</h1>

              <img
                src="https://t3.ftcdn.net/jpg/03/21/21/26/360_F_321212678_hSKU8jlbFhiBzPEXS7BUS9b89nTygCYD.jpg"
                className="w-5 h-5 items-center justify-center mt-3 block md:hidden"
              />
            </div>

            <div className="hidden md:block">
              {categories.map((category) => (
                <ul key={category.id} className="flex mt-2 gap-2">
                  <input type="radio" name="radio-1" className="radio" />
                  <h1>{category.name}</h1>
                </ul>
              ))}
            </div>
            <div className="divider"></div>

            <div className="flex gap-2 justify-between">
              <h1 className="mt-4">PRICE RANGE</h1>
              <img
                src="https://t3.ftcdn.net/jpg/03/21/21/26/360_F_321212678_hSKU8jlbFhiBzPEXS7BUS9b89nTygCYD.jpg"
                className="w-5 h-5 items-center justify-center mt-4 block md:hidden"
              />
            </div>

            <div className="hidden md:block">
              <div>
                <label
                  htmlFor="price"
                  className="opacity-70 block text-black dark:text-white"
                >
                  <div className="w-full flex justify-between items-center">
                    <p>Max Price</p>
                    <p className="font-bold text-xl">$ {priceValue}</p>
                  </div>
                </label>
                <div className=" bg-gray-100  rounded-full p-2 flex items-center justify-center ">
                  <input
                    type="range"
                    name="price"
                    id="price"
                    className="appearance-none w-full bg-yellow-600 h-2 rounded-full my-2"
                    min="0"
                    max="10000"
                    value={priceValue}
                    step="100"
                    onChange={(e) => setPriceValue(e.target.value)}
                  />
                </div>
              </div>

              {priceRanges.map((priceRange) => (
                <ul key={priceRange.id} className="flex mt-2 gap-2">
                  <input type="radio" name="radio-1" className="radio" />
                  <h1>{priceRange.name}</h1>
                </ul>
              ))}
            </div>

            <div className="divider mt-5"></div>

            <div className="flex gap-2">
              <h1 className="mt-4">POPULAR BRANDS</h1>
              <img
                src="https://t3.ftcdn.net/jpg/03/21/21/26/360_F_321212678_hSKU8jlbFhiBzPEXS7BUS9b89nTygCYD.jpg"
                className="w-5 h-5 items-center justify-center mt-4 block md:hidden"
              />
            </div>

            <div className="hidden md:block gap-2 mt-2">
              <div className="gap-2 grid grid-cols-1 lg:grid-cols-2 md: mt-3">
                {brands.map((brand) => (
                  <div key={brand.id} className="flex gap-2">
                    <input
                      type="checkbox"
                      defaultChecked
                      className="checkbox"
                    />
                    <h3>{brand.name}</h3>
                  </div>
                ))}
              </div>
            </div>
            <div className="divider mt-5"></div>

            <div className="flex gap-2">
              <h1 className="mt-4">POPULAR TAGS</h1>
              <img
                src="https://t3.ftcdn.net/jpg/03/21/21/26/360_F_321212678_hSKU8jlbFhiBzPEXS7BUS9b89nTygCYD.jpg"
                className="w-5 h-5 items-center justify-center mt-4 block md:hidden"
              />
            </div>

            <div className="hidden md:block">
              <div className="gap-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-3">
                {tags.map((brand) => (
                  <div
                    key={brand.id}
                    className="flex gap-2 border-2 border-gray-400 p-2 rounded-md"
                  >
                    <h3 className="px-1 lg:px-2 font-bold text-xs lg:text-md">
                      {brand.name}
                    </h3>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-4 border-2 border-orange-600 mt-4 w-full rounded-xl">
              <img src={Product} alt="Minimalist" />

              <div className="flex items-center justify-center">
                <div className="items-center justify-center">
                  <h3 className="font-medium lg:text-lg text-xs mt-4">
                    Minimalist
                  </h3>

                  <h4 className="font-bold lg:text-xl text-sm mt-5">
                    FLAT 25% OFF
                  </h4>

                  <h4 className="mt-3 text-sm">
                    ONLY FOR
                    <span className="bg-yellow-400 mt-3 text-sm">
                      {" "}
                      $299 USD{" "}
                    </span>
                  </h4>

                  <button
                    type="button"
                    className="w-full flex items-center justify-center gap-3 mt-6 px-3 py-3 bg-orange-400 text-xs md:text-base text-white font-semibold rounded-sm"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20px"
                      height="20px"
                      fill="white"
                      viewBox="0 0 512 512"
                      className="hidden md:block"
                    >
                      <path
                        d="M164.96 300.004h.024c.02 0 .04-.004.059-.004H437a15.003 15.003 0 0 0 14.422-10.879l60-210a15.003 15.003 0 0 0-2.445-13.152A15.006 15.006 0 0 0 497 60H130.367l-10.722-48.254A15.003 15.003 0 0 0 105 0H15C6.715 0 0 6.715 0 15s6.715 15 15 15h77.969c1.898 8.55 51.312 230.918 54.156 243.71C131.184 280.64 120 296.536 120 315c0 24.812 20.188 45 45 45h272c8.285 0 15-6.715 15-15s-6.715-15-15-15H165c-8.27 0-15-6.73-15-15 0-8.258 6.707-14.977 14.96-14.996zM477.114 90l-51.43 180H177.032l-40-180zM150 405c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm167 15c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm0 0"
                        data-original="#000000"
                      ></path>
                    </svg>
                    Add to cart
                  </button>

                  <button
                    type="button"
                    className="w-full flex items-center justify-center gap-3 mt-6 px-3 py-3 bg-white text-xs md:text-base text-orange-600 border-2 border-orange-600 font-semibold rounded-sm"
                  >
                    View Details
                    <img
                      src={ArrowRight}
                      alt="arr-right"
                      className="hidden md:block"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-[70%]">
          {/* header*/}
          <div className="p-8"></div>

          <div>
            <div className="font-[sans-serif] p-4 mx-auto lg:max-w-5xl md:max-w-3xl max-w-lg">
              <h2 className="text-xl font-bold text-gray-800 mb-12">
                Active Filters
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {products.map((product) => (
                  <div
                    key={product.id}
                    className="bg-white overflow-hidden cursor-pointer border-2 border-gray-400 rounded-lg hover:shadow-lg transition-all relative"
                  >
                    <div className="w-full h-[250px] overflow-hidden mx-auto aspect-w-16 aspect-h-8 p-2">
                      <img
                        src="https://readymadeui.com/images/laptop2.webp"
                        alt="laptop1"
                        className="h-full w-full object-contain relative"
                      />

                      {product.tag && (
                        <div className="">
                          <h3 className="p-2 absolute top-2 left-2 border-2 bg-[#4c7972]   text-white">
                            {product.tag}
                          </h3>
                        </div>
                      )}
                    </div>

                    <div className="p-6">
                      <div className="flex space-x-1.5 mt-4">
                        <img src={Star} alt="star" />
                        <img src={Star} alt="star" />
                        <img src={Star} alt="star" />
                        <img src={Star} alt="star" />
                        <img src={Star} alt="star" />
                        <p className="text-base text-gray-800 !ml-2">
                          {product.reviews}
                        </p>
                      </div>
                      <div>
                        <h3 className="text-base text-gray-800 mt-2">
                          {product.name}
                        </h3>
                        <h4 className="text-xl text-blue-700 font-bold mt-4">
                          {product.originalPrice && (
                            <strike className="text-gray-400 ml-2 mr-2 font-medium">
                              {"$ " + product.originalPrice}
                            </strike>
                          )}
                          {"$ " + product.price}
                        </h4>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-20  gap-2 flex items-center justify-center">
            <button className="border-yellow-600 border-2 p-2 rounded-full">
              <img src={ArrowLeft} alt="arr-left" />
            </button>
            <input
              className="join-item btn btn-square"
              type="radio"
              name="options"
              aria-label="01"
              defaultChecked
            />
            <input
              className="join-item btn btn-square"
              type="radio"
              name="options"
              aria-label="02"
            />
            <input
              className="join-item btn btn-square"
              type="radio"
              name="options"
              aria-label="03"
            />
            <input
              className="join-item btn btn-square"
              type="radio"
              name="options"
              aria-label="04"
            />
            <button className="border-yellow-600 border-2 p-2 rounded-full">
              <img src={ArrowRight} alt="arrow-right" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductListing;
