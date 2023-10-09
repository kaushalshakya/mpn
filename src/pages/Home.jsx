import React from "react";
import HomeAd from "../components/Home Components/HomeAd";
import ArrowDownSFillIcon from "remixicon-react/ArrowDownSFillIcon";
import SearchLineIcon from "remixicon-react/SearchLineIcon";

const Home = () => {
  return (
    <main className="h-screen flex flex-col gap-10">
      <HomeAd />
      <div className="px-10">
        <div className="flex flex-col md:flex-row gap-10">
          <div className="bg-white rounded-lg p-5 gap-5 flex flex-col">
            <div className="flex justify-between">
              <h1 className="text-xl font-semibold">Create</h1>
              <ArrowDownSFillIcon />
            </div>
            <div className="flex gap-10">
              <button className="btn bg-[#d9d9d9]" type="button">
                Posts
              </button>
              <button className="btn bg-[#d9d9d9]" type="button">
                Events
              </button>
              <button className="btn bg-[#d9d9d9]" type="button">
                Cards
              </button>
            </div>
          </div>
          <div className="w-full flex flex-col gap-5">
            <div className="join">
              <div>
                <div className="flex items-center">
                  <select className="select bg-[#d9d9d9] join-item">
                    <option disabled selected>
                      All
                    </option>
                    <option>Sci-fi</option>
                    <option>Drama</option>
                    <option>Action</option>
                  </select>
                  <input
                    className="input join-item lg:w-[62rem]"
                    placeholder="Search"
                  />
                </div>
              </div>
              <div className="indicator">
                <button className="btn join-item bg-[#d9d9d9]">
                  <SearchLineIcon />
                </button>
              </div>
            </div>
            <div className="border border-black"></div>
            <div className="flex gap-10 items-center">
              <h1 className="font-bold">Most Searched:</h1>
              <ul className="flex gap-10">
                <li className="bg-[#d9d9d9] py-2 px-4 rounded-lg">Desktop</li>
                <li className="bg-[#d9d9d9] py-2 px-4 rounded-lg">Flower</li>
                <li className="bg-[#d9d9d9] py-2 px-4 rounded-lg">Fish</li>
                <li className="bg-[#d9d9d9] py-2 px-4 rounded-lg">Win</li>
                <li className="bg-[#d9d9d9] py-2 px-4 rounded-lg">Cat</li>
                <li className="bg-[#d9d9d9] py-2 px-4 rounded-lg">Computer</li>
                <li className="bg-[#d9d9d9] py-2 px-4 rounded-lg">Bike</li>
              </ul>
            </div>
            <div className="border border-black"></div>
          </div>
          <div className="bg-white px-5 gap-10 rounded-lg flex justify-between items-center">
            <div className="rounded-full w-[75px] h-[75px]">
              <img
                src="https://marketplacenepal.com/frontend/images/easysitelogo.png"
                alt=""
              />
            </div>
            <div>
              <button type="button" className="btn bg-[#9983ca] text-white">
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
