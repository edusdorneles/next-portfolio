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
  signOut as logout,
  User,
} from "firebase/auth";
import { auth } from "Firebase";

// Types
type ContextValue = {
  user: any;
  error: string | null;
  setError: React.Dispatch<SetStateAction<null>>;
  setUser: React.Dispatch<SetStateAction<any>>;
  signIn: (email: string, password: string) => void;
  signOut: () => void;
};

const DefaultValues = {
  user: [],
  setUser: () => {},
  error: null,
  setError: () => {},
  signIn: () => {},
  signOut: () => {},
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

  const signOut = async () => {
    try {
      await logout(auth);
    } catch (err: any) {
      console.log(err.mssage);
    }
  };

  useEffect(() => {
    const subscriber = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return subscriber;
  }, []);

  return (
    <AuthContext.Provider
      value={{ signIn, user, setUser, error, setError, signOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);
