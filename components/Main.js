import React, { useEffect } from "react";
import ModalCarousal from "./ModalCarousal";

import HeroCarousal from "./Hero-Carousal";
import ContactForm from "./ContactForm";
// hero images
import Event1 from "../img/reels/tig-event1.webp";
import Event2 from "../img/reels/tig-event-2.webp";
import Event3 from "../img/reels/tig-event-3.webp";
import Event4 from "../img/reels/tig-event-4.webp";
import Event5 from "../img/reels/tig-event-5.webp";
import Event6 from "../img/reels/tig-open-1.webp";

import Pro1 from "../img/reels/tig-ad-1.webp";
import Pro2 from "../img/reels/tig-ad-2.webp";
import Pro3 from "../img/reels/tig-gov-1.webp";
import Pro4 from "../img/reels/tig-gov-2.webp";
import Pro5 from "../img/reels/tig-gov-3.webp";
import Pro6 from "../img/reels/tig-series-1.webp";
// in the press imgs
import Press1 from "../img/press/press-1.webp";
import Press2 from "../img/press/press-2.webp";
import Press3 from "../img/press/press-3.webp";
import Press4 from "../img/press/press-4.jpg";
import Press5 from "../img/press/press-5.webp";
import Press6 from "../img/press/press-6.webp";
import Press7 from "../img/press/press-7.jpg";
import Press8 from "../img/press/press-8.webp";
// Curated
import Curated1 from "../img/curated/curated-1.webp";
import Curated2 from "../img/curated/curated-2.webp";
import Curated3 from "../img/curated/curated-3.webp";
import Curated4 from "../img/curated/curated-4.webp";
import Curated5 from "../img/curated/curated-5.webp";
import Curated6 from "../img/curated/curated-6.webp";
import Curated7 from "../img/curated/curated-7.webp";
import Curated8 from "../img/curated/curated-8.webp";
import Curated9 from "../img/curated/curated-9.webp";
import Curated10 from "../img/curated/curated-10.webp";
import Curated11 from "../img/curated/curated-11.webp";
import Curated12 from "../img/curated/curated-12.webp";
// Brands
import Brand1 from "../img/brands/1.png";
import Brand2 from "../img/brands/2.png";
import Brand3 from "../img/brands/3.png";
import Brand4 from "../img/brands/4.png";
import Brand5 from "../img/brands/5.png";
import Brand6 from "../img/brands/6.png";
import Brand7 from "../img/brands/7.png";
import Brand8 from "../img/brands/8.png";
import Brand9 from "../img/brands/9.png";
import Brand10 from "../img/brands/10.png";
import Brand11 from "../img/brands/11.png";
import Brand12 from "../img/brands/12.png";
import Brand13 from "../img/brands/13.png";
import Brand14 from "../img/brands/14.png";
import Brand15 from "../img/brands/15.png";
import Brand16 from "../img/brands/16.png";
import Brand17 from "../img/brands/17.png";
import Brand18 from "../img/brands/18.png";
import Brand19 from "../img/brands/19.png";
import Brand20 from "../img/brands/20.png";
import Brand21 from "../img/brands/21.png";
import Brand22 from "../img/brands/22.png";
import Brand23 from "../img/brands/23.png";
import Brand24 from "../img/brands/24.png";
import Brand25 from "../img/brands/25.png";
import Brand26 from "../img/brands/26.png";
import Brand27 from "../img/brands/27.png";
import Brand28 from "../img/brands/28.png";
import Brand29 from "../img/brands/29.png";
import Brand30 from "../img/brands/30.png";
import Brand31 from "../img/brands/31.jpg";
import Brand32 from "../img/brands/32.png";
import BrandCarousal from "./BrandCarousal";
// Services
import Service1 from "../img/services/1.webp";
import Service2 from "../img/services/2.webp";
import Service3 from "../img/services/3.webp";
import Service4 from "../img/services/4.webp";
import Service5 from "../img/services/5.webp";
import Service6 from "../img/services/6.webp";
import Service7 from "../img/services/7.webp";
import { ModalView } from "./ModalView";
import Carousal from "./Carousal";

const services = [
  { pic: Service1, des: "TIGVID" },
  { pic: Service2, des: "Digital Marketing" },
  { pic: Service3, des: "Events" },
  { pic: Service4, des: "Subtitles" },
  { pic: Service5, des: "Content Marketing" },
  { pic: Service6, des: "Artist Management" },
  { pic: Service7, des: "TIG Terrance" },
];
const brands1 = [
  { pic: Brand1 },
  { pic: Brand2 },
  { pic: Brand3 },
  { pic: Brand4 },
  { pic: Brand5 },
  { pic: Brand6 },
  { pic: Brand7 },
  { pic: Brand8 },
  { pic: Brand9 },
  { pic: Brand10 },
  { pic: Brand11 },
  { pic: Brand12 },
  { pic: Brand13 },
  { pic: Brand14 },
  { pic: Brand15 },
  { pic: Brand16 },
];
const brands2 = [
  { pic: Brand17 },
  { pic: Brand18 },
  { pic: Brand19 },
  { pic: Brand20 },
  { pic: Brand21 },
  { pic: Brand22 },
  { pic: Brand23 },
  { pic: Brand24 },
  { pic: Brand25 },
  { pic: Brand26 },
  { pic: Brand27 },
  { pic: Brand28 },
  { pic: Brand29 },
  { pic: Brand30 },
  { pic: Brand31 },
  { pic: Brand32 },
];

const press = [
  {
    pic: Press1,
    des: "Our Webseries highlighted on the first page of Chennai times",
  },
  {
    pic: Press2,
    des: "Our video production content featured in The Deccan Chronicle",
  },
  {
    pic: Press3,
    des: "Our Vote Podu campaign in association with Dunzo as featured in The Hindu",
  },
  {
    pic: Press4,
    des: "TIGITAL's work for the Enforcement Bureau featured in the Chennai Express",
  },
  { pic: Press5, des: "TIGOM, our Open Mic event featured in Metroplus" },
  {
    pic: Press6,
    des: "Singalaalaah an event by TIG at Elliot's Beach featured on The Hindu",
  },
  { pic: Press7, des: "TIGOM, our Open Mic event featured in Chennai Times" },
  { pic: Press8, des: "" },
];
const curated = [
  {
    pic: Curated1,
    des: "TIG partnered with LiveAlive in marketing Pradeep Kumar‘s concert at Music Academy ",
  },
  {
    pic: Curated2,
    des: "Chennai day‘22 was hosted at the Besant Nagar Beach as a part of Government of TamilNadu's Chennai Day Celebrations. TIG provided artists for the event and programmed the entire two days on stage. ",
  },
  {
    pic: Curated3,
    des: "NIBCID & TNGOV jointly organized the 'World's Largest Pledge' against drugs at Kalaivanar Arangam, Chennai.  TIG was associated in this events for videography, photography and digital presence.",
  },
  {
    pic: Curated4,
    des: "TIG hosted and provided artists for the Loka fest that took place in Auroville in 2021. TIG was a partner for both the versions of the hugely succesful fest in 21 and 19",
  },
  {
    pic: Curated5,
    des: "We took over the Mainstage at the outer courtyard of Phoenix Marketcity over their Madras Week celebrations and organised an entire event for them. ",
  },
  {
    pic: Curated6,
    des: "We strongly believe in the fact that art needs an audience’. With that being our guiding force, we have hosted 31 open mics across Chennai to let artists take their art to the masses.We hosted TIGOM PRO ACTS as a part of the holiday season at The Outer Courtyard, The Phoenix Market City, Velacherry.",
  },
  {
    pic: Curated7,
    des: "TIG is a space where we empower artists to showcase their talents and skills. Started humbly in our OG MottaMaadi, we have hosted 31 editions of TIGOM and two special pro editions to support independent artists in their artistic journey.",
  },
  {
    pic: Curated8,
    des: "We host 2 kinds of cyphers- for dance and for rap & beatbox at our OG Mottamaadi. Cyphers are dance offs and rap battles. A great opportunity for freestyle artists to network and present their art to their audience.",
  },
  {
    pic: Curated9,
    des: "The jam session is an opportunity for people to get in touch with their musical friends and make new music together. Every Friday night at 5:30, we'll be gathering at the OG MottaMaadi, where anyone can come and play music with other musicians.",
  },
  {
    pic: Curated10,
    des: "Wednesdays at Leather Bar is an amazing Karaoke Night powered by TIG.",
  },
  {
    pic: Curated11,
    des: "We were associated with SDAT & NIBCID for the setting up of a live stall for Drive against Drugs. Conducted Contests, Awareness Campaigns, Video Coverage and Promotions at the Women's Tennis Open, SDAT, Nungambakkam",
  },
  {
    pic: Curated12,
    des: "An initiative by the Government of Tamil Nadu to celebrate the women and launch of emergency helpline for women - 182. Team TIG was associated with TNGOV for photography, videography,artist and event management",
  },
];
export default function Main({
  videoRef,
  eventRef,
  campaignRef,
  contactRef,
  storyRef,
}) {
  const [MousePosition, setMousePosition] = React.useState(200);
  const [colorbg, setBg] = React.useState("transparent");
  const [textColor, settextColor] = React.useState("white");
  const [isOpen, setIsOpen] = React.useState(false);

  const [cur, setCur] = React.useState(false);

  const cursor = React.useRef(null);

  React.useEffect(() => {
    const timer1 = setTimeout(() => {
      setBg("#41436A");
    }, 500);
    const timer2 = setTimeout(() => {
      setBg("#984063");
    }, 1000);
    const timer3 = setTimeout(() => {
      setBg("#F64668");
    }, 1500);
    const timer4 = setTimeout(() => {
      setBg("#41436A");
    }, 2000);

    const timer5 = setTimeout(() => {
      if (cursor.current !== null) {
        cursor.current.onmousemove = function (event) {
          console.log(cursor);
          setMousePosition(event.pageX);
        };
        setBg("#FE9677");
        setCur(true);
        settextColor("white");
      }
    }, 2500);

    const timer6 = setTimeout(() => {
      setIsOpen(true);
    }, 8000);
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
      clearTimeout(timer5);
      clearTimeout(timer6);
    };
  }, []);
  const [nav1, setNav1] = React.useState();
  const [nav2, setNav2] = React.useState();
  return (
    <>
      <section
        class="text-gray-600 "
        style={{ pointerEvents: isOpen ? "none" : "all" }}
      >
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
              zIndex: "100",
            }}
            // className="md:invisible"
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
            class="relative  mx-auto"
            style={{
              position: "absolute",
              top: "0",
              left: "0",
              bottom: "0",
              right: "0",
              height: "100vh",
            }}
            ref={cursor}
            onTouchStart={(event) => {
              setMousePosition(event.touches[0].clientX);
            }}
            onTouchMove={(event) => {
              setMousePosition(event.touches[0].clientX);
            }}
          >
            <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden ">
              <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />

              <h1
                className="z-10 text-5xl duration-1000 bg-white cursor-default text-edge-outline animate-title font-secular  md:text-9xl whitespace-nowrap bg-clip-text "
                style={{ color: textColor }}
              >
                <span style={{ color: "#F64668" }}>T</span>HE{" "}
                <span style={{ color: "#F64668" }}>I</span>NT{" "}
                <span style={{ color: "#F64668" }}>G</span>EN
              </h1>
              <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
              <div className="my-16 text-center animate-fade-in z-10">
                <h2 className="text-md text-white-100 mx-10 font-bold">
                  Creating the largest creator-based community in TamilNadu.
                </h2>
              </div>
              <div
                className="mx-auto  text-center  leading-relaxed fs521 absolute bottom-0  animate-fade-in-slide"
                style={{ width: "100vw", height: "30vh" }}
              >
                <HeroCarousal
                  images={[Pro1, Pro2, Pro3, Pro4, Pro5, Pro6]}
                  nav={nav2}
                  setNav={setNav1}
                />
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
              pointerEvents: "none",
            }}
          >
            <div
              style={{
                // position: "absolute",
                // top: "0",
                // left: "0",
                // bottom: "0",
                // right: "0",
                height: "100vh",
              }}
            >
              {/* put your hidden elements here */}
              <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden ">
                <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />

                <h1
                  className="z-10 text-5xl duration-1000 bg-white cursor-default text-edge-outline animate-title font-secular  md:text-9xl whitespace-nowrap bg-clip-text "
                  style={{ color: "black" }}
                >
                  <span style={{ color: "#41436A" }}>T</span>HE{" "}
                  <span style={{ color: "#41436A" }}>I</span>NT{" "}
                  <span style={{ color: "#41436A" }}>G</span>EN
                </h1>
                <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
                <div className="my-16 text-center animate-fade-in z-10">
                  <h2
                    className="text-md  mx-10 font-bold "
                    style={{
                      color: "#000000",
                      textShadow: "0.8px 0px #000000",
                    }}
                  >
                    Creating the largest creator-based community in TamilNadu.
                  </h2>
                </div>
                <div
                  className="mx-auto  text-center  leading-relaxed fs521 absolute bottom-0  animate-fade-in-slide"
                  style={{ width: "100vw", height: "30vh" }}
                >
                  <HeroCarousal
                    images={[Event1, Event2, Event3, Event4, Event5, Event6]}
                    nav={nav1}
                    setNav={setNav2}
                  />
                </div>
                {/* <div className="absolute text-center animate-fade-in z-10">
                <img
                  src={Img2.src}
                  alt=""
                  style={{ width: "100px", height: "100px" }}
                />
              </div> */}
              </div>
            </div>
          </div>
        </section>
        <section id="event" ref={eventRef}>
          <div style={{ zIndex: 1, position: "relative" }}>
            <div
              id="cool-wrapper"
              style={{
                background: "#41436A",
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
            {/* <button
            className="modal-open bg-transparent border border-gray-500 hover:border-indigo-500 text-gray-500 hover:text-indigo-500 font-bold py-2 px-4 rounded-full"
            onClick={() => setIsOpen((o) => !o)}
          >
            Open Modal
          </button> */}
            <div className="mx-auto  text-center  leading-relaxed fs521 relative">
              <Carousal images={curated} />
              <div
                style={{
                  position: "absolute",
                  left: "0",
                  top: "40%",
                  width: "5%",
                  height: "5%",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  id="left-arrow"
                >
                  <path
                    fill="#6563ff"
                    d="m11.293 7.293-4 4a1.004 1.004 0 0 0 0 1.414l4 4a1 1 0 0 0 1.414-1.414L10.414 13H16a1 1 0 0 0 0-2h-5.586l2.293-2.293a1 1 0 0 0-1.414-1.414Z"
                  ></path>
                  <path
                    fill="#b2b1ff"
                    d="M2 12A10 10 0 1 0 12 2 10.011 10.011 0 0 0 2 12Zm10.707-4.707a1 1 0 0 1 0 1.414L10.414 11H16a1 1 0 0 1 0 2h-5.586l2.293 2.293a1 1 0 0 1-1.414 1.414l-4-4a1.004 1.004 0 0 1 0-1.414l4-4a1 1 0 0 1 1.414 0Z"
                  ></path>
                </svg>
              </div>
              <div
                style={{
                  position: "absolute",
                  right: "0",
                  top: "40%",
                  width: "5%",
                  height: "5%",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  id="right-arrow"
                >
                  <path
                    fill="#6563ff"
                    d="m12.707 16.707 4-4a1.004 1.004 0 0 0 0-1.414l-4-4a1 1 0 0 0-1.414 1.414L13.586 11H8a1 1 0 0 0 0 2h5.586l-2.293 2.293a1 1 0 0 0 1.414 1.414Z"
                  ></path>
                  <path
                    fill="#b2b1ff"
                    d="M22 12a10 10 0 1 0-10 10 10.011 10.011 0 0 0 10-10Zm-10.707 4.707a1 1 0 0 1 0-1.414L13.586 13H8a1 1 0 0 1 0-2h5.586l-2.293-2.293a1 1 0 0 1 1.414-1.414l4 4a1.004 1.004 0 0 1 0 1.414l-4 4a1 1 0 0 1-1.414 0Z"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </section>
        <section id="video" ref={videoRef}>
          <div
            id="cool-wrapper"
            style={{
              background: "#984063",
              width: "20%",
              position: "absolute",
              right: "0",
              height: "100%",
              zIndex: 0,
              borderTopRightRadius: "15px",
            }}
          />
          <div style={{ zIndex: 1, position: "relative" }} className="mb-12">
            <h2 className="pt-24   mb-1 text-2xl font-semibold text-white-100 tracking-tighter text-center  lg:text-7xl md:text-6xl">
              In The Press
            </h2>
            <br></br>
            {/* <p className="mx-auto text-xl text-center text-white-100 font-normal leading-relaxed fs521 lg:w-2/3">
            We believe that content at its source, in its rawest form will never
            die. The platforms of distribution will metamorphose innumerably but
            an idea as a little seed in a creator's head will stay potent and
            constant.
          </p> */}
            {/* <div className="flex flex-column justify-items-center"> */}
            <div className="mx-auto  text-center  leading-relaxed fs521 relative">
              <Carousal images={press} />
              <div
                style={{
                  position: "absolute",
                  left: "0",
                  top: "40%",
                  width: "5%",
                  height: "5%",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  id="left-arrow"
                >
                  <path
                    fill="#6563ff"
                    d="m11.293 7.293-4 4a1.004 1.004 0 0 0 0 1.414l4 4a1 1 0 0 0 1.414-1.414L10.414 13H16a1 1 0 0 0 0-2h-5.586l2.293-2.293a1 1 0 0 0-1.414-1.414Z"
                  ></path>
                  <path
                    fill="#b2b1ff"
                    d="M2 12A10 10 0 1 0 12 2 10.011 10.011 0 0 0 2 12Zm10.707-4.707a1 1 0 0 1 0 1.414L10.414 11H16a1 1 0 0 1 0 2h-5.586l2.293 2.293a1 1 0 0 1-1.414 1.414l-4-4a1.004 1.004 0 0 1 0-1.414l4-4a1 1 0 0 1 1.414 0Z"
                  ></path>
                </svg>
              </div>
              <div
                style={{
                  position: "absolute",
                  right: "0",
                  top: "40%",
                  width: "5%",
                  height: "5%",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  id="right-arrow"
                >
                  <path
                    fill="#6563ff"
                    d="m12.707 16.707 4-4a1.004 1.004 0 0 0 0-1.414l-4-4a1 1 0 0 0-1.414 1.414L13.586 11H8a1 1 0 0 0 0 2h5.586l-2.293 2.293a1 1 0 0 0 1.414 1.414Z"
                  ></path>
                  <path
                    fill="#b2b1ff"
                    d="M22 12a10 10 0 1 0-10 10 10.011 10.011 0 0 0 10-10Zm-10.707 4.707a1 1 0 0 1 0-1.414L13.586 13H8a1 1 0 0 1 0-2h5.586l-2.293-2.293a1 1 0 0 1 1.414-1.414l4 4a1.004 1.004 0 0 1 0 1.414l-4 4a1 1 0 0 1-1.414 0Z"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </section>
        <section id="campaign" ref={campaignRef}>
          <div style={{ zIndex: 1, position: "relative" }}>
            <div
              id="cool-wrapper"
              style={{
                background: "#F64668",
                width: "20%",
                position: "absolute",
                left: "0",
                borderTopLeftRadius: "15px",

                height: "100%",
                zIndex: -1,
              }}
            />
            <h2 className="pt-24   mb-1 text-2xl font-semibold text-white-100 tracking-tighter text-center  lg:text-7xl md:text-6xl">
              Services we offer
            </h2>
            <br></br>
            <div className="mx-auto  text-center  leading-relaxed fs521 pb-24 relative">
              <ModalCarousal images={services} size={"100px"} />
              {/* <div
                style={{
                  position: "absolute",
                  left: "0",
                  top: "40%",
                  width: "5%",
                  height: "5%",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  id="left-arrow"
                >
                  <path
                    fill="#6563ff"
                    d="m11.293 7.293-4 4a1.004 1.004 0 0 0 0 1.414l4 4a1 1 0 0 0 1.414-1.414L10.414 13H16a1 1 0 0 0 0-2h-5.586l2.293-2.293a1 1 0 0 0-1.414-1.414Z"
                  ></path>
                  <path
                    fill="#b2b1ff"
                    d="M2 12A10 10 0 1 0 12 2 10.011 10.011 0 0 0 2 12Zm10.707-4.707a1 1 0 0 1 0 1.414L10.414 11H16a1 1 0 0 1 0 2h-5.586l2.293 2.293a1 1 0 0 1-1.414 1.414l-4-4a1.004 1.004 0 0 1 0-1.414l4-4a1 1 0 0 1 1.414 0Z"
                  ></path>
                </svg>
              </div>
              <div
                style={{
                  position: "absolute",
                  right: "0",
                  top: "40%",
                  width: "5%",
                  height: "5%",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  id="right-arrow"
                >
                  <path
                    fill="#6563ff"
                    d="m12.707 16.707 4-4a1.004 1.004 0 0 0 0-1.414l-4-4a1 1 0 0 0-1.414 1.414L13.586 11H8a1 1 0 0 0 0 2h5.586l-2.293 2.293a1 1 0 0 0 1.414 1.414Z"
                  ></path>
                  <path
                    fill="#b2b1ff"
                    d="M22 12a10 10 0 1 0-10 10 10.011 10.011 0 0 0 10-10Zm-10.707 4.707a1 1 0 0 1 0-1.414L13.586 13H8a1 1 0 0 1 0-2h5.586l-2.293-2.293a1 1 0 0 1 1.414-1.414l4 4a1.004 1.004 0 0 1 0 1.414l-4 4a1 1 0 0 1-1.414 0Z"
                  ></path>
                </svg>
              </div> */}
            </div>
          </div>
        </section>
        <section id="campaign" ref={campaignRef}>
          <div style={{ zIndex: 1, position: "relative" }}>
            <div
              id="cool-wrapper"
              style={{
                background: "#FE9677",
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
            <div className="mx-auto  text-center  leading-relaxed fs521 pb-24 relative">
              <BrandCarousal images={brands2} />
              <div className="pt-8">
                <BrandCarousal images={brands1} />
              </div>

              {/* <div
                style={{
                  position: "absolute",
                  left: "0",
                  top: "40%",
                  width: "5%",
                  height: "5%",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  id="left-arrow"
                >
                  <path
                    fill="#6563ff"
                    d="m11.293 7.293-4 4a1.004 1.004 0 0 0 0 1.414l4 4a1 1 0 0 0 1.414-1.414L10.414 13H16a1 1 0 0 0 0-2h-5.586l2.293-2.293a1 1 0 0 0-1.414-1.414Z"
                  ></path>
                  <path
                    fill="#b2b1ff"
                    d="M2 12A10 10 0 1 0 12 2 10.011 10.011 0 0 0 2 12Zm10.707-4.707a1 1 0 0 1 0 1.414L10.414 11H16a1 1 0 0 1 0 2h-5.586l2.293 2.293a1 1 0 0 1-1.414 1.414l-4-4a1.004 1.004 0 0 1 0-1.414l4-4a1 1 0 0 1 1.414 0Z"
                  ></path>
                </svg>
              </div>
              <div
                style={{
                  position: "absolute",
                  right: "0",
                  top: "40%",
                  width: "5%",
                  height: "5%",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  id="right-arrow"
                >
                  <path
                    fill="#6563ff"
                    d="m12.707 16.707 4-4a1.004 1.004 0 0 0 0-1.414l-4-4a1 1 0 0 0-1.414 1.414L13.586 11H8a1 1 0 0 0 0 2h5.586l-2.293 2.293a1 1 0 0 0 1.414 1.414Z"
                  ></path>
                  <path
                    fill="#b2b1ff"
                    d="M22 12a10 10 0 1 0-10 10 10.011 10.011 0 0 0 10-10Zm-10.707 4.707a1 1 0 0 1 0-1.414L13.586 13H8a1 1 0 0 1 0-2h5.586l-2.293-2.293a1 1 0 0 1 1.414-1.414l4 4a1.004 1.004 0 0 1 0 1.414l-4 4a1 1 0 0 1-1.414 0Z"
                  ></path>
                </svg>
              </div> */}
            </div>
            {/* <div className="flex justify-center mb-14 mx-2">
            <img
              loading="lazy"
              src={Brands.src}
              alt="brands"
              style={{ borderRadius: "10px" }}
            ></img>
          </div> */}
            {/* <p className="mx-auto text-xl text-center text-white-100 font-normal leading-relaxed fs521 lg:w-2/3">
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
              <h3 class="pt-3 font-semibold text-lg ">
                Lorem ipsum dolor sit amet
              </h3>
              <p class="pt-2 value-text text-md  fkrr1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas tincidunt a libero in finibus. Maecenas a nisl vitae
                ante rutrum porttitor.
              </p>
            </div>
          </div> */}
          </div>
        </section>
        <section id="story" ref={storyRef}>
          <div style={{ zIndex: 1, position: "relative" }}>
            <div
              id="cool-wrapper"
              style={{
                background: "#41436A",
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
            <p className="mx-auto text-sm text-center text-white-100 font-normal leading-relaxed fs521 lg:w-2/3">
              We started off with a humble YouTube channel which ushered in a
              new generation of disruptive thinking: Paracetamol Paniyaram. We
              ventured further in our dreams of quality content production by
              producing multiple web-series. We offer our technical and creative
              knowledge to clients for their outreach purposes.
            </p>
            <div className="pt-2 pb-12 max-w-2xl gap-2.5 mx-auto flex flex-col md:px-1 px-3 md:flex-row">
              <div class="ktq4">
                <h3 class="pt-3 font-semibold text-lg ">Our Mission</h3>
                <p class="pt-2 value-text text-md  fkrr1">
                  To empower creators by augmenting their brand building
                  process.
                </p>
              </div>
              <div class="ktq4">
                <h3 class="pt-3 font-semibold text-lg ">Our Vision</h3>
                <p class="pt-2 value-text text-md  fkrr1">
                  To create exciting content on a consistent basis.
                </p>
              </div>
              <div class="ktq4">
                <h3 class="pt-3 font-semibold text-lg ">Our Vision</h3>
                <p class="pt-2 value-text text-md  fkrr1">
                  To create exciting content on a consistent basis.
                </p>
              </div>
            </div>
            {/* <div class="ktq4 max-w-xl mb-4  mx-3 px-1 px-3 text-center md:mx-auto">
              <h3 class="pt-3 font-semibold text-lg ">Our Values</h3>
              <ul class="pt-2 value-text text-md  fkrr1">
                <li>Move with urgency and focus </li>
                <li> Learning trumps all </li>
                <li> Trust and Integrity</li>
                <li> Digital optimization </li>
                <li>Optimism</li>
              </ul>
            </div> */}
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
                background: "#F64668",
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
                <div className="pt-12 text-white-200">
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
                <div className="pt-20 mx-auto ">
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
      <ModalView isOpen={isOpen} setIsOpen={setIsOpen} content={""} />
    </>
  );
}
