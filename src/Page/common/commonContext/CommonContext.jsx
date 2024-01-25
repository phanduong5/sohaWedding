import anh from '../../assets/img/logo.jpg'
import Button from '@mui/material/Button';
import './commonContext.scss'
const CommonContext = () => {
    return (
        <>
            <div className="container container_commonContact" >
                <div className="row">
                    <div className="col-sm-2 d-flex align-items-center justify-content-center">
                        <img className='img_commonConact' src={anh}></img>
                    </div>
                    <div className='col-sm-8'>
                        <h5>
                            BẠN SẮP CƯỚI VÀ MUỐN ĐƯỢC TƯ VẤN?
                        </h5>
                        <a>
                            SOHA Wedding sẽ đồng hành và hỗ trợ bạn trong suốt quá trình chuẩn bị cho ngày trọng đại, hãy để lại thông tin liên hệ tại đây bạn nhé!
                        </a>
                    </div>
                    <div className='col-sm-2 d-flex align-items-center justify-content-center'>
                        <Button variant="outlined">Liên Hệ Tư Vấn</Button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default CommonContext