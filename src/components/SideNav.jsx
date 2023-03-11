import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ContextProvider } from "../context/ContextProvider";

const SideNav = () => {
  const { user, userData } = useContext(ContextProvider);
  //   console.log(user);

  return (
    <div className="flex flex-col w-16 justify-center xs:items-center md:w-52 lg:w-64 h-screen py-8 bg-white border-r dark:bg-gray-900 dark:border-gray-700">
      {/* Logo */}
      <Link
        to="/"
        title="Greeho Sheba"
        className="relative flex items-center justify-center"
      >
        <span className="ml-2 text-xl lg:text-2xl text-accent font-bold tracking-wide hidden md:block lg:block">
          GreehoSheba
        </span>
      </Link>

      {/* ===Profile=== */}
      <div className="flex flex-col items-center mt-6 -mx-2">
        {user?.photoURL ? (
          <img
            className="object-cover w-8 md:w-24 lg:w-24 h-8 md:h-24 ld:h-24 mx-2 rounded-full"
            src={user.photoURL}
            alt="avatar"
          />
        ) : (
          <img
            className="object-cover w-8 md:w-24 lg:w-24 h-8 md:h-24 ld:h-24 mx-2 rounded-full"
            src="https://cdn3.iconfinder.com/data/icons/essential-rounded/64/Rounded-31-512.png"
            alt="avatar"
          />
        )}
        <h4 className="mx-2 mt-2 font-medium text-gray-800 dark:text-gray-200 hover:underline hidden md:block lg:block">
          {user?.displayName}
        </h4>
        <p className="mx-2 mt-1 text-sm font-medium text-gray-600 dark:text-gray-400 hover:underline hidden md:block lg:block">
          {user?.email}
        </p>
      </div>

      <div className="flex flex-col justify-between flex-1 mt-6">
        <nav>
          {/* ===Home=== */}
          <Link
            className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-200"
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

            <span className="mx-4 font-medium hidden md:block lg:block">
              Home
            </span>
          </Link>

          {/* ====Admin==== */}
          {userData?.role === "admin" && (
            <>
              {/* ====Users==== */}
              <Link
                to="/profile/all-users"
                className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-gray-200 hover:text-gray-700"
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

                <span className="mx-4 font-medium hidden md:block lg:block">
                  Users
                </span>
              </Link>
            </>
          )}
        </nav>
      </div>
    </div>
  );
};

export default SideNav;
