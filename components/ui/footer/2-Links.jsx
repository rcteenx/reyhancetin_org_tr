import { StaticPages } from "@/content/data";
import FooterInfo from "@/components/ui/footer/1-Info";

const FooterLinks = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between md:items-start flex-1 gap-8">
      {StaticPages.map((pg) => (
        <div key={pg.title}>
          <h4 className="mb-2 text-lg leading-normal font-medium text-white md:border-b">
            <a href={"/" + pg.link}>{pg.title}</a>
          </h4>
          <ul>
            {pg.pages.map((sp) => (
              <li
                key={sp.id}
                className="mt-1 text-sm leading-normal text-white-400 hover:text-slate-gray"
              >
                <a
                  href={
                    pg.id == 4 && sp.id < 3
                      ? sp.link
                      : "/" + pg.link + "/" + sp.link
                  }
                >
                  {sp.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default FooterLinks;
