import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AboutHighlight from "../components/AboutHighlight";
import Button from "../components/Button";
import Container from "../components/Container";
import SectionEyebrow from "../components/SectionEyebrow";
import { icons } from "../components/icons";
import { loadAbout } from "../store/slices/aboutSlice";

const About = () => {
  const dispatch = useDispatch();
  const { data, status, error } = useSelector((state) => state.about);

  useEffect(() => {
    if (status === "idle") {
      dispatch(loadAbout());
    }
  }, [dispatch, status]);

  return (
    <section className="pt-12 pb-20 lg:pt-16">
      <Container>
        <SectionEyebrow>{data?.eyebrow || "About Us"}</SectionEyebrow>
        <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-white md:text-[48px]">
          {data?.title || "About SkilVantage"}
        </h1>
        <p className="mt-5 max-w-3xl text-[17px] leading-7 text-slate-400">
          {data?.description ||
            "SkilVantage is a career-focused technology training consultancy designed to bridge the gap between academic learning and industry expectations."}
        </p>

        {status === "loading" && (
          <p className="mt-10 text-sm text-slate-400">Loading about...</p>
        )}
        {status === "failed" && (
          <p className="mt-10 text-sm text-red-300">{error}</p>
        )}

        {(data?.storyTitle || data?.highlights?.length) && (
          <div className="mt-16 grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="max-w-md text-3xl font-bold leading-tight text-white md:text-[40px]">
                {data.storyTitle}
              </h2>
              {(data.story ?? []).map((paragraph) => (
                <p
                  key={paragraph}
                  className="mt-5 text-[15px] leading-7 text-slate-400"
                >
                  {paragraph}
                </p>
              ))}
              {data.quote && (
                <p className="mt-6 border-l-2 border-sky-400 pl-4 text-[15px] italic leading-7 text-slate-300">
                  &ldquo;{data.quote}&rdquo;
                </p>
              )}
              {data.cta?.label && (
                <Button to={data.cta.path || "/programs"} className="mt-7 gap-2">
                  {data.cta.label}
                  <span className="inline-flex h-4 w-4 [&>svg]:h-4 [&>svg]:w-4">
                    {icons.arrow}
                  </span>
                </Button>
              )}
            </div>
            <div className="flex flex-col gap-3">
              {(data.highlights ?? []).map((item) => (
                <AboutHighlight key={item.title} item={item} />
              ))}
            </div>
          </div>
        )}
      </Container>
    </section>
  );
};

export default About;
