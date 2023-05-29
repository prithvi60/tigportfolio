import React from "react";
import Slider from "react-slick";

export default function BrandCarousal({ images, rtl, nav, setNav }) {
  var settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    // centerPadding: "60px",
    dots: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 1000,
    pauseOnHover: false,
    lazyLoad: true,
    rtl: rtl,
    responsive: [
      // {
      //   breakpoint: 1024,
      //   settings: {
      //     slidesToShow: 3,
      //     slidesToScroll: 3,
      //     infinite: true,
      //     dots: false,
      //   },
      // },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Slider {...settings} 
    // asNavFor={nav} ref={(slider1) => setNav(slider1)}
    >
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
              width: "100px",
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
