import IconComponent from "@/components/ui/icons/icons";

const Cards = ({ meetings }) => {
  return (
    <section className="bg-[#f7f7f7] px-4 py-16 md:py-24">
      <div className="container-p">
        <h2 className="text-2xl md:text-4xl font-bold text-center">
          SÜREKLİ ÇALIŞMALAR
        </h2>
        <p className="my-4 text-center text-sm ">
          Düzenli çalışmalarımıza, öncelikle temel niteliğinde olan "workshop"a
          katılan ve başarılı olanlar devam edebilir.
        </p>
        <div className="flex justify-center">
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 w-full justify-center">
            {meetings.map((m) => (
              <div
                key={m.id}
                className="p-8 md:w-96 bg-white border border-purple-300 rounded-lg shadow hover:bg-purple-300"
              >
                <div className="flex justify-between">
                  <h3 className="text-xl font-bold">{m.title}</h3>
                  <h5 className="mt1 text-xs">{m.time}</h5>
                </div>
                <p className="text-xs">{m.fulltitle}</p>
                <ul className="px-4 my-3 text-left list-disc">
                  {m.specs.map((s, index) => (
                    <li key={index} className="text-sm">
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cards;
