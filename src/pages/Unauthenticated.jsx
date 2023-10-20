import React from "react";
import { Link } from "react-router-dom";

const Unauthenticated = () => {
  return (
    <div className="flex items-center mt-64 justify-center">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Unauthenticated!!!</h1>
          <p className="py-6">
            It looks like you are not logged in at the moment. Click on the
            button below to Login!
          </p>
          <Link to={"/login"}>
            <button className="btn btn-primary text-white rounded-md">
              Login
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Unauthenticated;
