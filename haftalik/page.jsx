import HeaderTitle from "@/components/templates/headerTitle";
import HeaderImage from "@/components/templates/headerImage";
import PageContent from "@/components/templates/pageContent";
import SubPages from "@/components/sections/common/sub-pages";
import SvgCheck from "@/components/ui/svg/check";

import { StaticPages, haftalık } from "@/content/data";

export default function YolPage() {
  return (
    <>
      <HeaderTitle>Haftalık Düzenli Çalışmalarımız</HeaderTitle>
      <HeaderImage bgImage="yMerhaba">Bir Adım Daha</HeaderImage>
      <PageContent h2Title="Devamlı Çalışmalar">
        <div className="text-left">
          <p>
            Sistematik çalışmalar, her hafta, en azından bir adım ilerleyerek
            yola devam etmemizi sağlıyor.
          </p>
          <hr className="my-4" />
          <h3>{haftalık.h3}</h3>
          <p> {haftalık.p}</p>
          <ul className="space-y-5">
            {haftalık.items.map((i, index) => (
              <li key={index} className="flex gap-2">
                <SvgCheck />
                <div>
                  <dt className="font-semibold text-lg">{i.title}</dt>
                  <dd className="-ml-7 mt-2 pb-2 border-b border-gray-200">
                    {i.info}
                  </dd>
                </div>
              </li>
            ))}
          </ul>
          <p className="mt-4 bg-indigo/80 p-4 text-white rounded-2xl text-center">
            {" "}
            {haftalık.pf}
          </p>
        </div>
      </PageContent>

      <SubPages subPage={StaticPages[2]} id="2" />
    </>
  );
}
