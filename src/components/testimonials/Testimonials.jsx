import React from "react";
import { Data } from "./Data";

import "./testimonials.css";

const Testimonials = () => {
    return (
        <sectionn className="Testimonials container section">
            <h2 className="section__title">My Clients Say</h2>
            <span className="section__subtitle">Testimonial</span>

            <div className="testimonial__container">
                {Data.map(({ id, image, title, description }) => {
                    return (
                        <div className="testimonial__card" key={id}>
                            <img src={image} alt=""
                                className="testimomial__img" />
                            <h3 className="testimonial__name">{title}</h3>
                            <p className="testimonial__description">{ description}</p>
                        </div>
                    )
                })}
            </div>
        </sectionn>
    );
};

export default Testimonials;