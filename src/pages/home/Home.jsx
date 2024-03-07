import React from "react";
import ImageMove from "../common/backgroud/Backgroud.jsx";
import ImageOne from "../../assets/img/anh1.jpg";
import ImageTwo from "../../assets/img/anh2.jpg";
import ImageThree from "../../assets/img/anh3.jpg";
import ContextHome from "../common/commonContext/CommonContext.jsx";
import ServiceHome from "../common/commonService/CommonService.jsx";
import StyleHome from "../common/CommonStylePhoto/CommonStylePhoto.jsx";
import "../home/home.scss";
import PhotoSto from "../../assets/img/home_04_image_02.avif";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import Feedback from "../common/common_feedback/Feedback.jsx"
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
  return (
    <>
      <ImageMove bgSlide={listImage} />
      <div className="container d-flex justify-content-center">
        <span className="row">
          <span className="col">
            <img className="img_home" src={PhotoSto}></img>
          </span>
          <span className="col textHome">
            <span>VỀ SOHA WEDDING</span>
            <h2>STUDIO ẢNH CƯỚI VỚI DỊCH VỤ CHUYÊN NGHIỆP HÀNG ĐẦU</h2>
            <span>
              Được thành lập từ năm 2016, SOHA WEDDING đã được hơn 5000 cặp đôi
              tin tưởng và lựa chọn đồng hành. Không chỉ nổi tiếng về chụp ảnh
              cưới, tại SOHA WEDDING còn cung cấp nhiều dịch vụ khác như cho
              thuê váy cưới, vest cưới, áo dài, quay phóng sự cưới, makeup cô
              dâu, chụp ảnh gia đình; đào tạo nghề chụp ảnh cưới, photoshop và
              dựng video cưới hỏi; in thiệp cưới,...
            </span>
            <div className="line"></div>
            <div className="Box_Context">
              <div className="Button_context_Home">
                <button className="Button_context"> Tìm Hiểu Thêm</button>
              </div>
              <div className="icon_Context">
                <span className="icon_Context_item">
                  <FacebookIcon />
                </span>
                <YouTubeIcon />
              </div>
            </div>
          </span>
        </span>
      </div>
      <div className="Cange">
        <ServiceHome />
      </div>
      <StyleHome />
      <div className="Feedback_Home">
        <Feedback/>
      </div>
      <ContextHome />
    </>
  );
};
export default Home;
