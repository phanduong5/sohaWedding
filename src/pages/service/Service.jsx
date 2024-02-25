import React from "react";
import "./service.scss";
import dvChupAnhCuoiImg from "../../assets/img/service/dich-vu-chup-anh-cuoi.webp";
import dvThueVayCuoiImg from "../../assets/img/service/cho-thue-vay-cuoi-1.webp";
import dvPhongSuImg from "../../assets/img/service/chup-quay-phong-su-ngay-cuoi.avif";
import dvMakeUpImg from "../../assets/img/service/make-up-co-dau.avif";
import dvChupAnhGiaDinhImg from "../../assets/img/service/Dich-vu-Chup-anh-gia-dinh.avif";
import dvThiepCuoiImg from "../../assets/img/service/dich-vu-thiep-cuoi.avif";
import dvDaoTaoNgheImg from "../../assets/img/service/dao-tao-nghe.avif";
import { domainApp } from "../../router/router";
import DetailConsultation from "../common/detail-consultation/DetailConsultation";

const Service = () => {
  const section2Info = [
    {
      image: dvChupAnhCuoiImg,
      title: "DỊCH VỤ CHỤP ẢNH CƯỚI",
      content:
        "Đội ngũ nhiếp ảnh gia chuyên nghiệp - Trẻ trung - Tận tâm, hỗ trợ nhiệt tình giúp cặp đôi luôn có những concept độc đáo cho album ảnh cưới đẹp nhất.",
      more: "TÌM HIỂU THÊM",
    },
    {
      image: dvThueVayCuoiImg,
      title: "DỊCH VỤ CHO THUÊ VÁY CƯỚI",
      content:
        "Sở hữu 2 thương hiệu váy dưới độc quyền là JEJU WEDDING và BORA Bridal, với hơn 2000+ mẫu váy cưới được thiết kế riêng, độc đáo cho cô dâu lựa chọn.",
      more: "TÌM HIỂU THÊM",
    },
    {
      image: dvPhongSuImg,
      title: "DỊCH VỤ CHỤP/ QUAY PHÓNG SỰ NGÀY CƯỚI",
      content:
        "Bắt trọn từng khoảnh khắc tuyệt vời, cảm xúc của cô dâu - chú rể và đại gia đình 2 bên giúp cặp đôi lưu lại những kỉ niệm tuyệt đẹp bằng phóng sự.",
      more: "TÌM HIỂU THÊM",
    },
    {
      image: dvMakeUpImg,
      title: "DỊCH VỤ MAKE-UP CÔ DÂU",
      content:
        "Make-up artist chuyên nghiệp, tỉ mỉ tới từng chi tiết nhỏ mang đến cho cô dâu khuôn mặt và mái tóc xinh đẹp, nổi bật nhất trong ngày trọng đại",
      more: "TÌM HIỂU THÊM",
    },
    {
      image: dvChupAnhGiaDinhImg,
      title: "DỊCH VỤ CHỤP ẢNH GIA ĐÌNH",
      content:
        "Ghi dấu những khoảnh khắc đáng nhớ của của gia đình bằng những bức ảnh gắn kết tình thân.",
      more: "TÌM HIỂU THÊM",
    },
    {
      image: dvThiepCuoiImg,
      title: "DỊCH VỤ THIỆP CƯỚI",
      content:
        "Dịch vụ in thiệp cưới nhanh, đẹp, giá rẻ, xưởng in trực tiếp không qua trung gian.",
      more: "TÌM HIỂU THÊM",
    },
    {
      image: dvDaoTaoNgheImg,
      title: "DỊCH VỤ ĐÀO TẠO NGHỀ",
      content:
        "Đào tạo nghề chụp ảnh cưới, photoshop ảnh và dựng video cưới hỏi chuyên nghiệp, trang bị đầy đủ kỹ năng giúp học viên tự tin mở studio ảnh cưới riêng.",
      more: "TÌM HIỂU THÊM",
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
    <div className="service">
      <section className="service-section service-section-1 service-bg">
        <div className="elementor-container">
          <div className="elementor-column">
            <div className="elementor-widget-container">
              <h6 className="elementor-heading-title">JEJU WEDDING</h6>
            </div>
            <div className="elementor-element elementor-widget">
              <h1 className="elementor-heading-title">CÁC DỊCH VỤ TẠI JEJU</h1>
            </div>
            <div className="elementor-widget">
              <span className="elementor-heading-title span">
                Cung cấp nhiều dịch vụ khác như cho thuê váy cưới, vest cưới, áo
                dài, quay phóng sự cưới, makeup cô dâu, chụp ảnh gia đình; đào
                tạo nghề chụp ảnh cưới, photoshop và dựng video cưới hỏi; in
                thiệp cưới,...
              </span>
            </div>
            <div className="elementor-widget d-flex">
              <a href="" className="elementor-button-link">
                LIÊN HỆ
              </a>
            </div>
          </div>
        </div>
        <div
          className="elementor-shape elementor-shape-bottom w-100"
          data-negative="false"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1000 100"
            preserveAspectRatio="none"
          >
            <path
              className="elementor-shape-fill"
              d="M421.9,6.5c22.6-2.5,51.5,0.4,75.5,5.3c23.6,4.9,70.9,23.5,100.5,35.7c75.8,32.2,133.7,44.5,192.6,49.7
          c23.6,2.1,48.7,3.5,103.4-2.5c54.7-6,106.2-25.6,106.2-25.6V0H0v30.3c0,0,72,32.6,158.4,30.5c39.2-0.7,92.8-6.7,134-22.4
          c21.2-8.1,52.2-18.2,79.7-24.2C399.3,7.9,411.6,7.5,421.9,6.5z"
            ></path>
          </svg>{" "}
        </div>
      </section>
      <section className="service-section service-section-2">
        <div
          className="elementor-shape elementor-shape-top w-100"
          data-negative="true"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1000 100"
            preserveAspectRatio="none"
          >
            <path
              className="elementor-shape-fill"
              d="M790.5,93.1c-59.3-5.3-116.8-18-192.6-50c-29.6-12.7-76.9-31-100.5-35.9c-23.6-4.9-52.6-7.8-75.5-5.3
	c-10.2,1.1-22.6,1.4-50.1,7.4c-27.2,6.3-58.2,16.6-79.4,24.7c-41.3,15.9-94.9,21.9-134,22.6C72,58.2,0,25.8,0,25.8V100h1000V65.3
	c0,0-51.5,19.4-106.2,25.7C839.5,97,814.1,95.2,790.5,93.1z"
            ></path>
          </svg>{" "}
        </div>
        {section2Info.map((item, index) => (
          <div
            key={index}
            className={`elementor-container d-flex justify-content-center ${
              index % 2 == 0 ? "" : "flex-row-reverse"
            }`}
          >
            <div className="left">
              <img
                src={item.image}
                width={570}
                height="auto"
                alt="dich-vu-chup-anh-cuoi"
              />
            </div>
            <div className="right d-flex align-items-center">
              <div className="d-flex flex-wrap">
                <div className="elementor-widget elementor-heading-title">
                  <h3 className="elementor-heading-title">{item.title}</h3>
                </div>
                <div className="elementor-widget elementor-heading-title span">
                  {item.content}
                </div>
                <div className="elementor-widget w-100">
                  <div className="elementor-divider w-100">
                    <span className="separator"></span>
                  </div>
                </div>
                <div className="elementor-widget elementor-button-link d-flex">
                  {item.more}
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>
      <section className="service-section service-section-3">
        <div className="service-section-header">
          <h2 className="elementor-widget-container elementor-heading-title">
            Album Ảnh Cưới
          </h2>
          <div className="elementor-widget-container">
            <span className="elementor-heading-title">
              Đa số khách hàng JEJU là các cặp đôi trẻ có phong cách thẩm mỹ
              hiện đại
            </span>
          </div>
        </div>
        <div className="elementor-widget-container overflow-hidden">
          <div className="jet-listing row">
            {albumAnhCuoi.map((album) => (
              <div
                key={album.id}
                className="jet-item col col-md-3 col-sm-6 col-12"
              >
                <img
                  src={album.src}
                  width="100%"
                  height="auto"
                  alt={album.name}
                />
                <h4 className="elementor-heading-title">{album.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="service-section service-section-4">
        <DetailConsultation />
      </section>
    </div>
  );
};

export default Service;
