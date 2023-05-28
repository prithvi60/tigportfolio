import React from "react";

export default function CarousalImage({ item, idx, size, width, type }) {
  const [hover, setHover] = React.useState(false);

  return (
    <div
      // class="carousel-img"
      style={{ borderRadius: "20px", width: "100%", position: "relative" }}
      key={idx}
      // onClick={() => {
      //   setcontent(item.des || "no description");
      //   setIsOpen(true);
      // }}
    >
      <img
        className=""
        loading="lazy"
        onMouseEnter={() => {
          setHover(true);
          // console.log("hover", item.des);
        }}
        onMouseLeave={() =>
          setTimeout(() => {
            setHover(false);
          }, 300)
        }
        onTouchStart={() => {
          setHover(true);
          // console.log("hover", item.des);
        }}
        onTouchEnd={() =>
          setTimeout(() => {
            setHover(false);
          }, 300)
        }
        style={{
          width: "100%",
          maxWidth: width >= 600 ? "400px" : "300px",
          height: type === "events" && width >= 600 ? "62vh" : "40vh",
          backgroundSize: "cover",
          objectFit: "cover",
          opacity: hover ? 0.3 : 1,
          borderRadius: type === "events" ? "10%" : "0%",
          padding: "4px 8px",
          aspectRatio: "16/9",
        }}
        src={item.pic.src}
      ></img>
      {hover ? (
        <h3
          class="pt-3 font-semibold text-sm text-white-200 text-center absolute"
          style={{ top: "30%" }}
        >
          {item.des}
        </h3>
      ) : null}
    </div>
  );
}
