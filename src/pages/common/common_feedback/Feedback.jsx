import { Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import demo from "../../../assets/img/16.webp"
import React from "react";
import 'swiper/css';
import 'swiper/css/pagination';
import "./feedback.scss"

const Feedback = () => {
    const list = [
        {
            id: 1,
            src: demo
        },
        {
            id: 2,
            src: demo
        },
        {
            id: 3,
            src: demo
        },
        {
            id: 4,
            src: demo
        },
        {
            id: 5,
            src: demo
        },
    ]
    return (
        <div className="container feedback">
            <div className="Content_Feedback">
                <h1>TRẢI NGHIỆM CỦA KHÁCH HÀNG</h1>
                <div className="box_content_feedback">
                    <span>Cùng xem những đánh giá chân thực nhất từ những khách hàng đã sử dụng dịch vụ tại SOHA Wedding bạn nhé!</span>
                    <button>Xem Nhiều Hơn</button>
                </div>
            </div>
            <div className="LinePrice"></div>
            <div className="detail_feedback">
                <Swiper
                    // install Swiper modules
                    modules={[Pagination, Autoplay]}
                    slidesPerView={3}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    spaceBetween={30}
                >
                    {list.map((item) => (
                        <SwiperSlide key={item.id}>
                            <div
                                style={{ backgroundImage: `url(${item.src})` }}
                                className="background-swipper-show"
                            ></div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div className="LinePrice"></div>
        </div>
    );
}
export default Feedback;