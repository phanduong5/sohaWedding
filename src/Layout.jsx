import React from "react";
import Header from "./pages/common/header/Header";
import { Outlet } from "react-router-dom";
import Footer from "./pages/common/footer/Footer";

const Layout = () => {
  return (
    <div className="layout">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
