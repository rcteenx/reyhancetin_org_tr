export default function InfoBar({ info }) {
  return (
    <section className="gradientIndigo py-8 lg:py-16 text-white">
      <div className="container mx-auto text-center">
        <h2 className="my-0 text-lg md:text-3xl lg:text-5xl ">{info.h2}</h2>
        <p className="">{info.desc}</p>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 lg:divide-x divide-indigo-600 lg:[&>*]:pl-14 mt-4 lg:mt-8 md:text-left">
          {info.items.map((i, index) => (
            <div key={index} className="text-center lg:text-left">
              <div className="text-lg lg:text-2xl text-gray-400 ">
                {i.title}
              </div>
              <div className="text-2xl lg:text-[2.5rem] text-white font-extrabold lg:mt-2">
                {i.info} +
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
