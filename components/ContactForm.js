import React from "react";

export default function ContactForm() {
  return (
    <form class="w-full px-20 ">
      <div class="flex flex-wrap -mx-3 mb-6 justify-center">
        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            class="block uppercase tracking-wide text-white-200 text-xs font-bold mb-2"
            for="grid-first-name"
          >
            Full Name
          </label>
          <input
            class="appearance-none block w-full bg-gray-200 text-white-200 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="grid-first-name"
            type="text"
            placeholder="Jane"
          />
          {/* <p class="text-red-500 text-xs italic">Please fill out this field.</p> */}
        </div>
        <div class="w-full md:w-1/2 px-3">
          <label
            class="block uppercase tracking-wide text-white-200 text-xs font-bold mb-2"
            for="grid-last-name"
          >
            Email
          </label>
          <input
            class="appearance-none block w-full bg-gray-200 text-white-200 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-last-name"
            type="text"
            placeholder="john@gmail.com"
          />
        </div>
      </div>
      <div class="flex flex-wrap -mx-3 mb-6 justify-center">
        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            class="block uppercase tracking-wide text-white-200 text-xs font-bold mb-2"
            for="grid-first-name"
          >
            Phone number
          </label>
          <input
            class="appearance-none block w-full bg-gray-200 text-white-200 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="grid-first-name"
            type="text"
            placeholder="Jane"
          />
          {/* <p class="text-red-500 text-xs italic">Please fill out this field.</p> */}
        </div>
        <div class="w-full md:w-1/2 px-3">
          <label
            class="block uppercase tracking-wide text-white-200 text-xs font-bold mb-2"
            for="grid-last-name"
          >
            Birthday
          </label>
          <input
            class="appearance-none block w-full bg-gray-200 text-white-200 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-last-name"
            type="text"
            placeholder="john@gmail.com"
          />
        </div>
      </div>
      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full px-3">
          <label
            class="block uppercase tracking-wide text-white-200 text-xs font-bold mb-2"
            for="grid-password"
          >
            Write your request
          </label>
          <input
            class="appearance-none block w-full bg-gray-200 text-white-200 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-password"
            type={"text"}
          />
          {/* <p class="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p> */}
        </div>
      </div>
      <div class="w-full ">
        <button
          class="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white-100 font-bold py-2 px-4 rounded"
          type="button"
        >
          Submit
        </button>
      </div>
    </form>
  );
}
