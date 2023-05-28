import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
// import "./ModalView.css"; // import the CSS file for styling

export function ModalView({ isOpen, setIsOpen, content }) {
  const ref = React.useRef(null);
  // const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    ref.current = document.getElementById("another-root");
    setMounted(true);
  }, []);
  // Close the modal when the Escape key is pressed
  useEffect(() => {
    function handleEscape(event) {
      if (event.keyCode === 27 && isOpen) {
        toggleModal();
      }
    }
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen]);

  // Toggle the modal visibility
  function toggleModal() {
    setIsOpen(!isOpen);
  }
  return mounted && ref.current
    ? ReactDOM.createPortal(
        <>
          {isOpen && (
            <div
              id={"modals"}
              className="modal fixed w-full h-full top-0 left-0 flex items-center justify-center"
              style={{ zIndex: "999999" }}
            >
              <div
                className="modal-overlay absolute w-full h-full bg-gray-900 opacity-50 top-0"
                onClick={toggleModal}
              ></div>

              <div className="modal-container bg-white-200 max-h-max w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
                <div
                  className="modal-close absolute top-0 right-0 cursor-pointer flex flex-col items-center mt-4 mr-4 text-white text-sm "
                  onClick={toggleModal}
                  style={{ zIndex: "999999" }}
                >
                  <svg
                    className="fill-current text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                  >
                    <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
                  </svg>
                  <span className="text-sm">(Esc)</span>
                </div>

                <div className="modal-content py-4 text-left px-6 max-h-max">
                  <div className="flex justify-between items-center pb-3">
                    {/* <p className="text-2xl font-bold">Simple Modal!</p> */}
                    <div
                      className="modal-close cursor-pointer z-50"
                      onClick={toggleModal}
                    >
                      <svg
                        className="fill-current text-black"
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                      >
                        <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
                      </svg>
                    </div>
                  </div>
                  {content === "" ? (
                    <div class="max-w-2xl md:max-w-6xl mx-auto px-4 text-center  text-black ">
                      <div class="">
                        <h1 class="mb-5 text-4xl  md:text-6xl font-bold ">
                          Subscribe to our newsletter
                        </h1>
                        <h1 class="mb-9  text-xl md:text-2xl font-semibold ">
                          Enter your email address and get our newsletters
                          straight away.
                        </h1>
                        {/* <div class="mx-14"> */}
                        <input
                          type="email"
                          placeholder="jack@example.com"
                          name="email"
                          autocomplete="email"
                          class="relative border border-gray-600  ml-2 pl-3 py-3  rounded-md text-white-100 font-semibold hover:border-gray-700 bg-black w-48"
                        />{" "}
                        {/* </div> */}
                        <a
                          class="inline-flex items-center px-14 py-3 mt-2 ml-2 font-medium text-black transition duration-500 ease-in-out transform bg-transparent border rounded-lg bg-white"
                          href="/"
                        >
                          <span class="justify-center">Subscribe</span>
                        </a>
                      </div>
                    </div>
                  ) : (
                    <div class="max-w-6xl mx-auto px-4 sm:px-6 text-center  text-black ">
                      {content}
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </>,
        ref.current
      )
    : null;
}
