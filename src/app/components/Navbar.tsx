"use client";
import React, { useEffect, useState } from "react";
import { styles } from "../style";
import { navLinks } from "../constants";
import { logo, menu, close } from "../../../public/assets";
import Link from "next/link";
import Image from "next/image";
import { TbMenu4 } from "react-icons/tb";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggel, setToggle] = useState(false);
  return (
    <>
      <nav
        className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
      >
        <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
          <Link
            href="/"
            className="flex items-center gap-2"
            scroll={false}
            onClick={() => {
              setActive("");
              window.scrollTo(0, 0);
            }}
          >
            <Image
              src={"/img/logo.svg"}
              alt={"logo"}
              width={200}
              height={200}
              className="w-9 h-9 object-contain"
            />
            <p className="text-purple-300 text-[18px] font-bold cursor-pointer flex">
              Liliana &nbsp;
              <span className="sm:block hidden">| Web Development</span>
            </p>
          </Link>
          <ul className="list-none hidden sm:flex flex-row gap-10">
            {navLinks.map((link) => {
              return (
                <li
                  key={link.id}
                  className={`${
                    active === link.title ? "text-white" : "text-secondary"
                  } hover:text-white text-[18px] font-medium cursor-pointer`}
                  onClick={() => setActive(link.title)}
                >
                  <Link href={link.id}>{link.title}</Link>
                </li>
              );
            })}
          </ul>
          <div className="sm:hidden flex felx-1 justify-end items-center">
            {toggel ? (
              <IoMdClose
                size={30}
                className="cursor-pointer hover:text-purple-700"
                onClick={() => setToggle(!toggel)}
              />
            ) : (
              <TbMenu4
                size={30}
                className="cursor-pointer hover:text-purple-700"
                onClick={() => setToggle(!toggel)}
              />
            )}
            <div
              className={`${
                !toggel ? "hidden" : "flex"
              } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w[140px] z-10 rounded-xl`}
            >
              <ul className="list-none flex justify-end items-start flex-col gap-4">
                {navLinks.map((link) => {
                  return (
                    <li
                      key={link.id}
                      className={`${
                        active === link.title ? "text-white" : "text-secondary"
                      } font-poppins font-medium cursor-pointer text-[16px]`}
                      onClick={() => {
                        setToggle(!toggel);
                        setActive(link.title);
                      }}
                    >
                      <Link href={link.id}>{link.title}</Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
