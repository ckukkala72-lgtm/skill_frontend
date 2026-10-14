import Button from "./Button";
import { icons } from "./icons";

const ProjectCta = ({ cta }) => {
  if (!cta?.title) return null;

  return (
    <section className="mt-16 rounded-2xl border border-sky-500/15 bg-[#0b1c33] px-6 py-12 text-center lg:px-10">
      <h2 className="text-2xl font-bold tracking-tight text-white md:text-[32px]">
        {cta.title}
      </h2>
      <Button to={cta.buttonPath || "/register"} className="mt-6 gap-2">
        {cta.buttonLabel || "Start Learning"}
        <span className="inline-flex h-4 w-4 [&>svg]:h-4 [&>svg]:w-4">
          {icons.arrow}
        </span>
      </Button>
    </section>
  );
};

export default ProjectCta;
