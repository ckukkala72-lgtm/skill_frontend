import { icons } from "./icons";

const RegisterBack = ({ onClick, label = "Back" }) => (
  <button
    type="button"
    onClick={onClick}
    className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-slate-300 transition hover:text-white"
  >
    <span className="inline-flex h-4 w-4 rotate-180 [&>svg]:h-4 [&>svg]:w-4">
      {icons.arrow}
    </span>
    {label}
  </button>
);

export default RegisterBack;
