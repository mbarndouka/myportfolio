import React from "react";
import { Data } from "./Data";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import {Pagination} from "swiper/modules"

import "./testimonials.css";

const Testimonials = () => {
    return (
        <section className="Testimonials container section">
            <h2 className="section__title">My Clients Say</h2>
            <span className="section__subtitle">Testimonial</span>

            <Swiper
                loop={true}
                grabCursor={true}
                spaceBetween={24}
                pagination={true}
                modules={[Pagination]}
                breakpoints={{
                    576: {
                        slidesPerView: 2,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween:48,
                    }
                }}
                className="testimonial__container">
                {Data.map((data) => {
                    return (
                        <SwiperSlide className="testimonial__card" key={data.id}>
                            <img src={data.image} alt=""
                                className="testimomial__img" />
                            <h3 className="testimonial__name">{data.title}</h3>
                            <p className="testimonial__description">{ data.descripton}</p>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </section>
    );
};

export default Testimonials;