import { useState, useContext } from "react";
import GithubContext from "../context/GithubContext";

const UserSearch = () => {
  const [text, setText] = useState("");
  const { users, fetchUsers, clearUsers } = useContext(GithubContext);
  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (text === "") {
      alert("Molimo vas unesite nešto u polje");
    } else {
      fetchUsers(text);
      setText("");
    }
  };

  return (
    <form className="flex justify-center gap-4 mb-10" onSubmit={handleSubmit}>
      <input
        type="text"
        className="w1/2 pr-2 bg-gray-500"
        placeholder="pretraži"
        value={text}
        onChange={handleChange}
      />
      <button>Pošalji</button>
      {users.length > 0 && <button onClick={clearUsers}>Resetiraj</button>}
    </form>
  );
};

export default UserSearch;
