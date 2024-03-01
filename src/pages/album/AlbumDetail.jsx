import React from "react";
import { useLocation } from "react-router";
import Backgroud from "../common/backgroud/Backgroud";
import CommonContext from "../common/commonContext/CommonContext";

const AlbumDetail = () => {
  let params = useLocation();
  console.log(params);
  const bgSlide = [
    {
      id: 1,
      src: "http://localhost:3000/images/introduce/about_slider_01.jpg",
    },
  ];
  return (
    <div className="service album-detail">
      <Backgroud bgSlide={bgSlide} title="ẢNH CƯỚI STUDIO" />
      <CommonContext />
    </div>
  );
};

export default AlbumDetail;
