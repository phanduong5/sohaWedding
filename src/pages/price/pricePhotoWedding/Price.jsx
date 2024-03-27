import React from "react";
import Photo1 from "../../../assets/img/báo_giá_chụp/studio1.jpg"
import Photo2 from "../../../assets/img/báo_giá_chụp/studio2.jpg"
import Photo3 from "../../../assets/img/báo_giá_chụp/phim_trường_1.jpg"
import Photo4 from "../../../assets/img/báo_giá_chụp/Phim_Trường_2.jpg"
import Photo5 from "../../../assets/img/báo_giá_chụp/phim_truong3.jpg"
import Photo6 from "../../../assets/img/báo_giá_chụp/anh_phóng.jpg"
import Photo7 from "../../../assets/img/báo_giá_chụp/Đại_Học_vin.jpg"
import Photo8 from "../../../assets/img/báo_giá_chụp/dich_vụ_báo_giá.jpg"
import Photo9 from "../../../assets/img/báo_giá_chụp/full_day.jpg"
import Photo10 from "../../../assets/img/báo_giá_chụp/luxury.jpg"
import Photo11 from "../../../assets/img/báo_giá_chụp/all in.jpg"
import "./price.scss"
import Contact from "../../common/commonContext/CommonContext"
const Price = () => {
  const list = [
    [Photo1, Photo2],
    [Photo3, Photo4],
    [Photo5, Photo6],
    [Photo7, Photo8],
    [Photo9, Photo10],
    [Photo11],
  ]

  const handTakePhoto = (list) => {
    return list.map((photos, index) => (
      <div key={index} className={"col-lg-6 col-sm-12 parent"}>
        <img key={index} className="photo_price" src={photos} />
      </div>
    ));
  };
  return <>
    <div className="container price">
      <div className="elementor container ">
        <h1>BẢNG GIÁ CHỤP ẢNH CƯỚI</h1>
        <div className="LinePrice"></div>
        <span>SOHA luôn là đơn vị dẫn đầu xu hướng ảnh cưới ở thị trường Hà Nội với đa dạng các phong cách từ trẻ trung, tinh tế đến sang trọng, lộng lẫy,...</span>
        <span>Đặc biệt hơn, SOHA Wedding đã nghiên cứu và đưa ra các gói dịch vụ với mức giá cực tốt, bao gồm nhiều dịch vụ trọn gói giúp cho chi phí ngày cưới của Cô dâu Chú rể không bị phát sinh thêm nhiều.</span>
        <div className="item_price">
          {/* {list.map((element) => (
            <div className="row">{handTakePhoto(element)} </div>
          ))
          } */}
        </div>
      </div>
          <Contact/>
    </div>
  </>;
};

export default Price;
