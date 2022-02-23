import React, {
  useState,
  createContext,
  useContext,
  SetStateAction,
} from "react";

// Firebase
import { addDoc, collection, onSnapshot } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { db, storage } from "Firebase";

// Types
type ContextValue = {
  error: string;
  setError: React.Dispatch<SetStateAction<string>>;
  modalActive: boolean;
  setModalActive: React.Dispatch<SetStateAction<boolean>>;
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
  modalActive: false,
  setModalActive: () => {},
  projects: [],
  setProjects: () => {},
  fetchProjects: () => {},
  createProject: () => {},
};

export const ProjectsContext = createContext<ContextValue>(DefaultValues);

export const ProjectsContextProvider: React.FC = ({ children }) => {
  const [error, setError] = useState("");
  const [modalActive, setModalActive] = useState(false);
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

      // Adicionar ao Storage
      const projectImage = image[0];

      const projectImageRef = ref(
        storage,
        `/project-images/${projectImage.name}`
      );

      await uploadBytes(projectImageRef, projectImage);
      const projectImageUrl = await getDownloadURL(projectImageRef);

      // Adicionar ao Firestore
      await addDoc(collection(db, "projects"), {
        title: title,
        initialDate: initialDate,
        image: projectImageUrl,
        descrition: description,
        techs: techs,
        github: github,
        preview: preview,
      });

      setModalActive(false);
    }
  };

  return (
    <ProjectsContext.Provider
      value={{
        error,
        setError,
        modalActive,
        setModalActive,
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
