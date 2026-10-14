const wrap = (children) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    className="h-6 w-6"
    stroke="currentColor"
    strokeWidth="1.7"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    {children}
  </svg>
);

export const icons = {
  layers: wrap(
    <>
      <path d="M12 3 4 7.5 12 12l8-4.5L12 3Z" />
      <path d="M4 12.5 12 17l8-4.5" />
      <path d="M4 16.5 12 21l8-4.5" />
    </>
  ),
  folder: wrap(
    <>
      <path d="M4 7.5A2 2 0 0 1 6 5.5h4l1.5 2H18a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-10Z" />
      <path d="M9 13h6" />
    </>
  ),
  target: wrap(
    <>
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="12" cy="12" r="1" fill="currentColor" />
    </>
  ),
  chat: wrap(
    <>
      <path d="M6 18.5 4 21V8a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v7.5a3 3 0 0 1-3 3H8.5L6 18.5Z" />
      <path d="M8.5 10.5h7M8.5 13.5h4" />
    </>
  ),
  mic: wrap(
    <>
      <rect x="9" y="4" width="6" height="10" rx="3" />
      <path d="M6.5 11.5a5.5 5.5 0 0 0 11 0M12 17v3M9 20h6" />
    </>
  ),
  user: wrap(
    <>
      <circle cx="12" cy="8" r="3.2" />
      <path d="M5.5 19.5c1.2-3.2 3.4-4.8 6.5-4.8s5.3 1.6 6.5 4.8" />
    </>
  ),
  cap: wrap(
    <>
      <path d="M3 10 12 5.5 21 10 12 14.5 3 10Z" />
      <path d="M7 12v4.2c1.8 1.2 3.4 1.8 5 1.8s3.2-.6 5-1.8V12" />
      <path d="M21 10.5V16" />
    </>
  ),
  briefcase: wrap(
    <>
      <rect x="3.5" y="8" width="17" height="11" rx="2" />
      <path d="M9 8V6.5A1.5 1.5 0 0 1 10.5 5h3A1.5 1.5 0 0 1 15 6.5V8" />
      <path d="M3.5 13h17" />
    </>
  ),
  chart: wrap(
    <>
      <path d="M4 19h16" />
      <path d="M7 16v-4M12 16V8M17 16v-7" />
    </>
  ),
  network: wrap(
    <>
      <circle cx="12" cy="6" r="2.2" />
      <circle cx="6" cy="17" r="2.2" />
      <circle cx="18" cy="17" r="2.2" />
      <path d="M10.4 7.6 7.4 15M13.6 7.6l3 7.4M8.2 17h7.6" />
    </>
  ),
  spark: wrap(
    <>
      <path d="M12 3v4M12 17v4M4.5 7.5l3 2M16.5 14.5l3 2M4.5 16.5l3-2M16.5 9.5l3-2" />
      <circle cx="12" cy="12" r="3.2" />
    </>
  ),
  sparkle: wrap(
    <>
      <path d="M12 4.5 13.2 9 18 10.2 13.2 11.4 12 16 10.8 11.4 6 10.2 10.8 9 12 4.5Z" />
    </>
  ),
  check: wrap(
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="m8.5 12.2 2.3 2.3 4.7-4.8" />
    </>
  ),
  clock: wrap(
    <>
      <circle cx="12" cy="12" r="8" />
      <path d="M12 8v4.5l2.5 1.5" />
    </>
  ),
  file: wrap(
    <>
      <path d="M8 4.5h6l4 4V19a1.5 1.5 0 0 1-1.5 1.5h-8.5A1.5 1.5 0 0 1 6.5 19V6A1.5 1.5 0 0 1 8 4.5Z" />
      <path d="M14 4.5V9h4.5M9 13h6M9 16.5h4" />
    </>
  ),
  arrow: wrap(
    <>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </>
  ),
  linkedin: wrap(
    <>
      <rect x="3.5" y="3.5" width="17" height="17" rx="2.5" />
      <path d="M8 10.5V16.5M8 7.6v.1" />
      <path d="M11.5 16.5v-3.6a2 2 0 0 1 4 0v3.6" />
    </>
  ),
  phone: wrap(
    <>
      <path d="M8 3.8h3.2L12 6.5l-1.6 1.2a11 11 0 0 0 5.9 5.9L17.5 12l2.7.8V16a1.8 1.8 0 0 1-1.8 1.8A14.2 14.2 0 0 1 4.2 5.8 1.8 1.8 0 0 1 6 4H8Z" />
    </>
  ),
  mail: wrap(
    <>
      <rect x="3.5" y="5.5" width="17" height="13" rx="2" />
      <path d="m4.5 7.5 7.5 6 7.5-6" />
    </>
  ),
  pin: wrap(
    <>
      <path d="M12 21s6.5-6.1 6.5-11A6.5 6.5 0 0 0 5.5 10c0 4.9 6.5 11 6.5 11Z" />
      <circle cx="12" cy="10" r="2.2" />
    </>
  ),
  send: wrap(
    <>
      <path d="m4 11 16-7-7 16-2.2-6.8L4 11Z" />
    </>
  ),
};
