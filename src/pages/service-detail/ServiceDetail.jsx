import React, { useState } from "react";
import "./service-detail.scss";
import ServiceSlide from "../common/service-slide/ServiceSlide";
import bgImage from "../../assets/img/hero_services-11.jpg";
import CommonContext from "../common/commonContext/CommonContext";
import { useLocation } from "react-router-dom";
import { listImagesGiaDinh } from "../mock-data/imagesFake";
import { Masonry } from "@mui/lab";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Counter from "yet-another-react-lightbox/plugins/counter";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Lightbox from "yet-another-react-lightbox";
const ServiceDetail = () => {
  const location = useLocation();
  const ChoThueVayCuoi = () => (
    <div className="elementor-widget-container">
      <h2 className="elementor-heading-title elementor-widget">
        <strong>Dịch vụ cho thuê váy cưới</strong>
      </h2>
    </div>
  );
  const ChupAnhCuoi = () => (
    <div className="elementor-widget-container">
      <p className="service-detail-p">
        JEJU WEDDING tự hào là thương hiệu chụp ảnh cưới nổi tiếng số 1 về phong
        cách chụp ảnh cưới Hàn Quốc tại Hà Nội. Chụp ảnh cưới Hàn Quốc luôn là
        một lựa chọn được nhiều cặp đôi Việt yêu thích khi lựa chọn phong cách
        cho album ảnh cưới. Ngoài ra, đến với JEJU cặp đôi còn được tư vấn thực
        hiện hoá những mong muốn, ý tưởng riêng theo đúng concept dâu rể yêu
        cầu.
      </p>
      <p className="service-detail-p">
        Gói chụp đa dạng, phong phú các concept chụp hình từ truyền thống đến
        độc đáo – lạ mắt theo xu hướng ngành cưới. Phong cách chụp hình cưới đáp
        ứng mọi mong muốn của khách hàng, dù là phong cách Hàn Quốc hay u Mỹ,
        hay chỉ là ảnh cưới truyền thống.
      </p>
      <ul className="ul-1">
        <li className="service-detail-li">
          <strong className="service-detail-strong">
            Chụp ảnh cưới tại Studio độc quyền của JEJU WEDDING:{" "}
          </strong>
          Tất cả bối cảnh trang trí đều là độc nhất, nhiều khung cảnh concept
          cho cô dâu – chú rể lựa chọn, tiết kiệm chi phí tối đa, thoải mái thời
          gian chụp mà không bị tính chi phí studio. Là studio độc quyền của
          JEJU nên những góc chụp là duy nhất, không bị trùng lặp với các phim
          trường hoặc studio khác. Tại Studio được trang bị hệ thống đèn chụp,
          hắt sáng, phông chụp,… loại cao cấp nhất hiện nay, đảm bảo các yêu cầu
          khắt khe nhất về ánh sáng trong studio.
        </li>
        <li className="service-detail-li">
          <strong className="service-detail-strong">
            Chụp ảnh cưới tại phim trường:{" "}
          </strong>
          Các phim trường nổi tiếng trên địa bàn Hà Nội như Phim trường Smiley
          Ville, Phim trường Happy Land, Phim trường Santorini, Phim trường
          Lavender Park,…
        </li>
        <li className="service-detail-li">
          <strong className="service-detail-strong">
            Chụp ảnh cưới dã ngoại:
          </strong>
          Những địa điểm chụp ảnh cưới nổi tiếng ở nội thành hoặc ngoại thành Hà
          Nội, hoặc địa điểm ở các tỉnh lân cận như Biển Quảng Ninh, Ninh Bình,…
        </li>
      </ul>
      <p className="service-detail-p">
        Đội ngũ nhiếp ảnh gia chuyên nghiệp – Trẻ trung – Tận tâm, hỗ trợ nhiệt
        tình giúp cặp đôi luôn có những concept độc đáo cho album ảnh cưới đẹp
        nhất.
      </p>
    </div>
  );
  const [isOpen, setIsOpen] = useState(false);
  const [indexLightbox, setIndexLightbox] = useState(0);
  const ChupAnhGiaDinh = () => (
    <div className="service elementor-widget-container">
      <p className="service-detail-p">
        Bạn muốn có những bức hình độc đáo ghi lại từng khoảnh khắc đáng yêu
        cùng gia đình vào những thời điểm quan trọng như chụp ảnh bé sơ sinh, bà
        bầu, kỉ niệm ngày cưới, chụp ảnh gia đình với các thế hệ,… Đừng ngần
        ngại, liên hệ ngay với JEJU WEDDING để đăng ký lịch chụp hình nhé!
      </p>
      <p className="service-detail-p">
        Chụp ảnh gia đình được coi xu hướng không thể thiếu trong các gia đình
        hiện đại ngày nay. Với mong muốn lưu giữ những kỷ niệm đẹp giữa các
        thành viên trong gia đình, mỗi khoảnh khắc thời gian qua đi không thể
        lấy lại được, chúng ta chỉ có thể lưu giữ qua những bức ảnh hay những
        thước phim. Do đó, ảnh gia đình còn được coi là một tài sản quý giá để
        tương lai chúng ta có thể cùng nhau nhìn lại những khoảnh khắc hạnh phúc
        ấy.
      </p>
      <p className="service-detail-p">
        Với nhiều năm kinh nghiệm, JEJU WEDDING còn sở hữu studio riêng, đội ngũ
        nhiếp ảnh gia được đào tạo bài bản chuyên nghiệp luôn sẵn sàng giúp
        khách hàng gia đình có những album ảnh kỉ niệm cực kỳ chất lượng.
      </p>
      <p className="service-detail-p">
        JEJU WEDDING ngày càng được đầu tư cơ sở vật chất và trang thiết bị hiện
        đại nhằm phục vụ, mang đến những trải nghiệm tốt nhất cho khách hàng sử
        dụng dịch vụ chụp ảnh gia đình.
      </p>
      <h2 className="elementor-heading-title elementor-widget">
        <strong>Một số hình ảnh gói dịch vụ chụp ảnh gia đình:</strong>
      </h2>
      <div className="elementor-container">
        <Masonry columns={3} spacing={1}>
          {listImagesGiaDinh.map((image, index) => (
            <div
              className="image-container col-md-4 col-sm-6"
              key={index}
              onClick={() => {
                setIsOpen(true);
                setIndexLightbox(index);
              }}
            >
              <div className="image-container-inner">
                <LazyLoadImage
                  className="album-detail-img"
                  alt={`Image ${index}`}
                  src={image}
                />
              </div>
            </div>
          ))}
        </Masonry>
      </div>
      {isOpen && (
        <Lightbox
          index={indexLightbox}
          open={isOpen}
          plugins={[Counter, Zoom, Fullscreen]}
          close={() => setIsOpen(false)}
          slides={listImagesGiaDinh}
        />
      )}
    </div>
  );
  const ChupPhongSuNgayCuoi = () => (
    <div className="elementor-widget-container">
      <h2 className="elementor-heading-title elementor-widget">
        <strong>Dịch vụ chụp/ quay phóng sự ngày cưới</strong>
      </h2>
    </div>
  );
  const MakeupCoDau = () => (
    <div className="">
      <p className="service-detail-p">
        Make-up artist chuyên nghiệp, tỉ mỉ đến từng chi tiết nhỏ mang đến cho
        cô dâu khuôn mặt và mái tóc xinh đẹp, nổi bật nhất trong ngày trọng đại.
      </p>
      <p className="service-detail-p">
        Tại JEJU WEDDING có các dịch vụ make-up:
      </p>
      <ul className="ul-1">
        <li className="service-detail-li">Trang điểm cô dâu tại nhà</li>
        <li className="service-detail-li">Trang điểm lễ ăn hỏi, ngày cưới</li>
        <li className="service-detail-li">Trang điểm cho mẹ cô dâu</li>
      </ul>
      <p className="service-detail-p">
        Để có sự thuận tiện từ việc trang điểm, make-up cô dâu chụp ảnh cưới đến
        ngày lễ cưới trọng đại, ngày càng nhiều cô dâu lựa chọn dịch vụ chung
        tại một địa điểm để thợ make-up sẽ hiểu hơn các ưu điểm nổi bật trên
        gương mặt, tone make-up mà cô dâu mong muốn. Thật tuyệt vời, thợ make-up
        nhà JEJU WEDDING luôn luôn nhận được sự hài lòng từ 100% khách hàng, đội
        ngũ nhân viên nhà jeju luôn tư vấn nhiệt tình và cập nhật xu hướng
        make-up cô dâu mới nhất, đầu tư bộ trang điểm chuyên nghiệp cực chất
        lượng.{" "}
      </p>
      <p className="service-detail-p">
        JEJU Wedding cam kết dịch vụ make-up cho cô dâu:
      </p>
      <ul>
        <li className="service-detail-li">
          Tất cả mỹ phẩm sử dụng để trang điểm cho cô dâu đều là hàng mỹ phẩm
          cao cấp, đảm bảo chất lượng, an toàn tuyệt đối.
        </li>
        <li className="service-detail-li">
          Luôn mang đến những kiểu tone make-up đa dạng, phù hợp với từng gương
          mặt cô dâu và có thể khoe những ưu điểm đẹp nhất trên gương mặt.
        </li>
        <li className="service-detail-li">
          Hỗ trợ mọi khách hàng với mức chi phí cạnh tranh, ưu đãi nhất trên thị
          trường.
        </li>
      </ul>
      <h2 className="elementor-heading-title elementor-widget">
        <strong>Một số hình ảnh gói dịch vụ chụp ảnh gia đình:</strong>
      </h2>
      <div className="elementor-container">
        <Masonry columns={3} spacing={1}>
          {listImagesGiaDinh.map((image, index) => (
            <div
              className="image-container col-md-4 col-sm-6"
              key={index}
              onClick={() => {
                setIsOpen(true);
                setIndexLightbox(index);
              }}
            >
              <div className="image-container-inner">
                <LazyLoadImage
                  className="album-detail-img"
                  alt={`Image ${index}`}
                  src={image}
                />
              </div>
            </div>
          ))}
        </Masonry>
      </div>
      {isOpen && (
        <Lightbox
          index={indexLightbox}
          open={isOpen}
          plugins={[Counter, Zoom, Fullscreen]}
          close={() => setIsOpen(false)}
          slides={listImagesGiaDinh}
        />
      )}
    </div>
  );
  const ThiepCuoi = () => (
    <div className="elementor-widget-container">
      <p className="service-detail-p">
        Thiệp cưới không chỉ đơn giản là phương thức thông báo đến mọi người, mà
        còn như một món quà trân quý, kỉ niệm của cô dâu – chú rể dành cho những
        vị khách mời thân thương. JEJU WEDDING là một trong những địa chỉ thiết
        kế và in thiệp cưới chất lượng, giá ưu đãi nhất tại Hà Nội.
      </p>
      <p className="service-detail-p">
        Để chuẩn bị cho sự kiện trọng đại trong cuộc đời của cô dâu – chú rể,
        việc tìm địa chỉ thiết kế – in ảnh cưới đóng vai trò đặc biệt quan
        trọng. JEJU tự tin với những mẫu thiệp cưới đa dạng, đầy đủ các phong
        cách, sản phẩm chất lượng cao, dịch vụ chuyên nghiệp, luôn sẵn sàng cung
        cấp thiệp cưới đẹp nhất thị trường, giá cả ưu đãi cho tất cả các cặp
        đôi.
      </p>
      <p className="service-detail-p">
        JEJU WEDDING cam kết là đơn vị trực tiếp thiết kế và in ấn tại xưởng,
        không thông qua bất kì đơn vị trung gian nào. Chính bởi vậy, chi phí có
        thể giảm thiểu hết mức có thể cho các cặp đôi. Đặc biệt, khách hàng còn
        có thể làm việc trực tiếp với đội ngũ tư vấn, thiết kế để đưa ra những
        mong muốn riêng, các mẫu thiệp in ra cam kết đúng với yêu cầu đặt hàng
        của khách.
      </p>
      <h2 className="elementor-heading-title elementor-widget">
        <strong>
          Dưới đây là một số mẫu thiệp cưới xinh xắn, HOT TREND 2023 tại JEJU
          WEDDING cho các cặp đôi tham khảo:
        </strong>
      </h2>
      <div className="elementor-container">
        <Masonry columns={3} spacing={1}>
          {listImagesGiaDinh.map((image, index) => (
            <div
              className="image-container col-md-4 col-sm-6"
              key={index}
              onClick={() => {
                setIsOpen(true);
                setIndexLightbox(index);
              }}
            >
              <div className="image-container-inner">
                <LazyLoadImage
                  className="album-detail-img"
                  alt={`Image ${index}`}
                  src={image}
                />
              </div>
            </div>
          ))}
        </Masonry>
      </div>
      {isOpen && (
        <Lightbox
          index={indexLightbox}
          open={isOpen}
          plugins={[Counter, Zoom, Fullscreen]}
          close={() => setIsOpen(false)}
          slides={listImagesGiaDinh}
        />
      )}
    </div>
  );
  const DaoTaoNghe = () => (
    <div className="elementor-widget-container">
      <h2 className="elementor-heading-title elementor-widget">
        <strong>Dịch vụ đào tạo nghề</strong>
      </h2>
    </div>
  );
  console.log(indexLightbox);
  return (
    <div className="service-detail service">
      <ServiceSlide
        h6="SOHA WEDDING"
        h1="DỊCH VỤ CHỤP ẢNH CƯỚI CHUYÊN NGHIỆP SỐ 1 TẠI HÀ NỘI"
        btnText="LIÊN HỆ TƯ VẤN"
        bgImage={bgImage}
      />
      <div className="elementor-container">
        {location.pathname === "/dich-vu-cho-thue-vay-cuoi" && (
          <ChoThueVayCuoi />
        )}
        {location.pathname === "/dich-vu-chup-anh-cuoi" && <ChupAnhCuoi />}
        {location.pathname === "/dich-vu-chup-anh-gia-dinh" && (
          <ChupAnhGiaDinh />
        )}
        {location.pathname === "/dich-vu-chup-quay-phong-su-ngay-cuoi" && (
          <ChupPhongSuNgayCuoi />
        )}
        {location.pathname === "/dich-vu-make-up-co-dau" && <MakeupCoDau />}
        {location.pathname === "/dich-vu-thiep-cuoi" && <ThiepCuoi />}
        {location.pathname === "/dich-vu-dao-tao-nghe" && <DaoTaoNghe />}
      </div>
      <CommonContext />
    </div>
  );
};

export default ServiceDetail;
