import HeaderTitle from "@/components/templates/headerTitle";
import HeaderImage from "@/components/templates/headerImage";
import PageContent from "@/components/templates/pageContent";

import SubPages from "@/components/sections/common/sub-pages";
import { digerReyhanlar } from "@/content/data";

export default function StaticPage() {
  return (
    <>
      <HeaderTitle>Çerez Politikası</HeaderTitle>
      <HeaderImage>Çerez Politikası</HeaderImage>

      <PageContent h2Title="Çerez Politikası">
        <div className="text-gray-600 [&_h3]:text-xl [&_ul]:list-disc [&_ul]:list-inside">
          <h3>1. Giriş</h3>
          <p>
            Bu Çerez Politikası, [Reyhan Çetin & Arkadaşları] tarafından
            kullanılan çerezler ve benzeri teknolojiler hakkında bilgi
            vermektedir. Web sitemizi (https://www.reyhancetin.org.tr)
            kullanarak, bu politikada belirtilen çerezlerin kullanımını kabul
            etmiş olursunuz.
          </p>
          <h3>2. Çerez Nedir?</h3>
          <p>
            Çerezler, bir web sitesini ziyaret ettiğinizde tarayıcınıza veya
            cihazınıza yerleştirilen küçük veri dosyalarıdır. Çerezler, web
            sitesinin daha verimli çalışmasını sağlamak, kullanıcı deneyimini
            iyileştirmek ve ziyaretçilerin site kullanımını analiz etmek gibi
            çeşitli amaçlarla kullanılır.
          </p>

          <h3>3. Kullandığımız Çerezler</h3>
          <p>Web sitemizde aşağıdaki türde çerezler kullanılmaktadır:</p>
          <ul>
            <li>
              <strong>Gerekli Çerezler</strong>: Bu çerezler, web sitesinin
              temel işlevlerini yerine getirebilmesi için gereklidir. Bu
              çerezler olmadan, sitede sağlanan hizmetler ve özellikler düzgün
              bir şekilde çalışmaz.
            </li>
            <li>
              <strong>Performans Çerezleri</strong>: Bu çerezler, web sitesinin
              nasıl kullanıldığına ilişkin anonim bilgiler toplar ve bu
              bilgileri kullanarak web sitesini geliştirmemize yardımcı olur.
            </li>
            <li>
              <strong>İşlevsel Çerezler</strong>: Bu çerezler, web sitesini
              kullanımınızı daha kişisel hale getiren ayarları ve tercihlerinizi
              hatırlamak için kullanılır.
            </li>
            <li>
              <strong>Hedefleme veya Reklam Çerezleri</strong>: Bu çerezler,
              size ve ilgi alanlarınıza daha uygun reklamlar sunmamıza yardımcı
              olur.
            </li>
          </ul>

          <h3>4. Çerezlerin Kullanım Amaçları</h3>
          <p>Çerezleri aşağıdaki amaçlar doğrultusunda kullanmaktayız:</p>
          <ul>
            <li>Web sitemizin düzgün çalışmasını sağlamak</li>
            <li>Kullanıcı tercihlerini hatırlamak</li>
            <li>Kullanıcı deneyimini iyileştirmek</li>
            <li>Web sitemizin performansını ve işlevselliğini analiz etmek</li>
            <li>Size özel içerik ve reklamlar sunmak</li>
          </ul>

          <h3>5. Çerezleri Yönetmek ve Silmek</h3>
          <p>
            Çerezlerin kullanılmasını istemiyorsanız, tarayıcınızın ayarlarını
            değiştirerek çerezleri silebilir veya engelleyebilirsiniz. Ancak,
            çerezlerin devre dışı bırakılması durumunda, web sitemizin bazı
            özellikleri veya hizmetleri düzgün çalışmayabilir.
          </p>
          <p>
            Çerezleri nasıl yöneteceğiniz ve sileceğiniz hakkında daha fazla
            bilgi için aşağıdaki bağlantıları ziyaret edebilirsiniz:
          </p>
          <ul>
            <li>
              <a
                rel="noreferrer"
                target="_blank"
                href="https://support.google.com/accounts/answer/61416?hl=tr&co=GENIE.Platform%3DDesktop"
              >
                Google Chrome
              </a>
            </li>
            <li>
              <a
                rel="noreferrer"
                target="_blank"
                href="https://support.mozilla.org/tr/kb/cerezleri-silme"
              >
                Mozilla Firefox
              </a>
            </li>
            <li>
              <a
                rel="noreferrer"
                target="_blank"
                href="https://support.microsoft.com/tr-tr/help/4027947/microsoft-edge-delete-cookies"
              >
                Microsoft Edge
              </a>
            </li>
            <li>
              <a
                rel="noreferrer"
                target="_blank"
                href="https://support.apple.com/tr-tr/guide/safari/sfri11471/mac"
              >
                Safari
              </a>
            </li>
          </ul>

          <h3>6. Üçüncü Taraf Çerezleri</h3>
          <p>
            Web sitemizde, üçüncü tarafların da çerezleri kullanabileceğini
            lütfen unutmayın. Bu çerezler, üçüncü taraflar tarafından yönetilir
            ve ilgili tarafların gizlilik politikalarına tabidir.
          </p>

          <h3>7. Çerez Politikasında Değişiklikler</h3>
          <p>
            Çerez Politikamızda zaman zaman değişiklik yapabiliriz. Bu tür
            değişiklikler web sitemizde yayınlandığı andan itibaren geçerli
            olur. Çerez Politikamızdaki değişikliklerden haberdar olmak için bu
            sayfayı düzenli olarak kontrol etmenizi öneririz.
          </p>

          <h3>8. İletişim</h3>
          <p>
            Çerez Politikamız hakkında sorularınız varsa veya daha fazla bilgi
            almak istiyorsanız, lütfen bizimle iletişime geçin:
          </p>
          <p>* Çerez politikası, ChatGPT desteği ile hazırlanmıştır.</p>
        </div>
      </PageContent>
    </>
  );
}
