import Link from "next/link";
import PageTitle from "@/components/templates/pageTitle";
import PageImage from "@/components/templates/pageImage";
import PageContent from "@/components/templates/pageContent";
import SubPages from "@/components/sections/sub-menu";
import { StaticPages } from "@/content/data";

export default function ToplulukPage() {
  return (
    <>
      <PageTitle>Reyhan Çetin ve Arkadaşları - SSS</PageTitle>
      <PageImage bgImage="tMerhaba">Sık Sorulan Sorular</PageImage>
      <PageContent h2Title="Organizasyon Yapısı">
        <div className="pb-12 text-justify">
          <h4 className=" pt-4 italic font-semibold ">Neden Yıldız Gemisi?</h4>
          <ul className=" px-4 list-['-_']">
            <li>
              Şube terimi bir mekana bağlı sabit bir yapıyı temsil ediyor. Ama
              Yıldız Gemisi, belli bir misyon ile yolculuk yapmaya hedeflemiş
              bir Kaptan ve mürettebatını çağrıştırıyor.
            </li>
            <li>
              Ayrıca, Uzay Yolu hala en sevdiğim dizilerden biri ve onların
              maceralarında karşılaştıkları yeni kültürler, bizim
              maceralarımızla da uyumlu görünüyor?
            </li>
          </ul>
          <h4 className=" pt-4 italic font-semibold">
            Arkadaşlar arasında para alışverişi doğru mu?
          </h4>
          <ul className=" px-4 list-['-_']">
            <li>
              Arkadaşlar topluluğu deyip, aynı zamanda para alıyor olmak, çözmek
              için en zorlandığım alanlardan biriydi. Bunun ticari bir faaliyet
              olmasını istemiyorum. Ama, belli masraf ve giderlerin de - kar
              amacı olmadan - karşılanması gerekiyor. Bu kapsamda üyelik
              ücretini, ortak organizasyona yapıyoruz.
            </li>
            <li>
              Ayrıca, dışa dönük çalışma faaliyetleri aktif olduğunda, bu
              ödemeyi rahatlıkla karşılayacak, asistanlık ve yardımcı
              moderatörlük gibi roller olacak. Bu sayede, topluluk üyeliği,
              maddi bir zorluk yaratmadan, kişilerin zaman ve emek olarak
              katkılarıyla yol alıyor olacak. Bu zaman ve emek, ayrıca üyelerin
              kendilerini geliştirme faaliyetlerine de destek verecek çalışmalar
              olacak.
            </li>
          </ul>
          <h4 className=" pt-4 italic font-semibold">Amaç Kaptan olmak mı?</h4>
          <ul className=" px-4 list-['-_']">
            <li>
              Hiyerarşide üstte görünmesine rağmen, topluluk arkadaşlarının
              amacı Kaptan olmaya çalışmak değildir. Herkes kendi yolunu,
              topluluk desteği ile yürümeye çalışıyor. Topluluktaki arkadaşların
              büyük bölümü, üye olarak devam edebilir.
            </li>
            <li>
              Kaptan’ın kendi h12 kaderi çerçevesinde bir misyon yüklenmiş
              olması gerekiyor. Böyle bir misyonun devamı olarak Kaptan’lık
              görevi ortaya çıkabilir.
            </li>
            <li>
              Belli bir varlık seviyesine geldiği, moderatör olarak çalışmaları
              yönettiği halde, Kaptan olma isteği olmayan üyelerin olması çok
              normaldir.
            </li>
            <li>
              Alternatif olarak, belli bir konuda araştırma yapmak ve
              uzmanlaşmak için, Yıldız Gemisini bu amaçla kullanan Kaptan’lar da
              olabilir. Örneğin daha fazla şefkat araştırmayı hedefleyen bir
              yolculuk ya da çocukluk travmalarını çözmeyi hedefleyen bir
              başkası olabilir.
            </li>
          </ul>
          <h4 className=" pt-4 italic font-semibold">
            Halen profesyonel kişisel gelişim eğitimleri veren ya da vermeyi
            düşünenlerin üyelik durumu nasıl olur?
          </h4>
          <ul className=" px-4 list-['-_']">
            <li>
              Bu ayrımı oldukça zor ve hassas bir konu. Öncelikle, üyelerin
              burada kazandığı bilgi ve anlayışların ne kadarı kendilerine, ne
              kadarı topluluğa ait sayılır, ayırmak kolay değil. Böyle bir durum
              ortaya çıktığında, bunu o üyenin bulunduğu grup kendi aralarında
              tartışıp bir sonuca ulaşabilir. Duruma göre uygun görebilir ya da
              üyeliğinin sonlandırılmasına karar verilebilir.
            </li>
          </ul>
          <h4 className=" pt-4 italic font-semibold">
            Para kazanmak için bir meslek eğitimi olarak bu kurslara katılabilir
            miyim?
          </h4>
          <ul className=" px-4 list-['-_']">
            <li>
              Bu çalışma ve topluluğun amacı kişilerin hayatlarını idare
              ettirebilmeleri için gelir kazanması değildir. Öncelikle kendimizi
              tanımak ve çalışmak amacıyla oluşan bu topluluk, daha fazla
              paylaşım yapabilmek için evrilmiştir.
            </li>
            <li>
              Yaptığımız bazı çalışma faaliyetlerinden belli bir kazanç
              sağlanıyor olsa da, burada amaç para kazanmak değil, sadece
              harcanan emeğin bir miktar karşılığının olmasıdır. Üyelerimizin
              kendi hayatlarını idame ettirebilmek için, ayrı bir gelir ya da iş
              alanının olması gerekmektedir.
            </li>
          </ul>
        </div>
      </PageContent>
      <SubPages subPage={StaticPages[2]} id="4" />
    </>
  );
}
