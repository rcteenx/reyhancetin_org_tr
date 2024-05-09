import PageTitle from "@/components/templates/pageTitle";
import PageImage from "@/components/templates/pageImage";
import PageContent from "@/components/templates/pageContent";
import SubPages from "@/components/sections/common/sub-pages";

import { StaticPages } from "@/content/data";

export default function ToplulukPage() {
  return (
    <>
      <PageTitle>Reyhan Çetin ve İçsel Yolculuk</PageTitle>
      <PageImage bgImage="yMerhaba">Yol Bizi Bekliyor</PageImage>
      <PageContent h2Title="İçsel Yolculuk">
        <p>.</p>
        <p>
          Toplulukların büyük bölümü, ne yazık ki ortak bir amaç ve değeri
          olmayan kişilerden oluştuğu için, katılımcıların, kendileri olarak
          nefes alabilecekleri sosyal ortamı sağlayamıyor.
        </p>
        <p>...</p>
        <p>Sevgilerle...</p>
      </PageContent>

      <section className="bg-[#f7f7f7] px-4 py-8 md:py-12  text-center">
        <h2 className="text-2xl md:text-4xl font-bold ">İşte Hikayemiz</h2>
        <ul>
          <li>
            Hepimiz, saf farkındalığın kaynağı olan “<strong>öz benliği</strong>
            ” sayesinde bedenli ve bilinçli bir varlık olarak ortaya çıktık.
          </li>
          <li>
            İçsel yolculuğumuz kaynağa dönüş hikayesi: Bedenin, duyguların,
            zihnin ötesine, önce bilince ve sonra da saf farkındalığa geri
            dönüş.
          </li>
        </ul>
      </section>

      <section className="bg-slate2 px-4 py-8 md:py-12  text-center text-white">
        <h2 className="text-2xl md:text-4xl font-bold ">Misyonumuz</h2>
        <ul>
          <li>Yol boyunca, öz benliklerimizin birbirine kavuşması.</li>
        </ul>
      </section>

      {/* bg-[#f7f7f7] */}

      <SubPages subPage={StaticPages[2]} />
    </>
  );
}
