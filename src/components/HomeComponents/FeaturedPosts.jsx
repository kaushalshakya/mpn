import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Loader from "../Loader";
import { Link } from "react-router-dom";

const FeaturedPosts = ({ queryKey, endpoint }) => {
  const { isLoading, error, data } = useQuery({
    queryKey,
    queryFn: async () => {
      const response = await axios.get(
        import.meta.env.VITE_fakestore_api_url + endpoint
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
    <div className="carousel carousel-center p-4 space-x-4 h-[475px] bg-base-100 rounded-box">
      {data.map((content) => (
        <Link to={`/product/${content.id}`}>
          <div
            key={content.id}
            className="carousel-item flex flex-col gap-5 w-96"
          >
            <figure>
              <img src={content.image} className="rounded-md h-64" />
            </figure>
            <div className="flex flex-col gap-5">
              <h2 className="card-title overflow-hidden">{content.title}</h2>
              <p className="text-pink-500 font-bold">
                Rs. {content.price * 100}
              </p>
              <p className="text-xs text-gray-500 h-0">
                {content.description.length > 100
                  ? content.description.substring(0, 100) + "..."
                  : content.description}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default FeaturedPosts;
