import HeaderTitle from "@/components/templates/headerTitle";
import HeaderImage from "@/components/templates/headerImage";
import PageContent from "@/components/templates/pageContent";
import SubPages from "@/components/sections/common/sub-pages";

import AdWorkshop from "@/components/ui/ad-workshop";

import { StaticPages, haftalık } from "@/content/data";

export default function StaticPage() {
  return (
    <>
      <HeaderTitle>Bilinç Yolu</HeaderTitle>
      <HeaderImage bgImage="yMerhaba">Kendinin Bilincinde misin?</HeaderImage>
      <PageContent h2Title="Mekanik Bilinç">
        <p>
          Bir varlık çevresini algılıyor ve bu algıyı bir biçimde işleyip,
          algıladığı dünya ile tekrar iletişime geçiyorsa, bilinçli olarak kabul
          ediyoruz.
        </p>
        <p>
          Bu bilinçle, insanlık önemli gelişmeler sağladı: Aya gitti,
          bilgisayarlar üretti, sanat ve kültür alanlarda gelişmeler sağladı.
          Ancak, aynı bilinçle savaş, küçük büyük bir çok çatışmalar da yaptık.
        </p>
        <h3>Gündüz Rüyası</h3>
        <p>
          Ezoterik öğretiler, bu olağan bilinç durumuna 'gündüz rüyası' adını
          veriyor.
        </p>
        <p>
          Tıpkı bir program, telefon uygulaması gibi verimli ve etkin çalışan
          bir bilinç. Ancak, kendi kendisinin farkında değil. Dünyayı, kendi
          çerçevelediği kavramlar ve bakış açılarının içinden algılıyor.
        </p>
        <hr className="my-2" />
        <h3>Kendini Gözlem</h3>
        <p>
          Olağan bilinç halinin ötesine geçebilmek için, kişinin kendi bilinç
          sisteminin çalışmasının farkında olması gerekiyor. Kendini gözlem
          dediğimiz bu uygulama, insanın kendisi sandığı, duygu, düşünce ve
          fizik bedeni izlemeye çalışmasıdır.
        </p>
        <p>
          İnsan kendini gözlemleyerek, bir anlamda içinde çalışan programların
          farkında olacak ve bunları kalibre etmek ya da bunların ötesine geçmek
          için bir fırsatı olacaktır.
        </p>
        <h3>'Şimdi ve Burada' Olma</h3>
        <p>
          Kendini gözlem ve dikkat çalışmaları, günlük olağan hayatımızda "şimdi
          ve burada" kalmamıza ve hayatımızı bilinçli yaşamaya destek oluyor.
        </p>
        <h3 className=" gradientAccent rounded-xl p-2">Nasıl Çalışıyoruz</h3>
        <p>
          Bilinç geliştirmek ve kendi bilincimizin farkında olmak için ezoterik
          bilgi, deneyim, meditasyon, günlük hayatın içinde dikkat pratikleri ve
          grup çalışmaları yapıyoruz.
        </p>
        <AdWorkshop />
        <p>
          Bilinç çalışmalarımız, ağırlıklı olarak Gurdjieff'in Dördüncü Yol
          Öğreti'sine dayanmaktadır.
        </p>
        <p>Sevgilerle...</p>
      </PageContent>

      <section className="bg-[#f7f7f7] px-4 py-8 md:py-12  text-center">
        <h2 className="mx-auto border-b-2 inline-block">BİLİNCİN SINIRLARI</h2>
        <p>
          Bilincimiz telefonunuza yüklenmiş uygulamalardan farklı değil. Her
          biri kendi alanında mükemmele yakın işlemler yapıyor. Ancak, hepsi
          sadece program...
        </p>
        <p>
          Ne kadar iyi olursa olsun, bir programın ancak belli sınırlar içinde
          doğru çalışabilir.
        </p>
        <p>Tüm bu uygulamaların ötesinde, kendinize şunu sorun:</p>
        <div className="gradientAccent mx-auto mt-8 p-4 rounded-xl max-w-xl">
          <h3 className="font-normal">SEN KİMSİN ya da NE?</h3>
          <h4>İçimizde Çalışan Programların Farkında Olmak</h4>
          <p>
            Bilinç ya da 'yapay zeka' diyebileceğimiz, içimizde çalışan
            programların ötesinde, madde ötesi bir varlığımız daha var.
          </p>
          <p>
            Bilinç yolu bir aşamaya geldiğinde, bilincin ötesinde, farkındalık
            yolu başlıyor.
          </p>
        </div>
      </section>
      <section className="bg-indigo2 px-4 py-8 md:py-12  text-center text-white">
        <h2 className="text-2xl md:text-4xl font-bold ">SERBEST DİKKAT</h2>
        <p>
          Herhangi bir an ve yerde, dikkatimizi nereye vereceğimizi ya da
          vermeyeceğimizi seçebilme özgürlüğü ister misiniz?
        </p>
      </section>
      {/* bg-[#f7f7f7] */}

      <SubPages subPage={StaticPages[1]} id="1" />
    </>
  );
}
