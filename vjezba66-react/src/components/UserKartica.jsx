import { Link } from "react-router-dom";

const UserKartica = ({ user }) => {
  return (
    <div className="shadow-md bg-slate-300 text-center">
      <div className="flex items-center space-x-4">
        <div>
          <img src={user.avatar_url} alt={user.login} className="h-24 w-24 rounded-full" />
        </div>
        <div>
          <h2 className="uppercase">{user.login}</h2>
          <Link to={`/user/${user.login}`} className="underline py-4 inline-block">
            Idi na profil
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserKartica;
