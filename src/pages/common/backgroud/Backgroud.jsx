import React from "react";
import "./backgroud.scss";
import { A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import imgLeaves from "../../../assets/img/introduce/image_leaves_01.avif";
const Backgroud = ({ bgSlide, title, home }) => {
  return (
    <div className="background">
      <div className="background-swipper">
        <Swiper
          // install Swiper modules
          modules={[A11y, Autoplay]}
          slidesPerView={1}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
        >
          {bgSlide.map((item) => (
            <SwiperSlide key={item.id}>
              <div
                style={{ backgroundImage: `url(${item.src})` }}
                className={`background-swipper-show ${home ? "home" : ""}`}
              ></div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {!home && (
        <div className="background-content">
          <img src={imgLeaves} alt="img leaves" />
          <h1 className="elementor-heading-title">{title}</h1>
        </div>
      )}
    </div>
  );
};
export default Backgroud;
