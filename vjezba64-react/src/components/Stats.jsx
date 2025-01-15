import { useContext } from "react";
import Context from "../context/Context";

const Stats = () => {
  const { kartica } = useContext(Context);
  let prosjek =
    kartica.reduce((sum, currentVal) => {
      return sum + currentVal.rating;
    }, 0) / kartica.length;
  return (
    <div className="stats">
      <p>Broj kartica: {kartica.length}</p>
      <p>Prosječna ocjena: {prosjek || 0}</p>
    </div>
  );
};

export default Stats;
