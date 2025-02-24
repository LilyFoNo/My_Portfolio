"use client";
import { useEffect, useState } from "react";
import { styles } from "../styles";
import { navLinks } from "../constants";
import Link from "next/link";
import Image from "next/image";
import { TbMenu4 } from "react-icons/tb";
import { IoMdClose } from "react-icons/io";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggel, setToggle] = useState(false);
  const [hasScroll, setHasScroll] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setHasScroll(false);
      } else {
        setHasScroll(true);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <div
        className={`fixed w-full ${
          hasScroll ? "bg-primary" : "bg-transparent"
        } z-20 top-0 `}
      >
        <nav className={`${styles.paddingX} flex items-center py-2`}>
          <div className="w-full flex justify-between items-center max-w-7xl mx-auto  ">
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
                src={"/img/logo.png"}
                alt={"logo"}
                width={200}
                height={200}
                className="w-12 h-12 object-contain"
              />
              <p className="text-transparent bg-clip-text bg-gradient-to-r from-[#94ccb4] via-[#d05de2] to-[#f0aa63] text-xl font-bold cursor-pointer flex font-preahvihear">
                Liliana &nbsp;
                <span className="sm:block hidden font-preahvihear">
                  | Web Development
                </span>
              </p>
            </Link>
            <ul className="list-none hidden sm:flex flex-row gap-10">
              {navLinks.map((link) => {
                return (
                  <li
                    key={link.id}
                    className={`${
                      active === link.title
                        ? "text-transparent bg-clip-text bg-gradient-to-r from-[#94ccb4] via-[#d05de2] to-[#f0aa63]"
                        : "text-secondary"
                    } hover:text-white text-[18px] font-medium cursor-pointer hover:border-b hover:border-[#7e00ff] hover:rounded-[10px]`}
                    onClick={() => setActive(link.title)}
                  >
                    <Link href={link.id} className=" font-preahvihear px-1">
                      {link.title}
                    </Link>
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
                          active === link.title
                            ? "text-white"
                            : "text-secondary"
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
        <hr className={`hidden ${hasScroll ? "block md:block " : "hidden"}`} />
      </div>
    </>
  );
};

export default Navbar;
