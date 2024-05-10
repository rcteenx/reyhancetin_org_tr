import HeaderTitle from "@/components/templates/headerTitle";
import HeaderImage from "@/components/templates/headerImage";
import PageContent from "@/components/templates/pageContent";
import SubPages from "@/components/sections/common/sub-pages";

import { StaticPages } from "@/content/data";

export default function Page() {
  return (
    <>
      <HeaderTitle>Reyhan Çetin ve Yol Çalışmaları</HeaderTitle>
      <HeaderImage bgImage="yMerhaba">Yol Var... Gidersen!</HeaderImage>
      <PageContent h2Title="Uzun İnce bir Yoldayız">
        <p>
          Aşık Veysel'in dediği gibi, 'Uzun ince bir yolda' ilerliyoruz. Ancak,
          yol tek değil, birçok farklı yol da var. Üstelik, bir yol seçmeseniz
          bile, zaman akıyor ve olduğumuz yerde bile süremiz bitiyor.
        </p>
        <p>
          Bazı yollar, mekanik bir şekilde sürünün, karanlığın ve hiçliğin
          ortasında ilerlerken, bazıları ise kendimizi keşfetmeye, bilinçli ve
          farkında bir yaşam sürmeye hatta ötesine geçmeye doğru ilerliyor.
        </p>
        <h3>Kendini Tanıma Yolculuğu</h3>
        <p>
          Kendini tanıma yolculuğuna başlayan yolcular, çeşitli zorluklarla
          karşılaşıyorlar. Sahte bile olsa, eski ve tanıdık dünyaya ve sürüye
          dönmek için birçok sebep ortaya çıkıyor. sürüye dönmek için pek çok
          sebep ortaya çıkıyor.
        </p>
        <p>
          Birlikte yürüttüğümüz çalışmalarla, hem yolda ilerlemek için
          birbirimize destek oluyoruz hem de yolculuğumuz dostlarla daha keyifli
          hale geliyor.
        </p>
        <hr className="mb-4" />
        <h3>Yol Çalışmalarımız</h3>
        <p>
          Yol çalışmalarımızı haftada 2-3 akşam Zoom üzerinden
          gerçekleştiriyoruz. Her biri farklı formatta olan bu buluşmalar
          yaklaşık 2 saat sürmektedir.
        </p>
        <p>
          Yürüdüğünüz yola bağlı olarak, aşağıdaki çalışma gruplarından birine
          giriş atölyesini başarıyla tamamladıktan sonra katılabilirsiniz.
        </p>
        <ul>
          <li>
            <h5 className="font-semibold">Bilinç Yolu</h5>
          </li>
          <li>
            <h5 className="font-semibold">Farkındalık Yolu</h5>
          </li>
        </ul>
        <div className="border border-slate/80 rounded-xl py-4 px-8">
          <p>
            Düzenli çalışmalara uyum sağlamak ve temel hazırlık için bir atölye
            çalışmamız bulunmaktadır. Bu atölye genellikle her ayın ilk hafta
            sonunda düzenlenmektedir. Kayıt ve bilgi için:
          </p>
          <h5 className="group my-4">
            <a
              href={StaticPages[2].link + "/" + StaticPages[2].pages[0].link}
              className="px-4 py-2 group-hover:bg-gray-300 group-hover:text-black bg-slate rounded-xl text-white"
            >
              Çalışmalara Giriş: Temel Bilinç Atölyesi
            </a>
          </h5>
        </div>
        <p>
          Ayrıca, belirli dönemlerde farklı şehirlerde hafta sonu buluşmaları ve
          şehir dışında inziva kampları düzenlemekteyiz.
        </p>
        <p>Sevgilerle...</p>
      </PageContent>
      <section className="bg-[#f7f7f7] px-4 py-8 md:py-12  text-center">
        <h2 className="text-2xl md:text-4xl font-bold ">İşte Hikayemiz</h2>
        <p>
          Hepimiz, saf farkındalığın kaynağı olan '<strong>öz benlik</strong>'
          sayesinde bedenli ve bilinçli bir varlık olarak ortaya çıktık.
        </p>
        <p>
          Kendimizi tekrar fark ettiğimizde, yolculuğun çoktan başladığını
          gördük!
        </p>
        <h3>NEREYE GİDİYORUZ?</h3>
        <hr className=" max-w-sm mx-auto my-4" />
        <h3>Tüm yolculuğumuz bir kaynağa dönüş hikayesi</h3>
        <p>
          Bedenin, duyguların, zihnin ötesine, önce bilince ve sonra da saf
          farkındalığa geri dönüş
        </p>
      </section>
      <section className="bg-slate2 px-4 py-8 md:py-12  text-center text-white">
        <h2 className="text-2xl md:text-4xl font-bold ">Misyonumuz</h2>
        <p>
          Kaynağa dönüş yolculuğumuzda öz benliklerimizin birbirine
          kavuşmasıdır.
        </p>
      </section>
      {/* bg-[#f7f7f7] */}
      <SubPages subPage={StaticPages[1]} />
    </>
  );
}
