import CommonCard from "../commonService/CommonImage/CommonImage.jsx";
import PhotoWedding from "../../../assets/img/serviceHome/PhotoWeddingHome.jpg";
import WeddingDress from "../../../assets/img/serviceHome/WeddingDressHome.jpg";
import WeddingDayPhotography from "../../../assets/img/serviceHome/PhotoVideoWeddingDayHome.jpg";
import makeUpBride from "../../../assets/img/serviceHome/Make-upHome.jpg";
import VocationalTraining from "../../../assets/img/serviceHome/PhotoTrainingHome.jpg";
import CardWedding from "../../../assets/img/serviceHome/CardWeddingHome.jpg";
import "./commonService.scss";
const CommonService = () => {
  return (
    <div className="container d-flex justify-content-center align-items-center service">
      <div className="container_commonService">
        <div className="elementor-container">
          <div className="service-section-header ">
            <h2 className="elementor-widget-container elementor-heading-title">
              TẠI SOHA WEDDING, BẠN HOÀN TOÀN YÊN TÂM VỚI CÁC DỊCH VỤ CƯỚI
            </h2>
            <span className="elementor-heading-title">
             SOHA WEDDING hiện có 2 chi nhánh tại Hà Nội được trang bị đầy đủ
              cơ sở vật chất và trang thiết bị hiện đại, showroom váy cưới với
              diện tích lên tới 500m2 thoả sức cho các cặp đôi lựa chọn những
              mẫu váy cưới được thiết kế riêng HOT TREND nhất thị trường, cùng
              studio chụp ảnh cưới được trang trí đa dạng concept, độc quyền cho
              cặp đôi của SOHA tại Hà Nội.
            </span>
          </div>
        </div>
        <div>
          <div className="row">
            <div className="col d-flex justify-content-center align-items-center">
              <CommonCard image={PhotoWedding} text={"CHỤP ẢNH CƯỚI"} />
            </div>
            <div className="col d-flex justify-content-center align-items-center">
              <CommonCard image={WeddingDress} text={"THUÊ VÁY CƯỚI"} />
            </div>
            <div className="col d-flex justify-content-center align-items-center">
              <CommonCard
                image={WeddingDayPhotography}
                text={"CHỤP PHONG SỰ CƯỚI"}
              />
            </div>
            <div className="col d-flex justify-content-center align-items-center">
              <CommonCard image={makeUpBride} text={"MAKE-UP CÔ DÂU"} />
            </div>
            <div className="col d-flex justify-content-center align-items-center">
              <CommonCard image={VocationalTraining} text={"ĐÀO TẠO NGHỀ"} />
            </div>
            <div className="col d-flex justify-content-center align-items-center">
              <CommonCard image={CardWedding} text={"In THIỆP CƯỚI"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CommonService;
