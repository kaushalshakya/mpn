import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_staging_URL,
});

api.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    console.log(error);
  }
);
