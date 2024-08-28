import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import ArrowRight from "../../assets/ArrowRight.png";

const products = [
  {
    id: 1,
    tag: "New Arrival",
    tagColor: "#aced1a",
    image: "https://readymadeui.com/images/laptop2.webp",
    name: " HP",
    price: "600",
    stars: 5,
    reviews: "1203",
  },
  {
    id: 2,
    tag: "New Arrival",
    tagColor: "#aced1a",
    image: "https://readymadeui.com/images/laptop2.webp",
    name: " HP",
    price: "600",
    stars: 5,
    reviews: "1203",
  },
  {
    id: 3,
    tag: "New Arrival",
    tagColor: "#aced1a",
    image: "https://readymadeui.com/images/laptop2.webp",
    name: " HP",
    price: "600",
    stars: 5,
    reviews: "1203",
  },
  {
    id: 4,
    tag: "New Arrival",
    tagColor: "#aced1a",
    image: "https://readymadeui.com/images/laptop2.webp",
    name: " HP",
    price: "600",
    stars: 5,
    reviews: "1203",
  },
  {
    id: 5,
    tag: "New Arrival",
    tagColor: "#aced1a",
    image: "https://readymadeui.com/images/laptop2.webp",
    name: " HP",
    price: "600",
    stars: 5,
    reviews: "1203",
  },
  {
    id: 6,
    tag: "New Arrival",
    tagColor: "#aced1a",
    image: "https://readymadeui.com/images/laptop2.webp",
    name: " HP",
    price: "600",
    stars: 5,
    reviews: "1203",
  },
  {
    id: 7,
    tag: "New Arrival",
    tagColor: "#aced1a",
    image: "https://readymadeui.com/images/laptop2.webp",
    name: " HP",
    price: "600",
    stars: 5,
    reviews: "1203",
  },
  {
    id: 8,
    tag: "New Arrival",
    tagColor: "#aced1a",
    image: "https://readymadeui.com/images/laptop2.webp",
    name: " HP",
    price: "600",
    stars: 5,
    reviews: "1203",
  },
  {
    id: 9,
    tag: "New Arrival",
    tagColor: "#aced1a",
    image: "https://readymadeui.com/images/laptop2.webp",
    name: " HP",
    price: "600",
    stars: 5,
    reviews: "1203",
  },
  {
    id: 10,
    tag: "New Arrival",
    tagColor: "#aced1a",
    image: "https://readymadeui.com/images/laptop2.webp",
    name: " HP",
    price: "600",
    stars: 5,
    reviews: "1203",
  },
];

const ProductCategorySection = () => {
  return (
    <div>
      <div className="w-[60px] h-[60px] flex rounded-full bg-black absolute top-16 left-4">
        <img
          src={ArrowRight}
          className="w-[30px] h-[30px]  items-center justify-center mt-3 ml-2"
        />
      </div>
      <Swiper
        spaceBetween={50}
        slidesPerView={5}
        className="px-20 py-12 w-[80%]"
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <div className="bg-white mt-2 p-4 overflow-hidden cursor-pointer border-2 border-gray-400 rounded-lg hover:shadow-lg transition-all relative">
              <div className="w-full h-[50px] overflow-hidden mx-auto aspect-w-16 aspect-h-8 p-2">
                <img
                  src="https://readymadeui.com/images/laptop2.webp"
                  alt="laptop1"
                  className="h-full w-full object-contain relative"
                />
              </div>

              <h3>{product.name}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="w-[60px] h-[60px] rounded-full bg-black absolute right-4 top-16">
        <img
          src={ArrowRight}
          className="w-[30px] h-[30px]  items-center justify-center mt-3 ml-2"
        />
      </div>
    </div>
  );
};

export default ProductCategorySection;
