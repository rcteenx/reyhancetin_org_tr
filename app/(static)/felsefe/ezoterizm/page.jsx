import HeaderTitle from "@/components/templates/headerTitle";
import HeaderImage from "@/components/templates/headerImage";
import PageContent from "@/components/templates/pageContent";

import SubPages from "@/components/sections/common/sub-pages";
import { StaticPages } from "@/content/data";

export default function FelsefePage() {
  return (
    <>
      <HeaderTitle>Ezoretik Felsefe Nedir</HeaderTitle>
      <HeaderImage bgImage="fMerhaba">Sen Kimsin ya da NE?</HeaderImage>
      <PageContent h2Title="Neden Ezoterik Felsefe?">
        <p>...</p>
        <p>Sevgilerle...</p>
      </PageContent>

      <SubPages subPage={StaticPages[1]} id="1" />
    </>
  );
}
