import Picture from '../../../assets/img/anh1.jpg'
import './commonCardPhoto.scss'
const CommonCardPhoto = ({ img, text }) => {
    return (
        <div className="container_card">
            <div className='container_img'>
                <img src={Picture} />
                <span>
                    Chụp ảnh quảng trường
                </span>
            </div>
        </div>
    )
}
export default CommonCardPhoto