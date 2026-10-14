import { icons } from "./icons";

const AboutHighlight = ({ item }) => (
  <article className="rounded-2xl border border-sky-500/20 bg-[#0b1c33] px-5 py-5">
    <div className="flex items-start gap-3">
      <span className="mt-0.5 inline-flex shrink-0 text-emerald-400 [&>svg]:h-5 [&>svg]:w-5">
        {icons.check}
      </span>
      <div>
        <h3 className="text-[15px] font-semibold text-white">{item.title}</h3>
        <p className="mt-1 text-sm leading-6 text-slate-400">{item.body}</p>
      </div>
    </div>
  </article>
);

export default AboutHighlight;
