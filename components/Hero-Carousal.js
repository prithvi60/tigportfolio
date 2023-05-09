import React from "react";
import Slider from "react-slick";
import "../styles/herocarousal.module.css";

export default function HeroCarousal({ images }) {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    // lazyLoad: true,
  };
  return (
    <Slider {...settings}>
      {images.map((item, idx) => (
        <div
          class="carousel-img"
          style={{ borderRadius: "20px", width: "100%" }}
          key={idx}
        >
          <img
            className=""
            style={{
              width: "100%",
              height: "100%",
              // borderRadius: "15px",
              aspectRatio: "auto",
            }}
            src={item.src}
          ></img>
          {/* <h3 class="pt-3 font-semibold text-lg absolute bottom-8 text-blue text-center">
            Lorem ipsum dolor sit amet
          </h3> */}
        </div>
      ))}
    </Slider>
  );
}
