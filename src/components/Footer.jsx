import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { footerContent } from "../data/footerContent";
import Container from "./Container";
import Logo from "./Logo";

const Footer = () => {
  const header = useSelector((state) => state.header.data);
  const brandName = header?.brandName || "SkilVantage";
  const exploreLinks =
    header?.navItems
      ?.filter((item) => item.path !== "/")
      .sort((a, b) => a.order - b.order) ?? footerContent.exploreLinks;

  return (
    <footer className="border-t border-white/10 bg-[#07111f]">
      <Container className="py-12 lg:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_0.8fr]">
          <div className="max-w-md">
            <Link to="/" aria-label={brandName}>
              <Logo brandName={brandName} className="text-sky-400" />
            </Link>
            <p className="mt-5 text-sm leading-6 text-slate-400">
              {footerContent.description}
            </p>
            <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-sky-400">
              {footerContent.highlight}
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white">
              {footerContent.exploreTitle}
            </h3>
            <ul className="mt-4 space-y-2.5">
              {exploreLinks.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-sm text-slate-400 transition hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white">
              {footerContent.contactTitle}
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm text-slate-400">
              <li>
                <a
                  href={footerContent.phoneHref}
                  className="transition hover:text-white"
                >
                  {footerContent.phone}
                </a>
              </li>
              <li>
                <a
                  href={footerContent.emailHref}
                  className="transition hover:text-white"
                >
                  {footerContent.email}
                </a>
              </li>
              <li>{footerContent.location}</li>
              <li>
                <Link
                  to={footerContent.adminPath}
                  className="transition hover:text-white"
                >
                  {footerContent.adminLabel}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container>
          <p className="py-5 text-center text-xs text-slate-500">
            {footerContent.copyright}
          </p>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
