import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen flex justify-center items-center p-4"
    >
      <form
        method="POST"
        action="https://getform.io/f/acf907e8-8587-4ed6-b97c-cd25daef2c05"
        className="flex flex-col max-w-[1000px]  w-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-orange-600 text-white">
            Contact
          </p>
          <p className="text-white text-1xl py-3">Email me</p>
          <h1 className=" underline font-bold text-2xl text-orange-slate ">
            vitanskyyv@gmail.com
          </h1>
          <h1 className="py-3 text-white">  or</h1>
          <p className="text-black underline font-bold ">Submit the form below </p>
        </div>
        <input
          className="bg-white p-2"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="my-4 p-2 bg-white"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="bg-white p-2"
          name="message"
          rows="10"
          placeholder="Message"
        ></textarea>
        <button className="text-black border-2 rounded-full font-bold hover:bg-indigo-600 hover:border-indigo-600 px-4 py-3 my-8 mx-auto flex items-center">
          Let's Collaborate
        </button>
      </form>
    </div>
  );
};

export default Contact;
