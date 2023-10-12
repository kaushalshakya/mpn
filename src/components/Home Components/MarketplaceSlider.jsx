import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useEffect, useRef } from "react";
import Loader from "../Loader";

const MarketplaceSlider = ({ queryKey, endpoint }) => {
  const carouselRef = useRef(null);

  const { isLoading, error, data } = useQuery({
    queryKey: queryKey,
    queryFn: async () => {
      const response = await axios.get(
        import.meta.env.VITE_mock_api_url + endpoint
      );
      return response.data;
    },
  });

  useEffect(() => {
    const interval = setInterval(() => {
      if (carouselRef.current) {
        const { scrollWidth, scrollLeft } = carouselRef.current;
        const singleCardWidth =
          carouselRef.current.children[0].offsetWidth + 32;

        // If we're close to the end, reset scroll to start.
        if (scrollLeft + singleCardWidth >= scrollWidth) {
          carouselRef.current.scrollLeft = 0;
        } else {
          carouselRef.current.scrollLeft += singleCardWidth;
        }
      }
    }, 3000); // Every 5 seconds

    // Cleanup the interval on component unmount.
    return () => clearInterval(interval);
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div
      ref={carouselRef}
      className="carousel carousel-center lg:w-[86rem] rounded-lg space-x-4"
    >
      {data.map((content) => (
        <div
          className="carousel-item flex bg-base-200 rounded-md cursor-pointer px-4 py-2 flex-col"
          key={content.id}
        >
          <h1 className="text-lg font-semibold">{content.name}</h1>
          <img src={content.image} className="rounded-md" alt={content.name} />
          <p className="text-sm">Shop Now</p>
        </div>
      ))}
    </div>
  );
};

export default MarketplaceSlider;
