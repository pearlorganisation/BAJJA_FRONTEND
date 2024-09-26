import React, { useEffect, useState } from 'react';
import { BiCommentAdd, BiEdit } from 'react-icons/bi';
import { BsChat } from 'react-icons/bs';
import { CiHeart } from "react-icons/ci";
import Chat from './Chat/Chat';
import Comments from './Comments/Comments';
import axios from 'axios';
import { Base_Url } from '../../API_Base_Url/Base_Url';
import { useNavigate } from 'react-router';
import { FiDelete } from 'react-icons/fi';

const GetPost = () => {
    const [chat, setChat] = useState(false);
    const [activeCommentPost, setActiveCommentPost] = useState(null);
    const [postsData, setPostsData] = useState([]);
    const [userDetails, setUserDetails] = useState(null);
    const navigate = useNavigate();
    const token = localStorage.getItem("token");
    const fetchPost = async () => {
        try {
            if (token) {
                const res = await axios.get(`${Base_Url}/v1/home`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    }
                });
                setPostsData(res.data.data);
                console.log(res.data.data);
                
            }
        } catch (error) {
            console.error(error);
        }
    };
    const fetchUserDetails = async () => {
        try {
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
        fetchPost();
        fetchUserDetails();
    }, []);

    const toggleComments = (index) => {
        setActiveCommentPost(index === activeCommentPost ? null : index);
    };

    return (
        <div className="min-h-screen">
            {postsData && postsData.map((item, index) => (
                <div key={index}>
                    <div className="flex border border-gray-300 p-2 m-2 mx-10 rounded-lg h-44">
                        <div className="w-40 h-full">
                            <img className="w-full h-auto rounded-lg" src={item.photos[0].secure_url} alt="tv" />
                        </div>
                        <div className="flex space-y-5 justify-between px-5 w-full">
                            <div className="space-y-0 pr-10 w-full">
                                <h1 className="text-gray-400 font-semibold text-lg">
                                    {item.category} / {item.sub_category}
                                </h1>
                                <h1 className="font-bold text-xl">{item.product_name}</h1>
                                <div className="space-y-2 pt-3">
                                    <p className="text-sm text-gray-600">{item.description}</p>
                                    <p className="text-sm text-green-500 font-semibold">
                                        ${item.minprice} - ${item.maxprice}
                                    </p>
                                </div>
                            </div>
                            <div className="space-y-2 pl-10 px-10 flex-end">
                                {userDetails && userDetails.userRole === "seller" &&
                                    <div>
                                        <button className="flex items-center gap-2 text-gray-600 hover:text-gray-800 hover:bg-blue-300 bg-blue-100 text-sm font-semibold p-2 rounded w-32">
                                            <CiHeart size={25} />
                                            <span>Wishlist</span>
                                        </button>
                                    </div>
                                }
                                <div>
                                    <button
                                        className="flex items-center gap-2 text-gray-600 hover:text-gray-800 hover:bg-blue-300 bg-blue-100 text-sm font-semibold p-2 rounded w-32"
                                        onClick={() => setChat(true)}
                                    >
                                        <BsChat size={22} />
                                        <span>Start Chat</span>
                                    </button>
                                </div>
                                <div>
                                    <button
                                        className="flex items-center gap-2 text-gray-600 hover:text-gray-800 hover:bg-blue-300 bg-blue-100 text-sm font-semibold p-2 rounded w-32"
                                        onClick={() => toggleComments(index)}
                                    >
                                        <BiCommentAdd size={22} />
                                        <span>Comments</span>
                                    </button>
                                </div>
                                <div>
                                    <button
                                        className="flex items-center gap-2 text-gray-600 hover:text-gray-800 hover:bg-blue-300 bg-blue-100 text-sm font-semibold p-2 rounded w-32"
                                        onClick={() => navigate(`/create-ad/${item._id}`)}
                                    >
                                        <BiEdit size={22} />
                                        <span>Edit</span>
                                    </button>
                                </div>
                                <div>
                                    <button
                                        className="flex items-center gap-2 text-gray-600 hover:text-gray-800 hover:bg-blue-300 bg-blue-100 text-sm font-semibold p-2 rounded w-32"
                                        // onClick={() => navigate(`/create-ad/${item._id}`)}
                                    >
                                        <FiDelete size={22} />
                                        <span>Delete</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mx-10">

                        {activeCommentPost === index && <Comments isComments={true} />}
                    </div>
                </div>
            ))}
            <Chat chat={chat} setChat={setChat} />
        </div>
    );
};

export default GetPost;
