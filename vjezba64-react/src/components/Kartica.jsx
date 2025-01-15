import StilKartica from "../shared/StilKartica";
import { FaTimes, FaEdit } from "react-icons/fa";
import { useContext } from "react";
import Context from "../context/Context";

const Kartica = ({ item }) => {
  const { handleDelete, editFeedback } = useContext(Context);
  const handleEdit = () => {
    editFeedback(item);
  };
  const handleClick = () => {
    handleDelete(item.id);
  };
  return (
    <StilKartica flip={false}>
      <div className="rating">{item.rating}</div>
      <div className="text-display">{item.text}</div>
      <button className="edit" onClick={handleEdit}>
        <FaEdit />
      </button>
      <button className="close-btn" onClick={handleClick}>
        <FaTimes />
      </button>
    </StilKartica>
  );
};

export default Kartica;
