import HOC from "./HOCKlasa";

const ListUser = ({ podaci }) => {
  let filterUsers = podaci.map((user) => {
    return (
      <div key={user.id}>
        <p>{user.name}</p>
      </div>
    );
  });

  return (
    <>
      <div>{filterUsers}</div>
    </>
  );
};

const SearchUsers = HOC(ListUser, "users");
export default SearchUsers;
