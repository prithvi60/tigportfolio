import React from "react";
import Slider from "react-slick";
import CarousalImage from "./CarousalImage";

export default function Carousal({ images, size }) {
  var settings = {
    className: "center",
    accessibility: true,
    // arrows:true,
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
  const [width, setWidth] = React.useState(null);
  React.useEffect(() => {
    // window is accessible here.
    setWidth(window.innerHeight);
  }, []);

  return (
    <>
      <Slider {...settings}>
        {images.map((item, idx) => (
          <CarousalImage item={item} idx={idx} size={size} width={width} />
        ))}
      </Slider>
    </>
  );
}
