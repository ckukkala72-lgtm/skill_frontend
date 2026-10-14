const Container = ({ children, className = "" }) => (
  <div className={`mx-auto w-full max-w-[1180px] lg:px-8 ${className}`}>
    {children}
  </div>
);

export default Container;
