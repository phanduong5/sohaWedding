
import { Masonry } from "@mui/lab";
import { useMemo, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Lightbox from "yet-another-react-lightbox";
import Counter from "yet-another-react-lightbox/plugins/counter";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Zoom from "yet-another-react-lightbox/plugins/zoom";

const ListPhotoShow = ({ listPhoto }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [indexLightbox, setIndexLightbox] = useState(0);
    const [rotateX, setRotateX] = useState(0);
    const [rotateY, setRotateY] = useState(0);
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const albumListLightbox = useMemo(() => {
        const newData = listPhoto.map((item, index) => ({
            src: item,
            alt: `${item}-${index}`,
            width: 3840,
            height: 2560,
        }));
        return newData;
    }, [listPhoto]);

    const handleMouseMove = (index, e) => {
        const { clientX, clientY } = e;
        const { left, top, width, height } = e.target.getBoundingClientRect();

        const rotateYValue = -20 * ((clientX - left - width / 2) / width);
        const rotateXValue = 20 * ((clientY - top - height / 2) / height);

        setRotateY(rotateYValue);
        setRotateX(rotateXValue);
        setHoveredIndex(index);
    };

    const handleMouseLeave = () => {
        setRotateX(0);
        setRotateY(0);
        setHoveredIndex(null);
    };
    return (
        <>
            <Masonry columns={3} spacing={1}>
                {listPhoto.map((image, index) => (
                    <div
                        className="image-container col-md-4 col-sm-6"
                        key={index}
                        onMouseMove={(e) => handleMouseMove(index, e)}
                        onMouseLeave={handleMouseLeave}
                        onClick={() => {
                            setIsOpen(true);
                            setIndexLightbox(index);
                        }}
                    >
                        <div className="image-container-inner"
                            style={{
                                transform:
                                    hoveredIndex === index
                                        ? `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1, 1, 1)`
                                        : "",
                            }}
                        >
                            <LazyLoadImage
                                className="album-detail-img"
                                alt={`Image ${index}`}
                                src={image}
                            />
                            {hoveredIndex === index && <div className="image-fade"></div>}
                        </div>
                    </div>
                ))}
            </Masonry>
            <div>
                {isOpen && (
                    <Lightbox
                        index={indexLightbox}
                        open={isOpen}
                        slides={albumListLightbox}
                        close={() => setIsOpen(false)}
                        plugins={[Counter, Zoom, Fullscreen]}
                    />
                )}
            </div>
        </>
    )
}
export default ListPhotoShow