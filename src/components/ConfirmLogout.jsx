import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useAuthStore from "../store/authStore";
import { useMutation } from "@tanstack/react-query";
import { toastTheme } from "./toastTheme";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import api from "../axios/axiosInterceptor";

const ConfirmLogout = ({ setLogout, setAuthenticated }) => {
  const auth = useAuthStore();
  const navigate = useNavigate();

  const logoutConfirm = async () => {
    const response = await api.post(
      import.meta.env.VITE_staging_URL + "user/logout",
      {},
      {
        headers: {
          Authorization: `Bearer ${auth.token}`,
        },
      }
    );
    return response.data;
  };

  const { setUser, setIsAuthenticated, setToken } = useAuthStore();

  const mutation = useMutation(logoutConfirm, {
    onSuccess: (data) => {
      setUser(null);
      setIsAuthenticated(false);
      setToken(null);
      setAuthenticated(false);
      Cookies.remove("refreshToken");
    },
    onError: (error) => {
      toast.error(error.response.data.message, toastTheme);
    },
  });

  const handleLogout = () => {
    mutation.mutate();
    setLogout(false);
    setTimeout(() => {
      navigate("/");
    }, 300);
  };
  const cancelLogout = () => {
    setLogout(false);
  };
  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center z-[1000]">
        <div className="modal modal-open">
          <div className="modal-box">
            <h2 className="text-xl mb-1 font-bold">Confirm Logout</h2>
            <p>Are you sure you want to log out?</p>
            <div className="modal-action">
              <button className="btn btn-primary" onClick={handleLogout}>
                Yes, Logout
              </button>
              <button className="btn btn-ghost" onClick={cancelLogout}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default ConfirmLogout;
