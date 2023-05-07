import React, { useEffect } from "react";
import Carousal from "./Carousal";
import Img2 from "../img/tigvid-logo.jpg";
import Img1 from "../img/tig-paperclip.webp";

export default function Main({
  videoRef,
  eventRef,
  campaignRef,
  contactRef,
  storyRef,
}) {
  const [MousePosition, setMousePosition] = React.useState(200);
  const [colorbg, setBg] = React.useState("transparent");
  const [textColor, settextColor] = React.useState("black");

  const [cur, setCur] = React.useState(false);

  const cursor = React.useRef(null);

  React.useEffect(() => {
    const timer1 = setTimeout(() => {
      setBg("#97b857");
    }, 500);
    const timer2 = setTimeout(() => {
      setBg("#d74535");
    }, 1000);
    const timer3 = setTimeout(() => {
      setBg("#edcae2");
    }, 1500);
    const timer4 = setTimeout(() => {
      setBg("#f2d763");
    }, 2000);

    const timer5 = setTimeout(() => {
      if (cursor.current !== null) {
        cursor.current.onmousemove = function (event) {
          console.log(cursor);
          setMousePosition(event.pageX);
        };
        setBg("#dd73c6");
        setCur(true);
        settextColor("white");
      }
    }, 2500);
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
      clearTimeout(timer5);
    };
  }, []);

  return (
    <section class="text-gray-600">
      <section
        id="hero"
        style={{
          position: "relative",
          height: "100vh",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: MousePosition - 15,
            color: "red",
          }}
          className="md:invisible"
        >
          {cur ? (
            <img
              src="https://global-uploads.webflow.com/625593a881b8ebd169835ca5/6272dd170459e2734bd53502_handlebar.svg"
              loading="lazy"
              alt="mobile-handle"
            ></img>
          ) : null}
        </div>
        <div
          class="relative max-w-5xl pt-8 pb-4 mx-auto"
          style={{
            position: "absolute",
            top: "0",
            left: "0",
            bottom: "0",
            right: "0",
            height: "100vh",
          }}
          ref={cursor}
        >
          <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden ">
            <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />

            <h1
              className="z-10 text-5xl duration-1000 bg-white cursor-default text-edge-outline animate-title font-ultra  md:text-9xl whitespace-nowrap bg-clip-text "
              style={{ color: textColor }}
            >
              <span style={{ color: "#ea3328" }}>T</span>HE{" "}
              <span style={{ color: "#ea3328" }}>I</span>NT{" "}
              <span style={{ color: "#ea3328" }}>G</span>EN
            </h1>
            <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
            <div className="my-16 text-center animate-fade-in z-10">
              <h2 className="text-md text-white-100 mx-10 ">
                Creating the largest creator-based community in TamilNadu.
              </h2>
            </div>
          </div>
          {/* <div className="absolute mx-auto top-0 h-screen  w-screen animate-fade-in">
          <video
            autoPlay
            loop
            preload="auto"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          >
            <source src="https://video.wixstatic.com/video/06a7ff_0b63936f02f04baf99c2803ce89823b8/1080p/mp4/file.mp4" />
          </video>
        </div> */}
        </div>
        {/* fix interaction */}
        <div
          id="cool-wrapper"
          // ref={cursor}
          onTouchStart={(event) => {
            setMousePosition(event.touches[0].clientX);
          }}
          onTouchMove={(event) => {
            setMousePosition(event.touches[0].clientX);
          }}
          style={{
            background: colorbg,
            borderBottomLeftRadius: "15px",
            width: MousePosition,
            position: "absolute",
            overflow: "hidden",
            top: "0",
            left: "0",
            bottom: "0",
            right: "0",
            height: "100vh",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "0",
              left: "0",
              bottom: "0",
              right: "0",
              height: "100vh",
            }}
          >
            {/* put your hidden elements here */}
            {/* <div className="pl-60 absolute bottom-40">item </div> */}
            {/* <div className="pl-80 absolute bottom-40"> */}
            {/* <Carousal images={[Img1, Img2, Img1, Img2, Img1, Img2]} /> */}
            {/* <img
              src={Img2.src}
              alt="logo-1"
              className="pl-80 absolute bottom-40"
              // style={{ width: "100px", height: "100px" }}
            ></img> */}
            {/* </div> */}
          </div>
        </div>
      </section>

      <section id="video" ref={videoRef}>
        <div
          id="cool-wrapper"
          style={{
            background: "#8eb946",
            width: "20%",
            position: "absolute",
            right: "0",
            height: "100%",
            zIndex: 0,
            borderTopRightRadius: "15px",
          }}
        />
        <div style={{ zIndex: 1, position: "relative" }}>
          <h2 className="pt-24   mb-1 text-2xl font-semibold text-white-100 tracking-tighter text-center  lg:text-7xl md:text-6xl">
            In The Press
          </h2>
          <br></br>
          <p className="mx-auto text-xl text-center text-white-100 font-normal leading-relaxed fs521 lg:w-2/3">
            We believe that content at its source, in its rawest form will never
            die. The platforms of distribution will metamorphose innumerably but
            an idea as a little seed in a creator's head will stay potent and
            constant.
          </p>
          {/* <div className="flex flex-column justify-items-center"> */}
          <div className="mx-auto  text-center  leading-relaxed fs521">
            <Carousal images={[Img1, Img2, Img1, Img2, Img1, Img2]} />
          </div>
        </div>
      </section>

      <section id="event" ref={eventRef}>
        <div style={{ zIndex: 1, position: "relative" }}>
          <div
            id="cool-wrapper"
            style={{
              background: "#dd73c6",
              width: "20%",
              position: "absolute",
              left: "0",
              height: "100%",
              borderTopLeftRadius: "15px",

              zIndex: -1,
            }}
          />
          <h2 className="pt-24   mb-1 text-2xl font-semibold text-white-100 tracking-tighter text-center  lg:text-7xl md:text-6xl">
            Experiences Curated
          </h2>
          <br></br>
          <div className="mx-auto  text-center  leading-relaxed fs521">
            <Carousal images={[Img1, Img2, Img1, Img2, Img1, Img2]} />
          </div>
        </div>
      </section>
      <section id="campaign" ref={campaignRef}>
        <div style={{ zIndex: 1, position: "relative" }}>
          <div
            id="cool-wrapper"
            style={{
              background: "#ea3328",
              width: "20%",
              position: "absolute",
              right: "0",
              borderTopRightRadius: "15px",

              height: "100%",
              zIndex: -1,
            }}
          />
          <h2 className="pt-24   mb-1 text-2xl font-semibold text-white-100 tracking-tighter text-center  lg:text-7xl md:text-6xl">
            Brands we have worked with
          </h2>
          <br></br>
          <p className="mx-auto text-xl text-center text-white-100 font-normal leading-relaxed fs521 lg:w-2/3">
            We believe that content at its source, in its rawest form will never
            die. The platforms of distribution will metamorphose innumerably but
            an idea as a little seed in a creator's head will stay potent and
            constant.
          </p>
          <div className="pt-12 pb-24 max-w-4xl mx-auto fsac4 md:px-1 px-3">
            <div class="ktq4">
              <h3 class="pt-3 font-semibold text-lg ">
                Lorem ipsum dolor sit amet
              </h3>
              <p class="pt-2 value-text text-md  fkrr1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas tincidunt a libero in finibus. Maecenas a nisl vitae
                ante rutrum porttitor.
              </p>
            </div>
            <div class="ktq4">
              <h3 class="pt-3 font-semibold text-lg ">
                Lorem ipsum dolor sit amet
              </h3>
              <p class="pt-2 value-text text-md  fkrr1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas tincidunt a libero in finibus. Maecenas a nisl vitae
                ante rutrum porttitor.
              </p>
            </div>
            <div class="ktq4">
              <h3 class="pt-3 font-semibold text-lg ">
                Lorem ipsum dolor sit amet
              </h3>
              <p class="pt-2 value-text text-md  fkrr1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas tincidunt a libero in finibus. Maecenas a nisl vitae
                ante rutrum porttitor.
              </p>
            </div>
            <div class="ktq4">
              {/* <img className="w-10" src="https://nine4.app/favicon.png"></img> */}
              <h3 class="pt-3 font-semibold text-lg ">
                Lorem ipsum dolor sit amet
              </h3>
              <p class="pt-2 value-text text-md  fkrr1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas tincidunt a libero in finibus. Maecenas a nisl vitae
                ante rutrum porttitor.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="story" ref={storyRef}>
        <div style={{ zIndex: 1, position: "relative" }}>
          <div
            id="cool-wrapper"
            style={{
              background: "#3d7ff7",
              width: "20%",
              position: "absolute",
              left: "0",
              borderTopLeftRadius: "15px",

              height: "100%",
              zIndex: -1,
            }}
          />
          <h2 className="pt-24   mb-1 text-2xl font-semibold text-white-100 tracking-tighter text-center  lg:text-7xl md:text-6xl">
            Brand Story
          </h2>
          <br></br>
          <p className="mx-auto text-xl text-center text-white-100 font-normal leading-relaxed fs521 lg:w-2/3">
            We started off with a humble YouTube channel which ushered in a new
            generation of disruptive thinking: Paracetamol Paniyaram. We
            ventured further in our dreams of quality content production by
            producing multiple web-series. We offer our technical and creative
            knowledge to clients for their outreach purposes.
          </p>
          <div className="pt-12 pb-24 max-w-4xl mx-auto fsac4 md:px-1 px-3">
            <div class="ktq4">
              <h3 class="pt-3 font-semibold text-lg ">
                Lorem ipsum dolor sit amet
              </h3>
              <p class="pt-2 value-text text-md  fkrr1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas tincidunt a libero in finibus. Maecenas a nisl vitae
                ante rutrum porttitor.
              </p>
            </div>
            <div class="ktq4">
              <h3 class="pt-3 font-semibold text-lg ">
                Lorem ipsum dolor sit amet
              </h3>
              <p class="pt-2 value-text text-md  fkrr1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas tincidunt a libero in finibus. Maecenas a nisl vitae
                ante rutrum porttitor.
              </p>
            </div>
            <div class="ktq4">
              <h3 class="pt-3 font-semibold text-lg ">
                Lorem ipsum dolor sit amet
              </h3>
              <p class="pt-2 value-text text-md  fkrr1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas tincidunt a libero in finibus. Maecenas a nisl vitae
                ante rutrum porttitor.
              </p>
            </div>
            <div class="ktq4">
              {/* <img className="w-10" src="https://nine4.app/favicon.png"></img> */}
              <h3 class="pt-3 font-semibold text-lg ">
                Lorem ipsum dolor sit amet
              </h3>
              <p class="pt-2 value-text text-md  fkrr1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas tincidunt a libero in finibus. Maecenas a nisl vitae
                ante rutrum porttitor.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* <section class="relative pb-24">
        <div class="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <div class="py-24 md:py-36">
            <h1 class="mb-5 text-6xl font-bold ">
              Subscribe to our newsletter
            </h1>
            <h1 class="mb-9 text-2xl font-semibold ">
              Enter your email address and get our newsletters straight away.
            </h1>
            <input
              type="email"
              placeholder="jack@example.com"
              name="email"
              autocomplete="email"
              class="border border-gray-600 w-1/4 pr-2 pl-2 py-3 mt-2 rounded-md text-gray-800 font-semibold hover:border-gray-700 bg-black"
            />{" "}
            <a
              class="inline-flex items-center px-14 py-3 mt-2 ml-2 font-medium text-black transition duration-500 ease-in-out transform bg-transparent border rounded-lg bg-white"
              href="/"
            >
              <span class="justify-center">Subscribe</span>
            </a>
          </div>
        </div>
      </section> */}
      <section id="contact" ref={contactRef}>
        <div style={{ zIndex: 1, position: "relative" }}>
          <div
            id="cool-wrapper"
            style={{
              background: "#f8d648",
              width: "20%",
              position: "absolute",
              right: "0",
              height: "100%",
              borderTopRightRadius: "15px",

              zIndex: -1,
            }}
          />
          <div class="max-w-6xl mx-auto px-4 sm:px-6 text-center">
            <div class="pb-56">
              <h1 class="mb-5 text-white-100 pt-2 text-2xl md:text-6xl font-bold ">
                Contact Us
              </h1>
              <div className="text-white-200">
                The Internet Generation
                <br />
                27/11 Sounderajan Street
                <br />
                Tnagar, Chennai - 17
                <br />
                contact@theintgen.com
                <br />
                Tel: 9940237330
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
