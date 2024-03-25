import { socialMedia } from "@/content/data";
import IconComponent from "@/components/ui/icons/icons";

export default function FooterSocial() {
  return (
    <div className="flex flex-col md:flex-row  justify-between items-start">
      {/* <div className="flex items-center gap-5 mt-4">
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
      <p className="text-left text-sm text-white-400">
        Kendimizi deneyimleyebileceğiniz bir alan!
      </p>
    </div>
  );
}
