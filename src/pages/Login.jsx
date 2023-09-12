import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [theme, setTheme] = useState(null);

  const currentTheme = localStorage.getItem("theme");

  useEffect(() => {
    setTheme(currentTheme);
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      return toast.error("Please enter all the necessary fields", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: theme === "fantasy" ? "light" : "dark",
      });
    }
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <ToastContainer />
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center lg:text-left">
          <p className="py-6"></p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <form action="" method="POST">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  className="input input-bordered"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-control gap-1 ">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
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
                      className="w-4 h-4 checkbox checkbox-primary"
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
                  Don't have an account? Click{" "}
                  <Link to={"/register"}>
                    <span className="text-[#D92689] hover:underline-offset-4">
                      here
                    </span>
                  </Link>{" "}
                  to register!
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
