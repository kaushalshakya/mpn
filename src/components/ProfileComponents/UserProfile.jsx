import React from "react";
import useAuthStore from "../../store/authStore";
import vite from "/vite.svg";
import pencil from "/pencil.png";

const UserProfile = () => {
  const user = useAuthStore((state) => state.user);
  return (
    <>
      <h1 className="text-2xl font-bold text-pink-500">My Profile</h1>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-10">
          <div className="rounded-full shadow-2xl">
            <img
              src={user.user_image ? user.user_image : vite}
              alt=""
              className="w-28 h-28"
            />
          </div>
          <div className="flex flex-col gap-5">
            <p className="text-xl">{user.user_fullname}</p>
            <p className="text-">{user.user_email}</p>
          </div>
        </div>
        <button
          type="button"
          className="btn bg-[#9983ca] hover:bg-primary text-white rounded-md"
        >
          <img src={pencil} className="w-5 h-5 text-white" alt="" /> Edit
          Profile
        </button>
      </div>
      <p className="border mt-5"></p>
      <div className="flex flex-col gap-10 ">
        <h1 className="font-bold text-xl">{user.user_fullname}</h1>
        <div className="flex items-center justify-between">
          <div className="flex flex-col w-2/5 gap-5">
            <p>{user.user_address ? user.user_address : "Not Set"}</p>
            <p>{user.user_mobile ? user.user_mobile : "Not Set"}</p>
            <p>{user.user_email}</p>
          </div>
          <div className="flex w-3/5 flex-col gap-5">
            <p>Reward Collection Method: Not Set</p>
            <p>Member Since: {user.user_join_date}</p>
          </div>
        </div>
      </div>
      <p className="border mt-5"></p>
      <div className="flex items-center justify-end gap-5">
        <button className="btn bg-[#9983ca] hover:bg-primary text-white rounded-md">
          Change Password
        </button>
        <button className="btn bg-pink-500 hover:bg-pink-800 text-white rounded-md">
          Deactivate Account
        </button>
      </div>
    </>
  );
};

export default UserProfile;
