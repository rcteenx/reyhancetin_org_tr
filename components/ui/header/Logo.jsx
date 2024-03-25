import Link from "next/link";
import smd from "@/content/data/siteMetaData";

const HeaderLogo = () => {
  return (
    <Link id="platform" href="/" className="">
      <div className="w-12 md:w-16 xl:w-20 z-10">
        <img src={smd.siteLogo} alt={smd.title} className="p-0.5 " />
      </div>
    </Link>
  );
};

export default HeaderLogo;
