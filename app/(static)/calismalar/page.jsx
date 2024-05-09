import HeaderTitle from "@/components/templates/headerTitle";
import HeaderImage from "@/components/templates/headerImage";
import PageContent from "@/components/templates/pageContent";
import SubPages from "@/components/sections/common/sub-pages";

import { StaticPages } from "@/content/data";

export default function ToplulukPage() {
  return (
    <>
      <HeaderTitle>Reyhan Çetin ve Yol Çalışmaları</HeaderTitle>
      <HeaderImage bgImage="yMerhaba">Yol Bizi Bekliyor</HeaderImage>
      <PageContent h2Title="Kaynağa Dönüş Çalışmaları">
        <p>.</p>
        <p>
          Kendimizi tanıma yolculuğu, oldukça uzun bir süreç ve hayat şartları
          pek çoğumuzun devam etmesini güçleştiriyor.
        </p>
        <p>
          Birlikte yaptığımız çalışmalar, hem bireysel yolculuğumuza destek
          oluyor, hem de yolculuğu dostlarla beraber daha eğlenceli hale
          getiriyor.
        </p>
        <h3>
          <a
            href={StaticPages[2].link + "/" + StaticPages[2].pages[1].link}
            className="hover:border-b"
          >
            Haftalı düzenli çalışmalarımız
          </a>
        </h3>
        <p>
          Düzenli çalışmalarımız, haftada 2-3 akşam zoom üzerinden yapıyor. Her
          biri farklı formatta olan bu buluşmalar 2 saat sürüyor.
        </p>
        <h3>
          <a
            href={StaticPages[2].link + "/" + StaticPages[2].pages[0].link}
            className="hover:border-b"
          >
            Çalışmalara Giriş Ayölyesi
          </a>
        </h3>
        <p>
          Düzenli çalışmalara uyum ve temel hazırlık için atölye çalışmamız var.
          Atölyemiz genellikle her ayın ilk hafta sonu düzenleniyor.
        </p>
        <p>
          Ayrıca belirli dönemlerde farklı şehirlerde hafta sonu buluşmaları ve
          şehir dışında inziva kampları yapıyoruz.
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
          <li>
            Kaynağa dönüş yolculuğumuzda, öz benliklerimizin birbirine
            kavuşması.
          </li>
        </ul>
      </section>

      {/* bg-[#f7f7f7] */}

      <SubPages subPage={StaticPages[2]} />
    </>
  );
}
