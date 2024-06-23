"use client";

import { useState } from "react";
import Link from "next/link";

import IconComponent from "@/components/ui/icons/icons";
import { StaticPages } from "@/content/data";
import { footerReyhan } from "@/public/assets/images";

export default function MobileMenu() {
  const [menuIcon, setIcon] = useState(false);
  const handleSmallerScreensNavigation = () => {
    setIcon(!menuIcon);
  };
  return (
    <div>
      <div onClick={handleSmallerScreensNavigation} className="">
        {menuIcon ? (
          <IconComponent name="menuClose" size={25} color="FF0000" />
        ) : (
          <IconComponent name="menu" size={25} color="333366" />
        )}
      </div>
      {/*  */}
      <div
        className={`absolute right-0 bottom-0 flex justify-center items-start w-full gradientIndigo border-t-4 ease-in duration-300 z-50  ${
          menuIcon ? "top-24 left-0" : "top-12 left-[-100%]"
        }`}
      >
        {/* Smaller screen navbar */}
        <div className="w-full py-24">
          <ul className=" text-2xl text-center">
            {StaticPages.map((p) => (
              <li
                key={p.id}
                className={`py-2 hover:text-accent cursor-pointer`}
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
          <div className="flex flex-col justify-center items-center mt-8">
            <a href="/">
              <img
                src={footerReyhan.src}
                alt="reyhan çetin"
                title="reyhan çetin"
                className="m-0 p-2 h-28 w-28 border-2 border-indigo-light-1 rounded-full"
              />
            </a>
            <h3 className="font-thin">Hoşgeldiniz</h3>
            <p>Lütfen ...</p>
            {/* <Link href="/login" onClick={handleSmallerScreensNavigation}>
              <button className="bg-yellow-400 text-slate-800 rounded-full uppercase font-bold py-3 w-48 my-4">
                Login
              </button>
            </Link> */}
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
