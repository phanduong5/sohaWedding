import React from "react";
import Header from "./pages/common/header/Header";
import { Outlet } from "react-router-dom";
import Footer from "./pages/common/footer/Footer";
import PrickContact from "./pages/common/prickContact/PrickContact";

const Layout = () => {
  return (
    <div className="layout">
      <Header />
      <Outlet />
      <Footer />
      <PrickContact/>
    </div>
  );
};

export default Layout;
