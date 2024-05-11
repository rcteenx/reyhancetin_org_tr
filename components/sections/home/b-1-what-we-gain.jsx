import SvgCheck from "@/components/ui/svg/check";

export default function WhatWeGain({ img, gain }) {
  return (
    <div id="gain" className="bg-white py-10">
      <div className="container mx-auto">
        <div className="px-4 lg:p-0 text-left xl:text-center">
          <h2>{gain.h2}</h2>
          <p>{gain.p}</p>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 lg:mt-4 items-center">
          <div className="rounded-3xl hidden xl:block">
            <img
              src={img.src}
              alt="img colletion"
              width="w-full"
              height={400}
              className=" rounded-xl"
            />
          </div>
          <div className="p-4">
            <h3>Kendi Üzerimizdeki Çalışmayla Neler Kazanıyoruz</h3>
            <ul className="space-y-5">
              {gain.items.map((i, index) => (
                <li key={index} className="flex gap-2">
                  <SvgCheck />
                  <div>
                    <dt className="font-semibold mt-1">{i.title}</dt>
                    <dd className="-ml-7 mt-2 pb-2 border-b border-gray-200">
                      {i.info}
                    </dd>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
