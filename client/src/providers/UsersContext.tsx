import { useState, createContext, useContext, SetStateAction } from "react";
import { api } from "services/API";

// Types
type ContextValue = {
  fetchData: () => void;
  users: any;
  setUsers: any;
  message: string;
  setMessage: React.Dispatch<SetStateAction<string>>;
  createUser: (
    name: string,
    email: string,
    password: string,
    confirmPassword: string,
    setName: any,
    setEmail: any,
    setPassword: any,
    setConfirmPassword: any,
    setModalActive: any
  ) => void;
};

const DefaultValues = {
  fetchData: () => {},
  users: [],
  setUsers: () => {},
  message: "",
  setMessage: () => {},
  createUser: () => {},
};

export const UsersContext = createContext<ContextValue>(DefaultValues);

export const UsersContextProvider: React.FC = ({ children }) => {
  const [users, setUsers] = useState();
  const [message, setMessage] = useState("");

  const authToken = localStorage.getItem("auth-token");

  const fetchData = () => {
    api
      .get("/dashboard/users", {
        headers: {
          Authorization: `Baerer ${authToken}`,
        },
      })
      .then((res) => {
        setUsers(res.data.users);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const createUser = (
    name: string,
    email: string,
    password: string,
    confirmPassword: string,
    setName: (name: string) => {},
    setEmail: (email: string) => {},
    setPassword: (password: string) => {},
    setConfirmPassword: (confirmPassword: string) => {},
    setModalActive: (modalActive: boolean) => {}
  ) => {
    setMessage("");

    api
      .post("/dashboard/users/register", {
        name,
        email,
        password,
        confirmPassword,
      })
      .then((res) => {
        setMessage(res.data.message);
        setName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");

        setTimeout(() => {
          setModalActive(false);
          fetchData();
        }, 3000);
      })
      .catch((err) => {
        setMessage(err.response.data.message);
      });
  };

  const value = {
    fetchData,
    users,
    setUsers,
    message,
    setMessage,
    createUser,
  };

  return (
    <UsersContext.Provider value={value}>{children}</UsersContext.Provider>
  );
};

export const useUsersContext = () => useContext(UsersContext);
