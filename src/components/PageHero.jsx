const PageHero = ({ title, subtitle }) => (
  <section className="mx-auto max-w-5xl px-5 py-16 text-center">
    <h1 className="text-4xl font-bold tracking-tight text-white">{title}</h1>
    {subtitle && (
      <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-400">{subtitle}</p>
    )}
  </section>
);

export default PageHero;
