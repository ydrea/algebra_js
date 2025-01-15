import Kartica from "./Kartica";
import { Link } from "react-router-dom";
import { useContext } from "react";
import Context from "../context/Context";
import Spinner from "../shared/Spinner";

const ListaKartica = () => {
  const { kartica, isLoading } = useContext(Context);

  if (!isLoading && (!kartica || kartica.length === 0)) {
    return <p>Nema sadržaja</p>;
  }
  return isLoading ? (
    <Spinner />
  ) : (
    <div className="lista-kartica">
      {kartica.map((item) => (
        <Kartica key={item.id} item={item} />
      ))}
      <Link to="/about">About</Link>
    </div>
  );
};

export default ListaKartica;
