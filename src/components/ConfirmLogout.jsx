import React, { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useAuthStore from "../store/authStore";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { toastTheme } from "./toastTheme";

const ConfirmLogout = ({ setLogout, setAuthenticated }) => {
  const navigate = useNavigate();
  const auth = useAuthStore();

  const logoutConfirm = async () => {
    const response = await axios.post(
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
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const handleLogout = () => {
    mutation.mutate();
    setLogout(false);
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
