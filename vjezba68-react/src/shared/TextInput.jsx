const TextInput = ({ label, onChange, value, inputProps }) => {
  return (
    <>
      <label>{label}</label>
      <input onChange={onChange} value={value} {...inputProps} />
    </>
  );
};

export default TextInput;
