import PageTitle from "@/components/templates/pageTitle";
import PageImage from "@/components/templates/pageImage";
import PageContent from "@/components/templates/pageContent";

import Support from "@/components/sections/home/x6-support";
import SocialMedia from "@/components/sections/common/z-social-media";

export default function IletisimPage() {
  return (
    <>
      <PageTitle>İletişim</PageTitle>
      <PageImage bgImage="iMerhaba">Bize Ulaşın</PageImage>

      <PageContent h2Title="İletişim Bilgileri">
        <p>Bize aşağıdaki kanallardan ulaşabilirsiniz.</p>
        <ul>
          <li>
            <dd className="font-semibold">Whatsapp & Telefon:</dd>
            <dt>
              <a href="tel:+905443087402">+90 (544) 308 74 02</a>
            </dt>
          </li>
          <li className="mt-4">
            <dd className="font-semibold">Email:</dd>
            <dt>
              <a href="mailto:rhan.cetinx@gmail.com">rhan.cetinx@gmail.com</a>
            </dt>
          </li>
        </ul>
        <p>Sevgilerle...</p>
      </PageContent>

      <Support />
      <SocialMedia />
    </>
  );
}
