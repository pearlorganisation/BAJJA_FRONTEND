import { Link, useNavigate } from "react-router-dom";
import Loading from "../../components/LoadingData/Loading";
import { useState } from "react";
import axios from "axios";
import { Base_Url } from "../../API_Base_Url/Base_Url";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    setLoading(true);
    try {
      const res = await axios.post(`${Base_Url}/v1/auth/login`, {
        email: email,
        password: password
      });


      if (res.status === 200) {

        setMessage('Login successful!');
        localStorage.setItem("token", res.data.api_key);
        navigate('/');
      } else if (res.status === 201) {
        setMessage('Login successful and resource created!');
        console.log('Created:', res.data);
      } else {
        setMessage('Unexpected response');
      }
    } catch (error) {
      if (error.response) {

        if (error.response.status === 401) {
          setMessage('Invalid email or password');
        } else if (error.response.status === 400) {
          setMessage('Bad request, please check your input');
        } else {
          setMessage(`Error: ${error.response.data.message || 'Something went wrong'}`);
        }
        console.log('Error response:', error.response);
      } else {

        setMessage('Network error, please try again');
        console.log('Error:', error);
      }
    } finally {
      setLoading(false);
    }
  };


  const fatchLoading = (e) => {
    e.preventDefault();
    handleLogin();
    console.log(email, " ", password);
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
          {message && <p>{message}</p>}
          <div className="flex  flex-col">
            <form onSubmit={(e) => fatchLoading(e)}>
              <div>
                <div className="mt-2 " data-aos="fade-up"
                  data-aos-duration="600">
                  <label className="text-black ">Email Address</label>
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full pl-12 pr-3 py-2  border-black text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    required
                  />
                </div>

                <div className="mt-4" data-aos="fade-up"
                  data-aos-duration="700">
                  <label className="text-black ">Password</label>
                  <input
                    type="password"
                    placeholder="Password"
                    className="w-full pl-12 pr-3 py-2 border-black text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    required
                  />
                </div>
              </div>
              <Link to={`/forgot`}>
                <h5 className="text-green-600 mt-3" data-aos="fade-up"
                  data-aos-duration="800">Forgot Password ?</h5>
              </Link>

              <div className="flex justify-center items-center" data-aos="fade-up"
                data-aos-duration="900">
                <button className="w-full flex items-center  rounded-full bg-green-600 justify-center gap-x-3 py-2.5 mt-5 text-sm font-medium hover:bg-gray-800 hover:text-white duration-150 active:bg-gray-100">
                  Login
                </button>
              </div>
            </form>


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
      {loading && <Loading />}
    </div>
  );
};

export default Login;
