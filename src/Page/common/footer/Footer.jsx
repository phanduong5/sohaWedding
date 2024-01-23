import React from "react"
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import './footer.scss'
const Footer = () => {
    return (
        <div className="container">
            <div className="row ">
                <div className="col-sm-12 col-lg-3 text-center" >
                    <p>Lorem ipsum...</p>
                </div>
                <div className="col-sm-6 col-lg-3 text-center">
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
                <div className="col-sm-6 col-lg-3 text-center" >
                    <p>Lorem ipsum...</p>
                </div>
                <div className="col-sm-12 col-lg-3 text-center" >
                    <p>Lorem ipsum...</p>
                </div>
            </div>
        </div>
    )
}
export default Footer;