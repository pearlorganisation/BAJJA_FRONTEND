import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { USER_ROLE } from "../../redux/actionTypes/actionTypes";

const Auth = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleButtonClick = (role) => {
    dispatch({
      type:USER_ROLE,
      userRole:role
    })
    setShowModal(false);
    navigate("/register")
  };

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

          <div className="flex items-center flex-col">
            <button
              className="w-[65%] px-4 py-2 text-white font-medium bg-green-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150"
              // onClick={() => navigate("/register")}  
              data-aos="fade-up"
              data-aos-duration="600"
              onClick={() => setShowModal(true)}
            >
              Sign up
            </button>

            <button
              className="mt-8 w-[65%] border-2 px-4 py-2 text-green-600 bg-white font-medium border-green-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150"
              onClick={() => navigate("/login")} data-aos="fade-up"
              data-aos-duration="700"
            >
              Login
            </button>

            <p className="mt-6 w-[65%] text-center" data-aos="fade-up"
              data-aos-duration="800">
              By signing up you agree to our{" "}
              <span className="text-green-600"> Terms of use </span> and
              <span className="text-green-600"> Privacy Policy</span>
            </p>
          </div>
        </div>
        {showModal && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-40"
            onClick={handleCloseModal}
          >
            <div
              className="bg-white w-80 h-80 p-6 rounded-lg shadow-lg relative"
              onClick={(e) => e.stopPropagation()}
              data-aos="fade-up"
              data-aos-duration="800"
            >
              <button
                onClick={handleCloseModal}
                className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
              >
                &times;
              </button>
              <div className="flex items-center justify-center w-full gap-3 h-full">
                <div className="w-30 flex flex-col gap-3">
                  <img
                    className="w-full border-black border-2 rounded-2xl"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ_I0yRHoU51VL8xCTnhjc_MOFY1WJKX7vEQ&s" alt="buyer" />
                  <button
                    onClick={() => handleButtonClick('Buyer')}
                    className="px-4 py-2 bg-green-500 text-white rounded-md mr-2"
                  >
                    Buyer
                  </button>
                </div>
                <div className="w-30 flex flex-col gap-3">
                  <img
                    className="w-full border-black border-2 rounded-2xl"
                    src="data:image/jpeg;base64,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"
                    alt="seller" />
                  <button
                    onClick={() => handleButtonClick('Seller')}
                    className="px-4 py-2 bg-red-500 text-white rounded-md"
                  >
                    Seller
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Auth;
