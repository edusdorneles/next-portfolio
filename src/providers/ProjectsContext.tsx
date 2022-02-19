import { createContext, useContext } from "react";

// Types
type ContextValue = {};

const DefaultValues = {};

export const ProjectsContext = createContext<ContextValue>(DefaultValues);

export const ProjectsContextProvider: React.FC = ({ children }) => {
  return (
    <ProjectsContext.Provider value={{}}>{children}</ProjectsContext.Provider>
  );
};

export const useProjectsContext = () => useContext(ProjectsContext);
