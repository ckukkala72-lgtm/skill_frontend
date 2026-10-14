import { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sendRegistration } from "../store/slices/registerSlice";
import RegisterBack from "./RegisterBack";
import RegisterField from "./RegisterField";
import { icons } from "./icons";

const RegistrationForm = ({
  config,
  learnerType,
  program,
  onChangeProgram,
  onBack,
}) => {
  const dispatch = useDispatch();
  const { submitStatus, submitError } = useSelector((state) => state.register);
  const isStudent = learnerType === "student";
  const sections = isStudent
    ? config.studentSections
    : config.professionalSections;
  const title = isStudent ? config.studentTitle : config.professionalTitle;

  const initialAnswers = useMemo(() => {
    const values = {};
    (sections ?? []).forEach((section) => {
      section.fields.forEach((field) => {
        values[field.name] = "";
      });
    });
    return values;
  }, [sections]);

  const [answers, setAnswers] = useState(initialAnswers);
  const [resumeName, setResumeName] = useState("");
  const [consent, setConsent] = useState(false);

  const onChange = (event) => {
    const { name, type, files, value } = event.target;
    if (type === "file") {
      setResumeName(files?.[0]?.name || "");
      return;
    }
    setAnswers((current) => ({ ...current, [name]: value }));
  };

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(
      sendRegistration({
        learnerType,
        program: program.title,
        answers,
        resumeName,
        consent,
      })
    );
  };

  if (submitStatus === "succeeded") {
    return (
      <div className="rounded-2xl border border-sky-500/20 bg-[#0b1c33] p-8">
        {onBack && <RegisterBack onClick={onBack} />}
        <h2 className="text-2xl font-bold text-white">You are registered</h2>
        <p className="mt-3 text-sm leading-6 text-slate-400">
          Thanks for starting your {program.title} journey. SkilVantage will
          contact you with the next steps.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-2xl border border-sky-500/25 bg-[#0b1c33] p-6 lg:p-8"
    >
      {onBack && <RegisterBack onClick={onBack} />}
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-white">{title}</h2>
          <p className="mt-2 text-sm text-slate-400">
            {config.programLabel}{" "}
            <span className="font-medium text-sky-400">{program.title}</span>
          </p>
        </div>
        <button
          type="button"
          onClick={onChangeProgram}
          className="rounded-full border border-white/20 px-4 py-1.5 text-sm text-slate-200 hover:border-white/40"
        >
          {config.changeLabel || "Change"}
        </button>
      </div>

      {(sections ?? []).map((section) => (
        <div key={section.id} className="mt-8">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-sky-400">
            {section.title}
          </p>
          <div className="mt-4 h-px bg-white/10" />
          <div className="mt-5 grid gap-5 sm:grid-cols-2">
            {section.fields.map((field) => (
              <RegisterField
                key={field.name}
                field={field}
                value={
                  field.type === "file" ? resumeName : answers[field.name]
                }
                onChange={onChange}
              />
            ))}
          </div>
        </div>
      ))}

      <label className="mt-8 flex items-start gap-3 rounded-xl border border-white/10 px-4 py-3 text-sm leading-6 text-slate-300">
        <input
          type="checkbox"
          className="mt-1 h-4 w-4 accent-sky-500"
          checked={consent}
          onChange={(event) => setConsent(event.target.checked)}
          required
        />
        {config.consentLabel}
      </label>

      {submitStatus === "failed" && (
        <p className="mt-4 text-sm text-red-300">{submitError}</p>
      )}

      <button
        type="submit"
        disabled={submitStatus === "loading"}
        className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#2563eb] px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-600 disabled:opacity-60"
      >
        {submitStatus === "loading"
          ? "Submitting..."
          : config.submitLabel || "Start My Career Journey"}
        <span className="inline-flex h-4 w-4 [&>svg]:h-4 [&>svg]:w-4">
          {icons.arrow}
        </span>
      </button>
    </form>
  );
};

export default RegistrationForm;
