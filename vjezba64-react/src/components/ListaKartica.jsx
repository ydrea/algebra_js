import Kartica from "./Kartica";

const ListaKartica = ({ kartica, handleDelete }) => {
  if (!kartica || kartica.length === 0) {
    return <p>Nema sadržaja</p>;
  }
  return (
    <div className="lista-kartica">
      {kartica.map((item) => (
        <Kartica key={item.id} item={item} handleDelete={handleDelete} />
      ))}
    </div>
  );
};

export default ListaKartica;
