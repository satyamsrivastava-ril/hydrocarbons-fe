import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./sliderCarousel.scss";
import carouselData from "./data/carouselData";
import settings from "./data/carouselSettings";
export default function sliderCarousel() {
  return (
    <>
      <section id="homeslider">
        <Slider {...settings} className=" multiple-items">
          {carouselData.map((item) => {
            return (
              <div
                className="rectangle d-flex align-items-center justify-content-center "
                key={item.id}
              >
                {item.icon}
                <h4 className="text-uppercase">{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            );
          })}
        </Slider>
      </section>
    </>
  );
}
