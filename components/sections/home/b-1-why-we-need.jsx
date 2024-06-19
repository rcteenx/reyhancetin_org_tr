export default function WhyWeNeed({ need }) {
  return (
    <div id="info" className="px-4 pb-8 border-b shadow-lg">
      <div className="container mx-auto p-4 rounded-lg gradientAccent text-white-400">
        <div className="lg:p-0 text-left xl:text-center">
          <h3 className="text-white">{need.h2}</h3>
          <p>{need.p}</p>
          <p>{need.p2}</p>
        </div>
      </div>
    </div>
  );
}
