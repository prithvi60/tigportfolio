import React from "react";
import { ModalView } from "./ModalView";

export default function CarousalImage({ item, idx, size, width, type }) {
  const [hover, setHover] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(false);
  const [content, setcontent] = React.useState("");

  return (
    <>
      <div
        // class="carousel-img"
        style={{ borderRadius: "20px", position: "relative" }}
        key={idx}
        onClick={() => {
          setcontent(item.des || "no description");
          setIsOpen(true);
        }}
        onMouseEnter={() => {
          setHover(true);
          // console.log("hover", item.des);
        }}
        onMouseLeave={
          () => setHover(false)

          // setTimeout(() => {
          //   setHover(false);
          // }, 300)
        }
        onTouchStart={() => {
          setHover(true);
          // console.log("hover", item.des);
        }}
        onTouchEnd={
          () => setHover(false)

          // setTimeout(() => {
          //   setHover(false);
          // }, 300)
        }
      >
        <img
          className=""
          loading="lazy"
          style={{
            // width: "100%",
            maxWidth: width >= 600 ? "350px" : "300px",
            height: width >= 600 ? "78vh" : "48vh",
            backgroundSize: "cover",
            objectFit: "cover",
            opacity: hover ? 0.3 : 1,
            borderRadius: "60px",
            padding: "4px 20px",
            aspectRatio: "16/9",
            marginLeft: "2px",
            marginRight: "10px",
          }}
          src={item.pic.src}
        ></img>
        {hover ? (
          <h3
            class="pt-3 font-semibold text-sm text-white-200 text-center absolute"
            style={{
              top: "40%",
              display: "flex",
              justifyContent: "center",
              width: "100%",
              cursor: "pointer",
            }}
          >
            {item.title}
          </h3>
        ) : null}
      </div>
      <ModalView content={content} isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
}
