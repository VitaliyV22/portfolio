import React from "react";
import { Link } from "react-scroll";
import { FaArrowUp } from "react-icons/fa";

const Contact = () => {
  return (
    <div id="contact" className="h-[30rem] ">
      <div className="flex flex-col justify-center items-center ">
        <div>
          <h2 className="text-4xl font-bold mb-8 text-center">Contact</h2>
        </div>
        <div className="w-[20rem] py-6 text-center">
          <p>
            Feel free to reach out to my email with the button below or send me
            a message on Linkedin.
          </p>
        </div>
        <a
          href="mailto:vitanskyyv@gmail.com"
          className="z-200 font-bold text-teal-200 group border border-emerald-200 transition hover:-translate-y-1 hover:bg-emerald-600 px-8 py-2 my-2 text-xl "
        >
          Say hello
        </a>
      </div>
      <div className="mt-20 flex gap-2 w-auto h-auto items-center justify-center  ">
        <div>
          {" "}
          <Link className="cursor-pointer" to="navbar"
           smooth={true}
           duration={500}>
            <a>Go Top</a>
          </Link>
        </div>

        <div className="text-teal-200 animate-bounce w-6 h-6 ...">
          {" "}
          <FaArrowUp />
        </div>
      </div>
    </div>
  );
};

export default Contact;
