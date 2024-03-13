import React from "react";
import logoWeb from "../../../assets/img/logo.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faEnvelope,
  faPhoneAlt,
} from "@fortawesome/free-solid-svg-icons";
import "./header.scss";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Header = () => {
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
      router: "",
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
      </div>
      <div className="header-bottom d-flex">
        <div className="header-bottom-menu">
          <ul className="header-bottom-menu-ul">
            {menu.map((menuItem, indexItem) => (
              <li key={indexItem} className="header-bottom-menu-item">
                <Link
                  className={`header-bottom-menu-item-link ${
                    menuItem.router === location.pathname ? "active" : ""
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
