import React from "react";
import axios from "axios";
export default function ContactForm() {
  const [inputData, setInputData] = React.useState({
    name: "",
    email: "",
    message: "",
    number: "",
    handle: "",
  });

  const handleChange = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(inputData);
    // const response = await axios.post(`/api/contact`, inputData);
    const response = await fetch(`/api/contact`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(inputData)
  });
    // console.log(response);
    // alert("Contact successfully sent!!");
  };

  return (
    <form
      class="w-full px-20 py-4"
      style={{ background: "#0c0c0c", borderRadius: "10px" }}
      onSubmit={handleSubmit}
    >
      <div class="flex flex-wrap -mx-3 mb-1 justify-center">
        <div class="w-full md:w-1/2 px-3 md:mb-0">
          <label
            class="block uppercase tracking-wide text-white-100 text-xs font-bold mb-2"
            for="grid-first-name"
          >
            Full Name*
          </label>
          <input
            class="appearance-none block w-full  bg-white-100    border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            type="text"
            placeholder="Jane"
            id="name"
            name="name"
            onChange={handleChange}
            required
            style={{ color: "#c85241" }}
          />
          {/* <p class="text-red-500 text-xs italic">Please fill out this field.</p> */}
        </div>
        <div class="w-full md:w-1/2 px-3">
          <label
            class="block uppercase tracking-wide text-white-100  text-xs font-bold mb-2"
            for="grid-last-name"
          >
            Email
          </label>
          <input
            class=" appearance-none block w-full bg-white-100   border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            type="text"
            placeholder="john@gmail.com"
            onChange={handleChange}
            id="email"
            name="email"
            required
            style={{ color: "#c85241" }}
          />
        </div>
      </div>
      <div class="flex flex-wrap -mx-3 mb-1 justify-center">
        <div class="w-full md:w-1/2 px-3  md:mb-0">
          <label
            class="block uppercase tracking-wide text-white-100  text-xs font-bold mb-2"
            for="grid-first-name"
          >
            Phone number
          </label>
          <input
            class="appearance-none block w-full  bg-white-100    border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="number"
            name="number"
            type="text"
            placeholder="Jane"
            onChange={handleChange}
            required
            style={{ color: "#c85241" }}
          />
          {/* <p class="text-red-500 text-xs italic">Please fill out this field.</p> */}
        </div>
        <div class="w-full md:w-1/2 px-3">
          <label
            class="block uppercase tracking-wide text-white-100  text-xs font-bold mb-2"
            for="grid-last-name"
          >
            Social handle
          </label>
          <input
            class="appearance-none block w-full  bg-white-100   border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="handle"
            name="handle"
            type="text"
            placeholder="john@gmail.com"
            onChange={handleChange}
            style={{ color: "#c85241" }}
          />
        </div>
      </div>
      <div class="flex flex-wrap -mx-3 mb-1">
        <div class="w-full px-3">
          <label
            class="block uppercase tracking-wide text-white-100  text-xs font-bold mb-2"
            for="grid-password"
          >
            Write your request
          </label>
          <textarea
            class="appearance-none block w-full  bg-white-100    border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="message"
            name="message"
            type={"text"}
            style={{ color: "#c85241" }}
            onChange={handleChange}
          />
          {/* <p class="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p> */}
        </div>
      </div>
      <div class="w-full ">
        <button
          class="shadow hover:bg-red-600 bg-purple-500 focus:shadow-outline focus:outline-none text-white-100 font-bold py-2 px-4 rounded"
          type="submit"
          // style={{ background: "#41436A" }}
        >
          Submit
        </button>
      </div>
    </form>
  );
}
