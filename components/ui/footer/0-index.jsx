import FooterInfo from "@/components/ui/footer/1-Info";
import FooterLinks from "@/components/ui/footer/2-Links";

import FooterQuote from "./3-Quote";
import FooterCopyRight from "@/components/ui/footer/4-CopyRight";

const Footer = () => {
  return (
    <footer
      id="footer"
      className="xl:container mx-auto container-p mt-16 bg-slate2 xl:rounded-t-2xl"
    >
      <div className="py-8 flex flex-col md:flex-row justify-between md:items-start gap-8 text-center md:text-left">
        <FooterLinks />
        <FooterInfo />
      </div>

      <FooterQuote />
      <FooterCopyRight />
    </footer>
  );
};

export default Footer;
