import { createContext, useContext } from "react";

// Types
type ContextValue = {};

const DefaultValues = {};

export const UsersContext = createContext<ContextValue>(DefaultValues);

export const UsersContextProvider: React.FC = ({ children }) => {
  return <UsersContext.Provider value={{}}>{children}</UsersContext.Provider>;
};

export const useUsersContext = () => useContext(UsersContext);
