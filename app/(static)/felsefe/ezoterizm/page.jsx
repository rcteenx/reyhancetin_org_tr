import PageTitle from "@/components/templates/pageTitle";
import PageImage from "@/components/templates/pageImage";
import PageContent from "@/components/templates/pageContent";

import SubPages from "@/components/sections/common/sub-pages";
import { StaticPages } from "@/content/data";

export default function FelsefePage() {
  return (
    <>
      <PageTitle>Ezoretik Felsefe Nedir</PageTitle>
      <PageImage bgImage="fMerhaba">Sen Kimsin ya da NE?</PageImage>
      <PageContent h2Title="Neden Ezoterik Felsefe?">
        <p>...</p>
        <p>Sevgilerle...</p>
      </PageContent>

      <SubPages subPage={StaticPages[1]} id="1" />
    </>
  );
}
