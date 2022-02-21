import { useState, createContext, useContext, SetStateAction } from "react";

// Firebase
import { addDoc, collection } from "firebase/firestore";
import { db } from "Firebase";

// Types
type ContextValue = {
  error: string;
  setError: React.Dispatch<SetStateAction<string>>;
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
  createProject: () => {},
};

export const ProjectsContext = createContext<ContextValue>(DefaultValues);

export const ProjectsContextProvider: React.FC = ({ children }) => {
  const [error, setError] = useState("");

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
    <ProjectsContext.Provider value={{ error, setError, createProject }}>
      {children}
    </ProjectsContext.Provider>
  );
};

export const useProjectsContext = () => useContext(ProjectsContext);
