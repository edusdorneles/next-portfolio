import Axios from "axios";

export const api = Axios.create({
  baseURL: process.env.REACT_APP_HOST,
  headers: { "Content-Type": "application/json" },
});
