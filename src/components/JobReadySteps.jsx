import { jobReadyContent } from "../data/homeContent";
import Button from "./Button";
import Container from "./Container";
import { icons } from "./icons";

const JobReadySteps = () => (
  <section className="pb-16 lg:pb-20">
    <Container>
      <h2 className="text-3xl font-bold text-white md:text-[40px]">
        {jobReadyContent.title}
      </h2>
      <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
        {jobReadyContent.steps.map((step) => (
          <article
            key={step.number}
            className="rounded-2xl border border-white/10 bg-[#0b1c33] px-4 py-5"
          >
            <p className="text-xs font-semibold text-sky-400">{step.number}</p>
            <div className="mt-5 text-sky-400">{icons[step.icon]}</div>
            <h3 className="mt-4 text-sm font-semibold text-white">
              {step.label}
            </h3>
          </article>
        ))}
      </div>
      <Button to={jobReadyContent.cta.to} variant="outline" className="mt-8 gap-2">
        {jobReadyContent.cta.label}
        <span className="inline-flex h-4 w-4 [&>svg]:h-4 [&>svg]:w-4">
          {icons.arrow}
        </span>
      </Button>
    </Container>
  </section>
);

export default JobReadySteps;
