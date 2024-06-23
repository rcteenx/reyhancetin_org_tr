import HeaderTitle from "@/components/templates/headerTitle";
import HeaderImage from "@/components/templates/headerImage";
import PageContent from "@/components/templates/pageContent";

import SocialMedia from "@/components/sections/common/z-social-media";

export default function StaticPage() {
  return (
    <>
      <HeaderTitle>Ezoterik Felsefeye Giriş Atölyesi</HeaderTitle>
      <HeaderImage bgImage="aMerhaba">Bilinç Çalışmaları</HeaderImage>
      <PageContent h2Title="Temel Bilinç Atölyesi">
        <h3>Bilinç Yolu</h3>
        <p>
          Bilinçli içsel yolculuğumuz, kendimizi gözlemleyip bu gözlemlere bağlı
          olarak değiştirmekle başlar.
        </p>
        <p>
          Bu yolculuk, kendi kendine devam edebileceği gibi, bu alanda deneyim
          sahibi bir rehber ve bizimle beraber yol alacak bir grubun desteği ile
          de yapılabilir.
        </p>
        <h3>Ezoterik Felsefeye Giriş</h3>
        <p>
          Doğal olarak başlayan yarı-bilinçli yolculuğumuzu hızlandırmak ve
          sağlam adımlarla sürekli olarak ilerlemeye devam etmek için, bize
          temel olacak ezoterik felsefi bilgilere ihtiyacımız var.
        </p>
        <p>
          Pek çok kişinin mevcut bakış açımızı ters yüz edebilecek bu ezoterik
          bilgileri, kendi deneyimlerimizle doğrulayarak anlamak, gerekli ve
          önemli bir aşamadır.
        </p>
        <h3 className="my-2 text-center gradientAccent rounded-xl p-2">
          Atölye Ana Başlıkları
        </h3>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="p-4 border rounded-xl w-full">
            <h4>1.Gün - Cumartesi</h4>
            <ul className="text-sm">
              <li>İnsanın Mevcut Hali</li>
              <li>Bölünmüş Dikkat</li>
              <li>Bilinç Seviyeleri</li>
              <li>Kendini Gözlem</li>
            </ul>
          </div>
          <div className="p-4 border rounded-xl w-full">
            <h4>2.Gün - Pazar</h4>
            <ul className="text-sm">
              <li>Yaratılış Işını ve İnsan</li>
              <li>Farkındalık ve Bilinç</li>
              <li>Hayatın İçinde Çalışma</li>
              <li>Mindfulness Meditasyonu</li>
            </ul>
          </div>
        </div>

        <hr className="mb-4" />
        <h3>Giriş Atölyesi Hakkında</h3>
        <p>
          Bu atölye, Reyhan Çetin ve Arkadaşları'nın düzenli olarak yaptığı
          çalışmalara katılım için temel uyumu sağlayacak konuları ve
          uygulamaları içeriyor.
        </p>
        <p>
          Bu etkileyici atölye, iki tam gün boyunca sizinle birlikte olacak ve
          içsel keşif yolculuğunuzda size rehberlik edecek. Ezoterik felsefenin
          gizemli dünyasını keşfetmek, mindfulness pratiğinin gücünü
          deneyimlemek ve derin bağlantıları grup çalışmalarıyla keşfetmek için
          bu fırsatı kaçırmayın.
        </p>
        <p>Sevgilerle.</p>
      </PageContent>

      <section className="bg-indigo2 px-4 py-8 md:py-12  text-center text-white">
        <h3 className="text-2xl md:text-4xl font-bold ">Kayıt ve Mesaj</h3>
        <p>
          İçsel yolculuğumuza katılmak için kaydınızı şimdi yapın! Sınırlı
          kontenjanımız olduğunu unutmayın.
        </p>
        <p>Kayıt, daha fazla bilgi ve sorularınız için bize yazın.</p>
        <ul className="mt-4 p-4 md:p-8 border-2 border-indigo-light-5 inline-block rounded-xl shadow-xl bg-indigo-light-3 text-indigo-dark-3">
          <li className="font-bold text-2xl text-green-600">WhatsApp</li>
          <li className="text-sm hover:text-white-400 ">
            <a href="https://wa.me/905443087402?text=at%C3%B6lye%20hakk%C4%B1nda%20bilgi%20alabilir%20miyim%3F%0A">
              0 (544) 308 74 02
            </a>
          </li>
          <li className="mt-4 font-bold text-2xl text-yellow-600 block">
            Email
          </li>
          <li className="text-sm hover:text-white-400 ">
            <a href="mailto:rhan.cetinx@gmail.com">rhan.cetinx@gmail.com</a>
          </li>
        </ul>
      </section>

      <section className="px-4 pt-16 pb-4 max-w-4xl mx-auto text-center">
        <h2 className="text-2xl md:text-4xl font-bold ">
          ATÖLYE KAYIT BİLGİLERİ
        </h2>
        <p>
          Bu etkileyici atölye, iki tam gün boyunca sizinle birlikte olacak ve
          içsel keşif yolculuğunuzda size rehberlik edecek. Ezoterik felsefenin
          gizemli dünyasını keşfetmek, mindfulness pratiğinin gücünü
          deneyimlemek ve derin bağlantıları grup çalışmalarıyla keşfetmek için
          bu fırsatı kaçırmayın.
        </p>
        <div className="my-4 px-4 py-8 md:px-8 gradientIndigo border rounded-xl [&_h3]:text-xl [&_h3]:font-semibold ">
          <h3>Atölye Çalışması Kimler İçin</h3>
          <p>
            Bu atölye, içsel keşif yolculuğuna hevesli olan herkes için
            uygundur.
          </p>
          <p>
            Hem yeni başlayanların hem de farklı alanlarda bilgisi olanların,
            düzenli çalışmalara katılmadan önce bu atölyedeki temel konu ve
            uygulamalarla uyum sürecinden geçmeleri tavsiye edilir.
          </p>
          <h3>Çalışma Formatı</h3>
          <p>
            Her günlük çalışma, yaklaşık 45 dakikalık dört bölümden oluşur.
            Bölümler arası 5 dakikalık mola, orta bölümde ise 30 dakikalık bir
            mola verilir. Her günün sonunda, detaylı soru-cevap bölümü yapılır.
          </p>
          <h3>Tarih ve Yer</h3>
          <p>
            Her ayın ilk hafta sonu, cumartesi ve pazar günü Saat: 12:00 - 16:00
            arası
          </p>
          <p>
            Zoom üzerinden yapılır - WhatsApp grubundan sohbet öncesi davet
            gönderilir.
          </p>
          <h3>Katılım Ücreti</h3>
          <p>
            Atölye çalışmaları için katılım ücreti, 1.500 TL + KDV olarak
            belirlenmiştir.
          </p>
        </div>

        <SocialMedia />
      </section>
    </>
  );
}
