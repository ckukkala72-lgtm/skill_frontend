import { icons } from "./icons";

const ContactDetailCard = ({ icon, label, children }) => (
  <article className="rounded-2xl border border-sky-500/20 bg-[#0b1c33] px-5 py-5">
    <span className="inline-flex text-sky-400 [&>svg]:h-6 [&>svg]:w-6">
      {icons[icon]}
    </span>
    <p className="mt-6 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
      {label}
    </p>
    <div className="mt-2 text-[15px] font-medium text-white">{children}</div>
  </article>
);

export default ContactDetailCard;
