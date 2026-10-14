import { careerMultiplierContent } from "../data/homeContent";
import Button from "./Button";
import Container from "./Container";
import SectionEyebrow from "./SectionEyebrow";
import { icons } from "./icons";

const CareerMultiplier = () => (
  <section className="pb-16 lg:pb-20">
    <Container>
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div>
          <SectionEyebrow>{careerMultiplierContent.eyebrow}</SectionEyebrow>
          <h2 className="max-w-md text-3xl font-bold leading-tight text-white md:text-[40px]">
            {careerMultiplierContent.title}
          </h2>
          <blockquote className="mt-6 max-w-lg border-l-2 border-sky-400 pl-4 text-[15px] italic leading-7 text-slate-300">
            “{careerMultiplierContent.quote}”
          </blockquote>
          <p className="mt-4 text-sm text-slate-400">
            {careerMultiplierContent.description}
          </p>
          <Button to={careerMultiplierContent.cta.to} className="mt-7 gap-2">
            <span className="inline-flex h-4 w-4 [&>svg]:h-4 [&>svg]:w-4">
              {icons.chat}
            </span>
            {careerMultiplierContent.cta.label}
          </Button>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {careerMultiplierContent.skills.map((skill) => (
            <div
              key={skill}
              className="rounded-xl border border-white/10 bg-[#0b1c33] px-5 py-3.5 text-sm font-medium text-slate-200"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </Container>
  </section>
);

export default CareerMultiplier;
