export default function Main() {
  return (
    <section class="text-gray-600 body-font ">
      <div class="relative max-w-5xl pt-8 pb-4 mx-auto">
        <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden ">
          <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />

          <h1 className="z-10 text-5xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-poppins font-bold md:text-9xl whitespace-nowrap bg-clip-text ">
            <span className="text-red-600 ">T</span>HE{" "}
            <span className="text-red-600 ">I</span>NT{" "}
            <span className="text-red-600 ">G</span>EN
          </h1>
          <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
          <div className="my-16 text-center animate-fade-in z-10">
            <h2 className="text-sm text-zinc-500 mx-10 ">
              We started off with a humble YouTube channel which ushered in a
              new generation of disruptive thinking: Paracetamol Paniyaram. We
              ventured further in our dreams of quality content production by
              producing multiple web-series. We offer our technical and creative
              knowledge to clients for their outreach purposes.
            </h2>
          </div>
        </div>
        <div className="absolute mx-auto top-0 h-screen  w-screen animate-fade-in">
          <video autoPlay loop preload="auto" 
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          >
            <source src="https://video.wixstatic.com/video/06a7ff_0b63936f02f04baf99c2803ce89823b8/1080p/mp4/file.mp4" />
          </video>
        </div>
      </div>

      <h2 className="pt-40 mb-1 text-2xl font-semibold tracking-tighter text-center text-gray-200 lg:text-7xl md:text-6xl">
        Clean and tidy code.
      </h2>
      <br></br>
      <p className="mx-auto text-xl text-center text-gray-300 font-normal leading-relaxed fs521 lg:w-2/3">
        Here is our collection of free to use templates made with Next.js &
        styled with Tailwind CSS.
      </p>
      <div className="pt-12 pb-24 max-w-4xl mx-auto fsac4 md:px-1 px-3">
        <div class="ktq4">
          <img className="w-10" src="https://nine4.app/favicon.png"></img>
          <h3 class="pt-3 font-semibold text-lg text-white">
            Lorem ipsum dolor sit amet
          </h3>
          <p class="pt-2 value-text text-md text-gray-200 fkrr1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            tincidunt a libero in finibus. Maecenas a nisl vitae ante rutrum
            porttitor.
          </p>
        </div>
        <div class="ktq4">
          <img className="w-10" src="https://nine4.app/favicon.png"></img>
          <h3 class="pt-3 font-semibold text-lg text-white">
            Lorem ipsum dolor sit amet
          </h3>
          <p class="pt-2 value-text text-md text-gray-200 fkrr1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            tincidunt a libero in finibus. Maecenas a nisl vitae ante rutrum
            porttitor.
          </p>
        </div>
        <div class="ktq4">
          <img className="w-10" src="https://nine4.app/favicon.png"></img>
          <h3 class="pt-3 font-semibold text-lg text-white">
            Lorem ipsum dolor sit amet
          </h3>
          <p class="pt-2 value-text text-md text-gray-200 fkrr1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            tincidunt a libero in finibus. Maecenas a nisl vitae ante rutrum
            porttitor.
          </p>
        </div>
        <div class="ktq4">
          {/* <img className="w-10" src="https://nine4.app/favicon.png"></img> */}
          <h3 class="pt-3 font-semibold text-lg text-white">
            Lorem ipsum dolor sit amet
          </h3>
          <p class="pt-2 value-text text-md text-gray-200 fkrr1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            tincidunt a libero in finibus. Maecenas a nisl vitae ante rutrum
            porttitor.
          </p>
        </div>
      </div>
      <div className="pt-32 pb-32 max-w-6xl mx-auto fsac4 md:px-1 px-3">
        <div class="ktq4">
          {/* <img src="https://nine4.app/images/nine4-3.png"></img> */}
          <h3 class="pt-3 font-semibold text-lg text-white">
            Lorem ipsum dolor sit amet
          </h3>
          <p class="pt-2 value-text text-md text-gray-200 fkrr1">
            Fusce pharetra ligula mauris, quis faucibus lectus elementum vel.
            Nullam vehicula, libero at euismod tristique, neque ligula faucibus
            urna, quis ultricies massa enim in nunc. Vivamus ultricies, quam ut
            rutrum blandit, turpis massa ornare velit, in sodales tellus ex nec
            odio.
          </p>
        </div>
        <div class="ktq4">
          <img src="https://nine4.app/images/nine4-3.png"></img>
          <h3 class="pt-3 font-semibold text-lg text-white">
            Lorem ipsum dolor sit amet
          </h3>
          <p class="pt-2 value-text text-md text-gray-200 fkrr1">
            Fusce pharetra ligula mauris, quis faucibus lectus elementum vel.
            Nullam vehicula, libero at euismod tristique, neque ligula faucibus
            urna, quis ultricies massa enim in nunc. Vivamus ultricies, quam ut
            rutrum blandit, turpis massa ornare velit, in sodales tellus ex nec
            odio.
          </p>
        </div>
      </div>
      <section class="relative pb-24">
        <div class="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <div class="py-24 md:py-36">
            <h1 class="mb-5 text-6xl font-bold text-white">
              Subscribe to our newsletter
            </h1>
            <h1 class="mb-9 text-2xl font-semibold text-gray-200">
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
      </section>
    </section>
  );
}
