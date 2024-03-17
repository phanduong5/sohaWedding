import Phong_su1 from "../../../assets/img/phóng_sự/chụp_phong_sư.jpg"
import Phong_su2 from "../../../assets/img/phóng_sự/quay_phong_su.jpg"
import AnhCuoiStudio from "../../../assets/img/StylePhoto/Studio Photo/anhchonj.jpg"
import AnhCuoiStudio_vespa from "../../../assets/img/Abumle_ảnh_cươi/ảnh_studio_2/anhchon.jpg"
import AnhCuoiDuongPho from "../../../assets/img/StylePhoto/Studio anh vespa car photo/anhchon.jpg"
import AnhCuoiStudioAoDai from "../../../assets/img/StylePhoto/Studio and Ao Dai/Photochose.jpg"
import AnhCuoiStudioNgoaiTroi from "../../../assets/img/Abumle_ảnh_cươi/ảnh_chụp_hồ/anhchon.jpg"
import AnhCuoiStudioNgoaiTroitoi from "../../../assets/img/Abumle_ảnh_cươi/ảnh_chụp_ngoài_trời_tối/anhchon.jpg"
import AnhCuoiPhimTruong from "../../../assets/img/Abumle_ảnh_cươi/phimtruong1/anhchon.jpg"
import AnhCuoiStudioNgoaiDuong from "../../../assets/img/StylePhoto/Studio and Metro/PHOTOCHOSE.jpg"
import "./priceAudio.scss"
import AlbumWending from "../../common/album-wending/AlbumWending"
import "../../service/service.scss"
const PriceAudio = () => {
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
            src: AnhCuoiStudio_vespa
        },
        {
            id: 3,
            name: "ảnh cưới santorini + đường phố",
            //src: `${domainApp}/images/service/ảnh cưới santorini + đường phố.avif`,
            src: AnhCuoiDuongPho
        },
        {
            id: 4,
            name: "ảnh Áo Dài + studio thứ 2",
            //src: `${domainApp}/images/service/ảnh cưới xe vespa + studio thứ 2.jpg`,
            src: AnhCuoiStudioAoDai
        },
        {
            id: 5,
            name: "ảnh cưới studio ngoài trời",
            //src: `${domainApp}/images/service/ảnh cưới studio + ga tàu điện.jpg`,
            src: AnhCuoiStudioNgoaiTroitoi
        },
        {
            id: 6,
            name: "ảnh cưới studio + hồ tây",
            //src: `${domainApp}/images/service/ảnh cưới studio + hồ tây.avif`,
            src: AnhCuoiStudioNgoaiTroi
        },
        {
            id: 7,
            name: "ảnh cưới phim trường 5 garden + cafe",
            //src: `${domainApp}/images/service/ảnh cưới phim trường 5 garden + cafe.webp`,
            src: AnhCuoiPhimTruong
        },
        {
            id: 8,
            name: "ảnh cưới ngoài trời + áo dài vintage",
            //src: `${domainApp}/images/service/ảnh cưới studio + áo dài vintage.avif`,
            src: AnhCuoiStudioNgoaiDuong
        },
    ];
    return (
        <div className="container priceAudio">
            <h1>BẢNG GIÁ PHÓNG SỰ CƯỚI</h1>
            <div className="LinePrice"></div>
            <span>Các gói chụp phóng sự cưới đã bao gồm chụp truyền thống đầy đủ các lễ nghi, kết hợp chụp nhiều khoảnh khắc tự nhiên, ghi lại cảm xúc chân thật trong ngày trọng đại của Cô dâu Chú rể.</span>
            <div className="row">
                <div className="col">
                    <img className="img_priceAudio" src={Phong_su1}/>
                </div>
                <div className="col">
                    <img className="img_priceAudio" src={Phong_su2}/>
                </div>
            </div>
            <div className="AlbumWending_priceAudio">
                <AlbumWending
                    albumAnhCuoi={albumAnhCuoi}
                    title="Album Ảnh Cưới"
                    content="Đa số khách hàng SOHA là các cặp đôi trẻ có phong cách thẩm mỹ
                hiện đại"
                />
            </div>
        </div>
    );
};
export default PriceAudio;