import { createContext, useContext } from "react";

// Types
type ContextValue = {
  Login: (email: string, password: string) => void;
  Logout: () => void;
};

const DefaultValues = {
  Login: () => {},
  Logout: () => {},
};

export const AuthContext = createContext<ContextValue>(DefaultValues);

export const AuthContextProvider: React.FC = ({ children }) => {
  const Login = (email: string, password: string) => {
    console.log("Login!");
  };

  const Logout = () => {
    console.log("Logout!");
  };

  const value = { Login, Logout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuthContext = () => useContext(AuthContext);
