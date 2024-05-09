import HeaderTitle from "@/components/templates/headerTitle";
import HeaderImage from "@/components/templates/headerImage";
import PageContent from "@/components/templates/pageContent";

import SubPages from "@/components/sections/common/sub-pages";
import { digerReyhanlar } from "@/content/data";

export default function ReyhanPage() {
  return (
    <>
      <HeaderTitle>Reyhan Çetin - Özgeçmiş</HeaderTitle>
      <HeaderImage>Hoşgeldiniz</HeaderImage>

      <PageContent h2Title="Klasik Tanıtım">
        <p>
          1976 yılında Biga'da doğdu.
          <br />
          Baba kamyon şoförü, anne ev hanımı.
        </p>
        <p>
          Dumlupınar İlkokulu,
          <br />
          Çanakkale Anadolu Lisesi ve
          <br />
          Boğaziçi Üniversitesi İşletme mezuniyeti.
        </p>
        <p>
          İşletme, satış-pazarlama, muhasebe ve dış ticaret ile başlayan çalışma
          hayatı, girişimcilik ve IT ile devam etti.
        </p>
        <p>
          2001 yılında başladığı ezoterik felsefe çalışmalarına,
          <br />
          2010’lu yıllarda eğitmen olarak devam etti.
          <br />
          Pandemiyle (2020) beraber <strong>vazgeçme</strong> dönemi başladı.
        </p>
        <p>Halen Çanakkale'nin Biga ilçesinde ikamet ediyor.</p>
        <p>2 kız ve bir erkek çocuk babası.</p>
      </PageContent>

      {/* <section className="bg-[#f7f7f7] px-4 py-16 md:py-24">
        <div className="container-p">
          <h2 className="text-2xl md:text-4xl font-bold text-center">
            EZOTERİK BENLİKLER
          </h2>
          <p className="text-center text-sm ">
            Bir "ben" vardır bende, benden içeru<sup>*</sup>
          </p>
          <div className="flex justify-center">
            <div className="flex flex-col md:flex-row space-x-0 md:space-x-4">
              <div className=" my-4 p-8 w-96 text-center max-w-md bg-white border">
                <h3>BİLİNÇLİ REYHAN (H12)</h3>
                <ul className="px-4 text-left list-disc">
                  <li>Gerçek Reyhan</li>
                  <li>H12 kaderi</li>
                  <li>Bir bilen</li>
                  <li>Söze döken</li>
                  <li>Kendisinden aktif</li>
                </ul>
              </div>
              <div className=" my-4 p-8 w-96 text-center max-w-md bg-white border">
                <h3>ÖZ-BENLİK (H6)</h3>
                <ul className="px-4 text-left list-disc">
                  <li>Olası tüm Reyhanlar</li>
                  <li>Kaderlerin üzerinde </li>
                  <li>Bilemeyen</li>
                  <li>Sessiz</li>
                  <li>Dış etkilerle hareket eden</li>
                </ul>
              </div>
            </div>
          </div>
          <p className="mx-auto max-w-3xl text-xs">
            <sup>*</sup>Yunus Emre'nin "Bir Ben Vardır Bende" şiirinden alıntı.
          </p>
        </div>
      </section> */}

      <section className="px-4 py-4 md:py-8">
        <div className="container-p">
          <h2 className="text-2xl md:text-4xl font-bold text-center">
            DİĞER REYHANLAR
          </h2>
          <div className="mt-8">
            <ul className="flex flex-wrap justify-center gap-4">
              {digerReyhanlar.map((r) => (
                <li
                  key={r.id}
                  className={` w-64 border py-4 text-sm text-center transition ease-in hover:bg-gray-100 hover:cursor-pointer bg-${r.bgcolour} text-${r.tcolour}`}
                >
                  {r.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
