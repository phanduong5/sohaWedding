import React, { useState } from "react";
import logoWeb from "../../../assets/img/logo.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faEnvelope,
  faPhoneAlt,
} from "@fortawesome/free-solid-svg-icons";
import "./header.scss";
import { Link, useLocation, useNavigate } from "react-router-dom";
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import CloseIcon from '@mui/icons-material/Close';
import {
  faFacebookF,
  faTwitter,
  faYoutube,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
const Header = () => {
  const [menu_mobile, setMobile] = useState(1);
  const listIcon = [faFacebookF, faTwitter, faYoutube, faTiktok];
  const hanldShowMenuMobile = () => {
    setMobile(cout => cout + 1);
  }
  const boxContent = [
    {
      icon: faLocationDot,
      title: "Địa chỉ",
      description: "199 giáp nhất, Thanh xuân, Hà Nội",
    },
    {
      icon: faEnvelope,
      title: "Email",
      description: "sohawedding199@gmail.com",
    },
    {
      icon: faPhoneAlt,
      title: "Hotline",
      description: "0867058105",
    },
  ];
  const menu = [
    {
      element: "Trang chủ",
      router: "/home",
      children: [],
    },
    {
      element: "Giới thiệu",
      router: "/introduce",
      children: [],
    },
    {
      element: "Dịch vụ",
      router: "/service",
      children: [
        {
          element: "Dịch vụ cho thuê váy cưới",
          router: "/dich-vu-cho-thue-vay-cuoi",
          children: [],
        },
        {
          element: "Dịch vụ chụp ảnh cưới",
          router: "/dich-vu-chup-anh-cuoi",
          children: [],
        },
        {
          element: "Dịch vụ chụp ảnh gia đình",
          router: "/dich-vu-chup-anh-gia-dinh",
          children: [],
        },
        {
          element: "Dịch vụ chụp/ quay phóng sự ngày cưới",
          router: "/dich-vu-chup-quay-phong-su-ngay-cuoi",
          children: [],
        },
        {
          element: "Dịch vụ Make-up cô dâu",
          router: "/dich-vu-make-up-co-dau",
          children: [],
        },
        {
          element: "Dịch vụ thiệp cưới",
          router: "/dich-vu-thiep-cuoi",
          children: [],
        },
        {
          element: "Dịch vụ đào tạo nghề",
          router: "/dich-vu-dao-tao-nghe",
          children: [],
        },
      ],
    },
    {
      element: "Album",
      router: "/album",
      children: [],
    },
    {
      element: "Báo giá",
      router: "/bao+gia+chup+anh+cuoi",
      children: [
        {
          element: "Báo giá chụp ảnh cưới",
          router: "/bao+gia+chup+anh+cuoi",
          children: [],
        },
        {
          element: "Báo giá phóng sự cưới",
          router: "/bao+gia+phong+su+cuoi",
          children: [],
        },
      ],
    },
    {
      element: "Ưu đãi",
      router: "/endow",
      children: [],
    },
    {
      element: "Tin tức",
      router: "",
      children: [],
    },
    {
      element: "Liên hệ",
      router: "/contact",
      children: [],
    },
  ];

  const location = useLocation();
  return (
    <div id="header" className="header">
      <div className="header-top">
        <div className="header-top-logo">
          <img src={logoWeb} width={150} height={70} alt="logo" />
        </div>
        <div className="header-top-info">
          {boxContent.map((box, index) => (
            <div
              key={index}
              className="header-top-info-item d-flex align-items-center"
            >
              <FontAwesomeIcon icon={box.icon} />
              <div className="header-top-info-item-content">
                <span className="title">{box.title}</span>
                <p className="description">{box.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="Menu_mobile">
          <button onClick={hanldShowMenuMobile}><FormatAlignCenterIcon sx={{ fontSize: 50 }} /></button>
        </div>
        {menu_mobile % 2 === 0 && (
          <span className="Menu_mobile_detail">
            <ul>
              <div className="Menu_head">
                <img src={logoWeb} width={150} height={70} alt="logo_Menu_Mobile" />
                <span onClick={hanldShowMenuMobile}><CloseIcon sx={{ fontSize: 50 }} /></span>
              </div>
              {menu.map((menuItem, indexItem) => (
                <li key={indexItem}>
                  <Link
                    to={menuItem.router}
                  >
                    {menuItem.element}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="Line_Menu_Mobile"></div>
            <div className="elementor-element d-flex mt-3 mb-3 pr-5">
              {listIcon.map((item, index) => (
                <div key={index} className="icon-menu_mobile">
                  <FontAwesomeIcon icon={item} />
                </div>
              ))}
            </div>
            <div className="Line_Menu_Mobile"></div>
            <div className="info_menu_mobile">
              {boxContent.map((box, index) => (
                <div
                  key={index}
                  className="info_menu_mobile_item d-flex align-items-center"
                >
                  <FontAwesomeIcon icon={box.icon} />
                  <div className="info_menu_mobile_item-content">
                    <span className="title">{box.title}</span>
                    <p className="description">{box.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="Line_Menu_Mobile"></div>
            <span className="button_menu_mobile">
                <button className="button_menu_mobile_style">
                <Link to={"/contact"}>Liên Hệ Ngay</Link>
                </button>
            </span>
          </span>
        )}
      </div>
      <div className="header-bottom">
        <div className="header-bottom-menu">
          <ul className="header-bottom-menu-ul">
            {menu.map((menuItem, indexItem) => (
              <li key={indexItem} className="header-bottom-menu-item">
                <Link
                  className={`header-bottom-menu-item-link ${menuItem.router === location.pathname ? "active" : ""
                    }`}
                  to={menuItem.router}
                >
                  {menuItem.element}
                </Link>
                <ul className="menu-child">
                  {menuItem.children && menuItem.children.length
                    ? menuItem.children.map((item, index) => (
                      <li key={index}>
                        <Link to={item.router} className="link-child" href="">
                          {item.element}
                        </Link>
                      </li>
                    ))
                    : null}
                </ul>
              </li>
            ))}
          </ul>
        </div>
        <div className="header-bottom-quote">Get quote</div>
      </div>
    </div>
  );
};

export default Header;
