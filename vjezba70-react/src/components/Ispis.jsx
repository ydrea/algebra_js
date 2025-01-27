import { observer } from "mobx-react-lite";
import { useState } from "react";
import { FaSave, FaEdit } from "react-icons/fa";

const Ispis = ({ store }) => {
  const [editUser, setEditUser] = useState(null);
  const [newHobi, setNewHobi] = useState([]);
  const [newName, setNewName] = useState("");

  const startEditing = (userId) => {
    setEditUser(userId);
    const userToEdit = store.userInfo.find((user) => user.id === userId);
    setNewName(userToEdit.ime);
    setNewHobi(userToEdit.hobiji.join(", "));
  };

  const stopEditing = () => {
    setEditUser(null);
    setNewHobi("");
    setNewName("");
  };

  const saveChanges = (userId) => {
    store.updateUser(userId, newName);
    const newHobbies = newHobi
      .split(",")
      .map((hobi) => hobi.trim())
      .filter(Boolean);
    store.addHobi(userId, newHobbies);
  };

  const addHobi = () => {
    store.addHobi("2", "kartanje");
  };
  return (
    <div>
      <button onClick={updateUser}>Update user</button>
      <button onClick={addHobi}>Dodaj hobi</button>
      {store.userInfo.map((user) => (
        <div key={user.id}>
          <p>
            {user.ime} - {user.id}
          </p>
          {user.hobiji.map((hobi, index) => (
            <p key={index}>{hobi}</p>
          ))}
        </div>
      ))}
    </div>
  );
};

export default observer(Ispis);
