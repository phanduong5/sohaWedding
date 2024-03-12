import React from "react";
import { domainApp } from "../../router/router";
import Backgroud from "../common/backgroud/Backgroud";
import AlbumWending from "../common/album-wending/AlbumWending";
import "./Album.scss";
import CommonContext from "../common/commonContext/CommonContext";
import AnhCuoiStudio from "../../assets/img/StylePhoto/Studio Photo/anhchonj.jpg"
import AnhCuoiStudio_vespa from "../../assets/img/Abumle_ảnh_cươi/ảnh_studio_2/anhchon.jpg"
import AnhCuoiDuongPho from "../../assets/img/StylePhoto/Studio anh vespa car photo/anhchon.jpg"
import AnhCuoiStudioAoDai from "../../assets/img/StylePhoto/Studio and Ao Dai/Photochose.jpg"
import AnhCuoiStudioNgoaiTroi from "../../assets/img/Abumle_ảnh_cươi/ảnh_chụp_hồ/anhchon.jpg"
import AnhCuoiStudioNgoaiTroitoi from "../../assets/img/Abumle_ảnh_cươi/ảnh_chụp_ngoài_trời_tối/anhchon.jpg"
import AnhCuoiPhimTruong from "../../assets/img/Abumle_ảnh_cươi/phimtruong1/anhchon.jpg"
import AnhCuoiStudioNgoaiDuong from "../../assets/img/StylePhoto/Studio and Metro/PHOTOCHOSE.jpg"
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
      //src: `${domainApp}/images/service/ảnh cưới studio.avif`,
      src: AnhCuoiStudio
    },
    {
      id: 2,
      name: "ảnh cưới studio + xe vespa cổ",
      //src: `${domainApp}/images/service/ảnh cưới studio + xe vespa cổ.webp`,
      src : AnhCuoiStudio_vespa
    },
    {
      id: 3,
      name: "ảnh cưới santorini + đường phố",
      //src: `${domainApp}/images/service/ảnh cưới santorini + đường phố.avif`,
      src : AnhCuoiDuongPho
    },
    {
      id: 4,
      name: "ảnh Áo Dài + studio thứ 2",
      //src: `${domainApp}/images/service/ảnh cưới xe vespa + studio thứ 2.jpg`,
      src : AnhCuoiStudioAoDai
    },
    {
      id: 5,
      name: "ảnh cưới studio ngoài trời",
      //src: `${domainApp}/images/service/ảnh cưới studio + ga tàu điện.jpg`,
      src : AnhCuoiStudioNgoaiTroitoi
    },
    {
      id: 6,
      name: "ảnh cưới studio + hồ tây",
      //src: `${domainApp}/images/service/ảnh cưới studio + hồ tây.avif`,
      src : AnhCuoiStudioNgoaiTroi
    },
    {
      id: 7,
      name: "ảnh cưới phim trường 5 garden + cafe",
      //src: `${domainApp}/images/service/ảnh cưới phim trường 5 garden + cafe.webp`,
      src : AnhCuoiPhimTruong
    },
    {
      id: 8,
      name: "ảnh cưới ngoài trời + áo dài vintage",
      //src: `${domainApp}/images/service/ảnh cưới studio + áo dài vintage.avif`,
      src : AnhCuoiStudioNgoaiDuong
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
      <CommonContext />
    </div>
  );
};

export default Album;
