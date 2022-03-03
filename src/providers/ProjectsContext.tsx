import React, {
  useState,
  createContext,
  useContext,
  SetStateAction
} from "react";

// Firebase
import {
  addDoc,
  collection,
  onSnapshot,
  deleteDoc,
  doc,
  query,
  orderBy
} from "firebase/firestore";
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
    preview
  }: Project) => void;
  deleteProject: (id: string) => void;
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
  deleteProject: () => {}
};

export const ProjectsContext = createContext<ContextValue>(DefaultValues);

export const ProjectsContextProvider: React.FC = ({ children }) => {
  const [error, setError] = useState("");
  const [modalActive, setModalActive] = useState(false);
  const [projects, setProjects] = useState<Project[] | any>([]);

  const fetchProjects = () => {
    const projectsQuery = query(
      collection(db, "projects"),
      orderBy("createdAt", "asc")
    );

    onSnapshot(projectsQuery, (document) => {
      setProjects(document.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    });
  };

  const createProject = async (project: Project) => {
    if (
      !project.title ||
      !project.initialDate ||
      !project.image ||
      !project.description ||
      !project.techs ||
      !project.github ||
      !project.preview
    ) {
      setError("Preencha todos os campos.");
    } else {
      setError("");

      // Adicionar ao Storage
      const projectImage = project.image[0];

      const projectImageRef = ref(
        storage,
        `/project-images/${projectImage.name}`
      );

      await uploadBytes(projectImageRef, projectImage);
      const projectImageUrl = await getDownloadURL(projectImageRef);

      // Adicionar ao Firestore
      await addDoc(collection(db, "projects"), {
        title: project.title,
        initialDate: project.initialDate,
        image: projectImageUrl,
        description: project.description,
        techs: project.techs,
        github: project.github,
        preview: project.preview,
        createdAt: new Date()
      });

      setModalActive(false);
    }
  };

  const deleteProject = async (id: string) => {
    await deleteDoc(doc(db, "projects", id));
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
        deleteProject
      }}
    >
      {children}
    </ProjectsContext.Provider>
  );
};

export const useProjectsContext = () => useContext(ProjectsContext);
