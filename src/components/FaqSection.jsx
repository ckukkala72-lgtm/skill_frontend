import { useState } from "react";
import { faqContent } from "../data/faqContent";
import Container from "./Container";
import FaqItem from "./FaqItem";

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="pb-20">
      <Container>
        <h2 className="text-center text-3xl font-bold text-white md:text-[40px]">
          {faqContent.title}
        </h2>
        <div className="mx-auto mt-8 max-w-4xl overflow-hidden rounded-2xl border border-white/10 bg-[#0b1c33]">
          {faqContent.items.map((item, index) => (
            <FaqItem
              key={item.question}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === index}
              onToggle={() =>
                setOpenIndex((current) => (current === index ? null : index))
              }
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default FaqSection;
