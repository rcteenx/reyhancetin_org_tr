import PageTitle from "@/components/templates/pageTitle";
import PageImage from "@/components/templates/pageImage";
import PageContent from "@/components/templates/pageContent";
import SubPages from "@/components/sections/sub-menu";
import { StaticPages, arkadasList } from "@/content/data";

export default function ReyhanPage() {
  // const sortedAList = arkadasList.sort();
  const sortedAList = arkadasList.sort((a, b) =>
    a.title.localeCompare(b.title)
  );

  return (
    <>
      <PageTitle>Reyhan Çetin ve Arkadaşları</PageTitle>

      <PageImage>Arkadaşlar</PageImage>

      <PageContent h2Title="Dünyada Yerini Bulamayanlara">
        <p>
          Kişisel yolculuğumun önemli sebeplerinden biri, "
          <strong>benim gibi</strong>
          ", bir bakıma, dünyadaki yerini bulamamış olanlarla temas kurtmaktı.
        </p>
        <p>
          Önceleri amaç, kendi yalnızlığımıi tuhaflığımı ve halimi
          paylaşabilecek birilerine ulaşmaktı. Sonrasında, az çok benim gibi
          henüz yerini bulamamış olanlara yol göstermek.
        </p>
        <p>Şimdiyse, sadece beraber deneyimlenen üst duygular...</p>
        <p>Görüşmek üzere ...</p>
      </PageContent>

      <section className="px-4 py-12 md:py-24">
        <div className="container-p">
          <h2 className="text-2xl md:text-4xl font-bold text-center">
            ARKADAŞLAR LİSTESİ
          </h2>
          <div className="mt-12">
            <ul className="flex flex-wrap justify-center  gap-4">
              {sortedAList.map((a) => (
                <li
                  key={a.id}
                  className=" w-64 border px-12 py-8 text-center transition ease-in hover:bg-gray-100"
                >
                  {a.title}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <SubPages subPage={StaticPages[0]} id="2" />
    </>
  );
}
