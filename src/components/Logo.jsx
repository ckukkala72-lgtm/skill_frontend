const GraduationCapIcon = ({ className }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <path
      d="M3 9.5 12 5l9 4.5-9 4.5L3 9.5Z"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinejoin="round"
    />
    <path
      d="M7 11.5v4.2c0 .4.2.8.6 1 1.7.9 3.5 1.3 4.4 1.3s2.7-.4 4.4-1.3c.4-.2.6-.6.6-1v-4.2"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
    />
    <path
      d="M21 10v6"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
    />
  </svg>
);

const Logo = ({ brandName = "SkilVantage", className = "" }) => (
  <div className={`flex items-center gap-2 text-white ${className}`}>
    <GraduationCapIcon className="h-6 w-6 shrink-0" />
    <span className="text-[22px] font-semibold tracking-tight">
      {brandName}
    </span>
  </div>
);

export default Logo;
