import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadCareerPaths } from "../store/slices/careerPathSlice";
import Container from "./Container";
import ProgramCard from "./ProgramCard";

const ProgramCatalog = () => {
  const dispatch = useDispatch();
  const { data, status, error } = useSelector((state) => state.careerPaths);

  useEffect(() => {
    if (status === "idle") {
      dispatch(loadCareerPaths());
    }
  }, [dispatch, status]);

  const programs = data?.programs ?? [];

  return (
    <section className="pb-20 pt-4">
      
      <Container>
        {status === "loading" && (
          <p className="text-sm text-slate-400">Loading programs...</p>
        )}
        {status === "failed" && (
          <p className="text-sm text-red-300">{error}</p>
        )}
        <div className="grid gap-5 lg:grid-cols-2">
          {programs.map((program) => (
            <ProgramCard key={program.title} program={program} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ProgramCatalog;
