import Button from "./Button";
import RegisterBack from "./RegisterBack";
import { icons } from "./icons";

const LearnerTypeStep = ({ step, selected, onSelect, onContinue, onBack }) => (
  <section>
    {onBack && <RegisterBack onClick={onBack} />}
    <h1 className="text-3xl font-bold text-white md:text-[36px]">
      {step.title}
    </h1>
    <p className="mt-3 text-[15px] text-slate-400">{step.description}</p>

    <div className="mt-8 grid gap-4 md:grid-cols-2">
      {(step.types ?? []).map((type) => {
        const isActive = selected === type.id;
        return (
          <button
            key={type.id}
            type="button"
            onClick={() => onSelect(type.id)}
            className={`rounded-2xl border px-6 py-7 text-left transition ${
              isActive
                ? "border-sky-400 bg-[#0b1c33]"
                : "border-sky-500/20 bg-[#0b1c33] hover:border-sky-500/40"
            }`}
          >
            <div className="flex items-center gap-3">
              <span
                className={`flex h-4 w-4 items-center justify-center rounded-full border ${
                  isActive ? "border-sky-400" : "border-slate-500"
                }`}
              >
                {isActive && (
                  <span className="h-2.5 w-2.5 rounded-full bg-sky-400" />
                )}
              </span>
              <span className="inline-flex text-sky-400 [&>svg]:h-6 [&>svg]:w-6">
                {icons[type.icon]}
              </span>
            </div>
            <h2 className="mt-5 text-xl font-semibold text-white">
              {type.title}
            </h2>
            <p className="mt-2 text-sm leading-6 text-slate-400">{type.body}</p>
          </button>
        );
      })}
    </div>

    <Button
      className="mt-8 gap-2"
      onClick={onContinue}
      type="button"
    >
      {step.continueLabel || "Continue"}
      <span className="inline-flex h-4 w-4 [&>svg]:h-4 [&>svg]:w-4">
        {icons.arrow}
      </span>
    </Button>
  </section>
);

export default LearnerTypeStep;
