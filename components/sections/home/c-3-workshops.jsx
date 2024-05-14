import { StaticPages } from "@/content/data";

export default function Workshops() {
  return (
    <section id="atolye" className="">
      <div className="container mx-auto">
        <div className="bg-slate p-12 m-4 border rounded-2xl shadow-lg text-center text-white">
          <h2>Birlikte İçsel Yolculuğa Uyum Atölyeleri</h2>
          <p>
            Haftalık düzenli çalışmalara uyumlanmak için tavsiye ettiğimiz temel
            atölye çalışması
          </p>
          <ul className="text-slate text-base">
            <li className="border p-4 my-4 rounded-md shadow-md bg-white hover:bg-gray-100">
              Ezoterik Felsefe, Bilinç Seviyeleri ve Mindfulness Meditasyon
              Atölyesi
              <ul className="my-4 flex items-center justify-center gap-4  ">
                <li className="px-4 py-2 bg-slate text-white hover:bg-slate/80 rounded-xl cursor-pointer">
                  <a href="https://wa.me/905443087402?text=bilgi">Kayıt</a>
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
