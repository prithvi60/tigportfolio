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
    pauseOnFocus: true,
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
    setWidth(window.innerWidth);
  }, []);
  const [content, setcontent] = React.useState("");
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <>
      <Slider {...settings}>
        {images.map((item, idx) => (
          <div
            style={{ borderRadius: "20px", width: "100%" }}
            key={idx}
            onClick={() => {
              setcontent(item.content || "no description");
              setIsOpen(true);
            }}
          >
            {/* <img
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
            ></img> */}
            <div
              style={{
                width: "100%",
                maxWidth: width >= 600 ? "360px" : "300px",
                height: width >= 600 ? "80vh" : "54vh",
                padding: "4px 8px",
                paddingBottom: width >= 600 ?"120px":"16px",
                cursor: "pointer",
                position: "relative",
                // background: "red",
              }}
            >
              <video
                id="video"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                borderRadius:"10%"

                }}
                autoPlay={true}
                loop={true}
              >
                <source
                  src="https://video.wixstatic.com/video/06a7ff_0b63936f02f04baf99c2803ce89823b8/1080p/mp4/file.mp4"
                  type="video/mp4"
                />
              </video>
              <h3
                class="absolute font-bold text-lg text-white-200 text-center"
                style={{
                  top: "40%",
                  display: "flex",
                  justifyContent: "center",
                  width: "100%",
                }}
              >
                {item.des}
              </h3>
            </div>
          </div>
        ))}
      </Slider>
      <ModalView content={content} isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
}
