import { useEffect, useState } from "react";
import FileUpload from "../Drag_and_DropFiles/DragAndDropFiles";
import axios from "axios";
import { Base_Url } from "../../../API_Base_Url/Base_Url";

const categories = [
  {
    id: 1,
    name: "Electronics",
  },
  {
    id: 2,
    name: "Clothing and Accessories",
  },
  {
    id: 3,
    name: "Home & Garden",
  },
  {
    id: 4,
    name: "Health and Beauty",
  },
  {
    id: 5,
    name: "Sports & Outdoors",
  },
  {
    id: 6,
    name: "Toys & Games",
  },
];

const CreateAd = () => {
  const [typeOfCategory, setTypeOfCategory] = useState('');
  const [fetchedDategoryData, setFetchedCategoryData] = useState('');
  const [category, setCategory] = useState('');
  const [selectCategory, setSelectCategory] = useState('');
  const [subCategory, setSubCategory] = useState('');
  const [selectSubCategory, setSelectSubCategory] = useState('');
  const [minPrice, setMinPrice] = useState(20);
  const [maxPrice, setMaxPrice] = useState(1000);

  const handleCategory_ServiceData = (typeOfCategory) => {
    const category = fetchedDategoryData && fetchedDategoryData.filter((item) => item.type === typeOfCategory);
    setCategory(category);
    console.log(category);
  }

  const fetchData = async () => {
    try {
      const res = await axios.get(`${Base_Url}/v1/categories`);
      setFetchedCategoryData(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, [])
  useEffect(() => {
    if (typeOfCategory) {
      handleCategory_ServiceData(typeOfCategory);
    }
  }, [typeOfCategory])
  useEffect(() => {
    if (selectCategory) {
      const subCategory = fetchedDategoryData && fetchedDategoryData.find(item => item._id === selectCategory)
      setSubCategory(subCategory.sub_categories);
      console.log(subCategory.sub_categories);
    }
  }, [selectCategory])
  return (
    <div>
      <main
        className="w-full flex flex-col items-center justify-center p-8 "
        style={{
          background:
            "url(https://images.pexels.com/photos/139764/pexels-photo-139764.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
        }}
      >
        <div className="max-w-[95%] w-full text-gray-600 border-2 p-8 bg-white border-gray-400 rounded-xl items-center">
          <div className="" data-aos="fade-up"
            data-aos-duration="500">
            <h1 className="md:text-4xl text-lg font-bold">ADD NEW POST</h1>
          </div>

          <div className="mt-10" data-aos="fade-up"
            data-aos-duration="600">
            <h1 className="md:text-2xl text-sm font-bold">TITLE </h1>

            <input
              type="text"
              placeholder="Enter your title here..."
              className="input input-bordered w-full mt-3"
            />
          </div>

          <div className="mt-6" data-aos="fade-up"
            data-aos-duration="700">
            <h1 className="md:text-2xl text-base font-bold">DESCRIPTION </h1>

            <textarea
              className="textarea textarea-ghost w-full h-[200px] mt-3 shadow-xl border-2 border-gray-100"
              placeholder="Enter your description here..."
            ></textarea>
          </div>

          <div className="mt-6" data-aos="fade-up"
            data-aos-duration="800">
            <h1 className="md:text-2xl font-bold">TYPE OF CATEGORY</h1>

            <select className="select select-ghost w-full mt-3 shadow-xl border-2 border-gray-100"
              onChange={(e) => setTypeOfCategory(e.target.value)}
            >
              <option disabled selected>
                Choose Category Type
              </option>
              <option value="Goods">Goods</option>
              <option value="Services">Services</option>
            </select>
          </div>

          <div className="mt-6" data-aos="fade-up"
            data-aos-duration="900">
            <h1 className="md:text-2xl font-bold ">CATEGORIES</h1>

            <select className="select select-ghost w-full mt-3 shadow-xl border-2 border-gray-100"
              onChange={(e) => setSelectCategory(e.target.value)}
            >
              <option disabled selected>
                Choose Category
              </option>

              {category && category.map((category, index) => (
                <option key={index} value={category._id}>{category.name}</option>
              ))}
            </select>
          </div>

          <div className="mt-6" data-aos="fade-up"
            data-aos-duration="700">
            <h1 className="md:text-2xl font-bold">SUB CATEGORIES</h1>

            <select className="select select-ghost w-full mt-3 shadow-xl border-2 border-gray-100"
              onChange={(e) => setSelectSubCategory(e.target.value)}
            >
              <option disabled selected>
                Choose Sub Category
              </option>

              {subCategory && subCategory.map((category, index) => (
                <option key={index} value={category._id}>{category.name}</option>
              ))}
            </select>
          </div>

          <div className="mt-6" data-aos="fade-up"
            data-aos-duration="800">
            <h1 className="md:text-2xl font-bold ">PRICE</h1>

            <div className="flex flex-col md:flex-row gap-5 justify-evenly mt-3">
              <input
                type="number"
                placeholder="Minimum Price..."
                min={20}
                value={minPrice}
                max={1000}
                onChange={(e) => setMinPrice(e.target.value)}
                className="input input-bordered md:w-[40%] w-full shadow-xl border-2 border-gray-100"
              />
              <input
                type="number"
                placeholder="Maximum Price..."
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
                min={minPrice}
                max={1000}
                className="input input-bordered md:w-[40%] w-full shadow-xl border-2 border-gray-100"
              />
            </div>

            <div className="items-center justify-center w-full mt-6" data-aos="fade-up"
              data-aos-duration="900">
              <h1 className="font-bold md:text-2xl">Image Upload</h1>
              <FileUpload />
            </div>
          </div>

          <div className="flex items-center flex-col mt-6" data-aos="fade-up"
            data-aos-duration="500">
            <button className="w-[40%] px-4 py-2 text-white font-medium bg-black hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150">
              Upload
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CreateAd;
