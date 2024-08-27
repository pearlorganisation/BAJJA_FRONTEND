import { useNavigate } from "react-router";

const Auth = () => {
  const navigate = useNavigate();

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

          <div className="flex items-center flex-col">
            <button
              className="w-[80%] px-4 py-2 text-white font-medium bg-green-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150"
              onClick={() => navigate("/register")}
            >
              Sign up
            </button>

            <button
              className="mt-8 w-[80%] border-2 px-4 py-2 text-green-600 bg-white font-medium border-green-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150"
              onClick={() => navigate("/login")}
            >
              Login
            </button>

            <p className="mt-6">
              By signing up you agree to our{" "}
              <span className="text-green-600"> Terms of use </span> and
              <span className="text-green-600"> Privacy Policy</span>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Auth;
