import React from "react";
import Slider from "react-slick";

export default function Carousal({images}) {
  var settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    dots: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    lazyLoad: true,
    // responsive: [
    //   {
    //     breakpoint: 1024,
    //     settings: {
    //       slidesToShow: 3,
    //       slidesToScroll: 3,
    //       infinite: true,
    //       dots: true,
    //     },
    //   },
    //   {
    //     breakpoint: 600,
    //     settings: {
    //       slidesToShow: 2,
    //       slidesToScroll: 2,
    //       initialSlide: 2,
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
  const imgLinks = ["", "", ""];
  return (
    <Slider {...settings}>
      {images.map((item,idx) => (
        <div class="carousel-img" style={{borderRadius:"20px",width:"100%"}} key={idx}>
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
