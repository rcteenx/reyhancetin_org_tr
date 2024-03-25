import Link from "next/link";

export default function SubPages({ subPage, id }) {
  return (
    <section className="px-4 py-12 md:py-24">
      <div className="container-p">
        {/* <h2 className="text-2xl md:text-4xl font-bold text-center">
          TOPLULUK BAĞLANTILARI
        </h2> */}
        <div className="mt-12">
          <ul className="flex flex-wrap justify-center  gap-4">
            {subPage.pages.map((pg) => (
              <li key={pg.id}>
                <Link
                  className={` w-64 border px-12 py-8 text-center  transition ease-in  block  
                ${id == pg.id ? "bg-gray-100" : "hover:bg-gray-100"} `}
                  href={subPage.link + pg.link}
                >
                  {pg.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
