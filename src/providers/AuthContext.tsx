import {
  useState,
  useEffect,
  createContext,
  useContext,
  SetStateAction,
} from "react";
import { useNavigate } from "react-router-dom";

// Firebase
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  User,
} from "firebase/auth";
import { auth } from "Firebase";

// Types
type ContextValue = {
  user: any;
  setUser: React.Dispatch<SetStateAction<any>>;
  signIn: (email: string, password: string) => void;
  error: string | null;
  setError: React.Dispatch<SetStateAction<null>>;
};

const DefaultValues = {
  user: [],
  setUser: () => {},
  error: null,
  setError: () => {},
  signIn: () => {},
};

export const AuthContext = createContext<ContextValue>(DefaultValues);

export const AuthContextProvider: React.FC = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState(null);

  const signIn = async (email: string, password: string) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/dashboard");
    } catch (err: any) {
      setError(err.message);
    }
  };

  useEffect(() => {
    const subscriber = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return subscriber;
  }, []);

  return (
    <AuthContext.Provider value={{ signIn, user, setUser, error, setError }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);
