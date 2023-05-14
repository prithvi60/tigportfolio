import React from "react";
import Slider from "react-slick";
import { ModalView } from "./ModalView";

export default function ModalCarousal({ images, size }) {
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
  const [content, setcontent] = React.useState("");
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <Slider {...settings}>
        {images.map((item, idx) => (
          <div
            // class="carousel-img"
            style={{ borderRadius: "20px", width: "100%" }}
            key={idx}
            onClick={() => {
              setcontent(item.des || "no description");
              setIsOpen(true);
            }}
          >
            <img
              className=""
              loading="lazy"
              style={{
                width: size ? size : "100%",
                height: size ? size : width <= 600 ? "40vh" : "60vh",
                backgroundSize: "cover",
                objectFit: "cover",
                // borderRadius: "15px",
                aspectRatio: "16/9",
              }}
              src={item.pic.src}
            ></img>
            {/* <h3 class="pt-3 font-semibold text-sm text-white-200 text-center">
              {item.des}
            </h3> */}
          </div>
        ))}
      </Slider>
      <ModalView content={content} isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
}
