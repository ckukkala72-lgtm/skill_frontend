import { Link } from "react-router-dom";

const variants = {
  primary: "bg-[#2563eb] text-white hover:bg-blue-600",
  outline:
    "border border-white/15 bg-transparent text-white hover:bg-white/5",
  ghost: "text-white/90 hover:text-white hover:bg-white/10",
};

const Button = ({
  children,
  to,
  href,
  onClick,
  type = "button",
  variant = "primary",
  className = "",
}) => {
  const styles = `inline-flex items-center justify-center rounded-full px-3 py-2.5 text-sm font-semibold transition ${variants[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={styles}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={styles}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={styles}>
      {children}
    </button>
  );
};

export default Button;
