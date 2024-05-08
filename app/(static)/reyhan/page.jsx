import PageTitle from "@/components/templates/pageTitle";
import PageImage from "@/components/templates/pageImage";
import PageContent from "@/components/templates/pageContent";

import SubPages from "@/components/sections/common/sub-pages";
import { StaticPages } from "@/content/data";

export default function ReyhanPage() {
  return (
    <>
      <PageTitle>Reyhan Çetin ve Arkadaşları</PageTitle>
      <PageImage bgImage="rMerhaba">Hoşgeldiniz</PageImage>

      <PageContent h2Title="Merhaba">
        <p>
          25 yıldır bilinç ve farkındalık çalışmaları yapıyor ve yönetiyorum.
          Binlerce katılımcıya seminer verdim ve yüzlerce çalışmayı yönettim.
        </p>
        <p>
          Pandemi dönemi pek çok çalışmayı durdurmama sebep oldu. Sessizlik ve
          uyku dönemi, kendim sandığım bilincin ötesine saf farkındalık ve
          ötesine yeni kapılar açıldı.
        </p>
        <p>
          Şimdi kendimizi bulabileceğimiz ve kendimiz olabileceğimiz bir alan
          oluşturuyoruz. Sadece "<strong>çalışma</strong>" değil; aynı zamanda
          sevgi, anlayış, şefkat, muhabbet ve arkadaşlık için.
        </p>
        <p>Sevgilerle...</p>
      </PageContent>

      <SubPages subPage={StaticPages[0]} />
    </>
  );
}
