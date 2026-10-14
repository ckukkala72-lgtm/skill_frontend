import { programRoadmapPath } from "../data/programTracks";
import Button from "./Button";
import SkillTag from "./SkillTag";
import { icons } from "./icons";

const MetaItem = ({ icon, children }) => (
  <span className="inline-flex items-center gap-2 text-sm text-sky-300">
    <span className="inline-flex h-4 w-4 [&>svg]:h-4 [&>svg]:w-4">{icon}</span>
    {children}
  </span>
);

const ProgramCard = ({ program }) => (
  <article className="flex h-full flex-col rounded-2xl border border-sky-500/20 bg-[#0b1c33] p-6 lg:p-7">
    <div className="flex flex-wrap items-center gap-3">
      <h3 className="text-xl font-semibold text-white">{program.title}</h3>
      <span className="rounded-full border border-sky-500/20 bg-sky-500/10 px-3 py-1 text-xs font-medium text-sky-300">
        {program.level}
      </span>
    </div>

    <p className="mt-4 text-sm leading-6 text-slate-400">{program.body}</p>

    <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2">
      <MetaItem icon={icons.clock}>{program.duration}</MetaItem>
      <MetaItem icon={icons.layers}>{program.modules} modules</MetaItem>
      <MetaItem icon={icons.cap}>{program.targetRoles} target roles</MetaItem>
    </div>

    <p className="mt-6 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
      Key Skills
    </p>
    <div className="mt-3 flex flex-wrap gap-2">
      {program.skills.map((skill) => (
        <SkillTag key={skill}>{skill}</SkillTag>
      ))}
    </div>

    <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
      <Button to={programRoadmapPath(program)} variant="outline" className="w-full">
        {program.roadmapLabel || "View Roadmap"}
      </Button>
      <Button to="/register" className="w-full gap-2">
        Register
        <span className="inline-flex h-4 w-4 [&>svg]:h-4 [&>svg]:w-4">
          {icons.arrow}
        </span>
      </Button>
    </div>
  </article>
);

export default ProgramCard;
