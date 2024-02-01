import React, { useState } from "react";

import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLineFill } from "react-icons/bs";
import { Link } from "react-scroll";

export default function Navbar() {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div
      id="navbar"
      className="fixed w-full h-[80px] flex items-center px-4 text-black bg-white text-xl"
    >
      <div className="pr-4 font-bold">
      <Link to="skills" smooth={true} duration={500}>
            Vitaliy Vitanskyy
          </Link>
      </div>
      {/* menu */}

      <ul className="hidden md:flex">
        <li className="hover:text-indigo-700">
          <Link to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="hover:text-indigo-700">
          <Link to="work" smooth={true} duration={500}>
            Projects
          </Link>
        </li>
        <li className="hover:text-indigo-700">
          <Link to="test1" smooth={true} duration={500}>
            Resume
          </Link>
        </li>
        <li className="hover:text-indigo-700">
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

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
         <div className="">
            {!nav ? <FaBars /> : <FaTimes />}
         </div>
      </div>
      
    </div>
  );
}
