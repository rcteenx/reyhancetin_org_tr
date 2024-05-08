export default function WhyWeNeed({ need }) {
  return (
    <div id="info" className="px-4 pb-8 border-b shadow-lg">
      <div className="container mx-auto p-4 border-2 border-slate rounded-2xl">
        <div className="lg:p-0 text-left xl:text-center">
          <h3>{need.h2}</h3>
          <p>{need.p}</p>
          <p>{need.p2}</p>
        </div>
      </div>
    </div>
  );
}
