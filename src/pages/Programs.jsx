import Container from "../components/Container";
import ProgramCatalog from "../components/ProgramCatalog";
import SectionEyebrow from "../components/SectionEyebrow";

const Programs = () => (
  <>
    <section className="pt-12 pb-6 lg:pt-16">
      <Container>
        <SectionEyebrow>Career Programs</SectionEyebrow>
        <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-white md:text-[48px]">
          Choose Your Career Path
        </h1>
        <p className="mt-5 max-w-3xl text-[17px] leading-7 text-slate-400">
          Five industry-shaped programs, each running from beginner to advanced.
          Every one ends the same way: real-time projects, portfolio, resume,
          interview practice and job readiness.
        </p>
      </Container>
    </section>
    <ProgramCatalog />
  </>
);

export default Programs;
