import HeaderTitle from "@/components/templates/headerTitle";
import HeaderImage from "@/components/templates/headerImage";
import PageContent from "@/components/templates/pageContent";

import SubPages from "@/components/sections/common/sub-pages";
import { StaticPages } from "@/content/data";

export default function StaticPage() {
  return (
    <>
      <HeaderTitle>Reyhan Çetin ve Arkadaşları</HeaderTitle>
      <HeaderImage bgImage="rMerhaba">Hoşgeldiniz</HeaderImage>

      <PageContent h2Title="Merhaba">
        <p>
          25 yıldır bilinç ve farkındalık çalışmaları yapıyor ve yönetiyorum.
          Binlerce katılımcıya seminer verdim. Yüzlerce arkadaşlar beraber
          ilerledik.
        </p>
        <p>
          Pandemi dönemi bilincin yolculuğunu aksattı ve sonra tamamen durdurdu.
          Sessizlik ve vazgeçme dönemi, kendim sandığım bilincin ötesine yeni
          açılımlara sebep oldu: Saf farkındalık, bütünlük ve sevgiye kapılar
          açıldı.
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
