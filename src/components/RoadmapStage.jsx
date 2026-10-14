import SkillTag from "./SkillTag";

const RoadmapStage = ({ stage, showConnector }) => (
  <div>
    <article className="rounded-2xl border border-sky-500/20 bg-[#0b1c33] p-6">
      <div className="flex items-center gap-3">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-sky-500/10 text-xs font-semibold text-sky-300">
          {stage.number}
        </span>
        <h3 className="text-lg font-semibold uppercase tracking-wide text-white">
          {stage.title}
        </h3>
      </div>
      {stage.body && (
        <p className="mt-4 text-sm leading-6 text-slate-400">{stage.body}</p>
      )}
      {stage.skills?.length > 0 && (
        <div className="mt-5 flex flex-wrap gap-2">
          {stage.skills.map((skill) => (
            <SkillTag key={skill}>{skill}</SkillTag>
          ))}
        </div>
      )}
    </article>
    {showConnector && (
      <div className="flex justify-center py-2 text-sky-400" aria-hidden="true">
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    )}
  </div>
);

export default RoadmapStage;
