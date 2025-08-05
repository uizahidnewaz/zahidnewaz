const Container = ({ children, className ,ref}) => {
  return <div ref={ref?ref:null} className={`max-w-[1226px] px-5 md:px-6 mx-auto ${className}`}>{children}</div>;
};

export default Container;
