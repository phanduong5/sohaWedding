import React from "react";
import { domainApp } from "../../router/router";
import Backgroud from "../common/backgroud/Backgroud";
import AlbumWending from "../common/album-wending/AlbumWending";
import "./Album.scss";
import CommonContext from "../common/commonContext/CommonContext";

const Album = () => {
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
  const albumAnhCuoi = [
    {
      id: 1,
      name: "ảnh cưới studio",
      src: `${domainApp}/images/service/ảnh cưới studio.avif`,
    },
    {
      id: 2,
      name: "ảnh cưới studio + xe vespa cổ",
      src: `${domainApp}/images/service/ảnh cưới studio + xe vespa cổ.webp`,
    },
    {
      id: 3,
      name: "ảnh cưới santorini + đường phố",
      src: `${domainApp}/images/service/ảnh cưới santorini + đường phố.avif`,
    },
    {
      id: 4,
      name: "ảnh cưới xe vespa + studio thứ 2",
      src: `${domainApp}/images/service/ảnh cưới xe vespa + studio thứ 2.jpg`,
    },
    {
      id: 5,
      name: "ảnh cưới studio + ga tàu điện",
      src: `${domainApp}/images/service/ảnh cưới studio + ga tàu điện.jpg`,
    },
    {
      id: 6,
      name: "ảnh cưới studio + hồ tây",
      src: `${domainApp}/images/service/ảnh cưới studio + hồ tây.avif`,
    },
    {
      id: 7,
      name: "ảnh cưới phim trường 5 garden + cafe",
      src: `${domainApp}/images/service/ảnh cưới phim trường 5 garden + cafe.webp`,
    },
    {
      id: 8,
      name: "ảnh cưới studio + áo dài vintage",
      src: `${domainApp}/images/service/ảnh cưới studio + áo dài vintage.avif`,
    },
  ];
  return (
    <div className="album service">
      <Backgroud bgSlide={bgSlide} title="ALBUM" />
      <div className="elementor-container album-detail">
        <AlbumWending
          albumAnhCuoi={albumAnhCuoi}
          title="5000+ CẶP ĐÔI TIN TƯỞNG LỰA CHỌN"
          content="Thật tuyệt vời bởi JEJU WEDDING đã được hơn 5000 cặp đôi tin tưởng và lựa chọn đồng hành. Chúng mình luôn ở đây và lắng nghe điều bạn muốn, cố gắng hết mình ghi lại qua từng khoảnh khắc, từng cung bậc cảm xúc. Sẵn sàng thực hiện mọi mong muốn, mọi concept từ nhẹ nhàng, đơn giản đến sang trọng, độc đáo, dù là phong cách Hàn Quốc hay u Mỹ, hay chỉ là ảnh cưới truyền thống. Tại JEJU có đội ngũ nhiếp ảnh gia, designer, make-up artist chuyên nghiệp, trẻ trung, tận tâm với từng chi tiết trong album ảnh cưới để cho ra những album ảnh cưới hoàn hảo và hài lòng nhất với mỗi khách hàng."
          pageIndex="Album"
        />
      </div>
      <div className="elementor-container">
        <CommonContext />
      </div>
    </div>
  );
};

export default Album;
