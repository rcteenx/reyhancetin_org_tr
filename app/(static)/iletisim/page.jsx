import PageTitle from "@/components/templates/pageTitle";
import PageImage from "@/components/templates/pageImage";
import PageContent from "@/components/templates/pageContent";

export default function IletisimPage() {
  return (
    <>
      <PageTitle>İletişim</PageTitle>
      <PageImage bgImage="iMerhaba">Bize Ulaşın</PageImage>
      <section
        id="iletisim"
        className="container mx-auto container-p my-2 md:my-10 lg:mt-16 flex flex-col xl:flex-row justify-center gap-0"
      >
        iletişim
      </section>
    </>
  );
}
