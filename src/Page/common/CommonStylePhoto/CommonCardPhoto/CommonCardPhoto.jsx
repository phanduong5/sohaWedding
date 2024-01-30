import './commonCardPhoto.scss'
const CommonCardPhoto = ({ img, text }) => {
    return (
        <div className="container_card">
            <div className='container_img'>
                <img src={img} />
                <span>
                        {text}
                </span>
            </div>
        </div>
    )
}
export default CommonCardPhoto