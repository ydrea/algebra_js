import { useNavigate } from "react-router-dom";
import Button from "../shared/Button";
import TextInput from "../shared/TextInput";
import { useState } from "react";
import { addUser } from "../redux/UserSlice";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";

const UserAdd = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [podaci, setPodaci] = useState({
    ime: "",
    email: "",
  });

  const handleAddUser = () => {
    setPodaci({ ime: "", email: "" });
    dispatch(
      addUser({
        id: uuidv4(),
        ime: podaci.ime,
        email: podaci.email,
      })
    );
    navigate("/");
  };

  return (
    <div>
      <TextInput
        label="ime"
        inputProps={{ type: "text", placeholder: "Ime" }}
        value={podaci.ime}
        onChange={(e) => setPodaci({ ...podaci, ime: e.target.value })}
      />
      <TextInput
        label="email"
        inputProps={{ type: "text", placeholder: "E-mail" }}
        value={podaci.email}
        onChange={(e) => setPodaci({ ...podaci, email: e.target.value })}
      />
      <Button onClick={handleAddUser} />
    </div>
  );
};

export default UserAdd;
