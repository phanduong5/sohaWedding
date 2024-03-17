import React from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/router";
import "./App.scss";

const App = () => {
  return (
    <div id="app">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
