import { Link } from "react-router-dom";
import { heroContent } from "../data/homeContent";
import Button from "./Button";
import Container from "./Container";
import { icons } from "./icons";

const Hero = () => (
  <section className="relative overflow-hidden pb-10 pt-6 lg:pt-10">
    <Container>
      <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-sky-400">
            {heroContent.eyebrow}
          </p>
          <h1 className="mt-4 text-5xl font-bold leading-[1.1] tracking-tight text-white md:text-[56px]">
            {heroContent.title}
          </h1>
          <p className="mt-6 max-w-xl text-[17px] leading-7 text-slate-300">
            {heroContent.description}
          </p>

          <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-sky-500/20 bg-sky-500/10 px-4 py-2 text-sm text-sky-100">
            <span className="text-sky-400">{icons.sparkle}</span>
            {heroContent.badge}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button to="/programs" className="gap-2 px-6 py-2.5">
              Explore Courses
              <span className="inline-flex h-4 w-4">{icons.arrow}</span>
            </Button>
            <Button to="/register" variant="outline">
              Register Now
            </Button>
            <Link
              to="/contact"
              className="text-sm font-medium text-slate-300 underline-offset-4 hover:text-white hover:underline"
            >
              Talk to a Career Advisor
            </Link>
          </div>

          <div className="mt-12 flex flex-wrap gap-10">
            {heroContent.stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-4xl font-bold text-sky-400">{stat.value}</p>
                <p className="mt-1 text-sm text-slate-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0b1c33] shadow-2xl shadow-sky-900/20">
            <img
              src={heroContent.image}
              alt={heroContent.imageAlt}
              className="h-[340px] w-full object-cover lg:h-[420px]"
            />
          </div>
          <div className="absolute bottom-4 left-4 max-w-[260px] rounded-xl border border-white/10 bg-[#07111f]/95 px-4 py-3 shadow-lg">
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-sky-400">
              {heroContent.outcomeLabel}
            </p>
            <p className="mt-1 text-sm font-semibold text-white">
              {heroContent.outcomeText}
            </p>
          </div>
        </div>
      </div>
    </Container>
  </section>
);

export default Hero;
