import useNavigateParams from "../../../../hook/useNavigateParams";
import "./commonImage.scss";
const CommonIamge = ({ image, text }) => {
  const { navigateWithParams } = useNavigateParams();
  return (
    <div className="container_card_Service">
      <div key={text} className='container_img' onClick={() => {navigateWithParams("service-detail",{id:text})}}>
        <img src={image} />
        <div className="Text_Service">
          {text}
        </div>
      </div>
    </div>
  );
};
export default CommonIamge;
