import FileUpload from "../Drag_and_DropFiles/DragAndDropFiles";

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
            <h1 className="md:text-4xl text-lg font-bold">NEW ADS</h1>
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
            <h1 className="md:text-2xl font-bold">TYPE</h1>

            <select className="select select-ghost w-full mt-3 shadow-xl border-2 border-gray-100">
              <option disabled selected>
                Choose Customer Type
              </option>
              <option>Buyer</option>
              <option>Seller</option>
            </select>
          </div>

          <div className="mt-6" data-aos="fade-up"
            data-aos-duration="900">
            <h1 className="md:text-2xl font-bold ">CATEGORIES</h1>

            <select className="select select-ghost w-full mt-3 shadow-xl border-2 border-gray-100">
              <option disabled selected>
                Choose Category
              </option>

              {categories.map((category) => (
                <option key={category.id}>{category.name}</option>
              ))}
            </select>
          </div>

          <div className="mt-6" data-aos="fade-up"
            data-aos-duration="700">
            <h1 className="md:text-2xl font-bold">SUB CATEGORIES</h1>

            <select className="select select-ghost w-full mt-3 shadow-xl border-2 border-gray-100">
              <option disabled selected>
                Choose Sub Category
              </option>

              {categories.map((category) => (
                <option key={category.id}>{category.name}</option>
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
                className="input input-bordered md:w-[40%] w-full shadow-xl border-2 border-gray-100"
              />
              <input
                type="number"
                placeholder="Maximum Price..."
                className="input input-bordered md:w-[40%] w-full shadow-xl border-2 border-gray-100"
              />
            </div>

            <div className="items-center justify-center w-full mt-6" data-aos="fade-up"
              data-aos-duration="900">
              <h1 className="font-bold md:text-2xl">Image Upload</h1>
              {/* <label
                htmlFor="dropzone-file"
                className="flex flex-col mt-4 items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50  hover:bg-gray-100 shadow-xl"
              >
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <svg
                    className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 16"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                    />
                  </svg>
                  <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                    <span className="font-semibold">Click to upload</span> or
                    drag and drop
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    SVG, PNG, JPG or GIF (MAX. 800x400px)
                  </p>
                </div>
                <input
                  id="dropzone-file"
                  type="file"
                  multiple="true"
                  className="hidden"
                />
              </label> */}
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
