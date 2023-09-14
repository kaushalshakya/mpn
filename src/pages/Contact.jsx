import React, { useState, useEffect } from "react";

const Contact = () => {
  const [theme, setTheme] = useState(null);
  const [dataTheme, setDataTheme] = useState(
    document.querySelector("html").getAttribute("data-theme")
  );

  useEffect(() => {
    console.log(dataTheme);
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
    <>
      <div className="hero h-[36rem] max-h-screen lg:min-h-[760px] max-w-screen bg-base-200">
        <div className="hero-content items-center justify-center md:flex-row md:justify-between lg:justify-between lg:flex-row xl:flex xl:justify-between 2xl:flex 2xl:justify-between 2xl:gap-96">
          <img
            src="https://marketplacenepal.com/frontend/images/contact.png"
            className="max-w-sm md:max-w-md lg:max-w-lg hidden md:block lg:block rounded-lg"
          />
          <div className={theme == "fantasy" ? "text-primary" : "text-white"}>
            <h1 className="text-5xl font-bold mb-[5rem]">Contact Us!</h1>
            <div className="flex flex-col gap-3 mt-3">
              <h1 className="font-bold text-lg">Market Place Nepal</h1>
              <p className="text-lg">ICN Pvt. Ltd.</p>
              <p className="flex items-center gap-1">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24px"
                  height="24px"
                >
                  <path
                    d="M12 21C15.5 17.4 19 14.1764 19 10.2C19 6.22355 15.866 3 12 3C8.13401 3 5 6.22355 5 10.2C5 14.1764 8.5 17.4 12 21Z"
                    stroke={theme == "fantasy" ? "#6e0b75" : "white"}
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>{" "}
                  <path
                    d="M12 12C13.1046 12 14 11.1046 14 10C14 8.89543 13.1046 8 12 8C10.8954 8 10 8.89543 10 10C10 11.1046 10.8954 12 12 12Z"
                    stroke={theme == "fantasy" ? "#6e0b75" : "white"}
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
                <span>
                  Sanepa Height, Opposite of Harati Mandir, Lalitpur, Nepal
                </span>
              </p>
              <section className="flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 512 512"
                  className="fill-current"
                >
                  <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
                </svg>
                <p className="flex flex-col">
                  <span>(+977) 01 5533609</span> <span>(+977) 01 5012623</span>
                </p>
              </section>
              <p className="flex gap-3">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24px"
                  height="24px"
                  className="fill-current"
                >
                  {" "}
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M3.75 5.25L3 6V18L3.75 18.75H20.25L21 18V6L20.25 5.25H3.75ZM4.5 7.6955V17.25H19.5V7.69525L11.9999 14.5136L4.5 7.6955ZM18.3099 6.75H5.68986L11.9999 12.4864L18.3099 6.75Z"
                    fill={theme == "fantasy" ? "text-primary" : "text-white"}
                  ></path>{" "}
                </svg>
                <span>marketplacenepal@icn.com.np</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
