import React from 'react';
import './head.scss'
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import logo from '../../assets/img/logo.jpg'
import MailIcon from '@mui/icons-material/Mail';
import CallIcon from '@mui/icons-material/Call';
import { Typography } from '@mui/material';
const head = () => {
    return (
        <nav className="head_container">
            <div>
                <img className='head_logo_shop_img' src={logo}></img>
            </div>
            <ul className="head_information_shop_cell">
                <li className='information_cell'>
                    <FmdGoodIcon sx={{ fontSize: '40px' }} className='icon_head' />
                    <ul>
                        <li>
                            <Typography style={{ fontFamily: 'Roboto', fontSize: '15px' }}>
                                Địa Chỉ
                            </Typography>
                        </li>
                        <li>
                            <Typography style={{ fontFamily: 'Roboto', fontSize: '15px' }}>
                                199 Giáp Nhất,Thanh Xuân,Hà Nội
                            </Typography>
                        </li>
                    </ul>
                </li>
                <li className='information_cell'>
                    <MailIcon sx={{ fontSize: '40px' }} className='icon_head' />
                    <ul>
                        <li>
                            <Typography style={{ fontFamily: 'Roboto', fontSize: '15px' }}>
                                Email
                            </Typography>
                        </li>
                        <li>
                            <Typography style={{ fontFamily: 'Roboto', fontSize: '15px' }}>
                                sohawedding199@gmail.com
                            </Typography>
                        </li>
                    </ul>
                </li>
                <li className='information_cell'>
                    <CallIcon sx={{ fontSize: '40px' }} className='icon_head' />
                    <ul>
                        <li>
                            <Typography style={{ fontFamily: 'Roboto', fontSize: '15px' }}>
                                HotLine
                            </Typography>
                        </li>
                        <li>
                            <Typography style={{ fontFamily: 'Roboto', fontSize: '15px' }}>
                                0867058105
                            </Typography>
                        </li>
                    </ul>
                </li>
            </ul>
        </nav>
    )
}
export default head