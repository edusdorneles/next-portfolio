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
};

const DefaultValues = {
  Login: () => {},
  Logout: () => {},
  error: "",
  setError: () => {},
};

export const AuthContext = createContext<ContextValue>(DefaultValues);

export const AuthContextProvider: React.FC = ({ children }) => {
  const navigate = useNavigate();

  const [error, setError] = useState("");

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
        navigate("/dashboard");
      })
      .catch((err) => {
        const error = err.response.data;
        setError(error.message);
      });
  };

  const Logout = () => {
    localStorage.clear();
    navigate("/admin");
  };

  return (
    <AuthContext.Provider value={{ Login, Logout, error, setError }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);
