import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Album from "../Page/AlbumPage/Album";
import Contact from "../Page/contact/contact";
import Endow from "../Page/endow/endow";
import Home from "../Page/home/home";
import Introduce from "../Page/introduce/introduce";
import News from "../Page/news/News";
import Price from "../Page/price/Price";
import Service from "../Page/service/Service";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
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
    ],
  },
]);
