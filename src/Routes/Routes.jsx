import React from "react";
import { Route, Routes as Endpoints } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Advertise from "../pages/Advertise";
import Privacy from "../pages/Privacy";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Profile from "../pages/Profile";
import Unauthenticated from "../pages/Unauthenticated";
import UserProfile from "../components/ProfileComponents/UserProfile";
import UserOrders from "../components/ProfileComponents/UserOrders";

const Routes = () => {
  return (
    <>
      <Navbar>
        <Endpoints>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/advertise" element={<Advertise />} />
          <Route path="/privacy-policy" element={<Privacy />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />}>
            <Route index element={<UserProfile />} />
            <Route path="orders" element={<UserOrders />} />
          </Route>
          <Route path="/unauthenticated" element={<Unauthenticated />} />
        </Endpoints>
      </Navbar>
      <Footer />
    </>
  );
};

export default Routes;
