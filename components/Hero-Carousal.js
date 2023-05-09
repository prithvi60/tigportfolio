import React from "react";
import Slider from "react-slick";

export default function HeroCarousal({ images }) {
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 5000,
    cssEase: "linear",
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
    <div className="hero">
      <Slider {...settings}>
        {images.map((item, idx) => (
          <div key={idx}>
            <img
              style={{
                width: "100%",
                // height: "100%",
                backgroundSize: "cover",
                objectFit: "cover",

                borderRadius: "15px",
                background: "transparent",
                // aspectRatio: "auto",
                margin: "0 4%",
              }}
              src={item.src}
            ></img>
            {/* <h3 class="pt-3 font-semibold text-lg absolute bottom-8 text-blue text-center">
            Lorem ipsum dolor sit amet
          </h3> */}
          </div>
        ))}
      </Slider>
    </div>
  );
}
