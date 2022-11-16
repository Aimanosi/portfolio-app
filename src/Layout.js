import React from "react";
import Navbar from "./home page/navbar/Navbar";
import Footer from "./home page/footer/Footer";
import { Outlet } from "react-router-dom";
const Layout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
