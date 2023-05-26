import React from "react";
import Slider from "react-slick";

export default function HeroCarousal({ images, nav, setNav }) {
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    adaptiveHeight: true,
    autoplay: true,
    pauseOnHover: false,
    speed: 5000,
    autoplaySpeed: 5000,
    cssEase: "linear",
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
          centerMode: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
        },
      },
    ],
  };
  return (
    <div className="hero" style={{ pointerEvents: "none" }}>
      <Slider {...settings} asNavFor={nav} ref={(slider1) => setNav(slider1)}>
        {images.map((item, idx) => (
          <div key={idx} style={{ height: "100%" }}>
            <img
              style={{
                width: "100%",
                height: "38vh",
                backgroundSize: "cover",
                objectFit: "cover",
                // padding: "16px",

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
