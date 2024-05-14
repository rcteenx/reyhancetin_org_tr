import HeaderTitle from "@/components/templates/headerTitle";
import HeaderImage from "@/components/templates/headerImage";
import PageContent from "@/components/templates/pageContent";

import SubPages from "@/components/sections/common/sub-pages";
import { digerReyhanlar } from "@/content/data";

export default function StaticPage() {
  return (
    <>
      <HeaderTitle>Cerez</HeaderTitle>
      <HeaderImage>Cerez</HeaderImage>

      <PageContent h2Title="Cerez">
        <p>..</p>
      </PageContent>
    </>
  );
}
