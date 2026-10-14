import { NavLink } from "react-router-dom";

const NavItem = ({ item }) => (
  <NavLink
    to={item.path}
    end={item.path === "/"}
    className={({ isActive }) =>
      [
        "rounded-lg px-3.5 py-1.5 text-[15px] font-medium transition",
        isActive
          ? "bg-[#1a365d] text-white"
          : "text-slate-200 hover:text-white hover:bg-white/5",
      ].join(" ")
    }
  >
    {item.label}
  </NavLink>
);

export default NavItem;
