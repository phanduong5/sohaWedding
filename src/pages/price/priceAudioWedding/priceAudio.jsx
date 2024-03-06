import Phong_su1 from "../../../assets/img/phóng_sự/chụp_phong_sư.jpg"
import Phong_su2 from "../../../assets/img/phóng_sự/quay_phong_su.jpg"
import "./priceAudio.scss"
const PriceAudio = () => {
    return(
        <div className="container priceAudio">
            <h1>BẢNG GIÁ PHÓNG SỰ CƯỚI</h1>
            <div className="LinePrice"></div>
            <span>Các gói chụp phóng sự cưới đã bao gồm chụp truyền thống đầy đủ các lễ nghi, kết hợp chụp nhiều khoảnh khắc tự nhiên, ghi lại cảm xúc chân thật trong ngày trọng đại của Cô dâu Chú rể.</span>
            <div className="row">
                <div className="col">
                    <img className="img_priceAudio" src={Phong_su1}></img>
                </div>
                <div className="col">
                    <img className="img_priceAudio" src={Phong_su2}  />
                </div>
            </div>
        </div>
    );
};
export default PriceAudio;