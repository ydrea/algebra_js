import { useEffect, useState } from "react";

const IspisUsera = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchUser = async () => {
    const res = await fetch("https://api.github.com/users");
    const data = await res.json();
    setUsers(data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchUser();
  }, []);

  if (!isLoading) {
    return (
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {users.map((user) => (
          <p className="text-center">{user.login}</p>
        ))}
      </div>
    );
  } else {
    return <p>LOADING...</p>;
  }
};

export default IspisUsera;
