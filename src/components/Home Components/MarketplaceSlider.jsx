import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import Loader from "../Loader";

const MarketplaceSlider = ({ queryKey, endpoint }) => {
  const { isLoading, error, data } = useQuery({
    queryKey: queryKey,
    queryFn: async () => {
      const response = await axios.get(
        `https://6526314267cfb1e59ce7fae8.mockapi.io/api/v1/${endpoint}`
      );
      return response.data;
    },
  });

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="carousel carousel-center lg:w-[86rem] rounded-lg space-x-4">
      {data.map((content) => (
        <div
          className="carousel-item flex bg-base-200 rounded-md cursor-pointer px-4 py-2 flex-col"
          key={content.id}
        >
          <h1 className="text-lg font-semibold">{content.name}</h1>
          <img
            src={content.image}
            className="rounded-md w-[25rem] h-full"
            alt={content.name}
          />
          <p className="text-sm">Shop Now</p>
        </div>
      ))}
    </div>
  );
};

export default MarketplaceSlider;
