"use client";
import React, { useState, useEffect } from "react";
import { SiYourtraveldottv } from "react-icons/si";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed w-full mx-auto top-0 left-[50%] translate-x-[-50%] z-20 transition duration-300 ${
        scrolled
          ? "bg-white text-gray-900 shadow-md"
          : "bg-transparent text-black"
      }`}
    >
      <div className="h-[85px] max-w-[1300px] mx-auto flex items-center justify-between px-2">
        
        <div className="right">
          <ul className="flex items-center gap-7">
            <li className="font-semibold cursor-pointer"> New Plans</li>
            <li className="font-semibold cursor-pointer">About Us</li>
            <li>
              <button className="bg-[#ff473f] p-2 px-6 rounded-3xl font-semibold cursor-pointer">
                view set time
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
