import './home.scss'
import React from 'react';
import anh1 from '../assets/img/anh1.jpg'
import anh2 from '../assets/img/anh2.jpg'
import anh3 from '../assets/img/anh3.jpg'
import Backgroud from '../common/backgroud/Backgroud';
function home() {
  const listImg =[
    anh1,
    anh2,
    anh3,
      ]; 
    return (
      <div class = 'main'>
       <Backgroud listImg = {listImg} ></Backgroud>
      </div>
    );
  }
  
  export default home;