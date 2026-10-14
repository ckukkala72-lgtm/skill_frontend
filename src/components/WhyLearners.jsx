import { whyLearnersContent } from "../data/homeContent";
import Container from "./Container";
import { icons } from "./icons";

const WhyLearners = () => (
  <section className="pb-20">
    <Container>
      <h2 className="text-3xl font-bold text-white md:text-[40px]">
        {whyLearnersContent.title}
      </h2>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {whyLearnersContent.items.map((item) => (
          <div
            key={item}
            className="flex items-center gap-3 rounded-xl border border-white/10 bg-[#0b1c33] px-5 py-4 text-sm font-medium text-slate-200"
          >
            <span className="inline-flex h-5 w-5 shrink-0 text-emerald-400 [&>svg]:h-5 [&>svg]:w-5">
              {icons.check}
            </span>
            {item}
          </div>
        ))}
      </div>
    </Container>
  </section>
);

export default WhyLearners;
