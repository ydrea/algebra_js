import { useState, useEffect, useContext } from "react";
import Context from "../context/Context";

const Rating = ({ chosen }) => {
  const { editKartica } = useContext(Context);
  const [odabrano, setOdabrano] = useState(1);

  useEffect(() => {
    setOdabrano(editKartica.kartica.rating);
  }, [editKartica]);

  const handleChange = (e) => {
    setOdabrano(+e.currentTarget.value);
    chosen(+e.currentTarget.value);
  };
  const ratings = [1, 2, 3, 4, 5];
  return (
    <ul className="ocjena">
      {ratings.map((rating) => {
        return (
          <li key={rating}>
            <label htmlFor={`broj${rating}`} className="form-control">
              <input
                type="radio"
                id={`broj${rating}`}
                name="rating"
                value={rating}
                onChange={handleChange}
                checked={odabrano === rating}
              />
              {rating}
            </label>
          </li>
        );
      })}
    </ul>
  );
};

export default Rating;
