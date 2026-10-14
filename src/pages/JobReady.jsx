import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Container from "../components/Container";
import JobReadyIncluded from "../components/JobReadyIncluded";
import JobReadyStepCard from "../components/JobReadyStepCard";
import SectionEyebrow from "../components/SectionEyebrow";
import { loadJobReady } from "../store/slices/jobReadySlice";

const JobReady = () => {
  const dispatch = useDispatch();
  const { data, status, error } = useSelector((state) => state.jobReady);

  useEffect(() => {
    if (status === "idle") {
      dispatch(loadJobReady());
    }
  }, [dispatch, status]);

  return (
    <section className="pt-12 pb-20 lg:pt-16">
      <Container>
        <SectionEyebrow>{data?.eyebrow || "Job Readiness"}</SectionEyebrow>
        <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-white md:text-[48px]">
          {data?.title || "Become Job Ready"}
        </h1>
        <p className="mt-5 max-w-2xl text-[17px] leading-7 text-slate-400">
          {data?.description ||
            "Technical skills get you started. Communication skills help you succeed. Our six-step process turns learning into hire-ready capability."}
        </p>

        {status === "loading" && (
          <p className="mt-10 text-sm text-slate-400">Loading job readiness...</p>
        )}
        {status === "failed" && (
          <p className="mt-10 text-sm text-red-300">{error}</p>
        )}

        {(data?.steps ?? []).length > 0 && (
          <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {data.steps.map((step) => (
              <JobReadyStepCard key={step.number} step={step} />
            ))}
          </div>
        )}

        {(data?.included ?? []).length > 0 && (
          <JobReadyIncluded
            title={data.includedTitle || "What is included"}
            items={data.included}
            disclaimer={data.disclaimer}
          />
        )}
      </Container>
    </section>
  );
};

export default JobReady;
