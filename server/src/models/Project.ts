import { model, Schema } from "mongoose";

interface Project {
  title: string;
  description: string;
  image: string;
  initialDate: string;
  techs: string;
  github: string;
  preview: string;
}

const schema = new Schema<Project>({
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  initialDate: { type: String, required: true },
  techs: { type: String, required: true },
  github: { type: String, required: true },
  preview: { type: String, required: true },
});

const Project = model<Project>("Project", schema);

export default Project;
