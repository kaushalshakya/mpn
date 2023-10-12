import React, { useEffect, useState } from "react";
import mpn from "../assets/mpn.jpg";
import { Link, useLocation } from "react-router-dom";

const Footer = () => {
  const [theme, setTheme] = useState(null);
  const [dataTheme, setDataTheme] = useState(
    document.querySelector("html").getAttribute("data-theme")
  );

  const location = useLocation();
  const fixedFooter =
    location.pathname === "/login" ||
    location.pathname === "/advertise" ||
    location.pathname === "/contact";

  useEffect(() => {
    const currentTheme = localStorage.getItem("theme");
    setTheme(currentTheme);

    // Set up an observer to observe changes to the data-theme attribute
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (
          mutation.type === "attributes" &&
          mutation.attributeName === "data-theme"
        ) {
          setDataTheme(
            document.querySelector("html").getAttribute("data-theme")
          );
        }
      });
    });

    observer.observe(document.querySelector("html"), {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    // Clean up the observer when the component unmounts
    return () => observer.disconnect();
  }, [dataTheme]);

  return (
    <footer
      className={
        !fixedFooter
          ? "footer max-h-[75px] md:max-h-[100px] p-[1.3rem] items-center flex md:justify-between lg:justify-between justify-center bg-base-100 static bottom-0 text-neutral-content"
          : "footer max-h-[75px] md:max-h-[100px] p-[1.3rem] items-center flex md:justify-between lg:justify-between justify-center bg-base-100 fixed bottom-0 text-neutral-content"
      }
    >
      <aside className="hidden md:block lg:block">
        <div className="avatar rounded-full">
          <Link to={"/"}>
            <div className="w-[70px]">
              <img className="rounded-full" src={mpn} />
            </div>
          </Link>
        </div>
      </aside>
      <div
        className={`flex flex-col md:items-center gap-3 ${
          theme == "dark" ? "text-white" : "text-primary"
        }`}
      >
        <p>©️ 2023 Market Place Nepal</p>
        <p>Product of Improvement Company Nepal. All rights reserved.</p>
      </div>
      <div
        className={`flex flex-col ${
          theme == "dark" ? "text-white" : "text-primary"
        }`}
      >
        <div>
          <header className="footer-title">Social</header>

          <div className="flex items-center gap-4">
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30px"
                height="30px"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M 8 3 C 5.243 3 3 5.243 3 8 L 3 16 C 3 18.757 5.243 21 8 21 L 16 21 C 18.757 21 21 18.757 21 16 L 21 8 C 21 5.243 18.757 3 16 3 L 8 3 z M 8 5 L 16 5 C 17.654 5 19 6.346 19 8 L 19 16 C 19 17.654 17.654 19 16 19 L 8 19 C 6.346 19 5 17.654 5 16 L 5 8 C 5 6.346 6.346 5 8 5 z M 17 6 A 1 1 0 0 0 16 7 A 1 1 0 0 0 17 8 A 1 1 0 0 0 18 7 A 1 1 0 0 0 17 6 z M 12 7 C 9.243 7 7 9.243 7 12 C 7 14.757 9.243 17 12 17 C 14.757 17 17 14.757 17 12 C 17 9.243 14.757 7 12 7 z M 12 9 C 13.654 9 15 10.346 15 12 C 15 13.654 13.654 15 12 15 C 10.346 15 9 13.654 9 12 C 9 10.346 10.346 9 12 9 z"></path>
              </svg>
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
