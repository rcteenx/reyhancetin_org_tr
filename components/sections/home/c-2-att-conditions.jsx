import SvgCheck from "@/components/ui/svg/check";
import Workshops from "@/components/sections/home/c-3-workshops";

export default function AttendenceContitions({ img, con }) {
  return (
    <div id="con" className="bg-white py-10">
      <div className="container mx-auto">
        <div className="px-4 lg:p-0 text-left xl:text-center">
          <h2>{con.h2}</h2>
          <p>{con.p}</p>
        </div>

        <Workshops />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:mt-8 items-center">
          <div className="px-4">
            <h3>{con.h3}</h3>
            <ul className="space-y-5">
              {con.items.map((i, index) => (
                <li key={index} className="flex gap-2">
                  <SvgCheck />
                  <div>
                    <dt className="font-semibold text-lg">{i.title}</dt>
                    <dd className="-ml-7 mt-2 pb-2 border-b border-gray-200">
                      {i.info}
                    </dd>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="p-4 shadow-xl rounded-b-xl">
            <img
              src={img.src}
              alt="img colletion"
              width="w-full"
              height={400}
              className=" rounded-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
