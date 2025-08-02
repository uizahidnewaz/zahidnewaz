const Container = ({ children, className }) => {
  return <div className={`max-w-[1226px] px-2 mx-auto ${className}`}>{children}</div>;
};

export default Container;
