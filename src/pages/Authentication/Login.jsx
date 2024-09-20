import { Link } from "react-router-dom";
import Loading from "../../components/LoadingData/Loading";
import { useState } from "react";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const fatchLoading = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000)
  }
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
          <div className="text-center" data-aos="fade-up"
            data-aos-duration="500">
            <img
              src="https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1724630400&semt=ais_hybrid"
              width={150}
              className="mx-auto"
            />
          </div>

          <div className="flex  flex-col">
            <form>
              <div>
                <div className="mt-2 " data-aos="fade-up"
                  data-aos-duration="600">
                  <label className="text-black ">Email Address</label>
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full pl-12 pr-3 py-2  border-black text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                  />
                </div>

                <div className="mt-4" data-aos="fade-up"
                  data-aos-duration="700">
                  <label className="text-black ">Password</label>
                  <input
                    type="password"
                    placeholder="Password"
                    className="w-full pl-12 pr-3 py-2 border-black text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                  />
                </div>
              </div>
            </form>

            <Link to={`/forgot`} data-aos="fade-up"
              data-aos-duration="800">
              <h5 className="text-green-600 mt-3">Forgot Password ?</h5>
            </Link>

            <div className="flex justify-center items-center" data-aos="fade-up"
              data-aos-duration="900">
              <button className="w-full flex items-center  rounded-full bg-green-600 justify-center gap-x-3 py-2.5 mt-5 text-sm font-medium hover:bg-gray-800 hover:text-white duration-150 active:bg-gray-100"
                onClick={fatchLoading}
              >
                Login
              </button>
            </div>

            <div className="flex items-center justify-center" data-aos="fade-up"
              data-aos-duration="1000">
              <p className="mt-6 text-sm">Sign up with Facebook or Google ?</p>
            </div>

            <div className="flex items-center justify-center" data-aos="fade-up"
              data-aos-duration="1000">
              <p className="mt-1">
                <span className="text-green-600 text-sm"> Create Password</span>
              </p>
            </div>
          </div>
        </div>
      </main>
      {loading &&
        <Loading />}
    </div>
  );
};

export default Login;
