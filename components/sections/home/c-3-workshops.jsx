export default function Workshops() {
  return (
    <section id="atolye" className="">
      <div className="container mx-auto">
        <div className="bg-slate p-12 m-4 border rounded-2xl shadow-lg text-center text-white">
          <h2>Birlikte İçsel Yolculuğa Uyum Atölyeleri</h2>
          <p>
            Haftalık düzenli çalışmalara uyumlanmak için tavsiye ettiğimiz iki
            atölye çalışması
          </p>
          <ul className="text-slate text-base ">
            <li className="border p-4 my-4 rounded-md shadow-md bg-white hover:bg-gray-100">
              Ezoterik Felsefe ve Yaratılış Işını Atölyesi
            </li>
            <li className="border p-4 my-4 rounded-md shadow-md bg-white hover:bg-gray-200">
              Mindfulness Meditasyonu ve Bilinç Seviyeleri Atölyesi
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
