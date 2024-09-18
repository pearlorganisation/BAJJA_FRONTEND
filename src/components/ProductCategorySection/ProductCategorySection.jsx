import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import ArrowRight from '../../assets/ArrowRight.png';
import ArrowLeft from '../../assets/ArrowLeft.png';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import './ProductCategorySection.css';

const products = [
  { id: 1, image: "https://readymadeui.com/images/laptop2.webp", name: "HP" },
  { id: 2, image: "https://readymadeui.com/images/laptop2.webp", name: "HP" },
  { id: 3, image: "https://readymadeui.com/images/laptop2.webp", name: "HP" },
  { id: 4, image: "https://readymadeui.com/images/laptop2.webp", name: "HP" },
  { id: 5, image: "https://readymadeui.com/images/laptop2.webp", name: "HP" },
  { id: 6, image: "https://readymadeui.com/images/laptop2.webp", name: "HP" },
  { id: 7, image: "https://readymadeui.com/images/laptop2.webp", name: "HP" },
  { id: 8, image: "https://readymadeui.com/images/laptop2.webp", name: "HP" },
  { id: 9, image: "https://readymadeui.com/images/laptop2.webp", name: "HP" },
  { id: 10, image: "https://readymadeui.com/images/laptop2.webp", name: "HP" },
];

const ProductCategorySection = ({ swiperWidth, showItem, margin }) => {
  const swiper = useRef(null)
  return (
    <div className="relative text-start" data-aos="fade-up"
      data-aos-duration="1000">

      {/* <div
        className="w-[40px] h-[40px] flex justify-center items-center rounded-full bg-black absolute top-1/2 left-4 z-10 cursor-pointer transform -translate-y-1/2"
       
      >
        <img src={ArrowLeft} className="w-[30px] h-[30px]" alt="Previous" />
      </div> */}

      <Swiper
        spaceBetween={10}
        slidesPerView={showItem}
        modules={[Navigation]}

        navigation={true}
        slidesPerGroup={1}

        className={`py-5 w-[${swiperWidth}%] m-0`}
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <div className="bg-white mt-2 p-2 text-center overflow-hidden cursor-pointer border-2 border-gray-400 rounded-lg hover:shadow-lg transition-all relative">
              <div className="w-full md:h-20  overflow-hidden mx-auto aspect-w-16 aspect-h-8 p-0">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-contain"
                />
              </div>
              <h3>{product.name}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* <div
        className="w-[40px] h-[40px] flex justify-center items-center rounded-full bg-black absolute top-1/2 right-4 z-10 cursor-pointer transform -translate-y-1/2"
       
      >
        <img src={ArrowRight} className="w-[30px] h-[30px]" alt="Next" />
      </div> */}
    </div>
  );
};

export default ProductCategorySection;
