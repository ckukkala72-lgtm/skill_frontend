import { icons } from "./icons";

const CheckItem = ({ children }) => (
  <li className="flex items-center gap-3 text-[15px] text-slate-300">
    <span className="inline-flex h-5 w-5 shrink-0 text-sky-400 [&>svg]:h-5 [&>svg]:w-5">
      {icons.check}
    </span>
    {children}
  </li>
);

export default CheckItem;
