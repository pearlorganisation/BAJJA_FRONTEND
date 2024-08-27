import PhoneInput from "./PhoneInput";

const Register = () => {
  return (
    <div>
      <main
        className="w-full h-screen flex flex-col items-center justify-center p-8 "
        style={{
          background:
            "url(https://c8.alamy.com/comp/JEYCWY/geometric-triangle-shapes-full-screen-blue-background-JEYCWY.jpg)",
        }}
      >
        <div className="max-w-[600px] w-full text-gray-600 border-2 p-8 bg-white border-gray-400 rounded-xl items-center">
          <div className="text-center">
            <img
              src="https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1724630400&semt=ais_hybrid"
              width={150}
              className="mx-auto"
            />
          </div>

          <div className="flex flex-col">
            <form>
              <div>
                <div className="mt-2">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="w-full pl-12 pr-3 py-2 border-black text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                  />
                </div>
                <div className="mt-2">
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="w-full pl-12 pr-3 border-black py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                  />
                </div>
                <div className="mt-2">
                  <input
                    type="text"
                    placeholder="Email Address"
                    className="w-full pl-12 border-black pr-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                  />
                </div>

                <div className="relative mt-2  border-black text-gray-500 rounded-xl">
                  <div className="absolute inset-y-0 left-3 my-auto h-6 flex items-center border-r  pr-2">
                    <select className="text-sm bg-transparent outline-none rounded-lg h-full">
                      <option>
                        <svg
                          className="w-6 h-6 text-red-500 absolute left-3 inset-y-0 my-auto"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                          />
                        </svg>
                        +91
                      </option>
                      <option>+1</option>
                      <option>+3</option>
                    </select>
                  </div>
                  <input
                    type="number"
                    placeholder="Phone Number"
                    className="w-full pl-[4.5rem] pr-3 py-2 appearance-none bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                  />
                </div>

                <div className="mt-2">
                  <input
                    type="text"
                    placeholder="Password"
                    className="w-full pl-12 border-black pr-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                  />
                </div>

                <div className="mt-2">
                  <input
                    type="number"
                    placeholder="Zip Code"
                    className="w-full pl-12 border-black pr-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                  />
                </div>
              </div>
            </form>
            <p className="mt-6 text-md">
              By clicking below you agree to our
              <span className="text-green-600"> Terms of use </span> and
              <span className="text-green-600"> Privacy Policy</span>
            </p>

            <button className="w-full flex items-center border-2 rounded-full bg-green-600 justify-center gap-x-3 py-2.5 mt-5 text-sm font-medium hover:bg-gray-800 hover:text-white duration-150 active:bg-gray-100">
              Create Account
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Register;
