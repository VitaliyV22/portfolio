import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLineFill } from "react-icons/bs";
import { Link } from "react-scroll";

export default function Navbar() {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="w-full h-[80px] flex items-center justify-between px-10 text-white text-xl">
      {/* menu */}

      <div className="hidden lg:flex items-center font-mono gap-5  w-auto h-auto">
        <Link to="home" smooth={true} duration={500}>
          <a className="z-200 text-4xl font-bold cursor-pointer transition duration-300 ease-in-out transform  hover:scale-100 ">
            VV
          </a>
        </Link>

        <Link
          to="work"
          smooth={true}
          duration={500}
          className="text-white z-200  transition duration-300 ease-in-out transform cursor-pointer   hover:scale-100 "
        >
          <a>Projects</a>
        </Link>
        <Link
          to="test1"
          smooth={true}
          duration={500}
          className="text-white z-200  transition duration-300 ease-in-out transform cursor-pointer  hover:scale-100 "
        >
          <a>Resume</a>
        </Link>
        <Link
          to="contact"
          smooth={true}
          duration={500}
          className="text-white z-200  transition duration-300 ease-in-out transform cursor-pointer    hover:scale-100 "
        >
          <a>Contact</a>
        </Link>
        <a
          className="hover:text-white   text-teal-300"
          href="https://github.com/VitaliyV22
        "
        >
          {" "}
          <FaGithub size={25} />{" "}
        </a>
        <a
          className="hover:text-white   text-teal-300"
          href="https://www.linkedin.com/in/vitaliy-vitanskyy/
        "
        >
          {" "}
          <FaLinkedin size={28} />{" "}
        </a>
      </div>

      <div>
        <ul className=" ">
          <li></li>
        </ul>
      </div>

      {/* mobile menu */}
      <div>
        <ul
          className={
            !nav
              ? "hidden"
              : "absolute text-white font-bold top-0 left-0 w-full bg-gradient-to-b from-blue-100 via-blue-500 to-blue-300 h-screen flex flex-col justify-center items-center z-10"
          }
        >
          <li className="py-6 text-4xl border-indigo-600">Projects</li>
          <li className="py-6 text-4xl">Resume</li>
          <li className="py-6 text-4xl">Contact</li>
        </ul>
      </div>

      {/* hamburger */}
      <div onClick={handleClick} className="md:hidden z-10 ">
        <div className="">{!nav ? <FaBars /> : <FaTimes />}</div>
      </div>
    </div>
  );
}
