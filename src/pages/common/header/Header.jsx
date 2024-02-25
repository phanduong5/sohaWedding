import React from "react";
import logoWeb from "../../../assets/img/LOGO-WEB.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faEnvelope,
  faPhoneAlt,
} from "@fortawesome/free-solid-svg-icons";
import "./header.scss";
import { useNavigate } from "react-router-dom";

const Header = ({ location }) => {
  const boxContent = [
    {
      icon: faLocationDot,
      title: "Địa chỉ",
      description: "175 Đại La, Hai Bà Trưng, Hà Nội",
    },
    {
      icon: faEnvelope,
      title: "Email",
      description: "jejuwedding.vn@gmail.com",
    },
    {
      icon: faPhoneAlt,
      title: "Hotline",
      description: "0888.696960",
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
          router: "/service/",
          children: [],
        },
        {
          element: "Dịch vụ chụp ảnh cưới",
          router: "/service/",
          children: [],
        },
        {
          element: "Dịch vụ chụp ảnh gia đình",
          router: "/service/",
          children: [],
        },
        {
          element: "Dịch vụ chụp/ quay phóng sự ngày cưới",
          router: "/service/",
          children: [],
        },
        {
          element: "Dịch vụ Make-up cô dâu",
          router: "/service/",
          children: [],
        },
        {
          element: "Dịch vụ đào tạo nghề",
          router: "/service/",
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
          router: "/price/",
          children: [],
        },
        {
          element: "Báo giá phóng sự cưới",
          router: "/price/",
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

  //   const navigate = useNavigate();
  return (
    <div id="header" className="header">
      <div className="header-top">
        <div className="header-top-logo">
          <img src={logoWeb} width={320} height={52} alt="logo" />
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
                <a
                  className={`header-bottom-menu-item-link ${
                    menuItem === "" ? "active" : ""
                  }`}
                  href="/"
                >
                  {menuItem.element}
                </a>
                <ul className="menu-child">
                  {menuItem.children && menuItem.children.length
                    ? menuItem.children.map((item, index) => (
                        <li key={index}>
                          <a className="link-child" href="">
                            {item.element}
                          </a>
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
