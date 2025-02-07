import { assets } from "@/assets/assets/assets";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
  const [isScroll, setIsScroll] = useState(false);

  const sideMenuRef = useRef();

  const openMenu = () => {
    sideMenuRef.current.style.transform = "translateX(-16rem)";
  };
  const closeMenu = () => {
    sideMenuRef.current.style.transform = "translateX(16rem)";
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    });
  }, []);

  return (
    <>
      {/* SOCIAL CONNECTs */}
      <div className={`top-[40%] left-5 fixed hidden md:flex flex-col`}>
        <div className="border border-gray-400 rounded-lg p-2 m-2">In</div>
        <div className="border border-gray-400 rounded-lg p-2 m-2">GH</div>
        <div className="border border-gray-400 rounded-lg p-2 m-2">Dev</div>
      </div>

      {/* WHATSAPP for quick connect */}
      <a href="https://api.whatsapp.com/send?phone=917330707182&text=Hello%20there!">
        <div className="flex right-[15px] bottom-[15px] fixed border border-black-500 rounded-2xl justify-center items-center p-2 z-[51]">
          <Image
            src={assets.whatsapp}
            className="w-[25px] h-[25px]"
            alt="whatsapp"
          />
          <p>&nbsp; Quick</p>
        </div>
      </a>

      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden">
        <Image src={assets.header_bg_color} alt="bg-color" className="w-full" />
      </div>
      <nav
        className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${
          isScroll
            ? "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm dark:bg-darkTheme dark:shadow-white/20"
            : ""
        }`}
      >
        <a href="#top">
          {/* <Image
            src={assets.name_logo}
            alt=""
            className="w-[250px] cursor-pointer mr-14"
          /> */}
          <h1 className="text-2xl font-Ovo">Siddu Ganesh Musa</h1>
        </a>

        <ul
          className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${
            isScroll
              ? ""
              : "bg-white shadow-sm bg-opacity-50 dark:border dark:border-white/50 dark:bg-transparent"
          } `}
        >
          <li>
            <a href="#top" className="font-Ovo">
              Home
            </a>{" "}
            {/* #top means it scrolls to the top */}
          </li>
          <li>
            <a className="font-Ovo" href="#about">
              About Me
            </a>{" "}
            {/* #top means it scrolls to the top */}
          </li>
          <li>
            <a className="font-Ovo" href="#projects">
              Projects
            </a>{" "}
            {/* #top means it scrolls to the top */}
          </li>
          <li>
            <a className="font-Ovo" href="#work">
              Work
            </a>{" "}
            {/* #top means it scrolls to the top */}
          </li>
          {/* <li>
            <a className="font-Ovo" href="#contact">
              Certifications
            </a>{" "}
            {/* #top means it scrolls to the top 
          </li> */}
          <li>
            <a className="font-Ovo" href="#contact">
              Contact Me
            </a>{" "}
            {/* #top means it scrolls to the top */}
          </li>
        </ul>

        <div className="flex items-center gap-4">
          <button onClick={() => setIsDarkMode((prev) => !prev)}>
            <Image
              src={isDarkMode ? assets.sun_icon : assets.moon_icon}
              alt="moon"
              className="w-6"
            />
          </button>

          <a
            href="./sample-resume.pdf"
            download
            className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 hover:bg-lightHover hover:translate-y-1 hover:shadow-black dark:border-white/20 dark:hover:bg-black"
          >
            my resume
            <Image
              src={isDarkMode ? assets.arrow_icon_dark : assets.download_icon}
              alt=""
              className="w-3 font-Ovo"
            />
          </a>

          <button className="block md:hidden ml-3" onClick={openMenu}>
            <Image
              src={isDarkMode ? assets.menu_white : assets.menu_black}
              alt=""
              className="w-6"
            />
          </button>
        </div>

        {/* ---------------MOBILE MENU----------- */}
        <ul
          ref={sideMenuRef}
          className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500 dark:bg-darkHover dark:text-white"
        >
          <div className="absolute right-6 top-6" onClick={closeMenu}>
            <Image
              src={isDarkMode ? assets.close_white : assets.close_black}
              alt=" "
              className="w-5 cursor-pointer"
            />
          </div>

          <li>
            <a href="#top" onClick={closeMenu} className="font-Ovo">
              Home
            </a>{" "}
            {/* #top means it scrolls to the top */}
          </li>
          <li>
            <a className="font-Ovo" href="#about" onClick={closeMenu}>
              About Me
            </a>{" "}
            {/* #top means it scrolls to the top */}
          </li>
          <li>
            <a className="font-Ovo" href="#projects" onClick={closeMenu}>
              Projects
            </a>{" "}
            {/* #top means it scrolls to the top */}
          </li>
          <li>
            <a className="font-Ovo" href="#work" onClick={closeMenu}>
              My Work
            </a>{" "}
            {/* #top means it scrolls to the top */}
          </li>
          <li>
            <a className="font-Ovo" href="#contact" onClick={closeMenu}>
              Contact Me
            </a>{" "}
            {/* #top means it scrolls to the top */}
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
