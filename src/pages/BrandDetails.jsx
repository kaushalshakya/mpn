import React from "react";
import useAuthStore from "../store/authStore";
import cover from "/cover.png";
import brand from "/brand.png";

const BrandDetails = () => {
  const token = useAuthStore((state) => state.token);

  console.log(token);

  return (
    <div className="flex flex-col">
      <div>
        <div className="w-full relative">
          <img src={cover} className="w-full" alt="" />
        </div>
        <img
          src={brand}
          className="rounded-full w-56 absolute top-[23rem] left-[4rem]"
          alt=""
        />
      </div>
    </div>
  );
};

export default BrandDetails;
