import HeaderTitle from "@/components/templates/headerTitle";
import HeaderImage from "@/components/templates/headerImage";
import PageContent from "@/components/templates/pageContent";
import SubPages from "@/components/sections/common/sub-pages";

import { StaticPages } from "@/content/data";

export default function YolPage() {
  return (
    <>
      <HeaderTitle>Giriş Atölyeleri</HeaderTitle>
      <HeaderImage bgImage="yMerhaba">Yol Bizi Bekliyor</HeaderImage>
      <PageContent h2Title="İçsel Yolculuk">
        <p>.</p>
        <p>..</p>
        <p>...</p>
        <p>Sevgilerle...</p>
      </PageContent>

      <SubPages subPage={StaticPages[2]} id="1" />
    </>
  );
}
