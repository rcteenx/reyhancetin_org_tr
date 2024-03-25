import { footerLogo } from "@/public/assets/images";
import { socialMedia } from "@/content/data";
import IconComponent from "@/components/ui/icons/icons";

const FooterInfo = () => {
  return (
    <div className="flex flex-col">
      <a href="/">
        <img
          src={footerLogo.src}
          alt="logo"
          className="m-0 p-2 h-28 w-28 border-2 border-gray rounded-full"
        />
      </a>
      {/* <p className="mt-6 text-base text-center sm:text-left leading-7 text-white-400 sm:max-w-sm">
        Kendimizi deneyimleyebileceğiniz bir alan
      </p>
      <div className="flex items-center gap-5 mt-4">
        {socialMedia.map((icon) => (
          <div
            className="flex justify-center items-center w-12 h-12 bg-white rounded-full"
            key={icon.alt}
          >
            <a href={icon.link} target="_blank">
              <IconComponent name={icon.svgIcon} size={24} color="black" />
            </a>
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default FooterInfo;
