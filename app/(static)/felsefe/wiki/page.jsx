import PageTitle from "@/components/templates/pageTitle";
import PageImage from "@/components/templates/pageImage";
import PageContent from "@/components/templates/pageContent";

import SubPages from "@/components/sections/common/sub-pages";
import { StaticPages } from "@/content/data";

export default function FelsefePage() {
  return (
    <>
      <PageTitle>Ezoretik Felsefe Wiki</PageTitle>
      <PageImage bgImage="fMerhaba">Temel Konular</PageImage>
      <PageContent h2Title="Ezoterizm">
        <p>...</p>
        <p>Sevgilerle...</p>
      </PageContent>

      <SubPages subPage={StaticPages[1]} id="2" />
    </>
  );
}
