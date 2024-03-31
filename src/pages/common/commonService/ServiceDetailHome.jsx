import { useLocation } from "react-router-dom";
import ServiceSlide from "../service-slide/ServiceSlide";
import imgPhotoWedding from "../../../assets/img/serviceHome/PhotoWeddingHead.jpg"
import imgPhotoWeddingDress from "../../../assets/img/serviceHome/PhotoWeddingDressHead.jpg"
import imgPhotoMakeUp from "../../../assets/img/serviceHome/PhotoMake-upHead.jpg"
import imgTraining from "../../../assets/img/serviceHome/PhotoTrainingHead.jpg"
import imgCardWedding from "../../../assets/img/serviceHome/CardWeddingHead.jpg"
import { ChoThueVayCuoi, ChupAnhCuoi, ChupPhongSuNgayCuoi, DaoTaoNghe, MakeupCoDau, ThiepCuoi } from "../../service-detail/ServiceDetail";
const ServiceDetailHome = () => {
  let location = useLocation();
  const queryParams = new URLSearchParams(location.search)
  const idService = queryParams.get("id");
  const enumService = {
    "THUÊ VÁY CƯỚI"  : {
      title : "Chiếc váy cưới lấp lánh như ánh sao trên bầu trời",
      img : imgPhotoWeddingDress
    },
    "CHỤP ẢNH CƯỚI"  : {
      title : "Ảnh cưới đẹp: Kỷ niệm về tình yêu, hạnh phúc vĩnh cửu.",
      img : imgPhotoWedding
    },
    "MAKE-UP CÔ DÂU"  : {
      title : "Trang điểm cô dâu: tự tin, kiêu sa, rạng ngời hạnh phúc",
      img : imgPhotoMakeUp
    },
    "ĐÀO TẠO NGHỀ"  : {
      title : "Đào tạo nghề: Sáng tạo, kỹ năng, nắm bắt xu hướng",
      img : imgTraining
    },
    "In THIỆP CƯỚI"  : {
      title : "In thiệp cưới: Sắc nét, tinh tế, ghi lại kỷ niệm đẹp.",
      img : imgCardWedding
    },
    "CHỤP PHONG SỰ CƯỚI"  : {
      title : "Chụp phóng sự cưới: Ghi lại niềm vui, hạnh phúc, trọn vẹn.",
      img : imgTraining
    },
  }
  return (
    <div className="service-detail service">
      <ServiceSlide
        h6="SOHA WEDDING"
        h1={enumService[idService].title}
        btnText="LIÊN HỆ TƯ VẤN"
        bgImage={enumService[idService].img} />
      <div className="elementor-container">
        {idService === "THUÊ VÁY CƯỚI" && (
          <ChoThueVayCuoi />
        )}
        {idService === "CHỤP ẢNH CƯỚI" && <ChupAnhCuoi />}
        {idService === "CHỤP PHONG SỰ CƯỚI" && (
          <ChupPhongSuNgayCuoi />
        )}
        {idService === "MAKE-UP CÔ DÂU" && <MakeupCoDau />}
        {idService === "In THIỆP CƯỚI" && <ThiepCuoi />}
        {idService === "ĐÀO TẠO NGHỀ" && <DaoTaoNghe />}
      </div>
    </div>
  )
}
export default ServiceDetailHome