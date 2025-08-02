const Container = ({ children, className }) => {
  return <div className={`max-w-[1226px] px-5 md:px-6 mx-auto ${className}`}>{children}</div>;
};

export default Container;
