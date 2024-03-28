import { useLocation } from "react-router-dom";
//import Backgroud from "../backgroud/Backgroud";
import { useMemo } from "react";
import { imgServiceDetail } from "../../mock-data/imagesService";
import { Masonry } from "@mui/lab";
import { LazyLoadImage } from "react-lazy-load-image-component";
import ServiceSlide from "../service-slide/ServiceSlide";
import bgSlide from "../../../assets/img/serviceHome/PhotoWedding/432766432_308505045581058_855755973981200055_n.jpg"
const ServiceDetailHome = () => {
  let location = useLocation();
  const queryParams = new URLSearchParams(location.search)
  const idService = queryParams.get("id");
  const imgServiceList = useMemo(() => {
    return imgServiceDetail()
  })

  return (
    <div>
      <ServiceSlide bgSlide={bgSlide} />
      <div className="elementor-container">
        <Masonry columns={3} spacing={1}>
          {imgServiceList[idService].list.map((image, index) => {
            <div>
              <LazyLoadImage
                alt={`Image ${index}`}
                src={image}
              />
            </div>
          })}
        </Masonry>
      </div>
    </div>
  )
}
export default ServiceDetailHome