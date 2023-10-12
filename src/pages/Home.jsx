import React from "react";
import HomeAd from "../components/Home Components/HomeAd";
import ArrowDownSFillIcon from "remixicon-react/ArrowDownSFillIcon";
import SearchLineIcon from "remixicon-react/SearchLineIcon";
import megaphone from "/public/megaphone.png";
import deal from "/public/deal.png";
import gift from "/public/gift.png";
import event from "/public/event.png";
import polling from "/public/polling.png";
import post from "/public/post.png";
import trophy from "/trophy.png";
import recommend from "/recommend.png";
import web from "/web.png";
import topRated from "/topRated.png";
import MarketplaceSlider from "../components/Home Components/MarketplaceSlider";
import PostsSlider from "../components/Home Components/PostsSlider";

const Home = () => {
  return (
    <main className="flex flex-col gap-5 mb-5">
      <HomeAd />
      <div className="px-10 flex flex-col gap-5">
        <div>
          <div className="flex flex-col md:flex-row gap-5">
            <div className="bg-white rounded-md p-5 gap-5 w-[200rem] flex flex-col">
              <div className="flex justify-between">
                <h1 className="text-xl font-semibold">Create</h1>
                <ArrowDownSFillIcon />
              </div>
              <div className="flex justify-between">
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
                      <option>Business</option>
                      <option>Posts</option>
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
              <div className="flex gap-14 items-center">
                <h1 className="font-bold">Most Searched:</h1>
                <ul className="flex gap-10">
                  <li className="bg-[#d9d9d9] cursor-pointer py-2 px-4 rounded-md">
                    Desktop
                  </li>
                  <li className="bg-[#d9d9d9] cursor-pointer py-2 px-4 rounded-md">
                    Flower
                  </li>
                  <li className="bg-[#d9d9d9] cursor-pointer py-2 px-4 rounded-md">
                    Fish
                  </li>
                  <li className="bg-[#d9d9d9] cursor-pointer py-2 px-4 rounded-md">
                    Win
                  </li>
                  <li className="bg-[#d9d9d9] cursor-pointer py-2 px-4 rounded-md">
                    Cat
                  </li>
                  <li className="bg-[#d9d9d9] cursor-pointer py-2 px-4 rounded-md">
                    Computer
                  </li>
                </ul>
              </div>
              <div className="border border-black"></div>
            </div>
            <div className="bg-white px-5 gap-10 rounded-md flex justify-between items-center">
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
        <div className="flex gap-5 items-center">
          <div className="bg-white text-black p-5 gap-5 rounded-md flex flex-col lg:w-full">
            <ul className="flex flex-col h-full gap-4 justify-between">
              <li className="flex items-center gap-4">
                <img src={web} alt="" className="w-5 h-5" />
                <p>Marketplace</p>
              </li>
              <li className="border"></li>
              <li className="flex items-center gap-4">
                <img src={post} alt="" className="w-5 h-5" />
                <p>Posts</p>
              </li>
              <li className="border"></li>
              <li className="flex items-center gap-4">
                <img src={megaphone} alt="" className="w-5 h-5" />
                <p>Promotion Post</p>
              </li>
              <li className="border"></li>
              <li className="flex items-center gap-4">
                <img src={recommend} alt="" className="w-5 h-5" />
                <p>Company Recommendation</p>
              </li>
              <li className="border"></li>
              <li className="flex items-center gap-4">
                <img src={deal} alt="" className="w-6 h-6" />
                <p>Offers and Deals</p>
              </li>
              <li className="border"></li>
              <li className="flex items-center gap-4">
                <img src={topRated} alt="" className="w-5 h-5" />
                <p>Top Rated Post</p>
              </li>
              <li className="border"></li>
              <li className="flex items-center gap-4">
                <img src={event} alt="" className="w-5 h-5" />
                <p>Events</p>
              </li>
              <li className="border"></li>
              <li className="flex items-center gap-4">
                <img src={gift} alt="" className="w-5 h-5" />
                <p>Gifts</p>
              </li>
              <li className="border"></li>
              <li className="flex items-center gap-4">
                <img src={trophy} alt="" className="w-5 h-5" />
                <p>Predict and Win</p>
              </li>
              <li className="border"></li>
              <li className="flex items-center gap-4">
                <img src={polling} alt="" className="w-5 h-5" />
                <p>Poll</p>
              </li>
            </ul>
          </div>
          <div className="bg-white text-black p-5 gap-5 rounded-md flex flex-col h-[36.5rem]">
            <div className="flex items-center justify-between w-full">
              <h1 className="font-extrabold text-xl">Marketplace</h1>
              <p className="text-primary cursor-pointer">View All</p>
            </div>
            <MarketplaceSlider queryKey={["marketplace"]} endpoint="products" />
          </div>
        </div>
        <div className="bg-white text-black p-5 gap-5 rounded-md w-full flex flex-col ">
          <div className="flex items-center w-full justify-between ">
            <h1 className="font-extrabold text-xl">Posts</h1>
            <p className="text-primary cursor-pointer">View All</p>
          </div>
          <PostsSlider queryKey={["posts"]} endpoint="posts" />
        </div>
      </div>
    </main>
  );
};

export default Home;
