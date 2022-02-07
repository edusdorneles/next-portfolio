import { useState, createContext, useContext, SetStateAction } from "react";
import { useNavigate } from "react-router-dom";

// Services
import { api } from "services/API";

// Types
type ContextValue = {
  Login: (email: string, password: string) => void;
  Logout: () => void;
  error: string;
  setError: React.Dispatch<SetStateAction<string>>;
  isAuth: boolean;
  setIsAuth: React.Dispatch<SetStateAction<boolean>>;
};

const DefaultValues = {
  Login: () => {},
  Logout: () => {},
  error: "",
  setError: () => {},
  isAuth: false,
  setIsAuth: () => {},
};

export const AuthContext = createContext<ContextValue>(DefaultValues);

export const AuthContextProvider: React.FC = ({ children }) => {
  const navigate = useNavigate();

  const [error, setError] = useState("");
  const [isAuth, setIsAuth] = useState(
    localStorage.getItem("auth-token") ? true : false
  );

  const Login = (email: string, password: string) => {
    setError("");

    api
      .post("/admin/login", {
        email: email,
        password: password,
      })
      .then((res) => {
        localStorage.setItem("user-name", res.data.userName);
        localStorage.setItem("auth-token", res.data.token);
        setIsAuth(true);
        navigate("/dashboard");
      })
      .catch((err) => {
        setError(err.response.data.message);
        setIsAuth(false);
      });
  };

  const Logout = () => {
    localStorage.clear();
    setIsAuth(false);
    navigate("/admin");
  };

  const value = {
    Login,
    Logout,
    error,
    setError,
    isAuth,
    setIsAuth,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuthContext = () => useContext(AuthContext);
