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

      <div className="bg-slate py-16 text-white">
        <div className=" container mx-auto">
          <h2 className="text-2xl md:text-4xl text-center">
            Herkes için Bilinç ve Farkındalık Çalışmaları
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-0 lg:divide-x divide-slate-600 [&>*]:pl-14 mt-10 text-center sm:text-left">
            <div>
              <div className="text-lg md:text-2xl text-gray-400 ">Çalışma</div>
              <div className="text-2xl md:text-[2.5rem] text-white font-extrabold mt-2">
                25 yıl +
              </div>
            </div>
            <div>
              <div className="text-lg md:text-2xl text-gray-400 ">
                Katılımcı
              </div>
              <div className="text-2xl md:text-[2.5rem] text-athensGray font-extrabold mt-2">
                10.000 +
              </div>
            </div>
            <div>
              <div className="text-lg md:text-2xl text-gray-400 ">Seminer</div>
              <div className="text-2xl md:text-[2.5rem] text-athensGray font-extrabold mt-2">
                1,000
              </div>
            </div>
            <div>
              <div className="text-lg md:text-2xl text-gray-400 ">
                Grup Çalışması
              </div>
              <div className="text-2xl md:text-[2.5rem] text-athensGray font-extrabold mt-2">
                100 +
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="bg-[#f7f7f7] px-4 py-16 md:py-24">
        <div className="container-p">
          <h2 className="text-2xl md:text-4xl font-bold text-center">
            DÜZENLİ ÇALIŞMALAR
          </h2>
          <p className="my-4 text-center text-sm ">
            Düzenli çalışmalarımıza, öncelikle temel niteliğinde olan
            "workshop"a katılan ve başarılı olanlar devam edebilir.
          </p>
          <Cards meetings={meetings} />
        </div>
      </section>
    </>
  );
}
