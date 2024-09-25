import { useEffect, useState } from "react";
import FileUpload from "../Drag_and_DropFiles/DragAndDropFiles";
import axios from "axios";
import { Base_Url } from "../../../API_Base_Url/Base_Url";
import Loading from "../../../components/LoadingData/Loading";


const CreateAd = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const [typeOfCategory, setTypeOfCategory] = useState('');
  const [fetchedDategoryData, setFetchedCategoryData] = useState('');

  const [category, setCategory] = useState('');
  const [selectCategory, setSelectCategory] = useState('');

  const [subCategory, setSubCategory] = useState('');
  const [selectSubCategory, setSelectSubCategory] = useState('');

  const [minPrice, setMinPrice] = useState(50);
  const [maxPrice, setMaxPrice] = useState(1000);

  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);



  const token = localStorage.getItem("token");

  const handleCategory_ServiceData = (typeOfCategory) => {
    const category = fetchedDategoryData && fetchedDategoryData.filter((item) => item.type === typeOfCategory);
    setCategory(category);
  }

  const fetchData = async () => {
    try {
      const res = await axios.get(`${Base_Url}/v1/categories`);
      setFetchedCategoryData(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  const handlePost = async (e) => {
    e.preventDefault();

    setLoading(true);

    if (!photos.length) {
      console.error("No photos selected");
      setLoading(false);
      return;
    }

    let formdata = new FormData();
    formdata.append("product_name", title);
    formdata.append("type", typeOfCategory);
    formdata.append("category", selectCategory);
    formdata.append("sub_category", selectSubCategory);
    formdata.append("description", description);
    formdata.append("minprice", minPrice);
    formdata.append("maxprice", maxPrice);

    photos.forEach((photo, index) => {
      formdata.append(`photos`, photo);
    });

    try {
      const res = await axios.post(`${Base_Url}/v1/product-Posts`, formdata, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("Post successful", res);
    } catch (error) {
      console.error('Error posting the form: ', error.response ? error.response.data : error.message);
    } finally {
      setLoading(false);
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
      const subCategory = fetchedDategoryData && fetchedDategoryData.find(item => item.name === selectCategory)
      setSubCategory(subCategory.sub_categories);
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
        {loading && <Loading />}
        <form className="max-w-[95%] w-full text-gray-600 border-2 p-8 bg-white border-gray-400 rounded-xl items-center"
          onSubmit={handlePost}
        >
          <div className="" data-aos="fade-up"
            data-aos-duration="500">
            <h1 className="md:text-2xl text-lg font-bold">ADD NEW POST</h1>
          </div>

          <div className="mt-10" data-aos="fade-up"
            data-aos-duration="600">
            <h1 className="md:text-xl text-sm font-bold">TITLE </h1>

            <input
              type="text"
              placeholder="Enter your title here..."
              className="input input-bordered w-full mt-3"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
            />
          </div>

          <div className="mt-6" data-aos="fade-up"
            data-aos-duration="700">
            <h1 className="md:text-xl text-base font-bold">DESCRIPTION </h1>

            <textarea
              className="textarea textarea-ghost w-full h-[200px] mt-3 shadow-xl border-2 border-gray-100"
              placeholder="Enter your description here..."
              onChange={(e) => setDescription(e.target.value)}
              value={description}
            ></textarea>
          </div>

          <div className="mt-6" data-aos="fade-up"
            data-aos-duration="800">
            <h1 className="md:text-xl font-bold">TYPE OF CATEGORY</h1>

            <select className="select select-ghost w-full mt-3 shadow-xl border-2 border-gray-100"
              onChange={(e) => {
                setCategory('');
                setTypeOfCategory(e.target.value);
              }}
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
            <h1 className="md:text-xl font-bold ">CATEGORIES</h1>

            <select className="select select-ghost w-full mt-3 shadow-xl border-2 border-gray-100"
              onChange={(e) => setSelectCategory(e.target.value)}
            >
              <option disabled selected>
                Choose Category
              </option>

              {category && category.map((category, index) => (
                <option key={index} value={category.name}>{category.name}</option>
              ))}
            </select>
          </div>

          <div className="mt-6" data-aos="fade-up"
            data-aos-duration="700">
            <h1 className="md:text-xl font-bold">SUB CATEGORIES</h1>

            <select className="select select-ghost w-full mt-3 shadow-xl border-2 border-gray-100"
              onChange={(e) => setSelectSubCategory(e.target.value)}
            >
              <option disabled selected>
                Choose Sub Category
              </option>

              {subCategory && subCategory.map((category, index) => (
                <option key={index} value={category.name}>{category.name}</option>
              ))}
            </select>
          </div>

          <div className="mt-6" data-aos="fade-up"
            data-aos-duration="800">
            <h1 className="md:text-xl font-bold ">PRICE</h1>

            <div className="flex flex-col md:flex-row gap-5 justify-evenly mt-3">
              <input
                type="number"
                placeholder="Minimum Price..."
                min={20}
                value={minPrice}
                max={1000}
                onChange={(e) => setMinPrice(Number(e.target.value))}
                className="input input-bordered md:w-[40%] w-full shadow-xl border-2 border-gray-100"
              />
              <input
                type="number"
                placeholder="Maximum Price..."
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                min={minPrice}
                max={1000}
                className="input input-bordered md:w-[40%] w-full shadow-xl border-2 border-gray-100"
              />
            </div>

            <div className="items-center justify-center w-full mt-6" data-aos="fade-up"
              data-aos-duration="900">
              <h1 className="font-bold md:text-2xl">Image Upload</h1>
              <FileUpload setPhotos={setPhotos} />
            </div>
          </div>

          <div className="flex items-center flex-col mt-6" data-aos="fade-up"
            data-aos-duration="500">
            <button className="w-[40%] px-4 py-2 text-white font-medium bg-black hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150">
              Upload
            </button>
          </div>
        </form>
      </main>
    </div>
  );
};

export default CreateAd;
