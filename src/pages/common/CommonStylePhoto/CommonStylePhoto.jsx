import CommonCardPhoto from './CommonCardPhoto/CommonCardPhoto'
import StudioPhoto from '../../../assets/img/StylePhoto/Studio Photo/anhchonj.jpg'
import Studio2Photo from '../../../assets/img/StylePhoto/Vespa and Studio2/photochose.jpg'
import AoDai from '../../../assets/img/StylePhoto/Studio and Ao Dai/Photochose.jpg'
import HoTay from '../../../assets/img/StylePhoto/Studio and HO TAY/photochose.jpg'
import CarAndTreet from '../../../assets/img/StylePhoto/Studio anh vespa car photo/photochose.jpg'
import Treet from '../../../assets/img/StylePhoto/StudioSantorini and street/photochose.jpg'
import FilmStudio from '../../../assets/img/StylePhoto/film studio 5 Garden +cafe/photochose.jpg'
import Phoco from '../../../assets/img/StylePhoto/Studio and Metro/PHOTOCHOSE.jpg'
import './commonStylePhoto.scss'
const CommonStylePhoto = () => {
    return (
        <div className="container d-flex justify-content-center align-items-center">
            <div className='containerStylePhoto'>
                <div className="title_commonStylePhoto">
                    <h3>
                        ALBUM ẢNH CƯỚI
                    </h3>
                    <span>
                        Đa số khách hàng SOHA là các cặp đôi trẻ có phong cách thẩm mỹ hiện đại
                    </span>
                </div>
                <div>
                    <div className="row gy-5 row-cols-lg-4 row-cols-md-2 row-cols-xs-1">
                        <div className="col d-flex justify-content-center align-items-center">
                            <CommonCardPhoto
                                image={StudioPhoto}
                                text={"ẢNH CƯỚI STUDIO"}
                            />
                        </div>
                        <div className="col d-flex justify-content-center align-items-center">
                            <CommonCardPhoto
                                image={Studio2Photo}
                                text={"ẢNH CƯỚI Ở STUDIO 2"}
                            />
                        </div>
                        <div className="col d-flex justify-content-center align-items-center">
                            <CommonCardPhoto
                                image={AoDai}
                                text={"ÁO DÀI VINTAGE"}
                            />
                        </div>
                        <div className="col d-flex justify-content-center align-items-center">
                            <CommonCardPhoto
                                image={HoTay}
                                text={"ẢNH CƯỚI HỒ TÂY"}
                            />
                        </div>
                        <div className="col d-flex justify-content-center align-items-center">
                            <CommonCardPhoto
                                image={CarAndTreet}
                                text={"XE ĐƯỜNG PHỐ"}
                            />
                        </div>
                        <div className="col d-flex justify-content-center align-items-center">
                            <CommonCardPhoto
                                image={Treet}
                                text={"PHỐ HÀ NỘI"}
                            />
                        </div>
                        <div className="col d-flex justify-content-center align-items-center">
                            <CommonCardPhoto
                                image={FilmStudio}
                                text={"PHIM TRƯỜNG 5 GARDER CAFE"}
                            />
                        </div>
                        <div className="col d-flex justify-content-center align-items-center">
                            <CommonCardPhoto
                                image={Phoco}
                                text={"PHỐ CỔ HÀ NỘI"}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CommonStylePhoto