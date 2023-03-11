import React, { useContext, useEffect, useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { Context } from "../context/ContextProvider";

const SinglePost = ({ post }) => {
  const { handleDeletePost, user } = useContext(Context);
  const [userData, setUserData] = useState({});
  // ===>User provider<===//
  useEffect(() => {
    fetch(`http://localhost:5000/users/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setUserData(data.data));
  }, [user]);
  return (
    <div className="card w-full bg-base-100 shadow-xl">
      <div className="card-body">
        {/* Header */}
        <div className="flex justify-between items-center">
          {/* User */}
          <div className="flex items-center gap-2">
            {/* ==Avatar== */}
            <div className="avatar">
              <div className="w-12 rounded-full">
                {post?.userImg ? (
                  <img src={post.userImg} alt="" />
                ) : (
                  <img
                    src="https://static.toiimg.com/thumb/resizemode-4,msid-76729750,imgsize-249247,width-720/76729750.jpg"
                    alt=""
                  />
                )}
              </div>
            </div>
            <div>
              <p className="font-bold">{post?.name}</p>
              <p className="text-gray-500">{post?.email}</p>
            </div>
          </div>

          {/* menu */}
          <div className="">
            <div className="dropdown">
              <label tabIndex={0} className=" rounded-full p-1 cursor-pointer">
                <BsThreeDots />
              </label>
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content p-2 shadow bg-base-100 rounded-box"
              >
                {userData?.role === "admin" ? (
                  <li onClick={() => handleDeletePost(post._id)}>
                    <p>Delete</p>
                  </li>
                ) : (
                  <li>
                    <p className="w-full">Yor are not admin!</p>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
        <div className="my-4">
          <p>{post?.content}</p>
        </div>
      </div>
    </div>
  );
};

export default SinglePost;
