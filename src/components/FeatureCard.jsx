import { icons } from "./icons";

const FeatureCard = ({ icon, title, body }) => (
  <article className="rounded-2xl border border-white/10 bg-[#0b1c33] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
    <div className="mb-8 flex h-11 w-11 items-center justify-center rounded-xl bg-sky-500/10 text-sky-400">
      {icons[icon]}
    </div>
    <h3 className="text-lg font-semibold text-white">{title}</h3>
    <p className="mt-2 text-sm leading-6 text-slate-400">{body}</p>
  </article>
);

export default FeatureCard;
