import PageTitle from "@/components/templates/pageTitle";
import PageImage from "@/components/templates/pageImage";
import PageContent from "@/components/templates/pageContent";
import SubPages from "@/components/sections/sub-menu";

import { StaticPages } from "@/content/data";

export default function ToplulukPage() {
  return (
    <>
      <PageTitle>Reyhan Çetin Arkadaş Topluluğu</PageTitle>
      <PageImage bgImage="tMerhaba">Seni Bekliyoruz</PageImage>
      <PageContent h2Title="Arkadaş Topluluğu">
        <p>Reyhan Çetin ve arkadaşları</p>
        <p>
          Toplulukların büyük bölümü, ne yazık ki ortak bir amaç ve değeri
          olmayan kişilerden oluştuğu için, katılımcıların, kendileri olarak
          nefes alabilecekleri sosyal ortamı sağlayamıyor.
        </p>
        <p>...</p>
        <p>Bekliyoruz.</p>
      </PageContent>

      <section className="bg-[#f7f7f7] px-4 py-16 md:py-24">
        <h2 className="text-2xl md:text-4xl font-bold text-center">
          TOPLULUK KATILIMCILARI
        </h2>
        <p className="text-center text-sm text-gray-400">...</p>
        <div className="flex justify-center">
          <div className="flex flex-col md:flex-row gap-4">
            <div className=" m-4 px-4 py-8 text-center max-w-md bg-white  border  text-gray-600">
              {/* <img
                src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg"
                className="p-2 h-16 block mx-auto"
              /> */}
              <h2>ÜYELER</h2>
              <p className="text-sm text-gray-400">
                Üyelik öncesi, belli bir dönem "aday" olarak etkinliklere dahil
                olur.
              </p>
              <p className="text-sm text-gray-400">
                Bu yeni çerçeve, CSS kodlarının karmaşıklığının önüne geçiyor,
                bakım ve güncelleme kolaylığına destek oluyor.
              </p>
            </div>
            <div className=" my-4 px-4 py-8 text-center max-w-md bg-white  border text-gray-600">
              <h2>KAPTANLAR</h2>
              <p className="text-sm text-gray-400">
                Next.js, hızlı, SEO dostu web uygulamaları geliştirmenin
                teknoloji harikası aracı
              </p>
              <p className="text-sm text-gray-400">
                Yeniden kullanılabilir ve tekrarlanmayan kod yazmayı
                kolaylaştıran bu sistem, bakım sürecini de kolaylaştırıyor.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-8 md:py-12  text-center">
        <h2 className="text-2xl md:text-4xl font-bold ">Misyonumuz</h2>

        <p className="m-4">
          We are a design-oriented team that cares deeply about nature,
          innovation, and masterful execution.
        </p>
      </section>

      <section className="bg-slate2 px-4 py-8 md:py-12  text-center text-white">
        <h2 className="text-2xl md:text-4xl font-bold ">Değerlerimiz</h2>

        <p className="m-4">
          We are a design-oriented team that cares deeply about nature,
          innovation, and masterful execution.
        </p>
      </section>

      <SubPages subPage={StaticPages[2]} />
    </>
  );
}
