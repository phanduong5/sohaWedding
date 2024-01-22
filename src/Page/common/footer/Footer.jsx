import React from "react"
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-sm-3" >
                    <p>Lorem ipsum...</p>
                </div>
                <div className="col-sm-3">
                    <ul>
                        <li>
                            <a>
                                Links
                            </a>
                        </li>
                        <li>
                            <a>
                            <Typography style={{ fontFamily: 'Roboto', fontSize: '12px' }}>
                                <Link to="/Introduce" className="no-underline">Giới Thiệu</Link>
                            </Typography>
                            </a>
                        </li>
                        <li>
                            <a>
                            <Typography style={{ fontFamily: 'Roboto', fontSize: '12px' }}>
                            <Link to="/Service" className="no-underline">Dịch Vụ</Link>
                            </Typography>
                            </a>
                        </li>
                        <li>
                            <a>
                            <Typography style={{ fontFamily: 'Roboto', fontSize: '12px' }}>
                            <Link to="/Price" className="no-underline">Báo Giá</Link>
                            </Typography>
                            </a>
                        </li>
                        <li>
                            <a>
                            <Typography style={{ fontFamily: 'Roboto', fontSize: '12px' }}>
                            <Link to="/Album" className="no-underline">Album</Link>
                            </Typography>
                            </a>
                        </li>
                        <li>
                            <a>
                            <Typography style={{ fontFamily: 'Roboto', fontSize: '12px' }}>
                            <Link to="/Contact" className="no-underline">Liên Hệ</Link>
                            </Typography>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="col-sm-3" >
                    <p>Lorem ipsum...</p>
                </div>
                <div className="col-sm-3" >
                    <p>Lorem ipsum...</p>
                </div>
            </div>
        </div>
    )
}
export default Footer;