import PageTitle from "@/components/templates/pageTitle";
import PageImage from "@/components/templates/pageImage";

export default function KatilimPage() {
  return (
    <>
      <PageTitle>Katılım</PageTitle>
      <PageImage bgImage="kMerhaba">Bir kişilik daha yerimiz var :)</PageImage>

      <section
        id="katilim"
        className="container mx-auto container-p my-2 md:my-10 lg:mt-16 flex flex-col xl:flex-row justify-center gap-0"
      >
        Katılım
      </section>
    </>
  );
}
