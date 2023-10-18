import React from "react";
import useAuthStore from "../store/authStore";
import vite from "/vite.svg";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const user = useAuthStore((state) => state.user);
  const navigate = useNavigate();
  if (!user) {
    return navigate("/unauthenticated");
  }
  return (
    <div className="p-10 flex gap-10 items-start cursor-default">
      <div className="bg-white lg:w-1/5 flex flex-col gap-5 p-5 rounded-md">
        <h1 className="text-2xl font-bold">Contributor</h1>
        <div className="flex flex-col gap-5">
          <h1 className="font-semibold">My Dashboard</h1>
          <section className="flex flex-col gap-3.5 pl-5">
            <p>Total Contributor</p>
            <p>Payment Details</p>
          </section>
        </div>
        <div className="flex flex-col gap-5">
          <h1 className="font-semibold">Downloaded Offers</h1>
          <section className="flex flex-col gap-3.5 pl-5">
            <p>Download Offers</p>
          </section>
        </div>
        <div className="flex flex-col gap-5">
          <h1 className="font-semibold">My Account</h1>
          <section className="flex flex-col gap-3.5 pl-5">
            <p>My Profile</p>
          </section>
        </div>
        <div className="flex flex-col gap-5">
          <h1 className="font-semibold">My Orders</h1>
          <section className="flex flex-col gap-3.5 pl-5">
            <p>My Orders</p>
            <p>My Cancelled Orders</p>
          </section>
        </div>
        <div className="flex flex-col gap-5">
          <h1 className="font-semibold">Coupons & Gifts</h1>
          <section className="flex flex-col gap-2.5 pl-5">
            <p>My Coupons</p>
            <p>Wishlists</p>
            <p>My Reviews</p>
          </section>
        </div>
        <h1 className="font-bold">My Contribution List</h1>
        <h1 className="font-bold">Contribute New Business</h1>
      </div>
      <div className="bg-white lg:w-4/5 p-16 flex flex-col gap-10 rounded-md">
        <h1 className="text-2xl font-bold text-pink-500">My Profile</h1>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-10">
            <div className="rounded-full shadow-2xl">
              <img
                src={user.user_image ? user.user_image : vite}
                alt=""
                className="w-28 h-28"
              />
            </div>
            <div className="flex flex-col gap-5">
              <p className="text-xl">{user.user_fullname}</p>
              <p className="text-">{user.user_email}</p>
            </div>
          </div>
          <button
            type="button"
            className="btn bg-[#9983ca] hover:bg-primary text-white rounded-md"
          >
            Edit Profile
          </button>
        </div>
        <p className="border mt-5"></p>
        <div className="flex flex-col gap-10 ">
          <h1 className="font-bold text-xl">{user.user_fullname}</h1>
          <div className="flex items-center justify-between">
            <div className="flex flex-col w-2/5 gap-5">
              <p>{user.user_address ? user.user_address : "Not Set"}</p>
              <p>{user.user_mobile ? user.user_mobile : "Not Set"}</p>
              <p>{user.user_email}</p>
            </div>
            <div className="flex w-3/5 flex-col gap-5">
              <p>Reward Collection Method: Not Set</p>
              <p>Member Since: {user.user_join_date}</p>
            </div>
          </div>
        </div>
        <p className="border mt-5"></p>
        <div className="flex items-center justify-end gap-5">
          <button className="btn bg-[#9983ca] hover:bg-primary text-white rounded-md">
            Change Password
          </button>
          <button className="btn bg-pink-500 hover:bg-pink-800 text-white rounded-md">
            Deactivate Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
