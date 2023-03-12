import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../context/ContextProvider";
import { CgProfile } from "react-icons/cg";

const NavBar = () => {
  const { logOut, user } = useContext(Context);
  return (
    <div>
      <div className="navbar bg-base-100 rounded-b-md shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="/profile">
                  <CgProfile /> Profile
                </Link>
              </li>
            </ul>
          </div>
          <Link className="btn btn-ghost normal-case text-xl font-thin">
            ContentPost
          </Link>
        </div>

        <div className="navbar-end">
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li>
                <Link to="/profile">
                  <CgProfile /> Profile
                </Link>
              </li>
            </ul>
          </div>
          {user ? (
            <Link onClick={() => logOut()} className="btn">
              Log Out
            </Link>
          ) : (
            <Link to="/login" onClick={() => logOut()} className="btn">
              Log In
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
