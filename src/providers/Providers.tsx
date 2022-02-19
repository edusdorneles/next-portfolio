import { AuthContextProvider } from "./AuthContext";
import { ProjectsContextProvider } from "./ProjectsContext";

const Providers: React.FC = ({ children }) => {
  return (
    <AuthContextProvider>
      <ProjectsContextProvider>{children}</ProjectsContextProvider>
    </AuthContextProvider>
  );
};

export default Providers;
