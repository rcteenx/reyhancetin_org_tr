import PageTitle from "@/components/templates/pageTitle";
import PageImage from "@/components/templates/pageImage";
import PageContent from "@/components/templates/pageContent";
import SubPages from "@/components/sections/sub-menu";
import { StaticPages } from "@/content/data";

export default function ReyhanPage() {
  return (
    <>
      <PageTitle>Reyhan Çetin - Merhaba</PageTitle>
      <PageImage>Hoşgeldiniz</PageImage>

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
        <p>
          Halen Çanakkale'nin Biga ilçesinde ikamet ediyor.
          <br />
          Evli ve 3 çocuk babası.
        </p>
      </PageContent>

      <section className="bg-[#f7f7f7] px-4 py-16 md:py-24">
        <div className="container-p">
          <h2 className="text-2xl md:text-4xl font-bold text-center">
            EZOTERİK REYHANLAR
          </h2>
          <p className="text-center text-sm ">
            Bir "ben" vardır bende, benden içeru<sup>*</sup>
          </p>
          <div className="flex justify-center">
            <div className="flex flex-col md:flex-row space-x-0 md:space-x-4">
              <div className=" my-4 p-8 w-96 text-center max-w-md bg-white border">
                <h3>H12 - REYHAN</h3>
                <ul className="px-4 text-left list-disc">
                  <li>Gerçek Reyhan</li>
                  <li>H12 kaderi</li>
                  <li>Bir bilen</li>
                  <li>Söze döken</li>
                  <li>Kendisinden aktif</li>
                </ul>
              </div>
              <div className=" my-4 p-8 w-96 text-center max-w-md bg-white border">
                <h3>H6 - REYHAN</h3>
                <ul className="px-4 text-left list-disc">
                  <li>Reyhan ötesi</li>
                  <li>Kaderin üstünde</li>
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
      </section>

      <section className="px-4 py-12 md:py-24">
        <div className="container-p">
          <h2 className="text-2xl md:text-4xl font-bold text-center">
            DİĞER REYHANLAR
          </h2>
          <div className="mt-12">
            <ul className="flex flex-wrap justify-center  gap-4">
              <li className=" w-64 border px-12 py-8 text-center transition ease-in hover:bg-gray-100">
                Elif'in Babası
              </li>
              <li className=" w-64 border px-12 py-8 text-center transition ease-in hover:bg-gray-100">
                İnci'in Babası
              </li>
              <li className=" w-64 border px-12 py-8 text-center transition ease-in hover:bg-gray-100">
                Kaan'in Babası
              </li>
              <li className=" w-64 border px-12 py-8 text-center transition ease-in hover:bg-gray-100">
                Annesinin Oğlu
              </li>
              <li className=" w-64 border px-12 py-8 text-center transition ease-in hover:bg-gray-100">
                Kardeşinin Abisi
              </li>
              <li className=" w-64 border px-12 py-8 text-center transition ease-in hover:bg-gray-100">
                Eski Koca
              </li>
              <li className=" w-64 border px-12 py-8 text-center transition ease-in hover:bg-gray-100">
                İşletme Mezunu
              </li>
              <li className=" w-64 border px-12 py-8 text-center transition ease-in hover:bg-gray-100">
                Yazılımcı
              </li>
              <li className=" w-64 border px-12 py-8 text-center transition ease-in hover:bg-gray-100">
                Bigalı
              </li>
              <li className=" w-64 border px-12 py-8 text-center transition ease-in hover:bg-gray-100">
                Boğaziçili
              </li>
              <li className=" w-64 border px-12 py-8 text-center transition ease-in hover:bg-gray-100">
                Beşiktaşlı
              </li>
            </ul>
          </div>
        </div>
      </section>

      <SubPages subPage={StaticPages[0]} id="1" />
    </>
  );
}
