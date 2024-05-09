import PageTitle from "@/components/templates/pageTitle";
import PageImage from "@/components/templates/pageImage";
import PageContent from "@/components/templates/pageContent";
import SubPages from "@/components/sections/common/sub-pages";

import { StaticPages } from "@/content/data";

export default function ToplulukPage() {
  return (
    <>
      <PageTitle>Giriş Atölyeleri</PageTitle>
      <PageImage bgImage="yMerhaba">Yol Bizi Bekliyor</PageImage>
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
