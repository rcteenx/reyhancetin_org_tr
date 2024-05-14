import { StaticPages } from "@/content/data";

export default function AdWorkshop() {
  return (
    <div className="border border-slate/80 rounded-xl py-4 px-8">
      <h4 className="">
        <a
          href={"/" + StaticPages[2].link + "/" + StaticPages[2].pages[0].link}
          className=""
        >
          Çalışmalara Giriş: Temel Bilinç Atölyesi
        </a>
      </h4>
      <p>
        Her ayın ilk hafta sonu yapılan bu atölye çalışmamıza katılmak için bize
        ulaşabilirsiniz. Kayıt ve bilgi için:
      </p>
      <ul className="flex items-center justify-center gap-4">
        <li className="px-4 py-2 bg-slate text-white hover:bg-slate/80 rounded-xl cursor-pointer">
          <a href="https://wa.me/905443087402?text=bilgiBilinç Yolu: Güç, İrade & Yapabilme">Kayıt</a>
        </li>
        <li className="px-4 py-2 border hover:bg-gray-200 rounded-xl cursor-pointer">
          <a
            href={
              "/" + StaticPages[2].link + "/" + StaticPages[2].pages[0].link
            }
          >
            Bilgi
          </a>
        </li>
      </ul>
    </div>
  );
}
