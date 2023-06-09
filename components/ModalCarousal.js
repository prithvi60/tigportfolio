import React from "react";
import Slider from "react-slick";
import { ModalView } from "./ModalView";

export default function ModalCarousal({ images }) {
  var settings = {
    className: "center",
    accessibility: true,
    // arrows:true,
    centerMode: false,
    infinite: true,
    // centerPadding: "60px",
    dots: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    pauseOnFocus: true,
    lazyLoad: true,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode:true
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode:true

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
            key={idx}
            style={{ borderRadius: "20px", position: "relative" }}
            onClick={() => {
              setcontent(item.content || "no description");
              setIsOpen(true);
            }}
          >
            <div className="relative">
              <video
                id="video"
                style={{
                  // width: "100%",
                  maxWidth: width >= 600 ? "308px" : "285px",
                  height: width >= 600 ? "80vh" : "48vh",
                  objectFit: "cover",
                  borderRadius: "60px",
                  padding: "4px 2px",
                  aspectRatio: "16/9",
                  marginLeft: "2px",
                  // marginRight: "10px",
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
