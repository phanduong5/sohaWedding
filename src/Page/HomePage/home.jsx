import './home.scss'
import React from 'react';
import anh1 from '../assets/img/anhchayHome/anhchay1.jpg'
import anh2 from '../assets/img/anhchayHome/anhchay2.jpg'
import anh3 from '../assets/img/anhchayHome/anhchay3.jpg'
import Backgroud from '../common/backgroud/Backgroud';
import Head from '../common/head/head.jsx'
import Tavbar from '../common/tavbar/Navbar.jsx'
import Footer from '../common/footer/Footer.jsx'
function home() {
  const listImg = [
    anh1,
    anh2,
    anh3,
  ];
  return (
    <>
      {/* <Head/>
     <Tavbar/> */}
      <Backgroud listImg={listImg} />
      {/* <Footer/> */}
    </>
  )
}

export default home;