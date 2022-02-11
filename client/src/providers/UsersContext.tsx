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
  deleteUser: (id: number, setDeleteModalActive: any) => void;
  updateUser: (
    id: number,
    name: string,
    email: string,
    setUpdateModalActive: any
  ) => void;
};

const DefaultValues = {
  fetchData: () => {},
  users: [],
  setUsers: () => {},
  message: "",
  setMessage: () => {},
  createUser: () => {},
  deleteUser: () => {},
  updateUser: () => {},
};

export const UsersContext = createContext<ContextValue>(DefaultValues);

export const UsersContextProvider: React.FC = ({ children }) => {
  const [users, setUsers] = useState();
  const [message, setMessage] = useState("");

  const fetchData = () => {
    api
      .get("/dashboard/users")
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
          setMessage("");
          setModalActive(false);
          fetchData();
        }, 2000);
      })
      .catch((err) => {
        setMessage(err.response.data.message);
      });
  };

  const deleteUser = (
    id: number,
    setDeleteModalActive: (deleteModalActive: boolean) => {}
  ) => {
    api
      .delete(`/dashboard/users/delete/${id}`)
      .then((res) => {
        setMessage(res.data.message);

        setTimeout(() => {
          setMessage("");
          setDeleteModalActive(false);
          fetchData();
        }, 2000);
      })
      .catch((err) => {
        setMessage(err.response.data.message);
      });
  };

  const updateUser = (
    id: number,
    name: string,
    email: string,
    setUpdateModalActive: (updateModalActive: boolean) => {}
  ) => {
    api
      .put(`/dashboard/users/update/${id}`, {
        name,
        email,
      })
      .then((res) => {
        setMessage(res.data.message);

        setTimeout(() => {
          setMessage("");
          setUpdateModalActive(false);
          fetchData();
        }, 2000);
      })
      .catch((err) => {
        setMessage(err.response.data.message);
      });
  };

  return (
    <UsersContext.Provider
      value={{
        fetchData,
        users,
        setUsers,
        message,
        setMessage,
        createUser,
        deleteUser,
        updateUser,
      }}
    >
      {children}
    </UsersContext.Provider>
  );
};

export const useUsersContext = () => useContext(UsersContext);
