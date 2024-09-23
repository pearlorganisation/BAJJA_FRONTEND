import React, { useState } from 'react';
import logo from "../../../assets/logoM.png"
import axios from 'axios';
import { Base_Url } from '../../../API_Base_Url/Base_Url';

const CreateNewPassword = () => {
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [oldPassword, setOldPassword] = useState("");
    const [message, setMessage] = useState('');

    const handleChangepassword = async (e) => {
        e.preventDefault();
        try {
            const token = localStorage.getItem('token');

            if (!token) {
                setMessage('No token found, please log in.');
                return;
            }

            const res = await axios.post(
                `https://bajja-mern.onrender.com/api/v1/user/change-password`,
                {
                    currentPassword: oldPassword,
                    newPassword: newPassword,
                    confirmNewPassword: confirmPassword,
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            
            if (res.status === 200) {
                setMessage('Password changed successfully.');
            } else {
                setMessage('Password change failed. Please try again.');
            }

        } catch (error) {
            console.log(error);

        }
    }

    return (
        <div>
            <main className="w-full h-screen flex flex-col items-center justify-center p-8 object-cover">
                <div className="max-w-[600px] w-full text-gray-600 border-2 p-8 bg-white border-gray-400 rounded-xl flex flex-col items-center">
                    <div className="text-center" data-aos="fade-up"
                        data-aos-duration="500">
                        <img
                            src={logo}
                            width={150}
                            className="mx-auto mb-10"
                        />
                    </div>
                    <form action="" onSubmit={handleChangepassword}>
                        <div className="mt-2" data-aos="fade-up"
                            data-aos-duration="600">
                            {/* <label>First Name</label> */}
                            <input
                                type="password"
                                placeholder="Old Password"
                                onChange={(e) => setOldPassword(e.target.value)}
                                value={oldPassword}
                                required
                                className="w-full pl-12 pr-3 py-2 border-black text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                            />
                        </div>
                        <div className="mt-2" data-aos="fade-up"
                            data-aos-duration="600">
                            {/* <label>First Name</label> */}
                            <input
                                type="password"
                                placeholder="New Password"
                                onChange={(e) => setNewPassword(e.target.value)}
                                value={newPassword}
                                required
                                className={`w-full pl-12 ${newPassword.length > 0 && newPassword.length < 6 ? "border-red-500" : "border-black"} pr-3 py-2 text-gray-500 bg-transparent outline-none border ${newPassword.length < 6 ? "focus:border-red-600" : "focus:border-indigo-600"} shadow-sm rounded-lg`}
                            />
                        </div>
                        <div className="mt-2" data-aos="fade-up"
                            data-aos-duration="600">
                            {/* <label>First Name</label> */}
                            <input
                                type="text"
                                placeholder="Confirm Password"
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                value={confirmPassword}
                                required
                                className={`w-full pl-12 ${confirmPassword.length > 0 && confirmPassword.length < 6 ? "border-red-500" : "border-black"} pr-3 py-2 text-gray-500 bg-transparent outline-none border ${confirmPassword.length < 6 ? "focus:border-red-600" : "focus:border-indigo-600"} shadow-sm rounded-lg`}
                            />
                        </div>
                        <button type="submit" className="w-full font-bold flex items-center border-2 rounded-full bg-green-600 justify-center gap-x-3 py-2.5 mt-5 text-sm font-medium hover:bg-gray-800 hover:text-white duration-150 active:bg-gray-100" data-aos="fade-up"
                            data-aos-duration="1000">
                            Change Password
                        </button>
                    </form>
                </div>
            </main>
        </div>
    )
}

export default CreateNewPassword