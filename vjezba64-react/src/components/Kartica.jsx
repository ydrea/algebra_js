import StilKartica from "../shared/StilKartica";
import { FaTimes } from "react-icons/fa";

const Kartica = ({ item, handleDelete }) => {
  const handleClick = () => {
    handleDelete(item.id);
  };
  return (
    <StilKartica flip={false}>
      <div className="rating">{item.rating}</div>
      <div className="text-display">{item.text}</div>
      <button className="close-btn" onClick={handleClick}>
        <FaTimes />
      </button>
    </StilKartica>
  );
};

export default Kartica;
