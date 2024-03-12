import "./commonImage.scss";
const CommonIamge = ({ image, text }) => {
  return (
    <div className="container_card_Service">
      <div className='container_img'>
        <img src={image} />
        <div className="Text_Service">
          {text}
        </div>
      </div>
    </div>
  );
};
export default CommonIamge;
