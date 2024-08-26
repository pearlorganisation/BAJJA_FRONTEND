const ForgotPassword = () => {
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

            <h1 className="font-bold text-lg">Set Password</h1>
            <h3>Enter your email to reset password</h3>
          </div>

          <div className="flex flex-col">
            <form>
              <div>
                <div className="mt-2">
                  <label>Email Address</label>
                  <input
                    type="text"
                    placeholder="Email Address"
                    className="w-full pl-12 mt-2 border-black pr-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                  />
                </div>
              </div>
            </form>

            <button className="w-full  flex items-center border-2 rounded-full bg-green-600 justify-center gap-x-3 py-2.5 mt-5 text-sm font-medium hover:bg-gray-800 hover:text-white duration-150 active:bg-gray-100">
              Set Password
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ForgotPassword;
