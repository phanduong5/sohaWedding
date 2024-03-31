const imgPhotoWedding = require.context(
    "../../assets/img/serviceHome/PhotoWedding",
    true
);
export const imgServiceDetail = () => {
    const listPhotoWedding = {
        name: "Chụp Ảnh Cưới",
        list: imgPhotoWedding.key().map(imgPhotoWedding)
    }
    return {"CHỤP+ẢNH+CƯỚI" : listPhotoWedding}
}