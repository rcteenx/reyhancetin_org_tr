import IconComponent from "@/components/ui/icons/icons";

const Cards = ({ meetings }) => {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 w-full justify-center">
        {meetings.map((m) => (
          <div className="p-8 md:w-72 bg-white border border-purple-300 rounded-lg shadow hover:bg-purple-300">
            <h3 className="m-0 text-xl font-bold">{m.title}</h3>
            <h5 className="mt-0 text-xs">{m.time}</h5>
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
  );
};

export default Cards;
