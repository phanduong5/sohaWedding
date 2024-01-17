import React, { useState } from "react";
import "./navbar.scss";

function Navbar() {
  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");
  const navToggle = () => {
    if (active === "nav__menu") {
      setActive("nav__menu nav__active");
    } else setActive("nav__menu");

    // Icon Toggler
    if (icon === "nav__toggler") {
      setIcon("nav__toggler toggle");
    } else setIcon("nav__toggler");
  };
  return (
    <nav className="nav">
      <a href="#" className="nav__brand">
        Soha Wedding
      </a>
      <ul className={active}>
        <li className="nav__item">
          <a href="#" className="nav__link">
            Trang Chủ
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            Giới Thiệu
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            Dịch vụ
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            Album
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            Báo giá
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            Liên Hệ
          </a>
        </li>
      </ul>
      <div onClick={navToggle} className={icon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
}

export default Navbar;