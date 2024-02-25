import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Album from "../pages/album/Album";
import Contact from "../pages/contact/Contact";
import Endow from "../pages/endow/Endow";
import Home from "../pages/home/Home";
import Introduce from "../pages/introduce/Introduce";
import News from "../pages/news/News";
import Price from "../pages/price/Price";
import Service from "../pages/service/Service";
import NotFound from "../pages/not-found/NotFound";
import Header from "../pages/common/header/Header";
import Layout from "../Layout";

export const domainApp = "http://localhost:3000";

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "album",
        element: <Album />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "endow",
        element: <Endow />,
      },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "introduce",
        element: <Introduce />,
      },
      {
        path: "news",
        element: <News />,
      },
      {
        path: "price",
        element: <Price />,
      },
      {
        path: "service",
        element: <Service />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
      {
        path: "/",
        element: <Navigate to={<Home />} />,
      },
    ],
  },
]);
