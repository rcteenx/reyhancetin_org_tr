import { StaticPages } from "@/content/data";

export default function Workshops() {
  return (
    <section id="atolye" className="">
      <div className="container mx-auto">
        <div className="gradientAccent p-12 m-4 border rounded-2xl shadow-lg text-center text-white">
          <h3>Bilinç Yolu'na Uyum Atölyesi</h3>
          <p className="text-indigo-dark-5">
            Haftalık düzenli çalışmalara uyumlanmak için tavsiye ettiğimiz temel
            atölye çalışması
          </p>
          <ul className="text-indigo text-base">
            <li className="border p-4 my-4 rounded-md shadow-md bg-white">
              Ezoterik Felsefe, Bilinç Seviyeleri ve Mindfulness Meditasyon
              Atölyesi
              <ul className="my-4 flex items-center justify-center gap-4  ">
                <li className="px-4 py-2 gradientAccent gradientTransition  rounded-xl cursor-pointer">
                  <a href="https://wa.me/905443087402?text=at%C3%B6lye%20hakk%C4%B1nda%20bilgi%20alabilir%20miyim%3F%0A">
                    Kayıt
                  </a>
                </li>
                <li className="px-4 py-2 border hover:bg-gray-200 rounded-xl cursor-pointer">
                  <a
                    href={
                      "/" +
                      StaticPages[2].link +
                      "/" +
                      StaticPages[2].pages[0].link
                    }
                  >
                    Bilgi
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
