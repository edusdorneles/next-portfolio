import { AuthContextProvider } from "./AuthContext";
import { UsersContextProvider } from "./UsersContext";

const Providers: React.FC = ({ children }) => {
  return (
    <AuthContextProvider>
      <UsersContextProvider>{children}</UsersContextProvider>
    </AuthContextProvider>
  );
};

export default Providers;
