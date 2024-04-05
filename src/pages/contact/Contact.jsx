import React from "react";
import ContextContact from "../common/commonContext/CommonContext.jsx"
import CallIcon from '@mui/icons-material/Call';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import "../contact/contact.scss"
import { Link } from "react-router-dom";
import { ConnextFacebook } from "../common/connextInternerPublic/connext.jsx";
const Contact = () => {
  return (
    <>
      <div className="container Contact introduce service">
        <div className="row">
          <div className="col-lg-6 col-sm-12">
            <span className="text-title-Context"> LIÊN HỆ</span>
            <h1 className="text-detail-Context">Gọi, Email Hoặc Nhắn Cho SOHA</h1>
            <div className="container_Infomation">
              <div className="item_infomation">
                <div className="icon_infamation"><FmdGoodIcon className="icon_Context" /> </div>
                <span>Địa chỉ: 180 Giáp Nhất, Hai Bà Trưng, Hà Nội</span>
              </div>
              <div className="item_infomation">
                <div className="icon_infamation"><CallIcon className="icon_Context" /></div>
                <span>Điện thoại:0888.696960</span>
              </div>
              <div className="item_infomation">
                <div className="icon_infamation"> <CallIcon className="icon_Context" /></div>
                <span>Hotline: 094.223.6262</span>
              </div>
              <div className="item_infomation">
                <div className="icon_infamation"> <EmailIcon className="icon_Context" /></div>
                <span>Email: sohaweding@gmail.com</span>
              </div>
              <div className="line_Contact"></div>
              <div className="Box_Context">
                <div className="Button_context_Home">
                  <button className="Button_context"> 
                    <Link to={"/service"}>Xem Dịch Vụ</Link>
                  </button>
                </div>
                <div className="icon_Context">
                  <span onClick={ConnextFacebook}><FacebookIcon/></span>
                  <span><YouTubeIcon /></span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-sm-12">
            <iframe width="100%" height="500" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=+(Soha%20Wedding)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">gps vehicle tracker</a></iframe>
          </div>
        </div>
        <ContextContact />
      </div>
    </>
  )
};

export default Contact;
