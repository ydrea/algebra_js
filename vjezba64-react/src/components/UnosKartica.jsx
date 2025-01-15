import { useState, useContext, useEffect } from "react";
import Context from "../context/Context";
import StilKartica from "../shared/StilKartica";
import Button from "../shared/Button";
import Rating from "./Rating";

const UnosKartica = () => {
  const { handleFeedback, editKartica, updateFeedback } = useContext(Context);
  const [text, setText] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [poruka, setPoruka] = useState("");
  const [rating, setRating] = useState(null);

  useEffect(() => {
    if (editKartica.edit === true) {
      setBtnDisabled(false);
      setText(editKartica.kartica.text);
      setRating(editKartica.kartica.rating);
    }
  }, [editKartica]);

  const handleTextChange = (e) => {
    const provjera = e.target.value;
    setText(provjera);

    if (provjera === "") {
      setBtnDisabled(true);
      setPoruka(null);
    } else if (provjera !== "" && provjera.trim().length < 6) {
      setPoruka("Mora biti barem 6 slova");
      setBtnDisabled(true);
    } else {
      setPoruka(null);
      setBtnDisabled(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newData = {
      text,
      rating,
    };

    if (editKartica.edit === true) {
      updateFeedback(editKartica.kartica.id, newData);
    } else {
      handleFeedback(newData);
    }

    setText("");
  };

  return (
    <StilKartica>
      <form action="#" onSubmit={handleSubmit}>
        <p>Molimo unesite vašu recenziju:</p>
        <Rating chosen={(rating) => setRating(rating)} />
        <div className="input-forma">
          <input type="text" placeholder="Unesite tekst" onChange={handleTextChange} value={text} />
          <Button type="submit" version="primary" isDisabled={btnDisabled}>
            Pošalji
          </Button>
        </div>
        {poruka && <div className="poruka">{poruka}</div>}
      </form>
    </StilKartica>
  );
};

export default UnosKartica;
