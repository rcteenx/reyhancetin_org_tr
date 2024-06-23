"use client";

import { useState } from "react";
import Link from "next/link";

import IconComponent from "@/components/ui/icons/icons";
import { StaticPages } from "@/content/data";

export default function Contact() {
  const [menuIcon, setIcon] = useState(false);
  const handleSmallerScreensNavigation = () => {
    setIcon(!menuIcon);
  };
  return (
    <div>
      <div onClick={handleSmallerScreensNavigation} className="flex md:hidden">
        {menuIcon ? (
          <IconComponent name="menuClose" size={25} color="FF0000" />
        ) : (
          <IconComponent name="menu" size={25} color="CEFF00" />
        )}
      </div>
      {/*  */}
      <div
        className={
          menuIcon
            ? "md:hidden absolute top-24 right-0 bottom-0 left-0 flex justify-center items-center w-full h-screen bg-slate-800 text-white ease-in duration-300 z-50"
            : "md:hidden absolute top-12 right-0 left-[-100%] flex justify-center items-center w-full h-screen bg-slate-800 text-white text-center ease-in duration-300 z-50"
        }
      >
        {/* Smaller screen navbar */}
        <div className="w-full mx-4 sm:mx-8">
          <ul className="uppercase font-bold text-2xl  text-center">
            {StaticPages.map((p) => (
              <li
                key={p.id}
                className={`py-2 hover:text-[#CEFF00] cursor-pointer`}
              >
                <Link
                  onClick={handleSmallerScreensNavigation}
                  href={`/${p.link}`}
                >
                  {p.title.toLowerCase()}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex flex-col justify-center items-center mt-16">
            <Link href="/login" onClick={handleSmallerScreensNavigation}>
              <button className="bg-yellow-400 text-slate-800 rounded-full uppercase font-bold py-3 w-48 my-4">
                Login
              </button>
            </Link>
            <Link href="/login" onClick={handleSmallerScreensNavigation}>
              <button className="bg-yellow-400 text-slate-800 rounded-full uppercase font-bold py-3 w-48 my-4">
                Signup
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

{
  /* <a href="iletisim" className="flex">
        <IconComponent name="infocircle" size={16} color="#8c8c8c" />
      </a> */
}
