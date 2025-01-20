import { createContext, useReducer } from "react";
import githubReducer from "./GithubReducer";

const GithubContext = createContext();

export const GithubProvider = ({ children }) => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    isLoading: false,
  };

  const [state, dispatch] = useReducer(githubReducer, initialState);

  const fetchUsers = async (text) => {
    setLoading();
    const res = await fetch(`https://api.github.com/search/users?q=${text}`);
    const { items } = await res.json();
    dispatch({
      type: "GET_USERS",
      users: items,
    });
  };

  const getUser = async (login) => {
    setLoading();
    const res = await fetch(`https://api.github.com/users/${login}`);
    const data = await res.json();
    dispatch({
      type: "GET_USER",
      data: data,
    });
  };

  const getRepos = async (login) => {
    setLoading();
    const res = await fetch(`https://api.github.com/users/${login}/repos`);
    const data = await res.json();
    dispatch({
      type: "GET_REPOS",
      data: data,
    });
  };

  const clearUsers = () => {
    dispatch({
      type: "CLEAR_USERS",
    });
  };

  const setLoading = () => {
    dispatch({
      type: "SET_LOADING",
    });
  };

  return (
    <GithubContext.Provider
      value={{
        fetchUsers,
        clearUsers,
        getUser,
        users: state.users,
        user: state.user,
        repos: state.repos,
        isLoading: state.isLoading,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
