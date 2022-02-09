import Axios from "axios";

export const api = Axios.create({
  baseURL: process.env.REACT_APP_HOST,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Baerer ${localStorage.getItem("auth-token")}`,
  },
});
