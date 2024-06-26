import HeaderTitle from "@/components/templates/headerTitle";
import HeaderImage from "@/components/templates/headerImage";
import PageContent from "@/components/templates/pageContent";
import AdWorkshop from "@/components/ui/ad-workshop";
import SubPages from "@/components/sections/common/sub-pages";

import { StaticPages } from "@/content/data";

export default function StaticPage() {
  return (
    <>
      <HeaderTitle>Çalışma Arkadaşlığı Daveti</HeaderTitle>
      <HeaderImage bgImage="aMerhaba">Birlikte yürüyelim...</HeaderImage>
      <PageContent h2Title="Uzağa Gitmek">
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

        <h3 className=" gradientAccent rounded-xl p-2">Arkadaşlığa Katılım</h3>
        <p>
          Düzenli yol çalışmalarımıza dahil olmak için belirli konularda
          uyumlanmamız gerekiyor: Ortak bir dil, belirli bir varlık ve deneyim
          seviyesi gibi. Bu kapsamda, birlikte devam edeceğimiz yolculuğa uyumu
          sağlamak için temel giriş atölye çalışması yapıyoruz.
        </p>
        <AdWorkshop />
        <p>
          Ayrıca, belirli dönemlerde düzenlediğimiz yol çalışmalarını tanıtan
          seminerlerimiz bulunmaktadır. Henüz karar vermediyseniz, bu tanıtım
          seminerlerimize de katılabilirsiniz.
        </p>
        <p>Sevgilerle...</p>
      </PageContent>

      <section className="bg-[#f7f7f7] px-4 py-8 md:py-12  text-center">
        <h2 className="mx-auto border-b-2 inline-block">İŞTE HİKAYEMİZ</h2>
        <p>
          Hepimiz, saf farkındalığın kaynağı olan '<strong>öz benlik</strong>'
          sayesinde bedenli ve bilinçli bir varlık olarak ortaya çıktık.
        </p>
        <p>
          Kendimizi tekrar fark ettiğimizde, yolculuğun çoktan başladığını
          gördük!
        </p>
        <div className="gradientAccent mx-auto mt-8 p-4 rounded-xl max-w-xl">
          <h3 className="font-normal">Peki Nereye Gidiyoruz?</h3>
          <p>Tüm yolculuğumuz bir kaynağa dönüş hikayesi</p>
          <p>
            Bedenin, duyguların, zihnin ötesine, önce bilince ve sonra da saf
            farkındalığa geri dönüş
          </p>
        </div>
      </section>
      <section className="bg-indigo2 px-4 py-8 md:py-12  text-center text-white">
        <h2 className="mx-auto border-b-2 inline-block">MİSYONUMUZ</h2>
        <p>
          Kaynağa dönüş yolculuğumuzda öz benliklerimizin birbirine
          kavuşmasıdır.
        </p>
      </section>

      <SubPages subPage={StaticPages[2]} />
    </>
  );
}
