import { whyContent } from "../data/homeContent";
import Container from "./Container";
import FeatureCard from "./FeatureCard";
import SectionEyebrow from "./SectionEyebrow";

const WhySection = () => (
  <section className="py-16 lg:py-20">
    <Container>
      <SectionEyebrow>{whyContent.eyebrow}</SectionEyebrow>
      <h2 className="max-w-4xl text-3xl font-bold leading-tight text-white md:text-[40px]">
        {whyContent.title}
      </h2>
      <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {whyContent.items.map((item) => (
          <FeatureCard key={item.title} {...item} />
        ))}
      </div>
    </Container>
  </section>
);

export default WhySection;
