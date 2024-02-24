import React from "react";
import Head from "../common/head/head.jsx"
import Menu from "../common/tavbar/Navbar.jsx"
import ImageMove from "../common/backgroud/Backgroud.jsx"
import ImageOne from "../../assets/img/anh1.jpg"
import ImageTwo from "../../assets/img/anh2.jpg"
import ImageThree from "../../assets/img/anh3.jpg"
import Footed from "../common/footer/Footer.jsx"
import ContextHome from "../common/commonContext/CommonContext.jsx"
import ServiceHome from "../common/commonService/CommonService.jsx"
import StyleHome from "../common/CommonStylePhoto/CommonStylePhoto.jsx"
const Home = () => {
  const listImage = [
    ImageOne,
    ImageTwo,
    ImageThree
    ]
  return(
    <>
    <Head/>
    <Menu/>
    <ImageMove listImg={listImage}/>
    <ServiceHome/>
    <StyleHome/>
    <ContextHome/>
    <Footed/>
    </>
  )
};
export default Home;