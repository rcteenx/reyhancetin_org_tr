import HeaderTitle from "@/components/templates/headerTitle";
import HeaderImage from "@/components/templates/headerImage";
import PageContent from "@/components/templates/pageContent";

export default function StaticPage() {
  return (
    <>
      <HeaderTitle>Ezoterik Felsefeye Giriş Atölyesi</HeaderTitle>
      <HeaderImage bgImage="aMerhaba">Yol Bizi Bekliyor</HeaderImage>
      <PageContent h2Title="İçsel Yolculuğa Davet: Bilinç Yolu">
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
        <h3>Atölye Ana Başlıkları</h3>
        <ul>
          <li>İnsanın Mevcut Hali</li>
          <li>Bilinç Seviyeleri</li>
          <li>Kendiniz Gözlem</li>
          <li>Yaratılış Işını ve İnsan</li>
          <li>Hayatın İçinde Anda Olma</li>
          <li>Mindfulness Meditasyonu</li>
        </ul>
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

      <section className="bg-slate2 px-4 py-8 md:py-12  text-center text-white">
        <h2 className="text-2xl md:text-4xl font-bold ">KAYIT ve İLETİŞİM</h2>
        <p>
          İçsel yolculuğumuza katılmak için kaydınızı şimdi yapın! Sınırlı
          kontenjanımız olduğunu unutmayın.
        </p>
        <p>
          Kayıt ve daha fazla bilgi için: 0 (544) 308 74 02 /
          reyhancetin@yahoo.com
        </p>
      </section>

      <section className="px-4 pt-16 pb-4 max-w-4xl mx-auto text-center">
        <h2 className="text-2xl md:text-4xl font-bold ">
          Atölye Kayıt Bilgileri
        </h2>
        <p>
          Bu etkileyici atölye, iki tam gün boyunca sizinle birlikte olacak ve
          içsel keşif yolculuğunuzda size rehberlik edecek. Ezoterik felsefenin
          gizemli dünyasını keşfetmek, mindfulness pratiğinin gücünü
          deneyimlemek ve derin bağlantıları grup çalışmalarıyla keşfetmek için
          bu fırsatı kaçırmayın.
        </p>

        <h3>Atölye Çalışması Kimler İçin</h3>
        <p>
          Bu atölye, içsel keşif yolculuğuna hevesli olan herkes için uygundur.
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
          Atölye çalışmaları için katılım ücreti, 1.600 TL + KDV olarak
          belirlenmiştir.
        </p>
      </section>
    </>
  );
}
