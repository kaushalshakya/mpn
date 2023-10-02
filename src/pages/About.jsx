import React, { useState, useEffect } from "react";

const About = () => {
  const [theme, setTheme] = useState(null);
  const [dataTheme, setDataTheme] = useState(
    document.querySelector("html").getAttribute("data-theme")
  );

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
    <>
      <div className="flex flex-col max-w-screen items-center gap-16">
        <div
          className="hero min-h-[50vh] max-w-screen"
          style={{
            backgroundImage:
              "url(https://marketplacenepal.com/frontend/images/bannerabout.jpg)",
          }}
        >
          <div className="hero-overlay bg-opacity-80"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="">
              <h1 className="mb-5 text-5xl text-white font-bold">
                Promote, Sell and Advertise
              </h1>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-8 items-center">
          <h1 className="text-primary text-center text-5xl font-extrabold">
            ABOUT MARKET PLACE NEPAL
          </h1>
          <p className="text-xl mx-5 text-center lg:max-w-[50rem]">
            MarketlPaceNepal.com is a platform for businesses to be listed and
            showcase their products and services to their existing and potential
            clients and give them an opportunity to directly interact with them.
          </p>
        </div>
        <div className="flex flex-col gap-8 items-center">
          <h1 className="text-primary text-5xl text-center mx-5 font-extrabold">
            WHAT DO WE DO?
          </h1>
          <div className="flex flex-col text-justify gap-8 items-center justify-center mx-5 lg:grid lg:mx-8 lg:grid-cols-2 lg:grid-rows-2 lg:gap-4 lg:place-items-stretch">
            <p>
              Market Place Nepal aims to provide a single platform where all the
              business promotion can take place and give maximum exposure to all
              the businesses listed here. This includes digital marketing,
              advertising, promotional campaigns from the site with free
              giveaways and other interesting online events like participate and
              win contests where people can engage by winning prizes.
            </p>
            <p>
              The search function for the user gives direct results with related
              listings or specific product and services. Keeping in mind the
              customer's perspective, people can approach the businesses
              directly, interact on the business posts and also approach for
              buying the product. Finding the business address in case of store
              visit for the customers, is also very convent with the map
              feature.
            </p>
            <p>
              The whole platform is designed in such a way that even novice user
              can easily get a good online presence for their business. Creating
              login is easy, including anyone with Gmail and Facebook account
              can login without any hassle. Creation of business post is simple
              and quick. The whole idea is to keep all the processes hassle free
              without wasting any time.
            </p>
            <p>
              Overall MarketPlaceNepal provides a great marketing experience for
              the business and their customers alike. Our sole intention is to
              give the maximum views for the businesses listed with us for which
              we are consistently running different promotional campaigns for
              the site.
            </p>
          </div>
        </div>
        <div>
          <img
            src="https://marketplacenepal.com/frontend/images/whatwedo.png"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default About;
