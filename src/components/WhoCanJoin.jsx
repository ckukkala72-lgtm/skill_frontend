import { Link } from "react-router-dom";
import { audienceContent } from "../data/homeContent";
import CheckItem from "./CheckItem";
import Container from "./Container";
import { icons } from "./icons";

const WhoCanJoin = () => (
  <section className="pb-16 lg:pb-20">
    <Container>
      <h2 className="text-3xl font-bold text-white md:text-[40px]">
        {audienceContent.title}
      </h2>
      <div className="mt-8 grid gap-5 lg:grid-cols-2">
        {audienceContent.tracks.map((track) => (
          <article
            key={track.title}
            className="flex flex-col rounded-2xl border border-white/10 bg-[#0b1c33] p-7"
          >
            <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-xl bg-sky-500/10 text-sky-400">
              {icons[track.icon]}
            </div>
            <h3 className="text-2xl font-semibold text-white">{track.title}</h3>
            <ul className="mt-6 space-y-3">
              {track.items.map((item) => (
                <CheckItem key={item}>{item}</CheckItem>
              ))}
            </ul>
            <Link
              to={track.to}
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-sky-300 transition hover:bg-white/10"
            >
              {track.cta}
              <span className="inline-flex h-4 w-4">{icons.arrow}</span>
            </Link>
          </article>
        ))}
      </div>
    </Container>
  </section>
);

export default WhoCanJoin;
