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
import Price from "../pages/price/pricePhotoWedding/Price";
import Service from "../pages/service/Service";
import NotFound from "../pages/not-found/NotFound";
import Layout from "../Layout";
import AlbumDetail from "../pages/album/AlbumDetail";
import PriceAudio from "../pages/price/priceAudioWedding/priceAudio";
import ServiceDetail from "../pages/service-detail/ServiceDetail";

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
        path: "album-detail",
        element: <AlbumDetail />,
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
        index: true,
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
        path: "bao+gia+chup+anh+cuoi",
        element: <Price />,
      },
      {
        path: "bao+gia+phong+su+cuoi",
        element: <PriceAudio />,
      },
      {
        path: "service",
        element: <Service />,
      },
      {
        path: "dich-vu-cho-thue-vay-cuoi",
        element: <ServiceDetail />,
      },
      {
        path: "dich-vu-chup-anh-cuoi",
        element: <ServiceDetail />,
      },
      {
        path: "dich-vu-chup-anh-gia-dinh",
        element: <ServiceDetail />,
      },
      {
        path: "dich-vu-chup-quay-phong-su-ngay-cuoi",
        element: <ServiceDetail />,
      },
      {
        path: "dich-vu-make-up-co-dau",
        element: <ServiceDetail />,
      },
      {
        path: "dich-vu-dao-tao-nghe",
        element: <ServiceDetail />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
      {
        path: "/",
        element: <Navigate to="/introduce" />,
      },
    ],
  },
]);
