import { Route, Routes as Endpoints, useLocation } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Advertise from "../pages/Advertise";
import Privacy from "../pages/Privacy";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Footer from "../components/Footer";

import React from "react";
import Navbar from "../components/Navbar";

const Routes = () => {
  const location = useLocation();
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
        </Endpoints>
      </Navbar>
      {location.pathname !== "/" && <Footer />}
    </>
  );
};

export default Routes;
