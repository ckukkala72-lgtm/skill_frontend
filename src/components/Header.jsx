import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadHeader } from "../store/slices/headerSlice";
import Logo from "./Logo";
import NavItem from "./NavItem";
import Button from "./Button";

const Header = () => {
  const dispatch = useDispatch();
  const { data, status, error } = useSelector((state) => state.header);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (status === "idle") {
      dispatch(loadHeader());
    }
  }, [dispatch, status]);

  const navItems = data?.navItems ?? [];

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-[#07111f]/95 backdrop-blur">
      <div>
        <div className="mx-auto flex h-[72px] max-w-[1180px] items-center justify-between px-5 lg:px-8">
          <Logo brandName={data?.brandName || "SkilVantage"} />

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
            {status === "loading" && (
              <span className="text-sm text-slate-300">Loading menu...</span>
            )}
            {status === "failed" && (
              <span className="text-sm text-red-300">{error}</span>
            )}
            {navItems.map((item) => (
              <NavItem key={item.path} item={item} />
            ))}
          </nav>

          <div className="flex items-center gap-3">
            {data?.cta && (
              <Button to={data.cta.path} className="hidden sm:inline-flex">
                {data.cta.label}
              </Button>
            )}
            <button
              type="button"
              className="rounded-md p-2 text-white lg:hidden"
              onClick={() => setMenuOpen((open) => !open)}
              aria-label="Toggle navigation"
            >
              <span className="block h-0.5 w-5 bg-white" />
              <span className="mt-1 block h-0.5 w-5 bg-white" />
              <span className="mt-1 block h-0.5 w-5 bg-white" />
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="space-y-2 border-t border-white/10 px-5 py-4 lg:hidden">
            {navItems.map((item) => (
              <NavItem key={item.path} item={item} />
            ))}
            {data?.cta && (
              <Button to={data.cta.path} className="mt-2 w-full">
                {data.cta.label}
              </Button>
            )}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
