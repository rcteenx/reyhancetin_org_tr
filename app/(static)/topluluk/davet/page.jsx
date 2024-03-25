import Link from "next/link";
import PageTitle from "@/components/templates/pageTitle";
import PageImage from "@/components/templates/pageImage";
import PageContent from "@/components/templates/pageContent";
import SubPages from "@/components/sections/sub-menu";
import { StaticPages } from "@/content/data";

export default function ToplulukPage() {
  return (
    <>
      <PageTitle>Reyhan Çetin ve Arkadaşları - Topluluk Daveti</PageTitle>
      <PageImage bgImage="tMerhaba">Topluluk Daveti</PageImage>
      <PageContent h2Title="Topluluğa Davet">
        <div className="pb-12 text-justify">
          <p>
            Reyhan Çetin’in Kaptan olarak ilk Yıldız Gemisi ile başlayacağı
            yolculuğuna dair;
          </p>
          <p>
            Reyhan Çetin’in h12 kaderinin geldiği aşamada, sadece bir felsefe
            topluluğunu oluşturmak değil, kendi topluluklarını oluşturacak
            Kaptan ve Kaptan adaylarını desteklemek ve onlara hazır bir yol
            haritası sunmak var.
          </p>
          <p>
            Bu çalışmanın milyonlara ulaşmasını beklemiyorum ve istemiyorum.
            Diğer taraftan bir avuç kişi olarak da kalmak istemem. Belki ilk 10
            yıl için hedef, her biri yüzer kişilik etki alanından oluşan 10
            Yıldız gemisi ve Kaptan yeterli olacaktır - toplam 1,000 kişi
            civarı.
          </p>
          <p>
            Amacım dünyayı değiştirmek değil - dünya nasılsa öyle ve öyle olmaya
            devam edecek. Küçük bir arkadaş grubu ile kendi yolumdan yürümek,
            farklı varoluşlarda kendimi gerçekleştirmek ve birlikte h6
            deneyimlerine yol almak.
          </p>
        </div>
        <hr />
        <div className="pb-12 text-justify">
          <h3>Yeni Yıldız Gemileri Oluşturmak</h3>
          <ul className=" px-4 pb-4 list-['-_']">
            <li>
              Bir topluluk maksimum 100 kişilik bir gruptan oluşur. (20 asıl
              üye, 10 aday, 40 seminer ve 30 grup çalışması… gibi)
            </li>
            <li>
              Herhangi bir insanın, daha fazla kişiyi aklında tutması, takip
              etmesi ve sosyalleşmesi kolay değil.
            </li>
            <li>
              Kaptan, öncelikle üye, üye adayları ve sonrasında kendi verdiği
              seminer ve yönettiği gruptan sorumlu olabilir. (50 kişi gibi)
            </li>
            <li>
              Diğer grup ve seminer katılımcılarından moderatör rolü taşıyan
              diğer üyeler sorumlu olabilir.
            </li>
          </ul>
          <p>
            Belli bir büyüklüğe ulaşan Yıldız Gemisi,
            <br />
            - eğer Kaptan olmaya istekli ve potansiyeli olan kişiler varsa,
            <br />
            - Federasyon’un da onayı ve bütçe vermesi ile
            <br />
            yeni bir Yıldız Gemisi ve Kaptan oluşturabilir.
          </p>

          <p>
            Her yeni Kaptan,
            <br />
            - Kendi misyonu ve vizyonu
            <br />
            - Eski gemiden gelen bir kaç üye arkadaşı ile
            <br />
            yolculuğa başlar.
          </p>
        </div>
      </PageContent>
      <SubPages subPage={StaticPages[2]} id="1" />
    </>
  );
}
