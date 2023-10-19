import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Loader from "../Loader";
import Heart3LineIcon from "remixicon-react/Heart3LineIcon";
import Heart3FillIcon from "remixicon-react/Heart3FillIcon";
import share from "/share.png";

const PostsSlider = ({ queryKey, endpoint }) => {
  const [liked, setLiked] = useState({});

  const { isLoading, error, data } = useQuery({
    queryKey: queryKey,
    queryFn: async () => {
      const response = await axios.get(
        import.meta.env.VITE_mock_api_url + endpoint
      );
      return response.data;
    },
  });

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <div>Error Message: {error.message}</div>;
  }

  return (
    <div className="carousel carousel-center w-full p-4 space-x-4 bg-base-100 rounded-box">
      {data.map((content) => (
        <div
          key={content.id}
          className="carousel-item flex flex-col gap-5 w-96"
        >
          <figure>
            <img src={content.image} className="rounded-md" alt="Shoes" />
          </figure>
          <div className="flex flex-col gap-5">
            <div className="flex items-center justify-between">
              <h2 className="card-title">{content.name}</h2>
              <div className="flex items-center gap-2">
                <div
                  className="select-none"
                  onClick={() =>
                    setLiked((prevLiked) => ({
                      ...prevLiked,
                      [content.id]: !prevLiked[content.id],
                    }))
                  }
                >
                  {liked[content.id] ? <Heart3FillIcon /> : <Heart3LineIcon />}
                </div>
                <img src={share} className="w-[22px] h-[22px]" alt="" />
              </div>
            </div>
            <p className="text-sm text-gray-500">{content.description}</p>
            <div className="flex items-center gap-2">
              <img src={content.logo} className="rounded-full w-8 h-8" alt="" />
              <p className="text-sm">{content.brand_name}</p>
            </div>
            <div className="flex text-sm font-bold gap-2">
              <p>
                Likes: {liked[content.id] ? content.likes + 1 : content.likes}
              </p>
              <p>Clicks: {content.clicks}</p>
              <p>Views: {content.views}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostsSlider;
