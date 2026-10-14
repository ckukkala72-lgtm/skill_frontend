import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Container from "../components/Container";
import ProjectCta from "../components/ProjectCta";
import ProjectGroup from "../components/ProjectGroup";
import SectionEyebrow from "../components/SectionEyebrow";
import { loadProjects } from "../store/slices/projectSlice";

const Projects = () => {
  const dispatch = useDispatch();
  const { data, status, error } = useSelector((state) => state.projects);

  useEffect(() => {
    if (status === "idle") {
      dispatch(loadProjects());
    }
  }, [dispatch, status]);

  return (
    <section className="pt-12 pb-20 lg:pt-16">
      <Container>
        <SectionEyebrow>{data?.eyebrow || "Projects"}</SectionEyebrow>
        <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-white md:text-[48px]">
          {data?.title || "Build Real-Time Projects"}
        </h1>
        <p className="mt-5 max-w-2xl text-[17px] leading-7 text-slate-400">
          {data?.description ||
            'Every program takes you from beginner to advanced through real-time projects on live datasets — so you can answer the interviewer\'s first question: "What have you built?"'}
        </p>

        {status === "loading" && (
          <p className="mt-10 text-sm text-slate-400">Loading projects...</p>
        )}
        {status === "failed" && (
          <p className="mt-10 text-sm text-red-300">{error}</p>
        )}

        {(data?.groups ?? []).map((group) => (
          <ProjectGroup key={group.slug || group.title} group={group} />
        ))}

        <ProjectCta cta={data?.cta} />
      </Container>
    </section>
  );
};

export default Projects;
