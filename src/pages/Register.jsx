import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Container from "../components/Container";
import LearnerTypeStep from "../components/LearnerTypeStep";
import ProgramSelectStep from "../components/ProgramSelectStep";
import RegistrationForm from "../components/RegistrationForm";
import { loadCareerPaths } from "../store/slices/careerPathSlice";
import { loadRegister, resetSubmit } from "../store/slices/registerSlice";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { data, status, error } = useSelector((state) => state.register);
  const careerPaths = useSelector((state) => state.careerPaths);
  const [step, setStep] = useState("learner");
  const [learnerType, setLearnerType] = useState("student");
  const [program, setProgram] = useState(null);

  useEffect(() => {
    if (status === "idle") {
      dispatch(loadRegister());
    }
    if (careerPaths.status === "idle") {
      dispatch(loadCareerPaths());
    }
  }, [dispatch, status, careerPaths.status]);

  const programs = careerPaths.data?.programs ?? [];

  return (
    <section className="pt-12 pb-20 lg:pt-16">
      <Container>
        {status === "loading" && (
          <p className="text-sm text-slate-400">Loading registration...</p>
        )}
        {status === "failed" && (
          <p className="text-sm text-red-300">{error}</p>
        )}

        {data && step === "learner" && (
          <LearnerTypeStep
            step={data.learnerStep}
            selected={learnerType}
            onSelect={setLearnerType}
            onContinue={() => learnerType && setStep("program")}
            onBack={() => navigate("/")}
          />
        )}

        {data && step === "program" && (
          <>
            {careerPaths.status === "loading" && programs.length === 0 && (
              <p className="text-sm text-slate-400">Loading programs...</p>
            )}
            <ProgramSelectStep
              title={data.programStep?.title || "Select Your Program"}
              programs={programs}
              onBack={() => setStep("learner")}
              onSelect={(selected) => {
                setProgram(selected);
                dispatch(resetSubmit());
                setStep("form");
              }}
            />
          </>
        )}

        {data && step === "form" && program && (
          <RegistrationForm
            config={data.form}
            learnerType={learnerType}
            program={program}
            onChangeProgram={() => setStep("program")}
            onBack={() => setStep("program")}
          />
        )}
      </Container>
    </section>
  );
};

export default Register;
