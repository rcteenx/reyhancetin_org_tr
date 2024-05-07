export default function Bar({ info }) {
  return (
    <section className="bg-slate py-16 text-white">
      <div className=" container mx-auto">
        <h2 className="text-2xl md:text-4xl text-center">{info.h2}</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-0 lg:divide-x divide-slate-600 [&>*]:pl-14 mt-10 text-center sm:text-left">
          {info.items.map((i) => (
            <div>
              <div className="text-lg md:text-2xl text-gray-400 ">
                {i.title}
              </div>
              <div className="text-2xl md:text-[2.5rem] text-white font-extrabold mt-2">
                {i.info} +
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
