import { useState, createContext, useContext, SetStateAction } from "react";

// Firebase
import { addDoc, collection, onSnapshot } from "firebase/firestore";
import { db } from "Firebase";

// Types
type ContextValue = {
  error: string;
  setError: React.Dispatch<SetStateAction<string>>;
  projects: Project[];
  setProjects: React.Dispatch<SetStateAction<Project[]>>;
  fetchProjects: () => void;
  createProject: ({
    title,
    initialDate,
    image,
    description,
    techs,
    github,
    preview,
  }: Project) => void;
};

const DefaultValues = {
  error: "",
  setError: () => {},
  projects: [],
  setProjects: () => {},
  fetchProjects: () => {},
  createProject: () => {},
};

export const ProjectsContext = createContext<ContextValue>(DefaultValues);

export const ProjectsContextProvider: React.FC = ({ children }) => {
  const [error, setError] = useState("");
  const [projects, setProjects] = useState<Project[] | any>([]);

  const fetchProjects = () => {
    onSnapshot(collection(db, "projects"), (document) => {
      setProjects(document.docs.map((doc) => doc.data()));
    });
  };

  const createProject = async (project: Project) => {
    const { title, initialDate, image, description, techs, github, preview } =
      project;

    if (
      !title ||
      !initialDate ||
      !image ||
      !description ||
      !techs ||
      !github ||
      !preview
    ) {
      setError("Preencha todos os campos.");
    } else {
      setError("");

      const docData = {
        title: title,
        initialDate: initialDate,
        image: image,
        descrition: description,
        techs: techs,
        github: github,
        preview: preview,
      };

      await addDoc(collection(db, "projects"), docData);
    }
  };

  return (
    <ProjectsContext.Provider
      value={{
        error,
        setError,
        projects,
        setProjects,
        fetchProjects,
        createProject,
      }}
    >
      {children}
    </ProjectsContext.Provider>
  );
};

export const useProjectsContext = () => useContext(ProjectsContext);
