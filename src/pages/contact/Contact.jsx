import React from "react";
import HeadContext from "../common/head/head.jsx"
import MenuContext from "../common/tavbar/Navbar.jsx"
import FooterContext from "../common/footer/Footer.jsx"
import ContextContext from "../common/commonContext/CommonContext.jsx"
import CallIcon from '@mui/icons-material/Call';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import "../contact/contact.scss"
const Contact = () => {
  return (
    <>
      <div className="container Contact">
        <div className="row">
          <div className="col lg-6">
            <span> LIÊN HỆ</span>
            <h2>Gọi, Email Hoặc Nhắn Cho SOHA</h2>
            <div className="container_Infomation">
              <div className="item_infomation">
                <div className="icon_infamation"><FmdGoodIcon className="icon_contact" /> </div>
                <span>Địa chỉ: 180 Giáp Nhất, Hai Bà Trưng, Hà Nội</span>
              </div>
              <div className="item_infomation">
                <div className="icon_infamation"><CallIcon className="icon_contact" /></div>
                <span>Điện thoại:0888.696960</span>
              </div>
              <div className="item_infomation">
                <div className="icon_infamation"> <CallIcon className="icon_contact" /></div>
                <span>Hotline: 094.223.6262</span>
              </div>
              <div className="item_infomation">
                <div className="icon_infamation"> <EmailIcon className="icon_contact" /></div>
                <span>Email: sohaweding@gmail.com</span>
              </div>
              <div className="line_Contact"></div>
              <div className="Box_Context">
                <div className="Button_context_Home">
                  <button className="Button_context"> Xem Dịch Vụ</button>
                </div>
                <div className="icon_Context">
                  <span className="icon_Context_item"><FacebookIcon /></span>
                  <YouTubeIcon />
                </div>
              </div>
            </div>
          </div>
          <div className="col lg-6">
            <iframe width="100%" height="500" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=+(Soha%20Wedding)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">gps vehicle tracker</a></iframe>
          </div>
        </div>
      </div>
      <ContextContext />
    </>
  )
};

export default Contact;
