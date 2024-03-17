import React from "react";
import "./introduce.scss";
import Backgroud from "../common/backgroud/Backgroud";
import section2Img from "../../assets/img/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faYoutube,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import AlbumWending from "../common/album-wending/AlbumWending";
import { domainApp } from "../../router/router";
import CommonContext from "../common/commonContext/CommonContext";
import DetailConsultation from "../common/detail-consultation/DetailConsultation";
import AnhCuoiStudio from "../../assets/img/StylePhoto/Studio Photo/anhchonj.jpg";
import AnhCuoiStudio_vespa from "../../assets/img/Abumle_ảnh_cươi/ảnh_studio_2/anhchon.jpg";
import AnhCuoiDuongPho from "../../assets/img/StylePhoto/Studio anh vespa car photo/anhchon.jpg";
import AnhCuoiStudioAoDai from "../../assets/img/StylePhoto/Studio and Ao Dai/Photochose.jpg";
import AnhCuoiStudioNgoaiTroi from "../../assets/img/Abumle_ảnh_cươi/ảnh_chụp_hồ/anhchon.jpg";
import AnhCuoiStudioNgoaiTroitoi from "../../assets/img/Abumle_ảnh_cươi/ảnh_chụp_ngoài_trời_tối/anhchon.jpg";
import AnhCuoiPhimTruong from "../../assets/img/Abumle_ảnh_cươi/phimtruong1/anhchon.jpg";
import AnhCuoiStudioNgoaiDuong from "../../assets/img/StylePhoto/Studio and Metro/PHOTOCHOSE.jpg";
const Introduce = () => {
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
  const listIcon = [faFacebookF, faTwitter, faYoutube, faTiktok];
  const trustList = [
    {
      title: "SỰ KHÁC BIỆT",
      content:
        "Khi đến với SOHA Wedding bất kỳ sử dụng dịch vụ đơn lẻ hay đến trọn gói ngày cưới. Bạn sẽ dễ dàng nhận ra SOHA có những đặc điểm khác biệt trên thị trường hiện nay",
    },
    {
      title: "THẤU HIỂU SÂU SẮC",
      content:
        "Trong suốt quá trình sử dụng dịch vụ, chúng tôi luôn đặt nhu cầu của khách hàng trước tiên để luôn luôn điều chỉnh và hoàn thiện mỗi ngày. Để khách hàng cảm nhận được sự tin tưởng từ khi chụp ảnh cưới đến ngày cưới",
    },
    {
      title: "ĐỘI NGŨ CHUYÊN NGHIỆP",
      content:
        "Xây dựng hình ảnh SOHA Wedding là thương hiệu gần gũi, như một người bạn đồng hành của các cặp đôi. Chúng tôi có đội ngũ nhân viên tận tâm, hết mình, vui tính, năng động với tác phong làm việc chuyên nghiệp.",
    },
    {
      title: "ĐA DẠNG DỊCH VỤ CƯỚI",
      content:
        "Trên con đường hoàn thiện để trở thành thương hiệu dịch vụ cưới hàng đầu Việt Nam, SOHA Wedding hiện có các dịch vụ đa dạng giúp những cặp đôi sắp cưới có nhiều sự lựa chọn hơn.",
    },
  ];
  const albumAnhCuoi = [
    {
      id: 1,
      name: "ảnh cưới studio",
      //src: `${domainApp}/images/service/ảnh cưới studio.avif`,
      src: AnhCuoiStudio,
    },
    {
      id: 2,
      name: "ảnh cưới studio + xe vespa cổ",
      //src: `${domainApp}/images/service/ảnh cưới studio + xe vespa cổ.webp`,
      src: AnhCuoiStudio_vespa,
    },
    {
      id: 3,
      name: "ảnh cưới santorini + đường phố",
      //src: `${domainApp}/images/service/ảnh cưới santorini + đường phố.avif`,
      src: AnhCuoiDuongPho,
    },
    {
      id: 4,
      name: "ảnh Áo Dài + studio thứ 2",
      //src: `${domainApp}/images/service/ảnh cưới xe vespa + studio thứ 2.jpg`,
      src: AnhCuoiStudioAoDai,
    },
    {
      id: 5,
      name: "ảnh cưới studio ngoài trời",
      //src: `${domainApp}/images/service/ảnh cưới studio + ga tàu điện.jpg`,
      src: AnhCuoiStudioNgoaiTroitoi,
    },
    {
      id: 6,
      name: "ảnh cưới studio + hồ tây",
      //src: `${domainApp}/images/service/ảnh cưới studio + hồ tây.avif`,
      src: AnhCuoiStudioNgoaiTroi,
    },
    {
      id: 7,
      name: "ảnh cưới phim trường 5 garden + cafe",
      //src: `${domainApp}/images/service/ảnh cưới phim trường 5 garden + cafe.webp`,
      src: AnhCuoiPhimTruong,
    },
    {
      id: 8,
      name: "ảnh cưới ngoài trời + áo dài vintage",
      //src: `${domainApp}/images/service/ảnh cưới studio + áo dài vintage.avif`,
      src: AnhCuoiStudioNgoaiDuong,
    },
  ];
  return (
    <div className="introduce service">
      <Backgroud bgSlide={bgSlide} title="GIỚI THIỆU VỀ SOHA WEDDING" />
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
                Chào mừng quý khách đã đến với SOHA WEDDING
              </h2>
              <div className="elementor-element">
                <p>
                  SOHA WEDDING – Dịch vụ chụp ảnh cưới chuyên nghiệp số 1 tại Hà
                  Nội. Được thành lập từ năm 2016, không chỉ nổi tiếng về chụp
                  ảnh cưới, tại SOHA WEDDING còn cung cấp nhiều dịch vụ khác như
                  cho thuê váy cưới, vest cưới, áo dài, quay phóng sự cưới,
                  makeup cô dâu; chụp ảnh gia đình; đào tạo nghề chụp ảnh cưới,
                  photoshop ảnh và dựng video cưới hỏi; in thiệp cưới,…
                </p>
                <p>
                  SOHA WEDDING hiện có 2 chi nhánh tại Hà Nội, được trang bị đầy
                  đủ cơ sở vật chất và trang thiết bị hiện đại, showroom váy
                  cưới mới với diện tích lên tới 500m2 với công năng 6 phòng váy
                  cưới đủ các dòng váy từ LUXURY đến BASIC, 2 phòng áo dài, 1
                  phòng vest,… thoả sức cho các cặp đôi lựa chọn những mẫu váy
                  cưới được thiết kế riêng HOT TREND nhất thị trường. Cùng với
                  đó là studio chụp ảnh cưới được trang trí độc quyền, khác
                  biệt, duy nhất dành cho các cặp đôi của SOHA WEDDING tại Hà
                  Nội. Luôn cập nhật, không ngừng đổi mới cơ sở vật chất, trang
                  thiết bị hiện đại mới nhất, mang đến cho cặp đôi album ảnh
                  cưới đẹp và ưng ý nhất.{" "}
                </p>
                <p>
                  SOHA WEDDING tự tin là thương hiệu chụp ảnh cưới phong cách
                  Hàn Quốc chất lượng số 1 tại Hà Nội, luôn luôn cập nhật nhanh
                  chóng xu hướng ngành cưới trong và ngoài nước. Ngoài ra, SOHA
                  cũng luôn hỗ trợ và lắng nghe mong muốn của các cặp đôi để đưa
                  ra những tư vấn concept bối cảnh, trang phục phù hợp theo sở
                  thích. Tại SOHA cũng có đa dạng các gói chụp với nhiều mức chi
                  phí khác nhau như gói chụp studio SOHA WEDDING độc quyền, gói
                  chụp phim trường, gói chụp dã ngoại,…
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
        <div style={{ position: "relative" }}>
          <div className="elementor-container custom-padding">
            <div className="elementor-widget-container">
              <h2 class="elementor-heading-title">
                Tại Sao Bạn Có Thể Tin Tưởng Vào SOHA
              </h2>
              <div className="row">
                {trustList.map((item, index) => (
                  <div key={index} className="col-12 col-md-3 row-item">
                    <h3 className="elementor-icon-box-title">{item.title}</h3>
                    <p className="elementor-icon-box-description">
                      {item.content}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div
            class="elementor-shape elementor-shape-bottom"
            data-negative="false"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1000 100"
              preserveAspectRatio="none"
            >
              <path
                class="elementor-shape-fill"
                d="M421.9,6.5c22.6-2.5,51.5,0.4,75.5,5.3c23.6,4.9,70.9,23.5,100.5,35.7c75.8,32.2,133.7,44.5,192.6,49.7
	c23.6,2.1,48.7,3.5,103.4-2.5c54.7-6,106.2-25.6,106.2-25.6V0H0v30.3c0,0,72,32.6,158.4,30.5c39.2-0.7,92.8-6.7,134-22.4
	c21.2-8.1,52.2-18.2,79.7-24.2C399.3,7.9,411.6,7.5,421.9,6.5z"
              ></path>
            </svg>{" "}
          </div>
        </div>
        <AlbumWending
          albumAnhCuoi={albumAnhCuoi}
          title="5000+ CẶP ĐÔI TIN TƯỞNG LỰA CHỌN"
          content="Thật tuyệt vời bởi SOHA WEDDING đã được hơn 5000 cặp đôi tin tưởng và lựa chọn đồng hành. Chúng mình luôn ở đây và lắng nghe điều bạn muốn, cố gắng hết mình ghi lại qua từng khoảnh khắc, từng cung bậc cảm xúc. Sẵn sàng thực hiện mọi mong muốn, mọi concept từ nhẹ nhàng, đơn giản đến sang trọng, độc đáo, dù là phong cách Hàn Quốc hay u Mỹ, hay chỉ là ảnh cưới truyền thống. Tại SOHA có đội ngũ nhiếp ảnh gia, designer, make-up artist chuyên nghiệp, trẻ trung, tận tâm với từng chi tiết trong album ảnh cưới để cho ra những album ảnh cưới hoàn hảo và hài lòng nhất với mỗi khách hàng."
        />
      </div>
      <DetailConsultation />
      <CommonContext />
    </div>
  );
};

export default Introduce;
