import HeaderTitle from "@/components/templates/headerTitle";
import HeaderImage from "@/components/templates/headerImage";
import PageContent from "@/components/templates/pageContent";

import { ezoterikFelsefe } from "@/content/data";

import SubPages from "@/components/sections/common/sub-pages";
import { StaticPages } from "@/content/data";

export default function FelsefePage() {
  return (
    <>
      <HeaderTitle>
        Ezoretik Felsefe Araştırma ve Uygulama Yolculuğu
      </HeaderTitle>
      <HeaderImage bgImage="fMerhaba">Nerdesin?*</HeaderImage>
      <PageContent h2Title="Neden Ezoterik Felsefe?">
        <p>
          Bildiğimiz haliyle insan, henüz tamamlanmamış bir varlık. Dahası, pek
          çok alanda dengeli ve uyumlu bir gelişim söz konusu değil.
        </p>
        <p>
          Olağan hayatta yaşanan pek çok sorunun temelinde, kişinin kendisinin
          farkında olmaması ve ben-ötesi birlik ve bütünlük bilincini
          deneyimlememiş olması yatıyor.
        </p>
        <p>
          Felsefe hakkında daha detaylı bilgi ve etkinlikler için sizi atölye
          çalışmalarımıza bekliyoruz.
        </p>
        <p>Sevgilerle...</p>
      </PageContent>

      {/* <section id="education" className="bg-[#f7f7f7] px-4 py-16 md:py-24">
        <h2 className="text-2xl md:text-4xl font-bold text-center">
          ÜST MERKEZLER
        </h2>
        <p className="text-center text-sm ">
          Her insanın fiziksel varoluşunun üzerinde, başka benlikler var.
        </p>
        <div className="flex justify-center">
          <div className="flex flex-col md:flex-row space-x-0 md:space-x-4">
            <div className=" my-4 p-8 w-96 text-center max-w-md bg-white border">
              <h3>H12 - GERÇEK BEN</h3>
              <ul className="px-4 text-left list-disc">
                <li>Bilinç</li>
                <li>Ben - Ego</li>
                <li>Işık - Aydınlık</li>
                <li>Bilinen Dünya</li>
                <li>Kesinlik</li>
              </ul>
            </div>
            <div className=" my-4 p-8 w-96 text-center max-w-md bg-white border">
              <h3>H6 - BEN ÖTESİ</h3>
              <ul className="px-4 text-left list-disc">
                <li>Bilinç Ötesi</li>
                <li>Biz - Bensizlik</li>
                <li>Derin Karanlık - Uzay</li>
                <li>Bilinmeyen</li>
                <li>Belirsizlik</li>
              </ul>
            </div>
          </div>
        </div>
      </section> */}

      {/* <section className="bg-[#f7f7f7] px-4 py-16 md:py-24">
        <h2 className="text-2xl md:text-4xl font-bold text-center">
          ÇALIŞMALAR
        </h2>
        <p className="text-center text-sm ">
          Her insanın fiziksel varoluşunun üzerinde, başka benlikler var.
        </p>
        <div className="flex justify-center">
          <div className="flex flex-col md:flex-row space-x-0 md:space-x-4">
            <div className=" my-4 p-8 w-96 text-center max-w-md bg-white border">
              <h3>H12 - ÇALIŞMA GRUBU</h3>
              <ul className="px-4 text-left list-disc">
                <li>Bilinç Çalışmaları</li>
                <li>Kişisel Gözlem Paylaşımı</li>
              </ul>
            </div>
            <div className=" my-4 p-8 w-96 text-center max-w-md bg-white border">
              <h3>H6 - DOST MECLİSİ</h3>
              <ul className="px-4 text-left list-disc">
                <li>Birlikte Sohbet</li>
                <li>Serbest Paylaşım</li>
              </ul>
            </div>
          </div>
        </div>
      </section> */}

      <section className="px-4 py-4 md:py-8 bg-[#f7f7f7]">
        <div className="container-p text-center">
          <h2 className="text-2xl md:text-4xl font-bold">
            EZOTERİK FELSEFE ÇALIŞMA ALANLARIMIZ
          </h2>
          <p>Birlikte Çalıştığımız Başlıca Konular</p>
          <div className="mt-8">
            <ul className="flex flex-wrap justify-center gap-4">
              {ezoterikFelsefe.map((f) => (
                <li
                  key={f.id}
                  className={` w-64 bg-white border py-4 text-sm text-center transition ease-in hover:bg-gray-100 hover:cursor-pointer `}
                >
                  {f.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <SubPages subPage={StaticPages[1]} />
    </>
  );
}
