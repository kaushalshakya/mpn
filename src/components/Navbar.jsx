import React, { useState, useEffect } from "react";
import mpn from "../assets/mpn.jpg";
import { Link } from "react-router-dom";
import useAuthStore from "../store/authStore";
import ConfirmLogout from "./ConfirmLogout";

const Navbar = ({ children }) => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "fantasy"
  );

  const user = useAuthStore((state) => state.user);

  const [logout, setLogout] = useState(false);
  console.log("Logout state:", logout);

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
    <>
      {" "}
      <div className="drawer flex flex-col max-w-screen">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          <div className="flex items-center lg:border lg:border-base-300 z-20 lg:fixed lg:top-0 lg:w-screen justify-between bg-base-100 p-[1rem] ">
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
                  <li className="text-base cursor-pointer">
                    Advertise with Us
                  </li>
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

              {user ? (
                <div className="dropdown dropdown-end">
                  <label
                    tabIndex={0}
                    className="btn btn-ghost btn-circle avatar"
                  >
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
        <div className="max-w-screen mt-[10px] z-10 lg:pt-[4.5rem]">
          {children}
        </div>
        <div className="drawer-side z-40">
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
                <li
                  className="text-base cursor-pointer"
                  onClick={() => setLogout(true)}
                >
                  Logout
                </li>
                <p className="divider"></p>
              </>
            )}
          </ul>
        </div>
      </div>
      {logout && <ConfirmLogout setLogout={setLogout} />}
    </>
  );
};

export default Navbar;
