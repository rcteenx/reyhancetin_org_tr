export default function InfoPage() {
  return (
    <section id="atolye" className="">
      <div className="container mx-auto">
        <div className="bg-slate p-12 m-4 border rounded-2xl shadow-lg text-center">
          {/* <h1 className="text-[26px] font-bold text-center">
            ATÖLYE ÇALIŞMALARI NEDİR?
          </h1>
          <p>
            Server; web sitelerine ait içeriklerin depolandığı, bir
            bilgisayardan daha fazla veri işleyebilen, gelişmiş bir makine
            olarak tanımlanabilir. Yedekleme yapabilme ve kesintisiz çalışabilme
            koşullarına sahiptir.
          </p> 
          <hr className="my-8" />*/}
          <h2 className="text-white">İçsel Yolculuğa Davet Atölyeleri</h2>
          {/* <h3>Ezoterik Felsefe ve Yaratılış Işını</h3> */}
          {/* <h3>Mindfulness Meditasyonu ve Bilinç Seviyeleri</h3> */}
          <ul>
            <li className="border p-4 my-4 rounded-md  shadow-md bg-white hover:bg-gray-100">
              <p>Ezoterik Felsefe ve Yaratılış Işını Atölyesi</p>
            </li>
            <li className="border p-4 my-4 rounded-md shadow-md bg-white hover:bg-gray-200">
              <p>Mindfulness Meditasyonu ve Bilinç Seviyeleri Atölyesi</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
