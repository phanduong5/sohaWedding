import React from "react";
import "./service-detail.scss";
import ServiceSlide from "../common/service-slide/ServiceSlide";
import bgImage from "../../assets/img/hero_services-11.jpg";
import CommonContext from "../common/commonContext/CommonContext";
const ServiceDetail = () => {
  return (
    <div className="service-detail service">
      <ServiceSlide
        h6="SOHA WEDDING"
        h1="DỊCH VỤ CHỤP ẢNH CƯỚI CHUYÊN NGHIỆP SỐ 1 TẠI HÀ NỘI"
        btnText="LIÊN HỆ TƯ VẤN"
        bgImage={bgImage}
      />
      <CommonContext />
    </div>
  );
};

export default ServiceDetail;
