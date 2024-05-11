import HeaderTitle from "@/components/templates/headerTitle";
import HeaderImage from "@/components/templates/headerImage";
import PageContent from "@/components/templates/pageContent";
import SubPages from "@/components/sections/common/sub-pages";

import { StaticPages } from "@/content/data";

export default function StaticPage() {
  return (
    <>
      <HeaderTitle>Yol Çalışmalarına Giriş Atölyeleri</HeaderTitle>
      <HeaderImage bgImage="aMerhaba">Yol Sizi Bekliyor</HeaderImage>
      <PageContent h2Title="İçsel Yolculuğa Davet">
        <p>.</p>
        <p>..</p>
        <p>...</p>
        <p>Sevgilerle...</p>
      </PageContent>
    </>
  );
}
