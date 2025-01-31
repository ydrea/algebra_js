import { useState, useRef } from "react";

const RefPrimjer = () => {
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef(null);
  const handleClick = () => {
    const currentInputValue = inputRef.current.value;
    setInputValue(currentInputValue);
    inputRef.current.value = "";
  };

  return (
    <div>
      <input type="text" placeholder="Upiši nešto" ref={inputRef} />
      <button onClick={handleClick}>Ažuriraj vrijednost</button>
      <p>Trenutna vrijednost polja:{inputValue}</p>
    </div>
  );
};

export default RefPrimjer;
