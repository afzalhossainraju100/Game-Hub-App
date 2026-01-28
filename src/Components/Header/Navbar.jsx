import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaBeer } from "react-icons/fa";
import logo from '../../assets/logo.png';


const Navbar = () => {
    const links = (
      <>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/allapps">
          <li>Apps</li>
        </Link>
        <Link to="/auth/login">
          <li>Login</li>
        </Link>
      </>
    );
    return (
      <div>
        <div className="navbar bg-[#ffffff] shadow-sm">
          <div className="navbar w-[90%] mx-auto">
            <div className="navbar-start">
              <div className="dropdown">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost lg:hidden"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    {" "}
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h8m-8 6h16"
                    />{" "}
                  </svg>
                </div>
                <ul
                  tabIndex="-1"
                  className="menu menu-sm dropdown-content bg-[#ffffff] text-[#000000] rounded-box z-1 mt-3 w-52 p-2 shadow"
                >
                  {links}
                </ul>
              </div>
              <div className="flex gap-2 items-center justify-center">
                <img
                  className="w-[2.5rem] h-[2.5rem]"
                  src={logo}
                  alt="Logo"
                />
                <a className="bg-[linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1))] bg-clip-text text-transparent font-bold text-base leading-[26px] tracking-normal text-left capitalize">
                  GAME HUB
                </a>
              </div>
            </div>
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1 gap-6">{links}</ul>
            </div>
            <div className="navbar-end">
              <a
                href="https://github.com/afzalhossainraju100"
                className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white hover:from-[#9F62F2] hover:to-[#632EE3] border-0 gap-2"
              >
                <FaGithub />
                Contribute
              </a>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Navbar;