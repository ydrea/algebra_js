import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-gray-700 mb-12 shadow-lg text-neutral-100">
      <div className="container py-2 mx-auto flex items-center">
        <div className="px-2 mx-2">
          <FaGithub className="pr-2 text-3xl inline" />
          <Link to="/" className="text-lg font-bold align-middle">
            GitHub tražilica
          </Link>
        </div>
        <nav className="flex-1 px-2 mx-2">
          <div className="flex justify-end gap-2">
            <Link to="/">Početna</Link>
            <Link to="/about">About</Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
