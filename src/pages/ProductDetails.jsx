import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Loader from "../components/Loader";
import wishlist from "/wishlist.png";

const ProductDetails = () => {
  const { id } = useParams();
  console.log(id);

  const { data, error, isLoading } = useQuery({
    queryKey: ["getSingleProduct", id],
    queryFn: async () => {
      const response = await axios.get(
        import.meta.env.VITE_fakestore_api_url + `products/${id}`
      );
      return response.data;
    },
  });

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  console.log(data);
  const currentDate = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "2-digit",
  });

  return (
    <>
      <div className="p-5">
        <div className="bg-white py-5 px-32 flex items-center gap-[16rem]">
          <div>
            <img src={data.image} className="w-[22rem]" alt="" />
          </div>
          <div className="divider lg:divider-horizontal"></div>
          <div className="flex flex-col gap-5 w-full">
            <h1 className="font-bold text-lg">{data.title}</h1>
            {/* Add Product added date here */}
            <p className="text-gray-500">{currentDate}</p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-5">
                <div className="rating">
                  <input
                    type="radio"
                    name="rating-1"
                    className="mask mask-star"
                    checked={data.rating.rate >= 1}
                  />
                  <input
                    type="radio"
                    name="rating-1"
                    className="mask mask-star"
                    checked={data.rating.rate >= 2}
                  />
                  <input
                    type="radio"
                    name="rating-1"
                    className="mask mask-star"
                    checked={data.rating.rate >= 3}
                  />
                  <input
                    type="radio"
                    name="rating-1"
                    className="mask mask-star"
                    checked={data.rating.rate >= 4}
                  />
                  <input
                    type="radio"
                    name="rating-1"
                    className="mask mask-star"
                    checked={data.rating.rate === 5}
                  />
                </div>
                <p className="text-lg">
                  ({data.rating.count} Customer Ratings)
                </p>
              </div>
              {/* Like and share icon here */}
              <div className="flex gap-2 items-center">
                <p></p>
                <p></p>
              </div>
            </div>
            <p className="divider"></p>
            <p></p>
          </div>
        </div>
        <div></div>
      </div>
    </>
  );
};

export default ProductDetails;
