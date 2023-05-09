import React from "react";
import Slider from "react-slick";

export default function Carousal({ images }) {
  var settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    dots: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    lazyLoad: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Slider {...settings}>
      {images.map((item, idx) => (
        <div
          // class="carousel-img"
          style={{ borderRadius: "20px", width: "100%" }}
          key={idx}
        >
          <img
            className=""
            style={{
              width: "100%",
              height: "60vh",
              backgroundSize: "cover",
              objectFit: "cover",
              // borderRadius: "15px",
              aspectRatio: "16/9",
            }}
            src={item.pic.src}
          ></img>
          <h3 class="pt-3 font-semibold text-sm text-white-200 text-center">
            {item.des}
          </h3>
        </div>
      ))}
    </Slider>
  );
}
