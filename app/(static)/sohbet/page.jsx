import HeaderTitle from "@/components/templates/headerTitle";
import HeaderImage from "@/components/templates/headerImage";
import PageContent from "@/components/templates/pageContent";

import Support from "@/components/sections/home/x6-support";
import SocialMedia from "@/components/sections/common/z-social-media";

export default function StaticPage() {
  return (
    <>
      <HeaderTitle>Mini Sohbet</HeaderTitle>
      <HeaderImage bgImage="iMerhaba">Mini Sohbet</HeaderImage>

      <PageContent h2Title="İsyankar ve Devrimci">
        <h3>İsyankar ve devrimci arasındaki fark</h3>
        <p>
          İlki otoriteyi devirip yerine kendisi geçmek ister; ikincisi o
          otoritenin tamamen ortadan kalkmasını.
        </p>
        <p>
          Biri padişahı devirip yeni padişah olmak ister; diğeri padişahlığı
          kaldırıp demokrasi ve cumhuriyeti ister.
        </p>
        <p>
          İsyankar, gücü kendi eline geçirmek için savaşır. Devrimci, eşitlik,
          kardeşlik ve barış için.
        </p>
        <p>
          Erich Fromm’un Sigmund Freud Misyonu kitabından esinlenen çıkarım.
        </p>
        <p>Sevgilerle...</p>
      </PageContent>

      <Support />
      <SocialMedia />
    </>
  );
}
