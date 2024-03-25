import { StaticPages } from "@/content/data";

const FooterLinks = () => {
  return (
    <div className="flex flex-1 justify-between gap-8 flex-wrap">
      {StaticPages.map((pg) => (
        <div key={pg.title}>
          <h4 className="mb-2 text-lg leading-normal font-medium text-white border-b">
            <a href={pg.link}>{pg.title}</a>
          </h4>
          <ul>
            {pg.pages.map((sp) => (
              <li
                key={sp.id}
                className="mt-1 text-sm leading-normal text-white-400 hover:text-slate-gray"
              >
                <a href={pg.id == 4 ? sp.link : "/" + pg.link + "/" + sp.link}>
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
