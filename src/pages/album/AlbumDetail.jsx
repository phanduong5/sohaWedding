import React from "react";
import { useLocation, useParams } from "react-router";

const AlbumDetail = () => {
  let params = useParams();
  console.log(params);
  return <div>AlbumDetail </div>;
};

export default AlbumDetail;
