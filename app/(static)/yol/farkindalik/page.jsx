import HeaderTitle from "@/components/templates/headerTitle";
import HeaderImage from "@/components/templates/headerImage";
import PageContent from "@/components/templates/pageContent";
import SubPages from "@/components/sections/common/sub-pages";
import AdWorkshop from "@/components/ui/ad-workshop";

import { StaticPages, haftalık } from "@/content/data";

export default function StaticPage() {
  return (
    <>
      <HeaderTitle>Farkındalık Yolu</HeaderTitle>
      <HeaderImage bgImage="yMerhaba">Bilincinin Farkında mısın?</HeaderImage>
      <PageContent h2Title="Bilincin Farkındalığı">
        <div className="text-left">
          <p>
            Kendi bilincinizin, bir başka ifadeyle içinizde bir çeşit yapay zeka
            ile donatılmış programların farkında mısınız?
          </p>
          <p>
            Pek yakında, belki 3 yıl belki 20 yıl sonra, dijital yapay zeka
            bizim bilinçli olduğumuz için yapabildiğimizi sandığımız pek çok
            şeyi yapıyor olacak.
          </p>
          <p>Peki bu durumda, bilinciyle övünen insanlığın farkı ne?</p>
          <h3>Bilincin Ötesinde</h3>
          <p>
            Kendimizi bilinç olarak tanımlamanın bir adım ötesine geçmemiz
            gerekiyor - istemesek bile bu alanı dijital yapay zekalar yakında
            dolduracak. Kendi bilincimize hayat veren, bilinci yaratan şey,
            içimizdeki "saf farkındalık".
          </p>
          <h3>Saf Farkındalık</h3>
          <p>
            İç dünyanızda çalışan her türlü programın ve her türlü duyunun
            ötesinde, karanlık bir boşluğun ortasında, kendimizi en saf
            halimizle deneyimleyebiliriz.
          </p>
          <p>
            Dünyaları yok eden ya da var eden güç, içimizdeki tanrı ya da
            yaratıcı güç burada. Tüm bilincimizi çalıştıran ve dünyayı
            anlamlandıran en temel şey bu saf farkındalık.
          </p>
        </div>

        <hr className="mb-4" />
        <h3>Nasıl Çalışıyoruz</h3>
        <p>
          Saf farkındalık yolu, bilincin belli bir aşamaya kadar gelişmesinden
          sonra yaptığımız bir çalışma. Kişinin az çok kendi içinde çalışan
          programların farkında olması ve bunları yönetebilmesi gerekiyor. Diğer
          taraftan, doğru zamanda da başlanması gerekiyor; gereğinden fazla
          bilinç yolunda ilerleyip, farkındalığı anlamayan kişiler farklı
          komplikasyonlarla karşılaşabilirler.
        </p>
        <p>
          Bildiğimiz dünyanın ötesinde, metafizik deneyimlere açık olan
          arkadaşlarla, ezoterik bilgi, spritüel deneyim paylaşımı, meditasyon
          ve grup çalışmaları yapıyoruz.
        </p>

        <AdWorkshop />
        <p>
          Doğrudan farkındalık çalışmaları için bir başlangıcımız yok. Bizimle
          birlikte çalışmak isteyen arkadaşların, önce bilinç yolunda bizimle
          birlikte ilerlemesini bekliyoruz.
        </p>
        <p>Sevgilerle...</p>
      </PageContent>

      <section className="bg-[#f7f7f7] px-4 py-8 md:py-12  text-center">
        <h2 className="text-2xl md:text-4xl font-bold ">
          Farkındalığın Başlangıcı
        </h2>
        <p>
          Saf farkındalık, ıssızlığın ortasında, sadece "ben" hissinin olduğu ve
          başka hiçbir şeyin var olmadığı bir uzay. Bir anlamda araf ya da
          saflanma aşaması.
        </p>
        <p>
          Bilinen dünyanın ötesindeki bu boşluk, yolun sonu değil. Tam tersine,
          aslımıza dönüş yolculuğunun başlangıcı.
        </p>
        <hr className=" max-w-sm mx-auto my-4" />
        <h3>Birlik & Sevgi Yolu</h3>
        <p>
          Kendimizi, en saf halimizle uzun süre deneyimleyebilir ve bir anlamda
          dış katmanlardaki yüklerimizden kurtulabilirsek, içimizdeki "ben"
          hissiyle her şeyle bağlantıda olduğumuzu keşfedebiliriz. Böyle bir
          durumda, diğer insanları kendimizden ayrı görmeyen doğal bir sevgi ve
          hayret ile dolarız.
        </p>
      </section>
      <section className="bg-slate2 px-4 py-8 md:py-12  text-center text-white">
        <h2 className="text-2xl md:text-4xl font-bold ">
          Birbirimizle "BEN" algısı ile bağlıyız.
        </h2>
        <p>
          Reyhan Çetin'in içinde "BEN" diye algılanan saf farkındalık ile senin,
          sokaktaki herhangi bir başka insanın, dalda öten kuşun ya da
          miyavlayan kedinin içindeki "BEN" aynı: Ben Her yerdeyim Her şeyim!
        </p>
      </section>

      <SubPages subPage={StaticPages[1]} id="2" />
    </>
  );
}
