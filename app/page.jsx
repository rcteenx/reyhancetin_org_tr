import smd from "@/content/data/siteMetaData";
import PageTitle from "@/components/templates/pageTitle";
import Hero from "@/components/sections/home-hero";

import { meetings } from "@/content/data";
import Cards from "@/components/ui/cards";

export async function generateMetadata() {
  return {
    title: smd.title,
  };
}

export default function Home() {
  return (
    <>
      <Hero />

      <section className="bg-[#f7f7f7] px-4 py-16 md:py-24">
        <div className="container-p">
          <h2 className="text-2xl md:text-4xl font-bold text-center">
            İLERİ ÇALIŞMALAR
          </h2>
          <p className="my-4 text-center text-sm ">
            Daha önce grup çalışmalarımıza katılmış ve yol almış arkadaşlar
            için.
          </p>
          <Cards meetings={meetings} />
        </div>
      </section>
    </>
  );
}
