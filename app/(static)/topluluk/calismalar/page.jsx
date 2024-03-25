import PageTitle from "@/components/templates/pageTitle";
import PageImage from "@/components/templates/pageImage";
import PageContent from "@/components/templates/pageContent";
import SubPages from "@/components/sections/sub-menu";
import { StaticPages } from "@/content/data";

export default function ToplulukPage() {
  return (
    <>
      <PageTitle>Reyhan Çetin ve Arkadaşları - Çalışma ve Roller</PageTitle>
      <PageImage bgImage="tMerhaba">Çalışma ve Roller</PageImage>
      <PageContent h2Title="Çalışma ve Roller">
        <div className="px-2 md:px-4 text-left">
          <h3>İç Çalışma ve Toplantıları</h3>
          <p>
            Üye ve üye adayı aşamasına gelmiş olan kişiler için iki temel
            çalışma alanı ve ayrıca sosyal ve sanat alanları olacaktır:
          </p>
          <ol className="p-2 list-decimal">
            <li>
              <h4 className=" pt-4 italic font-semibold">H12 Geliştirme</h4>
            </li>
            <ol className="p-2 list-decimal">
              <li>
                Bu aşamada bilincin ve kişinin kendini hatırlamasını
                geliştirmeye çalışıyoruz.
              </li>
              <li>Daha çok yapmak ve yapmaya çalışma odaklı bir çalışma</li>
              <li>
                Eş zamanlı olarak bu kişilerin en azından yardımcı moderatör
                olmaları teşvik edilebilir.
              </li>
              <li>Ağırlıklı olan online sohbet ile yapılacak</li>
            </ol>
            <li>
              <h4 className=" pt-4 italic font-semibold">
                H12 Vazgeçme ve H6'ya Giriş
              </h4>
            </li>
            <ol className="p-2 list-decimal">
              <li>
                Bu aşamaya geçen kişi çalışmalarda moderatör olabilir. (H12
                moderatörlerinin yıpratıcı ya da eksik yanlarını gördüğüm için,
                moderatörlerin bu seviyede olması gerektiğini düşünüyorum.)
              </li>
              <li>
                Artık bilinen dünyanın sınırlarının ötesinde bir varoluş
                başlıyor.
              </li>
              <li>
                Bu aşama objektif dünya (ve bilimin) sınırlarının ötesinde.
              </li>
              <li>Ağırlıklı olan online sohbet ile yapılacak</li>
              <li>
                Bu aşamada sayımız az ve uyumlu olduğumuz için, her ikisini de
                tek bir çalışma akşamında yönetebiliriz.
              </li>
            </ol>
            <li>
              <h4 className=" pt-4 italic font-semibold">
                Film, Dizi ve Diğer Sanat Paylaşımı
              </h4>
            </li>
            <ol className="p-2 list-decimal">
              <li>
                Olağan sohbet ve toplantılara ek olarak, ayda 1 (ya da 15 günde
                1) brlikte film ya da dizi izleyip, bunun etkilerini ve
                izlenimlerini konuşacağız.
              </li>
            </ol>
            <li>
              <h4 className=" pt-4 italic font-semibold">
                Yüz yüze buluşmalar ve İnziva Kampları
              </h4>
            </li>
            <ol className="p-2 list-decimal">
              <li>İlk aşamada bunları planlamak kolay olmayacak.</li>
              <li>
                Belki İstanbul gibi büyük şehirlerde buluşmalar ayarlayabiliriz.
              </li>
              <li>
                Kendi kampımız olana kadar da belki yılda bir kez bir inziva
                yapılabilir.
              </li>
              <li>
                Tüm bu çalışmalar için olağan masraflar dışında (yer, yemek,
                ulaşım) herhangi bir ödeme talep edilmeyecek ve yapılmayacak.
              </li>
            </ol>
          </ol>
        </div>
        <hr />
        <div className="px-2 md:px-4 text-left">
          <h3>Çalışma Faaliyet Rolleri</h3>
          <p>
            Seminer, workshop, meditasyon ya da grup çalışması gibi farklı
            formatta olan bu faaliyetler; - Henüz bu fikirleri duymamış kişilere
            “yeni bilgi”yi ulaştırmak, <br />
            - Topluluğa yeni üye ve üye adayları kazandırmak,
            <br />
            - Topluluğa fon ve kaynak sağlamak,
            <br />
            - Üyelerin temel giderlerine katkıda bulunmak,
            <br />
            gibi geniş amaçlara hizmet eder.
          </p>
          <ol className="p-2 list-decimal">
            <li>
              <h4 className=" pt-4 italic font-semibold">Moderator</h4>
            </li>
            <ol className="p-2 list-decimal">
              <li>
                Çalışmaların ilk ve doğal moderatörü o Yıldız Gemisi’nin
                Kaptan’ıdır.
              </li>
              <li>
                Eğer Kaptan artık moderasyon yapamayacak hale gelmişse, Yıldız
                Gemisi’ni - kendi dilediği biçimde - devredip, faaliyetleri
                kapatmalıdır.
              </li>
              <li>
                Moderatör çalışma ücretlerinin (seminer, grup çalışması… vs)
                ücretlerinin belli bir kısmını kendi için alır.
              </li>
              <ol>
                <li>Asistan ile çalışıyorsa; asistan (10%), Moderatör (50%)</li>
                <li>
                  Yardımcı moderatör ile çalışıyorsa; Yard.Mod.(30%), Moderatör
                  (30%)
                </li>
                <li>
                  Her iki durumda da, 20% Federasyon ve 20% Kaptan payı olarak
                  ayrılır.
                </li>
              </ol>
            </ol>
            <li>
              <h4 className=" pt-4 italic font-semibold">
                Yardımcı Moderatör:
              </h4>
            </li>
            <ol className="p-2 list-decimal">
              <li>
                Seminer, Workshop ya da grup çalışmalarını yönetecek deneyimli
                üyelerden seçilir.
              </li>
              <li>Belli bir asistanlık tecrübesi ve birikimi gereklidir.</li>
              <li>
                Yardımcı moderatör, asistanlık görevlerini de yerine getirir.
              </li>
              <li>
                Moderatör gözleminde çalışmalar yürüttükten sonra tam yetkili
                olur.
              </li>
              <li>Yardımcı moderatör, çalışma ücretlerinin 30%’sini alır.</li>
            </ol>
            <li>
              <h4 className=" pt-4 italic font-semibold">Asistan</h4>
            </li>
            <ol className="p-2 list-decimal">
              <li>
                Çalışmaların üye kayıt, sorularını yanıtlama ve ödemelerini
                takip etme gibi görevler üstlenir.
              </li>
              <li>Çalışmalara gözlemci ve destekçi olarak dahil olur.</li>
              <li>
                Yeterince gözlem ve h12 gelişmesinden sonra moderatör adayı
                olarak, yardımcı moderatör görevini alabilir.
              </li>
              <li>Asistan, çalışma ücretlerinin 10%’unu alır.</li>
            </ol>
          </ol>
        </div>
      </PageContent>

      <SubPages subPage={StaticPages[2]} id="3" />
    </>
  );
}
