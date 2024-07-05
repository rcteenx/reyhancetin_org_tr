import { socialMedia } from "@/content/data";
import IconComponent from "@/components/ui/IconComponent";

export default function FooterQuote() {
  return (
    <div className="flex flex-col md:flex-row  justify-between items-end">
      <div className="flex items-center gap-2 mt-4">
        {socialMedia.map((icon) => (
          <div
            className="flex justify-center items-center hover:text-white-400"
            key={icon.alt}
          >
            <a href={icon.link} target="_blank" title={icon.title}>
              {icon.name}
            </a>
          </div>
        ))}
      </div>
      <p className="hidden md:block text-right text-sm">
        Kendimizi deneyimleyebileceğiniz ve kendimiz olabileceğimiz bir alan
        açıyoruz.
      </p>
    </div>
  );
}
