import React, { useState } from "react";
import { useLocation } from "react-router";
import Backgroud from "../common/backgroud/Backgroud";
import CommonContext from "../common/commonContext/CommonContext";
import "./Album.scss";
import { imageAlbumDetail } from "../mock-data/imagesFake";

const AlbumDetail = () => {
  let location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const idAlbum = queryParams.get("id");
  const imageAlbumList = imageAlbumDetail();
  const bgSlide = [
    {
      id: 1,
      src: "http://localhost:3000/images/introduce/about_slider_01.jpg",
    },
    {
      id: 2,
      src: "http://localhost:3000/images/introduce/about_slider_02.jpg",
    },
    {
      id: 3,
      src: "http://localhost:3000/images/introduce/about_slider_03.jpg",
    },
    {
      id: 4,
      src: "http://localhost:3000/images/introduce/about_slider_02.jpg",
    },
    {
      id: 5,
      src: "http://localhost:3000/images/introduce/about_slider_01.jpg",
    },
    {
      id: 6,
      src: "http://localhost:3000/images/introduce/about_slider_03.jpg",
    },
  ];

  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseMove = (index, e) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = e.target.getBoundingClientRect();

    const rotateYValue = -30 * ((clientX - left - width / 2) / width);
    const rotateXValue = 30 * ((clientY - top - height / 2) / height);

    setRotateY(rotateYValue);
    setRotateX(rotateXValue);
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setHoveredIndex(null);
  };

  return (
    <div className="service album-detail">
      <Backgroud bgSlide={bgSlide} title={imageAlbumList[idAlbum - 1].name} />
      {/* Backgroud component */}
      <div className="elementor-container">
        <div className="gallery d-flex flex-column">
          {imageAlbumList[idAlbum - 1].list.map((image, index) => (
            <div
              className="image-container col-md-4"
              key={index}
              onMouseMove={(e) => handleMouseMove(index, e)}
              onMouseLeave={handleMouseLeave}
            >
              <img
                src={image}
                alt={`Image ${index}`}
                className="album-detail-img"
                style={{
                  transform:
                    hoveredIndex === index
                      ? `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1, 1, 1)`
                      : "",
                }}
              />
            </div>
          ))}
        </div>
      </div>
      <CommonContext />
    </div>
  );
};

export default AlbumDetail;
