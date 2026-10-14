import RegisterBack from "./RegisterBack";

const ProgramSelectStep = ({ title, programs, onSelect, onBack }) => (
  <section>
    {onBack && <RegisterBack onClick={onBack} />}
    <h1 className="text-3xl font-bold text-white md:text-[36px]">{title}</h1>
    <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {programs.map((program) => (
        <button
          key={program.title}
          type="button"
          onClick={() => onSelect(program)}
          className="rounded-2xl border border-sky-500/20 bg-[#0b1c33] p-6 text-left transition hover:border-sky-400"
        >
          <h2 className="text-lg font-semibold text-white">{program.title}</h2>
          <p className="mt-3 text-sm leading-6 text-slate-400">{program.body}</p>
          <p className="mt-5 text-xs font-semibold uppercase tracking-[0.16em] text-sky-400">
            {program.duration}
          </p>
        </button>
      ))}
    </div>
  </section>
);

export default ProgramSelectStep;
