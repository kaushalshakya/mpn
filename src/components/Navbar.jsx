import React, { useState, useEffect, Children } from "react";
import mpn from "../assets/mpn.jpg";
import { Link } from "react-router-dom";

const Navbar = ({ children }) => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "fantasy"
  );

  const user = null;

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);

  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("fantasy");
    }
  };
  return (
    <div className="drawer flex flex-col max-w-screen">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        <div className="flex items-center z-10 lg:fixed lg:top-0 lg:w-screen justify-between bg-base-100 p-[1rem] ">
          <div className="flex flex-row lg:hidden">
            <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-6 h-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>

          <Link to={"/"}>
            <div className="block w-[150px] mr-4 2xl:ml-4 cursor-pointer">
              <img src="https://marketplacenepal.com/frontend/images/logo.png" />
            </div>
          </Link>

          <div
            className={`flex-none hidden lg:flex ${
              theme === "dark" ? "text-white" : "text-primary"
            } lg:ml-[51px]`}
          >
            <ul className="menu menu-horizontal flex items-center gap-5">
              <Link to={"/"}>
                <li className="text-base cursor-pointer">Home</li>
              </Link>
              <Link to={"/about"}>
                <li className="text-base cursor-pointer">About Us</li>
              </Link>
              <Link to={"/contact"}>
                <li className="text-base cursor-pointer">Contact Us</li>
              </Link>
              <Link to={"/privacy-policy"}>
                <li className="text-base cursor-pointer">Privacy Policy</li>
              </Link>
              <Link to={"/advertise"}>
                <li className="text-base cursor-pointer">Advertise with Us</li>
              </Link>
            </ul>
          </div>
          <div className="flex-none hidden lg:flex px-5">
            <Link to={"/register"}>
              <button
                type="button"
                className={`btn btn-ghost text-base ${
                  theme === "dark" ? "text-white" : "text-primary"
                } font-normal normal-case`}
              >
                Be a Contributor
              </button>
            </Link>

            <label className="swap swap-rotate">
              <input type="checkbox" onChange={handleToggle} />

              <svg
                className="swap-on fill-current w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
              </svg>

              <svg
                className="swap-off fill-current w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
              </svg>
            </label>

            {user ? (
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img src="/vite.svg" />
                  </div>
                </label>
                <ul
                  tabIndex={0}
                  className={`mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-200 ${
                    theme === "dark" ? "text-white" : "text-primary"
                  }  rounded-box w-52`}
                >
                  <li>
                    <a className="justify-between">Profile</a>
                  </li>
                  <li>
                    <a>Logout</a>
                  </li>
                </ul>
              </div>
            ) : (
              <Link to={"/login"}>
                <button
                  type="button"
                  className={`btn btn-ghost text-base ${
                    theme === "dark" ? "text-white" : "text-primary"
                  } font-normal normal-case`}
                >
                  Login
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
      <div className="max-w-screen mt-[10px] z-0 lg:pt-[4.5rem]">
        {children}
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
        <ul
          className={`menu p-4 w-80 min-h-full bg-base-200  ${
            theme === "dark" ? "text-white" : "text-primary"
          } font-normal normal-case`}
        >
          <Link to={"/"}>
            <li className="cursor-pointer rounded-full">
              {" "}
              <img
                src={mpn}
                alt="Market Place Nepal"
                className="rounded-[100%] w-[6rem] ml-[6rem]"
              />
            </li>
          </Link>
          <p className="divider"></p>
          <Link to={"/"}>
            <li className="text-base cursor-pointer">Home</li>
          </Link>
          <p className="divider"></p>
          <Link to={"/about"}>
            <li className="text-base cursor-pointer">About Us</li>
          </Link>
          <p className="divider"></p>
          <Link to={"/contact"}>
            <li className="text-base cursor-pointer">Contact Us</li>
          </Link>
          <p className="divider"></p>
          <Link to={"/privacy-policy"}>
            <li className="text-base cursor-pointer">Privacy Policy</li>
          </Link>
          <p className="divider"></p>
          <Link to={"/advertise"}>
            <li className="text-base cursor-pointer">Advertise with Us</li>
          </Link>
          <p className="divider"></p>
          <Link to={"/register"}>
            <li className="text-base cursor-pointer">Be a Contributor</li>
          </Link>
          <p className="divider"></p>
          {user ? (
            <>
              <li className="text-base cursor-pointer">View Profile</li>
              <p className="divider"></p>
            </>
          ) : (
            <>
              {" "}
              <Link to={"/login"}>
                <li
                  className={`text-base cursor-pointer ${
                    theme === "dark" ? "text-white" : "text-primary"
                  } font-normal normal-case`}
                >
                  Login
                </li>
              </Link>
              <p className="divider"></p>
            </>
          )}
          {user && (
            <>
              <li className="text-base cursor-pointer">Logout</li>
              <p className="divider"></p>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
