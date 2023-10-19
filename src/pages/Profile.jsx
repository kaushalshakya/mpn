import React from "react";
import useAuthStore from "../store/authStore";
import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import review from "/review.png";
import download from "/download.png";
import detail from "/detail.png";
import cancel from "/cancel.png";
import wishlist from "/wishlist.png";
import coupon from "/promo-code.png";
import order from "/order-delivery.png";
import contributions from "/business.png";
import profile from "/user.png";

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
            <p className="flex items-center gap-2">
              <img src={contributions} className="w-5 h-5" alt="" />
              Total Contributor
            </p>
            <p className="flex items-center gap-2">
              <img src={detail} className="w-5 h-5" alt="" />
              Payment Details
            </p>
          </section>
        </div>
        <div className="flex flex-col gap-5">
          <h1 className="font-semibold">Downloaded Offers</h1>
          <section className="flex flex-col gap-3.5 pl-5">
            <p className="flex items-center gap-2">
              <img src={download} className="w-5 h-5" alt="" />
              Download Offers
            </p>
          </section>
        </div>
        <div className="flex flex-col gap-5">
          <h1 className="font-semibold">My Account</h1>
          <section className="flex flex-col gap-3.5 pl-5">
            <Link to={"/profile"}>
              <p className="flex items-center gap-2">
                <img src={profile} className="w-5 h-5" alt="" />
                My Profile
              </p>
            </Link>
          </section>
        </div>
        <div className="flex flex-col gap-5">
          <h1 className="font-semibold">My Orders</h1>
          <section className="flex flex-col gap-3.5 pl-5">
            <Link to={"/profile/orders"}>
              <p className="flex items-center gap-2">
                <img src={order} className="w-5 h-5" alt="" />
                My Orders
              </p>
            </Link>
            <p className="flex items-center gap-2">
              <img src={cancel} className="w-5 h-5" alt="" />
              My Cancelled Orders
            </p>
          </section>
        </div>
        <div className="flex flex-col gap-5">
          <h1 className="font-semibold">Coupons & Gifts</h1>
          <section className="flex flex-col gap-2.5 pl-5">
            <p className="flex items-center gap-2">
              <img src={coupon} className="w-5 h-5" alt="" />
              My Coupons
            </p>
            <p className="flex items-center gap-2">
              <img src={wishlist} className="w-5 h-5" alt="" />
              Wishlists
            </p>
            <p className="flex gap-2 items-center">
              <img src={review} className="w-5 h-5" alt="" /> My Reviews
            </p>
          </section>
        </div>
        <h1 className="font-bold">My Contribution List</h1>
        <h1 className="font-bold">Contribute New Business</h1>
      </div>
      <div className="bg-white lg:w-4/5 p-16 flex flex-col gap-10 rounded-md">
        <Outlet />
      </div>
    </div>
  );
};

export default Profile;
