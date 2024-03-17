import React from "react";
import ImageMove from "../common/backgroud/Backgroud.jsx";
import ImageOne from "../../assets/img/anhchay1.jpg";
import ImageTwo from "../../assets/img/anhchay2.jpg";
import ImageThree from "../../assets/img/anhchay3.jpg";
import ContextHome from "../common/commonContext/CommonContext.jsx";
import ServiceHome from "../common/commonService/CommonService.jsx";
import "../home/home.scss";
import Feedback from "../common/common_feedback/Feedback.jsx";
import section2Img from "../../assets/img/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faYoutube,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import AlbumWending from "../common/album-wending/AlbumWending.jsx";
import { domainApp } from "../../router/router.js";
import DetailConsultation from "../common/detail-consultation/DetailConsultation.jsx";
import AnhCuoiStudio from "../../assets/img/StylePhoto/Studio Photo/anhchonj.jpg"
import AnhCuoiStudio_vespa from "../../assets/img/Abumle_ảnh_cươi/ảnh_studio_2/anhchon.jpg"
import AnhCuoiDuongPho from "../../assets/img/StylePhoto/Studio anh vespa car photo/anhchon.jpg"
import AnhCuoiStudioAoDai from "../../assets/img/StylePhoto/Studio and Ao Dai/Photochose.jpg"
import AnhCuoiStudioNgoaiTroi from "../../assets/img/Abumle_ảnh_cươi/ảnh_chụp_hồ/anhchon.jpg"
import AnhCuoiStudioNgoaiTroitoi from "../../assets/img/Abumle_ảnh_cươi/ảnh_chụp_ngoài_trời_tối/anhchon.jpg"
import AnhCuoiPhimTruong from "../../assets/img/Abumle_ảnh_cươi/phimtruong1/anhchon.jpg"
import AnhCuoiStudioNgoaiDuong from "../../assets/img/StylePhoto/Studio and Metro/PHOTOCHOSE.jpg"

const Home = () => {
  const listImage = [
    {
      id: 1,
      src: ImageOne,
    },
    {
      id: 2,
      src: ImageTwo,
    },
    {
      id: 3,
      src: ImageThree,
    },
  ];
  const listIcon = [faFacebookF, faTwitter, faYoutube, faTiktok];
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
    <div className="home introduce service">
      <ImageMove home bgSlide={listImage} />
      <div className="section-2">
        <div style={{ position: "relative" }}>
          <div class="elementor-shape elementor-shape-top" data-negative="true">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1000 100"
              preserveAspectRatio="none"
            >
              <path
                class="elementor-shape-fill"
                d="M790.5,93.1c-59.3-5.3-116.8-18-192.6-50c-29.6-12.7-76.9-31-100.5-35.9c-23.6-4.9-52.6-7.8-75.5-5.3
	c-10.2,1.1-22.6,1.4-50.1,7.4c-27.2,6.3-58.2,16.6-79.4,24.7c-41.3,15.9-94.9,21.9-134,22.6C72,58.2,0,25.8,0,25.8V100h1000V65.3
	c0,0-51.5,19.4-106.2,25.7C839.5,97,814.1,95.2,790.5,93.1z"
              ></path>
            </svg>{" "}
          </div>
        </div>
        <div className="elementor-container custom-padding">
          <div className="row d-flex align-items-center">
            <div className="col-12 col-md-6 col-sm-12 section-2-left">
              <img src={section2Img} width="100%" alt="section2Img" />
            </div>
            <div className="col-12 col-md-6 col-sm-12 section-2-right">
              <h6 className="elementor-heading-title elementor-widget">
                VỀ SOHA WEDDING
              </h6>
              <h2 className="elementor-heading-title elementor-widget">
                STUDIO ẢNH CƯỚI VỚI DỊCH VỤ CHUYÊN NGHIỆP HÀNG ĐẦU
              </h2>
              <div className="elementor-element">
                <p>
                  Được thành lập từ năm 2016, SOHA WEDDING đã được hơn 5000 cặp
                  đôi tin tưởng và lựa chọn đồng hành. Không chỉ nổi tiếng về
                  chụp ảnh cưới, tại SOHA WEDDING còn cung cấp nhiều dịch vụ
                  khác như cho thuê váy cưới, vest cưới, áo dài, quay phóng sự
                  cưới, makeup cô dâu, chụp ảnh gia đình; đào tạo nghề chụp ảnh
                  cưới, photoshop và dựng video cưới hỏi; in thiệp cưới,...
                </p>
              </div>
              <div className="elementor-element d-flex mt-4">
                {listIcon.map((item, index) => (
                  <div key={index} className="icon-item">
                    <FontAwesomeIcon icon={item} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="Cange">
        <ServiceHome />
      </div>
      <div className="elementor-container">
        <AlbumWending
          albumAnhCuoi={albumAnhCuoi}
          title="Album Ảnh Cưới"
          content="Đa số khách hàng SOHA là các cặp đôi trẻ có phong cách thẩm mỹ
                hiện đại"
        />
      </div>
      <section className="service-section service-section-4">
        <DetailConsultation />
      </section>
      <div className="Feedback_Home">
        <Feedback />
      </div>
      <ContextHome />
    </div>
  );
};
export default Home;
