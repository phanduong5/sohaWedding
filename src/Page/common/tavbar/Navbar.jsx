import React, { useState } from "react";
import "./navbar.scss";
import { Link } from 'react-router-dom';
import { Typography } from '@mui/material';

function Navbar() {
  return (
    <div className="nav_container">
      <div className="nav_left">
        <ul className="nav_menu">
          <li>
            <a>
            <Typography style={{ fontFamily: 'Roboto', fontSize: '18px' }}>
              <Link to="/Home" className="no-underline">Trang chủ</Link>
            </Typography>
            </a>
          </li>
          <li>
            <a>
            <Typography style={{ fontFamily: 'Roboto', fontSize: '18px' }}>
              <Link to="/Introduce" className="no-underline">Giới Thiệu</Link>
            </Typography>
            </a>
          </li>
          <li>
            <a>
            <Typography style={{ fontFamily: 'Roboto', fontSize: '18px' }}>
              <Link to="/Service" className="no-underline">Dịch Vụ</Link>
            </Typography>
            </a>
          </li>
          <li>
            <a>
            <Typography style={{ fontFamily: 'Roboto', fontSize: '18px' }}>
              <Link to="/Album" className="no-underline">Album</Link>
            </Typography>
            </a>
          </li>
          <li>
            <a>
            <Typography style={{ fontFamily: 'Roboto', fontSize: '18px' }}>
              <Link to="/Price" className="no-underline">Báo Giá</Link>
            </Typography>
            </a>
          </li>
          <li>
            <a>
            <Typography style={{ fontFamily: 'Roboto', fontSize: '18px' }}>
              <Link to="/Endow" className="no-underline">Ưu Đãi</Link>
            </Typography>
            </a>
          </li>
          <li>
            <a>
            <Typography style={{ fontFamily: 'Roboto', fontSize: '18px' }}>
              <Link to="/News" className="no-underline">Tin Tức</Link>
            </Typography>
            </a>
          </li>
          <li>
            <a>
            <Typography style={{ fontFamily: 'Roboto', fontSize: '18px' }}>
              <Link to="/Contact" className="no-underline">Liên Hệ</Link>
            </Typography>
            </a>
          </li>
        </ul>
      </div>
      <a className="nav_right">
        <Typography style={{ fontFamily: 'Roboto', fontSize: '18px' }}>
          GET QUOTE
        </Typography>
      </a>
    </div>
  )
}

export default Navbar;