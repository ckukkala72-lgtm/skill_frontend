import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { programRoadmapPath } from "../data/programTracks";
import { loadCareerPaths } from "../store/slices/careerPathSlice";
import Button from "./Button";
import Container from "./Container";
import SectionEyebrow from "./SectionEyebrow";
import SkillTag from "./SkillTag";
import { icons } from "./icons";

const CareerPaths = ({ hideIntro = false }) => {
  const dispatch = useDispatch();
  const { data, status, error } = useSelector((state) => state.careerPaths);

  useEffect(() => {
    if (status === "idle") {
      dispatch(loadCareerPaths());
    }
  }, [dispatch, status]);

  const programs = data?.programs ?? [];

  return (
    <section className="pb-20">
      <Container>
        {!hideIntro && (
          <>
            <SectionEyebrow>
              {data?.eyebrow || "Five core career programs"}
            </SectionEyebrow>
            <h2 className="text-3xl font-bold text-white md:text-[40px]">
              {data?.title || "Choose Your Career Path"}
            </h2>
          </>
        )}

        {status === "loading" && (
          <p className="mt-8 text-sm text-slate-400">Loading career paths...</p>
        )}
        {status === "failed" && (
          <p className="mt-8 text-sm text-red-300">{error}</p>
        )}

        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {programs.map((program) => (
            <article
              key={program.title}
              className="flex flex-col rounded-2xl border border-white/10 bg-[#0b1c33] p-6"
            >
              <div className="flex items-start justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-sky-500/10 text-sky-400">
                  {icons[program.icon] || icons.chart}
                </div>
                <span className="rounded-full border border-sky-500/20 bg-sky-500/10 px-3 py-1 text-xs font-medium text-sky-200">
                  {program.duration}
                </span>
              </div>
              <h3 className="mt-6 text-xl font-semibold text-white">
                {program.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-6 text-slate-400">
                {program.body}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {program.skills.map((skill) => (
                  <SkillTag key={skill}>{skill}</SkillTag>
                ))}
              </div>
              <div className="mt-6 grid grid-cols-2 gap-3">
                <Button
                  to={programRoadmapPath(program)}
                  variant="outline"
                  className="w-full"
                >
                  View Roadmap
                </Button>
                <Button to="/register" className="w-full">
                  Register
                </Button>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default CareerPaths;
