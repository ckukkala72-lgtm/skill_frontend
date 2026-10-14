import { icons } from "./icons";

const JobReadyIncluded = ({ title, items, disclaimer }) => (
  <section className="mt-16">
    <h2 className="text-2xl font-bold text-white md:text-[32px]">{title}</h2>
    <div className="mt-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
      {items.map((item) => (
        <div
          key={item.label}
          className="flex items-center gap-3 rounded-xl border border-sky-500/20 bg-[#0b1c33] px-4 py-3.5"
        >
          <span className="inline-flex shrink-0 text-sky-400 [&>svg]:h-5 [&>svg]:w-5">
            {icons[item.icon] || icons.file}
          </span>
          <span className="text-sm font-medium text-slate-200">{item.label}</span>
        </div>
      ))}
    </div>
    {disclaimer && (
      <p className="mt-4 rounded-xl border border-sky-500/15 bg-[#0b1c33] px-5 py-4 text-sm leading-6 text-slate-400">
        {disclaimer}
      </p>
    )}
  </section>
);

export default JobReadyIncluded;
