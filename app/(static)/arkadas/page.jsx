import HeaderTitle from "@/components/templates/headerTitle";
import HeaderImage from "@/components/templates/headerImage";
import PageContent from "@/components/templates/pageContent";
import SubPages from "@/components/sections/common/sub-pages";

import { StaticPages } from "@/content/data";

export default function StaticPage() {
  return (
    <>
      <HeaderTitle>Reyhan Çetin ve Çalışma Arkadaşlar</HeaderTitle>
      <HeaderImage bgImage="aMerhaba">Birlikte yürüyelim...</HeaderImage>
      <PageContent h2Title="Uzaklara Gitmek İçin">
        <p>
          Bir Afrika Atasözü:{" "}
          <q>
            Hızlı yol almak istiyorsan, yalnız git. Ama eğer uzağa gitmek
            istiyorsan o zaman birlikte yürü.
          </q>
        </p>
        <p>
          Kendi üzerimizde yaptığımız çalışma, bir bakıma sadece arpa boyu yol
          olsa da, diğer taraftan çok uzaklara ve çok derinlere ilerleyebiliyor.
          Bu süreç boyunca, kendimizi ve yolu kaybetmemek için her türlü destek
          iyi oluyor.
        </p>
        <h3>Yol Arkadaşlığı</h3>
        <p>
          Kendi yolumuz ortaya çıktığında, ikinci olarak birlikte yürüyeceğimiz
          kişilere ulaşmaya çalışırız. Bu web sitesi ve tüm diğer çalışmalar,
          size - yeni yol arkadaşları adaylarımıza - ulaşmak ve beraber devam
          edeceğimiz yolculuğa hazırlamak için.
        </p>
        {/* <p>
          Az gittik uz gittik. Dere tepe düz gittik. Bir de dönüp baktık ki bir
          arpa boyu yol gitmişiz.
        </p>
        <p>
          Uzun yıllar boyunca kendimize doğru çalışmalar yaptık, pek çoğunu da
          modere ettik. Bir aşamada, tüm bu ilerlemenin bir arpa boyu olduğunu
          görmek acı vericiydi.
        </p>
        <p>
          Sonrasında, çalışma olmayan, başka bir çalışma ve yol ortaya çıktı.
        </p> */}
        <hr className="mb-4" />
        <h3>Yol Arkadaşlığına Katılım</h3>
        <p>
          Düzenli yol çalışmalarımıza dahil olmak için belirli konularda
          uyumlanmamız gerekiyor: Ortak bir dil, belirli bir varlık ve deneyim
          seviyesi gibi. Bu kapsamda, birlikte devam edeceğimiz yolculuğa uyumu
          sağlamak için temel giriş atölye çalışması yapıyoruz.
        </p>
        <div className="border border-slate/80 rounded-xl py-4 px-8">
          <h4 className="">
            <a
              href={StaticPages[2].link + "/" + StaticPages[2].pages[0].link}
              className=""
            >
              Çalışmalara Giriş: Temel Bilinç Atölyesi
            </a>
          </h4>
          <p>
            Her ayın ilk hafta sonu yapılan bu atölye çalışmamıza katılmak için
            bize ulaşabilirsiniz. Kayıt ve bilgi için:
          </p>
          <ul className="flex items-center justify-center gap-4">
            <li className="px-4 py-2 bg-slate text-white hover:bg-slate/80 rounded-xl cursor-pointer">
              <a href="https://wa.me/905443087402">Kayıt</a>
            </li>
            <li className="px-4 py-2 border hover:bg-gray-200 rounded-xl cursor-pointer">
              <a
                href={StaticPages[2].link + "/" + StaticPages[2].pages[0].link}
              >
                Bilgi
              </a>
            </li>
          </ul>
        </div>
        <p>
          Ayrıca, belirli dönemlerde düzenlediğimiz yol çalışmalarını tanıtan
          seminerlerimiz bulunmaktadır. Henüz karar vermediyseniz, bu tanıtım
          seminerlerimize de katılabilirsiniz.
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
      <SubPages subPage={StaticPages[2]} />
    </>
  );
}
