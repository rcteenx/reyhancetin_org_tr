import PageTitle from "@/components/templates/pageTitle";
import PageImage from "@/components/templates/pageImage";
import PageContent from "@/components/templates/pageContent";

export default function FelsefePage() {
  return (
    <>
      <PageTitle>Ezoretik Felsefe Araştırma Ve Uygulama</PageTitle>
      <PageImage bgImage="fMerhaba">Nerdesin</PageImage>
      <PageContent h2Title="Neden Ezoterik Felsefe?">
        <p>
          Bildiğimiz haliyle insan, henüz tamamlanmamış bir varlık. Dahası, pek
          çok alanda dengeli ve uyumlu bir gelişim söz konusu değil.
        </p>
        <p>
          Olağan hayatta yaşanan pek çok sorunun temelinde, kişinin kendisinin
          farkında olmaması (h12) ve ben-ötesi birlik ve bütünlük bilincini (h6)
          deneyimlememiş olması yatıyor.
        </p>
        <p>
          Felsefe hakkında daha detaylı bilgi ve etkinlikler için sizi seminer
          platformlarımıza bekliyoruz.
        </p>
        <p>Görüşmek üzere…</p>
      </PageContent>

      <section id="education" className="bg-[#f7f7f7] px-4 py-16 md:py-24">
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
      </section>

      <section className="bg-[#f7f7f7] px-4 py-16 md:py-24">
        <h2 className="text-2xl md:text-4xl font-bold text-center">
          TOPLULUK YAPILARI
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
              <h3>H6 - DOST SOHBETİ</h3>
              <ul className="px-4 text-left list-disc">
                <li>Birlikte Sohbet</li>
                <li>Serbest Paylaşım</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
