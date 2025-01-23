import { FaEdit, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import Button from "../shared/Button";
import { useSelector, useDispatch } from "react-redux";
import { deleteUser } from "../redux/UserSlice";

const UserList = () => {
  const dispatch = useDispatch();
  const users = useSelector((store) => store.users);
  const removeUser = (id) => {
    dispatch(deleteUser({ id }));
  };

  const renderCard = () =>
    users.map((user) => {
      return (
        <div key={user.id}>
          <div>
            {user.ime}, {user.email}
          </div>
          <div>
            <Link to={`edit-user/${user.id}`}>
              <FaEdit />
            </Link>
            <FaTrash onClick={() => removeUser(user.id)} />
          </div>
        </div>
      );
    });

  return (
    <div>
      <div>
        <Link to="/add-user">
          <Button />
        </Link>
      </div>
      <div>{users.length ? renderCard() : <p>Nema korisnika...</p>}</div>
    </div>
  );
};

export default UserList;
