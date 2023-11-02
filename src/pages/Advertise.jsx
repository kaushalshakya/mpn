import React from "react";
import adHead from "/adHead.png";
import Banner from "../components/AdComponents/Banner";

const Advertise = () => {
  return (
    <div className="flex flex-col gap-5 mb-5">
      <img src={adHead} className="w-full" alt="" />
      <div className="flex flex-col px-5 gap-5">
        <div className="flex items-center xl:ml-[44rem] justify-between">
          <h1 className="uppercase font-black text-4xl items-center">
            about ad banner types
          </h1>
          <button
            type="button"
            className="btn btn-primary text-white border-none bg-[#9983CA]"
          >
            Request a Quote
          </button>
        </div>
        <div className="flex gap-5 items-start justify-between">
          <Banner
            title="Left Side Ad Banner"
            width="255"
            height="361"
            description="This ad appears on the left side of the page as shown in the image above."
          />
          <div className="flex flex-col gap-5 w-[1400px]">
            <Banner
              title="Top Ad Banner"
              width="1113"
              height="239"
              description="This ad appears on the top section of the page as shown in the image above."
            />
            <Banner
              title="Main Ad Banner"
              width="1113"
              height="121"
              description="This ad appears below the search box as shown in the image above."
            />
            <Banner
              title="Search Page Ad Banner"
              width="1113"
              height="239"
              description="This ad appears on the search page as shown in the image above."
            />
            <Banner
              title="End Ad Banner"
              width="1113"
              height="239"
              description="This ad appears on the search page as shown in the image above."
            />
          </div>
          <Banner
            title="Right Side Ad Banner"
            width="255"
            height="361"
            description="This ad appears on the right side of the page as shown in the image above."
          />
        </div>
      </div>
    </div>
  );
};

export default Advertise;
