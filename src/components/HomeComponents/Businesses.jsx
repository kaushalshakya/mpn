import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import Loader from "../Loader";

const Businesses = ({ queryKey, endpoint }) => {
  const { isLoading, data, error } = useQuery({
    queryKey,
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
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="carousel carousel-center max-w-[94rem] p-4 mx-[14.5rem] space-x-2 bg-base-100 rounded-box">
      {data.map((content) => (
        <div className="carousel-item max-w-xs" key={content.id}>
          <img src={content.logo} className="rounded-box" />
        </div>
      ))}
    </div>
  );
};

export default Businesses;
