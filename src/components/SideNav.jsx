import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../context/ContextProvider";
import PulseLoader from "react-spinners/ClipLoader";

const SideNav = () => {
  const { user, loading } = useContext(Context);
  // const [userData, setUserData] = useState({});

  // // ===>User provider<===//
  // useEffect(() => {
  //   fetch(`https://content-post.vercel.app/users/${user?.email}`)
  //     .then((res) => res.json())
  //     .then((data) => setUserData(data.data));
  // }, [user]);

  // Loading
  if (loading) {
    <div className="text-center mt-72">
      <PulseLoader />
    </div>;
  }

  return (
    <aside className="flex flex-col  h-screen px-4 py-8 overflow-y-auto bg-gray-900 border-r rtl:border-r-0 rtl:border-l inset-0 sticky w-12 md:w-56 lg:w-64">
      <Link
        to="/"
        className="mx-auto text-white font-bold text-xl hidden md:block"
      >
        ContentPost
      </Link>

      {/* Profile Info */}
      <div className="flex flex-col items-center mt-6 -mx-2">
        {user?.photoURL ? (
          <img
            className="object-cover w-8 h-8 md:w-24 md:h-24 mx-2 rounded-full"
            src={user.photoURL}
            alt="avatar"
          />
        ) : (
          <img
            className="object-cover w-8 h-8 md:w-24 md:h-24 mx-2 rounded-full"
            src="https://static.toiimg.com/thumb/resizemode-4,msid-76729750,imgsize-249247,width-720/76729750.jpg"
            alt="avatar"
          />
        )}

        <h4 className="mx-2 mt-2 text-white dark:text-gray-200 text-xl font-bold hidden md:block">
          {user?.displayName}
        </h4>
        <h4 className="mx-2 mt-2 text-gray-400 dark:text-gray-200 text-lg font-bold hidden md:block">
          {user?.email.slice(0, 20)}..
        </h4>
      </div>

      {/* <===Nav element===> */}
      <div className="flex flex-col justify-between flex-1 mt-6">
        <nav>
          <Link
            className="flex items-center md:px-4 py-2 mt-5 text-white transition-colors duration-300 transform rounded-lg gap-2"
            title="Home"
            to="/"
          >
            <svg
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19 11H5M19 11C20.1046 11 21 11.8954 21 13V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V13C3 11.8954 3.89543 11 5 11M19 11V9C19 7.89543 18.1046 7 17 7M5 11V9C5 7.89543 5.89543 7 7 7M7 7V5C7 3.89543 7.89543 3 9 3H15C16.1046 3 17 3.89543 17 5V7M7 7H17"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <span className=" font-medium hidden md:block">Home</span>
          </Link>

          {/* ==>Admin<== */}
          {/* {userData?.role === "admin" && (
            <>
              <Link
                className="flex items-center md:px-4 py-2 mt-5 text-white transition-colors duration-300 transform rounded-lg "
                to="/profile/all-users"
              >
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

                <span className="mx-4 font-medium hidden md:block">Users</span>
              </Link>
            </>
          )} */}
        </nav>
      </div>
    </aside>
  );
};

export default SideNav;
