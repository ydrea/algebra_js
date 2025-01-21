import { useContext, useEffect } from "react";
import GithubContext from "../context/GithubContext";
import { Link, useParams } from "react-router-dom";
import Spinner from "../shared/Spinner";

const User = () => {
  const { getUser, user, isLoading, getRepos, repos } = useContext(GithubContext);
  const { avatar_url, login, html_url, bio, name } = user;
  const params = useParams();

  useEffect(() => {
    getUser(params.login);
    getRepos(params.login);
  }, []);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <div className="w-full mx-auto lg:10/12">
        <div className="mb-4">
          <Link to="/">Nazad</Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 mb-8 md:gap-8 justify-items-center">
          <div className="mb-6">
            <h2>{name}</h2>
            <img src={avatar_url} alt={name} />
            <p>{login}</p>
          </div>

          <div className="mb-6">
            <h2>{name}</h2>
            <p>{bio}</p>
            <a href={html_url} target="_blank" className="mb-6 inline-block underline">
              Github stranica
            </a>
            <h2 className="text-3xl">Repozitoriji</h2>
            {repos.map((repo) => (
              <p key={repo.id} className="my-2">
                {repo.name}
              </p>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default User;
