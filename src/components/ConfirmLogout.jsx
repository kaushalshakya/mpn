import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useAuthStore from "../store/authStore";

const ConfirmLogout = ({ setLogout }) => {
  const toastTheme = {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
  };

  const { setUser, setIsAuthenticated, setToken } = useAuthStore();

  const handleLogout = () => {
    setUser(null);
    setIsAuthenticated(false);
    setToken(null);
    toast.success("Logged out successfully", toastTheme);
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
