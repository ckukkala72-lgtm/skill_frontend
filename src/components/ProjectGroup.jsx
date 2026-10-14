import { Link } from "react-router-dom";
import ProjectCard from "./ProjectCard";
import { icons } from "./icons";

const ProjectGroup = ({ group }) => (
  <section className="mt-14">
    <div className="flex flex-wrap items-end justify-between gap-3">
      <h2 className="text-2xl font-bold text-white md:text-[28px]">
        {group.title}
      </h2>
      <Link
        to={group.programPath || "/programs"}
        className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-sky-400 hover:text-sky-300"
      >
        {group.programLabel || "View Program"}
        <span className="inline-flex h-3.5 w-3.5 [&>svg]:h-3.5 [&>svg]:w-3.5">
          {icons.arrow}
        </span>
      </Link>
    </div>
    <div className="mt-5 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {(group.projects ?? []).map((project) => (
        <ProjectCard key={project.title} project={project} />
      ))}
    </div>
  </section>
);

export default ProjectGroup;
