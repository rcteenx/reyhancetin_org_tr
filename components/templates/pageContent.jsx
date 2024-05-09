export default function PageContent({ h2Title, children }) {
  return (
    <section className="mx-auto container-p md:my-16">
      <div className="mx-auto p-4 pb-8 md:pb-16 max-w-xl flex flex-col gap-4 text-center shadow-xl">
        <h2 className="mx-auto inline-block py-1 border-coral-red border-b text-center">
          {h2Title}
        </h2>
        {children}
      </div>
    </section>
  );
}
