import { observer } from "mobx-react-lite";
import PrikazIspisa from "./PrikazIspisa";

const Ispis = ({ store }) => {
  return (
    <div>
      {store.userInfo.map((user) => (
        <PrikazIspisa key={user.id} user={user} store={store} />
      ))}
    </div>
  );
};

export default observer(Ispis);
