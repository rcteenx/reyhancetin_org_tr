import FooterInfo from "@/components/ui/footer/1-Info";
import FooterLinks from "@/components/ui/footer/2-Links";

import FooterQuote from "./3-Quote";
import FooterCopyRight from "@/components/ui/footer/4-CopyRight";

const Footer = () => {
  return (
    <footer
      id="footer"
      className="container mx-auto container-p mt-16 bg-slate2 sm:rounded-t-2xl"
    >
      <div className="px-2 pt-12 flex justify-between items-start gap-12 flex-wrap">
        <FooterLinks />
        <div>
          <h4 className="mb-2 text-lg leading-normal font-medium text-white border-b">
            <a href="reyhan">Reyhan</a>
          </h4>
          <ul>
            <li className="mt-1 text-sm leading-normal text-white-400 hover:text-slate-gray">
              <a href="/reyhan/kimim">reyhan kim?</a>
            </li>
          </ul>
        </div>
        <FooterInfo />
      </div>

      <FooterQuote />
      <FooterCopyRight />
    </footer>
  );
};

export default Footer;
