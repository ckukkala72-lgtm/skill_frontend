import { icons } from "./icons";

const JobReadyStepCard = ({ step }) => (
  <article className="rounded-2xl border border-sky-500/20 bg-[#0b1c33] p-6">
    <div className="flex items-start justify-between">
      <span className="inline-flex text-sky-400 [&>svg]:h-7 [&>svg]:w-7">
        {icons[step.icon] || icons.cap}
      </span>
      <span className="text-sm font-medium text-sky-500/80">{step.number}</span>
    </div>
    <h3 className="mt-8 text-lg font-semibold text-white">{step.title}</h3>
    <p className="mt-3 text-sm leading-6 text-slate-400">{step.body}</p>
  </article>
);

export default JobReadyStepCard;
