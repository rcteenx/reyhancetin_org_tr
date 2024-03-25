import Link from "next/link";

import { StaticPages } from "@/content/data";

export default function HeaderStaticNav() {
  const menu = StaticPages.filter((m) => m.id < 4);
  return (
    <div>
      <nav className="fixed py-2 my-1 md:my-4 px-6 border border-solid border-dark rounded-full font-extralight text-sm md:text-base bg-white bg-opacity-40  top-2 right-1/2 translate-x-1/2 bg-light/60 backdrop-blur-sm z-50">
        <ul className="flex justify-center items-center space-x-4">
          {menu.map((p) => (
            <li
              key={p.id}
              className={`border-b border-b-white hover:border-b-slate `}
            >
              {/* ${ id === p.id ? "text-primary" : "" } */}
              <Link href={`/${p.link}`}>{p.title.toLowerCase()}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
