const StilKartica = ({ children, flip }) => {
  return <div className={`card ${flip && "flip"}`}>{children}</div>;
};

StilKartica.defaultProps = {
  flip: true,
};

export default StilKartica;
