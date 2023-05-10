import React from "react";

export default function Header({
  videoRef,
  eventRef,
  campaignRef,
  contactRef,
  storyRef,
}) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  // const [flyer, setFlyer] = React.useState(false);
  // const [flyerTwo, setFlyerTwo] = React.useState(false);

  return (
    <header class="fixed top-0 w-full clearNav z-50 bg-white  animate-fade-in  w-screen border-bot">
      <div class="max-w-2xl md:max-w-5xl mx-auto flex flex-wrap p-1 md:p-2  md:flex-row">
        <div className="flex flex-row items-center justify-between md:p-3 md:p-1 w-screen">
          <a href="/">
            <img
              src="/favicon.jpg"
              class=" md:animate-bounce w-8"
              loading="lazy"
            />
          </a>

          <button
            className="text-white pb-4 cursor-pointer leading-none px-3 py-2 md:hidden outline-none focus:outline-none content-end justify-end relative"
            type="button"
            aria-label="button"
            style={{ zIndex: "100" }}
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0,0,255.99904,255.99904"
              width="36px"
              height="36px"
              fill-rule="nonzero"
            >
              <g
                fill="none"
                fill-rule="nonzero"
                stroke="none"
                stroke-width="none"
                stroke-linecap="none"
                stroke-linejoin="none"
                stroke-miterlimit="10"
                stroke-dasharray=""
                stroke-dashoffset="0"
                font-family="none"
                font-weight="none"
                font-size="none"
                text-anchor="none"
                // style="mix-blend-mode: normal"
              >
                <g transform="scale(5.33333,5.33333)">
                  <path
                    d="M43,11h-29c-1.1,0 -2,0.9 -2,2v3c0,1.1 0.9,2 2,2h29c1.1,0 2,-0.9 2,-2v-3c0,-1.1 -0.9,-2 -2,-2z"
                    fill="#b3bce9"
                    stroke="none"
                    stroke-width="1"
                    stroke-linecap="butt"
                    stroke-linejoin="miter"
                  />
                  <path
                    d="M43,24h-29c-1.1,0 -2,0.9 -2,2v3c0,1.1 0.9,2 2,2h29c1.1,0 2,-0.9 2,-2v-3c0,-1.1 -0.9,-2 -2,-2z"
                    fill="#b3bce9"
                    stroke="none"
                    stroke-width="1"
                    stroke-linecap="butt"
                    stroke-linejoin="miter"
                  />
                  <path
                    d="M43,37h-29c-1.1,0 -2,0.9 -2,2v3c0,1.1 0.9,2 2,2h29c1.1,0 2,-0.9 2,-2v-3c0,-1.1 -0.9,-2 -2,-2z"
                    fill="#b3bce9"
                    stroke="none"
                    stroke-width="1"
                    stroke-linecap="butt"
                    stroke-linejoin="miter"
                  />
                  <path
                    d="M36.1,7.5h2.4c1.1,0 2,0.9 2,2v3c0,1.1 -0.9,2 -2,2h-20.5"
                    fill="none"
                    stroke="#18193f"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M13,14.5h-3.5c-1.1,0 -2,-0.9 -2,-2v-3c0,-1.1 0.9,-2 2,-2h21.3"
                    fill="none"
                    stroke="#18193f"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M13.3,27.5h-3.8c-1.1,0 -2,-0.9 -2,-2v-3c0,-1.1 0.9,-2 2,-2h20"
                    fill="none"
                    stroke="#18193f"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M35,20.5h3.5c1.1,0 2,0.9 2,2v3c0,1.1 -0.9,2 -2,2h-20"
                    fill="none"
                    stroke="#18193f"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M13.5,40.5h-4c-1.1,0 -2,-0.9 -2,-2v-3c0,-1.1 0.9,-2 2,-2h19.6"
                    fill="none"
                    stroke="#18193f"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M34.2,33.5h4.3c1.1,0 2,0.9 2,2v3c0,1.1 -0.9,2 -2,2h-20"
                    fill="none"
                    stroke="#18193f"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
              </g>
            </svg>
          </button>
        </div>
        <div
          className={
            "md:flex flex-grow items-center justify-center mr-24" +
            (navbarOpen ? " flex" : " hidden")
          }
          style={{ transition: "500ms ease" }}
        >
          <div class="bg-indigo-900 pl-3 md:pl-1 md:bg-transparent right-0 md:right-auto rounded-bl-md md:rounded-none top-0 font-4 pt-12 pb-4 px-2 md:pt-1  flex  flex-col md:flex-row text-left md:items-center md:text-base text-1xl md:justify-center justify-items-start absolute md:top-5 h-screen md:h-auto">
            <ul
              onClick={() => {
                videoRef.current.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
                setTimeout(() => setNavbarOpen(!navbarOpen), [1000]);
              }}
              class="mr-4 pr-2 cursor-pointer text-gray-300 hover:text-white font-semibold tr04 mb-4 md:mb-12"
            >
              In The Press
            </ul>
            <div className="relative">
              <button
                type="button"
                className="
                   group rounded-md text-gray-300 inline-flex items-center text-base font-medium focus:outline-none md:pb-8 mb-4 md:mb-12'
                  "
                // onMouseEnter={() => (setFlyer(!flyer), setFlyerTwo(false))}
              >
                <span
                  className="tr04"
                  onClick={() => {
                    eventRef.current.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                    setTimeout(() => setNavbarOpen(!navbarOpen), [1000]);
                  }}
                >
                  Experience Curated
                </span>
                {/* <svg
                  className={
                    flyer === true
                      ? "transform rotate-180 ml-3 h-5 w-5 transition ease-out duration-200"
                      : "ml-2 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                  }
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg> */}
              </button>
              {/* <div
                onMouseLeave={() => setFlyer(false)}
                className={
                  flyer
                    ? "opacity-100 translate-y-0 transition ease-out duration-200 absolute z-10 -ml-4 mt-3 g327 border transform px-2 w-screen max-w-sm sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
                    : "hidden opacity-0 translate-y-1 absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
                }
              >
                <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                  <div className="relative grid gap-6 bg-black px-2 py-6 sm:gap-8 ">
                    <a
                      href="/"
                      className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-800 tr04"
                    >
                      <div className="ml-4">
                        <p className="text-base font-medium text-white">
                          NINE4 TEMPLATE #1
                        </p>
                        <p className="mt-1 text-sm text-gray-500">
                          First Template
                        </p>
                      </div>
                    </a>
                    <a
                      href="/"
                      className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-800 tr04"
                    >
                      <div className="ml-4">
                        <p className="text-base font-medium text-white">
                          NINE4 TEMPLATE #2
                        </p>
                        <p className="mt-1 text-sm text-gray-500">
                          Second Template
                        </p>
                      </div>
                    </a>
                    <a
                      href="/"
                      className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-800 tr04"
                    >
                      <div className="ml-4">
                        <p className="text-base font-medium text-white">
                          NINE4 TEMPLATE #3
                        </p>
                        <p className="mt-1 text-sm text-gray-500">
                          Third Template
                        </p>
                      </div>
                    </a>
                  </div>
                </div>
              </div> */}
            </div>
            <ul
              onClick={() => {
                campaignRef.current.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
                setTimeout(() => setNavbarOpen(!navbarOpen), [1000]);
              }}
              class="mr-4 md:ml-4 ml-0 cursor-pointer text-gray-300 hover:text-white font-semibold tr04 mb-4 md:mb-12"
            >
              Worked Brands
            </ul>
            <ul
              onClick={() => {
                storyRef.current.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
                setTimeout(() => setNavbarOpen(!navbarOpen), [1000]);
              }}
              class="mr-4 md:ml-4 ml-0 cursor-pointer text-gray-300 hover:text-white font-semibold tr04 mb-4 md:mb-12"
            >
              Brand Story
            </ul>
            <ul
              onClick={() => {
                contactRef.current.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
                setTimeout(() => setNavbarOpen(!navbarOpen), [1000]);
              }}
              class="mr-4 cursor-pointer text-gray-300 hover:text-white font-semibold tr04 mb-4 md:mb-12"
            >
              Contact
            </ul>
          </div>
          <div class="absolute right-4 flex flex-row top-4">
            <a
              href="https://www.instagram.com/theintgen/?hl=en"
              rel="noopener noreferrer"
              target="_blank"
              className="invisible md:visible"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
                width="46px"
                height="46px"
              >
                <radialGradient
                  id="yOrnnhliCrdS2gy~4tD8ma"
                  cx="19.38"
                  cy="42.035"
                  r="44.899"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stop-color="#fd5" />
                  <stop offset=".328" stop-color="#ff543f" />
                  <stop offset=".348" stop-color="#fc5245" />
                  <stop offset=".504" stop-color="#e64771" />
                  <stop offset=".643" stop-color="#d53e91" />
                  <stop offset=".761" stop-color="#cc39a4" />
                  <stop offset=".841" stop-color="#c837ab" />
                </radialGradient>
                <path
                  fill="url(#yOrnnhliCrdS2gy~4tD8ma)"
                  d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20 c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20 C42.014,38.383,38.417,41.986,34.017,41.99z"
                />
                <radialGradient
                  id="yOrnnhliCrdS2gy~4tD8mb"
                  cx="11.786"
                  cy="5.54"
                  r="29.813"
                  gradientTransform="matrix(1 0 0 .6663 0 1.849)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stop-color="#4168c9" />
                  <stop offset=".999" stop-color="#4168c9" stop-opacity="0" />
                </radialGradient>
                <path
                  fill="url(#yOrnnhliCrdS2gy~4tD8mb)"
                  d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20 c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20 C42.014,38.383,38.417,41.986,34.017,41.99z"
                />
                <path
                  fill="#fff"
                  d="M24,31c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S27.859,31,24,31z M24,19c-2.757,0-5,2.243-5,5 s2.243,5,5,5s5-2.243,5-5S26.757,19,24,19z"
                />
                <circle cx="31.5" cy="16.5" r="1.5" fill="#fff" />
                <path
                  fill="#fff"
                  d="M30,37H18c-3.859,0-7-3.14-7-7V18c0-3.86,3.141-7,7-7h12c3.859,0,7,3.14,7,7v12 C37,33.86,33.859,37,30,37z M18,13c-2.757,0-5,2.243-5,5v12c0,2.757,2.243,5,5,5h12c2.757,0,5-2.243,5-5V18c0-2.757-2.243-5-5-5H18z"
                />
              </svg>
            </a>
            <a
              data-v-54e46119=""
              href="https://www.youtube.com/channel/UCVk9sWJLFs3xTEBRtLTVXkQ/videos?view=0"
              rel="noopener noreferrer"
              target="_blank"
              className="pl-4 invisible md:visible animation-wiggle mb-2
            "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
                width="48px"
                height="48px"
              >
                <path
                  fill="#FF3D00"
                  d="M43.2,33.9c-0.4,2.1-2.1,3.7-4.2,4c-3.3,0.5-8.8,1.1-15,1.1c-6.1,0-11.6-0.6-15-1.1c-2.1-0.3-3.8-1.9-4.2-4C4.4,31.6,4,28.2,4,24c0-4.2,0.4-7.6,0.8-9.9c0.4-2.1,2.1-3.7,4.2-4C12.3,9.6,17.8,9,24,9c6.2,0,11.6,0.6,15,1.1c2.1,0.3,3.8,1.9,4.2,4c0.4,2.3,0.9,5.7,0.9,9.9C44,28.2,43.6,31.6,43.2,33.9z"
                />
                <path fill="#FFF" d="M20 31L20 17 32 24z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
