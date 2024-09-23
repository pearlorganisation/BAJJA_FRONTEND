import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Base_Url } from '../../../API_Base_Url/Base_Url'
import { useNavigate } from 'react-router';

const UserDetails = () => {
  const [userDetails, setUserDetails] = useState('');
  const navigate = useNavigate();
  const getUserData = async () => {
    try {
      const token = localStorage.getItem("token");

      if (token) {
        const res = await axios.get(`${Base_Url}/v1/user/profile`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUserDetails(res.data.user);
        console.log(res.data.user);
      } else {
        console.error("No token found in localStorage");

      }
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getUserData();
  }, [])
  return (
    <div>
      <main
        className="w-full h-screen flex flex-col items-center justify-center p-8 object-cover"
      // style={{
      //   background:
      //     "url(https://c8.alamy.com/comp/JEYCWY/geometric-triangle-shapes-full-screen-blue-background-JEYCWY.jpg)",
      // }}
      >
        <div className="max-w-[600px] w-full text-gray-600 border-2 p-8 bg-white border-gray-400 rounded-xl flex flex-col items-center">
          <div className="text-center" data-aos="fade-up"
            data-aos-duration="500">
            <img
              src="https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1724630400&semt=ais_hybrid"
              width={150}
              className="mx-auto"
            />
          </div>
          {/* {message && <p className="text-center text-red-500">{message}</p>} */}

          <div className="flex flex-col">
            <div>
              <div>
                <div className="mt-2" data-aos="fade-up"
                  data-aos-duration="600">
                  {/* <label>First Name</label> */}
                  <input
                    type="text"
                    placeholder="First Name"
                    // onChange={(e) => setFirstName(e.target.value)}
                    value={userDetails.firstName}
                    required
                    className="w-full pl-12 pr-3 py-2 border-black text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                  />
                </div>
                <div className="mt-2" data-aos="fade-up"
                  data-aos-duration="700">
                  {/* <label>Last Name</label> */}
                  <input
                    type="text"
                    placeholder="Last Name"
                    // onChange={e => setlastName(e.target.value)}
                    value={userDetails.lastName}
                    required
                    className="w-full pl-12 pr-3 border-black py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                  />
                </div>
                <div className="mt-2" data-aos="fade-up"
                  data-aos-duration="800">
                  <input
                    type="text"
                    placeholder="User-name"
                    // onChange={(e) => setUserName(e.target.value)}
                    value={userDetails.username}
                    required
                    className="w-full pl-12 border-black pr-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                  />
                </div>
                <div className="mt-2" data-aos="fade-up"
                  data-aos-duration="800">
                  {/* <label>Email Address</label> */}
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    // onChange={e => setEmail(e.target.value)}
                    value={userDetails.email}
                    id="email"
                    className="w-full pl-12 border-black pr-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                    required />
                </div>


                <div className="mt-2" data-aos="fade-up"
                  data-aos-duration="900">
                  {/* <label>Password</label> */}
                  <input
                    type="text"
                    placeholder="Buyer"
                    value={userDetails.userRole}
                    // disabled
                    className="w-full pl-12 capitalize border-gray-400 pr-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                  />
                </div>

              </div>
            </div>
            <button className="mt-6 text-md text-center w-40 font-bold flex items-center border-2 rounded-full bg-red-100 justify-center gap-x-3 py-2.5 mt-5 text-sm font-medium hover:bg-red-300 hover:text-white duration-150 active:bg-gray-100" data-aos="fade-up"
              data-aos-duration="900" onClick={() => navigate('/create-new-password')}>
              Create New Password
            </button>

            <button type="submit" className="w-full font-bold flex items-center border-2 rounded-full bg-green-600 justify-center gap-x-3 py-2.5 mt-5 text-sm font-medium hover:bg-gray-800 hover:text-white duration-150 active:bg-gray-100" data-aos="fade-up"
              data-aos-duration="1000" onClick={() => {
                localStorage.clear();
                navigate('/auth');
              }}>
              Sign Out
            </button>
          </div>

        </div>
      </main>
      {/* {loading && <Loading />} */}
    </div>
  )
}

export default UserDetails