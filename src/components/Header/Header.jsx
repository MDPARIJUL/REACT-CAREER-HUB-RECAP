import React from "react";
import { NavLink } from "react-router-dom";
import './Header.css'
const Header = () => {
    const links = <>
        <NavLink to='/' className={({ isActive }) => (isActive ? "active" : "")}>Home</NavLink>
        <NavLink to ='/about'  className={({ isActive }) => (isActive ? "active" : "")}>About </NavLink>
        <NavLink to ='/Applied Jobs'  className={({ isActive }) => (isActive ? "active" : "")}> Applied Jobs</NavLink>

    </>
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow space-x-5"
            >
                {links}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-5">
                {links}
          </ul>
        </div>
        <div className="navbar-end">
        <button className="btn bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-[#FFFFFF] px-10 py-5">Start Applying</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
