import React, { useMemo, useState } from "react";
import { useLocation } from "react-router";
import Backgroud from "../common/backgroud/Backgroud";
import CommonContext from "../common/commonContext/CommonContext";
import "./Album.scss";
import { imageAlbumDetail } from "../mock-data/imagesFake";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Counter from "yet-another-react-lightbox/plugins/counter";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/counter.css";
import Masonry from "@mui/lab/Masonry";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { domainApp } from "../../router/router";

const AlbumDetail = () => {
  let location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const idAlbum = queryParams.get("id");
  const imageAlbumList = useMemo(() => {
    return imageAlbumDetail();
  }, []);
  const bgSlide = [
    {
      id: 1,
      src: `${domainApp}/images/introduce/about_slider_01.jpg`,
    },
    {
      id: 2,
      src: `${domainApp}/images/introduce/about_slider_02.jpg`,
    },
    {
      id: 3,
      src: `${domainApp}/images/introduce/about_slider_03.jpg`,
    },
    {
      id: 4,
      src: `${domainApp}/images/introduce/about_slider_02.jpg`,
    },
    {
      id: 5,
      src: `${domainApp}/images/introduce/about_slider_01.jpg`,
    },
    {
      id: 6,
      src: `${domainApp}/images/introduce/about_slider_03.jpg`,
    },
  ];

  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [indexLightbox, setIndexLightbox] = useState(0);

  const handleMouseMove = (index, e) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = e.target.getBoundingClientRect();

    const rotateYValue = -20 * ((clientX - left - width / 2) / width);
    const rotateXValue = 20 * ((clientY - top - height / 2) / height);

    setRotateY(rotateYValue);
    setRotateX(rotateXValue);
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setHoveredIndex(null);
  };

  const albumListLightbox = useMemo(() => {
    const newData = imageAlbumList[idAlbum - 1].list.map((item, index) => ({
      src: item,
      alt: `${item}-${index}`,
      width: 3840,
      height: 2560,
    }));
    return newData;
  }, [imageAlbumList]);

  return (
    <div className="service album-detail">
      <Backgroud bgSlide={bgSlide} title={imageAlbumList[idAlbum - 1].name} />
      {/* Backgroud component */}
      <div className="elementor-container">
        <Masonry columns={3} spacing={1}>
          {imageAlbumList[idAlbum - 1].list.map((image, index) => (
            <div
              className="image-container col-md-4 col-sm-6"
              key={index}
              onMouseMove={(e) => handleMouseMove(index, e)}
              onMouseLeave={handleMouseLeave}
              onClick={() => {
                setIsOpen(true);
                setIndexLightbox(index);
              }}
            >
              <div
                className="image-container-inner"
                style={{
                  transform:
                    hoveredIndex === index
                      ? `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1, 1, 1)`
                      : "",
                }}
              >
                <LazyLoadImage
                  className="album-detail-img"
                  alt={`Image ${index}`}
                  src={image}
                />
                {hoveredIndex === index && <div className="image-fade"></div>}
              </div>
            </div>
          ))}
        </Masonry>
      </div>
      <CommonContext />
      {isOpen && (
        <Lightbox
          index={indexLightbox}
          open={isOpen}
          plugins={[Counter, Zoom, Fullscreen]}
          close={() => setIsOpen(false)}
          slides={albumListLightbox}
        />
      )}
    </div>
  );
};

export default AlbumDetail;
