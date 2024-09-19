import BreadCrumb from "./BreadCrumb";
import Product from "../../assets/prod1.png";
// import CartLogo from "../../assets/btncart.png";
import ArrowRight from "../../assets/ArrowRight.png";
import Star from "../../assets/Star.png";
import { useState } from "react";
import ArrowLeft from "../../assets/ArrowLeft.png";
import { SearchBar } from "./SearchBar";
import SortByFilter from "./SortByFilter";
import { useLocation } from "react-router";
import { products } from "../../../JSON Data/productsData/ProsuctsData";

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
    id: 10,
    name: "All Prices",
    max_value: 10000,
    min_value: 0
  },
  {
    id: 11,
    name: "Under $50",
    max_value: 50,
    min_value: 2
  },
  {
    id: 12,
    name: "$20 to $100",
    max_value: 100,
    min_value: 51
  },
  {
    id: 13,
    name: "$100 to 300",
    max_value: 300,
    min_value: 101
  },
  {
    id: 14,
    name: "$300 to $500",
    max_value: 500,
    min_value: 301
  },
  {
    id: 15,
    name: "$500 to $1,000",
    max_value: 1000,
    min_value: 501
  },
  {
    id: 16,
    name: "$1,000 to $10,000",
    max_value: 10000,
    min_value: 1001
  },
];
const brandsData = [
  {
    id: 21,
    isChecked: true,
    name: "Nykaa",
  },
  {
    id: 20,
    isChecked: true,
    name: "Swiss Beauty",
  },
  {
    id: 30,
    isChecked: true,
    name: "Kay Beauty",
  },
  {
    id: 40,
    isChecked: true,
    name: "Himalaya",
  },
  {
    id: 50,
    isChecked: true,
    name: "Cetaphil",
  },
  {
    id: 60,
    isChecked: true,
    name: "Dot and Key",
  },

  {
    id: 70,
    isChecked: true,
    name: "Plum",
  },
  {
    id: 80,
    isChecked: true,
    name: "Minimalist",
  },
  {
    id: 90,
    isChecked: true,
    name: "Nivea",
  },
  {
    id: 100,
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

const ProductListing = () => {
  const [priceValue, setPriceValue] = useState(200);
  const [selectedRange, setSelectedRange] = useState([priceRanges[0]]);
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedTagIds, setSelectedTagIds] = useState([]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);


  const toggleFilterModal = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  const [brands, setBrands] = useState(brandsData);
  const itemsPerPage = 20;

  const location = useLocation();
  const path = location.pathname.split("/")[1];


  const handleRangeChange = (e) => {
    const newValue = parseInt(e.target.value, 10);
    setPriceValue(newValue);
    let newSelectedRange;
    if (newValue === 0 || newValue === 10000) {
      newSelectedRange = [priceRanges[0]];
    } else {
      newSelectedRange = priceRanges.filter(
        (range) => newValue >= range.min_value && newValue <= range.max_value
      );
    }
    setSelectedRange(newSelectedRange);
  };

  const handleRangeSelect = (range) => {
    setSelectedRange(Array.of(range));
    setPriceValue(range.max_value);
  };

  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const productsData = products.slice(startIndex, endIndex);

  const handleNext = () => {
    if (endIndex < products.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevious = () => {
    if (startIndex > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleBrandsStatus = (e) => {
    const { id, checked } = e.target;
    const updatedBrands = brands.map(brand =>
      brand.id === parseInt(id, 10)
        ? { ...brand, isChecked: !brand.isChecked }
        : brand
    );
    setBrands(updatedBrands);
  };

  const handleTagClick = (id) => {

    setSelectedTagIds((prevSelectedTagIds) =>
      prevSelectedTagIds.includes(id)
        ? prevSelectedTagIds.filter(tagId => tagId !== id)
        : [...prevSelectedTagIds, id]
    );
  };

  return (
    <div className="bg-white">
      <div className="p-4 bg-[#F2F4F5] my-2 bg-color-black">
        <h1 className="text-blue-500 capitalize">{path} </h1>
      </div>

      <BreadCrumb />

      <div className="flex justify-between">
        <div className="w-[25%] hidden md:block">
          <div className="p-8">

            {/* Category */}

            <div className="flex gap-8 justify-between" data-aos="fade-up"
              data-aos-duration="500">
              <h1 className="mt-2 mb-3 text-sm lg:text-base">Category</h1>

              <img
                src="https://t3.ftcdn.net/jpg/03/21/21/26/360_F_321212678_hSKU8jlbFhiBzPEXS7BUS9b89nTygCYD.jpg"
                className="w-5 h-5 items-center justify-center mt-3 block md:hidden"
              />
            </div>

            <div className="hidden md:block" data-aos="fade-up"
              data-aos-duration="500">
              {categories.map((category) => (
                <ul key={category.id} className="flex mt-2 gap-2 items-center">
                  <input type="radio" name="radio-1" id={category.id} onChange={(e) => console.log(e.target.id)
                  } className="radio" />
                  <label htmlFor={category.id} className="cursor-pointer text-sm lg:text-base">{category.name}</label>
                </ul>
              ))}
            </div>
            <div className="divider" data-aos="fade-up"
              data-aos-duration="500"></div>

            {/* Price Range Filter */}

            <div className="flex gap-2 justify-between" data-aos="fade-up"
              data-aos-duration="500">
              <h1 className="lg:mt-4 md:text-sm lg:text-base">PRICE RANGE</h1>
              <img
                src="https://t3.ftcdn.net/jpg/03/21/21/26/360_F_321212678_hSKU8jlbFhiBzPEXS7BUS9b89nTygCYD.jpg"
                className="w-5 h-5 items-center justify-center mt-4 block md:hidden"
              />
            </div>


            <div className="hidden md:block" data-aos="fade-up"
              data-aos-duration="500">
              <div>
                <label htmlFor="price" className="opacity-70 block text-black dark:text-white">
                  <div className="w-full flex justify-between items-center">
                    <p className="md:text-sm lg:text-base">Max Price</p>
                    <p className="font-bold lg:text-xl">$ {priceValue}</p>
                  </div>
                </label>
                <div className="bg-gray-100 rounded-full p-2 flex items-center justify-center">
                  <input
                    type="range"
                    name="price"
                    id="price"
                    className="appearance-none w-full bg-yellow-600 h-2 rounded-full my-2"
                    min="0"
                    max="10000"
                    value={priceValue}
                    step="100"
                    onChange={handleRangeChange}
                  />
                </div>
              </div>

              {priceRanges.map((priceRange) => (
                <ul key={priceRange.id} className="flex mt-2 gap-2 items-center">
                  <input
                    type="radio"
                    name="priceRange"
                    id={priceRange.id}
                    checked={selectedRange.length > 1 ? selectedRange[1].id === priceRange.id : selectedRange[0].id === priceRange.id}
                    onChange={() => handleRangeSelect(priceRange)}
                    className="radio focus:border-none"
                  />
                  <label htmlFor={priceRange.id} className="cursor-pointer text-sm lg:text-base">{priceRange.name}</label>
                </ul>
              ))}
            </div>

            <div className="divider mt-5" data-aos="fade-up"
              data-aos-duration="500"></div>

            {/* POPULAR BRANDS */}
            <div >
              <div className="flex gap-2">
                <h1 className="mt-4 text-sm lg:text-base" data-aos="fade-up"
                  data-aos-duration="500">POPULAR BRANDS</h1>
                <img
                  src="https://t3.ftcdn.net/jpg/03/21/21/26/360_F_321212678_hSKU8jlbFhiBzPEXS7BUS9b89nTygCYD.jpg"
                  className="w-5 h-5 items-center justify-center mt-4 block md:hidden"
                />
              </div>

              <div className="hidden md:block gap-2 mt-2" data-aos="fade-up"
                data-aos-duration="500">
                <div className="gap-2 grid grid-cols-1 xl:grid-cols-2 md:grid-cols-1 md:mt-3">
                  {brands.map((brand) => (
                    <div key={brand.id} className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={brand.isChecked}
                        name={brand.name}
                        id={brand.id}
                        className="checkbox w-5 h-5 lg:w-6 lg:h-6"
                        onChange={handleBrandsStatus}
                      />
                      <label htmlFor={brand.id} className="cursor-pointer lg:text-base text-sm">{brand.name}</label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="divider mt-5"></div>

            {/* POPULAR TAGS */}

            <div>
              <div className="flex gap-2">
                <h1 className="mt-4 lg:text-base text-sm" data-aos="fade-up"
                  data-aos-duration="500">POPULAR TAGS</h1>
                <img
                  src="https://t3.ftcdn.net/jpg/03/21/21/26/360_F_321212678_hSKU8jlbFhiBzPEXS7BUS9b89nTygCYD.jpg"
                  className="w-5 h-5 items-center justify-center mt-4 block md:hidden"
                />
              </div>

              <div className="hidden md:block" data-aos="fade-up"
                data-aos-duration="500">
                <div className="gap-2 grid grid-cols-1 md:grid-cols-2 md:w-44 lg:w-auto xl:grid-cols-3 mt-3">
                  {tags.map((brand) => (
                    <div
                      key={brand.id}
                      className={`flex gap-2 border-2 md:py-2 xl:p-2 rounded-md cursor-pointer ${selectedTagIds.includes(brand.id) ? 'bg-black text-white' : 'border-gray-400'
                        }`}
                      onClick={() => handleTagClick(brand.id)}
                    >
                      <h3 className="px-1 lg:px-2 font-bold text-xs lg:text-md">
                        {brand.name}
                      </h3>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/** Single Card */}
            <div className="p-4 border-2 border-orange-600 mt-4 w-full rounded-xl" data-aos="fade-up"
              data-aos-duration="500">
              <div data-aos="fade-up"
                data-aos-duration="500">
                <img src={Product} alt="Minimalist" className="w-full" />
              </div>
              <div className="flex items-center justify-center">
                <div className="flex flex-col w-full items-center justify-center">
                  <h3 className="font-medium lg:text-xl text-xs mt-4" data-aos="fade-up"
                    data-aos-duration="500">
                    Minimalist
                  </h3>

                  <h4 className="font-bold lg:text-2xl text-sm mt-5" data-aos="fade-up"
                    data-aos-duration="500">
                    FLAT 25% OFF
                  </h4>

                  <h4 className="mt-3 text-sm" data-aos="fade-up"
                    data-aos-duration="500">
                    ONLY FOR
                    <span className="bg-yellow-400 mt-3 text-sm">
                      {" "}
                      $299 USD{" "}
                    </span>
                  </h4>

                  <button
                    type="button"
                    className="w-full flex items-center justify-center lg:gap-3 md:gap-1 mt-6 px-3 py-3 bg-orange-400 text-xs md:text-base text-white font-semibold rounded-sm"
                    data-aos="fade-up"
                    data-aos-duration="500">
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
                    className="w-full flex items-center justify-center gap-3 mt-6 lg:px-3 px-1 py-3 bg-white text-xs md:text-base text-orange-600 border-2 border-orange-600 font-semibold rounded-sm"
                    data-aos="fade-up"
                    data-aos-duration="500">
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

        <div className="md:w-[75%] w-full">
          {/* header*/}
          <div className="p-4 flex flex-wrap justify-between items-center">
            <SearchBar />
            <SortByFilter />
          </div>
          {/* All Products Data */}
          <div>
            <div className="font-[sans-serif] p-4 lg:max-w-7xl md:max-w-5xl max-w-4xl">
              <h2 className="text-xl font-bold text-gray-800 mb-12" data-aos="fade-up"
                data-aos-duration="600">
                Active Filters
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 sm:grid-cols-2 place-items-center lg:grid-cols-4 gap-5">
                {productsData.map((product) => (
                  <div
                    key={product.id}
                    data-aos="fade-up"
                    data-aos-duration="500"
                    className="bg-white w-[17rem] overflow-hidden h-94 cursor-pointer border-2 border-gray-400 rounded-lg hover:shadow-lg transition-all relative"
                  >
                    <div className="w-full h-[200px] overflow-hidden mx-auto aspect-w-16 aspect-h-8 p-2">
                      <img
                        src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxESERIQDxAWEhAVEBAPFRUVDxAVEBAQFRcXFhUSFRUYHCggGBolGxUTIT0hJSkrLi4uFx82ODMtNygtLisBCgoKDg0OGxAQGysdHyYtLS4uLSsvLS0rKy0rLSsrKy0tLS0tLSstLS0tLS0tKystLTAtLSstLS0tLS0tLS0tLf/AABEIALcBEwMBEQACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAAAQIDBAcIBgX/xABREAABAwECBgoOBgcHBQAAAAABAAIDEQQSBQchMUFRBhMUIlRhdJGh0RcyNVJTcYGSk5SxssHSFUJVYrPTFiMkNIKipGRyc6PC4fAlM0NEw//EABsBAQADAQEBAQAAAAAAAAAAAAABAgMGBAUH/8QAMhEBAAIABAMFBwQCAwAAAAAAAAECAxESMQQTUhUhM1FxBRQiMkGRoWGBwdGx8DRC4f/aAAwDAQACEQMRAD8A3igICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIIQKIFECiBRAogUQKIFEBAogUQKIFECiBRAogUQEBAogUQKIFECiBRAogUQAglAQEBAQEEBBKAgICAgICAgj/AGQSgILc0wbQmvkQWd3N1HmHWguwTh1aVya0F1AQEBAQWJia0B1aUEXH6+lAuP19KBcfr6UC4/X0oIc1wyk9KCbM4kuqdSDIQQEEoCAgICAggIJQEFEmZBboeNBVEDXKguoCAgj/AGQSgILVogvgCtKGqDHdYQPrHoQVWdlytMtaIMhj6oK0BAQEFibth5PagvoCAgILc+bmQWrLnd5EGSggIJQEBAQEBBAQSgICAgICAgIIQSgICCCEEXBqQSGgIJQEBAQWJRvh5PagvoLcryKUQW9vPEgvMdUAoKZ83Mgs2ZwBdXiQZF8IJCCUBAQEBAQaYxw7KrbBbmWezWh8MQs8ctIzdLnvdICXOznIwZPGr1hneZh4X9NcJ8Pn9KVbKFNUn6a4T4fP6UplBqk/TXCfD5/SlMoNUn6a4T4fP6UplBqk/TXCfD5/SlMoNUuh9heEJLRYLLPMb0r4GOeQALzsxdQZBWlcizltGzUePq0vbbog17g0WKNwF43QTLKCaayAOYK1YUvM5vIDA8/COh/WvuR7EvMZ6ofHn2tSJyylP0PPwjof1qew79UHa9OmT6Hn4R0P607Dv1Qdr06ZPoefhHQ/rTsO/VB2vTpk+h5+EdD+tOw79UHa9OmT6Hn4R0P607Dv1Qdr06ZPoefhHQ/rTsO/VB2vTpk+h5+EdD+tOw79UHa9OmT6Hn4R0P607Dv1Qdr06ZPoefhHQ/rTsO/VB2vTpk+h5+EdD+tOw79UHa9OmT6Hn4R0P607Dv1Qdr06ZR9DT8I6H9adh36oO16dMqhgW0eH6H9ajsS/VB2tXplnbAzKzC9ljc9xpOWZ3AOFx1clcy+RjYXLvam+T6eFia4rbzdELzvSyoe1CCJ83MgsQNqXeRBeEXGguBBKAgICAgIOf8ePdQcjg9+ZXrsyxN3gVdmICAggoOm8W/cqxcnb8VlO70V2anx/fv8AFyGL8aZXqzvuwgu/p8sOLt80pVkCAgICAgIKmxk5gq6oTFZlcbZjpyKJvC0YcqxZhpKrrleMOFYgbqVdUpikKwwDMOhRmtlCpEvk7FR/1yzcpd7jlx/G+Nf1dHwvh0dE7S3/AISvE9qtopkQUT5uZBasud3kQZKCAglAQEBAQEHP+PHuoORwe/Mr12ZX3eAyq6hlQMqBlQQa+xB05i37l2Lk7fisp3b12anx/fv8XIYvxplerO+7CC7+nyw4u3zSlWQICAglrScgUTOSYjNkx2XKAcpOYDSdXGsrYmUZ7NYwl4wXDQtLTqIIPTlVIvF++JzaaNO8ZJUggICAgIPlbFO7lm5S73HLj+N8a/q6PhfDp6OjF4ntEFufNzILVlzu8iDJQQEEoCAgICAg5/x4d1ByOD35leuzLE3eBV2YgICCCg6bxb9yrFydvxWU7vRXZqfH9+/xchi/GmVqs77sIL9Ap8sOLt80pVkCAgILtmeAculUvGa+HOUtk2eA2HBhtcMYdaXxxvLi2txshHQ0HnFSuXvf3vjOVecqxMx9v7dDSvu3C8ysZ2mM/wDfROxa0PwnZpmW1oddcAyUMAIcQTkpkq3Jm0OyqONw68DjVnAn1j/fM4S08ZhWjFj0lri0l7HuY45Wucw0zVaaH2Lp8PTekWj6xm+BiTatpr5LW2u1nnV9MM9UovnWecqcoNUl86zzlMoM5L51nnKZQZyXzrPOUyg1SwdhhJw3Z6n/ANo+45cVx/j39XV8J4VPR0ZufjXge43OdaBuc60FcMV0k1z0QXUEBBKAgICCl7wBUmgQY9otDC0gHLk160GgscvdIckg96VXrsyvu8NXjVmZe4x0IlF77w6FIm9xjoUB5VI6cxb9y7FydvxWU7t67NWY9mg4RiBzbhj/ABZ1auzO+7GNm1HnXd0v8MORvh985LboXDRzLWLQymkwtqyogICD2EeyOaWxxWaGcQzRDa3AvbHt8QADLkjsgIGQgkV6F8K3BYeFxNsTErNqz393flP1ziH2K8ZfEwIw6W02j8wrwFhe1WQl89oDmBrg2DbWSue8jenek7W0HLUkVpmKjieGwOIyrhUyn62ymIiP33Tw+Pi4Gc4ls/03/wAPNTsvkucd8SXE6STlJPlX1qfBERGz51q6pzndiSREZ82tbRaJY2rMKFZUQEBBh7CO7ln5UfccuJ4/x7+rq+D8Kno6UXge8QEGK+2xm+xkjTI0GrQ9pe3xtzhWmsxGcwjOGJul/fHoVUrlmncXAE5MvsQfRQEBAQWrTEXNoNYQYZsLtY6UGisczLuEgP7JAf5plpXZlfd4QMy1+AUqJujUOZSgujUOZQlckDKm62goKVIJB0nN41e81mfhjKFKaoj4pzlbA9upUXdOYt+5Vi5O34rOd29dmrcendKHkMf4s6tXZnfdS3Mu4p8sOVtvKVZClzQc4SJyRMRK26zjRkVtcqzhwtusx0FW1qThy9Jgaw4KMLTa5pWz768GskLRlNKXWEUpTSvlcTjcfGJMYVY0/Tb+ZfRwMPg9Ec2Z1fv/AAzdw4D4RN6Of8pYc72p0x+P7bcv2f5z+f6XI7HgQDJaZvMm/KVZxfaU/wDWPx/a0U4Dzn8/0TWbA11120TXqGm8kz6M8dFNcT2jnGdY/H9otXgcu60/n+nk6VGVfZfM3YMjaEhbVnOHntGUqVZAgIMLYT3bg5UfccuJ4/x7+rq+D8Kno6Oa41C8D3vkbIMMOhc1jQQbzH1yXZGVo5oWOLiae59Dg+EjGiZn9Y9J+j4+H9lMjbBaZWgteAI2PGSj5X3W3eNrTWvEF6uAjnY0VmO55faeDHC4ecT3/wC/y0vY7XJFI2aJxbKxwe1wOUO+NdI01XV3w63rpmO5ytb2rbVE97pTBlqE0MUwFNsijl8V5odTpXJXrptNfJ0VZziJV3DqVVgMOpBfQEBAQQQg5/x3imFByOD35lpXZlibvBKzMQEBBBQdMYuZWjBdiBcB+zt0jjWU7vRXZq/Hk4HCMJBr+wx/izq1dmd90NzLuKfLDlbbylWQICAgICAoFLngZypyzRMxCzJae951eKebO2J5MYlaMhSCAgw9hHdyz8qPuOXE8f49/V1fB+FT0dKLwPe1xjSwu4PjsrDQXRK8jtiSSGtB0Denx1C+/wCx+Dw7xOLeM+/KM3xvafGYmHPLw5mM478ngMIYSl3M6zl5MRkZJdJJuuAcN7qrXNxBfWxuFw4tzaxlO3d+r5uDxOJaJw7TnE+b4J6lm0buwPsiEFmsUJu5bJZHdsC+7cF4Xa58gp41yfFVxOZe0Vma5z3/ALur4HCwsTCrWbxFstv8PX2K0tkY17cxFfFxLGs5xmjEw5w7TWV9SoICAgICDn/Hj3UHI4PfmV67MsTd4FXZiAgIIKDozYBZnHBljOSm0N08ZWU7vRXZrHHgCy3RZcu4o/xZleuzO+6hs7qZ+gLvKUjTDjrXnOU7odxcytohHMlO6TxJohPMk3SdQ6VGiDmSbpPEmiDmSbodxcynRCOZKkzu19ATRCNcqS8nSedW0wjVKlSgQEBAQEGHsI7uWflR9xy4nj/Hv6ur4PwqejpReB72ocZh/bz/AIUfsK632L/xv3lzXtbx/wBoeNtvaHxN9oX0cX5HhwvnfNiZecBrI5tK8lYznJ67TlGb7lnrfZdz3mXdYNRSnMF67xXRMfTJ46TbmRP1zdCtXAu0SgICAgICDn/Hj3UHI4PfmV67MsTd4FXZiC9NZXsAL2EA5q/8yLbE4bFw6xa9collTHw7zMVnOYWVi1QUHTOLoVwVYh/Z2fFZTu9Fdmqcfbf2+IDgMX40yvXZnfd80WmPwjfPb1ruacRhaY+KPu5C2DiZz8Mp3VH4Rnnt61PvGF1R90cjE6ZN1R+EZ57etT7xhdUfc5GJ0ybqj8Izz29ae8YXVH3ORidMm6o/CM89vWnvGF1R9zkYnTJuqPwjPPb1p7xhdUfc5GJ0ybqj8Izz29ae8YXVH3ORidMm6o/CM89vWnvGF1R9zkYnTJuqPwjPPb1p7xhdUfc5GJ0ybqj8Izz29ae8YXVH3ORidMm6o/CM89vWnvGF1R9zkYnTJuqPwjPPb1p7xhdUfc5GJ0ybqj8Izz29ae8YXVH3ORidMm6o/CM89vWo94wuqPucjE6ZY+wc1w3ZyMoNqJB0HeOzFcfxsxOPeY83T8JExh0ifJ0pVeF7moMZJ/b3/wCHF7q632N/xo9Zcx7V8efSHkLWN4fEPaF9HF+R4sL52Jg9lXE6gec5Fhgx8WbfGn4Xptitk2222ZlP/M15/us3x6GlRx+Jo4e8/p/nuRwdNePWP1/9bzC4l1yUBAQQgICDQGPHuoORwe/Mr12ZYm7wKuzEichnW3Cb5WhrgBQ1NK74/Be7ifaGJxFIpaIjJ5MDgqYN5tEsFeF60FB03i47l2Lk7fisZ3eiuzVePfujDyGL8WdXrsyxN2uVbKFBMoBMoBMoBMoBMoBMoBMoBMoBMoBMoBMoBMoBMoS9Hi47q2L/AB/9DknZNd4dLz9q7+6fYsm7kdrnkAueSaCpLyTm1leiM42n8vLOUz3wnL338ynO3n+UZR5fgAPfdKZ28/yZR5fhLHOBqH0OsPIKic53n8pjKNodJYsXE4KshcSTcflJqT+sfpWE7vTXZ6dQkQEEoKJJAM9fI1x9gQUbobqf6OTqQaDx2vBwoCK/ucGcEHt5tBWldmWJu8GrMxAQEEFB0ti6nAwXYhR37u3NG8jTpAWU7vRXZ8nZ1sDjwlOy0G0SQubCISNyveCA5zgdFDvz0JE5ImsS832GmcOk9Rf8ynUry4Ow0zh0nqL/AJk1HLg7DTOHSeov+ZNRy4Ow0zh0nqL/AJk1HLgOJuPTb305C/5k1GiGobRM0PeIzfYHuDHZr7ASGupoqKGnGr5qTC3t/F0pmjI2/i6UzMg2ji6UzMm18EYqobRBDaI7e+5LEyUfsTjQOANKh2jN5FTVLTRDL7DUfD5PUX/MmqU6IOw1Hw+T1F/zJqk0QdhqPh8nqL/mTVJog7DUfD5PUX/MmqTRD6exvFfHZLVDat1ySbU8vDNxvbeN0gb6ppn1aE1EUiJbK3Q3U70UnUqruYdmeBHWO2zQFpDL7pIiWkB0DySyldXanjaVrE9zC0ZS+KpVEF2x2WSWRkMTS+V7gxjRXK45s2j4KExGbqTAFlZZbNBZm3iIoY4q7VJvi0AF3a6TU+VZN4Z+6W6neik6kSutdUV9oIPMUEoCAgi8NaDQGPA/9UHI4PfmV67MsTd4CiuzKIFECiBRB03i47l2Lk7fisp3eiuz0ihIgi8NaCL41oF8a0Hl8ZeGdzYNtL2upI9m52Uzh8u8vDjDS538KmO+UWnKHNQWrzpQEBBvPEbhrbLHJZXu31nlJblJO0y1c3mfto8VFnaO9tSc4bJvjWqrl8a0C8NaCaoJQEHm9mGxODCMQZaGkPbUxysptkROemtpoKtOQ0GkAiYnJExm0/hXFRhKJx2prLSzQ5kjWOI+8yQih4gXeNX1M5pLGsWLDCsho6BsI76SeK6PMLj0JqhGiW1Ng2wGDB/61ztutRBaZC2jY2nO2JuiuknKeIZFSZzaVrk9jVQsqBdxoLja6UFSAgoeyqCnakHxcPbEbHbHNfarO2R7RdDrz2uu57pLSKitch1lTmiYiXyuxjgrgf8AUWj50zk0wdjHBXA/6i0fOmcmmDsY4K4H/UWj50zk0wnsY4K4J/n2j50zk0wkYsMFcE/z7R86ZyaYessllZExscbQyNjWsa1oAaxrRQNAGYUUJYGyXDkFigNotLnCMOazetLnOc40AA06eYpEZomcnkm41sHHKBaCOKyk/FW0yrzISMamDtVo9Vd1ppk1wdlTB3e2jV+6u600ya4Oyng7vbR6q/J0ppk1wwcNbOcD2uMRWqCeRgcJADZpRRwBF4FpBzOI8qaZNcS+JuzYzwGf0Vr+dTlKM6m69jPAp/RWv50ykzqkWvYzwKbLm/VWvL/OmUmdUi07GeBTeitnzqMpM6s/Auy/AFic82aKWF7w1r/1E5JAygb5xpnTKUxasPr9ljBffy+rPUaZTrg7K+C/CS+rSJpk1wnsr4K8JL6tImmUa6r9hxm4LlljhbNIHSPZE29Z5A2+8hrQToqSBVNMp1w9sI+NQsrJoMpycaC2y0MJo17SdQcCVOU5ZozjPJdUJEBAQEBAQEBAQEBAQEBAQEGosfuEt7ZLKDndJaXZc10XGV8d+TzVerPEnua0isgEYJZlu1zHPSvfKyisWNtQLn1ToPF9/wAaCG2Vu93mdztBzb77yCoWRu+3gz6uIfeQBZW73eDN3vF/eQQbMKP3gyV+rm3oPfIKtyio3g7V31eNv3kFJswuuNwZL31dRP3kFZswvDeDKD9TVT73Ggx7TExjmlzQGkOHaGlclMgcgtX4aaK3vBvyivj1IjuVQxRvc8NAIoCN4/IcoNAD4kF0WVm9NwUI7yXORXXxHnRKxabPdbeZvXsdnDXg1GZ1T5CiHUGAMIi02WC0tzSwxy+IuaCR5DULJvDwWPmwufYYpBljjtDdsH1brwWtcRpo+6P41au6t9mkIpS1hjAFw5aFooD3zdRXqpj3rScP6T5/w8tsKtrxf6w2Fit2c2iG0xWO0Suls0z2wtvuLnQyuNGXXHLdLiG3c2UUpQ181oeilpzyb5VGogICAgICAgICAgICAgICDnTGxbtvwtMK72IQ2UHRRovO5nyP5lpXZjfd8mUspS9HnaMwzVHGpQBzLx30eYaBrPGgpjLKNq+OoAOZuemnLxoKr0eXfx5eJuqmtAvR5N/Hk4m9aCC6PLv48vE3JkpkyoBljvDfx5naBxcaCm/HRwvx5b2gafKgGaPem/Hx70aQePxILNt2t4aBIwb7OBmFDx+JESthkQY5t5hcK0dlqclRT2eRAsoZG/8A7rXAtI0ihyU+KDK22OgG2NyGud2utM+rIiTdEW+aXijhornzHopzINw4kMJ7Zg90BNXWeeRgy543/rGnxVc8fwqlt2tJ7nusJWGO0QyQTNvRyMdG4a2kUyHQeNVWc47L9g9rsEjgY3S2eu8nawlpboElO0d48mqq0iWNqzCzsDwHNardZhExxZHaIZ5H3TcjZE9rzV2YE3aAaykz3FYnN06s2wgICAgICAgICAgICAgICDVGyTE3ui1TWmG3GJssjpix8BkLXvJc6jhI3JUnJTIp1KzWJfM7Bcv2m31N35ynVKNEI7Bkv2m31N35yapNEJ7Bk32m31N35yapNEI7Bk32m31N35yapNEHYMm+02+pv/OTVJog7Bk32m31N35yapNEJ7Bkv2m31N35yapNEL8eIzvsJOPistPbKU1GiF5uI2LThCXyQsHtJTUaIXm4jrNpt1o8ghH+lNUp0Qk4jrLot1o5oflTVJohadiNh0YQmHjjjPUmpGiFBxHM0YRk8sDfnTUaIW3YjdWEj5bKD/8ARNRoh7TF7sHZgtko2908kpYXuLbjQGVutaypp2zstTnUTOa0Rk9coSIIAQSgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg/9k="
                        alt="laptop1"
                        className="h-full w-full object-contain relative"
                      />

                      {product.tag && (
                        <div className="">
                          <h3 className="p-2 absolute top-2 left-2 border-2 bg-[#4c7972] text-white">
                            {product.tag}
                          </h3>
                        </div>
                      )}
                    </div>

                    <div className="p-6">
                      <div className="flex space-x-1.5 mt-4">

                        {Array.from({ length: 5 }, (_, i) => (
                          <span key={i} className={`text-2xl ${i < Math.floor(product.stars) ? 'text-yellow-600' : (i === Math.floor(product.stars) && product.stars % 1 >= 0.5) ? 'relative text-yellow-600 before:content-["★"] before:absolute before:inset-0  before:w-1/2 before:left-0 before:overflow-hidden before:text-gray-300' : 'text-gray-300'}`}>★</span>
                        ))}
                        <p className="text-base text-gray-800 !ml-2">
                          {product.reviews}
                        </p>
                      </div>
                      <div>
                        <h3 className="text-base text-gray-800 mt-2">
                          {product.name.substring(0, 20)}...
                        </h3>
                        <h4 className="text-xl text-blue-700 font-bold mt-4">
                          {product.originalPrice && (
                            <strike className="text-gray-400 mr-2 font-medium">
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
          {/* Pagination */}

          <div className="mt-20 gap-2 flex items-center justify-center">
            <button
              className={`border-2 p-2 rounded-full ${startIndex === 0 ? "border-gray-600" : "border-yellow-600"}`}
              onClick={() => {
                handlePrevious();
                window.scrollTo({ top: 0, behavior: "auto" });
              }
              }
              disabled={startIndex === 0}
            >
              {/* <img src={ArrowLeft} alt="arrow-left" /> */}
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class={`bi bi-arrow-right-short ${startIndex === 0 ? "text-gray-600" : "text-yellow-600"} rotate-180`} viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8" />
              </svg>
            </button>

            {/* Pagination indicator buttons */}

            <div className="flex gap-2">
              {Array.from({ length: Math.ceil(products.length / itemsPerPage) }).map((_, index) => (
                <input
                  key={index}
                  className="join-item btn btn-square"
                  type="radio"
                  name="options"
                  aria-label={`0${index + 1}`}
                  checked={currentPage === index}
                  onChange={() => {
                    setCurrentPage(index);
                    window.scrollTo({ top: 0, behavior: "auto" });
                  }}
                />
              ))}
            </div>
            <button
              className={`border-2 p-2 rounded-full ${endIndex >= products.length ? "border-gray-600" : "border-yellow-600"}`}
              onClick={() => {
                handleNext();
                window.scrollTo({ top: 0, behavior: "auto" });
              }
              }
              disabled={endIndex >= products.length}
            >
              {/* <img src={ArrowRight} alt="arrow-right" /> */}
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class={`bi bi-arrow-right-short ${endIndex >= products.length ? "text-gray-600" : "text-yellow-600"}`} viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8" />
              </svg>
            </button>
          </div>
        </div>
      </div>


      {/* Filters in Phone */}

      <div className="fixed bottom-0 left-0 right-0 md:hidden flex justify-center backdrop-blur p-4 z-40">
        <button
          className="bg-orange-600 text-white py-3 px-10 tracking-widest rounded-lg text-sm font-bold"
          onClick={toggleFilterModal}
        >
          Filters
        </button>
      </div>

      <div
        className={`fixed inset-0 z-50 bg-white p-6 overflow-y-auto transition-transform duration-1000 ease-out transform ${isFilterOpen ? 'translate-y-0' : 'translate-y-full'
          }`}
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold">Filters</h2>
          <button
            className="text-gray-500 hover:text-gray-700"
            onClick={toggleFilterModal}
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
        </div>

        {/* Category */}

        <div>
          <div className="flex justify-between items-center">
            <h3 className="text-base font-semibold mb-2">Category</h3>
            <img
              src="https://t3.ftcdn.net/jpg/03/21/21/26/360_F_321212678_hSKU8jlbFhiBzPEXS7BUS9b89nTygCYD.jpg"
              className="w-5 h-5 items-center justify-center mt-3 block md:hidden"
            />
          </div>
          <div className="">
            {categories.map((category) => (
              <ul key={category.id} className="flex mt-2 gap-2 items-center">
                <input type="radio" name="radio-1" id={category.id} onChange={(e) => console.log(e.target.id)
                } className="radio" />
                <label htmlFor={category.id} className="cursor-pointer text-sm lg:text-base">{category.name}</label>
              </ul>
            ))}
          </div>
        </div>

        <div className="divider my-4"></div>

        {/* Price Range */}

        <div>
          <div className="flex justify-between items-center">
            <h3 className="text-base font-semibold mb-2">Price Range</h3>
            <img
              src="https://t3.ftcdn.net/jpg/03/21/21/26/360_F_321212678_hSKU8jlbFhiBzPEXS7BUS9b89nTygCYD.jpg"
              className="w-5 h-5 items-center justify-center mt-3 block md:hidden"
            />
          </div>
          <div className="" data-aos="fade-up"
            data-aos-duration="500">
            <div>
              <label htmlFor="price" className="opacity-70 block text-black dark:text-white">
                <div className="w-full flex justify-between items-center">
                  <p className="md:text-sm lg:text-base">Max Price</p>
                  <p className="font-bold lg:text-xl">$ {priceValue}</p>
                </div>
              </label>
              <div className="bg-gray-100 rounded-full p-2 flex items-center justify-center">
                <input
                  type="range"
                  name="price"
                  id="price"
                  className="appearance-none w-full bg-yellow-600 h-2 rounded-full my-2"
                  min="0"
                  max="10000"
                  value={priceValue}
                  step="100"
                  onChange={handleRangeChange}
                />
              </div>
            </div>

            {priceRanges.map((priceRange) => (
              <ul key={priceRange.id} className="flex mt-2 gap-2 items-center">
                <input
                  type="radio"
                  name="priceRange"
                  id={priceRange.id}
                  checked={selectedRange.length > 1 ? selectedRange[1].id === priceRange.id : selectedRange[0].id === priceRange.id}
                  onChange={() => handleRangeSelect(priceRange)}
                  className="radio focus:border-none"
                />
                <label htmlFor={priceRange.id} className="cursor-pointer text-sm lg:text-base">{priceRange.name}</label>
              </ul>
            ))}
          </div>
        </div>

        <div className="divider my-4"></div>

        {/* Popular Brands */}

        <div>
          <div className="flex justify-between items-center">
            <h3 className="text-base font-semibold mb-2">Popular Brands</h3>
            <img
              src="https://t3.ftcdn.net/jpg/03/21/21/26/360_F_321212678_hSKU8jlbFhiBzPEXS7BUS9b89nTygCYD.jpg"
              className="w-5 h-5 items-center justify-center mt-3 block md:hidden"
            />
          </div>
          <div className="gap-2 mt-2">
            <div className="gap-2 grid grid-cols-1 xl:grid-cols-2 md:grid-cols-1 md:mt-3">
              {brands.map((brand) => (
                <div key={brand.id} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={brand.isChecked}
                    name={brand.name}
                    id={brand.id}
                    className="checkbox w-5 h-5 lg:w-6 lg:h-6"
                    onChange={handleBrandsStatus}
                  />
                  <label htmlFor={brand.id} className="cursor-pointer lg:text-base text-sm">{brand.name}</label>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="divider my-4"></div>

        {/* Popular Tags */}

        <div>
          <div className="flex justify-between items-center">
            <h3 className="text-base font-semibold mb-2">Popular Tags</h3>
            <img
              src="https://t3.ftcdn.net/jpg/03/21/21/26/360_F_321212678_hSKU8jlbFhiBzPEXS7BUS9b89nTygCYD.jpg"
              className="w-5 h-5 items-center justify-center mt-3 block md:hidden"
            />
          </div>
          <div className="" >
            <div className="gap-2 grid grid-cols-3 mt-3">
              {tags.map((brand) => (
                <div
                  key={brand.id}
                  className={`flex gap-2 border-2 py-2 md:py-2 xl:p-2 rounded-md cursor-pointer ${selectedTagIds.includes(brand.id) ? 'bg-black text-white' : 'border-gray-400'
                    }`}
                  onClick={() => handleTagClick(brand.id)}
                >
                  <h3 className="px-1 lg:px-2 font-bold text-sm lg:text-md">
                    {brand.name}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="divider my-4"></div>
        <div className="text-center mt-5">
          <button className="bg-orange-500 text-white py-2 px-5 rounded-lg hover:bg-orange-600"
          onClick={toggleFilterModal}
          >
            Apply
          </button>
        </div>
      </div>


      <div className="divider my-4"></div>


      {/* Add an overlay when the modal is open */}
      {isFilterOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleFilterModal}
        ></div>
      )}
    </div>
  );
};

export default ProductListing;
