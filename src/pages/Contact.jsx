import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ContactDetailCard from "../components/ContactDetailCard";
import ContactEnquiryForm from "../components/ContactEnquiryForm";
import Container from "../components/Container";
import SectionEyebrow from "../components/SectionEyebrow";
import { icons } from "../components/icons";
import { loadContact } from "../store/slices/contactSlice";

const Contact = () => {
  const dispatch = useDispatch();
  const { data, status, error } = useSelector((state) => state.contact);

  useEffect(() => {
    if (status === "idle") {
      dispatch(loadContact());
    }
  }, [dispatch, status]);

  return (
    <section className="pt-12 pb-20 lg:pt-16">
      <Container>
        <SectionEyebrow>{data?.eyebrow || "Contact"}</SectionEyebrow>
        <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-white md:text-[48px]">
          {data?.title || "Talk to SkilVantage"}
        </h1>
        <p className="mt-5 max-w-2xl text-[17px] leading-7 text-slate-400">
          {data?.description ||
            "Course enquiry or career counselling — tell us where you are and we will help you choose the right track."}
        </p>

        {status === "loading" && (
          <p className="mt-10 text-sm text-slate-400">Loading contact...</p>
        )}
        {status === "failed" && (
          <p className="mt-10 text-sm text-red-300">{error}</p>
        )}

        {data && (
          <div className="mt-12 grid items-start gap-5 lg:grid-cols-[0.85fr_1.15fr]">
            <div className="flex flex-col gap-4">
              <ContactDetailCard icon="phone" label={data.phoneLabel}>
                <a href={data.phoneHref} className="hover:text-sky-300">
                  {data.phone}
                </a>
              </ContactDetailCard>
              <ContactDetailCard icon="mail" label={data.emailLabel}>
                <a href={data.emailHref} className="hover:text-sky-300">
                  {data.email}
                </a>
              </ContactDetailCard>
              <ContactDetailCard icon="pin" label={data.locationLabel}>
                {data.location}
              </ContactDetailCard>
              <a
                href={data.whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-emerald-500/30 bg-emerald-950/40 px-5 py-3.5 text-sm font-semibold text-emerald-400 transition hover:bg-emerald-950/70"
              >
                <span className="inline-flex h-5 w-5 [&>svg]:h-5 [&>svg]:w-5">
                  {icons.chat}
                </span>
                {data.whatsappLabel}
              </a>
            </div>
            <ContactEnquiryForm page={data} />
          </div>
        )}
      </Container>
    </section>
  );
};

export default Contact;
