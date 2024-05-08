export default function AttendenceContitions({ img, con }) {
  return (
    <div id="con" className="bg-white py-10">
      <div className="container mx-auto">
        <div className="px-4 lg:p-0 text-left xl:text-center">
          <h2>{con.h2}</h2>
          <p>{con.p}</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-8 items-center">
          <div className="p-4">
            <ul className="space-y-5">
              {con.items.map((i, index) => (
                <li key={index} className="flex gap-2">
                  <svg
                    className="shrink-0 mt-1"
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11 21.3452C16.3157 21.3452 20.625 17.036 20.625 11.7202C20.625 6.40447 16.3157 2.09521 11 2.09521C5.68426 2.09521 1.375 6.40447 1.375 11.7202C1.375 17.036 5.68426 21.3452 11 21.3452Z"
                      fill="#333366"
                    ></path>
                    <path
                      d="M15.8568 7.3335L9.62344 13.5668L7.05677 11.0002L5.77344 12.2835L9.62344 16.1335L17.1401 8.61683L15.8568 7.3335Z"
                      fill="white"
                    ></path>
                  </svg>
                  <div>
                    <dt className="font-bold mt-1">{i.title}</dt>
                    <dd className="-ml-7 mt-2 pb-2 border-b border-gray-200">
                      {i.info}
                    </dd>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="overflow-hidden rounded-3xl hidden lg:block">
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
