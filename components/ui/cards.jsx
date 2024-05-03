const Cards = ({ meetings }) => {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col md:flex-row space-x-0 md:space-x-4">
        {meetings.map((m) => (
          <div
            key={m.id}
            className="my-4 p-8 w-96 text-center max-w-md bg-white border"
          >
            <h3>{m.title}</h3>
            <h5>{m.time}</h5>
            <ul className="px-4 text-left list-disc">
              {m.specs.map((s, index) => (
                <li key={index}>{s}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
