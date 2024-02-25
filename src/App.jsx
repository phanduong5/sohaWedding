import React from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/router";
import logo from "./assets/img/LOGO-WEB.png";
import Header from "./pages/common/header/Header";
import Footer from "./pages/common/footer/Footer";
import "./App.scss";

const App = () => {
  return (
    <div id="app">
      <Header />
      <RouterProvider router={router} />
      {/* <Footer /> */}
    </div>
  );
};

export default App;
