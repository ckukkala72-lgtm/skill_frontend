import { icons } from "./icons";

const ProjectCard = ({ project }) => (
  <article className="rounded-2xl border border-sky-500/20 bg-[#0b1c33] p-5 lg:p-6">
    <div className="mb-8 inline-flex text-sky-400 [&>svg]:h-6 [&>svg]:w-6">
      {icons[project.icon] || icons.folder}
    </div>
    <h3 className="text-[17px] font-semibold text-white">{project.title}</h3>
    <p className="mt-3 text-sm leading-6 text-slate-400">{project.body}</p>
  </article>
);

export default ProjectCard;
