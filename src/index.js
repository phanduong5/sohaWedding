import React from 'react';
import ReactDOM from 'react-dom/client';
import Album from '../src/Page/AlbumPage/Album.jsx'
import Home from '../src/Page/HomePage/home.jsx'
import Tavbar from './Page/common/tavbar/Navbar.jsx'
import Backgroud from './Page/common/backgroud/Backgroud.jsx'
import Head from './Page/common/head/head.jsx'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Footer from './Page/common/footer/Footer.jsx'

import { BrowserRouter , NavLink, Routes, Route, Navigate } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* <Route path='/' element = {<Album/>}>

        </Route> */}
        <Route path='/' element = {<Footer/>}>

        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

