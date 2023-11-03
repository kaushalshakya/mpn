import axios from "axios";
import Cookies from "js-cookie";
import useAuthStore from "../store/authStore";

const api = axios.create({
  baseURL: import.meta.env.VITE_staging_URL,
});

api.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      const refreshToken = Cookies.get("refreshToken");
      try {
        const { data } = await axios.post(
          import.meta.env.VITE_staging_URL + "user/refresh-token",
          {},
          {
            headers: {
              Authorization: refreshToken,
            },
          }
        );
        const { setToken } = useAuthStore();
        api.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${data.access_token}`;
        setToken(data.access_token);
        return api(originalRequest);
      } catch (err) {
        console.log(err);
      }
    }
    return Promise.reject(error);
  }
);

export default api;
