import React from "react"
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import './footer.scss'
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CallIcon from '@mui/icons-material/Call';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import logo from '../../assets/img/logo.jpg'
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import SendIcon from '@mui/icons-material/Send';
const Footer = () => {
    const PageFacebook = () => {
        window.location.href = "https://www.facebook.com/SOHAwedding.nv?locale=vi_VN";
    }
    return (
        <div className="container">
            <div className="row ">
                <div className="col-sm-12 col-lg-3" >
                    <div>
                        <img className="ImageFooter" src={logo} ></img>
                    </div>
                    <div className="iconPublic">
                        <div onClick={PageFacebook}>
                            <FacebookIcon className="footerIcon" />
                        </div>
                        <div>
                            <YouTubeIcon className="footerIcon" />
                        </div>
                        <div className="col-sm-8">
                            <i class="fab fa-tiktok"></i>
                        </div>
                    </div>
                    <div className="titleFooter">
                        <span>HAY ĐỂ SỐ ĐIỆN THOẠI ĐỂ TƯ VẤN</span>
                    </div>
                    <div className="inputFooter">
                        <div className="input">
                            <input className="inputCell" placeholder="Số Điện Thoại"></input>
                        </div>
                        <div><SendIcon className="footerIcon" /></div>
                    </div>
                </div>
                <div className="col-sm-6 col-lg-3 text-start">
                    <ul>
                        <li>
                            <p className="HeadTitle">
                                Links
                            </p>
                        </li>
                        <li>
                            <a>
                                <Typography style={{ fontFamily: 'Roboto', fontSize: '15px' }}>
                                    <Link to="/Introduce" className="no-underline">Giới Thiệu</Link>
                                </Typography>
                            </a>
                        </li>
                        <li>
                            <a>
                                <Typography style={{ fontFamily: 'Roboto', fontSize: '15px' }}>
                                    <Link to="/Service" className="no-underline">Dịch Vụ</Link>
                                </Typography>
                            </a>
                        </li>
                        <li>
                            <a>
                                <Typography style={{ fontFamily: 'Roboto', fontSize: '15px' }}>
                                    <Link to="/Price" className="no-underline">Báo Giá</Link>
                                </Typography>
                            </a>
                        </li>
                        <li>
                            <a>
                                <Typography style={{ fontFamily: 'Roboto', fontSize: '15px' }}>
                                    <Link to="/Album" className="no-underline">Album</Link>
                                </Typography>
                            </a>
                        </li>
                        <li>
                            <a>
                                <Typography style={{ fontFamily: 'Roboto', fontSize: '15px' }}>
                                    <Link to="/Contact" className="no-underline">Liên Hệ</Link>
                                </Typography>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="col-sm-6 col-lg-3 text-start" >
                    <ul>
                        <li>
                            <p className="HeadTitle">
                                Dịch Vụ
                            </p>
                        </li>
                        <li>
                            <a>
                                <Typography style={{ fontFamily: 'Roboto', fontSize: '15px' }}>
                                    <Link to="/Introduce" className="no-underline">Cho Thuê váy cưới</Link>
                                </Typography>
                            </a>
                        </li>
                        <li>
                            <a>
                                <Typography style={{ fontFamily: 'Roboto', fontSize: '15px' }}>
                                    <Link to="/Service" className="no-underline">Chụp ảnh cưới</Link>
                                </Typography>
                            </a>
                        </li>
                        <li>
                            <a>
                                <Typography style={{ fontFamily: 'Roboto', fontSize: '15px' }}>
                                    <Link to="/Price" className="no-underline">Chụp ảnh gia đình</Link>
                                </Typography>
                            </a>
                        </li>
                        <li>
                            <a>
                                <Typography style={{ fontFamily: 'Roboto', fontSize: '15px' }}>
                                    <Link to="/Album" className="no-underline">Make-up cô dâu</Link>
                                </Typography>
                            </a>
                        </li>
                        <li>
                            <a>
                                <Typography style={{ fontFamily: 'Roboto', fontSize: '15px' }}>
                                    <Link to="/Contact" className="no-underline">Đào tạo nghề </Link>
                                </Typography>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="col-sm-12 col-lg-3 text-start" >
                    <ul>
                        <li>
                            <p className="HeadTitle">
                                Liên Hệ
                            </p>
                        </li>
                        <li>
                            <div className="ContactFooter">
                                <div>
                                    <FmdGoodIcon className="footerIcon" />
                                </div>
                                <div>
                                    <a>
                                        <Typography style={{ fontFamily: 'Roboto', fontSize: '15px' }}>
                                            Địa Chỉ: 199 giáp nhất,
                                        </Typography>
                                    </a>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="ContactFooter">
                                <div>
                                    <AccessTimeIcon className="footerIcon" />
                                </div>
                                <div>
                                    <a>
                                        <Typography style={{ fontFamily: 'Roboto', fontSize: '15px' }}>
                                            Giờ mở cửa: 9:30 - 21:00
                                        </Typography>
                                    </a>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="ContactFooter">
                                <div>
                                    <CallIcon className="footerIcon" />
                                </div>
                                <div>
                                    <a>
                                        <Typography style={{ fontFamily: 'Roboto', fontSize: '15px' }}>
                                            Hotline: 0387491892
                                        </Typography>
                                    </a>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="ContactFooter">
                                <div>
                                    <CallIcon className="footerIcon" />
                                </div>
                                <div>
                                    <a>
                                        <Typography style={{ fontFamily: 'Roboto', fontSize: '15px' }}>
                                            CSKH: 0837491892
                                        </Typography>
                                    </a>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Footer;