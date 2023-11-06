import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Loader from "../Loader";

const Offers = ({ queryKey, endpoint }) => {
  const { isLoading, error, data } = useQuery({
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
    return <div>{error.message}</div>;
  }

  return <div>Offers</div>;
};

export default Offers;
