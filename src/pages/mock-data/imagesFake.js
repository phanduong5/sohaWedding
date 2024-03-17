const images1 = require.context(
  "../../assets/img/Abumle_ảnh_cươi/ảnh_chụp_hồ",
  true
);
const images2 = require.context(
  "../../assets/img/Abumle_ảnh_cươi/ảnh_chụp_ngoài_trời_tối",
  true
);
const images3 = require.context(
  "../../assets/img/Abumle_ảnh_cươi/ảnh_cổ",
  true
);
const images4 = require.context(
  "../../assets/img/Abumle_ảnh_cươi/ảnh_ngay_xưa",
  true
);
const images5 = require.context(
  "../../assets/img/Abumle_ảnh_cươi/ảnh_studio_2",
  true
);
const images6 = require.context(
  "../../assets/img/Abumle_ảnh_cươi/phimtruong1",
  true
);

export const imageAlbumDetail = () => {
  const imageMap1 = {
    name: "ẢNH CHỤP HỒ",
    list: images1.keys().map((image) => images1(image)),
  };
  const imageMap2 = {
    name: "ẢNH CHỤP NGOÀI TRỜI TỐI",
    list: images2.keys().map((image) => images2(image)),
  };
  const imageMap3 = {
    name: "ẢNH CỔ",
    list: images3.keys().map((image) => images3(image)),
  };
  const imageMap4 = {
    name: "ẢNH NGÀY XƯA",
    list: images4.keys().map((image) => images4(image)),
  };
  const imageMap5 = {
    name: "ẢNH STUDIO 2",
    list: images5.keys().map((image) => images5(image)),
  };
  const imageMap6 = {
    name: "ẢNH PHIM TRƯỜNG 1",
    list: images6.keys().map((image) => images6(image)),
  };

  return [imageMap1, imageMap2, imageMap3, imageMap4, imageMap5, imageMap6];
};

const imagesGiaDinh = require.context("../../assets/img/anhGiaDinh", true);

export const listImagesGiaDinh = imagesGiaDinh
  .keys()
  .map((image) => imagesGiaDinh(image));
