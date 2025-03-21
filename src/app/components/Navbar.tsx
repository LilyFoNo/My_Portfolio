"use client";
import { useEffect, useState } from "react";
import { styles } from "../styles";
import { navLinks } from "../constants";
import Link from "next/link";
import Image from "next/image";
import { TbMenu4 } from "react-icons/tb";
import { IoMdClose } from "react-icons/io";

const Navbar = ({ sections }: { sections: string[] }) => {
  const [activeSection, setActiveSection] = useState("");
  const [toggle, setToggle] = useState(false);

  const handleSectionClick = (sectionId: string) => {
    setActiveSection(sectionId);
    const section = document.getElementById(sectionId);
    section?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          } else {
            if (activeSection === entry.target.id) {
              setActiveSection("");
            }
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    sections.forEach((sectionId) => {
      const section = document.getElementById(sectionId);
      if (section) {
        observer.observe(section);
      }
    });

    return () => observer.disconnect();
  }, [sections, activeSection]);

  return (
    <>
      <div className={`fixed w-full bg-primary z-20 top-0`}>
        <nav className={`${styles.paddingX} flex items-center py-2`}>
          <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
            <Link
              href="/"
              className="flex items-center gap-2"
              scroll={false}
              onClick={() => {
                setActiveSection("");
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
              <p
                className={`text-xl font-bold cursor-pointer flex font-preahvihear ${styles.textColor}`}
              >
                Liliana &nbsp;
                <span className="sm:block hidden font-preahvihear">
                  | Web Development
                </span>
              </p>
            </Link>
            <ul className="list-none hidden sm:flex flex-row gap-10">
              {navLinks.map((link, index) => {
                return (
                  <li
                    key={index}
                    className={`${
                      activeSection === link.id
                        ? `${styles.textColor}`
                        : "text-secondary"
                    } hover:text-white text-[18px] font-medium cursor-pointer hover:border-b hover:border-[#7e00ff] hover:rounded-[10px]`}
                    onClick={() => handleSectionClick(link.path)}
                  >
                    <Link href={link.path} className=" font-preahvihear px-1">
                      {link.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <div className="sm:hidden flex felx-1 justify-end items-center">
              {toggle ? (
                <IoMdClose
                  size={30}
                  className="cursor-pointer hover:text-purple-700"
                  onClick={() => setToggle(!toggle)}
                />
              ) : (
                <TbMenu4
                  size={30}
                  className="cursor-pointer hover:text-purple-700"
                  onClick={() => setToggle(!toggle)}
                />
              )}
              <div
                className={`${
                  !toggle ? "hidden" : "flex"
                } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w[140px] z-10 rounded-xl`}
              >
                <ul className="list-none flex justify-end items-start flex-col gap-4">
                  {navLinks.map((link, index) => {
                    return (
                      <li
                        key={index}
                        className={`${
                          activeSection === link.path
                            ? "text-white"
                            : "text-secondary"
                        } font-poppins font-medium cursor-pointer text-[16px]`}
                        onClick={() => {
                          setToggle(!toggle);
                          setActiveSection(link.path);
                        }}
                      >
                        <Link href={link.path}>{link.title}</Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </nav>
        <hr />
      </div>
    </>
  );
};

export default Navbar;
