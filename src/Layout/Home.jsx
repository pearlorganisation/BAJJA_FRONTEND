import React from "react";

const Home = () => {
  return (
    <>
      {/* <div class="max-w-6xl mx-auto p-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="md:col-span-2 bg-white shadow rounded-lg p-6 flex items-center">
          <div class="w-1/2">
            <h2 class="text-sm text-blue-500 uppercase font-semibold">
              The Best Place to Play
            </h2>
            <h1 class="text-3xl font-bold text-gray-800 mb-4">Xbox Consoles</h1>
            <p class="text-gray-600 mb-6">
              Save up to 50% on select Xbox games. Get 3 months of PC Game Pass
              for $2 USD.
            </p>
            <button class="bg-orange-500 text-white py-2 px-6 rounded hover:bg-orange-600">
              Shop Now
            </button>
          </div>
          <div class="w-1/2 text-right">
            <div class="inline-block relative">
              <div class="h-48 w-48 bg-gray-300 rounded-lg flex items-center justify-center">
                <span class="text-gray-500 text-lg">Image Placeholder</span>
              </div>
              <span class="absolute top-0 right-0 bg-blue-500 text-white py-1 px-3 rounded-full">
                $299
              </span>
            </div>
          </div>
        </div>

        <div class="grid grid-cols-1 gap-8">
          <div class="bg-white shadow rounded-lg p-6">
            <div class="flex justify-between items-center mb-4">
              <h2 class="text-sm text-yellow-500 uppercase font-semibold">
                Summer Sales
              </h2>
              <span class="bg-yellow-500 text-white  py-1 px-3 rounded-full">
                29% Off
              </span>
            </div>

            <h1 class="text-xl font-bold text-gray-800 mb-4">
              New Google Pixel 6 Pro
            </h1>

            <div class="h-48 w-full bg-gray-300 rounded-lg flex items-center justify-center mb-4">
              <span class="text-gray-500 text-lg">Image Placeholder </span>
            </div>

            <button class="bg-orange-500 text-white py-2 px-6 rounded hover:bg-orange-600">
              Shop Now
            </button>
          </div>

          <div class="bg-white shadow rounded-lg p-6">
            <h1 class="text-xl font-bold text-gray-800 mb-4">
              Xiaomi FlipBuds Pro
            </h1>
            <span class="block text-blue-500 font-semibold mb-4">$299 USD</span>
            <div class="h-48 w-full bg-gray-300 rounded-lg flex items-center justify-center mb-4">
              <span class="text-gray-500 text-lg">Image Placeholder</span>
            </div>
            <button class="bg-orange-400 text-white py-2 px-6 rounded hover:bg-orange-600">
              Shop Now
            </button>
          </div>
        </div>
      </div> */}
      <div className="grid md:grid-cols-[60%_auto] ">
        <div>
          <img src="banner.jpg" />
        </div>
        <div>
          <div>
            <img src="banner2.jpg" />
          </div>
          <div>
            <img src="banner3.jpg" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
