import { Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import demo1 from "../../../assets/img/photofeedback/432755174_303980326033530_4070618380651200291_n.jpg"
import demo2 from "../../../assets/img/photofeedback/432759219_303980319366864_820972412787399389_n.jpg"
import demo3 from "../../../assets/img/photofeedback/432775075_303980399366856_3652851992579687494_n.jpg"
import demo4 from "../../../assets/img/photofeedback/432974865_303980322700197_6726792931494573821_n.jpg"
import React from "react";
import 'swiper/css';
import 'swiper/css/pagination';
import "./feedback.scss"

const Feedback = () => {
    const list = [
        {
            id: 1,
            src: demo1
        },
        {
            id: 2,
            src: demo2
        },
        {
            id: 3,
            src: demo3
        },
        {
            id: 4,
            src: demo4
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
                    slidesPerView = {1}
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                          },
                          768: {
                            slidesPerView: 2,
                          },
                          1024: {
                            slidesPerView: 3,
                          },
                      }}
                    modules={[Pagination, Autoplay]}
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
                                className="background-swipper-feedback"
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