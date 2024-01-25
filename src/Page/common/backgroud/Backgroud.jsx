import { useEffect, useState } from "react"
import React from 'react';
import './backgroud.scss'
const Backgroud = ({ listImg }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((currentIndex) => (currentIndex + 1) % listImg.length);
    }, 3000);

    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [listImg]);

  return (
    <div className="container_imgRun">
      <img className="imgRun" src={listImg[currentImageIndex]} alt={`Image ${currentImageIndex + 1}`} />
    </div>
  );
};
export default Backgroud