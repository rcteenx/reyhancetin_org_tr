import HeaderTitle from "@/components/templates/headerTitle";
import HeaderImage from "@/components/templates/headerImage";
import PageContent from "@/components/templates/pageContent";
import SubPages from "@/components/sections/common/sub-pages";

import { StaticPages, haftalık } from "@/content/data";

export default function StaticPage() {
  return (
    <>
      <HeaderTitle>Farkındalık Yolu</HeaderTitle>
      <HeaderImage bgImage="yMerhaba">Her şey bağlı</HeaderImage>
      <PageContent h2Title="Hazırlanıyor...">
        <div className="text-left">
          <p>.</p>
          <p>..</p>
          <p>...</p>
        </div>
      </PageContent>

      <SubPages subPage={StaticPages[1]} id="2" />
    </>
  );
}