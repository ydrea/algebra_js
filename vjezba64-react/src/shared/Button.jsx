const Button = ({ children, type, isDisabled, version }) => {
  return (
    <button type={type} disabled={isDisabled} className={`btn-${version}`}>
      {children}
    </button>
  );
};

export default Button;
