import FooterInfo from "@/components/ui/footer/FooterInfo";
import FooterLinks from "@/components/ui/footer/FooterLinks";
import FooterSocial from "./FooterSocial";
import FooterCopyRight from "@/components/ui/footer/FooterCopyRight";

const Footer = () => {
  return (
    <footer
      id="footer"
      className="container mx-auto container-p mt-16 bg-slate2 md:rounded-t-2xl"
    >
      <div className="px-2 pt-12 flex justify-between items-start gap-12 flex-wrap max-lg:flex-col">
        <FooterInfo />
        <FooterLinks />
      </div>

      <FooterSocial />
      <FooterCopyRight />
    </footer>
  );
};

export default Footer;
