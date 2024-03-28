import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Album from "../pages/album/Album.jsx";
import Contact from "../pages/contact/Contact.jsx";
import Endow from "../pages/endow/Endow.jsx";
import Home from "../pages/home/Home.jsx";
import Introduce from "../pages/introduce/Introduce.jsx";
import News from "../pages/news/News.jsx";
import Price from "../pages/price/pricePhotoWedding/Price.jsx";
import Service from "../pages/service/Service.jsx";
import NotFound from "../pages/not-found/NotFound.jsx";
import Layout from "../Layout.jsx";
import AlbumDetail from "../pages/album/AlbumDetail.jsx";
import PriceAudio from "../pages/price/priceAudioWedding/priceAudio.jsx";
import ServiceDetail from "../pages/service-detail/ServiceDetail.jsx";
import ServiceDetailHome from "../pages/common/commonService/ServiceDetailHome.jsx";

export const domainApp = "https://sohawedding.com/";
  

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
        path: "service-detail",
        element: <ServiceDetailHome/>
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
        path: "dich-vu-thiep-cuoi",
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
        element: <Navigate to="/home" />,
      },
    ],
  },
]);
