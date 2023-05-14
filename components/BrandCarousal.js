import React from "react";
import Slider from "react-slick";

export default function BrandCarousal({ images }) {
  var settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    // centerPadding: "60px",
    dots: false,
    speed: 500,
    slidesToShow: 16,
    slidesToScroll: 8,
    swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    lazyLoad: true,
    rtl: true,
    // responsive: [
    //   {
    //     breakpoint: 1024,
    //     settings: {
    //       slidesToShow: 3,
    //       slidesToScroll: 3,
    //       infinite: true,
    //       dots: false,
    //     },
    //   },
    //   {
    //     breakpoint: 600,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1,
    //     },
    //   },
    //   {
    //     breakpoint: 480,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1,
    //     },
    //   },
    // ],
  };
  return (
    <Slider {...settings}>
      {images.map((item, idx) => (
        <div
          // class="carousel-img"
          style={{ padding: "0px 20px" }}
          key={idx}
        >
          <img
            className=""
            loading="lazy"
            style={{
              //   width: "100%",
              height: "100px",
              width: "150px",
              backgroundSize: "100%",
              margin: "0 2%",
              aspectRatio: "2/1",
            }}
            src={item.pic.src}
          ></img>
        </div>
      ))}
    </Slider>
  );
}
