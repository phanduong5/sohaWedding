import CommonCard from '../commonService/CommonImage/CommonImage.jsx'
import Cinemactor from '../../../assets/img/chupanhCuoi/chupanhcuoi3.jpg'
import WeddingDress from '../../../assets/img/choThue Vay/chothuevaycuoi3.jpg'
import WeddingDayPhotography from '../../../assets/img/chụpphongsu/chupanhphongsucuoi1.jpg'
import makeUpBride from '../../../assets/img/makeup/make_up2.jpg'
import VocationalTraining from '../../../assets/img/daotaonghe/daotaongh2.jpg'
import CardWedding from '../../../assets/img/thiepcuoi/thiepcuoi1.jpg'
import './commonService.scss'
const CommonService = () => {
    return (
        <div className='container d-flex justify-content-center align-items-center'>
            <div className="container_commonService">
                <div className='title_commonService'>
                    <h3>TẠI JEJU WEDDING, BẠN HOÀN TOÀN YÊN TÂM VỚI CÁC DỊCH VỤ CƯỚI</h3>
                    <span>
                        JEJU WEDDING hiện có 2 chi nhánh tại Hà Nội được trang bị đầy đủ cơ sở vật chất và trang thiết bị hiện đại, showroom váy cưới với diện tích lên tới 500m2 thoả sức cho các cặp đôi lựa chọn những mẫu váy cưới được thiết kế riêng HOT TREND nhất thị trường, cùng studio chụp ảnh cưới được trang trí đa dạng concept, độc quyền cho cặp đôi của JEJU tại Hà Nội.
                    </span>
                </div>
                <div>
                    <div className="row gy-5 row-cols-md-3 row-cols-sm-2 row-cols-xs-1">
                        <div className="col d-flex justify-content-center align-items-center">
                            <CommonCard
                                image={Cinemactor}
                                text={"CHỤP ẢNH CƯỚI"}
                            />
                        </div>
                        <div className="col d-flex justify-content-center align-items-center">
                            <CommonCard
                                image={WeddingDress}
                                text={"THUÊ VÁY CƯỚI"}
                            />
                        </div>
                        <div className="col d-flex justify-content-center align-items-center">
                            <CommonCard
                                image={WeddingDayPhotography}
                                text={"CHỤP PHONG SỰ CƯỚI"}
                            />
                        </div>
                        <div className="col d-flex justify-content-center align-items-center">
                            <CommonCard
                                image={makeUpBride}
                                text={"MAKE-UP CÔ DÂU"}
                            />
                        </div>
                        <div className="col d-flex justify-content-center align-items-center">
                            <CommonCard
                                image={VocationalTraining}
                                text={"ĐÀO TẠO NGHỀ"}
                            />
                        </div>
                        <div className="col d-flex justify-content-center align-items-center">
                            <CommonCard
                                image={CardWedding}
                                text={"In THIỆP CƯỚI"}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CommonService