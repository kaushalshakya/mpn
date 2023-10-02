import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [theme, setTheme] = useState(null);

  const currentTheme = localStorage.getItem("theme");

  const toastTheme = {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: theme === "fantasy" ? "light" : "dark",
  };

  useEffect(() => {
    setTheme(currentTheme);
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      return toast.error("Please enter all the necessary fields", toastTheme);
    }

    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!regex.test(email)) {
      return toast.error("Email is invalid", toastTheme);
    }
  };

  return (
    <div className="mt-12 lg:mb-[70px] mx-10">
      <ToastContainer />
      <div className="lg:hero-content lg:flex lg:flex-row items-center lg:justify-between xl:gap-[5] xl:ml-32 2xl:gap-8 2xl:ml-[18rem] justify-center">
        <img
          src="https://marketplacenepal.com/frontend/images/business.png"
          alt=""
          className="hidden lg:block xl:block 2xl:block"
        />
        <div className="card flex-shrink-0 shadow-2xl bg-base-100">
          <div className="card-body h-full">
            <h1 className="text-3xl font-bold">Login now!</h1>
            <form action="" method="POST">
              <div className="form-control relative">
                <label className="label">
                  <svg
                    width="24px"
                    height="24px"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="absolute top-[48px] left-[8px]"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M3.75 5.25L3 6V18L3.75 18.75H20.25L21 18V6L20.25 5.25H3.75ZM4.5 7.6955V17.25H19.5V7.69525L11.9999 14.5136L4.5 7.6955ZM18.3099 6.75H5.68986L11.9999 12.4864L18.3099 6.75Z"
                        fill="#b2beb5"
                      ></path>{" "}
                    </g>
                  </svg>
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  className="input pl-[2.5rem] input-bordered"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-control gap-1 relative">
                <svg
                  width="24px"
                  height="24px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute top-[52px] left-[10px]"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      d="M15 9H15.01M15 15C18.3137 15 21 12.3137 21 9C21 5.68629 18.3137 3 15 3C11.6863 3 9 5.68629 9 9C9 9.27368 9.01832 9.54308 9.05381 9.80704C9.11218 10.2412 9.14136 10.4583 9.12172 10.5956C9.10125 10.7387 9.0752 10.8157 9.00469 10.9419C8.937 11.063 8.81771 11.1823 8.57913 11.4209L3.46863 16.5314C3.29568 16.7043 3.2092 16.7908 3.14736 16.8917C3.09253 16.9812 3.05213 17.0787 3.02763 17.1808C3 17.2959 3 17.4182 3 17.6627V19.4C3 19.9601 3 20.2401 3.10899 20.454C3.20487 20.6422 3.35785 20.7951 3.54601 20.891C3.75992 21 4.03995 21 4.6 21H6.33726C6.58185 21 6.70414 21 6.81923 20.9724C6.92127 20.9479 7.01881 20.9075 7.10828 20.8526C7.2092 20.7908 7.29568 20.7043 7.46863 20.5314L12.5791 15.4209C12.8177 15.1823 12.937 15.063 13.0581 14.9953C13.1843 14.9248 13.2613 14.8987 13.4044 14.8783C13.5417 14.8586 13.7588 14.8878 14.193 14.9462C14.4569 14.9817 14.7263 15 15 15Z"
                      stroke="#b2beb5"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>{" "}
                  </g>
                </svg>
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered pl-[2.5rem]"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
                <div className="flex items-center gap-1">
                  <label className="label cursor-pointer">
                    <input
                      type="checkbox"
                      className="w-4 h-4 checkbox rounded-none checkbox-primary"
                    />
                  </label>
                  <span className="label-text ml-0">Remember me</span>
                </div>
              </div>
              <div className="form-control mt-4">
                <button className="btn btn-primary" onClick={handleSubmit}>
                  Login
                </button>
              </div>
            </form>
            <div>
              <label className="label">
                <span className="label-text">
                  Don't have an account?{" "}
                  <Link to={"/register"}>
                    <span className="text-[#D92689] hover:underline-offset-4">
                      Register Now
                    </span>
                  </Link>
                </span>
              </label>
            </div>
            <div className="divider">OR</div>
            <div className="flex flex-col items-center gap-2">
              <h1>Login with:</h1>
              <div className="flex gap-5">
                <svg
                  width="50px"
                  height="50px"
                  viewBox="0 0 16 16"
                  className="cursor-pointer"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                >
                  <path
                    fill="#4285F4"
                    d="M14.9 8.161c0-.476-.039-.954-.121-1.422h-6.64v2.695h3.802a3.24 3.24 0 01-1.407 2.127v1.75h2.269c1.332-1.22 2.097-3.02 2.097-5.15z"
                  />
                  <path
                    fill="#34A853"
                    d="M8.14 15c1.898 0 3.499-.62 4.665-1.69l-2.268-1.749c-.631.427-1.446.669-2.395.669-1.836 0-3.393-1.232-3.952-2.888H1.85v1.803A7.044 7.044 0 008.14 15z"
                  />
                  <path
                    fill="#FBBC04"
                    d="M4.187 9.342a4.17 4.17 0 010-2.68V4.859H1.849a6.97 6.97 0 000 6.286l2.338-1.803z"
                  />
                  <path
                    fill="#EA4335"
                    d="M8.14 3.77a3.837 3.837 0 012.7 1.05l2.01-1.999a6.786 6.786 0 00-4.71-1.82 7.042 7.042 0 00-6.29 3.858L4.186 6.66c.556-1.658 2.116-2.89 3.952-2.89z"
                  />
                </svg>{" "}
                <svg
                  width="50px"
                  height="50px"
                  viewBox="0 0 16 16"
                  className="cursor-pointer"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                >
                  <path
                    fill="#1877F2"
                    d="M15 8a7 7 0 00-7-7 7 7 0 00-1.094 13.915v-4.892H5.13V8h1.777V6.458c0-1.754 1.045-2.724 2.644-2.724.766 0 1.567.137 1.567.137v1.723h-.883c-.87 0-1.14.54-1.14 1.093V8h1.941l-.31 2.023H9.094v4.892A7.001 7.001 0 0015 8z"
                  />
                  <path
                    fill="#ffffff"
                    d="M10.725 10.023L11.035 8H9.094V6.687c0-.553.27-1.093 1.14-1.093h.883V3.87s-.801-.137-1.567-.137c-1.6 0-2.644.97-2.644 2.724V8H5.13v2.023h1.777v4.892a7.037 7.037 0 002.188 0v-4.892h1.63z"
                  />
                </svg>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
