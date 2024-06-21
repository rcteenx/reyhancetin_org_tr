export default function PageContent({ h2Title, children }) {
  return (
    <section className="mx-auto container-p md:my-16">
      <div className="mx-auto p-4 md:p-8 max-w-xl flex flex-col gap-4 text-left shadow-xl">
        <h2 className="mx-auto inline-block py-1 border-indigo border-b text-center">
          {h2Title}
        </h2>
        {children}
      </div>
    </section>
  );
}
