import './commonCardPhoto.scss'
const CommonCardPhoto = ({ image, text }) => {
    return (
        <div className="container_card">
            <div className='container_img'>
                <img src={image} />
                <span>
                        {text}
                </span>
            </div>
        </div>
    )
}
export default CommonCardPhoto