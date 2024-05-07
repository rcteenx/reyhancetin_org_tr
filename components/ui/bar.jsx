export default function Bar({ info }) {
  return (
    <section className="bg-slate py-16 text-white">
      <div className=" container mx-auto">
        <h2 className="text-2xl md:text-4xl text-center">{info.h2}</h2>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 lg:divide-x divide-slate-600 lg:[&>*]:pl-14 mt-10 sm:text-left">
          {info.items.map((i, index) => (
            <div key={index} className="text-center lg:text-left">
              <div className="text-lg md:text-2xl text-gray-400 ">
                {i.title}
              </div>
              <div className="text-2xl md:text-[2.5rem] text-white font-extrabold lg:mt-2">
                {i.info} +
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
